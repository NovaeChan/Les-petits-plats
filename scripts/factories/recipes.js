function recipeFactory(data){
    const { id, name, serving, ingredients, time, description, appliance, ustensils } = data;
    
    function getRecipeCard(){
        const card = document.createElement( 'article' );
        const cardBgImage = document.createElement( 'div' );
        const cardDescription = document.createElement( 'div' );
        const cardTitle = document.createElement( 'div' );
        const cardRecipeName = document.createElement( 'h2' );
        const cardTimeBlock = document.createElement( 'div' );
        const cardTimeImage = document.createElement( 'img' );
        const cardTimeDesc = document.createElement( 'p' );
        const cardIngredientsDescription = document.createElement( 'div' );
        const cardRecipeDesc = document.createElement( 'div' );

        card.classList.add('card');

        cardBgImage.classList.add('card-img');

        cardDescription.classList.add('card-desc');

        cardTitle.classList.add('card-title');

        cardIngredientsDescription.classList.add('card-ingredient-recipe');

        cardRecipeName.classList.add('card-recipeName');

        cardRecipeDesc.classList.add('card-description');


        cardRecipeName.textContent = `${name}`;

        cardTimeImage.setAttribute('src', './assets/images/icon-recipe-timer.svg');
        cardTimeDesc.textContent = `${time} min`;
        cardTimeDesc.classList.add('card-time-desc');
        cardTimeBlock.classList.add('card-time');
        cardTimeBlock.appendChild(cardTimeImage);
        cardTimeBlock.appendChild(cardTimeDesc);

        cardTitle.appendChild(cardRecipeName);
        cardTitle.appendChild(cardTimeBlock);

        cardRecipeDesc.textContent = `${description}`;
        if(description.length > 175){
            cardRecipeDesc.textContent = `${description.slice(0, 175)}...`;
        }
        cardIngredientsDescription.appendChild(getIngredients(ingredients));
        cardIngredientsDescription.appendChild(cardRecipeDesc);
        
        cardDescription.appendChild(cardTitle);
        cardDescription.appendChild(cardIngredientsDescription);

        card.dataset.ustensils = `${ustensils}`;
        card.appendChild(cardBgImage);
        card.appendChild(cardDescription);

        return card;
    }

    function getIngredients(ingredients){
        const ingredientsBlock = document.createElement( 'ul' );
        ingredientsBlock.classList.add('card-ingredient-block');
        ingredients.forEach(ingredient => {
            if(!ingredient.quantity){
                ingredientsBlock.innerHTML += `<li><b>${ingredient.ingredient}</b></li>`;
            }
            else{
                if(ingredient.hasOwnProperty('unit')){
                    ingredientsBlock.innerHTML += `<li><b>${ingredient.ingredient}:</b> ${ingredient.quantity}${ingredient.unit.slice(0, 9)}</p>`;
                }
                else{
                    ingredientsBlock.innerHTML += `<li><b>${ingredient.ingredient}:</b> ${ingredient.quantity}</p>`;
                }
            }
        });
        return ingredientsBlock;
    }

    return { getRecipeCard };
}