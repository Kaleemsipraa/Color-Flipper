
const button = document.querySelector("main button");
const main = document.querySelector("main");

// Function to generate random RGB values
const generateRandomColor = () => {
    const randomColor1 = Math.floor(Math.random() * 256);
    const randomColor2 = Math.floor(Math.random() * 256);
    const randomColor3 = Math.floor(Math.random() * 256);
    return `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
};

button.addEventListener("click", () => {
    const randomColor = generateRandomColor();
    main.style.backgroundColor = randomColor;
});
