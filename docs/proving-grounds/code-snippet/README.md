---
navbar: false
pageClass: cdr-doc-proving-ground
---

# Code Snippet Proving Grounds

## Simple Example
<script>
  const source = `

  `;
</script>
<cdr-doc-code-snippet>
  ```html
    <h1>Hello World</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea mollitia harum ex quaerat, libero, debitis rem deleniti temporibus aliquid! Ipsum odit tenetur, vero laboriosam saepe sit dignissimos aut. Quasi, unde.</p>
  ```
</cdr-doc-code-snippet>

## No Copy Button
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
