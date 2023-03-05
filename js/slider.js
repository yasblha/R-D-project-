  function afficherElements(dataAttr) {
  // Sélectionner tous les éléments avec l'attribut de données spécifié
  const elements = document.querySelectorAll(`[data-type="${dataAttr}"]`);
  
  // Ajouter la classe "block" à chaque élément sélectionné
  elements.forEach(element => {
    element.classList.add('block');
  });
  
    // Sélectionner tous les éléments avec l'attribut de données, sauf ceux qui correspondent à l'attribut de données spécifié
    const autresElements = document.querySelectorAll(`[data-type]:not([data-type="${dataAttr}"])`);
  
    // Supprimer la classe "block" de chaque élément qui ne correspond pas à l'attribut de données spécifié
    autresElements.forEach(element => {
      element.classList.remove('block');
    });
  }  
  
  // Sélectionner tous les boutons de catégorie
  const buttonSlider = document.querySelectorAll('.button-slider');
  
  // Ajouter un écouteur d'événement de clic à chaque bouton
  buttonSlider.forEach(button => {
    button.addEventListener('click', () => {
      // Récupérer la valeur de l'attribut de données du bouton
      const type = button.getAttribute('data-type');
  
      // Afficher les éléments correspondant à la catégorie
      afficherElements(type);
    });
  });





/* 

const types = document.querySelectorAll('.card-default');

types.forEach( e => {

console.log(e.dataset.type);


})
 */