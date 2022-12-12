const wrapperIngredient = document.querySelector('.wrapper-recipe');
const wrapperDevices = document.querySelector('.wrapper-devices');
const wrapperUstensils = document.querySelector('.wrapper-ustensils');
function openDropdown(event){
    const parent = event.target.parentNode;
    parent.classList.toggle('wrapper-dropdown-open');
}

wrapperIngredient.addEventListener('click', (event) => {
    openDropdown(event);
});

wrapperDevices.addEventListener('click', (event) => {
    openDropdown(event);
})

wrapperUstensils.addEventListener('click', (event) => {
    openDropdown(event);
})

function displayFilters(recipes){
    const dropdownIngredients = document.querySelector('.dropdown-ingredients');
    const dropdownDevices = document.querySelector('.dropdown-devices');
    const dropdownUstensils = document.querySelector('.dropdown-ustensils');
    console.log(dropdownDevices);
}
