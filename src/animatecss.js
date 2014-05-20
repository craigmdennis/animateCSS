/*
 * animateCSS
 *
 *
 * Copyright (c) 2014 Craig Dennis
 * Licensed under the MIT license.
 */

// (function ($, window, document, undefined) {
//
//     // Function-level strict mode syntax
//   'use strict';
//
//     $.fn.animateCSS = function (effect, delay, callback) {
//
//       // Return this to maintain chainability
//       return this.each(function () {
//
//         // Cache $(this) for speed and compression
//         var $this = $(this),
//             transitionEnd = "webkitAnimationEnd oanimationend msAnimationEnd animationend",
//             animated = "animated",
//             visibility = "visibility",
//             visible = "visible",
//             hidden = "hidden";
//
//         // Create a function we can call later
//         function run() {
//
//           // Add the animation effect with classes
//           $this.addClass( animated + " " + effect);
//
//           // Check if the elemenr has been hidden to start with
//           if ($this.css( visibility ) === hidden) {
//
//             // If it has, show it (after the class has been added)
//             $this.css( visibility, visible);
//
//           }
//
//           // If the element is hidden
//           if ($this.is(":" + hidden)) {
//
//             // Show it
//             $this.show();
//
//           }
//
//           // Event triggered when the animation has finished
//           $this.bind( transitionEnd, function () {
//
//             // Remove the classes so they can be added again later
//             $this.removeClass(animated + " " + effect);
//
//             // Add a callback event
//             if (typeof callback === "function") {
//
//               // Execute the callback
//               callback.call(this);
//
//               // Unbind the event handlers
//               $this.unbind( transitionEnd );
//
//             }
//
//           });
//
//         }
//
//         // Check if delay exists or if it"s a callback
//         if (!delay || typeof delay === "function") {
//
//           // If it"s a callback, move it to callback so we can call it later
//           callback = delay;
//
//           // Run the animation (without delay)
//           run();
//
//         } else {
//
//           // Start a counter so we can delay the animation if required
//           setTimeout( run, delay );
//
//         }
//
//       });
//
//     };
//
// })(jQuery, window, document);


(function ($) {

  // Collection method.
  $.fn.awesome = function () {
    return this.each(function (i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.awesome = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.awesome.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.awesome.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].awesome = function (elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
