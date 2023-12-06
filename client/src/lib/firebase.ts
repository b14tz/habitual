import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, doc, setDoc } from "firebase/firestore";
import { handleError } from "./error";

// Web Firebase Configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Authentication initilization and reference
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Google Authentication Logic
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "User"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await setDoc(doc(db, "User", user.uid), {
                name: user.displayName,
                authProvider: "google",
                email: user.email,
                isSetup: false,
                uid: user.uid,
            });
        }
        return {
            name: user.displayName,
            isSetup: false,
            habits: [],
            color: "red",
        };
    } catch (err) {
        handleError(err);
    }
};

export const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        return {
            name: "test",
            isSetup: false,
            habits: [],
            color: "red",
        };
    } catch (err) {
        handleError(err);
    }
};

export const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await setDoc(doc(db, "User", user.uid), {
            name: name,
            authProvider: "local",
            email: email,
            isSetup: false,
            uid: user.uid,
        });
        return {
            name: user.displayName,
            isSetup: false,
            habits: [],
            color: "red",
        };
    } catch (err) {
        handleError(err);
    }
};

export const sendPasswordReset = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        handleError(err);
    }
};

export const logout = () => {
    signOut(auth);
};
