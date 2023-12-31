function colorBox(event) {
    event.target.style.backgroundColor = "red";
}

const GRID_SIZE = 16;

for (let i = 0; i < GRID_SIZE; i++) {
    const row = document.createElement("div");
    row.className = "gridrow";
    for (let j = 0; j < GRID_SIZE; j++) {
        const box = document.createElement("div");
        box.className = "gridbox";
        box.addEventListener("mouseenter", colorBox);
        row.appendChild(box);
    }

    document.querySelector(".grid").appendChild(row);
}

