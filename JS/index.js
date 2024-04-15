const inputEl = document.querySelector(".input-el")
const convertBtn = document.querySelector(".convert-btn")
const lengthTxt = document.querySelector(".length-txt")
const volumeTxt = document.querySelector(".volume-txt")
const weightTxt = document.querySelector(".weight-txt")



convertBtn.addEventListener("click", () => {
    convertLength(inputEl.value)
    convertVolume(inputEl.value)
    convertWeight(inputEl.value)
})

function convertLength(num) {
    let feet = Number(num * 0.3048).toFixed(3)
    let meter = Number(num * 3.28084).toFixed(3)
    lengthTxt.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meter} meters` 
}

function convertVolume(num) {
    let gallons = Number(num * 0.264172).toFixed(3)
    let liters = Number(num * 3.785411784).toFixed(3)
    volumeTxt.textContent = `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`
}

function convertWeight(num) {
    let pounds = Number(num * 2.20462).toFixed(3)
    let kilograms = Number(num * 0.453592).toFixed(3)
    weightTxt.textContent = `${num} kilograms = ${pounds} pounds | ${num} pounds = ${kilograms} kilograms`
}
