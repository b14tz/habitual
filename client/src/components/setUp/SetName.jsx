import React from 'react'

export default function SetName({ name, setName, page, setPage }) {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          if(name != ""){
            setPage(page + 1)
          }
          else {
            // throw error for no name entry
          }
        }
    };

    return (
        <div className="flex flex-col">
            <h2>Set Name</h2>
            <input 
                id="text-input"
                className='placeholder:text-gray-1 dark:placeholder:text-gray-500 font-semibold input-text nfocus:outline-none border-b-2 bg-transparent border-black-1 dark:border-white-1 placeholder:text-black-3 mb-2 w-[22ch]'
                type="text"
                placeholder="Whatever you'd like to go by"
                onKeyDown={handleKeyPress}  
                value={name} 
                onChange={(event) => setName(event.target.value)}
            />
        </div>
    )
}
