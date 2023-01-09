const tags = document.querySelector(".tags");

let selectedTags = [];
//Chercher tous les éléments du dropdown ou remplir le dropdown petit à petit
//Faire un filtre
//Mettre à jour le dropdown
//Maybe mettre à jour les recettes

//Ajout des ecouteurs d'evenements sur les dropdowns
function toggleDropdown(target) {
    const parent = target.parentNode;
    parent.classList.toggle("wrapper-dropdown-open");
}

function clickedDropdownItem(target) {
    const tag = document.createElement("div");
    const nameTag = document.createElement("span");
    const closeImg = document.createElement("img");

    nameTag.textContent = target.textContent;
    closeImg.setAttribute("src", "./assets/images/icon-close-tag.svg");
    closeImg.classList.add("tag-close-icon");

    tag.classList.add("tag");
    tag.classList.add(typeOfItem(target));

    tag.appendChild(nameTag);
    tag.appendChild(closeImg);

    tags.appendChild(tag);
    tags.style.display = "flex";
    closeImg.addEventListener("click", (event) => {
        closeTag(event.target);
    });
}

function addListener(node) {
    if (node.hasChildNodes()) {
        for (const child of node.children) {
            if (child.tagName != "UL" && child.tagName != "INPUT") {
                child.addEventListener("click", (event) => {
                    toggleDropdown(event.target);
                });
            }
            //Corrigé l'eventListener. A mettre sur LI et non pas UL
            if (child.tagName == "UL") {
                child.addEventListener("click", (event) => {
                    clickedDropdownItem(event.target);
                });
            }
        }
    }
}

//Affichage des menus dropdowns
function displayFilters(recipes) {
    dropdownIngredients.innerHTML = "";
    dropdownDevices.innerHTML = "";
    dropdownUstensils.innerHTML = "";
    recipes.forEach((recipe) => {
        const ingredients = recipe.ingredients;
        const devices = recipe.appliance;
        const ustensils = recipe.ustensils;
        displayIngredientsFilter(ingredients);
        displayDevicesFilter(devices);
        displayUstensilsFilter(ustensils);
    });
}

function typeOfItem(item) {
    if (item.dataset.type == "ingredient") {
        return "tag-ingredients";
    }
    if (item.dataset.type == "device") {
        return "tag-devices";
    }
    return "tag-ustensils";
}

function searchDropdown(input, items) {
    const regex = new RegExp(input, "gmi");
    let filteredItems = [];
    for(let i = 0; i < items.length; i++){
        if(regex.test(items[i]) && !filteredItems.includes(items[i])){
            filteredItems.push(items[i]);
        }
    }
    return filteredItems;
}

function removeDropdownChildNode(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}
