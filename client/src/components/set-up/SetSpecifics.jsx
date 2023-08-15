import React, { useEffect, useState, useRef } from 'react'

export default function SetSpecifics({ habits, setHabits, page, setPage, handleFinishSetup }) {
    const [selectedColor, setSelectedColor] = useState('#000000')
    const [goalUnit, setGoalUnit] = useState("")
    const [goalNumber, setGoalNumber] = useState(0)
    const [colorPopup, setColorPopup] = useState(null)


    // the reference and useEffect are used to handle the closing of the color picker
    let popupRef = useRef()
    useEffect(() => {
        let handler = (e) => {
            if(popupRef.current && !popupRef.current.contains(e.target)){
                setColorPopup(null)
            }
        }
        document.addEventListener('mousedown', handler)
        return() => {
            document.removeEventListener('mousedown', handler)
        }
    })

    const handleSelectedColor = (index, event) => {
        console.log(event.target.classList[0])
        let updatedHabits = habits
        updatedHabits[index].color = event.target.classList[0]
        setHabits(updatedHabits)
        //event.target.value = updatedHabits[index].color
    }

    const handleGoalUnit = (index) => {
        let updatedHabits = habits
        updatedHabits[index].goalUnit = goalUnit
        setHabits(updatedHabits)
    }

    const handleGoalNumber = (index) => {
        let updatedHabits = habits
        updatedHabits[index].goalNumber = goalNumber
        setHabits(updatedHabits)
    }

    function renderHabits() {
        return Object.keys(habits).map((index) => {
          if (habits[index]) {
            return ( 
                <div key={index}>
                    <h3>{habits[index].title}</h3>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center">
                            <input
                                className='p-2 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary w-[4ch] mr-2'
                                type="text"
                                placeholder='45'
                                value={habits[index].goalNumber}
                                onChange={(event) => {
                                    let newGoalNumber = event.target.value
                                    let updatedHabits = habits
                                    updatedHabits[index].goalNumber = newGoalNumber
                                    setHabits(updatedHabits)
                                }}
                            />
                            <input
                                className='p-2 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary w-[8ch] mr-2'
                                type="text"
                                placeholder='minutes'
                                value={habits[index].goalUnit}
                                onChange={(event) => {
                                    let newGoalUnit = event.target.value
                                    let updatedHabits = habits
                                    updatedHabits[index].goalUnit = newGoalUnit
                                    setHabits(updatedHabits)
                                }}

                            />
                            <p>a day</p>
                        </div>
                        <button 
                            className="bg-red-1 ml-4 rounded-full border-b-tertiary dark:border-db-tertiary border-[4px] h-[30px] w-[30px]"
                            onClick={() => setColorPopup(prevState => { 
                                    if(prevState == index){
                                        return null
                                    }
                                    return index 
                                })}
                            />
                        {
                            colorPopup == index?
                            <div ref={popupRef} className="absolute left-[101%] px-2 bg-b-secondary drop-shadow dark:bg-db-secondary rounded-md p-2">
                                <div className="flex flex-row">
                                    <button className="bg-red-1 m-1 rounded-full h-[20px] w-[20px]" onClick={(event) => handleSelectedColor(index, event)}></button>
                                    <button className="bg-orange-1 m-1 rounded-full h-[20px] w-[20px]"></button>
                                    <button className="bg-yellow-1 m-1 rounded-full h-[20px] w-[20px]"></button>
                                </div>
                                <div className="flex flex-row">
                                    <button className="bg-green-1 m-1 rounded-full h-[20px] w-[20px]"></button>
                                    <button className="bg-blue-1 m-1 rounded-full h-[20px] w-[20px]"></button>
                                    <button className="bg-purple-1 m-1 rounded-full h-[20px] w-[20px]"></button>
                                </div>
                                <div className="flex flex-row">
                                    <button className="bg-pink-1 m-1 rounded-full h-[20px] w-[20px]"></button>
                                    <button className="bg-brown-1 m-1 rounded-full h-[20px] w-[20px]"></button>
                                    <button className="bg-grey-1 m-1 rounded-full h-[20px] w-[20px]"></button>
                                </div>
                            </div>
                            :
                            null
                        }
                    </div>
                    {/* <div className="mt-2 flex flex-row items-center">
                        <p className="mr-4">Select a color:</p>
                        <input
                            type="color"
                            className="rounded w-[30px]"
                            value={habits[index].color == '' ? '#ffffff' : habits[index].color} 
                            onChange={(event) => {
                                let color = event.target.value
                                setSelectedColor(color);
                            }}
                            onBlur={(event) => handleSelectedColor(index, event)}
                        />
                    </div> */}
                    {index != habits.length - 1 ? <hr className="mt-2"/> : ""}
                </div>
            );
          } else {
            return null;
          }
        });
    }


    return (
        <div className="flex flex-col min-w-[300px]">
            <h2>Set Specifics</h2>
            <div className="my-4">
                {renderHabits()}
            </div>
            <div className="flex flex-row items-center justify-end">
                <button className="mr-4" onClick={() => {setPage(page - 1)}}>
                <p>Back</p>
                </button>
                <button className="bg-purple-1 text-white drop-shadow-md py-2 px-4 rounded-md" onClick={() => handleFinishSetup()}>
                    <p>Complete Setup</p>
                </button>
            </div>
        </div>
    )
}
