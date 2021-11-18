// console.log("HELLOOOOOO")

//How do we get the image?
let darkMode = false
let themeBtn = document.getElementById("mode")
let background = document.body.style

'rgb(20,29,47)'


// How do I make my image clickable?


function darkModeProperties () {
    // console.log("GOOD NIGHT SLEEP TIGHT")
    
    themeBtn.src = "./images/icon-sun.svg"
    // How do we get the background color of the WHOLE HTML page
    background.backgroundColor = 'rgb(20,29,47)'

    darkMode = true
   }
   
function lightModeProperties() {
    // console.log("LET BE THERE LIGHT")

    themeBtn.src = "./images/icon-moon.svg"

    background.backgroundColor = "hsl(185, 41%, 84%)";

    darkMode = false
   }



themeBtn.addEventListener("click", function() {
    if(darkMode == false) {
        //Change to dark
        darkModeProperties()
    } else {
        // Change to light
        lightModeProperties()
    }
})


// How can I record what input I put in the bill
// How do I get bill input?
// How do I make something run when i put something in my input?

let billInput = document.getElementById("bill-input")

billInput.addEventListener("change", function() {
    console.log(billInput.value)
})

let people = document.getElementById("number-of-people")

people.addEventListener("change", function () {
    console.log(people.value)
})


// How do we get all the buttons?
let percent = document.querySelectorAll(".button")
console.log(percent)


percent.forEach((btn)=> {
    
    btn.addEventListener("click", function() {
        console.log(parseFloat(btn.innerText)/100)
    })
})
// Then how do we give each of them an event listener


// HW: CREATE A FUNCTION THAT CAN CALCULATE THE TIP AMOUNT AND TOTAL AMOUNT PER PERSON
// IT SHOULD TAKE 3 PARAMETERS

function calcTipSplit(bill,percent,amountOfPeople) {
    // Create the logic


    // console.log() two things:
    // Tip amount per person
    // Total amount per person
}

calcTipSplit(100,.15,2)