const searchBar = document.getElementById('recipe-form');

//Function rechercher ingredient, nom de recette, description
function searchInput(inputValue, recipes){
    console.time();
    const regex = new RegExp(inputValue, "i");
    let filterItems = [];
    for(let i = 0; i < recipes.length; i++){
        let recipe = recipes[i];
        if(regex.test(recipe.name) && !filterItems.includes(recipe)){
            filterItems.push(recipe);
            continue;
        }
        if(regex.test(recipe.appliance) && !filterItems.includes(recipe)){
            filterItems.push(recipe);
            continue;
        }
        if(regex.test(recipe.description) && !filterItems.includes(recipe)){
            filterItems.push(recipe);
            continue;
        }
        for(let i = 0; i < recipe.ingredients.length; i++){
            if(regex.test(recipe.ingredients[i].ingredient) && !filterItems.includes(recipe)){
                filterItems.push(recipe);
                break;
            }
        }
    }
    searchedRecipes = filterItems;
    console.timeEnd();
    return searchedRecipes;
}

function searchInputFromUstensils(inputValue, recipes){
    const regex = new RegExp(`${inputValue}`, "i");
    let filterUstensil = [];
    for(let i = 0; i < recipes.length; i++){
        if(regex.test(recipes[i].ustensils) && !filterUstensil.includes(recipes[i])){
            filterUstensil.push(recipes[i]);
        }
    }
    searchedRecipes = filterUstensil;
    return searchedRecipes;
}

function displaySearchInputFromUstensils(inputValue, recipes){
    const searchedRecipes = searchInputFromUstensils(inputValue, recipes);
    searchedRecipes.length > 0 ? displayRecipes(searchedRecipes) : displayNoRecipes();
    displayFilters(searchedRecipes);
}

//Faire une deuxième fonction pour les dropdowns
function displaySearchInput(inputValue, recipes){
    const searchedRecipes = searchInput(inputValue, recipes);
    //S'il y a des recettes trouvées alors on les affiche sinon message d'erreur
    searchedRecipes.length > 0 ? displayRecipes(searchedRecipes) : displayNoRecipes();
    //Faire en sorte que les menus dropdowns soient mis à jour
    displayFilters(searchedRecipes);
}

searchBar.addEventListener('input', (event) => {
    if (event.currentTarget.value.length >= 3) {
        const searchedItem = event.currentTarget.value.trim().toLowerCase();
        displaySearchInput(searchedItem, recipes);
    }
});

searchBar.addEventListener('keyup', (event) => {
    if(event.key == 'Backspace' || event.key == 'Delete'){
        const searchedItem = event.currentTarget.value.trim().toLowerCase();
        if( searchedItem.length < 3 ){
            searchedRecipes = [];
            displayRecipes(recipes);
            displayFilters(recipes);
        }
    }
})

