/**
*
* a jQuery plugin to work with google translate api.
*
* http://code.google.com/intl/fr-FR/apis/language/translate/v2/using_rest.html#language-params
*
* Usage: 
* 
*   $('selector').gtranslate({
*     key: 'yourApiKey',    // Feel in your api key https://code.google.com/apis/console/
*     elements: 'selector'  // list of text elements to be translated, in the context of the plugin element (default is p, ul, ol, :header)
*     source: 'fr',         // {optional} Language code of the source text, if none google will try to detect it for us
*     target: 'en',         // {optional} Target language code, if none navigator.language is used
*     autoInit: true        // {optional} Default is false in which case the API must be used
*   });
*   
*
*   TODO
*     // Actually performs the translation with default settings
*     .gtranslate('translate')
*
*     // Provides source and target langage code to use
*     .gtranslate('translate', source, target)
*     
*     // When only one langage code is provided, we'll use auto-detect feature of google translate api
*     .gtranslate('translate', target)
*     
*
*     // A simple getter on elements provided. Acts as getter, breaks the chain
*     .gtranslate('elements') 
*
*     // A simple setter on elements to work with
*     .gtranslate('elements', 'selector')
*     
* 
* @namespace jQuery
* @author mdaniel
* @version 0.0.1
*/
(function ($, W, D, N) {

    var gTranslate = function (o) {

        var url = "https://www.googleapis.com/language/translate/v2",
        
        message = "Hey dear user, the blog you are currently viewing is using a different langage than yours. Would you like to automatically translate the content of the article below thanks to the kindness of Google Translate API?",

        error = function error() {
            console.log('error: ', this, arguments);
        },
        
        success = function success(results, element) {
            console.log('success: ', this, arguments);
            
            if (results.error) {
                return error.apply(this, arguments);
            }
            
            element.html(results.data.translations[0].translatedText);
        },
        
        yepHandler = function yepHandler() {
            this.translateElements();
            return false;
        },
        
        nopeHandler = function nopeHandler() {
            this.msg.detach();
            return false;
        };

        return {
            options: {
                key: 'apiKey',
                source: 'fr',
                elements: 'p, ul, ol, :header',
                target: N && N.language ? N.language : 'en'
            },

            init: function init(options, elem) {
                console.log('init GTranslate', this, arguments);
                
                // Overload the passed in options with any default options
                this.options = $.extend({}, this.options, options);

                // Set the relative element as the passed in element
                this.element = $(elem);
                this.dom = elem;

                // Initiate the dom building method
                this.preTranslate();
            },
            
            preTranslate: function preTranslate() {
                var src = this.options.source,
                target = this.options.target,
                o = $.extend({}, this.options, {
                    source: 'en',
                    q: message
                }),
                self = this;
                
                if (src === target) {
                    return;
                }
                
                if (target === o.source) {
                    return self.renderMessage();
                }
                
                this.request({
                    data: o,
                    success: function successPreTranslate(results) {
                        if (results.error) {
                            return error.apply(this, arguments); 
                        }
                        message = results.data.translations[0].translatedText;
                        self.renderMessage();
                    }
                });
            },
            
            renderMessage: function renderMessage() {
                var msg = this.msg = $('<p />').addClass('gtranslate-msg').text(message),
                yes = $('<a href="/" />').text('Yep').bind('click', $.proxy(yepHandler, this)),
                nope = $('<a href="/" />').text('Nope').bind('click', $.proxy(nopeHandler, this));
              
                this.element.prepend(msg.append(yes).append(nope));
            },
            
            translateElements: function translateElements() {
                console.log('init GTranslate', this, arguments);
                var self = this;
                
                this.msg.detach();
                
                this.element.find(this.options.elements).each(function () {
                    var el = $(this);
                    self.translate(el);
                });
                              
            },

            translate: function translate(element, cb) {
                console.log('translate', this, arguments);
                var html = element.html(),
                o = $.extend({}, this.options, {q: html});
                
                this.request({
                    data: o,
                    success: function (results) {
                        success.call(this, results, element);
                    }
                });
            },
            
            request: function request(o) {
                console.log('request: ', url, o);
                $.ajax($.extend({
                    url: url,
                    dataType: 'jsonp',
                    success: success,
                    error: error
                }, o));               
            }
        };
    };

    // Set up prototypal inheritance - if it doesn't exist
    if (typeof Object.create !== 'function') {
        Object.create = function (o) {
            function F() {}
            F.prototype = o;
            return new F();
        };
    }

    $.fn.gtranslate = function (o) {
        o = o || {};

        if (!this.length) {
            return this;
        }

        return this.each(function () {
            var gtranslate = Object.create(gTranslate());
            gtranslate.init(o, this);
            $.data(this, 'gtranslate', gtranslate);
        });
    };


}(this.jQuery, this, this.document, this.navigator));