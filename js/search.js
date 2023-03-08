// Select the search bar icon
const searchIcon = document.querySelector('.search-bar-icon');

// Add a click event listener to the search bar icon
searchIcon.addEventListener('click', function() {
  // Get the search input value
  const searchValue = document.querySelector('.search-bar-input').value.toLowerCase();

  // Filter the restaurant cards based on the search input value
  const cards = document.querySelectorAll('.card-default');
  cards.forEach(function(card) {
    const category = card.getAttribute('data-type').toLowerCase();
    if (category.includes(searchValue)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
});