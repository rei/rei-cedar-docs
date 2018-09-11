---
{
   "title": "Lists",
   "layout": "LayoutComponent",
   "summary": "Group related content items together either vertically or horizontally",
   "title_metadata": " Bare list, Unstyled list, Unordered list, Ordered list, Inline list, CdrList",
   "see_also": [
      {
        "text": 'See Also'
      },
      {
        "text": 'Accordion',
        "href": '../accordion/'
      },
      {
        "text": 'Breadcrumb',
        "href": '../breadcrumb/'
      }
    ],
	  "list1": [
      {
        "type": "do",
        "image": "lists/lists_grammar_do__4-3.png",
        "ratio": "4-3",
        "alt": "",
        "caption": "link independent clauses and product details."
      },
      {
        "type": "dont",
        "image": "lists/lists_grammar_dont__4-3.png",
        "ratio": "4-3",
        "alt": "",
        "caption": "link unrelated items together."
      }
    ],
    "list2": [
      {
        "type": "do",
        "image": "lists/lists_punctuation_do_3-4.png",
        "ratio": "3-4",
        "alt": "",
        "caption": "end each sentence with a period except last sentence."
      },
      {
        "type": "dont",
        "image": "lists/lists_punctuation_dont_3-4.png",
        "ratio": "3-4",
        "alt": "",
        "caption": "add terminal punctuation."
      }
    ],
  "name": "CdrList",
  "versions": [
    {
      "components": [
      {
        "name": "CdrList",
        "api": {
          "props": [
            {
              "name": "tag",
              "type": "string",
              "default": "'ul'",
              "description": "Sets valid HTML element tag for lists. Possible values: {  ‘ul’ | ‘ol’  }"
            },
            {
              "name": "modifier",
              "type": "string",
              "default": "N/A",
              "description": "Modifies the style variant for this component. Possible values: {  ‘ordered’  |  ‘unordered’  |  ‘compact’  |  ‘inline’  }"
            }
          ],
          "slots": [
            {
              "name": "default",
              "description": "Sets the innerHTML for cdr-list. This includes text and html markup"
            }
          ],
        },
      },
      ],
      "version": "0.1.0"
    }
  ]
}
---

<cdr-doc-tabs>
<template slot="Overview">
<cdr-doc-table-of-contents-shell>

## Bare

Collect items to be displayed in a list when items are not marked with bullets.  Also known as unordered and undecorated “bare” list.

<cdr-doc-example-code-pair :background-toggle="false" repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/list" sandbox-href="https://codesandbox.io/s/1q95wpz4rq" :codeMaxHeight= false >
<template slot="Default">

```html
  <cdr-list>
    <li>Default list item 1</li>
    <li>Default list item 2
      <cdr-list>
        <li>Default list item</li>
      </cdr-list>
    </li>
    <li>Default list item 3</li>
  </cdr-list>
```
</template>

<template slot="compact">

```html
  <cdr-list modifier="compact">
    <li>Compact list item 1</li>
    <li>Compact list item 2
      <cdr-list>
        <li>Compact list item</li>
      </cdr-list>
    </li>
    <li>Compact list item 3</li>
  </cdr-list>
```
  
</template>

</cdr-doc-example-code-pair>

## Unordered

Collect related items that don’t need to be in a specific order or sequence. List items are typically marked with bullets.

<cdr-doc-example-code-pair :background-toggle="false" :codeMaxHeight= false repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/list" sandbox-href="https://codesandbox.io/s/1q95wpz4rq" >
<template slot="Default">

```html
  <cdr-list modifier="unordered">
    <li>Default list item 1</li>
    <li>Default list item 2
      <cdr-list>
        <li>Default list item</li>
      </cdr-list>
    </li>
    <li>Default list item 3</li>
  </cdr-list>
```
</template>

<template slot="compact">

```html
  <cdr-list modifier="unordered compact">
    <li>Compact list item 1</li>
    <li>Compact list item 2
      <cdr-list>
        <li>Compact list item</li>
      </cdr-list>
    </li>
    <li>Compact list item 3</li>
  </cdr-list>
```
  
</template>


</cdr-doc-example-code-pair>

## Ordered

Collect related items with numeric order or sequence. Numbering starts at 1 with the first list item and increases by increments of 1 for each successive ordered list item.

<cdr-doc-example-code-pair :background-toggle="false" :codeMaxHeight= false repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/list" sandbox-href="https://codesandbox.io/s/1q95wpz4rq" >
<template slot="Default">

