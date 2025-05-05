import { skills } from "../functions/data.js";
import { getXPForLevel } from "../functions/levels.js";

document.addEventListener("DOMContentLoaded", function () {
    initializeOptions();

    const calculateBtn = document.getElementById("calculate-btn");

    calculateBtn.addEventListener("click", handleFormSubmit);
});

function initializeOptions() {
    const skillSelect = document.getElementById("skill");

    for (const skillKey in skills) {
        const option = document.createElement("option");
        option.value = skillKey;
        option.textContent = skills[skillKey].frenchName;
        skillSelect.appendChild(option);
    }
};

function handleFormSubmit() {
    const currentLevelInput = document.getElementById("current-level");
    const currentXpInput = document.getElementById("current-xp");
    const targetLevelInput = document.getElementById("target-level");

    const currentLevel = parseInt(currentLevelInput.value);
    const currentXp = parseInt(currentXpInput.value);
    const targetLevel = parseInt(targetLevelInput.value);

    const isValid = verifyForm(currentLevel, currentXp, targetLevel);

    if (!isValid) {
        return;
    }

    //Ttraitement des données
    const XP = calculateXP(currentLevel, currentXp, targetLevel);

    alert(`You need ${XP} XP to reach level ${targetLevel}.`);
}

function calculateXP(currentLevel, currentXp, targetLevel) {
    let totalXP = 0;

    for (let level = currentLevel + 1; level < targetLevel; level++) {
        totalXP += getXPForLevel(level);
    }

    totalXP += getXPForLevel(currentLevel) - currentXp;

    return totalXP;
}

function verifyForm(currentLevel, currentXp, targetLevel) {

    if (isNaN(currentLevel) || isNaN(currentXp) || isNaN(targetLevel)) {
        alert("Please enter valid numbers for level and XP.");
        return false;
    }

    if (currentLevel < 0 || currentXp < 0 || targetLevel < 0) {
        alert("Level and XP must be non-negative.");
        return false;
    }

    if (currentLevel >= targetLevel) {
        alert("Current level cannot be greater than or equals target level.");
        return false;
    }

    if (currentLevel > 100 || targetLevel > 100) {
        alert("Level cannot exceed 100.");
        return false;
    }

    if (currentXp >= getXPForLevel(currentLevel)) {
        alert("Current XP cannot exceed or be euaqls the XP required for the current level." + getXPForLevel(currentLevel));
        return false;
    }

    return true;
}
