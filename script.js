function constructGrid(gridSize) {
    const grid = document.createElement("div");
    let boxSize = gridContainer.offsetWidth/gridSize;

    grid.className = "grid";
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.className = "gridrow";
        for (let j = 0; j < gridSize; j++) {
            const box = document.createElement("div");
            box.className = "gridbox";
            box.style.width = boxSize + "px";
            box.style.height = boxSize + "px";
            box.style.backgroundColor = "black";
            box.addEventListener("mouseenter", colorBox);
            row.appendChild(box);
        }
        grid.appendChild(row);
    }
    gridContainer.appendChild(grid);
}

function colorBox(event) {
    event.target.style.backgroundColor = "red";
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