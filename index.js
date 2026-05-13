/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


convertBtn.addEventListener("click", function() {
    let number = Number(inputEl.value)

    // Length: 
    let feet = number*3.281
    let meter = number*0.3048
    lengthEl.innerHTML = `${number} meters = ${feet} feet | ${number} feet = ${meter} meters `

    // Volume:
    let gallons = number*0.264
    let liters = number*3.7854
    volumeEl.innerHTML = `${number} liters = ${gallons} gallons | ${number} gallons = ${liters} liters `

    // Mass: 
    let pounds = number*2.204
    let kilos = number*0.4536
    massEl.innerHTML = `${number} kilos = ${pounds} pounds | ${number} pounds = ${kilos} kilos `

})