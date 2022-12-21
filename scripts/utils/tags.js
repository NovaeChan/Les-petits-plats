function closeTag(target){
    const parent = target.parentNode;
    parent.style.display = 'none';
    displayRecipes(recipes);
    displayFilters(recipes);
}
