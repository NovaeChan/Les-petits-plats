const wrapperIngredient = document.querySelector('.wrapper-recipe');
const wrapperDevices = document.querySelector('.wrapper-devices');
const wrapperUstensils = document.querySelector('.wrapper-ustensils');
const dropdownIngredients = document.querySelector('.dropdown-ingredients');
const dropdownDevices = document.querySelector('.dropdown-devices');
const dropdownUstensils = document.querySelector('.dropdown-ustensils');

function openDropdown(event) {
    const parent = event.target.parentNode;
    parent.classList.toggle('wrapper-dropdown-open');
}

wrapperIngredient.addEventListener('click', (event) => {
    openDropdown(event);
});

wrapperDevices.addEventListener('click', (event) => {
    openDropdown(event);
})

wrapperUstensils.addEventListener('click', (event) => {
    openDropdown(event);
})

//Affichage des menus dropdowns
function displayFilters(recipes) {
    dropdownIngredients.innerHTML = '';
    dropdownDevices.innerHTML = '';
    dropdownUstensils.innerHTML = '';
    console.log(recipes);
    recipes.forEach((recipe) => {
        const ingredients = recipe.ingredients;
        const devices = recipe.appliance;
        const ustensils = recipe.ustensils;
        displayIngredientsFilter(ingredients);
        displayDevicesFilter(devices);
        displayUstensilsFilter(ustensils);
    })
}

function displayIngredientsFilter(ingredients) {
    ingredients.forEach((ingredient) => {
        const ingredientModel = dropDownFactory(ingredient, "ingredient");
        const ingredientLI = ingredientModel.getDropDown();
        if (ingredientLI) {
            dropdownIngredients.appendChild(ingredientLI);
        }
    })
}

function displayDevicesFilter(devices) {
    const deviceModel = dropDownFactory(devices, "device");
    const deviceLI = deviceModel.getDropDown();
    if (deviceLI) {
        dropdownDevices.appendChild(deviceLI);
    }
}

function displayUstensilsFilter(ustensils) {
    ustensils.forEach((ustensil) => {
        const ustensilModel = dropDownFactory(ustensil, "ustensil");
        const ustensilLI = ustensilModel.getDropDown();
        if (ustensilLI) {
            dropdownUstensils.appendChild(ustensilLI);
        }
    })
}