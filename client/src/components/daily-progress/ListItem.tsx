import { MouseEvent, useState } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export default function ListItem({
    i,
    id,
    title,
    color,
    goalNumber,
    goalUnit,
    status,
    toggleCompletion,
    handleEditPopup,
    handleDeletePopup,
}: {
    i: number;
    id: number;
    title: string;
    color: string;
    goalNumber: number;
    goalUnit: string;
    status: boolean;
    toggleCompletion: (i: number) => void;
    handleEditPopup: (
        i: number,
        id: number,
        title: string,
        color: string,
        goalNumber: number,
        goalUnit: string
    ) => void;
    handleDeletePopup: (i: number, id: number) => void;
}) {
    const [completionStatus, setCompletionStatus] = useState(status);
    const [popup, setPopup] = useState(false);

    const toggleCompleteTask = (event: MouseEvent<HTMLButtonElement>) => {
        toggleCompletion(i);
        setCompletionStatus(!completionStatus);
        let classes = `rounded-full h-4 w-4 mr-2 `;
        event.currentTarget.className = completionStatus
            ? classes + `bg-b-primary dark:bg-db-primary border-2 border-t-primary dark:border-dt-primary`
            : classes + `bg-t-primary dark:bg-dt-primary`;
    };

    // const handleClickOutside = () => {
    //   console.log("is the menu open? ", popup)

    // if the button or the popup wasn't hit, close it
    //   setPopup(false)
    // }

    return (
        <>
            <div
                className={`bg-b-secondary dark:bg-db-secondary flex flex-row relative justify-between w-full drop-shadow px-2 py-1 rounded-md my-2`}
            >
                <div className="flex flex-row items-center space-x-2">
                    <div className="flex flex-row items-center py-1">
                        <button
                            id="button"
                            className={
                                "rounded-full h-4 w-4 mr-2" +
                                (completionStatus
                                    ? " bg-t-primary dark:bg-dt-primary "
                                    : " border-2 border-t-primary dark:border-dt-primary")
                            }
                            onClick={toggleCompleteTask}
                        />
                        <p className="ml-2 mr-4 text-t-primary dark:text-dt-primary">{title}</p>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <button className="">-</button>
                        <p>
                            0/{goalNumber} {goalUnit}
                        </p>
                        <button className="">+</button>
                    </div>
                </div>

                <button onClick={() => setPopup((prev) => !prev)}>
                    <EllipsisHorizontalIcon className="h-6 w-6 text-t-primary dark:text-dt-primary" />
                </button>
                {popup ? (
                    <div className="absolute left-[101%] p-2 bg-b-secondary drop-shadow dark:bg-db-secondary rounded-md z-[200]">
                        <button onClick={() => handleEditPopup(i, id, title, color, goalNumber, goalUnit)}>
                            <p className="text-t-primary dark:text-dt-primary">Edit</p>
                        </button>
                        <button onClick={() => handleDeletePopup(i, id)}>
                            <p className="text-t-primary dark:text-dt-primary">Delete</p>
                        </button>
                    </div>
                ) : null}
            </div>
        </>
    );
}
