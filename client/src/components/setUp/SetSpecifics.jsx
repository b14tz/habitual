import React, { useState } from 'react'

export default function SetSpecifics({ habits, setHabits }) {
    const [selectedColor, setSelectedColor] = useState('#000000')
    const [goalUnit, setGoalUnit] = useState("")
    const [goalNumber, setGoalNumber] = useState(0)

    const handleSelectedColor = (index, event) => {
        let updatedHabits = habits
        updatedHabits[index].color = selectedColor
        setHabits(updatedHabits)
        event.target.value = updatedHabits[index].color
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
              <div key={index} className={`flex flex-col ${index != 0 ? 'mt-8' : ''}`}>
                <h3>{habits[index].title}</h3>
                <div className="flex flex-row">
                    <input
                        className='placeholder:text-gray-1 dark:placeholder:text-gray-500 font-semibold input-text focus:outline-none border-b-2 bg-transparent border-black-1 dark:border-white-1 placeholder:text-black-3 mb-2 w-[3ch] mr-4'
                        type="text"
                        placeholder='45'
                        onChange={(event) => {
                            setGoalNumber(event.target.value)
                        }}
                        onBlur={() => handleGoalNumber(index)}
                    />
                    <input
                        className='placeholder:text-gray-1 dark:placeholder:text-gray-500 font-semibold input-text focus:outline-none border-b-2 bg-transparent border-black-1 dark:border-white-1 placeholder:text-black-3 mb-2 w-[8ch] mr-4'
                        type="text"
                        placeholder='minutes'
                        onChange={(event) => {
                            setGoalUnit(event.target.value)
                        }}
                        onBlur={() => handleGoalUnit(index)}
                    />
                    <h3>a day</h3>
                </div>
                <div className="flex flex-row items-center">
                    <h3 className="mr-4">Select a color:</h3>
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
                </div>
              </div>
            );
          } else {
            return null;
          }
        });
    }


    return (
        <div className="flex flex-col">
            <h2>Set Specifics</h2>
            {renderHabits()}
        </div>
    )
}
