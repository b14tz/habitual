import { useRef } from "react";
import HabitGridCell from "./HabitGridCell";
import { generateGridData } from "../../lib/grid";
import { getRgbColor } from "../../lib/color";

export default function HabitGrid({ chartColor }: { chartColor: string }) {
    const scrollableRef = useRef<HTMLDivElement | null>(null);

    function scrollToRight() {
        if (scrollableRef.current) {
            const scrollableContainer = scrollableRef.current;
            scrollableContainer.scrollLeft = scrollableContainer.scrollWidth - scrollableContainer.clientWidth;
        }
    }
    scrollToRight();

    function renderGrid() {
        let data = generateGridData();
        let rgb = getRgbColor(chartColor);
        return data.map((item, index) => <HabitGridCell key={index} {...item} rgb={rgb} />);
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
