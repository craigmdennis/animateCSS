Use the animate.css animations from http://daneden.me/animate/

## USAGE:

Basic
<pre>
$('#your-id').animateCSS('fadeIn');
</pre>

With callback
<pre>
$('#your-id').animateCSS('fadeIn', function(){
    alert('Boom! Animation Complete');
});
</pre>

With delay (in ms)
<pre>
$('#your-id').animateCSS('fadeIn', 500);
</pre>

With delay AND callback
<pre>
$('#your-id').animateCSS('fadeIn', 1000, function(){
    alert('Boom! Animation Complete');
});
</pre>