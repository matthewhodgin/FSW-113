// Call the "getSystems()" function in such a way that when the page loads, the "system" select element displays the three sytems 
// whose parentID is zero.

getSystems(0, document.querySelector("#system"))

function getSystems(parentID, displayData) {
    // This function will accept two arguments (see week three): the parentID and the DOM element that will ultimately receive the data. 
    // Code this function as an asynchronous operation that will fetch data from the data.json file (see week three).
    // After receiving the JSON data, the asynchronous promise should use a higher order array method (see week two) to return only 
    // those items from the JSON that have the matching parentID. That promise should then call a function that passes two parameters, 
    // this new array and the DOM element to the "populateDD" function (below).

    // Note that although a number being passed as a parameter into a function may look like a numeral, it may be a string value 
    // instead, and may need to be converted to an integer. 

        fetch(`data.json`)
        .then(function (response) {
            return response.json()
        })
        .then(function(data){
        const things = data.systems.filter((item2)=> {
            return item2.parentID === parseInt(parentID)
        })      
        populateDD(things, displayData)
        })
        .catch(function(err) {
            console.warn(err)
        })
}

function populateDD(things, displayData) {
    // This function receives the array and DOM element from the "getSystems()" function (above). This function should fill the 
    // appropriate DOM element with options from which the user can select. However, since that DOM element has an "onChange" event, this
    // function first needs to add an option that says "Select an Item". Then use a looping mechanism (week one) to create the rest of  
    // the select element's options using the sysName and sysID from the passed in array (see week five).
    
    displayData.options[0] = new Option("Select an Item", -1)

    for (let x = 0; x < things.length; x++) {
        displayData.options[x+1] = new Option(things[x].sysName, things[x].sysID)
}
}

document.querySelector('#system').addEventListener("change", function(){
    const sysID = document.querySelector('#system').value
    getSystems(sysID, document.querySelector('#subSystem'))
}

    // This eventListener responds to a change to the "system" select element by passing the selected value from the "system" element 
    // to the "getSystems()" function along with the "subSystem" DOM element so that the second drop-down list is populated with the 
    // appropriate sub-systems from the data.json file.
    
)