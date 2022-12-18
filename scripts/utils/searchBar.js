const searchBar = document.getElementById('recipe-form');

//Function rechercher ingredient, nom de recette, description
function searchRecipesInput(inputValue) {
    console.time();
    searchedRecipes = [];
    const regex = new RegExp(`${inputValue}`, "i");
    searchedRecipes = recipes.filter((recipe) => {
        let matched = false;
        if (regex.test(recipe.name)) {
            return true;
        }
        if (regex.test(recipe.description)) {
            return true;
        }
        recipe.ingredients.forEach(({ ingredient }) => {
            if (regex.test(ingredient)) {
                matched = true;
            }
        });
        return matched;
    }
    );
    //S'il y a des recettes trouvées alors on les affiche sinon message d'erreur
    searchedRecipes.length > 0 ? displayRecipes(searchedRecipes) : displayNoRecipes();
    console.timeEnd();
    //Faire en sorte que les menus dropdowns soient mis à jour
    displayFilters(searchedRecipes);
}

searchBar.addEventListener('input', (event) => {
    if (event.currentTarget.value.length >= 3) {
        const searchedItem = event.currentTarget.value.trim().toLowerCase();
        searchRecipesInput(searchedItem);
    }

});

searchBar.addEventListener('keyup', (event) => {
    if(event.key == 'Backspace' || event.key == 'Delete'){
        const searchedItem = event.currentTarget.value.trim().toLowerCase();
        if( searchedItem.length < 3 ){
            displayRecipes(recipes);
        }
    }
})

