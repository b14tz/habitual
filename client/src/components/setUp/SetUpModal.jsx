import React, { useState } from 'react'
import { XMarkIcon } from "@heroicons/react/24/outline";


export default function SetUpModal(props) {

    return props.trigger ? (
        <>
        <div className="z-50 fixed top-0 left-0 flex w-full h-full justify-center items-center bg-black/[.30]">
            <div className='min-w-[500px] min-h-[250px] rounded-md bg-white-2 dark:bg-black-2 flex flex-col justify-center items-center p-4'>
                
            </div>
        </div>
        </>
    ) : null
}
