const searchBar = document.getElementById('recipe-form');

searchBar.addEventListener('input', (event) => {
    if(event.currentTarget.value.length >= 3 ){
        const searchedItem = event.currentTarget.value.toLowerCase();
        console.log(searchedItem);
        console.log("Filtrage des recettes");
    }
})