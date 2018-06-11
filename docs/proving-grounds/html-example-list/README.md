---
navbar: false
pageClass: cdr-doc-proving-ground
---

# Html Example List Proving Grounds

## Default Component Behavior
<cdr-doc-html-example-list>
```html
  <div>
    <cdr-button size="large">It's working</cdr-button>
    <cdr-button size="small">Sort of updating</cdr-button>
    <cdr-button>Foo</cdr-button>
  </div>
```
</cdr-doc-html-example-list>

## Multiple Examples

<cdr-doc-html-example-list>
  <template slot="default">

```html
  <cdr-button size="large">Don't forget the spaces</cdr-button>
```
  
  </template>
  <template slot="hover">

```html
  <cdr-button size="small">Hovering</cdr-button>
```

  </template>
</cdr-doc-html-example-list>
