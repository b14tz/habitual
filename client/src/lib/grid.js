export function generateGridData() {
    let endDate = new Date()
    let startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 1)
    startDate.setDate(startDate.getDate() + 1)
    
    endDate.getMonth() // gets month in number form. e.g. January is 0
    endDate.getDate() // gets day of the month in number form. e.g. The first is 1
    endDate.getDay() // gets day of the week in number form. e.g. Sunday is 0

    function isSameDate(date1, date2) {
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    }

    let currentDate = new Date(startDate)

    const monthKey = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dayKey = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let data = [] // returnable array for calendar data
    let ph = false // placeholder for gaps in calendar

    while(currentDate <= endDate) {
        if(isSameDate(currentDate, startDate)) {
            let spaces = currentDate.getDay()
            if(spaces > 0){
                for(let i=0; i<spaces; i++){
                    data.push({
                        day: null,
                        dayName: null,
                        date: null,
                        month: null,
                        monthName: null,
                        year: null,
                        progress: null,
                        ph: true
                    })
                }
            }
        }
        else if (!isSameDate(currentDate, endDate) && currentDate.getDate() == 1) {
            let spaces = 14
            for(let i=0; i<spaces; i++){
                data.push({
                    day: null,
                    dayName: null,
                    date: null,
                    month: null,
                    monthName: null,
                    year: null,
                    progress: null,
                    ph: true
                })
            }
        }


        let progress = Math.random() // retrieve progress for each day here
        let color = 'red-1' // retrieve currently set color here
        let bg = 'bg-'.concat(color)
 
        data.push({
            day: currentDate.getDay(),
            dayName: dayKey[currentDate.getDay()],
            date: currentDate.getDate(),
            month: currentDate.getMonth(),
            monthName: monthKey[currentDate.getMonth()],
            year: currentDate.getFullYear(),
            progress: progress,
            bg: bg,
            ph: false
        })

        currentDate.setDate(currentDate.getDate() + 1)
    }


    return data
}