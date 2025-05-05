import { levelXPMap } from '../functions/levels.js';

document.addEventListener("DOMContentLoaded", function () {
    const bodyTable = document.querySelector("#xpTableBody");

    levelXPMap.forEach((xp, level) => {
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



