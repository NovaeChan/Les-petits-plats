const wrapperIngredient = document.querySelector(".wrapper-recipe");
const dropdownIngredients = document.querySelector(".dropdown-ingredients");
const inputIngredient = wrapperIngredient.querySelector(".dropdown-input");

let filterIngredients = [];

function displayIngredientsFilter(ingredients) {
  ingredients.forEach((ingredient) => {
    const ingredientModel = dropDownFactory(ingredient, "ingredient");
    const ingredientLI = ingredientModel.getDropDown();
    if (ingredientLI) {
      ingredientLI.dataset.type = "ingredient";
      ingredientLI.addEventListener("click", (event) => {
        selectedTags.push(event.target.textContent);
        displaySearchInput(
          event.target.textContent,
          searchedRecipes.length > 0 ? searchedRecipes : recipes
        );
        toggleDropdown(dropdownIngredients);
      });
      dropdownIngredients.appendChild(ingredientLI);
    }
  });
}

function displayInputIngredient(input, ingredients) {
  const filteredIngredients = searchDropdown(input, ingredients);
  if (filteredIngredients.length > 0) {
    removeDropdownChildNode(dropdownIngredients);
    displayIngredientsFilter(filteredIngredients);
  } else {
    console.log("Aucun ingrédients");
  }
}

inputIngredient.addEventListener("input", (event) => {
  if (event.currentTarget.value.length > 2) {
    console.log(filterIngredients);
    displayInputIngredient(event.target.value, filterIngredients);
  }
});

inputIngredient.addEventListener("keyup", (event) => {
  if (event.key == "Backspace" || event.key == "Delete") {
    const searchedItem = event.currentTarget.value.trim().toLowerCase();
    if (searchedItem.length < 3) {
      filterIngredients = [];
      removeDropdownChildNode(dropdownIngredients);
      recipes.forEach((recipe) => {
        displayIngredientsFilter(recipe.ingredients);
      });
    }
  }
});
