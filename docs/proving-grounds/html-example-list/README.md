---
navbar: false
pageClass: cdr-doc-proving-ground
---

# Html Example List Proving Grounds

## Default Component Behavior
<cdr-doc-html-example-list>
```html
  <div>
    <cdr-button size="large">Button 1</cdr-button>
    <cdr-button size="small">Button 2</cdr-button>
    <cdr-button>Button 3</cdr-button>
  </div>
```
</cdr-doc-html-example-list>

## With Label
<cdr-doc-html-example-list label="State of component">
```html
  <div>
    <cdr-button size="large">Button 1</cdr-button>
    <cdr-button size="small">Button 2</cdr-button>
    <cdr-button>Button 3</cdr-button>
  </div>
```
</cdr-doc-html-example-list>

## No Background Toggle
<cdr-doc-html-example-list :background-toggle="false">
```html
  <cdr-list
    modifier="unordered"
    class="cdr-stack--lg"
  >
    <li>List item text</li>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodList ordered
      <cdr-list>
        <li>List item text</li>
        <li>List item text
          <cdr-list>
            <li>List item text</li>
            <li>List item text</li>
          </cdr-list>
        </li>
      </cdr-list>
    </li>
    <li>List item text</li>
  </cdr-list>
```
</cdr-doc-html-example-list>

## No Background Toggle, background color set to dark
<cdr-doc-html-example-list :background-toggle="false" background-color="dark">
```html
  <cdr-button>Testing</cdr-button>
```
</cdr-doc-html-example-list>

## Multiple Examples
<cdr-doc-html-example-list backgroundColor>
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

## Multiple Examples, prevent interaction with examples and hide slot labels

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

## Multiple Examples, hide background toggles and manually set individual item backgrounds

<cdr-doc-html-example-list :background-colors="{'Default':'dark', 'Focused':'dark'}" :background-toggle="false">
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
