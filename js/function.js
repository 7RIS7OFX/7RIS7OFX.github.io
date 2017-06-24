jQuery(document).ready(function($){

  //IS USER SCROLLING
  var scrolling = false;

  //SCROLL EVENT TRIGGER
  $(window).on('scroll',function(){
    if( !scrolling ) {
      scrolling = true;
      wb_colorized_menu();
    }
  });

  //TRANSPARENT HEADER
  function wb_colorized_menu() {

    var tf_actual_pos = $('header').offset().top;

    if( tf_actual_pos > 1 ) {
      $('header').addClass('wb_colorized');
    } else {
      $('header').removeClass('wb_colorized');
    }

    scrolling = false;

  }

});
