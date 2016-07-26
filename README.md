leg3ndz:highlight.js
===================

Fork based on https://github.com/stubailo/meteor-highlight.js. This fork remove IE8 support, chuango:marked package support and github style.

A highlight.js package for Meteor that's integrated with the core `markdown` package

```
$ meteor add leg3ndz:highlight.js
```

## Using standalone

Call the methods as described in the Highlight.js docs: <http://highlightjs.readthedocs.org/en/latest/api.html>.

## Using with the Meteor markdown package

    {{#markdown}}
    ```
    code goes here
    ```
    {{/markdown}}

And the code will automatically be highlighted. Provide a language hint by adding a keyword like this :

    {{#markdown}}
    ```js
    var x = function () {};
    ```
    {{/markdown}}

## Import style

    @import 'highlight-github.scss
