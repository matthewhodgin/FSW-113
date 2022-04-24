// Create a class called Student whose constructor maintains all four data inputs from the HTML page.

class Student {
    constructor(sname, cname, sscores, pscores){
        this.studentName = sname
        this.className = cname
        this.studentScores = sscores
        this.possibleScores = pscores
}

// The class should also contain the following methods:
// - a method that adds up all the student's scores

sumstudentScores() {
    let allstudentScores = this.studentScores.reduce((currentTotal, grade) => {
            return grade + currentTotal
        },
    0)
    return allstudentScores
}

// - a method that adds up all the possible scores

sumpossibleScores() {
    let allpossibleScores = this.possibleScores.reduce((currentTotal, grade) => {
            return grade + currentTotal
        },
    0)
    return allpossibleScores
}

// - a method that calculates the student's letter grade (divide the student's score by the possible scores 
// and use the resulting decimal to determine grade)

getGrade() {
    let score = this.sumstudentScores() / this.sumpossibleScores()
        switch (true){
            case(score<.60):return "F";break; 
            case(score<.70):return "D";break; 
            case(score<.80):return "C";break; 
            case(score<.90):return "B";break; 
            default: return "A";break;
        }
}
}



