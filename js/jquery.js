$(document).ready(function() {
    // au survol d'une catégorie
    $('.category').hover(function() {
      // sélectionner l'image à l'intérieur de la catégorie
      var image = $(this).find('img');
      // ajouter une bordure autour de l'image
      image.css('border', '3px solid black');
      // sélectionner le bouton à l'intérieur de la catégorie
      var button = $(this).find('button');
      // faire apparaître le bouton
      button.fadeIn();
    }, function() {
      // au départ de la souris de la catégorie
      // sélectionner l'image à l'intérieur de la catégorie
      var image = $(this).find('img');
      // enlever la bordure autour de l'image
      image.css('border', 'none');
      // sélectionner le bouton à l'intérieur de la catégorie
      var button = $(this).find('button');
      // faire disparaître le bouton
      button.fadeOut();
    });
  });




  $(document).ready(function() {
    // Afficher les restaurants de la catégorie "français" par défaut
    afficherElements("français");
    
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
  });
  
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
  
  
  
  
  