// obtenir la largeur de chaque catégorie
let categoryWidth = $('.category').width();

// au clic sur une catégorie obtenir la catégorie associée
$('.category').click(function() {
  var position = $(this).position().left;
  var category = $(this).data('category');
  $('.line').css('transform', 'translateX(' + position + 'px)');
  $('.category').removeClass('active');
  $(this).addClass('active');
  // effectuer des actions supplémentaires pour la catégorie sélectionnée
  console.log('Catégorie sélectionnée : ' + category);
});
