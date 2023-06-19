import { React } from 'react'
import { getCurrentDate } from '../lib/date';
import { SunIcon, MoonIcon, Cog6ToothIcon as SettingsIconSolid } from "@heroicons/react/24/solid";
import { SunIcon as SunIconOutline, MoonIcon as MoonIconOutline, Cog6ToothIcon as SettingsIconOutline } from "@heroicons/react/24/outline";
import { HomeIcon as HomeIconSolid} from "@heroicons/react/20/solid";
import { HomeIcon as HomeIconOutline } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';

export default function Nav(props) {
    const navigate = useNavigate();

    // const displayTaskProgress = () => {
    //     let done = 0
    //     let total = props.habits.length
    //     for (let i = 0; i < total; i += 1){
    //         if(props.habits[i].status) done += 1
    //     }
    //     return `${done}/${total} Daily Tasks Complete`
    // }

    return (
        <>
            <nav>
                {
                    //props.loginStatus?
                    true?
                    <div className="fixed top-0 left-0 right-0 flex flex-row place-content-between items-start p-10">
                        <button
                            onClick={() => {navigate("/account")}}
                            className="ml-4"
                        >
                            <SettingsIconSolid className="h-6 w-6 text-black-1 dark:text-white-1"/>
                        </button>
                        <button
                            onClick={() => {navigate("/")}}
                            className="ml-4"
                        >
                            <HomeIconOutline className="h-6 w-6 text-black-1 dark:text-white-1"/>
                        </button>
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
                    </div>
                    :
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
                }

            </nav>
        </>
    )
}