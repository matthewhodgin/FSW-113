// This script should return the results of a function that use data from the api to determine whether it 
// is daylight in the specified city. It should return "blue" if daylight, and "black" if night time.

export default function getDaylight(sunrise, sunset, localTime){
    const dt = new Date()
    let color = "blue"
    if (localTime < sunrise || localTime > sunset)color = "black"
        return color

}
