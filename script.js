// Get all checkbox elements
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const clearAllBtn = document.getElementById('clearAll');

// Function to update pizza toppings
function updatePizza(checkbox) {
    const toppingName = checkbox.dataset.topping;
    const toppingElement = document.querySelector(`.${toppingName}-topping`);

    if (checkbox.checked) {
        // Show the topping with animation
        toppingElement.classList.remove('hidden');
    } else {
        // Hide the topping
        toppingElement.classList.add('hidden');
    }
}

// Add event listeners to all checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        updatePizza(this);
    });
});

// Clear all toppings
clearAllBtn.addEventListener('click', function() {
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.checked = false;
            updatePizza(checkbox);
        }
    });
});

// Initialize - make sure all toppings are hidden on load
document.addEventListener('DOMContentLoaded', function() {
    checkboxes.forEach(checkbox => {
        updatePizza(checkbox);
    });
});
