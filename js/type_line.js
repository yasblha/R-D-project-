// obtenir la largeur de chaque catégorie
var categoryWidth = $('.category').width();

// au clic sur une catégorie
$('.category').click(function() {
  // obtenir la position de la catégorie cliquée
  var position = $(this).position().left;
  // obtenir la catégorie associée
  var category = $(this).data('category');
  // déplacer la ligne à la position de la catégorie cliquée
  $('.line').css('transform', 'translateX(' + position + 'px)');
  // mettre en surbrillance la catégorie sélectionnée
  $('.category').removeClass('active');
  $(this).addClass('active');
  // effectuer des actions supplémentaires pour la catégorie sélectionnée
  console.log('Catégorie sélectionnée : ' + category);
});