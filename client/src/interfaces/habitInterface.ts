import { handleError } from "../lib/error";
import { db } from "../lib/firebase";
import { doc, collection, query, where, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

export const getUserHabits = async (uid: string) => {
    if (uid === "") {
        console.error("uid is not set");
        return;
    }
    const habitRef = collection(db, "Habit");
    const q = query(habitRef, where("userId", "==", uid));
    const querySnapshot = await getDocs(q);
    const habits: any[] = [];
    querySnapshot.forEach((doc) => {
        habits.push(doc.data());
    });
    return habits;
};

export const getUserCurrentHabits = async (uid: string) => {
    if (uid === "") {
        console.error("uid is not set");
        return;
    }
    const habitRef = collection(db, "Habit");
    const q = query(habitRef, where("userId", "==", uid), where("active", "==", true));
    const querySnapshot = await getDocs(q);
    const habits: any[] = [];
    querySnapshot.forEach((doc) => {
        habits.push(doc.data());
    });
    return habits;
};

export const addHabit = async (uid: string, title: string, goalUnit: string, goalNumber: number, color: string) => {
    if (uid === "") {
        console.error("uid is not set");
        return;
    }
    const docRef = await addDoc(collection(db, "Habit"), {
        color: color,
        title: title,
        goalNumber: goalNumber,
        goalUnit: goalUnit,
        active: true,
        dateCreated: new Date(),
        userId: uid,
    });
    await updateDoc(docRef, {
        id: docRef.id,
    });
};

export const editHabit = async (habitId: string, habit: Partial<Habit>) => {
    if (!habitId || !habit) {
        console.error("habit id or habit is not set");
        return;
    }
    try {
        const habitDoc = doc(db, "Habit", habitId);
        await updateDoc(habitDoc, { ...habit });
    } catch (e) {
        console.error("Error updating habit: ", e);
    }
};

export const deleteHabit = async (habitId: string) => {
    if (!habitId) {
        console.error("habit id is not set");
        return;
    }
    try {
        const habitDoc = doc(db, "Habit", habitId);
        await deleteDoc(habitDoc);
    } catch (err) {
        console.error("Error deleting habit:");
        handleError(err);
    }
};
