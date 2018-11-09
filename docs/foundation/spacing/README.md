---
{
  "title": "Spacing",
  "title_metadata": false,
  "layout": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Foundation/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell>

## Spacing

Cedar provides easy-to-use, preset values to apply consistent spacing within and between components. These spacing tokens help maintain a cohesive visual style across all REI properties.

Spacing symbols are available within the Cedar UI Toolkit and directly reflect the token names in the code ensuring a [more efficient handoff](../../getting-started/as-a-designer/?active-link=annotating-delivering-cedar-based-designs) between design and development. 

## Concepts
The Cedar spacing system is built on three core concepts: `inset`, `stack` and `inline`. Whether applying space within a container or between two components, the included options make for easier and more consistent design decisions. 

### Inset
An `inset` is the space within a block from which elements—typography, images, icons, and more—are separated from the edge. Cedar offers different options for inset tokens including default, squish and stretch. 

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/spacing/inset-options.gif`)" alt="examples demoing spacing of inset, inset squish, and inset stretch" />

The base `inset` tokens have all four sides matching in value, resulting in consistent space within the container. The base inset is 16px with options ranging from 2px to 64px. Names are tied to the base 16 and increase or decrease accordingly.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/spacing/inset.jpg`)" alt="inset examples"/>

### Inset-Squish
An `inset-squish` reduces top and bottom spacing by 50% relative to the default inset value, resulting in a vertically condensed visual display.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/spacing/inset-squish.gif`)" alt="inset squish examples"/>

### Inset-Stretch
An `inset-stretch` increases top and bottom spacing by 50% relative to the default inset value, resulting in a vertically expanded visual display.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/spacing/inset-stretch.gif`)" alt="inset stretch examples"/>

## Stack vs Inline
`Inset` tokens are for space within a container, while `stack` and `inline` tokens adjust the space outside of a component/object. In CSS terms, think of `inset` as padding and `stack` & `inline` as margin.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/spacing/stack-vs-inline.jpg`)" alt="image showing stack vs inline"/>

### Stack
Use `stack` tokens to separate components arranged vertically. The last instance of a component should omit this space. The default `stack` is 16px with options ranging from 2px to 64px. Names are tied to the base 16 and increase or decrease accordingly.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/spacing/stack.jpg`)" alt="stack examples"/>

### Inline
Use `inline` tokens to separate elements arranged horizontally and that may wrap on the right. The last instance of a component should omit this space. The default `inline` is 16px with options ranging from 2px to 64px. Names are tied to the base 16 and increase or decrease accordingly.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/spacing/inline.jpg`)" alt="inline examples"/>

## Generic Space Values
The specific options for `inset` may not fit every solution. When this is the case, use the generic spacing tokens to keep consistent spatial concepts and maintenance in code.

<pre>space-eighth-x: 2px</pre>
<pre>space-quarter-x: 4px</pre>
<pre>space-half-x: 8px</pre>
<pre>space-three-quarter-x: 12px</pre>
<pre>space-1-x: 16px</pre>
<pre>space-1-and-a-half-x: 24px</pre>
<pre>space-2-x: 32px</pre>
<pre>space-4-x: 64px</pre>

</cdr-doc-table-of-contents-shell>
