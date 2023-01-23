const searchBar = document.getElementById('recipe-form');

//Function rechercher ingredient, nom de recette, description
function searchInput(inputValue, recipes) {
    console.time();
    searchedRecipes = recipes.filter((recipe) => {
        let matched = false;
        if(recipe.name.toLowerCase().trim().includes(inputValue.toLowerCase().trim())){
            return true;
        }
        if(recipe.description.toLowerCase().trim().includes(inputValue.toLowerCase().trim())){
            return true;
        }
        recipe.ingredients.forEach(({ingredient}) => {
            if(ingredient.toLowerCase().trim().includes(inputValue.toLowerCase().trim())){
                matched = true;
            }
        });
        return matched;
    }
    );
    console.timeEnd();
    return searchedRecipes;
}

function searchInputFromUstensils(inputValue, recipes){
    return searchedRecipes = recipes.filter((recipe) => {
        return recipe.ustensils.includes(inputValue);
    }
    );
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


searchBar.addEventListener("input", (event) => {
    if (event.currentTarget.value.length >= 3) {
        const searchedItem = event.currentTarget.value.trim().toLowerCase();
        if(selectedTags.length <= 0){
            displaySearchInput(searchedItem, recipes);
        }
        else{
            const tagUstensils = document.querySelectorAll('.tag-ustensils');
            if(tagUstensils.length > 0){
                let ustensilsTags = [];
                tagUstensils.forEach((tag) => {
                    ustensilsTags.push(tag.querySelector('span').innerHTML);
                })
                for(let i = 0; i < selectedTags.length; i++){
                    if(ustensilsTags.includes(selectedTags[i])){
                        if(i == 0){
                            displaySearchInputFromUstensils(selectedTags[0], recipes);
                            continue;
                        }
                        displaySearchInputFromUstensils(selectedTags[i], searchedRecipes);
                        continue;
                    }
                    if( i == 0){
                        displaySearchInput(selectedTags[i], recipes);
                        continue;
                    }
                    displaySearchInput(selectedTags[i], searchedRecipes);
                }
                displaySearchInput(searchedItem, searchedRecipes);
            }
            else {
                for(let i = 0; i < selectedTags.length; i++){
                    if(i === 0 ){
                        displaySearchInput(selectedTags[i], recipes);
                        continue;
                    }
                    displaySearchInput(selectedTags[i], searchedRecipes);
                }
                displaySearchInput(searchedItem, searchedRecipes);
            }
        }
    }
});

searchBar.addEventListener("keyup", (event) => {
    if (event.key == "Backspace" || event.key == "Delete") {
        const searchedItem = event.currentTarget.value.trim().toLowerCase();
        if( searchedItem.length < 3 ){
            searchedRecipes = [];
            if(selectedTags.length <= 0){
                displayRecipes(recipes);
                displayFilters(recipes);
            }
            else{
                const tagUstensils = document.querySelectorAll('.tag-ustensils');
                if(tagUstensils.length > 0){
                    let ustensilsTags = [];
                    tagUstensils.forEach((tag) => {
                        ustensilsTags.push(tag.querySelector('span').innerHTML);
                    })
                    for(let i = 0; i < selectedTags.length; i++){
                        if(ustensilsTags.includes(selectedTags[i])){
                            if( i === 0 ){
                                displaySearchInputFromUstensils(selectedTags[i], recipes);
                                continue;
                            }
                            displaySearchInputFromUstensils(selectedTags[i], searchedRecipes);
                            continue;
                        }
                        if(i === 0 ){
                            displaySearchInput(selectedTags[i], recipes);
                            continue;
                        }
                        displaySearchInput(selectedTags[i], searchedRecipes);
                    }
                }
                else {
                    for(let i = 0; i < selectedTags.length; i++){
                        if(i === 0 ){
                            displaySearchInput(selectedTags[i], recipes);
                            continue;
                        }
                        displaySearchInput(selectedTags[i], searchedRecipes);
                    }  
                }
            }
        }
    }
});

