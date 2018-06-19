---
navbar: false
pageClass: cdr-doc-proving-ground
---

# Example Code Pair Proving Grounds

## Default Component Behavior

<cdr-doc-example-code-pair>
```html
  <div>
    <cdr-button size="large">Button 1</cdr-button>
    <cdr-button size="small">Button 2</cdr-button>
    <cdr-button>Button 3</cdr-button>
  </div>
```
</cdr-doc-example-code-pair>

## Hide Background Toggle, Code Toggle, add repository and sandbox links

<cdr-doc-example-code-pair :background-toggle="false" :code-toggle="false" repository-href="http://github.com/rei" sandbox-href="http://codesandbox.io">

```html
  <div>
    <h1>Hello World!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ducimus illum unde accusantium magni, nostrum vero autem inventore. Beatae recusandae minima distinctio, aut adipisci debitis consequatur cupiditate similique est eius!</p>
  </div>
```

</cdr-doc-example-code-pair>


## Hide Code on page load

<cdr-doc-example-code-pair :hide-code="true" repository-href="http://github.com/rei" sandbox-href="http://codesandbox.io">

```html
  <div>
    <h1>Hello World!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ducimus illum unde accusantium magni, nostrum vero autem inventore. Beatae recusandae minima distinctio, aut adipisci debitis consequatur cupiditate similique est eius!</p>
  </div>
```

</cdr-doc-example-code-pair>

## Multiple Examples
Note: Only the first example's code is shown in the code snippet when multiple examples are rendered

<cdr-doc-example-code-pair>

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

</cdr-doc-example-code-pair>
