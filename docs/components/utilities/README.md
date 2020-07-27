---
{
  "title": "Utilities",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Loading Utility Classes

Cedar utility classes are compiled into multiple files that must be loaded before they can be used. See [Getting Started as a Developer Guide](https://rei.github.io/rei-cedar-docs/getting-started/as-a-developer#Include-Component-and-Utility-CSS) for more information.

Note that in order to use 1 utility class you must load all of the utility classes in that same file. This may impact your bundle size if loading the larger utility class files such as `cdr-text` and `cdr-space`. All of the utility classes correspond to either a cedar token (`cdr-color-text-primary`), a mixin (`cdr-text-default`), or a simple CSS value (`display: none`). If your project depends on performance it may be better to apply those tokens, mixins, and styles to your CSS directly rather than using the utility classes. In general, reusable shared components should avoid using the utility classes to provide the most flexibility to their consumers. 

<css-utilities />

</cdr-doc-table-of-contents-shell>
