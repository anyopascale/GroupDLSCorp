$(".box_sliddrrr > div:gt(0)").hide();

setInterval(function() {
  $('.box_sliddrrr > div:first')
    .fadeOut(1000)
    .next(3000)
    .fadeIn(1000)
    .end(3000)
    .appendTo('.box_sliddrrr');
}, 5000);


$('.btn_responsiv').click(function(){
  $('.btn_close_menu_responssv').addClass('active');
  $('.menu').addClass('active_menu');
  $(this).removeClass('active');
});

$('.btn_close_menu_responssv').click(function(){
  $('.btn_responsiv').addClass('active');
  $('.menu').removeClass('active_menu');
  $(this).removeClass('active');
});


$('.btm_formmmmm').click(function(){
  $('.ventana_formmmm').addClass('form_active');
});
$('.btm_close_vntnt').click(function(){
  $('.ventana_formmmm').removeClass('form_active');
});


