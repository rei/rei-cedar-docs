export const data = {
  "key": "v-02735a1c",
  "path": "/components/rating/",
  "title": "Rating",
  "lang": "en-US",
  "frontmatter": {
    "title": "Rating",
    "layout_type": "LayoutComponent",
    "title_metadata": "Rating, Stars, Reviews, CdrRating",
    "summary": "Provides insights into user opinions for products, experiences and expert information",
    "stars": [
      {
        "type": "do",
        "image": "rating/rating_stars_do_16-9.png",
        "ratio": "16-9",
        "alt": "Image showing rating with 5 stars",
        "caption": "show all 5 stars."
      },
      {
        "type": "dont",
        "image": "rating/rating_stars_dont_16-9.png",
        "ratio": "16-9",
        "alt": "Image showing rating with fewer than 5 stars",
        "caption": "adjust the number of stars."
      }
    ],
    "number": [
      {
        "type": "do",
        "image": "rating/rating_number_do_16-9.png",
        "ratio": "16-9",
        "alt": "Image showing rating with number of reviews text",
        "caption": "display the number of reviews next to the star rating."
      },
      {
        "type": "dont",
        "image": "rating/rating_number_dont_16-9.png",
        "ratio": "16-9",
        "alt": "Image showing rating without number of reviews text",
        "caption": "only show the stars."
      }
    ],
    "none": [
      {
        "type": "do",
        "image": "rating/rating_none_do_16-9.png",
        "ratio": "16-9",
        "alt": "Image showing rating with empty stars",
        "caption": "show an empty rating when no reviews are available."
      },
      {
        "type": "dont",
        "image": "rating/rating_none_dont_16-9.png",
        "ratio": "16-9",
        "alt": "Image showing the text 'no ratings available'",
        "caption": "hide rating in lieu of ‘No Ratings Available’ or blank space."
      }
    ],
    "breadcrumbs": [
      {
        "text": "Components/"
      }
    ],
    "sandboxData": {
      "components": "CdrRating"
    },
    "versions": [
      {
        "components": [
          {
            "name": "CdrRating",
            "api": {
              "props": [
                {
                  "name": "rating",
                  "type": "number",
                  "default": "0",
                  "required": "true",
                  "description": "Sets the rating values between 0 and 5. Required."
                },
                {
                  "name": "count",
                  "type": "number",
                  "default": "0",
                  "required": "false",
                  "description": "Displays the total number of reviews."
                },
                {
                  "name": "compact",
                  "type": "boolean",
                  "default": "false",
                  "required": "false",
                  "description": "Hides the word 'Reviews' if true."
                },
                {
                  "name": "href",
                  "type": "string",
                  "default": "N/A",
                  "required": "false",
                  "description": "Sets the rating component (icons and text) to display inline and wraps them in an anchor tag."
                },
                {
                  "name": "size",
                  "type": "string",
                  "default": "medium",
                  "required": "false",
                  "description": "Sets the rating component size; Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }"
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
      "title": "Linked",
      "slug": "linked",
      "children": []
    },
    {
      "level": 2,
      "title": "Compact (Small)",
      "slug": "compact-small",
      "children": []
    },
    {
      "level": 2,
      "title": "Sizing",
      "slug": "sizing",
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
      "title": "Content",
      "slug": "content",
      "children": []
    },
    {
      "level": 2,
      "title": "Behavior",
      "slug": "behavior",
      "children": [
        {
          "level": 3,
          "title": "Do / Don’t",
          "slug": "do-don-t",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Resources",
      "slug": "resources",
      "children": []
    },
    {
      "level": 2,
      "title": "Props",
      "slug": "props",
      "children": []
    },
    {
      "level": 2,
      "title": "Usage",
      "slug": "usage",
      "children": [
        {
          "level": 3,
          "title": "Rating Values",
          "slug": "rating-values",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 1633985878000,
    "contributors": [
      {
        "name": "Cole Willsea",
        "email": "cowills@rei.com",
        "commits": 13
      },
      {
        "name": "Lance Harper",
        "email": "laharpe@rei.com",
        "commits": 8
      },
      {
        "name": "Darin Trimillos",
        "email": "darin@trimillos.com",
        "commits": 6
      },
      {
        "name": "RaunCraig",
        "email": "RaunCraig@users.noreply.github.com",
        "commits": 4
      },
      {
        "name": "michael",
        "email": "mhewson@gmail.com",
        "commits": 4
      },
      {
        "name": "Ben Griffin",
        "email": "bgriffi@rei.com",
        "commits": 2
      },
      {
        "name": "RachelDoren",
        "email": "racheledoren@gmail.com",
        "commits": 2
      },
      {
        "name": "mhewson",
        "email": "mhewson@gmail.com",
        "commits": 2
      },
      {
        "name": "mking18",
        "email": "43073485+mking18@users.noreply.github.com",
        "commits": 2
      },
      {
        "name": "mhewson",
        "email": "mhewson@rei.com",
        "commits": 1
      },
      {
        "name": "Darin Trimillos",
        "email": "darintrimillos@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "shart-rei",
        "email": "43073801+shart-rei@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "RatulaREI",
        "email": "51766235+RatulaREI@users.noreply.github.com",
        "commits": 1
      },
      {
        "name": "rebecca-larue",
        "email": "53016572+rebecca-larue@users.noreply.github.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "components/rating/README.md"
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
