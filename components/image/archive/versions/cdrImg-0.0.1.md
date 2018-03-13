# CdrImg


src/components/image/cdrImg.vue


Cedar 2 component for image



Modifier classes: {responsive, rounded, circle, thumbnail}

### <button class='title'>PROPS, METHODS, EVENTS, SLOTS</button>

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
src | string | n/a | true | Required. Image source url.
alt | string | " " | false | Required. Image alt text.
lazy | boolean | n/a | false | Enable lazy loading.
lazyOpts | object | function() {} | false | Object of lazy options
ratio | string | n/a | false | Aspect ratio of the media container. {auto, square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9}
ratioSm | string | n/a | false | sm breakpoint and above
ratioMd | string | n/a | false | md breakpoint and above
ratioLg | string | n/a | false | lg breakpoint and above
crop | string | n/a | false | Requires a `ratio`. Area to crop the image overflow to. {top, y-center, bottom} {left, x-center, right}
cover | boolean | n/a | false | Requires a `ratio`. Scale the image to be as large as possible to fill the area (background-position: cover;)
radius | string | n/a | false | Sets a border radius to an element {square, top, right, bottom, left}
