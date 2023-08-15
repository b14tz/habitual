import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import SetHabits from '../components/setUp/SetHabits'
import SetSpecifics from '../components/setUp/SetSpecifics';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../lib/firebase";
import SetRegistrationDetails from "../components/setUp/SetRegistrationDetails";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading] = useAuthState(auth);
    const [habits, setHabits] = useState([])
    const [page, setPage] = useState(0)
    const navigate = useNavigate()

    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };

    const handleFinishSetup = () => {
        console.log(habits)
        return
        register()
    }

    const pages = [ 
        <SetRegistrationDetails page={page} setPage={setPage} name={name} setName={setName} setEmail={setEmail} password={password} setPassword={setPassword} signInWithGoogle={signInWithGoogle}/>,
        <SetHabits page={page} setPage={setPage} habits={habits} setHabits={setHabits}/>, 
        <SetSpecifics page={page} setPage={setPage} habits={habits} setHabits={setHabits} handleFinishSetup={handleFinishSetup}/>
    ]

    useEffect(() => {
      if (loading) return;
      if (user) navigate("/");
    }, [user, loading]);

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="flex flex-col bg-b-secondary dark:bg-db-secondary p-10 rounded-lg drop-shadow-md">
                {pages[page]}
            </div>
        </div>
    );
}
