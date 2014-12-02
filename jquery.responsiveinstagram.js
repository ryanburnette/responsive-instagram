/* global jQuery */
(function($){
  jQuery.fn.responsiveInstagram = function (options) {
    var $i = $(this)
      , width
      , windowWidth = $(window).width()
      , newHeight
      , defaults
      ;

    defaults = {
      width: 610
    , extraHeight: 80
    , breakpoint: 620
    };

    options = $.extend(defaults,options);

    if ( windowWidth <= options.breakpoint ) {
      $i.css('width', '100%');
    }
    else {
      $i.css('width', options.width.toString(10) + 'px');
    }

    width = $i.width();

    newHeight = Math.round(width + options.extraHeight);
    $i.css('height', newHeight.toString(10) + 'px');

    return this;
  };
})(jQuery);
