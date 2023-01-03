function closeTag(target){
    console.time();
    const parent = target.parentNode;
    const removedTag = parent.querySelector('span').textContent;
    parent.style.display = 'none';

    removeSelectedTag(removedTag);
    getRecipeWithTags();
    console.timeEnd();
}

function removeSelectedTag(tag){
    const index = selectedTags.indexOf(tag);
    if( index > -1 ){
        selectedTags.splice(index, 1);
    }
}

//Ajouter une vérification pour savoir si une recherche a été effectuée
function getRecipeWithTags(){
    //On vérifie si le searchedRecipes est vide ou non
    //Si pas vide on vérifie si les tags sont vides
    //Si les tags sont vides alors on reprend la recherche avec searchedRecipes
    //Si searchedRecipes est vide alors on utilise recipes
    const inputValue = document.querySelector('#recipe-form').value;
    if(inputValue.length > 2){
        if(selectedTags.length != 0){
            selectedTags.forEach(tag => {
                displaySearchInput(tag, searchedRecipes);
            });
        }
        else{
            displaySearchInput(inputValue, recipes);
        }
    }
    else{
        searchedRecipes = [];
        displayFilters(recipes);
        displayRecipes(recipes);
    }
    // console.log(inputValue);
    // searchedRecipes = [];
    // if(selectedTags.length == 0){
    //     displayFilters(recipes);
    //     displayRecipes(recipes);
    // }
    // selectedTags.forEach(tag => {
    //     displaySearchInput(tag, searchedRecipes);
    // });
}