```html
  <cdr-list tag="ol" modifier="ordered">
    <li>Default list item 1</li>
    <li>Default list item 2
      <cdr-list>
        <li>Default list item</li>
      </cdr-list>
    </li>
    <li>Default list item 3</li>
  </cdr-list>
```
</template>

<template slot="compact">

```html
  <cdr-list tag="ol" modifier="ordered compact">
    <li>Compact list item 1</li>
    <li>Compact list item 2
      <cdr-list>
        <li>Compact list item</li>
      </cdr-list>
    </li>
    <li>Compact list item 3</li>
  </cdr-list>
```
  
</template>

</cdr-doc-example-code-pair>

## Inline

Display items horizontally with no divider.

<cdr-doc-example-code-pair :background-toggle="false" :codeMaxHeight= false repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/list" sandbox-href="https://codesandbox.io/s/1q95wpz4rq" >
<template slot="Default">

```html
  <cdr-list modifier="inline">
    <li>Default list item 1</li>
    <li>Default list item 2</li>
    <li>Default list item 3</li>
  </cdr-list>
```
</template>

<template slot="compact">

```html
  <cdr-list modifier="inline compact">
    <li>Compact list item 1</li>
    <li>Compact list item 2</li>
    <li>Compact list item 3</li>
  </cdr-list>
```
  
</template>

</cdr-doc-example-code-pair>

## Inline - Unordered

Display items horizontally, separated by a bullet character.

<cdr-doc-example-code-pair :background-toggle="false" :codeMaxHeight= false repository-href="https://github.com/rei/rei-cedar/tree/18.07.2/src/components/list" sandbox-href="https://codesandbox.io/s/1q95wpz4rq" >
<template slot="Default">

```html
  <cdr-list modifier="inline unordered">
    <li>Default list item 1</li>
    <li>Default list item 2</li>
    <li>Default list item 3</li>
  </cdr-list>
```
</template>

<template slot="compact">

```html
  <cdr-list modifier="inline compact unordered">
    <li>Compact list item 1</li>
    <li>Compact list item 2</li>
    <li>Compact list item 3</li>
  </cdr-list>
```
  
</template>

</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:

- Organize lists so users can understand the relationship and grouping of information
- Use explicit list markup that allows users to:
  - Rapidly browse
  - Navigate a page using list content
  - Announce the number of items in each list when using screen readers

<br />

When creating nested lists, ensure they are coded properly. Always check that:

- List items are contained within one list
- Spacing does not break a list into multiple individual points
- Proper semantic tags are used - either `<ol>` or `<ul>`
- Proper structure is used to provide a visual list, do not rely on indentation
- Special characters are not used to create a list

<br />

This component has compliance with WCAG guidelines by:

- Providing ability to create structured lists. Lists are easier to navigate than simple tables

</cdr-doc-table-of-contents-shell>
</template>

<template slot="Design Guidelines">
<cdr-doc-table-of-contents-shell>

## Use when

- Displaying groups of related items represented by text

### Don’t use when

- Displaying content that is not primarily text
- Displaying content with two or more well-defined dimensions

## Foundations

