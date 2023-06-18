import { React } from 'react'
import { getCurrentDate } from '../lib/date';
import { UserIcon } from "@heroicons/react/24/solid";
import { SunIcon, MoonIcon, Cog6ToothIcon as SettingsIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/20/solid";
import { useNavigate } from 'react-router-dom';

export default function Nav(props) {
    const navigate = useNavigate();

    const displayTaskProgress = () => {
        let done = 0
        let total = props.habits.length
        for (let i = 0; i < total; i += 1){
            if(props.habits[i].status) done += 1
        }
        return `${done}/${total} Daily Tasks Complete`
    }

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 flex flex-row place-content-between items-start p-10">
                {
                    props.loginStatus?
                    <div className="flex flex-col items-start">
                        <p>Howdy, {props.name}</p>
                    </div>
                    :
                    <UserIcon className="h- w-6 text-black-1 dark:text-white-1"/>
                }
                <p>{getCurrentDate()}</p>
                <p>{displayTaskProgress()}</p>
                <div>
                    <button
                        onClick={props.toggleDarkMode} 
                        
                    >
                        {
                            props.darkMode ?
                            <MoonIcon className="h-6 w-6 text-black-1 dark:text-white-1"/>
                            :
                            <SunIcon className="h-6 w-6 text-black-1 dark:text-white-1"/>
                        }
                    </button>
                    {
                        props.loginStatus?
                        <div>
                            <button
                                onClick={() => navigate("/")}
                                className="ml-4"
                            >
                                <HomeIcon className="h-6 w-6 text-black-1 dark:text-white-1"/>
                            </button>
                            <button
                                onClick={() => navigate("/")}
                                className="ml-4"
                            >
                                <SettingsIcon className="h-6 w-6 text-black-1 dark:text-white-1"/>
                            </button>
                        </div>
                        :
                        null
                    }

                </div>
            </nav>
        </>
    )
}