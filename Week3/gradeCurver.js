// declare each of the variables marked with "**" in the appropriate scope and using the appropriate type

// create an event listener that calls the curveGrade() function when the Curve It!! button is clicked

// create an event listener that resets the scores and grades to their defaults when the Reset button is clicked
var mean; 

function applyBell(grade, index, ary) {

    switch (true) {
        case grade >= (mean + (gradeSlice * 2)): 
            ary[index] = 'A'
            break
        case grade >= (mean + gradeSlice): 
            ary[index] = 'B'
            break
        case grade >= (mean):
            ary[index] = 'C'
            break
        case grade >= (mean - gradeSlice): 
            ary[index] = 'D'
            break
        default:
            ary[index] = 'F'
            break
    }
}

function convertArray(obj) {
    ary = obj.value.split(',')
    ary = ary.map(function (x) {
        return parseInt(x)
    })
    return ary
}

function logReset(event) {
    const grades = document.querySelector('#grades')
    grades.innerText = aryGrades
    fromElement.reset()
  }
  
  const submit = document.getElementById('submit');
  const reset = document.getElementById('reset');
  submit.addEventListener("click", curveGrades);
  reset.addEventListener("click", logReset);
  
// Condense the number of lines within the curveGrade() function as much as possible by converting 
// the functions to arrow functions. You can also condense the number of lines by combining some 
// separate lines of code into single lines. It currently has 18 lines of code. Without counting  
// empty lines, can you get the number of lines down to 8?


function curveGrades() {
    console.log(curveGrades)
    const sum = (accumulator, currentValue) => accumulator + currentValue

    const sumGrades = array => array.reduce(sum)

    let aryGrades = convertArray(document.querySelector('#scores'))

    const minGrade = aryGrades.reduce((a, b) => Math.min(a, b))
    console.log(minGrade)
  
    const maxGrade = aryGrades.reduce((a, b) => Math.max(a, b))
    console.log(maxGrade)

    mean = sumGrades(aryGrades) / aryGrades.length
    console.log(mean)

    let range = maxGrade - minGrade

    gradeSlice = range / 5

    aryGrades.forEach(applyBell)

    const grades = document.querySelector('#grades')
    grades.innerText = aryGrades
    console.log(aryGrades)

}
// 66,72,100,88,92,74,72,94,80,78