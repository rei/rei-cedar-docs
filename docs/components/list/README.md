---
{
  "title": "List",
  "layout": "LayoutComponent",
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
                "default": "\"ul\"",
                "description": "Tag accepts a user defined element and expects either: 'ul' = Unordered List or 'ol' = Ordered List."
              }
            ],
            "slots": [
              {
                "name": "default",
                "description": "MISSING DESCRIPTION"
              }
            ]
          }
        }
      ],
      "version": "0.1.0"
    }
  ]
}
---

<cdr-doc-tabs :labels="['Overview', 'Design Guidelines', 'API']">
<template slot="Overview">
<cdr-doc-alert/>

# API GUIDE
## The Beginning
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum in sapien sed dictum. Phasellus placerat sem a eros rutrum efficitur. Proin vestibulum quam ut felis maximus lacinia. Vestibulum non cursus massa. Pellentesque quis leo at tellus aliquet porta. Quisque volutpat sollicitudin tincidunt. In gravida ante nisl, at pretium nibh scelerisque eget. Phasellus eleifend pretium imperdiet. Nunc egestas finibus dui a rhoncus. Integer viverra dapibus posuere. Donec ut augue neque. Aliquam sed sem eu lacus posuere semper sit amet quis orci. Suspendisse potenti.

```js
console.log("wachaaaaa!!!")
let chuloo = 'awesome'
let you = 'a little more awesome'
```

## Hidden Leaf API Chakras
Cras euismod venenatis nulla sed fermentum. Etiam venenatis vestibulum metus at rhoncus. Aenean et ex libero. Vivamus dapibus nulla eget nisi elementum, in gravida purus eleifend. Integer id scelerisque ligula. Nulla sit amet odio nisl. Suspendisse tempor risus eget nunc dictum, at placerat turpis malesuada. Aenean sit amet accumsan diam, ultricies facilisis odio. Aenean nec iaculis ipsum. Maecenas finibus pulvinar leo, quis viverra quam. Duis ipsum augue, hendrerit in semper vel, dapibus eu diam. Nulla laoreet rutrum enim vehicula maximus. Vivamus porta congue justo, quis ullamcorper purus pellentesque ac. Aliquam sagittis leo nec consequat vulputate.

<cdr-doc-code-snippet>
```
<h1>Hello World</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis doloremque vero facere. Cumque velit explicabo reprehenderit, et iusto ullam tenetur ipsum ratione, laudantium repudiandae neque natus, a dolorum dignissimos id.</p>
```
</cdr-doc-code-snippet>

### Kakashi Sensei PATCH POST DELETE
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum in sapien sed dictum. Phasellus placerat sem a eros rutrum efficitur. Proin vestibulum quam ut felis maximus lacinia. Vestibulum non cursus massa. Pellentesque quis leo at tellus aliquet porta. Quisque volutpat sollicitudin tincidunt. In gravida ante nisl, at pretium nibh scelerisque eget. Phasellus eleifend pretium imperdiet. Nunc egestas finibus dui a rhoncus. Integer viverra dapibus posuere. Donec ut augue neque. Aliquam sed sem eu lacus posuere semper sit amet quis orci. Suspendisse potenti.


### Konohamaru GET Requests
Cras euismod venenatis nulla sed fermentum. Etiam venenatis vestibulum metus at rhoncus. Aenean et ex libero. Vivamus dapibus nulla eget nisi elementum, in gravida purus eleifend. Integer id scelerisque ligula. Nulla sit amet odio nisl. Suspendisse tempor risus eget nunc dictum, at placerat turpis malesuada. Aenean sit amet accumsan diam, ultricies facilisis odio. Aenean nec iaculis ipsum. Maecenas finibus pulvinar leo, quis viverra quam. Duis ipsum augue, hendrerit in semper vel, dapibus eu diam. Nulla laoreet rutrum enim vehicula maximus. Vivamus porta congue justo, quis ullamcorper purus pellentesque ac. Aliquam sagittis leo nec consequat vulputate.

::: tip Warning!!
Have as much fun as possible!!
:::

### Props

<cdr-doc-api type="prop" />

### Slots 

<cdr-doc-api type="slot" />
</template>


<template slot="Design Guidelines">

#TBD

</template>

<template slot="API">

## Usage

 By default the `cdr-list` component renders as an unordered and undecorated "bare" list.
To use an ordered list pass `ol` to the tag property.
 ```
  <cdr-list tag="ol">
    <li>..</li>
  </cdr-list>
```
Note that the tag itself does not determine display.

### Modifiers
 In addition to our bare list the following modifiers are provided which accommodate our standard text list options.
* unordered
* ordered
* compact
* inline

#### Unordered
The unordered modifier adds a bullet decorator to child list items and a `en-dash` decorator to grand child list items. this variant can be used on both `ul` or `ol` list types.
```
  <cdr-list modifier="unordered">
```

#### ordered
The ordered modifier adds a numeric decorator to child list items and a `en-dash` decorator to grand child list items. this variant can be used on both `ul` or `ol` list types.
```
  <cdr-list
    tag="ol"
    modifier="ordered"
  >
```

#### Compact
The compact modifier reduces the vertical space between list items for non inline list variants. For inline variants the compact modifier reduces the horizontal space between list items.
```
  <cdr-list modifier="compact unordered">
```

#### Inline
The inline modifier is intended for generic or unordered list variants. In ether case this can be combined with compact to adjust the spacing of inline list variants.
```
    <cdr-list modifier="inline compact unordered">
```



## Accessibility
The `cdr-list` component has decoupled the semantic tags `ul` and `ol` from the visual presentation provided by our modifiers. 

This section is focused on semantic implementations of list. 

**Note** that it is perfectly valid to render a semantic ordered list `ol` as a visually non styled or bulleted list using our modifiers.
```
  <cdr-list tag="ol">
```

Use different types of `cdr-list` to group information according to its nature to provide orientation for users.

Unordered lists are used when the order of the items is not relevant. By default the `cdr-list` component will use the `ul` tag.

Individual list items can contain a variety of HTML elements, including paragraphs, headings, form elements, and other (nested) lists.

### Unordered list
The unordered list consists of one `<ul>` element and multiple list item `<li>` elements.

### Ordered list
The ordered list consists of one `<ol>` element and multiple list item `<li>` elements.

### Nested lists
Every `cdr-list` can be nested into another list. Assistive technology can easily inform users about the number of steps.
```
  <cdr-list>
    <li> Unordered list item text
      <cdr-list tag="ol">
        <li>Ordered list item text</li>
      </cdr-list>
    </li>
  </cdr-list>

```

## Installation

Placing the component into a your application is as simple as importing it:
```
npm i @rei/cdr-list
```

## Contributing

* Join us on Slack at [#design-systems](https://rei.slack.com/messages/CA58YCGN4).
* [#Log an issue]()https://github.com/rei/rei-cedar/issues.

</template>
</cdr-doc-tabs>
