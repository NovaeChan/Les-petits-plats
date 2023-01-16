const wrapperDevices = document.querySelector(".wrapper-devices");
const inputDevice = wrapperDevices.querySelector(".dropdown-input");
const dropdownDevices = document.querySelector(".dropdown-devices");

let filterDevices = [];

function displayDevicesFilter(devices) {
    const deviceModel = dropDownFactory(devices, "device");
    const deviceLI = deviceModel.getDropDown();
    if (deviceLI) {
        deviceLI.dataset.type = "device";
        if (selectedTags.includes(devices)) {
            deviceLI.classList.add("dropdown-added-tag");
        }
        deviceLI.addEventListener("click", (event) => {
            selectedTags.push(event.target.textContent);
            displaySearchInput(
                event.target.textContent,
                searchedRecipes.length > 0 ? searchedRecipes : recipes
            );
            toggleDropdown(dropdownDevices);
        });
        dropdownDevices.appendChild(deviceLI);
    }
}

function displayInputDevice(input, devices) {
    const filteredDevices = searchDropdown(input, devices);
    if (filteredDevices.length > 0) {
        removeDropdownChildNode(dropdownDevices);
        displayDevicesFilter(filteredDevices);
    } else {
        console.log("Aucun appareils");
    }
}

inputDevice.addEventListener("input", (event) => {
    if (event.currentTarget.value.length > 2) {
        displayInputDevice(event.target.value, filterDevices);
    }
});

inputDevice.addEventListener("keyup", (event) => {
    if (event.key == "Backspace" || event.key == "Delete") {
        const searchedItem = event.currentTarget.value.trim().toLowerCase();
        if (searchedItem.length < 3) {
            filterDevices = [];
            removeDropdownChildNode(dropdownDevices);
            recipes.forEach((recipe) => {
                displayDevicesFilter(recipe.appliance);
            });
        }
    }
});
