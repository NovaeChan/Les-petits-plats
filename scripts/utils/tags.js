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
        if(selectedTags <= 0){
            displaySearchInput(inputValue, recipes);
        }
        else{
            const tagUstensils = documen.querySelectorAll('.tag-ustensils');
            if(tagUstensils.length > 0){
                let ustensilsTags = [];
                tagUstensils.forEach(tag => {
                    ustensilsTags.push(tag.querySelector('span').innerHTML)
                });
                for(let i = 0; i < selectedTags.length; i++){
                    if(ustensilsTags.includes(selectedTags[i])){
                        if( i === 0){
                            displaySearchInputFromUstensils(selectedTags[0], recipes);
                            continue;
                        }
                        displaySearchInputFromUstensils(selectedTags[i], searchedRecipes);
                        continue;
                    }
                    if( i === 0){
                        displaySearchInput(selectedTags[0], recipes);
                        continue;
                    }
                    displaySearchInput(selectedTags[i], searchedRecipes);
                }
                displaySearchInput(inputValue, searchedRecipes);
            }
            else {
                for(let i = 0; i < selectedTags.length; i++){
                    if( i === 0){
                        displaySearchInput(selectedTags[i], recipes);
                        continue;
                    }
                    displaySearchInput(selectedTags[i], searchedRecipes);
                }
                displaySearchInput(inputValue, searchedRecipes);
            }
        }
    }
    else if(selectedTags.length > 0){
        const tagUstensils = document.querySelectorAll('.tag-ustensils');
        if(tagUstensils.length > 0){
            let ustensilsTags = [];
            tagUstensils.forEach((tag) => {
                ustensilsTags.push(tag.querySelector('span').innerHTML);
            })
            for(let i = 0; i < selectedTags.length; i++){
                if(ustensilsTags.includes(selectedTags[i])){
                    if( i === 0){
                        displaySearchInputFromUstensils(selectedTags[0], recipes);
                        continue;
                    }
                    displaySearchInputFromUstensils(selectedTags[i], searchedRecipes);
                    continue;
                }
                if( i === 0){
                    displaySearchInput(selectedTags[0], recipes);
                    continue;
                }
                displaySearchInput(selectedTags[i], searchedRecipes);
            }
        }
        else {
            for(let i = 0; i < selectedTags.length; i++){
                if(i === 0){
                    displaySearchInput(selectedTags[i], recipes);
                    continue;
                }
                displaySearchInput(selectedTags[i], searchedRecipes);
            }
        }
    }
    else{
        searchedRecipes = [];
        displayFilters(recipes);
        displayRecipes(recipes);
    }
}