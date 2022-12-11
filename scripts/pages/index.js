const recipeDisplay = document.querySelector('.recipe-display');
//On récupère les recettes
async function getRecipes(){
    try {
        const response = await fetch('./data/recipes.json');
        const data = await response.json();
        return data.recipes;
    } catch (error) {
        console.error(`An error occured : ${error}`);
        const errorElement = document.createElement('h2');
        errorElement.textContent = 'Erreur lors de la récupération des données.';
        errorElement.style.textAlign = 'center';
        recipeDisplay.classList.add('recipe-error');
        recipeDisplay.appendChild(errorElement);
        return { recipes: [] };
    }
}

async function displayRecipes(recipes){
    recipes.forEach((recipe) => {
        const recipeModel = recipeFactory(recipe);
        const recipeCard = recipeModel.getRecipeCard();
        recipeDisplay.appendChild(recipeCard);
    });
}


//Initialisation au chargement de la page
async function init(){
    const recipes = await getRecipes();
    displayRecipes(recipes);
}
init();