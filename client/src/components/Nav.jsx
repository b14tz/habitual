import { React, useEffect, useState} from 'react'
import { getCurrentDate } from '../lib/date';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal'
import { UserIcon } from "@heroicons/react/24/outline";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';

export default function Nav(props) {
    const [menuOpen, setMenuOpen] = useState(false)

    const { logout, setError } = useAuth();
    const navigate = useNavigate();

    const displayTaskProgress = () => {
        let done = 0
        let total = props.habits.length
        for (let i = 0; i < total; i += 1){
            if(props.habits[i].status) done += 1
        }
        return `${done}/${total} Daily Tasks Complete`
    }

    const handleSignOut = async () => {
        try {
            setError("")
            await logout()
        }
        catch {
            setError("Failed to logout")
        }
        navigate("/")
        window.location.reload()
    }

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 flex flex-row place-content-between items-start p-10">
                {
                    props.loginStatus?
                    <div className="flex flex-col items-start" onMouseOver={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)}>
                        {
                            menuOpen?
                            <>
                                <div className='flex flex-row items-center'>
                                    <p>Howdy, {props.name}</p>
                                    <ChevronDownIcon className="h-6 w-6 text-black-1 dark:text-white-1" />
                                </div>
                                <button onClick={handleSignOut}>
                                    <p>Sign out</p>
                                </button>
                            </>
                            :
                            <>
                                <div className='flex flex-row items-center'>
                                <p>Howdy, {props.name}</p>
                                <ChevronLeftIcon className="h-6 w-6 text-black-1 dark:text-white-1" />
                                </div>
                            </>
                        }
                    </div>
                    :
                    <button
                        onClick={() => props.setAuthModal(true)}>
                        <UserIcon className="h- w-6 text-black-1 dark:text-white-1"/>
                    </button>

                }
                <p>{getCurrentDate()}</p>
                <p>{displayTaskProgress()}</p>
                <button
                    onClick={props.toggleDarkMode} 
                    className="self-left justify-self-end" 
                >
                    {
                        props.darkMode ?
                        <MoonIcon className="h-6 w-6 text-black-1 dark:text-white-1"/>
                        :
                        <SunIcon className="h-6 w-6 text-black-1 dark:text-white-1"/>
                    }
                </button>
            </nav>
            <AuthModal trigger={props.authModal} setTrigger={props.setAuthModal} setName={props.setName} setMenuOpen={setMenuOpen}/>
        </>
    )
}