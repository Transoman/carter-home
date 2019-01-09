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
  var fixedHeader = function() {
    if($(window).scrollTop() > 10) {
      $('.header').addClass('fixed');
    }
    else {
      $('.header').removeClass('fixed');
    }
  }

  fixedHeader();

  $(window).scroll(function() {
    fixedHeader();
  });

  // Cycle content
  $('.hero__content-list').cycle({
    'slides':'>div',
    'sync': false,
    'timeout': 2000,
    'speed': 1000
  });

  // Match height
  $('.story__content h3').matchHeight();

  // Tabs
  // $('.calc-home__tabs').tabslet({
  //   animation: true
  // });

  $('.calc-home__tabs-list').on('click', '.calc-home__tabs-item:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.calc-home__tabs').find('.calc-home__tabs-content').removeClass('active').eq($(this).index()).addClass('active');
  });

  new Swiper ('.calc-home__tabs-list', {
    slidesPerView: 5,
    allowTouchMove: false,
    breakpoints: {
      992: {
        slidesPerView: 3,
        allowTouchMove: true,
      },
      767: {
        slidesPerView: 2,
        allowTouchMove: true,
      },
      480: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
    }
  });

  new Swiper ('.testimonial-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

});