- Vary list item font size
- Follow spacing requirements found on [Typography](../../foundation/typography/) and [Spacing](../../foundation/spacing/) pages

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/lists/Spec_List_Font_Size_Variations_16-9.png`)" ratio="16-9"/>

## Content

Break up chunks of content to make the information easier to scan:

- Separate consecutive lists on a page with a heading for each list
- Start each item with a noun or a verb
- Use similar phrases or clauses with the same grammatical structure. For example:
  - **Product.** Zippered hand pockets; chest pocket with hidden zipper
  - **Materials.** Snowshoes: plastic; poles: aluminum
  - **Duration.** High: 4 hrs. 15 min.; low: 48 hrs. 20 min.
- Create structured content with a list. Do not use a list for formatting

<br />

Use multi-column lists when:

- Specific ordering is not required
- Listing items with a single word or very short phrases
- Space is minimal
- Viewing items at a glance is more beneficial than scrolling

<br />

Every item in a list must:

- Start with a capital letter and use sentence case
- Use semicolons when linking independent clauses and product details in the list
- End each sentence in a list item with a period when there are multiple sentences; however, don’t add a period for the last sentence or phrase

### Do / Don’t

<do-dont :examples="$page.frontmatter.list1" />
<br />
<do-dont :examples="$page.frontmatter.list2" />

## Resources

WebAIM: [Semantic Structure: Using Lists Correctly](https://webaim.org/techniques/semanticstructure/)

</cdr-doc-table-of-contents-shell>
</template>

<template slot="API">
<cdr-doc-table-of-contents-shell>

## Props

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props"/>

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Installation

Resources are available within the [CdrList package](https://www.npmjs.com/package/@rei/cdr-list):

- Component: `@rei/cdr-list`
- Component styles: `cdr-list.css`

<br/>

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the CdrList package using `npm` in your terminal:

_Terminal_

<cdr-doc-code-snippet :line-numbers="false" :copy-button="false">

```bash
npm i -S @rei/cdr-list
```

</cdr-doc-code-snippet>

### 2. Import dependencies

_main.js_

<cdr-doc-code-snippet :line-numbers="false" :copy-button="false">

```javascript
// import your required CSS.
import '@rei/cdr-list/dist/cdr-list.css';
```
</cdr-doc-code-snippet>

### 3. Add component to a template

_local.vue_

```vue
<template>
  <cdr-list>
    <li> item one </li>
    <li> item two </li>
  </cdr-list>
</template>

<script>
import { CdrList } from '@rei/cdr-list';
export default {
  components: {
     CdrList  
  }
}
</script>
```

## Usage

Visual style and semantic meaning are managed independently by providing: 

- Element to the `tag` prop
- Style to the `modifier` prop

<br/>

By default the CdrList component renders as an unordered and undecorated "bare" list. To use an ordered list pass `<ol>` to the tag property.

```html
<cdr-list tag="ol">
  <li> item one </li>
  <li> item two </li>
</cdr-list>
```

The CdrList component has decoupled the semantic tags `<ul>` and `<ol>` from visual presentation. 

<br/>

It is possible to render a semantic ordered list `<ol>` as a visually non styled or bulleted list using the `cdr-list` modifiers. With this decoupling, individual list items can contain a variety of HTML elements, including paragraphs, headings, form elements, and other (nested) lists. Ensure that content is structured and follows design guidelines.

### Tag variants

Following are different types of lists:

- Unordered lists:
  - Used when the order of the items is not relevant
  - Consists of one `<ul>` element and multiple list item `<li>` elements
- Ordered lists:
  - Used for sequential information
  - Consists of one `<ol>` element and multiple list item `<li>` elements
- Nested lists:
  - Every `cdr-list` can be nested into another list
  - Assistive technology can easily inform users about the number of steps

```vue
<cdr-list>
   <li> Unordered list item text
     <cdr-list tag="ol">
       <li>Ordered list item text</li>
     </cdr-list>
   </li>
 </cdr-list>
```

- Bare or unstyled lists:
  - Can contain a variety of HTML elements, including paragraphs, headings, form elements, and other (nested) lists

### Modifier options

Note that the tag itself does not determine display, a modifier must be added for list styles. Add one of the following variants to the `modifier` attribute of the `cdr-list` tag to change the visual presentation:

| **Name**  | **Description**                                                                                                                                                                        | **Example** |
|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| unordered | The unordered modifier adds a bullet decorator to child list items and a ‘en-dash’ decorator to grandchild list items. This variant can be used on both `<ul>`  or `<ol>`  list types. | `<cdr-list modifier="unordered">` |
| ordered   | The ordered modifier adds a numeric decorator to child list items and a ‘en-dash’ decorator to grandchild list items. This variant can be used on both `<ul>`  or `<ol>`  list types.      | `<cdr-list tag="ol" modifier="ordered" >`|
| compact   | The compact modifier reduces the vertical space between list items for non-inline list variants. For inline variants the compact modifier reduces the horizontal space between list items. | `<cdr-list modifier="compact">` |
| inline    | The inline modifier is intended for bare or unordered list variants. In ether case this can be combined with compact to adjust the spacing of inline list variants.                        | `<cdr-list modifier=" inline">` |


</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

- Displays with following variants:
  - Bare (default)
  - Ordered
  - Unordered
  - Compact
  - Inline
- Can be an ordered `<ol>` or unordered `<ul>` list, the tag itself does not determine styling
- [Complete component history](https://github.com/rei/rei-cedar/blob/master/src/components/list/CHANGELOG.md)

</template>
</cdr-doc-tabs>
