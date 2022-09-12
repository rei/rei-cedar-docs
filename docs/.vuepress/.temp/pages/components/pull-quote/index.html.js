export const data = {
  "key": "v-3685d30a",
  "path": "/components/pull-quote/",
  "title": "Pull Quote",
  "lang": "en-US",
  "frontmatter": {
    "title": "Pull Quote",
    "layout_type": "LayoutComponent",
    "title_metadata": "Quote, CdrQuote",
    "summary": "Short excerpt taken from the main body of text to give a dominant position",
    "see_also": [
      {
        "text": "See Also"
      },
      {
        "text": "Block Quote",
        "href": "../block-quote/"
      },
      {
        "text": "Text",
        "href": "../text/"
      }
    ],
    "indenting": [
      {
        "type": "do",
        "image": "pull-quote/quotes_pull_indent_do.png",
        "ratio": "4-3",
        "alt": "Image showing proper pull quote use.",
        "caption": "position the quote near the surrounding text."
      },
      {
        "type": "dont",
        "image": "pull-quote/quotes_pull_indent_dont.png",
        "ratio": "4-3",
        "alt": "Image showing improper pull quote use in an article",
        "caption": "use for indenting text content."
      }
    ],
    "position": [
      {
        "type": "do",
        "image": "pull-quote/quotes_pull_position_do.png",
        "ratio": "4-3",
        "alt": "Image showing proper pull quote use.",
        "caption": "relate the quote to the surrounding text."
      },
      {
        "type": "dont",
        "image": "pull-quote/quotes_pull_position_dont.png",
        "ratio": "4-3",
        "alt": "Image showing improper pull quote use in an article",
        "caption": "position quotes in a random location on the page."
      }
    ],
    "too_many": [
      {
        "type": "do",
        "image": "pull-quote/quotes_pull_too_many_do.png",
        "ratio": "4-3",
        "alt": "Image showing proper pull quote use.",
        "caption": "use for emphasizing content or additional content."
      },
      {
        "type": "dont",
        "image": "pull-quote/quotes_pull_too_many_dont.png",
        "ratio": "4-3",
        "alt": "Image showing too many pull quotes in an article",
        "caption": "use too many pull quotes."
      }
    ],
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "sandboxData": {
      "components": "CdrQuote"
    },
    "versions": [
      {
        "components": [
          {
            "name": "CdrQuote",
            "api": {
              "props": [
                {
                  "name": "tag",
                  "type": "enum",
                  "default": "`blockquote`",
                  "required": "false",
                  "description": "Sets the ‘tag’ attribute for cdr-quote to define the root HTML element. Possible values: {  ‘blockquote’  |  ‘aside’  |  ‘q’  |  ‘div’  }"
                },
                {
                  "name": "modifier",
                  "type": "string",
                  "default": "",
                  "required": "false",
                  "description": "Modifies the style variant for this component. Possible values: {  ‘pull’  }"
                },
                {
                  "name": "role",
                  "type": "string",
                  "default": "",
                  "required": "false",
                  "description": "Sets the ‘role’ attribute to ‘presentation’ when creating a pull quote. Possible values: {  ‘presentation’  }"
                },
                {
                  "name": "aria-hidden",
                  "type": "string",
                  "default": "",
                  "required": "false",
                  "description": "Sets the ‘aria-hidden’ attribute to ‘true’ when creating a pull quote. Possible values: {  ‘true’  }"
                },
                {
                  "name": "summary",
                  "type": "string",
                  "default": "",
                  "required": "false",
                  "description": "Sets the pull quote body text."
                },
                {
                  "name": "citation",
                  "type": "string",
                  "default": "",
                  "required": "false",
                  "description": "Sets the pull quote attribution text."
                }
              ]
            }
          }
        ],
        "version": "1.0.0"
      }
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Default (Medium)",
      "slug": "default-medium",
      "children": []
    },
    {
      "level": 2,
      "title": "Accessibility",
      "slug": "accessibility",
      "children": []
    },
    {
      "level": 2,
      "title": "Use When",
      "slug": "use-when",
      "children": []
    },
    {
      "level": 2,
      "title": "Don't Use When",
      "slug": "don-t-use-when",
      "children": []
    },
    {
      "level": 2,
      "title": "The Basics",
      "slug": "the-basics",
      "children": []
    },
    {
      "level": 2,
      "title": "Responsiveness",
      "slug": "responsiveness",
      "children": []
    },
    {
      "level": 2,
      "title": "Props",
      "slug": "props",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1590790386000,
    "contributors": [
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 11
      },
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 5
      },
      {
        "name": "RaunCraig",
        "email": "RaunCraig@users.noreply.github.com",
        "commits": 4
      },
      {
        "name": "Ben Griffin",
        "email": "bgriffi@rei.com",
        "commits": 4
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "rebecca-larue",
        "email": "53016572+rebecca-larue@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "shart-rei",
        "email": "43073801+shart-rei@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "Darin Trimillos",
        "email": "darin@trimillos.com",
        "commits": 2
      },
      {
        "name": "Darin Trimillos",
        "email": "darintrimillos@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "mhewson",
        "email": "mhewson@gmail.com",
        "commits": 2
      },
      {
        "name": "RatulaREI",
        "email": "51766235+RatulaREI@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/pull-quote/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
