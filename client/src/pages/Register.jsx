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
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
      if (!name) alert("Please enter name");
      registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
      if (loading) return;
      if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <div className="flex flex-col">
          <input
            type="text"
            className=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
          <input
            type="text"
            className=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <input
            type="password"
            className=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="bg-white-1 dark:bg-black-1 drop-shadow-md py-2 px-4 rounded-md" onClick={register}>
            Register
          </button>
          <button
            className="bg-white-1 dark:bg-black-1 drop-shadow-md py-2 px-4 rounded-md"
            onClick={signInWithGoogle}
          >
            Register with Google
          </button>
          <div>
            Already have an account? <Link to="/login">Login</Link> now.
          </div>
        </div>
      </div>
    );
}
