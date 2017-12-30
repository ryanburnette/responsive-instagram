Responsive Instagram
====================

**Responsive Instagram** is a jQuery plugin that helps to make Instagram's iframe responsive.

See a [demo on CodePen](http://bit.ly/1vGw38R).

Read my [blog post about responsive Isntagram embeds](http://bit.ly/responsiveinstragram).

Obsolete
--------

Instagram now provides embed code that includes JavaScript for this purpose.
This plugin is still useful if you're working with old iframe embed code, but
it's easier to just get fresh embed code.

Basic Usage
-----------

For the most basic usage you'll want to load the script onto your page and
call the plugin on your iframes.

```
bower install responsive-instagram
```

Make sure you're calling jQuery and this plugin on your page. Your paths may vary.

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="jquery.responsiveinstagram.js"></script>
```

You'll want to call the plugin on your iframes each time the window is resized and at load
time. There are more varying ways to bind so no event binding is included in the plugin itself.

```html
<script>
  var fixIg = function () {
    $('iframe[src*="instagram.com"]').responsiveInstagram();
  };
  $(document).on('ready', function () {
    fixIg();
  });
  $(window).on('load resize',function () {
    fixIg();
  });
</script>
```

Options
-------

I find that sizing the original iframe at 612px wide by 710px tall works very well for keeping
the iframe looking perfect throughout the full range of responsive sizes. If you are working
with iframes that differ in size you'll need to pass the plugin an options object. This can take
some testing and tweaking to get right. Here's an example.

```javascript
$('.instagram iframe').responsiveInstagram({
  width: 960,
  extraHeight: 120,
  breakpoint: 1020
});
```

### `width`
The width defaults to `612` and should match the original width of your iframe.

### `extraHeight`
The plugin functions around the principle that the extra height is the total of the header and footer
of the embed. The image is always a square and will respond to the width of its container. If the Instgram
embed changes in the future or if you have a different version being displayed you may need to adjust this
value. This option defaults to `98`.

### `breakpoint`
The breakpoint determines the difference between when the plugin will leave the iframe at its maximum,
predetermined width and when it will calculate it. This number is checked against the window width so it may
vary greatly from the width of the container around your iframe. The default is `620` but this option will
almost always need to be adjusted.

Testing
-------

A test is included in the repository. To utilize it you'll need Node, NPM, and Grunt-cli installed locally.

Install the development dependencies.

```bash
npm i
```

Run a live test.

```bash
grunt devserve && open http://localhost:9001
```
