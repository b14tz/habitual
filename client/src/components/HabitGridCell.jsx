import React from 'react'

export default function HabitGridCell(props) {
    const divStyle = {
        opacity: props.progress
    }
    return (
        <>
            <div className={`w-5 h-5 bg-black-1 dark:bg-white-1 m-1`} style={divStyle}></div>
        </>
    )
}
