import React, {useState} from 'react'

export default function HabitGridCell({ progress, date, day, dayName, month, monthName, year }) {
    const [tooltipVisible, setTooltipVisible] = useState(false)

    const containerStyle = { opacity: progress }
    const tooltipStyle = { visibility : tooltipVisible ?  'visible' : 'hidden' }

    const handleMouseOver = () => {
        setTooltipVisible(true)
    }

    const handleMouseOut = () => {
        setTooltipVisible(false)
    } 

    return (
        <>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className={`relative w-5 h-5 bg-t-primary dark:bg-dt-primary m-1 rounded`} style={containerStyle}>
                {/* tooltip for info on the specific day */}
                <div className={`opacity-100 absolute bg-db-primary p-2 rounded`} style={tooltipStyle}>
                    <p className='opacity-100'>{dayName}, {monthName} {date}, {year}</p>
                </div>
            </div>
        </>
    )
}