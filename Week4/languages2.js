const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.

document.querySelector('#submit').addEventListener(
    'click', function() {
        const input = document.querySelectorAll('input')
        const langs = [...input]
        chkLang(langs)
    })


    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages


function chkLang(langs) {

    // let result = false
    // langs.forEach((object) => {
    //     if (object.value.toLowerCase() == lang.toLowerCase())
    //         result = true}) 

    let result = langs.some(object => object.value.toLowerCase() == lang.toLowerCase())
    
    let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}