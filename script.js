function randRange(low, high) {
    return Math.floor(Math.random() * high);
}

function constructGrid(gridSize) {
    const grid = document.createElement("div");
    let boxSize = (gridContainer.offsetWidth-20)/gridSize;

    grid.className = "grid";
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.className = "gridrow";
        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement("div");
            box.className = "gridbox";
            box.style.width = boxSize + "px";
            box.style.height = boxSize + "px";
            box.style.backgroundColor = "white";
            box.draggable = false;
            box.addEventListener("mouseenter", colorBox);
            box.addEventListener("click", colorBox);
            row.appendChild(box);
        }
        grid.appendChild(row);
    }
    gridContainer.appendChild(grid);
}

function colorBox(event) {
    if (event.which !== 1) return;
    if (document.querySelector(".rgb").checked) {
        event.target.style.backgroundColor = "rgb(" + randRange(0, 256) + ", " + randRange(0, 256) + ", " + randRange(0, 256) + ")";
    } else {
        event.target.style.backgroundColor = "black";
        event.target.style.opacity = +event.target.style.opacity + 0.1;
    }
}

function changeGrid(event) {
    gridContainer.removeChild(document.querySelector(".grid"));
    constructGrid(this.value);
    document.querySelector(".gridSize").textContent = this.value;
}



const gridContainer = document.querySelector(".gridContainer");
constructGrid(16);

const gridSizeSelector = document.querySelector(".changeGrid");
gridSizeSelector.addEventListener("input", changeGrid);