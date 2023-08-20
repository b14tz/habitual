import React from 'react'
import ColorPicker from '../ColorPicker'

export default function SetSpecifics({ habits, setHabits, specificError }) {

    const handleColorChange = (index, event) => {
        const newColor = event.target.value
        const updatedHabits = [...habits]
        updatedHabits[index] = { ...updatedHabits[index], color:newColor}
        setHabits(updatedHabits)
        //event.target.value = updatedHabits[index].color
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
                                autoFocus={index == 0 ? true : false}
                                className='p-2 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary w-[4ch] mr-2'
                                type="text"
                                placeholder='45'
                                value={habits[index].goalNumber}
                                onChange={(event) => {
                                    const newGoalNumber = event.target.value
                                    const updatedHabits = [...habits]
                                    updatedHabits[index] = { ...updatedHabits[index], goalNumber: newGoalNumber }
                                    setHabits(updatedHabits)
                                }}
                            />
                            <input
                                className='p-2 rounded-md shadow-inner bg-b-tertiary dark:bg-db-tertiary w-[8ch] mr-2'
                                type="text"
                                placeholder='minutes'
                                value={habits[index].goalUnit}
                                onChange={(event) => {
                                    const newGoalUnit = event.target.value
                                    const updatedHabits = [...habits]
                                    updatedHabits[index] = { ...updatedHabits[index], goalUnit:newGoalUnit}
                                    setHabits(updatedHabits)
                                }}

                            />
                            <p>a day</p>
                        </div>
                        <ColorPicker index={index} color={habits[index].color} handleColorChange={handleColorChange}/>
                    </div>
                    {
                        specificError.index == index?
                        <p className="m-2 text-sm text-t-error">{specificError.message}</p>
                        :
                        null
                    }
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
            <div className="my-6">
                {renderHabits()}
            </div>
        </div>
    )
}
