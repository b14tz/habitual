import React, { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import SetHabits from "../components/set-up/SetHabits";
import SetSpecifics from "../components/set-up/SetSpecifics";
import { useMultistepForm } from "../hooks/useMultistepForm";
import { finishSetup, getUserData } from "../interfaces/userInterface";
import CircularProgress from "@mui/material/CircularProgress";

// FORM FIELDS
// habits : []
//  -- name
//  -- goalNumber
//  -- goalUnit
//  -- color

export default function SetupPage({ habits, setHabits }) {
    const [data, setData] = useState([]);
    const [user, loading] = useAuthState(auth);
    // const [habits, setHabits] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const [habitError, setHabitError] = useState("");
    const [specificError, setSpecificError] = useState({
        message: "",
        index: null,
    });

    const { step, currentStepIndex, next, back, isLastStep, isFirstStep } = useMultistepForm([
        <SetHabits
            {...data}
            habits={habits}
            setHabits={setHabits}
            habitError={habitError}
            setHabitError={setHabitError}
        />,
        <SetSpecifics {...data} habits={habits} setHabits={setHabits} specificError={specificError} />,
    ]);

    // if a user is setup and they end up on this route, redirect to "/"
    useEffect(() => {
        if (loading) {
            setIsLoading(true); // Start loading
            return;
        }

        if (user) {
            getUserData(user.uid)
                .then((data) => {
                    if (data.isSetup) {
                        navigate("/");
                    } else {
                        setIsLoading(false); // Loading complete
                    }
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                    setIsLoading(false); // Loading complete, handle error gracefully
                });
        } else {
            setIsLoading(false); // Loading complete, user not logged in
        }
    }, [user, loading]);

    async function onSubmit(e) {
        e.preventDefault();

        if (!isLastStep) {
            // makes sure they set habits before they can move onto the set specifics page
            if (habits.length === 0) {
                setHabitError("You must track at least one habit");
                return;
            }

            next(); // Advance to the next step
        } else {
            let flag = true;
            for (const index in habits) {
                if (!habits[index].goalUnit || !habits[index].goalNumber) {
                    let temp = {};
                    temp.message = "You must set a goal number and unit for each habit";
                    temp.index = index;
                    setSpecificError(temp);
                    flag = false;
                    return;
                }
            }
            if (flag) {
                setSpecificError({
                    message: "",
                    index: null,
                });
            }

            const finishCallback = () => {
                navigate("/");
            };

            await finishSetup(user.uid, habits, finishCallback);
        }
    }

    return (
        <div className="flex justify-center items-center w-full h-screen">
            {isLoading ? (
                <CircularProgress />
            ) : (
                <form
                    className="flex flex-col bg-b-secondary dark:bg-db-secondary p-10 rounded-lg drop-shadow-md"
                    onSubmit={onSubmit}
                >
                    {step}
                    <div className="flex flex-row items-center justify-end">
                        {!isFirstStep && (
                            <button className="mr-4" type="button" onClick={back}>
                                <p>Back</p>
                            </button>
                        )}
                        <button type="submit" className="bg-purple-1 text-white drop-shadow-md py-2 px-4 rounded-md">
                            <p>{isLastStep ? "Complete Setup" : "Set Specifics"}</p>
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
