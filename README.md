# Animate CSS jQuery Plugin

A jQuery plugin to dynamically apply [Dan Eden's animate.css][animate.css] animations with callbacks

[animate.css]: http://daneden.github.io/animate.css/

[![Code Climate](https://codeclimate.com/github/craigmdennis/animateCSS.png)](https://codeclimate.com/github/craigmdennis/animateCSS)

## Getting Started

### Bower
Install with [Bower][bower]
`bower install animateCSS`

[bower]: http://bower.io/

### Download

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/craigmdennis/animateCSS/master/dist/jquery.animatecss.min.js
[max]: https://raw.github.com/craigmdennis/animateCSS/master/dist/jquery.animatecss.js

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
  animationClass: "animated", // Can be any class
  delay: 0 // Can be any value (in ms)
  duration: 1000 // Can be any value (in ms)
  callback: // Any function
}
```

When using `infinite: true` and a delay, the delay will only occur before the first loop, not on every loop.

## Examples

### Basic
```js
$('#your-id').animateCSS('fadeIn');
```

### With callback
```js
$('#your-id').animateCSS('fadeIn', function(){
    console.log('Boom! Animation Complete');
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
    console.log('Boom! Animation Complete');
  }
});
```

### With duration (in ms)
```js
$('#your-id').animateCSS('fadeIn', {duration: 3000});
```

### Chain multiple animations
If you use the standard jQuery chaining mechanism, each animation will fire at the same time so you have to include the next animation in the callback.
```js
$('#your-id').animateCSS('fadeInUp', function() {
  console.log('Boom! First animation Complete');
  $(this).animateCSS("fadeOutUp", function(){
    console.log('Boom Boom! Second animation Complete');
  })
});
```

### Offset animations
You can offset animations by using the delay mechanism
```js
$('#your-id').animateCSS('fadeIn');
$('#another-id').animateCSS('fadeIn', {delay:100});
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
    console.log('Boom! Animation Complete');
  });
});
```

## Release History
Please consult the official [changelog][changelog]

[changelog]: https://github.com/craigmdennis/animateCSS/blob/master/CHANGELOG.md
