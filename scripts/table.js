import { levelXPMap } from '../functions/levels.js';

document.addEventListener("DOMContentLoaded", function () {
    const bodyTable = document.querySelector("#xpTableBody");

    let totalXP = 0;

    levelXPMap.forEach((xp, level) => {
        totalXP += xp;
        const row = document.createElement("tr");

        const levelCell = document.createElement("td");
        levelCell.textContent = level + " → " + (level + 1);
        row.appendChild(levelCell);

        const xpCell = document.createElement("td");
        xpCell.textContent = xp;
        row.appendChild(xpCell);

        const totalXpCell = document.createElement("td");
        totalXpCell.textContent = totalXP;
        row.appendChild(totalXpCell);

        bodyTable.appendChild(row);
    });
    
});



