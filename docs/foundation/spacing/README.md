---
{
  "title": "Spacing",
  "title_metadata": false,
  "layout_type": "LayoutComponent",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Foundation/"
    }
  ],
}
---

<cdr-doc-tabs :labels="['Overview', 'Guidelines']">
<template slot="Overview">
<cdr-doc-table-of-contents-shell>


Cedar provides easy-to-use, preset values to apply consistent spacing within and between components. Spacing tokens help maintain a cohesive visual style across all REI properties by:
- Stores pixel values that are converted to the proper spacing unit for web and native platforms 
- Specifies a hierarchical and semantically defined system

Spacing symbols are available within the Cedar UI Toolkit and directly reflect the token names in the code ensuring a more efficient handoff between design and development. 

<br> 
<hr>

Web and mobile spacing tokens have identical values but the naming pattern differs. For example, spacing token names are:
- **For Web:** cdr-space-one-and-a-half-x
- **For Android:** cdr_space_one_and_a_half_x
- **For iOS:** CdrSpaceOneAndAHalfX

<br>

<tokens-space>

## Default Spacing 
These spacing values are in use throughout Cedar components and design recommendations. Use these tokens to keep consistent spatial concepts.

<br>

</tokens-space>

<hr>
<br>

<tokens-space type="inset">

## Base Inset

Use to create a consistent space **within** the content container:
- All four sides have equal values
- Base Inset token value is 16 pixels 
- Options range from 2 pixels to 64 pixels
- Default spacing model
- Examples: <cdr-link :href="$withBase('/components/buttons/')">Buttons</cdr-link>, <cdr-link :href="$withBase('/components/data-tables/')">Data Tables</cdr-link>, and <cdr-link :href="$withBase('/components/tabs/')">Tabs</cdr-link> 

<br>

</tokens-space>

<hr>
<br>


<tokens-space type="inset-squish">

## Inset - Squish
Use to create a compact vertical space **within** the content container:
- Reduces top and bottom padding by 50% relative to left and right padding
- Options range from:
  - 0 to 32 pixels for top and bottom values
  - 2 pixels to 64 pixels for left and right values
- Compact spacing model, best used with stacking lists or menu items
- Examples: Compact versions for <cdr-link :href="$withBase('/components/accordion/')">Accordion</cdr-link> and <cdr-link :href="$withBase('/components/lists/')">Lists</cdr-link>

<br>

</tokens-space>

<hr>
<br>




<tokens-space type="inset-stretch">

## Inset - Stretch
Use to create an expanded vertical space **within** the content container:
- Increases top and bottom padding by 50% relative to left and right padding
- Options range from:
  - 4 pixels to 96 pixels for top and bottom values
  - 2 pixels to 64 pixels for left and right values
- Expanded spacing model, best used with multi-line input (textareas) or other form elements 
- Example: Large version for <cdr-link :href="$withBase('/components/input/')">Inputs</cdr-link>  

<br>

</tokens-space>

<br>
<hr>


</cdr-doc-table-of-contents-shell>
</template>



<template slot="Guidelines">
<cdr-doc-table-of-contents-shell>


The Cedar spacing system is based on 16px units. The scaling system uses fractions and multiples of the base size (16px). The result is easy to understand. Please note that 1 rem equals 10 pixels. 

<br>

| System Scale        | Pixel Values        | Rem Values        |
| :------------------ | :------------------ | :---------------- |
| 1/8 space           | 2px                 | 0.2rem            | 
| 1/4 space           | 4px                 | 0.4rem            | 
| 1/2 space           | 8px                 | 0.8rem            | 
| 3/4 space           | 12px                | 1.2rem            | 
| 1 space             | 16px                | 1.6rem            | 
| 1  1/2  spaces      | 24px                | 2.4rem            | 
| 2 spaces            | 32px                | 3.2rem            | 
| 4 spaces            | 64px                | 6.4rem            | 

<br>

### Inset

An inset is intended to provide space within the content container. It defines how the typography, images, icons, and any content is separated from the edge. Cedar provides different options for inset tokens:

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/spacing/inset-options.gif`)" alt="examples demoing spacing of inset, inset squish, and inset stretch" />

<br>

### Inset - Base
The base `inset` tokens have all four sides matching in value, resulting in consistent space within the container. The base inset is 16px with options ranging from 2px to 64px. Names are tied to the base 16 and increase or decrease accordingly.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/spacing/inset.jpg`)" alt="inset examples"/>

<br>

### Inset - Squish
An `inset-squish` reduces top and bottom spacing by 50% relative to the default inset value, resulting in a vertically condensed visual display.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/spacing/inset-squish.gif`)" alt="inset squish examples"/>

<br>

### Inset - Stretch
An `inset-stretch` increases top and bottom spacing by 50% relative to the default inset value, resulting in a vertically expanded visual display.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/spacing/inset-stretch.gif`)" alt="inset stretch examples"/>

<br>
<hr>


</cdr-doc-table-of-contents-shell>
</template>

</cdr-doc-tabs>
