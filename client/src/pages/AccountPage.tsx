import { useState, useEffect, MouseEvent } from "react";
import HabitGrid from "../components/chart/HabitGrid";
import { logout } from "../lib/firebase";
import ColorPicker from "../components/ColorPicker";
import { auth } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getUserHabits } from "../interfaces/habitInterface";
import { formatDate } from "../lib/date";
import DeleteAccountModal from "../components/modals/DeleteAccountModal";
import ChangeNameModal from "../components/modals/ChangeNameModal";
import { getTailwindColor } from "../lib/color";

export default function AccountPage({
    name,
    setName,
    mainChartColor,
    setMainChartColor,
}: {
    name: string;
    setName: () => void;
    mainChartColor: string;
    setMainChartColor: () => void;
}) {
    const [allHabits, setAllHabits] = useState<Habit[]>([]);
    const [currentHabit, setCurrentHabit] = useState();
    const [changeNamePopup, setChangeNamePopup] = useState(false);
    const [deleteAccountPopup, setDeleteAccountPopup] = useState(false);
    const [user] = useAuthState(auth);

    useEffect(() => {
        async function getAllHabits() {
            const habits = await getUserHabits(user.uid);
            setAllHabits(habits);
            setCurrentHabit(habits[0]);
        }
        getAllHabits();
    }, [user]);

    function handleColorChange(_, event) {
        setMainChartColor(event.target.value);
    }

    function renderHabitOptions() {
        return allHabits.map((habit, index) => {
            return (
                <option key={index} value={index}>
                    {habit.title}
                </option>
            );
        });
    }

    function handleSelectChange(e: MouseEvent<HTMLSelectElement>) {
        const index = e.currentTarget.value;
        console.log(allHabits[index]);
        setCurrentHabit(allHabits[index]);
    }

    function renderEndDate() {
        if (currentHabit?.retiredDate) {
            let retiredDate = currentHabit.retiredDate;
            return formatDate(retiredDate);
        }
        return "Not Applicable";
    }

    return (
        <div className="flex flex-col m-auto w-[80%] h-screen items-center mt-[20px]">
            <h2>Account</h2>
            <div className="flex flex-row w-full min-h-[50px]">
                <div className="mr-3 px-6 py-4 w-[50%] min-w-[300px] rounded drop-shadow bg-b-secondary dark:bg-db-secondary space-y-1">
                    <div className="flex flex-row items-center">
                        <h3>Habit History</h3>
                        <select
                            onChange={handleSelectChange}
                            className="px-2 py-1 ml-8 rounded-lg bg-b-tertiary dark:bg-db-tertiary"
                        >
                            {renderHabitOptions()}
                        </select>
                    </div>
                    <p>Start Date: {formatDate(currentHabit?.dateCreated)}</p>
                    <p>Made Progress: 1/1 Days (100%)</p>
                    <p>Reached Goal: 1/1 Days (100%)</p>
                    <p>End Date: {renderEndDate()}</p>
                </div>

                <div className="ml-3 pb-4 w-[50%] min-w-[300px] rounded drop-shadow bg-b-secondary dark:bg-db-secondary">
                    <div className="flex flex-col pt-4 px-6 space-y-1">
                        <h3>Settings</h3>
                        <div className="flex flex-row items-center relative">
                            <p>Main Chart Color:</p>
                            <ColorPicker
                                color={getTailwindColor(mainChartColor)}
                                handleColorChange={handleColorChange}
                            />
                        </div>
                        <button className="w-fit" onClick={() => setChangeNamePopup(true)}>
                            <p>Change Display Name</p>
                        </button>
                        <button className="w-fit" onClick={() => setDeleteAccountPopup(true)}>
                            <p>Delete Account</p>
                        </button>
                        <button
                            className="w-fit"
                            onClick={() => {
                                logout();
                            }}
                        >
                            <p>Logout</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="px-6 py-4 mt-6 w-full rounded drop-shadow bg-b-secondary dark:bg-db-secondary">
                <h3 className="ml-1 mb-2">{currentHabit?.title} Chart</h3>
                <HabitGrid chartColor={"blue"} />
            </div>
            <DeleteAccountModal open={deleteAccountPopup} setOpen={setDeleteAccountPopup} />
            <ChangeNameModal open={changeNamePopup} setOpen={setChangeNamePopup} name={name} setName={setName} />
        </div>
    );
}
