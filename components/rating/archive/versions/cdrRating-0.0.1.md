# <span class="display-name">CdrRating<span>

Ratings are rounded to nearest .25 for displaying stars.

### <span class="modifiers>Modifiers</span>

Modifiers can be combined 1 from each grouping.

{small, medium, large}

Default is large.

### Large + compact

```
<div>
  <cdr-rating rating="5" count="10" modifier="large"></cdr-rating>
  <cdr-rating :rating="1" :count="100" modifier="large" compact></cdr-rating>
</div>
```

### Medium + compact

```
<div>
  <cdr-rating rating="5" count="10" modifier="medium"></cdr-rating>
  <cdr-rating :rating="1" :count="100" modifier="medium" compact></cdr-rating>
</div>
```

### Small + compact

```
<div>
  <cdr-rating rating="5" count="10" modifier="small"></cdr-rating>
  <cdr-rating :rating="1" :count="100" modifier="small" compact></cdr-rating>
</div>
```### <button class='title'>PROPS, METHODS, EVENTS, SLOTS</button>

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
rating | string,number | n/a | true | Rating out of 5
count | string,number | n/a | false | Number of ratings
compact | boolean | false | false | Hides the word 'reviews' if true
