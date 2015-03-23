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
      delay: 0
      animationClass: 'animated',
      infinite: false
      callback: options
      duration: 1000
      debug: false

    # Vendor prefixed transition callbacks
    transitionEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'

    # Merge default settings with options.
    settings = $.extend settings, options

    # Call everything we need, in order
    init = ( element ) ->
      animate( element )

    # Add the animation effect with classes
    animate = ( element ) ->
      if settings.infinite == true
        settings.animationClass += ' infinite'

      # Run a timer regardless of delay (as 0 will fire instantly anyway)
      setTimeout  ->
        setDuration( element )
        unhide( element )
        addClass( element )
        complete( element )
      , settings.delay

    # Add the animation ad effect classes to kick everything off
    addClass = ( element ) ->
      element.addClass( settings.effect + ' ' + settings.animationClass + ' ')

    # Check if the element has been hidden to start with
    unhide = ( element ) ->
      element.css('visibility', 'visible') if element.css( 'visibility' ) == 'hidden'
      element.show() if element.is(':hidden')

    # Remove the animation classes the were applied
    removeClass = ( element ) ->
      element.removeClass( settings.effect + ' ' + settings.animationClass )

    # Add an animation duration
    setDuration = ( element ) ->
      element.css
        '-webkit-animation-duration': settings.duration + 'ms',
        '-moz-animation-duration': settings.duration + 'ms'
        '-o-animation-duration': settings.duration + 'ms'
        'animation-duration': settings.duration + 'ms'

    callback = ( element ) ->
      # Only remove the animation classes if `infinite` is false
      removeClass( element ) if settings.infinite == false

      # Check if the callback is a function
      if typeof settings.callback == 'function'
        # Execute the callback and return the original element as `this`
        settings.callback.call( element )

    # Event triggered when the animation has finished
    complete = ( element ) ->
      element.one transitionEnd, ->
        callback( element )

    # Maintain chainability
    return @each () ->

      # Pass in the element
      init( $(this) );
