import { React, useState} from 'react'
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { getCurrentDate } from '../lib/date';
import { UserIcon } from "@heroicons/react/24/outline";
import AuthModal from './AuthModal'

export default function Nav(props) {
    const [authModal, setAuthModal] = useState(false)

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
            <nav className="flex flex-row place-content-between items-center w-full p-10">
                {/* <h4>Howdy, Marshall</h4> */}
                <button
                    onClick={() => setAuthModal(true)}>
                    <UserIcon className="h-6 w-6 text-black-1 dark:text-white-1"/>
                </button>
                <h4>{getCurrentDate()}</h4>
                <h4>{displayTaskProgress()}</h4>
                <button
                    onClick={props.toggleDarkMode} 
                    className="self-left justify-self-end p-2 rounded-full" 
                >
                    {
                        props.darkMode ?
                        <MoonIcon className="h-6 w-6 text-black-1 dark:text-white-1"/>
                        :
                        <SunIcon className="h-6 w-6 text-black-1 dark:text-white-1"/>
                    }
                </button>
            </nav>
            <AuthModal trigger={authModal} setTrigger={setAuthModal}/>
        </>
    )
}