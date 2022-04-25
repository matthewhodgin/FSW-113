const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 }, //Special Packaging Required
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12}, //Take basket, go directly to H1
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12}, //Take basket, go directly to H1
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2}, //Get Gloves
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12}, //Take basket, go directly to H1
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12}, //Take basket, go directly to H1
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty: 3}, //Special Packaging Required
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12}, //Take basket, go directly to H1
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12}, //Take basket, go directly to H1
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24}, //Take basket, go directly to H1
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}
]

// list of each part number and qty for check-off in the "detailsList" element

var partsSelector = document.querySelector("#detailsList")
parts.forEach((partNbr) => {
    partsSelector.innerHTML += `<input type = "checkbox"> ${partNbr.partNbr} : ${partNbr.qty}</input> <br/>`
});

// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element

const specialPackaging = parts.filter((checkAisle)=> {return checkAisle.aisle==="B3"});
if(specialPackaging.length > 0){
document.querySelector("#specialPackaging").innerHTML += specialPackaging.map((item)=> `<br/>  Item: ${item.partNbr} / Qty: ${item.qty}`)
}
else {document.querySelector("#specialPackaging").remove()
}

// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element

const isHazardous = parts.find((checkAisle) => checkAisle.aisle == 'J4')
if(isHazardous){
document.querySelector("#hazardousMaterials").innerText += ' : Go get Gloves'
}
else {document.querySelector("#hazardousMaterials").remove()
}

// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go directly to aisle H1


const isSmall = parts.every((checkAisle) => checkAisle.aisle == 'H1')
if(isSmall){
document.querySelector("#smallItemsOnly").innerText += ' : Take Basket, go directly to H1'
}
else {document.querySelector("#smallItemsOnly").remove()
}

// if there are large items (anything in aisles S, T, or U), then let the employee know in the "forkliftNeeded"
// element that they will need to reserve a forklift, else remove the element

const isLarge = parts.some(checkAisle => checkAisle.aisle == 'S' || checkAisle.aisle == 'T' || checkAisle.aisle == 'U')
console.log(isLarge)
if(isLarge){
document.querySelector("#forkLiftNeeded").innerText += ' : Forklift Needed!'
}
else {document.querySelector("#forkLiftNeeded").remove()
}

// sum up the total number of parts and append that number to the text already in "totalItems" element

const totalItems = document.querySelector("#totalItems")
const sum = parts.reduce((total, currentValue) => total + currentValue.qty, 0);
 
document.querySelector("#totalItems").innerText += ' : ' + sum