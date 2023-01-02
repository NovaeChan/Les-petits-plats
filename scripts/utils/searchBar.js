const searchBar = document.getElementById('recipe-form');

//TODO : Sauvegarder le tableau filtré + les tags
//Réfléchir à comment actualiser lors d'une suppression de tags

//Function rechercher ingredient, nom de recette, description
function searchInput(inputValue, recipes) {
    console.time();
    const regex = new RegExp(`${inputValue}`, "i");
    //TODO : Faire une fonction equivalent à filter
    searchedRecipes = recipes.filter((recipe) => {
        let matched = false;
        if (regex.test(recipe.name)) {
            return true;
        }
        if (regex.test(recipe.description)) {
            return true;
        }
        if(regex.test(recipe.appliance)){
            return true;
        }
        recipe.ingredients.forEach(({ ingredient }) => {
            if (regex.test(ingredient)) {
                matched = true;
            }
        });
        if(regex.test(recipe.ustensils)){
            return true;
        }
        return matched;
    }
    );
    console.timeEnd();
    console.log(searchedRecipes);
    return searchedRecipes;
}
//Tartelettes - Brownie - Crêpes - Fondant - Cookies - Mousse - Charlotte - Crème
//Tartelettes - Brownie - Crêpes - Fondant - Cookies - Mousse - Charlotte - Crème 
// function searchInputBis(inputValue, recipes){
//     console.time();
//     const regex = new RegExp(inputValue, "i");
//     let filteredRecipes = [];
//     for(let i = 0; i < recipes.length; i++){
//         let recipe = recipes[i];
//         if(regex.test(recipe.name)){
//             filteredRecipes.push(recipe);
//         }
//         else if(regex.test(recipe.appliance)){
//             filteredRecipes.push(recipe);
//         }
//         else {
//             for(let i = 0; i < recipe.ingredients.length; i++){
//                 if(regex.test(recipe.ingredients[i].ingredient)){
//                     filteredRecipes.push(recipe);
//                     break;
//                 }
//             }
//         }
//     }
//     console.timeEnd();
//     return filteredRecipes;
// }

function searchInputFromUstensils(inputValue, recipes){
    const regex = new RegExp(`${inputValue}`, "i");
    //TODO : Faire une fonction equivalent à filter
    searchedRecipes = recipes.filter((recipe) => {
        // if(regex.test(recipe.ustensils)){
        //     return true;
        // }
        return regex.test(recipe.ustensils);
    }
    );
    return searchedRecipes;

}

function displaySearchInputFromUstensils(inputValue, recipes){
    const searchedRecipes = searchInputFromUstensils(inputValue, recipes);
    searchedRecipes.length > 0 ? displayRecipes(searchedRecipes) : displayNoRecipes();
    displayFilters(searchedRecipes);
}

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

