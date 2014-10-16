simple:highlight.js
===================

> a highlight.js package for Meteor that's integrated with the core markdown package.

```
$ meteor add simple:highlight.js

### Using standalone

Call the methods as described in the Highlight.js docs: <http://highlightjs.readthedocs.org/en/latest/api.html>.

### Using with the Meteor markdown package

This package is completely integrated with the official meteor `markdown` package on the client and the server. Just put a code block in your markdown code:

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
    
This package works not only with the markdown helper, but with the `Showdown.makeHtml` function called directly as well. This means it also works with `simple:markdown-templating`.
