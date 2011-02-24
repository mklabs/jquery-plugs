jQuery-gtranslate
-----------------

a jQuery plugin to work with google translate api.


[http://code.google.com/intl/fr-FR/apis/language/translate/v2/using_rest.html](http://code.google.com/intl/fr-FR/apis/language/translate/v2/using_rest.html)

Usage 
-----
-----

    $('selector').gtranslate({
      // Feel in your api key [https://code.google.com/apis/console](https://code.google.com/apis/console)
      key: 'yourApiKey',
      
      // list of text elements to be translated, in the context of the plugin element (default is p, ul, ol, :header)
      elements: 'selector'
      
      // {optional} Language code of the source text, if none google will try to detect it for us
      source: 'fr',
      
      // {optional} Target language code, if none navigator.language is used
      target: 'en',
      
      // {optional} Default is false in which case the API must be used
      autoInit: true
    });
  
You could access the internal GTranslate object using $.data method:

    var gtranslate = $('selector').data('gtranslate');
    
Object structure is as follows:
    
    dom: HTMLDivElement // reference to the DOM element
    element: Object[1]  // jQuery element container
    msg: Object[1]      // jQuery element
    options: Object     // mixins between provided options and defaults
    __proto__: Object
      options: Object
      init: function init(options, elem) {
      preTranslate: function preTranslate() {
      renderMessage: function renderMessage() {
      request: function request(o) {
      translate: function translate(element, cb) {
      translateElements: function translateElements(){