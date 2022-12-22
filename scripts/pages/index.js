const recipeDisplay = document.querySelector('.recipe-display');
const noRecipeFound = document.querySelector('.recipe-display-error');

let recipes = [];
let searchedRecipes = [];

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
    noRecipeFound.style.display = "none";
    noRecipeFound.innerHTML = '';
    recipeDisplay.innerHTML = '';
    recipes.forEach((recipe) => {
        const recipeModel = recipeFactory(recipe);
        const recipeCard = recipeModel.getRecipeCard();
        recipeDisplay.appendChild(recipeCard);
    });
}

function displayNoRecipes(){
    noRecipeFound.style.display = "flex";
    recipeDisplay.innerHTML= '';
    noRecipeFound.innerHTML = '<h2>Aucune recette correspondante à votre recherche</h2>';
}


//Initialisation au chargement de la page
async function init(){
    recipes = await getRecipes();
    displayRecipes(recipes);
    displayFilters(recipes);
}

init();