import React, { useRef, useState, useEffect } from "react";

export default function ColorPicker({ index, color, handleColorChange }) {
    const [open, setOpen] = useState(false);

    // the reference and useEffect are used to handle the closing of the color picker
    let popupRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

    return (
        <div ref={popupRef}>
            <button
                type="button"
                label="color-picker-btn"
                className={`${color} ml-4 rounded-full border-b-tertiary dark:border-db-tertiary border-[4px] h-[30px] w-[30px] relative`}
                onClick={() => setOpen(!open)}
            />
            {open ? (
                <div className="absolute left-[280px] mt-[-65px] px-2 bg-b-secondary drop-shadow dark:bg-db-secondary rounded-md p-2">
                    <div className="flex flex-row">
                        <button
                            type="button"
                            value="bg-red-1"
                            className="bg-red-1 m-1 rounded-full h-[20px] w-[20px]"
                            onClick={(event) => handleColorChange(index, event)}
                        ></button>
                        <button
                            type="button"
                            value="bg-orange-1"
                            className="bg-orange-1 m-1 rounded-full h-[20px] w-[20px]"
                            onClick={(event) => handleColorChange(index, event)}
                        ></button>
                        <button
                            type="button"
                            value="bg-yellow-1"
                            className="bg-yellow-1 m-1 rounded-full h-[20px] w-[20px]"
                            onClick={(event) => handleColorChange(index, event)}
                        ></button>
                    </div>
                    <div className="flex flex-row">
                        <button
                            type="button"
                            value="bg-green-1"
                            className="bg-green-1 m-1 rounded-full h-[20px] w-[20px]"
                            onClick={(event) => handleColorChange(index, event)}
                        ></button>
                        <button
                            type="button"
                            value="bg-blue-1"
                            className="bg-blue-1 m-1 rounded-full h-[20px] w-[20px]"
                            onClick={(event) => handleColorChange(index, event)}
                        ></button>
                        <button
                            type="button"
                            value="bg-purple-1"
                            className="bg-purple-1 m-1 rounded-full h-[20px] w-[20px]"
                            onClick={(event) => handleColorChange(index, event)}
                        ></button>
                    </div>
                    <div className="flex flex-row">
                        <button
                            type="button"
                            value="bg-pink-1"
                            className="bg-pink-1 m-1 rounded-full h-[20px] w-[20px]"
                            onClick={(event) => handleColorChange(index, event)}
                        ></button>
                        <button
                            type="button"
                            value="bg-brown-1"
                            className="bg-brown-1 m-1 rounded-full h-[20px] w-[20px]"
                            onClick={(event) => handleColorChange(index, event)}
                        ></button>
                        <button
                            type="button"
                            value="bg-grey-1"
                            className="bg-grey-1 m-1 rounded-full h-[20px] w-[20px]"
                            onClick={(event) => handleColorChange(index, event)}
                        ></button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
