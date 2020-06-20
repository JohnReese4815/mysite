alert('Yes!')

$(function(){
    function colorRed()
    {
    $('.java-1').addClass('newStyle');
    $('.java-2').removeClass('newStyle');
    $('.java-3').toggleClass('newStyle');
    $('.java-4').toggleClass('newStyle');
    }
    
  

function colorRedinterval()
{
$('.java-5').toggleClass('newStyle');
}
   setInterval(colorRedinterval, 1500);

   function colorbottom()
   {
   	$('.java-6').toggleClass('newStyle');
   }

   $('.change-color').on('click', function(){
   	colorbottom()
     })

   $('textarea').on('focus', function(){
   	$(this).addClass('background-textarea')
   })

   $('textarea').on('blur', function(){
   	$(this).removeClass('background-textarea')
   })

  $('.all-news').click(function()
  {
    $('.news-comments').toggleClass('newStyle');
  })

  
$('.all-news-1').on('click', function()
  {
    $('.news-comments').each(function(){
      if($(this).text() >20){
        $(this).toggleClass('newStyle')
  }
  })
  });

$('.call').click(function()
  {
    $('.central-container').hide();
    
  })

$('.all-news-2').click(function()
  {
    $('.news-item').html('<small>Маленький текст</small>');
  })

$('.all-news-3').click(function()
  {
    $('.news-item-1').remove();
  })

$('.all-news-4').click(function()
  {
    $('.day-news').remove();
    $('.left-column').prepend('<h2> Новый заголовок</h2>');

  })


 
});


