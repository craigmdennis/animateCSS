(function ($) {

    $.fn.animateCSS = function (effect, delay, callback) {

        // Return this to maintain chainability
        return this.each(function () {

            // Cache $(this) for speed
            var $this = $(this);

            // Check if delay exists or if it's a callback
            if (isNaN(delay) || typeof delay === 'function') {

                // If it's a callback, move it to callback so we can call it later
                callback = delay;

                // Set the delay to 0 for the setTimeout
                delay = 0;
            }

            // Start a counter so we can delay the animation if required
            var animation = setTimeout(function () {

                // Add the animation effect with classes
                $this.addClass('animated ' + effect);

                // Check if the elemenr has been hidden to start with
                if ($this.css('visibility') === 'hidden') {

                    // If it has, show it (after the class has been added)
                    $this.css({
                        'visibility' : 'visible'
                    });

                }

                // If the element is hidden
                if ($this.is(':hidden')) {
                    // Show it
                    $this.show();
                }

                function onEnd() {

                    $this.unbind('animationend webkitAnimationEnd oAnimationEnd', onEnd);

                    // Remove the classes so they can be added again later
                    $this.removeClass('animated ' + effect);

                    // Add a callback event
                    if (typeof(callback) === 'function') {

                        // Execute the callback
                        callback.call(this);

                    }

                }

                // Event triggered when the animation has finished
                $this.unbind('animationend webkitAnimationEnd oAnimationEnd', onEnd).bind('animationend webkitAnimationEnd oAnimationEnd', onEnd);

                if (!$("html").hasClass("csstransforms")) {

                    onEnd();

                }

                // Specify the delay
                
            }, delay);

        });

    };

})(jQuery);