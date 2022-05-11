// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
let bugCount = 0
let thisBug

class Bug {

    // This constructor should be set up to accept the four user-input values from index.html: 
    // reportedBy, system, subSystem, and bugDesc

    constructor(reportedBy, system, subSystem, bugDesc) {
        this.reportedBy = reportedBy;
        this.system = system;
        this.subSystem = subSystem;
        this.bugDesc = bugDesc
    }
        

    addBug() {
        bugCount++
        var div = document.createElement("div")
        div.setAttribute("class", "bugReport")
        div.setAttribute("id", "bug"+bugCount)
        var info = document.createElement("ul")
        var li1 = document.createElement("li")
            li1.innerText = "reportedBy: "+this.reportedBy
        var li2 = document.createElement("li")
            li2.innerText = "system: "+this.system +'/'+this.subSystem 
        var li3 = document.createElement("li")
            li3.innerText = "bugDesc: "+this.bugDesc
        
        var remove = document.createElement("button")
            remove.setAttribute("class", "buttons")
            remove.setAttribute("value", "REMOVE")
            remove.addEventListener('click', function(){
                thisBug.deleteBug("bug"+bugCount)})

        var resolve = document.createElement("button")
            resolve.setAttribute("class", "buttons")
            resolve.setAttribute("value", "RESOLVE")
            resolve.addEventListener('click', function(){
                thisBug.resolveBug("bug"+bugCount)})
            

        div.append(li1,li2,li3,remove,resolve)
        document.querySelector("#listWrapper").append(div)

        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 

    }


    deleteBug(id) {
        console.log(id)
        document.getElementById(id).remove()

        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
    }

    resolveBug(id) {
        console.log(id)
        document.getElementById(id).style.backgroundColor = "darkblue"

        // Create code that changes the appropriate bug report to a darker color
    }

}

function reportBug() {

    thisBug = new Bug(document.querySelector("#reportedBy").value,
        document.querySelector('#system').value,
        document.querySelector('#subSystem').value,
        document.querySelector('#bugDesc').value
    )

    thisBug.addBug()

    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.

}