# Animate CSS jQuery Plugin

A jQuery plugin to dynamically apply [Dan Eden's animate.css][animate.css] animations with callbacks

[animate.css]: http://daneden.github.io/animate.css/

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/craigmdennis/animateCSS/master/dist/jquery.animateCSS.min.js
[max]: https://raw.github.com/craigmdennis/animateCSS/master/dist/jquery.animateCSS.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/animatecss.min.js"></script>
<script>
$(document).ready( function(){
  $('#your-id').animateCSS("fadeIn");
});
</script>
```

## Documentation

```js
{
  infinite: false, // True or False
  animationClass: "animate", // Can be any class
  delay: 0 // Can be any value (in ms)
  callback: // Any function
}
```

When using `infinite: true` and a delay, the delay will only occur before the first loop

## Examples

### Basic
```js
$('#your-id').animateCSS('fadeIn');
```

### With callback
```js
$('#your-id').animateCSS('fadeIn', function(){
    alert('Boom! Animation Complete');
});
```

### With delay (in ms)
```js
$('#your-id').animateCSS('fadeIn', {delay: 500});
```

### With delay AND callback
```js
$('#your-id').animateCSS('fadeIn', {
  delay: 1000,
  callback: function(){
    alert('Boom! Animation Complete');
  }
});
```

If you want to hide an element when the page loads and then apply an effect, it might look something like this:

```css
  .js #your-id {
      visibility:hidden;
  }
```
```js
$(window).load( function(){
  $('#your-id').animateCSS('fadeIn', function(){
    alert('Boom! Animation Complete');
  });
});
```

## Release History
1.1.0
- Rewrite in CoffeeScript
- Allow custom `.animated` class
- Allow for `.infinite` animation
- Add grunt for consistent build output
- Add Bower support
