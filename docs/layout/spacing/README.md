---
{
  "title": "Spacing",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Layout/"
    }
  ],
  "sandboxData": {
    "components": "CdrButton"
  },
}
---

<cdr-doc-table-of-contents-shell>

Cedar Design System provides predefined spacing values that help reduce redundancy, declutter prototypes and style sheets, and utilize common terminology.

By design, Cedar elements are self contained and provide no spacing outside of their border and box shadows. This means that content elements will not stack one on top of another without the use of spacing elements.

## Concepts

### Box Model

The Cedar spacing system is built around HTML’s foundational layout principle known as the **box model**. Every webpage is made of boxes and includes the ‘box within a box’ structure. The graphic below shows how the box model defines the structure and layout for all elements on a page.

<cdr-img :src="$withBase('/layout/spacing-box-model.png')" alt="Box model structure of a webpage" />

**Content:** In most cases, any content inside a box, text, or other boxes will wrap to its parent container’s width and push down to increase its parent container’s height dynamically.

**Padding:** Padding is the space around the content inside a container. This spacing does not affect the total dimension of an element, but rather shrinks the working space within it. For example, a 300px wide container with _cdr-space-inset-one-x_ padding will allow its content to grow to 268px wide.

**Borders:** Borders function like padding but with color. Cedar uses borders that are only 1px thick.

**Margins:** Margins provide the spacing around an element or container, pushing sibling content away. Margins do not contribute to an element’s width.


### Spacing Margins

Spacing is a unit of white space that pushes visual elements away from each other. Spacing is primarily used as margin, but can also be used as padding where inset padding does not apply. Spacing can be used to distribute content horizontally or vertically.

The Cedar spacing system is based on 1.6rem or 16px units. There are 8 spacing values derived from a 16px base.

<cdr-img class="cdr-doc-article-img" :src="$withBase('/layout/spacing-margin-horizontal.png')" alt="Horizontal spacing" />

<cdr-img class="cdr-doc-article-img" :src="$withBase('/layout/spacing-margin-vertical.png')" alt="Vertical spacing" />

### Inset Padding

An Inset padding is intended to provide consistent space within the content container. It defines how the typography, images, icons, and any content is spaced from the edge.

<cdr-img :src="$withBase('/layout/spacing-inset-padding-sizes.png')" alt="Inset padding" />

Cedar provides three different variants for each inset token size:

-  **Default:** All four sides match in size, resulting in consistent spacing within the content container
-  **Squish:** Reduces top and bottom spacing by 50%, resulting in a vertically condensed visual display
-  **Stretch:** Increases top and bottom spacing by 50%, resulting in a vertically expanded visual display


<cdr-img :src="$withBase('/layout/spacing-inset-padding-variations.png')" alt="The three different types of inset padding" />

### Breakpoints

Like text size and other dimensions, Spacing and Inset can change based on screen width breakpoints. For more information on breakpoints, visit the [Responsive Layout](../responsive) article.

#### An Example

Spacing and Insets should be combined to create compositions.

<cdr-img :src="$withBase('/layout/spacing-redline-example.png')" alt="An example of combined Spacing and Insets" />

## Usage Overview

There are 3 ways to consume and implement Cedar’s spacing convention: tokens, utility classes, and the space prop.  

### Tokens

Use space tokens if you want to apply the Cedar spacing convention within your stylesheets and if your stylesheets are SCSS or LESS.  For a full list of available tokens and information on how to use them in your projects, visit the [Design Tokens](../../components/design-tokens) article.

### Utility Classes

Use the space utility classes if you want to apply the Cedar spacing convention within your markup instead of in stylesheets. For more information on how to use utility classes, see the [CSS Utility Class](../../components/utilities/) document.

### Space Prop
Some of the Cedar components will allow the application of Cedar space through a prop. Details on how to use the space prop can be found within that particular component API. Note that if the space prop is not documented, then that means it is not available for that component. In that case, you should use either the space utility classes or the space tokens.  

## Space Utility Class Usage

The Cedar space utility classes enable you to add padding to a custom container,
and / or provide margin to push one piece of content away from another.  

Cedar space utility classes can be applied using the following format:

`Cdr-{property}{direction}-space-{token}@{breakpoint}`

### Property

The property applies the type of spacing:

-  `m` - applies `margin`
-  `p` - applies `padding`

### Direction

The direction designates the side the property applies to:

