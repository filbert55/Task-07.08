let btnOne = document.getElementById("btn-one");
let btnTwo= document.getElementById("btn-two")
let btnThree= document.getElementById("btn-three")
let btnFour= document.getElementById("btn-four")
let btnFive= document.getElementById("btn-five")



function playSound (soundName){
    let sound = new Audio(soundName)
    sound.play()
}

btnOne.addEventListener("click", () => 
{playSound("hihat.wav")}

)


btnTwo.addEventListener("click", () => 
{playSound("snare.wav")}

)


btnThree.addEventListener("click", () => 
{playSound("tink.wav")}

)

btnFour.addEventListener("click", () => 
{playSound("tom.wav")}

)

btnFive.addEventListener("click", () => 
{playSound("ride.wav")}

)

