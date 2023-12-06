import { useState } from "react";
import ListItem from "./ListItem";
import { PlusIcon } from "@heroicons/react/24/outline";
import AddHabitModal from "../modals/AddHabitModal";
import EditHabitModal from "../modals/EditHabitModal";
import DeleteHabitModal from "../modals/DeleteHabitModal";

export default function CheckList({ habits, setHabits, name, toggleCompletion }) {
    const [addModal, setAddModal] = useState<boolean>(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [id, setId] = useState<number | null>(null);
    const [editValues, setEditValues] = useState({});

    function handleEditPopup(index, id, title, color, goalNumber, goalUnit) {
        const newEditValues = {
            title: title,
            color: color,
            goalNumber: goalNumber,
            goalUnit: goalUnit,
        };
        setId(id);
        setEditValues(newEditValues);
        setCurrentIndex(index);
        setEditModal(true);
    }

    function handleDeletePopup(index: number, id: number) {
        setId(id);
        setCurrentIndex(index);
        setDeleteModal(true);
    }

    function renderListItems() {
        return Object.keys(habits).map((i) => {
            return (
                <ListItem
                    key={i}
                    i={i}
                    {...habits[i]}
                    toggleCompletion={toggleCompletion}
                    handleEditPopup={handleEditPopup}
                    handleDeletePopup={handleDeletePopup}
                />
            );
        });
    }

    return (
        <div className="relative flex flex-col mr-3 w-full z-[20]">
            <h3 className="whitespace-nowrap text-t-primary dark:text-dt-primary">{name}'s Tasks For Today</h3>
            {renderListItems()}
            <button
                className="flex justify-between w-full bg-b-secondary dark:bg-db-secondary drop-shadow px-2 rounded-md my-2"
                onClick={() => setAddModal((prev) => !prev)}
            >
                <PlusIcon className="h-9 w-9 m-auto py-2 text-t-primary dark:text-dt-primary" />
            </button>
            <AddHabitModal open={addModal} setOpen={setAddModal} setHabits={setHabits} />
            <EditHabitModal
                open={editModal}
                setOpen={setEditModal}
                setHabits={setHabits}
                {...editValues}
                i={currentIndex}
                id={id}
            />
            <DeleteHabitModal
                open={deleteModal}
                setOpen={setDeleteModal}
                setHabits={setHabits}
                i={currentIndex}
                id={id}
            />
        </div>
    );
}
