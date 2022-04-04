const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 }, //Special Packaging Required
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
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
for (var i = 0; i < parts.length; i++) {
partsSelector.innerHTML += `<input type = "checkbox"> ${parts[i].partNbr} : ${parts[i].qty}</input> <br/>`
}

// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element

const specialPackaging = parts.filter((checkAisle)=> {return checkAisle.aisle==="B3"});
console.log(specialPackaging)
if(specialPackaging.length > 0){
document.querySelector("#specialPackaging").innerHTML += specialPackaging.map((item)=> `<br/>  ${item.partNbr} `)
}
else {document.querySelector("#specialPackaging").remove()
}

// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element



// if()
// document.querySelector("#specialPackaging").innerHTML = 'Go get Gloves'



// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1


// if()


// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element


// if(parts.aisle S || T || U)
// else {document.querySelector("").remove()
// }




// sum up the total number of parts and append that number to the text already in "totalItems" element

const numbers = totalItems.every((items)=> `<br/> ${items.qty} `);
if(totalItems.length > 0) {
    document.querySelector("#totalItems").innerHTML = numbers.reduce(getSum, 0);  
}
function getSum (total, num) {
    return total + Math(num);
}
 