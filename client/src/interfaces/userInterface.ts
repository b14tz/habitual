import { db } from "../lib/firebase";
import { doc, setDoc, getDoc, collection, query, where, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { addHabit } from "./habitInterface";
import { handleError } from "../lib/error";

export const createUser = async (uid: string, name: string, email: string) => {
    if (uid === "" || name === "" || email === "") {
        console.error("uid, name, or email is not set");
        return;
    }
    try {
        await setDoc(doc(db, "User", uid), {
            name: name,
            email: email,
            date: new Date(),
            color: "red",
        });
    } catch (err) {
        handleError(err);
    }
};

export const getUserData = async (uid: string) => {
    if (uid === "") {
        console.error("uid is not set");
        return;
    }
    const userDoc = doc(db, "User", uid);
    const userDocSnap = await getDoc(userDoc);
    if (userDocSnap.exists()) {
        let data = userDocSnap.data();
        return data;
    } else {
        console.log("No user data found");
        return;
    }
};

export const editUserData = async (uid: string, user: Partial<User>) => {
    if (!uid || !user) {
        console.error("uid or user data is not set");
        return;
    }
    try {
        const userDoc = doc(db, "User", uid);
        await updateDoc(userDoc, { ...user });
    } catch (err) {
        console.error("Error updating user:");
        handleError(err);
    }
};

export const deleteUserData = async (uid: string) => {
    try {
        const habitRef = collection(db, "Habit");
        const q = query(habitRef, where("userId", "==", uid));
        const querySnapshot = await getDocs(q);

        const deletePromises = querySnapshot.docs.map(async (doc) => {
            await deleteDoc(doc.ref);
        });

        await Promise.all(deletePromises);

        const userDoc = doc(db, "User", uid);
        await deleteDoc(userDoc);
    } catch (err) {
        console.error("Error deleting user data:");
        handleError(err);
    }
};

export const finishSetup = async (uid: string, habits: Habit[], finishCallback: () => void) => {
    if (!uid || !habits) {
        console.error("Error: uid or habits are not set");
        return;
    }
    try {
        for (const habit of habits) {
            const { title, goalUnit, goalNumber, color } = habit;
            try {
                await addHabit(uid, title, goalUnit, goalNumber, color);
                console.log(`Habit added: ${title}`);
            } catch (error) {
                console.error(`Error adding habit (${title}):`, error);
            }
        }
        const userDoc = doc(db, "User", uid);
        await updateDoc(userDoc, { isSetup: true });
        finishCallback();
        console.log("isSetup updated successfully");
    } catch (err) {
        console.error("An error occurred during setup:");
        handleError(err);
    }
};
