const GRID_SIZE = 16;

for (let i = 0; i < GRID_SIZE; i++) {
    let row = document.createElement("div");
    row.className = "gridrow";
    for (let j = 0; j < GRID_SIZE; j++) {
        let box = document.createElement("div");
        box.className = "gridbox";
        row.appendChild(box);
    }

    document.querySelector(".grid").appendChild(row);
}

document.createElement("div");