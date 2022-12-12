const searchBar = document.getElementById('recipe-form');

//Function rechercher ingredient, nom de recette, description
function searchRecipesInput(inputValue) {
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
}

searchBar.addEventListener('input', (event) => {
    if (event.currentTarget.value.length >= 3) {
        const searchedItem = event.currentTarget.value.trim().toLowerCase();
        searchRecipesInput(searchedItem);
    }
})

