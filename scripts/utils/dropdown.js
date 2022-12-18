const wrapperIngredient = document.querySelector('.wrapper-recipe');
const wrapperDevices = document.querySelector('.wrapper-devices');
const wrapperUstensils = document.querySelector('.wrapper-ustensils');
const dropdownIngredients = document.querySelector('.dropdown-ingredients');
const dropdownDevices = document.querySelector('.dropdown-devices');
const dropdownUstensils = document.querySelector('.dropdown-ustensils');
const tags = document.querySelector( '.tags' );
//Ajout des ecouteurs d'evenements sur les dropdowns

function toggleDropdown(event) {
    const parent = event.target.parentNode;
    parent.classList.toggle('wrapper-dropdown-open');
}

function clickedDropdownItem(event){
    const tag = document.createElement( 'div' );
    const nameTag = document.createElement( 'span' );
    const closeImg = document.createElement( 'img' );

    nameTag.textContent = event.target.textContent;
    closeImg.setAttribute('src', './assets/images/icon-close-tag.svg');
    closeImg.classList.add('tag-close-icon');

    tag.classList.add('tag');
    tag.classList.add('tag-ingredient');

    tag.appendChild(nameTag);
    tag.appendChild(closeImg);

    tags.appendChild(tag);
    tags.style.display = 'flex';
    closeImg.addEventListener('click', (event) => {
        closeTag(event.target);
    })
}

function addListener(node){
    if(node.hasChildNodes()){
        for(const child of node.children){
            if(child.tagName != 'UL' && child.tagName != 'INPUT'){
                child.addEventListener('click', (event) => {
                    toggleDropdown(event);
                })
            }
            if(child.tagName == 'UL'){
                child.addEventListener('click', (event) => {
                    clickedDropdownItem(event);

                })
            }
        }
    }
}
addListener(wrapperIngredient);
addListener(wrapperDevices);
addListener(wrapperUstensils);


//Affichage des menus dropdowns
function displayFilters(recipes) {
    dropdownIngredients.innerHTML = '';
    dropdownDevices.innerHTML = '';
    dropdownUstensils.innerHTML = '';
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