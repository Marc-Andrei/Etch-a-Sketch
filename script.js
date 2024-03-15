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

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
let pr=16;
createGrid(pr);
btn.addEventListener("click", () => {
    pr = prompt("Select number of squares(not more than 100)");
    if (pr > 100) {
        alert("Number too high!");
    } else{
        while (container.childElementCount > 0) {
            container.removeChild(container.firstElementChild);
        } 
        createGrid(pr);
    }
})



container.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = "black";
});