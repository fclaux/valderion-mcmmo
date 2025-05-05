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
}

function handleFormSubmit() {
    const errorLabel = document.getElementById("error-label");

    const skillSelect = document.getElementById("skill");
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

    errorLabel.classList.remove("visible");

    const XP = calculateXP(currentLevel, currentXp, targetLevel);

    modifyResponseText(XP, targetLevel);
    
    calculateActions(skillSelect.value, XP);
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
    const errorLabel = document.getElementById("error-label");

    if (isNaN(currentLevel) || isNaN(currentXp) || isNaN(targetLevel)) {
        errorLabel.textContent =
            "Veuillez entrer des nombres valides pour les niveaux et l'XP.";
        errorLabel.classList.add("visible");
        return false;
    }

    if (currentLevel < 0 || currentXp < 0 || targetLevel < 0) {
        errorLabel.textContent =
            "Les niveaux et l'XP doivent être non négatifs.";
        errorLabel.classList.add("visible");
        return false;
    }

    if (currentLevel >= targetLevel) {
        errorLabel.textContent =
            "Le niveau actuel ne peut pas être supérieur ou égal au niveau cible.";
        errorLabel.classList.add("visible");
        return false;
    }

    if (currentLevel > 100 || targetLevel > 100) {
        errorLabel.textContent = "Le niveau ne peut pas dépasser 100.";
        errorLabel.classList.add("visible");
        return false;
    }

    if (currentXp >= getXPForLevel(currentLevel)) {
        errorLabel.textContent =
            "L'XP actuel ne peut pas dépasser ou être égal à l'XP requis pour le niveau actuel.";
        errorLabel.classList.add("visible");
        return false;
    }

    return true;
}

function modifyResponseText(xpNeeded, targetLevel) {
    const responseText = document.getElementById("xp-needed");
    responseText.textContent = "";

    responseText.appendChild(document.createTextNode("Vous avez besoin de "));

    const spanXP = document.createElement("span");
    spanXP.textContent = xpNeeded.toLocaleString() + " XP";
    spanXP.classList.add("highlight-xp");
    responseText.appendChild(spanXP);

    responseText.appendChild(
        document.createTextNode(" pour atteindre le niveau ")
    );

    const spanLevel = document.createElement("span");
    spanLevel.textContent = targetLevel;
    spanLevel.classList.add("highlight-level");
    responseText.appendChild(spanLevel);

    responseText.appendChild(document.createTextNode("."));
}

function calculateActions(skillKey, xpNeeded) {
    const actionsList = skills[skillKey].actions;
    const actionsContainer = document.getElementById("actions-needed");

    actionsContainer.innerHTML = "";

    for (const actionKey in actionsList) {
        const action = actionsList[actionKey];
        const actionsCount = Math.ceil(xpNeeded / action.xp);

        const actionElement = document.createElement("div");
        actionElement.classList.add("action-item");

        const actionImage = document.createElement("img");
        const externalImageUrl = `https://minecraft-api.vercel.app/images/items/${actionKey.toLocaleLowerCase().replaceAll(" ", "_")}.png`;
        const localImageUrl = action.image;
        const fallbackImageUrl = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";

        actionImage.src = externalImageUrl;

        actionImage.onerror = () => {
            actionImage.src = localImageUrl;
            actionImage.onerror = () => {
            actionImage.src = fallbackImageUrl;
            };
        };
        actionImage.alt = actionKey;
        actionImage.classList.add("action-image");
        actionImage.width = 32;
        actionImage.height = 32;
        console.log(actionKey);
        
        const actionName = document.createElement("span");
        actionName.textContent = actionKey.replaceAll("_", " ");
        actionName.classList.add("action-name");

        const actionCount = document.createElement("span");
        actionCount.textContent = `${actionsCount.toLocaleString()}`;
        actionCount.classList.add("action-count");

        actionElement.appendChild(actionImage);
        actionElement.appendChild(actionName);
        actionElement.appendChild(actionCount);

        actionsContainer.appendChild(actionElement);
    }
}