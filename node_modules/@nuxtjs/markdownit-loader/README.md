# markdownit-loader

> Convert Markdown file to HTML using markdown-it.

**See [markdownit Module](https://github.com/nuxt-community/modules/tree/master/modules/markdownit) for easy integration with [Nuxt.js](https://nuxtjs.org).**

## Installation

```bash
npm i @nuxtjs/markdownit-loader --save-dev
```

## Features
- Hot reload
- Code highlighting using highlight.js


## Usage
See [Using loaders](http://webpack.github.io/docs/using-loaders.html).

`webpack.config.js` file (webpack >= 2.0):

```javascript
module.exports = {
  module: {
    rules: [{
      test: /\.md/,
      loader: '@nuxtjs/markdownit-loader'
    }]
  }
};
```

### Passing options to markdown-it

See [markdown-it](https://github.com/markdown-it/markdown-it#init-with-presets-and-options) for a complete list of possible options.

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.md/,
        use: [
          { loader: 'raw-loader' },
          {
            loader: '@nuxtjs/markdownit-loader',
            options: {
              // markdown-it config
              preset: 'default',
              breaks: true,

              preprocess: function(markdownIt, source) {
                // do any thing

                return source
              },

              use: [
                /* markdown-it plugin */
                'markdown-it-xxx',

                /* or */
                ['markdown-it-xxx', 'this is options']
              ]
            }
          }
        ]
      }
    ]
  }
};
```

Or you can customize markdown-it

```javascript
var markdown = require('@nuxtjs/markdown-it')({
  html: true,
  breaks: true
})

markdown
  .use(plugin1)
  .use(plugin2, opts, ...)
  .use(plugin3);

module.exports = {
  module: {
    rules: [
      {
        test: /\.md/,
        use: [
          { loader: 'raw-loader' },
          {
            loader: '@nuxtjs/markdownit-loader',
            options: markdown
          }
        ]
      }
    ]
  }
};
```


## Note
Resource references can only use **absolute path**

e.g.

webpack config
```javascript
resolve: {
  alias: {
    src: __dirname + '/src'
  }
}
```

It'is work
```markdown
<img src="~src/images/abc.png">

<script>
  import Image from 'src/images/logo.png'
  import Hello from 'src/components/hello.vue'

  module.exports = {
  }
</script>
```

Incorrect

```markdown
<img src="../images/abc.png">

<script>
  import Image from '../images/logo.png'
  import Hello from './hello.vue'
  module.exports = {
  }
</script>
```


## License
MIT

