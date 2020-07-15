// Recipe calculator 
var computeServing = function(serving) {
  $('.js-recipeIngredient').each(function(index, item) {
    $(item).children('span').html($(item)[2].dataset.basevalue * serving)
  })
}
$('#servingInput').on('change', function() {
  computeServing($(this).val())
})
$('.js-decreaseService').on('click', function() {
  var currentServing = $('#servingInput').val()
  $('#servingInput').val(currentServing - 2)
  computeServing(currentServing - 2)
})
$('.js-increaseService').on('click', function() {
  var currentServing = $('#servingInput').val()
  $('#servingInput').val(parseInt(currentServing) + 2)
  computeServing(parseInt(currentServing) + 2)
})
computeServing(2)