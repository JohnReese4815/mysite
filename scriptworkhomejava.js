alert('Yes!')

$(function(){
$('.button-add').click(function()
  {
    $('.empty').remove();
    $('.list-case').after(
        '<div class="left-column-1"><div class="name-case"></div><button class="reset"></button><div class="about-case"></div>')                        ;

var text = $('.nickname-area').val();
$('.name-case').text(text);

var text = $('.about-area').val(); 
$('.about-case').text(text);


$('.reset').click(function()
  {
    $('.left-column-1').remove();
  })
      })



})



