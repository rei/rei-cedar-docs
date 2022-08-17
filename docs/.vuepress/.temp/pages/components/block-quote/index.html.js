export const data = {
  "key": "v-730dd49a",
  "path": "/components/block-quote/",
  "title": "Block Quote",
  "lang": "en-US",
  "frontmatter": {
    "title": "Block Quote",
    "layout_type": "LayoutComponent",
    "title_metadata": "Quote, CdrQuote",
    "summary": "Short excerpt with an external citation and citation URL that is set off from the main body of text",
    "see_also": [
      {
        "text": "See Also"
      },
      {
        "text": "Pull Quote",
        "href": "../pull-quote/"
      },
      {
        "text": "Text",
        "href": "../text/"
      }
    ],
    "position": [
      {
        "type": "do",
        "image": "block-quote/quotes_block_position_do.png",
        "ratio": "3-2",
        "alt": "Image showing proper block quote use.",
        "caption": "position the quote near the surrounding text."
      },
      {
        "type": "dont",
        "image": "block-quote/quotes_block_position_dont.png",
        "ratio": "3-2",
        "alt": "Image showing random block quotes in an article",
        "caption": "position quotes in a random location on the page."
      }
    ],
    "indenting": [
      {
        "type": "do",
        "image": "block-quote/quotes_block_indent_do.png",
        "ratio": "3-2",
        "alt": "Image showing proper block quote use.",
        "caption": "use for emphasizing content or additional content."
      },
      {
        "type": "dont",
        "image": "block-quote/quotes_block_indent_dont.png",
        "ratio": "3-2",
        "alt": "Image showing random block quotes in an article",
        "caption": "use for indenting text content."
      }
    ],
    "too_many": [
      {
        "type": "do",
        "image": "block-quote/quotes_block_too_many_do.png",
        "ratio": "3-2",
        "alt": "Image showing proper block quote position.",
        "caption": "position quotes so users can visually scan the page."
      },
      {
        "type": "dont",
        "image": "block-quote/quotes_block_too_many_dont.png",
        "ratio": "3-2",
        "alt": "Image showing too many block quotes in an article",
        "caption": "use too many block quotes."
      }
    ],
    "citation": [
      {
        "type": "do",
        "image": "block-quote/quotes_block_citation_do.png",
        "ratio": "3-2",
        "alt": "Image showing proper block citation.",
        "caption": "provide a citation."
      },
      {
        "type": "dont",
        "image": "block-quote/quotes_block_citation_dont.png",
        "ratio": "3-2",
        "alt": "Image showing too improper citation style",
        "caption": "emphasize the citation."
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
                  "type": "string",
                  "default": "`blockquote`",
                  "required": "false",
                  "description": "Sets the ‘tag’ attribute for cdr-quote to define the root HTML element. Possible values: {  ‘blockquote’  |  ‘aside’  |  ‘q’  |  ‘div’  }"
                },
                {
                  "name": "summary",
                  "type": "string",
                  "default": "",
                  "required": "false",
                  "description": "Sets the quote body text."
                },
                {
                  "name": "cite",
                  "type": "string",
                  "default": "",
                  "required": "false",
                  "description": "When the ‘tag’ prop is set to ‘blockquote’ provide a URL to the quote’s source. This does not render but is available to screen readers and search engines."
                },
                {
                  "name": "citation",
                  "type": "string",
                  "default": "",
                  "required": "false",
                  "description": "Sets the quote attribution text."
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
      "title": "Content",
      "slug": "content",
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
    "updatedTime": 1590789638000,
    "contributors": [
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 10
      },
      {
        "name": "Ben Griffin",
        "email": "bgriffi@rei.com",
        "commits": 5
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
        "name": "mhewson",
        "email": "mhewson@gmail.com",
        "commits": 3
      },
      {
        "name": "Darin Trimillos",
        "email": "darin@trimillos.com",
        "commits": 3
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 3
      },
      {
        "name": "shart-rei",
        "email": "43073801+shart-rei@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "RatulaREI",
        "email": "51766235+RatulaREI@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "Jay Smith",
        "email": "jay@ui.systems",
        "commits": 1
      },
      {
        "name": "rebecca-larue",
        "email": "53016572+rebecca-larue@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "Darin Trimillos",
        "email": "darintrimillos@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/block-quote/README.md"
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
