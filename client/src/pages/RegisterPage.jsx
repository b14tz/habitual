import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    auth,
    registerWithEmailAndPassword, // registerWithEmailAndPassword(name, email, password)
    signInWithGoogle,
} from "../lib/firebase";
import googleLogo from "../assets/google.png";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();
        registerWithEmailAndPassword(name, email, password);
    }

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
    }, [user, loading]);

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="flex flex-col bg-b-secondary dark:bg-db-secondary p-10 rounded-lg drop-shadow-md">
                <form className="flex flex-col" onSubmit={onSubmit}>
                    <h1 className="text-purple-1 m-auto mb-6">Amplo</h1>
                    <input
                        autoFocus
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
                    <button className="bg-purple-1 text-white mb-2 drop-shadow-md py-2 rounded-md">
                        <p>Register</p>
                    </button>
                </form>

                <div className="flex items-center mb-2">
                    <hr className="flex-grow border-t-tertiary" />
                    <span className="px-4 text-t-tertiary">
                        <p>or</p>
                    </span>
                    <hr className="flex-grow border-t-tertiary" />
                </div>
                <button
                    type="button"
                    className="bg-b-tertiary text-black mb-2 drop-shadow-md py-2 rounded-md flex flex-row justify-center items-center"
                    onClick={signInWithGoogle}
                >
                    <img src={googleLogo} className="w-7 mr-2" />
                    <p>Register with Google</p>
                </button>
                <div className="mt-4">
                    <p>
                        Already have an account?{" "}
                        <Link to="/login" className="text-purple-1">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
