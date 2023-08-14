import React, {useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) navigate("/");
    }, [user, loading]);
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="flex flex-col bg-white dark:bg-black p-10 rounded-lg">
                <h1 className="text-purple-1 m-auto mb-6">Amplo</h1>
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
                <button
                    className="bg-purple-1 text-white mb-2 drop-shadow-md py-2 rounded-md"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                >
                    <p>Login</p>
                </button>
                <div className="flex items-center mb-2">
                    <hr className="flex-grow border-t border-gray-400"/>
                    <span className="px-4 text-gray-500">
                        <p>or</p>
                    </span>
                    <hr className="flex-grow border-t border-gray-400"/>
                </div>
                <button className="bg-white-1 text-black mb-2 drop-shadow-md py-2 rounded-md" onClick={signInWithGoogle}>
                    <p>Login with Google</p>
                </button>
                <Link to="/reset" className="text-grey-123 self-end mb-4">
                    <p className="text-grey-123 text-sm">Forgot Password</p>
                </Link>
                <p>Don't have an account? <Link to="/register" className="text-purple-1">Register now</Link></p>
            </div>
        </div>
    );
}
