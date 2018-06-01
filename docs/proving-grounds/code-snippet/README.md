---
navbar: false
pageClass: cdr-doc-proving-ground
---

# Code Snippet Proving Grounds

## Default Markdown Highlighting, No Component

```html
  <h1>Testing. 1. 2. 3.</h1>
  <h2>Is this thing on?</h2>
  <h3>Tap, Tap, Tap</h3>
```

## Default Component Behavior
<cdr-doc-code-snippet>
  ```html
    <h1>Hello World</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea mollitia harum ex quaerat, libero, debitis rem deleniti temporibus aliquid! Ipsum odit tenetur, vero laboriosam saepe sit dignissimos aut. Quasi, unde.</p>
  ```
</cdr-doc-code-snippet>

## Wrapped as snippet, No Copy Button
<cdr-doc-code-snippet :copy-button="false">
  ```html
    <h1>Hello World</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea mollitia harum ex quaerat, libero, debitis rem deleniti temporibus aliquid! Ipsum odit tenetur, vero laboriosam saepe sit dignissimos aut. Quasi, unde.</p>
  ```
</cdr-doc-code-snippet>

## CSS Highlighting
<cdr-doc-code-snippet>
  ```css
    .my-selector {
      color: $something-amazing;
      font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 14px;
    }
  ```
</cdr-doc-code-snippet>

## JS Highlighting
<cdr-doc-code-snippet>
  ```js
    export default {
      name: 'CdrDocCodeSnippet',
      components: {
      },
      props: {
        copyButton: {
          default: true,
          type: Boolean
        }
      }
    }
  ```
</cdr-doc-code-snippet>

## Vue Component
<cdr-doc-code-snippet>
  ```html
    <cdr-link>
      <cdr-icon
        use="#mail"
        modifier="inherit-color"
        class="cdr-inline-left--sm"/>
      Icon on the left
    </cdr-link>
  ```
</cdr-doc-code-snippet>

## Content Resilience - Too Much Content
<cdr-doc-code-snippet>
  ```html
    <h1>Hello World</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore nemo inventore, tempora maxime velit accusamus delectus placeat vitae! Voluptatibus officia, aperiam ipsam ducimus odit cupiditate consectetur nisi ad dicta provident.
    </p>
    <h2>Sub heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laudantium, quidem unde voluptatibus est, quos error quibusdam ducimus et quaerat quam? Veritatis fuga architecto amet, dolorem praesentium possimus recusandae eaque!
    </p>
    <h2>Sub heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laudantium, quidem unde voluptatibus est, quos error quibusdam ducimus et quaerat quam? Veritatis fuga architecto amet, dolorem praesentium possimus recusandae eaque!
    </p>
    <h2>Sub heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laudantium, quidem unde voluptatibus est, quos error quibusdam ducimus et quaerat quam? Veritatis fuga architecto amet, dolorem praesentium possimus recusandae eaque!
    </p>
    <h2>Sub heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laudantium, quidem unde voluptatibus est, quos error quibusdam ducimus et quaerat quam? Veritatis fuga architecto amet, dolorem praesentium possimus recusandae eaque!
    </p>
    <h2>Sub heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laudantium, quidem unde voluptatibus est, quos error quibusdam ducimus et quaerat quam? Veritatis fuga architecto amet, dolorem praesentium possimus recusandae eaque!
    </p>
    <h2>Sub heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laudantium, quidem unde voluptatibus est, quos error quibusdam ducimus et quaerat quam? Veritatis fuga architecto amet, dolorem praesentium possimus recusandae eaque!
    </p>
    <h2>Sub heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laudantium, quidem unde voluptatibus est, quos error quibusdam ducimus et quaerat quam? Veritatis fuga architecto amet, dolorem praesentium possimus recusandae eaque!
    </p>
    <h2>Sub heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laudantium, quidem unde voluptatibus est, quos error quibusdam ducimus et quaerat quam? Veritatis fuga architecto amet, dolorem praesentium possimus recusandae eaque!
    </p>
    <h2>Sub heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laudantium, quidem unde voluptatibus est, quos error quibusdam ducimus et quaerat quam? Veritatis fuga architecto amet, dolorem praesentium possimus recusandae eaque!
    </p>
    <h2>Sub heading</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laudantium, quidem unde voluptatibus est, quos error quibusdam ducimus et quaerat quam? Veritatis fuga architecto amet, dolorem praesentium possimus recusandae eaque!
    </p>
  ```
</cdr-doc-code-snippet>

## Content Resilience - Too Little Content
<cdr-doc-code-snippet>
  ```html
    <h1>A</h1>
  ```
</cdr-doc-code-snippet>
