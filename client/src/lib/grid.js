export function generateGridData() {
    let now = new Date()
    let yearAgo = new Date();
    yearAgo.setFullYear(yearAgo.getFullYear() - 1)
    
    now.getMonth() // gets month in number form. e.g. January is 0
    now.getDate() // gets day of the month in number form. e.g. The first is 1
    now.getDay() // gets day of the week in number form. e.g. Sunday is 0

    let currentDate = yearAgo
    let nextDate = new Date(yearAgo)

    const monthKey = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dayKey = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let data = []
    while(currentDate <= now) {
        nextDate.setDate(nextDate.getDate() + 1)

        currentDate.setDate(currentDate.getDate() + 1)

        // this keeps the last day in the list from being the next future day in realt time
        if(currentDate <= now){
            data.push({
                day: currentDate.getDay(),
                dayName: dayKey[currentDate.getDay()],
                date: currentDate.getDate(),
                month: currentDate.getMonth(),
                monthName: monthKey[currentDate.getMonth()],
                year: currentDate.getFullYear(),
                progress: Math.random()
            })
        }
    }
    return data
}