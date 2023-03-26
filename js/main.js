$(document).ready(function() {
  
  /* scroll */
  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top-$(".fix_menu").height()+1+"px"});
    return false;
  });

  /* timer */
  function update() {
    var Now = new Date(), Finish = new Date();
    Finish.setHours( 23);
    Finish.setMinutes( 59);
    Finish.setSeconds( 59);
    if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
      Finish.setDate( Finish.getDate() + 1);
    }
    var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
    var hrs = Math.floor( sec / 3600);
    sec -= hrs * 3600;
    var min = Math.floor( sec / 60);
    sec -= min * 60;
    $(".timer .hours").html( pad(hrs));
    $(".timer .minutes").html( pad(min));
    $(".timer .seconds").html( pad(sec));
    setTimeout( update, 200);
  }
  function pad(s) {
    s = ("00"+s).substr(-2);
    return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
  }
  update();

});

$(window).on("load", function(){

  var rev_owl = function() {
    $('.reviews').owlCarousel({
      loop:true,
      center: true,
      autoWidth: true,
      autoHeight: true,
      navText: "",
      dots: false,
      nav:true
    });
  };

  if ($(window).width()<1200) {
    rev_owl();
  }

  $(window).resize(function(){
    if ($(window).width()<1200) {
      rev_owl();
    }
  });

  $('.result_carousel').owlCarousel({
    loop:true,
    autoHeight: true,
    center: true,
    autoWidth: true,
    navText: "",
    dots: false,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
  });

});