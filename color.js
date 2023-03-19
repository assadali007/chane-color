
const arrayObject = {
    arrayColor : ["red","green","yellow","blue","orange","pink"],
};


const button = document.querySelector(".btn");
const span = document.querySelector("h2 span");
const stopBtn = document.querySelector(".stop");


button.addEventListener("click",buttonClick)



function buttonClick() {

    const startles =   setInterval(randomness,1000);
    stopBtn.addEventListener("click", function () {
        clearInterval(startles)
    })

}


function randomness() {
    const pk = randomColor();

    document.body.style.backgroundColor =  arrayObject.arrayColor[pk];
    span.style.color =  arrayObject.arrayColor[pk];
    span.textContent =  arrayObject.arrayColor[pk];
}
function randomColor() {
    return (
        Math.floor(Math.random()*arrayObject.arrayColor.length)
    )
}
