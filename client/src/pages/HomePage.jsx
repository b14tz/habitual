import React from "react";
import HabitGrid from "../components/chart/HabitGrid";
import CheckList from "../components/daily-progress/CheckList";
import ProgressCircle from "../components/daily-progress/ProgressCircle";

export default function HomePage({
    habits,
    setHabits,
    name,
    toggleCompletion,
    darkMode,
}) {
    return (
        <div className="flex flex-col m-auto w-[80%] items-center mt-[20px] mb-20">
            <h2>Dashboard</h2>
            <div className="flex flex-row w-full">
                <CheckList
                    habits={habits}
                    setHabits={setHabits}
                    name={name}
                    toggleCompletion={toggleCompletion}
                />
                <ProgressCircle habits={habits} darkMode={darkMode} />
            </div>
            <div className="px-6 py-4 mt-6 w-full rounded drop-shadow bg-b-secondary dark:bg-db-secondary">
                <h3 className="ml-1 mb-2">Consistency Chart</h3>
                <HabitGrid />
            </div>
        </div>
    );
}
