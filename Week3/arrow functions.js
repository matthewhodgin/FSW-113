const movies = [...]

let obj = document.querySelector('#top10Movies')
let top10Movies = '<ol>'
movies.forEach(function(movie){
    top10Movies += `<li>$movie.name} (${movie.year}): $${movie.gross.toLocaleString()}</li?`
    })

top10Movies += '<ol>'
document.querySelector('#top10Movies').innerHTML = top10Movies

const totalGross = movies.reduce(function(curretTotal, movie) {
    return movie.gross + currentTotal
},
0)
document.querySelector(`#avgGross`).innerText = `$${(totalGross / movies.length).toLocaleString()}`

function updateDOM(val, concat) {
    if (concat) obj.innerHTML += val
    else obj.innerText = val
}

