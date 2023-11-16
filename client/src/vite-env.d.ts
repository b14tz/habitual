/// <reference types="vite/client" />

interface User {
    name: string;
    isSetup: boolean;
    habits: Habits[];
}

interface Habit {
    title: string;
    active: boolean;
    color: string;
    dateCreated: Date;
    goalNumber: number;
    goalUnit: string;
    user: User;
}

interface GridCell {
    color: string;
    date: Date;
    day: number;
    dayName;
    month;
    monthName;
    year;
    progress;
    bg;
    ph: boolean;
}

interface Timestamp {
    seconds: number;
    nanoseconds: number;
}
