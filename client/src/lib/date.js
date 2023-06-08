export function getCurrentDate(){
    const currentDate = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
}