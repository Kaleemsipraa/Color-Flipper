let button = document.querySelector(".btn");
let bgDiv = document.querySelector(".bg-div");
let h3 = document.querySelector("h3");
button.addEventListener('click', function(){
    let rgbColor = randomColor()
    bgDiv.style.backgroundColor = rgbColor;
    h3.innerText = rgbColor;
   
})

function randomColor() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}

