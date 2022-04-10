// declare any necessary variables

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'

function getFromSWAPI(queryType, itemID) {
    console.log(queryType, itemID)
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        console.log(data)
        updateInfo(queryType, data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}

function fetchData() {
    var select = document.getElementById("queryType").value
    var input = document.getElementById("itemID").value
    console.log(select, input)
    getFromSWAPI(select, input)
}

function updateInfo(queryType, data) {
    var dataLabel1 = document.getElementById("dataLabel1")
    var dataValue1 = document.getElementById("dataValue1")
    var dataLabel2 = document.getElementById("dataLabel2")
    var dataValue2 = document.getElementById("dataValue2")
    if(queryType === 'people'){
        dataLabel1.textContent = 'Name'
        dataValue1.textContent = data.name
        dataLabel2.textContent = 'Eye Color'
        dataValue2.textContent = data.eye_color

    } else if(queryType === 'planets'){
        dataLabel1.textContent = 'Name'
        dataValue1.textContent = data.name
        dataLabel2.textContent = 'Climate'
        dataValue2.textContent = data.climate

    } else {
        dataLabel1.textContent = 'Name'
        dataValue1.textContent = data.name
        dataLabel2.textContent = 'Starship Class'
        dataValue2.textContent = data.starship_class
}
}


// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.