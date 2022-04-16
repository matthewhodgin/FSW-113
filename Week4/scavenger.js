// Create an event listenter for the 'submit' button that calls the combineLists() function

// Modify the combineLists() function to create arrays from each scavenger hunt element in the scavenger.html document. 
// Then use the spread operator to combine these arrays into a single array. 
// Sort that array and display it in the 'AllItems' element on the scavenger.html document.

document.querySelector('#submit').addEventListener(
    'click', function() {combineLists()})

function combineLists() {
    const per1 = document.querySelector('#scavenger-0').value.split(',')
    const per2 = document.querySelector('#scavenger-1').value.split(',')
    const per3 = document.querySelector('#scavenger-2').value.split(',')
    const per4 = document.querySelector('#scavenger-3').value.split(',')
    const perAll = [...per1, ...per2, ...per3, ...per4]
    perAll.sort()
    document.querySelector('#AllItems').innerText = perAll.join(', ')
}

// The following code is a bonus addition that facilitates data entry on the scavenger.html document.
// If you first click in one of the textareas, you can then click scavenger hunt items in the unordered
// list. The value of that will be added to the appropriate textarea along with any necessary commas.

let objTargetText 
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) {
    var source = getEventTarget(event)
    if (!objTargetText.innerHTML)
        objTargetText.innerHTML = source.innerHTML
    else
        objTargetText.innerHTML += ',' + source.innerHTML
}

function getEventTarget(e) {
    e = e || window.event
    return e.target || e.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}