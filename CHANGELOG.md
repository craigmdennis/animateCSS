<a name="1.1.0"></a>
## 1.1.0 (2014-05-21)


#### Features

* add the ability to use  animation loops ([b477632b](https://github.com/craigmdennis/animatecss/commit/b477632bc87f6d96d7ed2fd0ced0aec296c35952))


#### Breaking Changes

* Delay can no longer be specified in the plugin shorthand ([89e7da1a](https://github.com/craigmdennis/animatecss/commit/89e7da1af66ba58c0078b426353b281b227c6844))

Before:

`$('#your-id').animateCSS('fadeIn', 2000);`

After:

`$('#your-id').animateCSS('fadeIn', {delay:2000});`
