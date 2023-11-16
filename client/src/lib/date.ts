export function getCurrentDate() {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric", year: "numeric" };
    return currentDate.toLocaleDateString("en-US", options);
}

export function formatDate(timestamp: Timestamp) {
    if (timestamp) {
        const milliseconds = timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6;
        const date = new Date(milliseconds);
        const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
    }
}
