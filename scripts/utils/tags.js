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
    const inputValue = document.querySelector('#recipe-form').value;
    if(inputValue.length > 2){
        if(selectedTags.length != 0){
            for(let i = 0; i < selectedTags.length; i++){
                if( i === 0){
                    displaySearchInput(inputValue, recipes);
                }
                displaySearchInput(selectedTags[i], searchedRecipes);
            }
        }
        else{
            displaySearchInput(inputValue, recipes);
        }
    }
    else if(selectedTags.length > 0){
        for(let i = 0; i < selectedTags.length; i++){
            if(i === 0 ){
                displaySearchInput(selectedTags[i], recipes);
                continue;
            }
            displaySearchInput(selectedTags[i], searchedRecipes);
        }
    }
    else{
        searchedRecipes = [];
        displayFilters(recipes);
        displayRecipes(recipes);
    }
}
