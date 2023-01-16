const wrapperUstensils = document.querySelector(".wrapper-ustensils");
const dropdownUstensils = document.querySelector(".dropdown-ustensils");
const inputUstensil = wrapperUstensils.querySelector(".dropdown-input");

let filterUstensils = [];

function displayUstensilsFilter(ustensils) {
    ustensils.forEach((ustensil) => {
        const ustensilModel = dropDownFactory(ustensil, "ustensil");
        const ustensilLI = ustensilModel.getDropDown();
        if (ustensilLI) {
            ustensilLI.dataset.type = "ustensil";
            if (selectedTags.includes(ustensil)) {
                ustensilLI.classList.add("dropdown-added-tag");
            }
            ustensilLI.addEventListener("click", (event) => {
                selectedTags.push(event.target.textContent);
                //changer la fonction car ustensiles ne sont pas dans les cards ou aller chercher la card
                displaySearchInputFromUstensils(
                    event.target.textContent,
                    searchedRecipes.length > 0 ? searchedRecipes : recipes
                );
                toggleDropdown(dropdownUstensils);
            });
            dropdownUstensils.appendChild(ustensilLI);
        }
    });
}

function displayInputUstensil(input, ustensils) {
    const filteredUstensils = searchDropdown(input, ustensils);
    if (filteredUstensils.length > 0) {
        removeDropdownChildNode(dropdownUstensils);
        displayUstensilsFilter(filteredUstensils);
    } else {
        console.log("Aucun appareils");
    }
}

// function searchOnlyUstensils(inputValue, recipes) {
//     console.log(inputValue);
//     console.time();
//     const regex = new RegExp(`${inputValue}`, "i");
//     //TODO : Faire une fonction equivalent à filter
//     searchedRecipes = recipes.filter((recipe) => {
//         let matched = false;
//         if (regex.test(recipe.ustensils)) {
//             return true;
//         }
//     });
//     console.timeEnd();
//     console.log(searchedRecipes);
//     return searchedRecipes;
// }

inputUstensil.addEventListener("input", (event) => {
    if (event.currentTarget.value.length > 2) {
        console.log(filterUstensils);
        displayInputUstensil(event.target.value, filterUstensils);
    }
});

inputUstensil.addEventListener("keyup", (event) => {
    if (event.key == "Backspace" || event.key == "Delete") {
        const searchedItem = event.currentTarget.value.trim().toLowerCase();
        if (searchedItem.length < 3) {
            filterUstensils = [];
            removeDropdownChildNode(dropdownUstensils);
            recipes.forEach((recipe) => {
                displayUstensilsFilter(recipe.ustensils);
            });
        }
    }
});
