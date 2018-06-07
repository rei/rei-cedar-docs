---
{
	"title": "Button",
	"layout": "LayoutComponent",
	"summary": "Buttons are used to invoke an event and communicate the action that will occur.",
	"title_metadata": "Also known as a Call-to-Action (CTA)",
	"breadcrumbs": [
		{
			"text": "Components/",
			"href": "#"
		}
  ],
  "name": "CdrButton",
  "versions": [
    {
      "api": {
        "props": [
          {
            "name": "size",
            "type": "string",
            "default": "\"medium\"",
            "description": "Sets a static size for the button, which scales padding and text size. {small, medium, large}"
          },
          {
            "name": "responsiveSize",
            "type": "array",
            "default": "n/a",
            "description": "Render a specific button size at a specific breakpoint. Takes precedence over size and fullWidth.\nFormat is size@breakpoint (ex: large@sm)."
          }
        ],
        "slots": [
          {
            "name": "default",
            "description": "innerHTML on the inside of the button component"
          },
          {
            "name": "test",
            "description": "testing multiple slot documentation"
          }
        ]
      },
      "version": "0.1.0"
    }
  ]
}
---

<cdr-doc-tabs>
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

# <span class="display-name">CdrButton</span>

### <span class="modifiers">Modifiers</span>

Modifiers can be combined 1 from each grouping.

{secondary} | {sm,xs} | {block, fixed, responsive} **OR** link

Use of the 'link' modifier depends on including the css for cdrA.

A modifier list that contains 'link' exposes the same modifiers as cdrA and the other modifiers shouldn't be combined with it.

Responsive makes the button full width and block @ sm breakpoint.

</template>

<template slot="API">

# Properties
API Props

</template>

<template slot="History">

# Last updated
June 19, 2018

# Contributors

</template>
</cdr-doc-tabs>
