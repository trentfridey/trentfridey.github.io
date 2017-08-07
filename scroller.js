$(document).ready(function(){
  $("#brand").click(function(){
    $("body").animate({
      scrollTop: $("#top").scrollTop()
    }, 500);
  });
  $("#about-nav").click(function(){
    $("body").animate({
      scrollTop: $("#about").offset().top - 150
    }, 500);
  });
  $("#code-nav").click(function(){
    $("body").animate({
      scrollTop: $("#code").offset().top - 150
    }, 500);
  });
  $("#contact-nav").click(function(){
    $("body").animate({
      scrollTop: $("#contact").offset().top - 150
    }, 500);
  });
});