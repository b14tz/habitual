/// <reference types="vite/client" />

interface User {
    name: string;
    isSetup: boolean;
    habits: Habits[];
    color: string;
}

interface Habit {
    title: string;
    active: boolean;
    color: string;
    dateCreated: Date;
    goalNumber: number;
    goalUnit: string;
    user: User;
    id: string;
    userId: string;
}

interface GridCell {
    rgb: number[];
    date: string;
    progress: number;
    ph: boolean;
}

interface Timestamp {
    seconds: number;
    nanoseconds: number;
}

interface SignupForm {
    displayName: string;
    email: string;
    password: string;
    googleAuth: boolean;
}

interface LoginForm {
    email: string;
    password: string;
    googleAuth: boolean;
}
