import React from 'react'

export default function HabitGridCell(props) {
    const classes = `w-5 h-5 bg-black-1 dark:bg-white-1 m-1 opacity-[${props.progress}]`
    return (
        <>
            <div className={classes}></div>
        </>
    )
}
