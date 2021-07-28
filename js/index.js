$(function () {
    var $header = $('.header');
    var $page = $('.professional');
    var $window = $(window);
    var pageOffsetTop = $page.offset().top;
  
    $window.resize(function () { 
      pageOffsetTop = $page.offset().top;
    });
  
    $window.on('scroll', function () { 
      var scrolled = $window.scrollTop() >= pageOffsetTop; 
      $header.toggleClass('down', scrolled);
    });
  });
