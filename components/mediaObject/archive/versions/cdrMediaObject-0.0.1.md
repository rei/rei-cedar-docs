# <span class="display-name">CdrMediaObject</span>


<span class="file">src/components/mediaObject/cdrMediaObject.vue<span>


Cedar 2 component for media object

The Media Object allows you to group small amounts of like content is a small amount of markup. The examples below show some of the may visual displays available to this component.

<span class="modifiers">Modifiers</span>

{top, right, bottom, center, overlay, block, stretch}

top: Media figure displays above Media body

right: Media figure displays to the right of the Media body

bottom: Media figure displays below the Media body

center: Can be stacked with other alignment modifiers and will center the Media figure.

overlay: Media Body overlays the Media Frame

stretch: The Media Frame extends 16px left and right from the parent container. This is intended to be used with the top or bottom modifier.

block: The Media Frame extends 16px left and right from the parent container. And an additional 16px left and right value wraps the media object. This is intended to be used with the top or bottom modifier.

### <button class='title'>PROPS, METHODS, EVENTS, SLOTS</button>

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
width | string | n/a | false | Sets the media width
mediaAlign | string | n/a | false | Allows you to align your text {right, left, center}
iconUrl | string | n/a | false | icon svg path. See cdr-icon
imgClass | string | n/a | false | Custom class added to the image/icon
imgSrc | string | n/a | false | Image path. See cdr-img
imgRadius | string | n/a | false | Image radius. See cdr-img
imgRatio | string | n/a | false | Aspect ratio of the media container. {square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9} See cdr-img
imgCover | boolean | n/a | false | Requires `imgRatio`. Scale the image to be as large as possible to fill the area (background-position: cover;) See cdr-img
imgCrop | string | n/a | false | Requires `imgRatio`. Area to crop the image overflow to. {top, y-center, bottom} {left, x-center, right} See cdr-img
imgAlt | string | n/a | false | Image alternitive description, defaults to blank. See cdr-img
imgModifier | string | n/a | false | {Responsive, Rounded, circle, thumbnail}. See cdr-img
imgHref | string | n/a | false | Link the image
imgHrefText | string | n/a | false | Screen reader text for the linked image
imgTarget | string | n/a | false | Target for the image link

Slot | Description
--- | ---
default | innerHTML inside of the media object component
