# <span class="display-name">CdrActivityCard</span>

While the simple card is a generic wrapper that does not do much more than provide a chome, the activity card is a composition of compomnents and is intended to fill a specific role as outlined. 
 
This Component enhances the behavior of specific presentation parts that are important for this use case, knotice that by providing a title url that the entire card becomes "hot". Note also that this does not alter the tab index of nested elements and remains accessible to screen readers. 
### <button class='title'>PROPS, METHODS, EVENTS, SLOTS</button>

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
media | string | n/a | false | Path to primary image
mediaAlt | string | " " | false | this is set to top when there is no attribution
mediaRatio | string | n/a | false | Aspect ratio of the media container. {square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9}. See cdr-img
mediaCover | boolean | n/a | false | Requires `mediaRatio`. Scale the image to be as large as possible to fill the area (background-position: cover;) See cdr-img
mediaCrop | string | n/a | false | Requires `mediaRatio`. Area to crop the image overflow to. {top, y-center, bottom} {left, x-center, right} See cdr-img
title | string | n/a | false | Title text
titleUrl | string | n/a | true | href to turn card into a link
titleLevel | string,number | "2" | false | Heading level
label | string | n/a | false | Label text
location | string | n/a | false | Location text
snapshot | array | n/a | false | Snapshot text
rating | string,number | n/a | false | Rating value
count | string,number | n/a | false | Number of ratings
### Examples 
 
#### Activity card  
``` 
var snapshotData = ['7.5 mi', 'out & back', '286 ft Ele Gain'];

var cardData = {
  media: 'http://placehold.it/350x150',
  label: 'hiking',
  title: 'Snow Lake Trail'
};

<cdr-activity-card 
  :media="cardData.media"
  :label="cardData.label"
  title-url="http://rei.com"
  :title="cardData.title"
  :snapshot="snapshotData"
  location="Seattle, WA"
  rating="5"
  count="138">
</cdr-activity-card>
```
