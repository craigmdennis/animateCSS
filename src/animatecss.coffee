'use strict';

# Reference jQuery
$ = jQuery

# Adds plugin object to jQuery
$.fn.extend

  # Change pluginName to your plugin's name.
  animateCSS: (effect, options) ->
    # Default settings
    settings =
      effect: effect
      delay: false
      animationClass: "animated",
      infinite: false
      callback: options
      debug: false

    # Vendor prefixed transition callbacks
    transitionEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"

    # Merge default settings with options.
    settings = $.extend settings, options

    init = ( element ) ->
      animate( element )
      unhide( element )
      complete( element )

    # Add the animation effect with classes
    animate = ( element ) ->
      if settings.infinite == true
        settings.animationClass += " infinite"
      element.addClass( settings.effect + " " + settings.animationClass + " ")

    # Check if the element has been hidden to start with
    unhide = ( element ) ->
      element.css("visibility", "visible") if element.css( "visibility" ) == "hidden"
      element.show() if element.is(":hidden")

    # Remove the animation classes the were applied
    clean = ( element ) ->
      element.removeClass( settings.effect + " " + settings.animationClass )

    callback = ( element ) ->
      clean( element ) if settings.infinite == false
      if typeof settings.callback == "function"
        settings.callback.call(this)

    # Event triggered when the animation has finished
    complete = ( element ) ->
      element.one( transitionEnd, ->
        callback( element )
      )

    return @each () ->

      init( $(this) );
