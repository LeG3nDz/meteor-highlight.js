var decode;

if (Meteor.isClient) {

  decode = function (codeWithEntities) {
    return $('<div/>').html(codeWithEntities).text();
  };
  

} else {

  var entities = Npm.require('html-entities').XmlEntities;

  entities = new entities();
  decode = entities.decode;

}



/**
* Description for decodeEntitiesAndHighlight
* @private
* @method decodeEntitiesAndHighlight
* @param {Object} codeWithEntities
* @param {Object} lang
* @return {Object} description
*/
var decodeEntitiesAndHighlight = function (codeWithEntities, lang) {

  if (lang) {

    try {
      return hljs.highlight(lang, decode(codeWithEntities));
    } catch (error) {
      return decode(codeWithEntities);
    }

  } else {

    return hljs.highlightAuto(decode(codeWithEntities));

  }

};




var oldConstructor = Package.markdown.Showdown.converter;

/**
* Description for undefined
* @private
* @method undefined
* @param {Object} options
* @return {Object} description
*/
Package.markdown.Showdown.converter = function (options) {

  var converter = new oldConstructor(options),
      oldMakeHtml = converter.makeHtml;

  converter.makeHtml = function (text) {

    text = oldMakeHtml(text);

    text = text.replace(/<pre>\s*<code( class="(.+?)")?>([\s\S]*?)<\/code>\s*<\/pre>/g, function (fullBlock, attr, className, codeOnly) {

      // Don't re-highlight already highlighted code
      if (className && className.match(/hljs/)) {
        return fullBlock;
      }

      var result = decodeEntitiesAndHighlight(codeOnly, className);
      return '<pre><code class="hljs ' + result.language + '">' + result.value + '</code></pre>';

    });

    return text;

  };

  return converter;

};
