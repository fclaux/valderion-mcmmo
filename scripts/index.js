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

let currentActions = []; // Liste des actions calculées (globale)

function calculateActions(skillKey, xpNeeded) {
    const actionsList = skills[skillKey].actions;
    currentActions = []; // Reset la liste

    for (const actionKey in actionsList) {
        const action = actionsList[actionKey];
        const actionsCount = Math.ceil(xpNeeded / action.xp);

        currentActions.push({
            name: actionKey,
            count: actionsCount,
            image: action.image,
        });
    }

    renderActions(currentActions);
}


function renderActions(actionArray) {
    const actionsContainer = document.getElementById("actions-needed");
    actionsContainer.innerHTML = "";

    // Création du conteneur de boutons
    const sortButtons = document.createElement("div");
    sortButtons.id = "sort-buttons";

    const buttonName = document.createElement("button");
    buttonName.textContent = "Trier par nom";
    buttonName.onclick = () => sortActions("name");

    const buttonCount = document.createElement("button");
    buttonCount.textContent = "Trier par nombre";
    buttonCount.onclick = () => sortActions("count");

    sortButtons.appendChild(buttonName);
    sortButtons.appendChild(buttonCount);

    actionsContainer.appendChild(sortButtons);

    // Affichage des actions
    for (const action of actionArray) {
        const actionElement = document.createElement("div");
        actionElement.classList.add("action-item");

        const actionImage = document.createElement("img");
        const baseName = action.name.toLowerCase().replaceAll(" ", "_");

        const imageSources = [
            action.image,
            `assets/images/blocs_items/${baseName}.png`,
            `assets/images/blocs_items/${baseName}.gif`,
            `https://minecraft-api.vercel.app/images/items/${baseName}.png`,
            `https://minecraft-api.vercel.app/images/items/${baseName}.gif`,
        ];

        const fallbackImage = "assets/images/fallback.png";
        loadImage(actionImage, imageSources, fallbackImage);

        actionImage.alt = action.name;
        actionImage.classList.add("action-image");

        const actionName = document.createElement("span");
        actionName.textContent = action.name.replaceAll("_", " ");
        actionName.classList.add("action-name");

        const actionCount = document.createElement("span");
        actionCount.textContent = `${action.count.toLocaleString()}`;
        actionCount.classList.add("action-count");

        actionElement.appendChild(actionImage);
        actionElement.appendChild(actionName);
        actionElement.appendChild(actionCount);

        actionsContainer.appendChild(actionElement);
    }
}

function sortActions(criterion) {
    const sorted = [...currentActions];

    if (criterion === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criterion === "count") {
        sorted.sort((a, b) => a.count - b.count);
    }

    renderActions(sorted);
}



function loadImage(imageElement, sources, fallback) {
    const tryNext = (index) => {
        if (index >= sources.length) {
            imageElement.src = fallback;
            return;
        }

        imageElement.onerror = () => tryNext(index + 1);
        imageElement.src = sources[index];
    };

    tryNext(0);
}
