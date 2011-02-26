###  jQuery harmony

jQuery harmony lets you simply add some harmony magic in your website!

Nothing fancy there, all the magic is done in harmony itself and Paul's Irish Harmony Backgroud edition. 
Really, I'm just a guy who put those awesomeness in a single file and wrapped it all in a jQuery plugin. 

Very, very, very, very first work.

Demo: [http//mklabs.github.com/jquery-plugs/jquery-harmony/](http://mklabs.github.com/jquery-plugs/jquery-harmony)

## Basic setup:

- Import jquery-harmony.js
- Call $(selector).harmony(); A different canvas and a different instance of harmony will be used for each elements returned by the jQuery collections.
    
# Options
The only two options available are color and brush. This plugin supports for these two properties
inlined data, such as 
    <div data-foo="bar" />
    
Inlined data takes precedence on parameters object. If no inlined data are provided, the plugin will use 
the hash object provided if any.

## Color
Default is black. You can use either rgb (3-elements array) or hexadecimal  (1-element array) values. 

    $('.harmonify').harmony({
        color: [0, 0, 0] // or color: ["#000000"] for Hexadecimal values
    });
    
Or inlined:

    <div class="harmonify" data-color="255, 255, 255"></div>
    <div class="harmonify" data-color="#FFFFFF"></div>
    
## Brush
Default is Ribbon.

Available brush options value are:
    chrome, circles, fur, grid, longfur, ribbon (default), shaded, simple, sketchy, squares

    $('.harmonify').harmony({
        brush: 'chrome'
    });
    
Or inlined:

    <div class="harmonify" data-brush="chrome"></div>
    
## Credits
jQuery harmony is nothing more than a simple plugin wrapper on top of [Mr.doob awesome work](https://github.com/mrdoob/harmony). jQuery harmony plugin is based on [Paul Irish's Harmony Background edition](https://github.com/paulirish/harmony).    
    
## LICENSE:
Harmony
    The MIT License

    Copyright (c) 2010 Mr.doob

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
