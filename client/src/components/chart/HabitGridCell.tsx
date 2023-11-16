import { useState } from "react";

export default function HabitGridCell({ color, date, day, dayName, month, monthName, year, progress, bg, ph }) {
    const [tooltipVisible, setTooltipVisible] = useState(false);

    const cellStyle = {
        backgroundColor: `rgba(${111}, ${111}, ${111}, ${progress})`,
        visibility: ph ? "hidden" : "visible",
    };

    const tooltipStyle = {
        visibility: tooltipVisible ? "visible" : "hidden",
        bottom: "150%", // Position the tooltip above the parent
        left: "50%", // Adjust as needed
        transform: "translateX(-50%)", // Center horizontally
    };

    const handleMouseOver = () => {
        setTooltipVisible(true);
    };

    const handleMouseOut = () => {
        setTooltipVisible(false);
    };

    return (
        <>
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className={`${bg} relative w-4 h-4 m-1 rounded`}
                style={cellStyle}
            >
                {/* tooltip for info on the specific day */}
                <div
                    className={`z-10 absolute bg-b-primary dark:bg-db-primary drop-shadow p-2 rounded min-w-[130px] flex flex-col items-center`}
                    style={tooltipStyle}
                >
                    <div>
                        <p className="text-xs">
                            {dayName} {monthName}-{date}-{year}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
