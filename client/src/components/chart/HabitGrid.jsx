import React, { useRef } from "react";
import HabitGridCell from "./HabitGridCell";
import { generateGridData } from "../../lib/grid";
import { getRgbColor } from "../../lib/color";

export default function HabitGrid(chartColor) {
    const scrollableRef = useRef(null);

    function scrollToRight() {
        if (scrollableRef.current) {
            const scrollableContainer = scrollableRef.current;
            scrollableContainer.scrollLeft = scrollableContainer.scrollWidth - scrollableContainer.clientWidth;
        }
    }
    scrollToRight();

    function renderGrid() {
        let data = generateGridData();
        //get color of grid here
        let color = getRgbColor(chartColor.chartColor);
        return data.map((item, index) => <HabitGridCell key={index} {...item} color={color} />);
    }

    return (
        <>
            <div
                ref={scrollableRef}
                className="flex flex-col flex-wrap h-[300px] overflow-x-scroll relative pt-[100px] mt-[-100px]"
            >
                {renderGrid()}
            </div>
        </>
    );
}
