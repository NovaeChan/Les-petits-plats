function dropDownFactory(data, dataType) {
    let value = '';
    const dropdownIngredients = document.querySelector( '.dropdown-ingredients');
    const dropdownDevices = document.querySelector( '.dropdown-devices' );
    const dropdownUstensils = document.querySelector( '.dropdown-ustensils');
    let list = '';
    switch (dataType) {
        case "ingredient":
            list = dropdownIngredients.querySelectorAll('li');
            value = data.ingredient;
            break;
        case "device":
            list = dropdownDevices.querySelectorAll('li');
            value = data;
            break;
        case "ustensil":
            list = dropdownUstensils.querySelectorAll('li');
            value = data;
            break;
        default:
            break;
    }

    function getDropDown() {
        if(isAlreadyPresent(value).length <= 0){
            const list = document.createElement('li');
            list.textContent = value;
            return list;
        }
    }

    function isAlreadyPresent(value) {
        dropdownList = Array.from(list);

        const reg = new RegExp(`${value}`, "i");
        existingList = dropdownList.filter((item) => {
            if (reg.test(item.textContent)) {
                return true;
            }
            return false;
        }
        );
        return existingList;
    }

    return { getDropDown };
}