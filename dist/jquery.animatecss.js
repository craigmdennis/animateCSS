/*! animatecss - v1.0.6 - 2014-05-21
* https://github.com/craigmdennis/animatecss
* Copyright (c) 2014 Craig Dennis; Licensed MIT */

(function() {
  'use strict';
  var $;

  $ = jQuery;

  $.fn.extend({
    animateCSS: function(effect, options) {
      var animate, callback, clean, complete, init, settings, transitionEnd, unhide;
      settings = {
        effect: effect,
        delay: false,
        animationClass: "animated",
        infinite: false,
        callback: options,
        debug: false
      };
      transitionEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      settings = $.extend(settings, options);
      init = function(element) {
        animate(element);
        unhide(element);
        return complete(element);
      };
      animate = function(element) {
        if (settings.infinite === true) {
          settings.animationClass += " infinite";
        }
        return element.addClass(settings.effect + " " + settings.animationClass + " ");
      };
      unhide = function(element) {
        if (element.css("visibility") === "hidden") {
          element.css("visibility", "visible");
        }
        if (element.is(":hidden")) {
          return element.show();
        }
      };
      clean = function(element) {
        return element.removeClass(settings.effect + " " + settings.animationClass);
      };
      callback = function(element) {
        if (settings.infinite === false) {
          clean(element);
        }
        if (typeof settings.callback === "function") {
          return settings.callback.call(this);
        }
      };
      complete = function(element) {
        return element.one(transitionEnd, function() {
          return callback(element);
        });
      };
      return this.each(function() {
        return init($(this));
      });
    }
  });

}).call(this);
