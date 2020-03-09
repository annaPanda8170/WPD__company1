$(function () {
  let contentsHeight = $(".contents1").outerHeight() + $(".contents2").outerHeight();
  if (window.matchMedia("(max-width: 1000px)").matches) {
    $(".main").css("height", contentsHeight - 50);
  } else {
    $(".main").css("height", contentsHeight/1.6);
  };
  let minusBarWidth = $(window).width() - ($(window).width() - $(".main").width());
  $(".mainBack").css("border-left-width", minusBarWidth);
  setTimeout(function () {
    $(".openingName, .openingTitle").fadeOut(2000);
  },1500);
  setTimeout(function(){
    $(".backOpening").fadeOut(4000);
  }, 1500);
  $(window).resize(function () {
    let minusBarWidth = $(window).width() - ($(window).width() - $(".main").width());
    $(".mainBack").css("border-left-width", minusBarWidth);
    if (window.matchMedia("(max-width: 1000px)").matches) {
      let contentsHeight = $(".contents1").outerHeight() + $(".contents2").outerHeight();
      $(".main").css("height", contentsHeight - 50);
    } else {
      $(".main").css("height", contentsHeight/1.6);
    };
  });
  $(window).on('scroll load', function () {
    if (window.matchMedia( "(min-width: 1000px)" ).matches) {
      let scrollTop = $(this).scrollTop();
    // viewportの下の高さを取得
      let scrollBtm = scrollTop + $(window).height();
      if(scrollBtm <= 1000){
        $(".contents1").css('top', "-50px");
        $(".contents2").css('top', "400px");
      } else if (scrollBtm > 1000 && scrollBtm < 1500) {
        $(".contents1").css('top', -50 + ((scrollBtm - 1000 )/ 5));
        $(".contents2").css('top', 400 - ((scrollBtm -1000))/ 1.5);
      } else if (scrollBtm > 1500 && scrollBtm < 2100) {
        $(".contents1").css('top', 48.59375 + ((scrollBtm - 1500 )/ 9));
        $(".contents2").css('top', 71.328125 - ((scrollBtm -1500))/ 4);
      }
    }
  });
  
});