-  `t` - applies the spacing for `*-top`
-  `r` - applies the spacing for `*-right`
-  `b` - applies the spacing for `*-bottom`
-  `l` - applies the spacing for `*-left`
-  `x` - applies the spacing for `*-right` and `*-left`
-  `t` - applies the spacing for `*-top` and `*-bottom`

### Spacing Tokens for Generic Utility Class

The following are the available spacing token values:

| Space token                | Pixel values | Rem values |
|----------------------------|--------------|------------|
| cdr-space-eighth-x         | 2px          | 0.2rem     |
| cdr-space-quarter-x        | 4px          | 0.4rem     |
| cdr-space-half-x           | 8px          | 0.8rem     |
| cdr-space-three-quarter-x  | 12px         | 1.2rem     |
| cdr-space-one-x            | 16px         | 1.6rem     |
| cdr-space-one-and-a-half-x | 24px         | 2.4rem     |
| cdr-space-two-x            | 32px         | 3.2rem     |
| cdr-space-four-x           | 64px         | 6.4rem     |


### Spacing Example

An example of setting the generic space classes:

| Modifier      | CSS property                 | Space utility class           |
|---------------|------------------------------|-------------------------------|
| pt            | padding-top                  | cdr-pt-space-one-x            |
| pr            | padding-right                | cdr-pr-space-one-x            |
| pb            | padding-bottom               | cdr-pb-space-one-x            |
| pl            | padding-left                 | cdr-pl-space-one-x            |
| px            | padding-left & padding-right | cdr-px-space-one-x            |
| py            | padding-top & padding-bottom | cdr-py-space-one-x            |
| mt            | margin-top                   | cdr-mt-space-one-x            |
| mr            | margin-right                 | cdr-mr-space-one-x            |
| mb            | margin-bottom                | cdr-mb-space-one-x            |
| ml            | margin-left                  | cdr-ml-space-one-x            |
| mx            | margin-left & margin-right   | cdr-mx-space-one-x            |
| my            | margin-top & margin-bottom   | cdr-my-space-one-x            |
| inset         | padding                      | cdr-space-inset-one-x         |
| inset-squish  | padding                      | cdr-space-inset-squish-one-x  |
| inset-stretch | padding                      | cdr-space-inset-stretch-one-x |

For a full list of space utility classes, see the [CSS Utility Class](../../components/utilities/) document.

### Breakpoint (Optional)

Sometimes your content may need to be spaced differently at specific breakpoints. To accommodate such different spacing needs, spacing utilities are available at each of our defined breakpoints by concatenating the ‘@’ symbol with the desired breakpoint to the end of the class name.

-  `xs` - applies the spacing **for the extra small breakpoint ( < 768px)**
-  `sm` - applies the spacing **for the small breakpoint (768px <= X < 992px)** 
-  `md` - applies the spacing **for the medium breakpoint (992px <= X < 1232px)**
-  `lg `- applies the spacing **for the large breakpoint ( > 1232px)**

For example, `.cdr-space-inset-eighth-x@md` will apply if the user’s screen is currently at the medium breakpoint (within 992px and 1232px wide).

For more information on breakpoints and responsive design, see the [Responsive Layout](../responsive) article.

To add right margin to the Cedar button component at the medium breakpoint and up, but bottom margin to at the small breakpoint and below:

| Breakpoint | Margin       | Space utility class breakpoints |
|------------|--------------|---------------------------------|
| @xs        | margin-right | cdr-mb-space-one-x@xs           |
| @sm        | margin-right | cdr-mb-space-one-x@sm           |
| @md        | margin-right | cdr-mr-space-one-x@md           |
| @lg        | margin-right | cdr-mr-space-one-x@lg           |


<cdr-doc-example-code-pair :background-toggle="false" :sandbox-data="$page.frontmatter.sandboxData" >

```vue
  <div>
    <cdr-button 
     full-width="@xs"
      space="
        cdr-mb-space-one-x@xs
        cdr-mb-space-one-x@sm
        cdr-mr-space-one-x@sm
        cdr-mr-space-one-x@md
        cdr-mr-space-one-x@lg
      "
    > 
    A sample Cedar button
    </cdr-button>
    <cdr-button 
    modifier="secondary"
    full-width="@xs"
    > 
    Another sample Cedar button
    </cdr-button>
  </div>

```
</cdr-doc-example-code-pair>

Note that space utility classes with the `@<breakpoint>` apply within the specified breakpoint range only. 

</cdr-doc-table-of-contents-shell>