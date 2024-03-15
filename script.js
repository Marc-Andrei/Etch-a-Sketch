function randomColor() {
    return Math.floor(Math.random()*255);
    
}

function createGrid (squares) {
    for (let j = 0; j < squares; j++){
        for (let i = 0; i < squares; i++) {
            const grid = document.createElement("div");
            grid.className = "grid";
            grid.style.boxSizing = "border-box";
            grid.style.border = "1px solid black";
            grid.style.backgroundColor = `white`;
            grid.style.width = 100/squares + "%";
            container.appendChild(grid);
        }
    }
}

function buttonGrid(e) {
    pr = prompt("Select number of squares(not more than 100)");
    if (e.target.className === "btn") {
        color = "black";
    }
    else if (e.target.className === "colorBtn") {
        color = "multicolor";
    }
    else if (e.target.className === "blackenBtn") {
        color = "blacken";
        fade = 255;
    }
    if (pr > 100) {
        alert("Number too high!");
    } else{
        while (container.childElementCount > 0) {
            container.removeChild(container.firstElementChild);
        } 
        createGrid(pr);
    }

}

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const colorBtn = document.querySelector(".colorBtn");
const blackenBtn = document.querySelector(".blackenBtn");
let pr=16;
createGrid(pr);
btn.addEventListener("click", buttonGrid);
colorBtn.addEventListener("click", buttonGrid);
blackenBtn.addEventListener("click", buttonGrid);
let fade = 255;


let color = "black";

container.addEventListener("mouseover", e => {
    if (color === "multicolor") {
        e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }
    else if (color === "black") {
        e.target.style.backgroundColor = "black";
    }
    else if (color === "blacken") {
        if (fade >-0) fade -= 255/10;
        e.target.style.backgroundColor = `rgb(${fade}, ${fade}, ${fade})`;
    }
});