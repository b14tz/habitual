export function getCurrentDate() {
    const currentDate = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };
    return currentDate.toLocaleDateString("en-US", options);
}

export function formatDate(firestoreTimestamp) {
    if (firestoreTimestamp) {
        const date = firestoreTimestamp.toDate();
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
    }
}
