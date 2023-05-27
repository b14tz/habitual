import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase"
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function AuthModal(props) {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [passwordConfirmed, setPasswordConfirmed] = useState("")
const [hasAccount, setHasAccount] = useState(false)

const handleLogin = () => {
    console.log("put login logic here")
}

const handleSignUp = () => {
    console.log("put signup logic here")
}


  return props.trigger ? (
    <>
    <div className="fixed top-0 left-0 flex w-full h-full justify-center items-center bg-black/[.30]">
        <div className='min-w-[500px] min-h-[250px] rounded-md bg-white-2 dark:bg-black-2 z-50 flex flex-col justify-center items-center p-4'>
            <div className="w-[90%] flex flex-row justify-between items-center">
                <h2 className='text-3xl'>{ hasAccount ? "Log in" : "Sign Up" }</h2>
                <button className="drop-shadow-md rounded-full"
                    onClick={() => props.setTrigger(false)}>
                    <XMarkIcon className="h-10 w-10 bg-white-1 dark:bg-black-1 rounded-full p-2 text-black dark:text-white-1" />
                </button>
            </div>
            <form className="w-[90%] flex flex-col text-base my-6" onSubmit={handleLogin}>
                { hasAccount ? null : <input className="mb-3 bg-transparent hover:bg-transparent border-b-2 border-black-1 dark:border-white-1 focus:outline-none" label="name" type="text" placeholder='whatever you want to go by'></input> }
                <input className="mb-3 bg-transparent hover:bg-transparent border-b-2 border-black-1 dark:border-white-1 focus:outline-none" label="email" type="email" placeholder='email'></input>
                <input className="mb-3 bg-transparent hover:bg-transparent border-b-2 border-black-1 dark:border-white-1 focus:outline-none" label="password" type="password" placeholder='password'></input>
                { hasAccount ? null : <input className="mb-3 bg-transparent hover:bg-transparent border-b-2 border-black-1 dark:border-white-1 focus:outline-none" label="password-confirmed" type="password" placeholder='password confirmed'></input> }
            </form>
            {
                hasAccount ?
                <div className="w-[90%] flex flex-row justify-between">
                    <button onClick={() => setHasAccount(false)}>
                        <h4 className="text-base underline">Don't have an account? Sign up here.</h4>
                    </button>
                    <button className="bg-white-1 dark:bg-black-1 drop-shadow-md py-2 px-4 rounded-md"
                        onClick={handleLogin}>
                        <h4 className="text-base">Log in</h4>
                    </button>
                </div>
                :
                <div className="w-[90%] flex flex-row justify-between">
                    <button onClick={() => setHasAccount(true)}>
                        <h4 className="text-base underline">Already have an account? Log in here.</h4>
                    </button>
                    <button className="bg-white-1 dark:bg-black-1 drop-shadow-md py-2 px-4 rounded-md"
                        onClick={handleSignUp}>
                        <h4 className="text-base">Sign Up</h4>
                    </button>
                </div>
            }
        </div>
    </div>
    </>
  ) : null
}
