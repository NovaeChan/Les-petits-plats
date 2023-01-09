function closeTag(target){
    const parent = target.parentNode;
    const removedTag = parent.querySelector('span').textContent;
    parent.style.display = 'none';
    removeSelectedTag(removedTag);
    getRecipeWithTags();
}

function removeSelectedTag(tag){
    const index = selectedTags.indexOf(tag);
    if( index > -1 ){
        selectedTags.splice(index, 1);
    }
}

//Ajouter une vérification pour savoir si une recherche a été effectuée
function getRecipeWithTags(){
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
}