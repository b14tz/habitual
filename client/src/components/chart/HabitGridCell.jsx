import React from 'react'

export default function HabitGridCell({ progress }) {
    const divStyle = {
        opacity: progress
    }
    return (
        <>
            <div className={`w-5 h-5 bg-t-primary dark:bg-dt-primary m-1 rounded`} style={divStyle}></div>
        </>
    )
}