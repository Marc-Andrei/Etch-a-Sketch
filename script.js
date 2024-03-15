function randomColor() {
    return Math.floor(Math.random()*255);
    
}

const container = document.querySelector(".container");
for (let j = 0; j <16; j++){
    for (let i = 0; i < 16; i++) {
        const grid = document.createElement("div");
        grid.className = "grid";
        grid.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()},${randomColor()})`;
        grid.style.width = 100/16 + "%";
        container.appendChild(grid);
    }
}