/*$(document).ready(function() {
    // au survol d'une catégorie
    $('.category').hover(function() {
      var image = $(this).find('img');
      image.css('border', '3px solid black');
      // sélectionner le bouton à l'intérieur de la catégorie
      var button = $(this).find('button');
      button.fadeIn();
    }, function() {
       var image = $(this).find('img');
      image.css('border', 'none');
      // sélectionner le bouton à l'intérieur de la catégorie
      var button = $(this).find('button');
      
      button.fadeOut();
    });
  });*/




  $(document).ready(function() {
    // Afficher les restaurants de la catégorie "français" par défaut
    afficherElements("français");
    
    // Sélectionner tous les boutons de catégorie
    const buttonSlider = document.querySelectorAll('.button-slider');
    
    buttonSlider.forEach(button => {
      button.addEventListener('click', () => {
        // Récupérer la valeur de l'attribut de données du bouton
        const type = button.getAttribute('data-type');
    
        // Afficher les éléments correspondant à la catégorie
        afficherElements(type);
      });
    });
  }); 


 /* $(document).ready(function(){
    var clickDown = false;
    var startX = 0;
    var scrollLeft = 0;
    
    // Fonction pour maintenir le clic
    $(".categories-wrapper").mousedown(function(e){
      clickDown = true;
      startX = e.pageX - $(".categories-wrapper").offset().left;
      scrollLeft = $(".categories-wrapper").scrollLeft();
    });
    
    // Fonction pour relâcher le clic
    $(".categories-wrapper").mouseup(function(){
      clickDown = false;
    });
    
    // Fonction pour sortir du conteneur lors du déplacement
    $(".categories-wrapper").mouseleave(function(){
      clickDown = false;
    });
    
    // Fonction pour effectuer le déplacement
    $(".categories-wrapper").mousemove(function(e){
      if(!clickDown) return;
      e.preventDefault();
      var x = e.pageX - $(".categories-wrapper").offset().left;
      var walk = (x - startX) * 2; // multiplier la vitesse de déplacement par 2
      $(".categories-wrapper").scrollLeft(scrollLeft - walk);
    });
  });  */

  ///////////////////////

  //afficher les restaurants pour la catégorie cliquée
  
  function afficherElements(dataAttr) {
    
    const elements = document.querySelectorAll(`[data-type="${dataAttr}"]`);  
    
    elements.forEach(element => {
      element.classList.add('block');
    });    
    // Sélectionner tous les éléments avec l'attribut de données, sauf ceux qui correspondent à l'attribut de données spécifié
    const autresElements = document.querySelectorAll(`[data-type]:not([data-type="${dataAttr}"])`);
    autresElements.forEach(element => {
      element.classList.remove('block');
    });
  }
  
  /////////////////////////////////////
  // jquery pour faire défiler la barre horizontale de catégories au clique
  
  $(document).ready(function() {
    var container = $(".types-container");
    var categoriesWrapper = $(".categories-wrapper");
    var startX, startY, currentX, currentY, scrollLeft, scrollTop;
  
    // Empêcher le défilement de la page lors du glissement horizontal
    container.on("mousedown touchstart", function(e) {
      e.preventDefault();
      startX = e.pageX || e.originalEvent.touches[0].pageX;
      startY = e.pageY || e.originalEvent.touches[0].pageY;
      scrollLeft = container.scrollLeft();
      scrollTop = container.scrollTop();
    });
  
    container.on("mousemove touchmove", function(e) {
      if (!startX || !startY) {
        return;
      }
  
      currentX = e.pageX || e.originalEvent.touches[0].pageX;
      currentY = e.pageY || e.originalEvent.touches[0].pageY;
  
      var distanceX = (startX - currentX) * 1.5; // augmenter la distance de défilement horizontal
      var distanceY = (startY - currentY) * 1.5; // augmenter la distance de défilement vertical
  
      container.scrollLeft(scrollLeft + distanceX);
      container.scrollTop(scrollTop + distanceY);
    });
  
    container.on("mouseup touchend", function(e) {
      startX = null;
      startY = null;
    });
  
    // Activer/désactiver la classe "active" sur les catégories lors du clic
    categoriesWrapper.on("click", ".category", function() {
      categoriesWrapper.find(".category.active").removeClass("active");
      $(this).addClass("active");
    });
  });
  
  
  
  