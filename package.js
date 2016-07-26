Package.describe({
  summary: 'Code highlighting integrated with the markdown package',
  version: '1.3.1',
  name: 'leg3ndz:highlight.js',
  git: 'https://github.com/LeG3nDz/meteor-highlight.js'
});

Npm.depends({
  'html-entities': '1.1.1'
});

Package.onUse(function (api) {
  api.addFiles('highlight.pack.js');
  api.addFiles('markdown-integration.js');
  api.use([
    'markdown@1.0.2'
  ], ['client', 'server'], { weak: true });
  api.export('hljs');
});
