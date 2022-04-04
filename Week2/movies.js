const movies = [
  
{id: '5RXQ7', name: 'Avatar', year: 2009, gross: 2847246203 },
{id: 'TQY91', name: 'Endgame', year: 2019, gross: 2797501328 },
{id: 'N88TR', name: 'Titanic', year: 1997, gross: 2201647264 },
{id: '8MVW2', name: 'The Force Awakens', year: 2015, gross: 206455677 },
{id: '7XP4Y', name: 'Infinity War', year: 2018, gross: 2048359754 },
{id: 'K0KW1', name: 'Jurassic Park', year: 2015, gross: 1670516444 },
{id: 'RBWPX', name: 'The Lion King', year: 2019, gross: 1657870986 },
{id: '81P99', name: 'The Avengers', year: 2012, gross: 1518815515 },
{id: 'GP35Z', name: 'Furious 7', year: 2015, gross: 1515255622 },
{id: '99R42', name: 'Frozen II', year: 2019, gross: 1450026933 },

]



let top10Movies = '<ol>'
movies.forEach(function(movie) {
    top10Movies += `<li>${movie.name} (${movie.year}): $${movie.gross.toLocaleString()}</li>`
});
top10Movies += '</ol>'
document.querySelector('#top10Movies').innerHTML = top10Movies