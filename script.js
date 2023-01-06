let height = document.querySelector("#height")
let weight = document.querySelector("#weight")
let submitButton = document.querySelector("#submitButton")
let solution = document.querySelector("#solution")

function calculate(event){
    event.preventDefault()

    let heightValue = height.value
    let weightValue = weight.value
    console.log(heightValue)

    if (!heightValue || !weightValue) {
        console.log("Please input both weight and height")
    }

    else {
        let bmi = weightValue / (((heightValue / 100) * heightValue) / 100)
        solution.textContent = bmi
    }
}

submitButton.addEventListener("click", calculate)