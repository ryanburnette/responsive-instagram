jQuery.fn.responsiveInstagram = function (options) {
  var $i = $(this)
    , width = $i.width()
    , windowWidth = $(window).width()
    , newHeight
    , defaults
    ;
 
  defaults = {
    extraHeight: 114
  , breakpoint: 612
  };
  
  options = $.extend(defaults,options);
  
  if ( windowWidth <= options.breakpoint ) {
    $i.css('width','100%');
  }
  else {
    $i.css('width',options.breakpoint.toString(10) + 'px');
  }
  
  newHeight = Math.round(width + options.extraHeight);
  $i.css('height',newHeight.toString(10) + 'px');
};

