jQuery(document).ready(function($) {

  // Toggle nav menu
  var overlay = $('.overlay');
  $('.nav-toggle').on('click', function (e) {
    e.preventDefault();
    if (overlay[0].style.opacity != 0.8) {
      overlay.show().animate({ opacity: 0.8, }, 200);
    }
    else {
      overlay.hide().animate({ opacity: 0, }, 200);
    }
    
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('open');
  });

  overlay.add('.nav').on('scroll touchmove mousewheel', function (event) {
    event.preventDefault();
  });

  overlay.click(function(){
    overlay.hide().animate({ opacity: 0, }, 200);
    $('.nav-toggle').toggleClass('active');
    $('.header__nav').toggleClass('open');
  });

  // Modal
  $('.modal').popup({
    transition: 'all 0.3s',
    onclose: function() {
      $(this).find('label.error').remove();
    }
  });

  // Fixed header
  $(window).scroll(function() {
    if($(this).scrollTop() > 10) {
      $('.header').addClass('fixed');
    }
    else {
      $('.header').removeClass('fixed');
    }
  });

});