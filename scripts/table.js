import { getXPForLevel } from '../functions/levels.js';

document.addEventListener("DOMContentLoaded", function () {
    const xpMap = createXpMap();
    const bodyTable = document.querySelector("#xpTableBody");

    xpMap.forEach((xp, level) => {
        const row = document.createElement("tr");

        const levelCell = document.createElement("td");
        levelCell.textContent = level;
        row.appendChild(levelCell);

        const xpCell = document.createElement("td");
        xpCell.textContent = xp;
        row.appendChild(xpCell);

        bodyTable.appendChild(row);
    });
    
});

function createXpMap() {
    const xpMap = new Map();
    for (let level = 0; level <= 100; level++) {
        xpMap.set(level, getXPForLevel(level));
    }
    return xpMap;
}


