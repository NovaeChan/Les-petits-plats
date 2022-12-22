function closeTag(target){
    console.time();
    const parent = target.parentNode;
    const removedTag = parent.querySelector('span').textContent;
    parent.style.display = 'none';

    removeSelectedTag(removedTag);
    searchedRecipes = recipes;
    selectedTags.forEach(tag => {
        searchRecipesInput(tag, searchedRecipes);
    });
    console.timeEnd();
}

function removeSelectedTag(tag){
    const index = selectedTags.indexOf(tag);
    if( index > -1 ){
        selectedTags.splice(index, 1);
    }
}
