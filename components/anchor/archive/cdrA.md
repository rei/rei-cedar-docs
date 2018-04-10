# <span class="display-name">CdrAnchor</span>

### <span class="modifiers">Modifiers</span>

Modifiers can be combined 1 from each grouping.

{contrast, overlay, standalone} **OR** button

Use of the 'button' modifier depends on including the css for cdrButton.

A modifier list that contains 'button' exposes the same modifiers as cdrButton and the other modifiers shouldn't be combined with it.

### <button class='title'>PROPS, METHODS, EVENTS, SLOTS</button>

Slot | Description
--- | ---
default | innerHTML on the inside of the anchor component
### Examples

#### Basic
```
<cdr-a href="https://www.rei.com/">Default link</cdr-a>

```

#### Standalone

```
<cdr-a modifier="standalone" href="https://www.rei.com/">An example standalone link</cdr-a>
```

#### Button modifier

```
<cdr-a modifier="button" href="https://www.rei.com/">Link as button</cdr-a>
```
