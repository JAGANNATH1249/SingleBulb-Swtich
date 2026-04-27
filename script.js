const buttonON = document.querySelector(".on")
const buttonOFF= document.querySelector(".off")
const bulb = document.querySelector(".bulbTop")



buttonON.addEventListener("click", ()=>{
    bulb.classList.add("ON")
})

buttonOFF.addEventListener("click", ()=>{
    bulb.classList.remove("ON")
})