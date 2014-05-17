(function ($, window, document, undefined) {

    // Function-level strict mode syntax
  'use strict';

    $.fn.animateCSS = function (effect, callback, params) {
        
        // Check if there were params hand over in the callback 
        if (callback && typeof callback !== "function") {
            params = callback
        }

        // Deal with params array  and set some default values
        var settings = $.extend({
            delay: 0,
            animateClass: 'animated'
        }, params);
        
        // Return this to maintain chainability
        return this.each(function () {

            // Cache $(this) for speed and compression
            var $this = $(this),
                transitionEnd = "webkitAnimationEnd oanimationend msAnimationEnd animationend",
                animated = settings.animateClass,
                visibility = "visibility",
                visible = "visible",
                hidden = "hidden";

            // Create a function we can call later
            function run() {

                // Add the animation effect with classes
                $this.addClass( animated + " " + effect);

                // Check if the elemenr has been hidden to start with
                if ($this.css( visibility ) === hidden) {

                    // If it has, show it (after the class has been added)
                    $this.css( visibility, visible);

                }

                // If the element is hidden
                if ($this.is(":" + hidden)) {

                    // Show it
                    $this.show();

                }

                // Event triggered when the animation has finished
                $this.bind( transitionEnd, function () {

                    // Remove the classes so they can be added again later
                    $this.removeClass(animated + " " + effect);

                    // Add a callback event
                    if (typeof callback === "function") {

                        // Execute the callback
                        callback.call(this);

                        // Unbind the event handlers
                        $this.unbind( transitionEnd );

                    }

                });

            }

            // Check if delay exists or if it"s a callback
            if (!settings.delay || settings.delay == 0) {

                // Run the animation (without delay)
                run();

            } else {

                // Start a counter so we can delay the animation if required
                setTimeout( run, settings.delay );

            }

        });

    };

})(jQuery, window, document);(function(c,b,a,d){c.fn.animateCSS=function(f,h,g){var e=c.extend({delay:0,animateClass:"animated"},g);return this.each(function(){var n=c(this),j="webkitAnimationEnd oanimationend msAnimationEnd animationend",k=e.animateClass,i="visibility",o="visible",l="hidden";function m(){n.addClass(k+" "+f);if(n.css(i)===l){n.css(i,o)}if(n.is(":"+l)){n.show()}n.bind(j,function(){n.removeClass(k+" "+f);if(typeof h==="function"){h.call(this);n.unbind(j)}})}if(!e.delay||e.delay==0){m()}else{setTimeout(m,e.delay)}})}})(jQuery,window,document);(function(c,a,d,b){c.fn.animateCSS=function(e,g,f){return this.each(function(){function j(){m.addClass(q+" "+e);if(m.css(k)===p){m.css(k,h)}if(m.is(":"+p)){m.show()}m.bind(n,function(){m.removeClass(q+" "+e);if(typeof f==="function"){f.call(this);m.unbind(n)}})}var m=c(this),n="webkitAnimationEnd oanimationend msAnimationEnd animationend",q="animated",k="visibility",h="visible",p="hidden";if(!g||typeof g==="function"){f=g;j()}else{setTimeout(j,g)}})}})(jQuery,window,document);