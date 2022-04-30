// import the convertTemp.js and getDaylight.js scripts with their default export
import convertTemp from './convertTemp.js'

import getDaylight from './getDaylight.js'


// declare any variables needed

let data, type

// create an event listener for the click of the goBttn that calls a function to fetch the weather data

document.querySelector('#goBttn').addEventListener("click", function(){getWeatherdata()})

// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        

function getWeatherdata(){
    type = document.querySelector('#city').value
        getFromWEATHER()
    .then(function(data) {
        updateInfo(data)
    })
    .catch(function(err) {
        console.log(err)
    })
}

// use an asynchronous call to fetch the current weather for the specified city, awaits it, 
// and returns the resulting data


const getFromWEATHER = async() => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${type}&appid=e0c9baf289a11a22914affafa0c27951`)
    data = await response.json()
    return data
}


// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city

function updateInfo(data){
    document.querySelector('#tempData').innerText = convertTemp(data.sys.country, data.main.temp)
    document.querySelector('#humidData').innerText = (data.main.humidity)
    document.querySelector('#conditionsData').innerText = (data.weather[0].main)
    document.querySelector('.weatherWrapper').style.backgroundColor = getDaylight(data.sys.sunrise, data.sys.sunset, data.dt)
}