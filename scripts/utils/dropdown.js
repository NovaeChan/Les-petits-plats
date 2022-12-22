const wrapperIngredient = document.querySelector('.wrapper-recipe');
const wrapperDevices = document.querySelector('.wrapper-devices');
const wrapperUstensils = document.querySelector('.wrapper-ustensils');
const dropdownIngredients = document.querySelector('.dropdown-ingredients');
const dropdownDevices = document.querySelector('.dropdown-devices');
const dropdownUstensils = document.querySelector('.dropdown-ustensils');
const tags = document.querySelector( '.tags' );

const selectedTags = [];

//Ajout des ecouteurs d'evenements sur les dropdowns
function toggleDropdown(target) {
    const parent = target.parentNode;
    parent.classList.toggle('wrapper-dropdown-open');
}

function clickedDropdownItem(target){
    const tag = document.createElement( 'div' );
    const nameTag = document.createElement( 'span' );
    const closeImg = document.createElement( 'img' );

    nameTag.textContent = target.textContent;
    closeImg.setAttribute('src', './assets/images/icon-close-tag.svg');
    closeImg.classList.add('tag-close-icon');

    tag.classList.add('tag');
    tag.classList.add(typeOfItem(target));

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
                    toggleDropdown(event.target);
                })
            }
            if(child.tagName == 'UL'){
                child.addEventListener('click', (event) => {
                    clickedDropdownItem(event.target);
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
            ingredientLI.dataset.type = 'ingredient';
            ingredientLI.addEventListener('click', (event) => {
                selectedTags.push(event.target.textContent);
                searchRecipesInput(event.target.textContent, searchedRecipes.length > 0 ? searchedRecipes : recipes);
                toggleDropdown(dropdownIngredients);
            })
            dropdownIngredients.appendChild(ingredientLI);
        }
    })
}

function displayDevicesFilter(devices) {
    const deviceModel = dropDownFactory(devices, "device");
    const deviceLI = deviceModel.getDropDown();
    if (deviceLI) {
        deviceLI.dataset.type = 'device';
        deviceLI.addEventListener('click', (event) => {
            selectedTags.push(event.target.textContent);
            searchRecipesInput(event.target.textContent, searchedRecipes.length > 0 ? searchedRecipes : recipes);
            toggleDropdown(dropdownDevices);
        })
        dropdownDevices.appendChild(deviceLI);
    }
}
//Mettre les ustensiles dans un data set
function displayUstensilsFilter(ustensils) {
    ustensils.forEach((ustensil) => {
        const ustensilModel = dropDownFactory(ustensil, "ustensil");
        const ustensilLI = ustensilModel.getDropDown();
        if (ustensilLI) {
            ustensilLI.dataset.type = 'ustensil';
            ustensilLI.addEventListener('click', (event) => {
                selectedTags.push(event.target.textContent);
                searchRecipesInput(event.target.textContent, searchedRecipes.length > 0 ? searchedRecipes : recipes);
                toggleDropdown(dropdownUstensils);
            })
            dropdownUstensils.appendChild(ustensilLI);
        }
    })
}

function typeOfItem(item){
    if( item.dataset.type == 'ingredient' ){
        return 'tag-ingredients';
    }
    if( item.dataset.type == 'device' ){
        return 'tag-devices';
    }
    return 'tag-ustensils';
}