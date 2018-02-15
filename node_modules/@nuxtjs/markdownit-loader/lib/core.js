var hljs = require('highlight.js')
var loaderUtils = require('loader-utils')
var markdown = require('markdown-it')

/**
 * `{{ }}` => `<span>{{</span> <span>}}</span>`
 * @param  {string} str
 * @return {string}
 */
var replaceDelimiters = function (str) {
  return str.replace(/({{|}})/g, '<span>$1</span>')
}

/**
 * renderHighlight
 * @param  {string} str
 * @param  {string} lang
 */
var renderHighlight = function (str, lang) {
  if (!(lang && hljs.getLanguage(lang))) {
    return ''
  }

  try {
    return replaceDelimiters(hljs.highlight(lang, str, true).value)
  } catch (err) {}
}

/**
 * html => vue file template
 * @param  {[type]} html [description]
 * @return {[type]}      [description]
 */
var renderVueTemplate = function (html) {
  return '<section>' + html + '</section>\n'
}

/**
 * Resolves plguins passed as string
 * @param {String|Object} plugin
 * @return {Object}
 */
var resolvePlugin = function (plugin) {
  if (typeof plugin === 'string') {
    return require(plugin)
  }
  return plugin
}

module.exports = function (source) {
  this.cacheable()

  var parser
  var params = loaderUtils.getOptions(this)
  var opts = Object.assign({}, params)

  if (typeof (opts.render) === 'function') {
    parser = opts
  } else {
    opts = Object.assign({
      preset: 'default',
      html: true,
      highlight: renderHighlight
    }, opts)

    var plugins = opts.use
    var preprocess = opts.preprocess

    delete opts.use
    delete opts.preprocess

    parser = markdown(opts.preset, opts)
    if (plugins) {
      plugins.forEach(function (plugin) {
        if (Array.isArray(plugin)) {
          plugin[0] = resolvePlugin(plugin[0])
          parser.use.apply(parser, plugin)
        } else {
          parser.use(resolvePlugin(plugin))
        }
      })
    }
  }

  var codeInlineRender = parser.renderer.rules.code_inline;
  parser.renderer.rules.code_inline = function () {
    return replaceDelimiters(codeInlineRender.apply(this, arguments));
  }

  if (preprocess) {
    source = preprocess.call(this, parser, source)
  }

  var content = parser.render(source)

  return renderVueTemplate(content)
}
