leg3ndz:highlight.js
===================

Fork based on https://github.com/stubailo/meteor-highlight.js. This fork remove IE8 test and github style.

For add style, use this : https://github.com/stubailo/meteor-highlight.js/blob/master/github.css

A highlight.js package for Meteor that's integrated with the core `markdown` package and `chuangbo:marked`!

```
$ meteor add leg3ndz:highlight.js
```

### Using standalone

Call the methods as described in the Highlight.js docs: <http://highlightjs.readthedocs.org/en/latest/api.html>.

### Using with the Meteor markdown package or chuangbo:marked

This package is completely integrated with two markdown packages on the client and the server. Just put a code block in your markdown code:

    {{#markdown}}
    ```
    code goes here
    ```
    {{/markdown}}

And the code will automatically be highlighted. Provide a language hint by adding a keyword like this:

    {{#markdown}}
    ```js
    var x = function () {};
    ```
    {{/markdown}}
