// scripts

const celsiusField = document.querySelector("#celsius")
const degree = document.querySelector("#degree")
const convertBtn = document.querySelector("#convert-btn")
const tempType = document.querySelector("#temp-type")

// window loading reset
window.addEventListener("load",() =>{
    degree.value="";
    celsiusField.innerHTML= "";
})
// add loaingd
convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertTocelsius();

    // add loading feature
    convertBtn.innerHTML = "<span><i class='fa-solid fa-spinner fa-spin'></i>Converting..</span>";
    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>";
    },1000)
})

function convertTocelsius() {
    let inputValue = degree.value;

    setTimeout(() => {

    if(tempType.value === "fahrenheit") {
        const fahrenheitToCelsius = (inputValue -32) * (5/9);
        celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;
        c`;
}
else if(tempType.value === "kelvin"){
    const kelvinToCelsius = inputValue - 273.15;
    celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;
    c`;
}
}, 1100)
}