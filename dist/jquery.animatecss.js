/*! animateCSS - v1.0.6 - 2014-05-21
* https://github.com/craigmdennis/animatecss
* Copyright (c) 2014 Craig Dennis; Licensed MIT */

(function() {
  'use strict';
  var $;

  $ = jQuery;

  $.fn.extend({
    animateCSS: function(effect, options) {
      var addClass, animate, callback, complete, init, removeClass, settings, transitionEnd, unhide;
      settings = {
        delay: 0,
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
        return setTimeout(function() {
          return addClass(element);
        }, settings.delay);
      };
      addClass = function(element) {
        return element.addClass(effect + " " + settings.animationClass + " ");
      };
      unhide = function(element) {
        if (element.css("visibility") === "hidden") {
          element.css("visibility", "visible");
        }
        if (element.is(":hidden")) {
          return element.show();
        }
      };
      removeClass = function(element) {
        return element.removeClass(effect + " " + settings.animationClass);
      };
      callback = function(element) {
        if (settings.infinite === false) {
          removeClass(element);
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
