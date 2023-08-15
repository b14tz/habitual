import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../lib/firebase";
import googleLogo from '../assets/google.png'

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()
    const register = () => {
      if (!name) alert("Please enter name");
      registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
      if (loading) return;
      if (user) navigate("/");
    }, [user, loading]);
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="flex flex-col bg-b-secondary dark:bg-db-secondary p-10 rounded-lg">
                <h1 className="text-purple-1 m-auto mb-6">Amplo</h1>
                <input
                    type="text"
                    className="p-2 mb-4 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Display Name"
                />
                <input
                    type="text"
                    className="p-2 mb-4 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                />
                <input
                    type="password"
                    className="p-2 mb-4 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className="bg-purple-1 text-white mb-2 drop-shadow-md py-2 rounded-md" onClick={register}>
                    <p>Register</p>
                </button>
                <div className="flex items-center mb-2">
                    <hr className="flex-grow border-t-tertiary"/>
                    <span className="px-4 text-t-tertiary">
                        <p>or</p>
                    </span>
                    <hr className="flex-grow border-t-tertiary"/>
                </div>
                <button
                    className="bg-b-tertiary text-black mb-2 drop-shadow-md py-2 rounded-md flex flex-row justify-center items-center"
                    onClick={signInWithGoogle}
                >
                    <img src={googleLogo} className="w-7 mr-2"/>
                    <p>Register with Google</p>
                </button>
                <div className="mt-4">
                    <p>Already have an account? <Link to="/login" className="text-purple-1">Login here</Link></p>
                </div>
            </div>
        </div>
    );
}
