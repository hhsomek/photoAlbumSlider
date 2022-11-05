const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const slider = document.querySelector(".slider");
const imageArray = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const imageArrayLength = imageArray.length;
const imageWidth = 800;

for (let i = 0; i < imageArrayLength; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBgColor = () =>{
    buttons.forEach((button)=>{
        button.style.backgroundColor = "transparent";
    });
}

buttons.forEach((button, i)=>{
    button.addEventListener("click",()=>{
        resetBgColor();
        slider.style.transform = `translateX(-${i * imageWidth}px)`;
        slideNumber = i + 1;
        button.style.backgroundColor = "white";
    });
})

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * imageWidth}px)`;
    slideNumber++;
}
const turnFirstSlide = () => {
    slider.style.transform = `translateX(-0px)`;
    slideNumber = 1;
}
const previousSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * imageWidth}px)`;
    slideNumber--;
}
const turnLastSlide = () => {
    slider.style.transform = `translateX(-${(imageArrayLength - 1) * imageWidth}px)`;
    slideNumber = imageArrayLength;
}

rightArrow.addEventListener("click", () => {
    slideNumber < imageArrayLength ? nextSlide() : turnFirstSlide();
    resetBgColor();
    buttons[slideNumber - 1].style.backgroundColor = "white";
})

leftArrow.addEventListener("click", () => {
    slideNumber > 1 ? previousSlide() : turnLastSlide();
    resetBgColor();
    buttons[slideNumber - 1].style.backgroundColor = "white";
})



