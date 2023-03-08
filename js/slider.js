/* function afficherElements(dataAttr) {
    // Sélectionner tous les éléments avec l'attribut de données spécifié
    const elements = document.querySelectorAll(`[data-type="${dataAttr}"]`);
  
    // Ajouter la classe "block" à chaque élément sélectionné
    elements.forEach(element => {
      element.classList.add('block');
    });
  } */


  function afficherElements(dataAttr) {  
  const elements = document.querySelectorAll(`[data-type="${dataAttr}"]`); 
  
  elements.forEach(element => {
    element.classList.add('block');
  }); 
    const autresElements = document.querySelectorAll(`[data-type]:not([data-type="${dataAttr}"])`);
    autresElements.forEach(element => {
      element.classList.remove('block');
    });
  }    
  
  const buttonSlider = document.querySelectorAll('.button-slider');  
  
  buttonSlider.forEach(button => {
    button.addEventListener('click', () => {      
      const type = button.getAttribute('data-type');      
      afficherElements(type);
    });
  });





/* 

const types = document.querySelectorAll('.card-default');

types.forEach( e => {

console.log(e.dataset.type);


})
 */

//// obtenir la largeur de chaque catégorie
//var categoryWidth = $('.category').width();

// au clic sur une catégorie
//$('.category').click(function() {
  // obtenir la position de la catégorie cliquée
 // var position = $(this).position().left;
  // obtenir la catégorie associée
//  var category = $(this).data('category');
  // déplacer la ligne à la position de la catégorie cliquée
 // $('.line').css('transform', 'translateX(' + position + 'px)');
  // mettre en surbrillance la catégorie sélectionnée
 // $('.category').removeClass('active');
//  $(this).addClass('active');
  // effectuer des actions supplémentaires pour la catégorie sélectionnée
//  console.log('Catégorie sélectionnée : ' + category);
//});