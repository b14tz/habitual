import React from 'react'
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Nav(props) {
    return (
        <nav className="flex flex-row place-content-between items-center w-full p-10">
            <h4>hello, marshall</h4>
            <button
                onClick={props.toggleDarkMode} 
                className="self-left justify-self-end p-2 rounded-full" 
            >
                {
                    props.darkMode ?
                    <MoonIcon className="h-6 w-6 text-gray-500"/>
                    :
                    <SunIcon className="h-6 w-6 text-gray-500"/>
                }
            </button>
    
        </nav>
    )
}