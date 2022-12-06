function recipeFactory(data){
    const { id, name, serving, ingredients, time, description, appliance, ustensils } = data;

    function getRecipeCard(){

        const card = document.createElement( 'section' );
        const cardBgImage = document.createElement( 'div' );
        const cardDescription = document.createElement( 'div' );
        const cardTitle = document.createElement( 'div' );
        const cardRecipeName = document.createElement( 'h2' );
        const cardTimeBlock = document.createElement( 'div' );
        const cardTimeImage = document.createElement( 'img' );
        const cardTimeDesc = document.createElement( 'p' );
        const cardIngredientBlock = document.createElement( 'div' );
        const cardIngredients = document.createElement( 'div' );
        const cardRecipeDesc = document.createElement( 'div' );

        card.classList.add('card');

        cardBgImage.classList.add('card-img');

        cardDescription.classList.add('card-desc');

        cardTitle.classList.add('card-title');

        cardIngredientBlock.classList.add('card-ingredient-recipe');

        cardRecipeName.textContent = `${name}`;
        cardRecipeName.classList.add('card-recipeName');

        cardTimeImage.setAttribute('src', './assets/images/icon-recipe-timer.svg');
        cardTimeDesc.textContent = `${time} min`;
        cardTimeDesc.classList.add('card-time-desc');
        cardTimeBlock.classList.add('card-time');
        cardTimeBlock.appendChild(cardTimeImage);
        cardTimeBlock.appendChild(cardTimeDesc);

        cardTitle.appendChild(cardRecipeName);
        cardTitle.appendChild(cardTimeBlock);

        //Creer fonction de recup d'ingredients
        ingredients.forEach((ingredient) => {
            console.log(ingredient);
            cardIngredients.innerHTML += `${ingredient} <br>`;
        })
        
        //Creer fonction couper le texte apres un certain nombre de caracteres
        cardRecipeDesc.textContent = `${description}`;
        cardIngredientBlock.appendChild(cardIngredients);
        cardIngredientBlock.appendChild(cardRecipeDesc);

        cardDescription.appendChild(cardTitle);
        cardDescription.appendChild(cardIngredientBlock);

        card.appendChild(cardBgImage);
        card.appendChild(cardDescription);

        return card;
    }

    return { getRecipeCard };
}