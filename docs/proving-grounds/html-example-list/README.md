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

## With Label
<cdr-doc-html-example-list label="State of component">
```html
  <div>
    <cdr-button size="large">It's working</cdr-button>
    <cdr-button size="small">Sort of updating</cdr-button>
    <cdr-button>Foo</cdr-button>
  </div>
```
</cdr-doc-html-example-list>

## No Background Toggle
<cdr-doc-html-example-list :background-toggle="false">
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
  <template slot="Default">

```html
  <cdr-button size="large">Default</cdr-button>
```
  
  </template>
  <template slot="Hover">

```html
  <cdr-button size="small" class="cdr-doc-button-demo--hover">Hover</cdr-button>
```

  </template>
  <template slot="Active">

```html
  <cdr-button size="small">Active</cdr-button>
```

  </template>
  <template slot="Focused">

```html
  <cdr-button size="small">Focused</cdr-button>
```

  </template>
</cdr-doc-html-example-list>

## Multiple Examples, prevent interaction and hide slot labels

<cdr-doc-html-example-list :interactive="false" :show-example-labels="false">
  <template slot="Default">

```html
  <cdr-button size="large">Default</cdr-button>
```
  
  </template>
  <template slot="Hover">

```html
  <cdr-button size="small" class="cdr-doc-button-demo--hover">Hover</cdr-button>
```

  </template>
  <template slot="Active">

```html
  <cdr-button size="small">Active</cdr-button>
```

  </template>
  <template slot="Focused">

```html
  <cdr-button size="small">Focused</cdr-button>
```

  </template>
</cdr-doc-html-example-list>
