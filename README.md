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

If you want to hide an element when the page loads and then apply an effect, it might look something like this:
<pre>
&lt;style&gt;
    .js #your-id {
        visibility:hidden;
    }
&lt;/style&gt;

$(window).load( function(){
    $('#your-id').animateCSS('fadeIn', 1000, function(){
        alert('Boom! Animation Complete');
    });
});
</pre>

Remember to use a .js (or .no-js depending on how you role) so that the element still displays for non javascript users (and Google previews).