// Declare any necessary variables.

let student

// Add an event listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.

document.querySelector('#print')
    .addEventListener(
        'click', function () {
            setStudent()
            printCertificate()})

// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.

    document.querySelector("#reset")
      .addEventListener(
      'click', function () {
        document.querySelector("#studentName").value = ""
        document.querySelector("#className").value = ""
        document.querySelector("#studentScores").value = ""
        document.querySelector("#possibleScores").value = ""
        document.querySelector("#certStudentName").innerHTML = "&nbsp"
        document.querySelector("#certClassName").innerHTML = "&nbsp"
        document.querySelector("#certGrade").innerHTML = "&nbsp"
        
      }
    )
  
// Create a function that instantiates a new student object with the input from the HTML form.

function setStudent(){
  student = new Student(
  document.querySelector("#studentName").value,
  document.querySelector("#className").value,
  convertArray(document.querySelector("#studentScores")),
  convertArray(document.querySelector("#possibleScores"))

  )}

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .

function printCertificate(){
  document.querySelector("#certStudentName").innerHTML = student.studentName
  document.querySelector("#certClassName").innerHTML = student.className
  document.querySelector("#certGrade").innerHTML = student.getGrade()
}


// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.

function convertArray(item){
  ary = item.value.split(",")
  ary = ary.map(function(x){
    return parseInt(x)
  })
  return ary
}

