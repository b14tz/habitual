import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../lib/firebase";

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
            <div className="flex flex-col bg-white dark:bg-black p-10 rounded-lg">
                <h1 className="text-purple-1 m-auto mb-6">Amplo</h1>
                <input
                    type="text"
                    className="p-2 mb-4 rounded-md bg-white-1 dark:bg-black-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Display Name"
                />
                <input
                    type="text"
                    className="p-2 mb-4 rounded-md bg-white-1 dark:bg-black-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                />
                <input
                    type="password"
                    className="p-2 mb-4 rounded-md bg-white-1 dark:bg-black-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className="bg-purple-1 text-white mb-2 drop-shadow-md py-2 rounded-md" onClick={register}>
                    <p>Register</p>
                </button>
                <div className="flex items-center mb-2">
                    <hr className="flex-grow border-t border-gray-400"/>
                    <span className="px-4 text-gray-500">
                        <p>or</p>
                    </span>
                    <hr className="flex-grow border-t border-gray-400"/>
                </div>
                <button
                    className="bg-white-1 text-black mb-4 drop-shadow-md py-2 rounded-md"
                    onClick={signInWithGoogle}
                >
                    <p>Register with Google</p>
                    
                </button>
                <div>
                    <p>Already have an account? <Link to="/login" className="text-purple-1">Login here</Link></p>
                </div>
            </div>
        </div>
    );
}
