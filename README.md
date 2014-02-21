Responsive Instagram
====================

**responsiveInstagram** is a jQuery plugin that helps to make Instagram's iframe responsive.

Basic Usage
-----------

For the most basic usage you'll want to load the script onto your page and
call the plugin on your iframes.

This example assumes that you're using [Bower][1] to download additional libraries.

```
bower install responsive-instagram
```

Make sure you're calling jQuery and this plugin on your page. Your paths may vary.

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="/bower_components/responsive-instagram/jquery.responsiveinstagram.js"></script>
```

You'll want to call the plugin on your iframes each time the window is resized and at load
time. There are more varying ways to bind so no event binding is included in the plugin itself.

```html
<script>
  $(window).on('load resize',function () {
     $('iframe[src*="instagram.com"]').responsiveInstagram();
  });
</script>
```