# <span class="display-name">CdrRating</span>


<span class="file">src/components/rating/cdrRating.vue<span>


Cedar 2 component for rating

Ratings are rounded to nearest .25 for displaying stars.

<span class="modifiers">Modifiers</span>

Modifiers can be combined 1 from each grouping.

{small, medium, large}

Default is large

### <button class='title'>PROPS, METHODS, EVENTS, SLOTS</button>

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
rating | string,number | n/a | true | Rating out of 5
count | string,number | n/a | false | Number of ratings
compact | boolean | false | false | Hides the word 'reviews' if true
