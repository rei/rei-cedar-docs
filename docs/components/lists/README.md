---
{
  "title": "Lists",
  "layout_type": "LayoutComponent",
  "summary": "Groups related content items together either vertically or horizontally",
  "title_metadata": "CdrList",
  "component_location": "https://github.com/rei/rei-cedar/tree/next/src/components/list",
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
      "image": "lists/lists_link_do_4-3.png",
      "ratio": "4-3",
      "alt": "List items about different product details correctly separated by bullets.",
      "caption": "link independent clauses and product details."
    },
    {
      "type": "dont",
      "image": "lists/lists_link_dont_4-3.png",
      "ratio": "4-3",
      "alt": "List items about different product details incorrectly appearing on the same bullet.",
      "caption": "link unrelated items together."
    }
  ],
  "list2": [
    {
      "type": "do",
      "image": "lists/lists_punctuation_do_4-3.png",
      "ratio": "4-3",
      "alt": "A two sentence description in a bullet list with a period after the first but not second sentence.",
      "caption": "end each sentence with a period except last sentence."
    },
    {
      "type": "dont",
      "image": "lists/lists_punctuation_dont_4-3.png",
      "ratio": "4-3",
      "alt": "List of two items with incorrect use of terminal punctuation.",
      "caption": "add terminal punctuation."
    }
  ],
  "name": "CdrList",
  "sandboxData": {
    "components": "CdrList"
  },
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
                "description": "Sets valid HTML element tag. Possible values: {  ‘ul’ | ‘ol’  }"
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
                "description": "Sets the innerHTML for CdrList. This includes text and html markup."
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


<cdr-doc-table-of-contents-shell>
# Overview

## Bare

Collect items to be displayed in a list when items are not marked with bullets.  This is the default and is also known as unordered and undecorated “bare” list.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" >


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

</cdr-doc-example-code-pair>

## Unordered

Collect related items that don’t need to be in a specific order or sequence. List items are typically marked with bullets.

<cdr-doc-example-code-pair :codeMaxHeight="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

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

</cdr-doc-example-code-pair>

## Ordered

Collect related items with numeric order or sequence. Numbering starts at 1 with the first list item and increases by increments of 1 for each successive ordered list item.

<cdr-doc-example-code-pair :codeMaxHeight="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

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

</cdr-doc-example-code-pair>

## Compact

Compact modifier can be added to any `cdr-list` in order to reduce the margin between list items.

<cdr-doc-example-code-pair :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" >

```html
  <cdr-list modifier="compact unordered">
    <li>Compact unordered list item 1</li>
    <li>Compact unordered list item 2
      <cdr-list>
        <li>Compact unordered list item</li>
      </cdr-list>
    </li>
    <li>Compact unordered list item 3</li>
  </cdr-list>
```

</cdr-doc-example-code-pair>

## Inline

Display items horizontally with no divider.

<cdr-doc-example-code-pair :codeMaxHeight="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-list modifier="inline">
    <li>Default list item 1</li>
    <li>Default list item 2</li>
    <li>Default list item 3</li>
  </cdr-list>
```

</cdr-doc-example-code-pair>

## Inline - Unordered

Display items horizontally, separated by a bullet character.

<cdr-doc-example-code-pair :codeMaxHeight="false" :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-list modifier="inline unordered">
    <li>Default list item 1</li>
    <li>Default list item 2</li>
    <li>Default list item 3</li>
  </cdr-list>
```

</cdr-doc-example-code-pair>

## Accessibility

To ensure that usage of this component complies with accessibility guidelines:

- Organize lists so users can understand the relationship and grouping of information
- Use explicit list markup that allows users to:
  - Rapidly browse
  - Navigate a page using list content
  - Announce the number of items in each list when using screen readers
- Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text. (Level A)

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

<hr>

# Guidelines

## Use When

- Displaying groups of related items represented by text

## Don't Use When

- Displaying content that is not primarily text
- Displaying content with two or more well-defined dimensions. Instead, use [Table](../table/)

## The Basics

- Lists can inherit cdr-text modifiers to make any text a list
- Follow spacing requirements outlined in the [Typography](../../foundation/typography/) and [Spacing](../../foundation/spacing/) foundation articles.

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

<hr>

# API

<cdr-icon class="cdr-doc-code-snippet__action-icon" use="#brand-github"/> View it on Github: 
<cdr-link :href="$page.frontmatter.component_location">{{$page.frontmatter.component_location}}</cdr-link>

## Props

This component will bind any attribute that a [native HTML list element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) accepts.

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props"/>

## Slots

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

## Component Variables

<cdr-doc-comp-vars name="CdrList"/>

## Usage

Visual style and semantic meaning are managed independently by providing:

- Element to the `tag` prop
- Style to the `modifier` prop

<br/>

By default the **CdrList** component renders as an unordered and undecorated "bare" list. To use an ordered list, pass `<ol>` to the tag property.

```html
<cdr-list tag="ol">
  <li> item one </li>
  <li> item two </li>
</cdr-list>
```

The **CdrList** component has decoupled the semantic tags `<ul>` and `<ol>` from visual presentation.

<br/>

It is possible to render a semantic ordered list `<ol>` as a visually non-styled or bulleted list using the `cdr-list` modifiers. With this decoupling, individual list items can contain a variety of HTML elements, including paragraphs, headings, form elements, and other (nested) lists. Ensure that content is structured and follows design guidelines.

### Tag Variants

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
  - Contains a variety of HTML elements, including paragraphs, headings, form elements, and other (nested) lists

### Modifiers

Note that the tag itself does not determine display, a modifier must be added for list styles. Add one of the following variants to the `modifier` attribute of the `cdr-list` tag to change the visual presentation:

| Value | Description            |
|:------|:-----------------------|
| 'unordered'  | List items are typically marked with bullets |
| 'ordered'  | List items are typically marked with numbers |
| 'compact'  | Reduces spacing between list items |
| 'inline'  | List items appear horizontally with no divider |


</cdr-doc-table-of-contents-shell>
