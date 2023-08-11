import React from 'react'

export default function SetName({ name, setName, pageCount, setPageCount }) {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          if(name != ""){
            setPageCount(pageCount + 1)
          }
          else {
            // throw error for no name entry
          }
        }
    };

    return (
        <>
            <h1 className='text-6xl text-center '>What would you like to go by?</h1>
            <input 
                id="text-input"
                className='placeholder:text-gray-1 dark:placeholder:text-gray-500 text-5xl font-semibold input-text text-center focus:outline-none border-b-2 bg-transparent border-black-1 dark:border-white-1 placeholder:text-black-3 mb-2 w-[20ch]'
                type="text"
                placeholder='enter a display name here'
                onKeyDown={handleKeyPress}  
                value={name} 
                onChange={(event) => setName(event.target.value)}
            />
        </>
    )
}
