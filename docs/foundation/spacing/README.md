---
{
  "title": "Spacing",
  "title_metadata": false,
  "layout": "LayoutComponent",
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

## Default Spacing 
These spacing values are in use throughout Cedar components and design recommendations. Use these tokens to keep consistent spatial concepts.
<br>

<space-example name="cdr-space-eighth-x" />
<table>
  <tbody>
    <tr>
      <td width=280>cdr-space-eighth-x </td>
      <td>2px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-quarter-x" />
<table>
  <tbody>
    <tr>
      <td width=280>cdr-space-quarter-x </td>
      <td>4px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-half-x" />
<table>
  <tbody>
    <tr>
      <td width=280>cdr-space-half-x </td>
      <td>8px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-three-quarter-x" />
<table>
  <tbody>
    <tr>
      <td width=280>cdr-space-three-quarter-x </td>
      <td>12px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-one-x" />
<table>
  <tbody>
    <tr>
      <td width=280>cdr-space-one-x </td>
      <td>16px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-one-and-a-half-x" />
<table>
  <tbody>
    <tr>
      <td width=280>cdr-space-one-and-a-half-x </td>
      <td>24px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-two-x" />
<table>
  <tbody>
    <tr>
      <td width=280>cdr-space-two-x </td>
      <td>32px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-four-x" />
<table>
  <tbody>
    <tr>
      <td width=280>cdr-space-four-x </td>
      <td>64px </td>
    </tr>
  </tbody>
</table>

<br>
<hr>

## Base Inset

Use to create a consistent space **within** the content container:
- All four sides have equal values
- Base Inset token value is 16 pixels 
- Options range from 2 pixels to 64 pixels
- Default spacing model
- Examples: <cdr-link :href="$withBase('/components/buttons/')">Buttons</cdr-link>, <cdr-link :href="$withBase('/components/data-tables/')">Data Tables</cdr-link>, and <cdr-link :href="$withBase('/components/tabs/')">Tabs</cdr-link> 

<hr>
  
<br>

<space-example name="cdr-space-inset-eighth-x" />
<table>
  <tbody>
    <tr>
      <td width=320>cdr-space-inset-eighth-x </td>
      <td>2px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-quarter-x" />
<table>
  <tbody>
    <tr>
      <td width=320>cdr-space-inset-quarter-x </td>
      <td>4px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-half-x" />
<table>
  <tbody>
    <tr>
      <td width=320>cdr-space-inset-half-x </td>
      <td>8px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-three-quarter-x" />
<table>
  <tbody>
    <tr>
      <td width=320>cdr-space-inset-three-quarter-x </td>
      <td>12px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-one-x" />
<table>
  <tbody>
    <tr>
      <td width=320>cdr-space-inset-one-x </td>
      <td>16px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-one-and-a-half-x" />
<table>
  <tbody>
    <tr>
      <td width=320>cdr-space-inset-one-and-a-half-x </td>
      <td>24px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-two-x" />
<table>
  <tbody>
    <tr>
      <td width=320>cdr-space-inset-two-x </td>
      <td>32px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-four-x" />
<table>
  <tbody>
    <tr>
      <td width=320>cdr-space-inset-four-x </td>
      <td>64px </td>
    </tr>
  </tbody>
</table>


<br>
<hr>

## Inset - Squish
Use to create a compact vertical space **within** the content container:
- Reduces top and bottom padding by 50% relative to left and right padding
- Options range from:
  - 0 to 32 pixels for top and bottom values
  - 2 pixels to 64 pixels for left and right values
- Compact spacing model, best used with stacking lists or menu items
- Examples: Compact versions for <cdr-link :href="$withBase('/components/accordion/')">Accordion</cdr-link> and <cdr-link :href="$withBase('/components/lists/')">Lists</cdr-link>   

<br>

<space-example name="cdr-space-inset-eighth-x-squish" />
<table>
  <tbody>
    <tr>
      <td width=440><b>cdr-space-inset-eighth-x-squish </b> </td>
      <td>0 2px</td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-eighth-x-squish-top-bottom </td>
      <td>0 </td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-eighth-x-squish-left-right </td>
      <td>2px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-quarter-x-squish" />
<table>
  <tbody>
    <tr>
      <td width=440><b>cdr-space-inset-quarter-x-squish </b> </td>
      <td>2px 4px</td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-quarter-x-squish-top-bottom </td>
      <td>2px </td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-quarter-x-squish-left-right </td>
      <td>4px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-half-x-squish" />
<table>
  <tbody>
    <tr>
      <td width=440><b>cdr-space-inset-half-x-squish </b> </td>
      <td>4px 8px</td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-half-x-squish-top-bottom </td>
      <td>4px </td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-half-x-squish-left-right </td>
      <td>8px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-three-quarter-x-squish" />
<table>
  <tbody>
    <tr>
      <td width=440><b>cdr-space-inset-three-quarter-x-squish </b> </td>
      <td>6px 12px</td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-three-quarter-x-squish-top-bottom </td>
      <td>6px </td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-three-quarter-x-squish-left-right </td>
      <td>12px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-one-x-squish" />
<table>
  <tbody>
    <tr>
      <td width=440><b>cdr-space-inset-one-x-squish </b> </td>
      <td>8px 16px</td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-one-x-squish-top-bottom </td>
      <td>8px </td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-one-x-squish-left-right </td>
      <td>16px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-one-and-a-half-x-squish" />
<table>
  <tbody>
    <tr>
      <td width=440><b>cdr-space-inset-one-and-a-half-x-squish </b> </td>
      <td>12px 24px</td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-one-and-a-half-x-squish-top-bottom </td>
      <td>12px </td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-one-and-a-half-x-squish-left-right </td>
      <td>24px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-two-x-squish" />
<table>
  <tbody>
    <tr>
      <td width=440><b>cdr-space-inset-two-x-squish </b> </td>
      <td>16px 32px</td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-two-x-squish-top-bottom </td>
      <td>16px </td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-two-x-squish-left-right </td>
      <td>32px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-four-x-squish" />
<table>
  <tbody>
    <tr>
      <td width=440><b>cdr-space-inset-four-x-squish </b> </td>
      <td>32px 64px</td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-four-x-squish-top-bottom </td>
      <td>32px </td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-four-x-squish-left-right </td>
      <td>64px </td>
    </tr>
  </tbody>
</table>


<br>
<hr>


## Inset - Stretch
Use to create an expanded vertical space **within** the content container:
- Increases top and bottom padding by 50% relative to left and right padding
- Options range from:
  - 4 pixels to 96 pixels for top and bottom values
  - 2 pixels to 64 pixels for left and right values
- Expanded spacing model, best used with multi-line input (textareas) or other form elements 
- Example: Large version for <cdr-link :href="$withBase('/components/input/')">Inputs</cdr-link>  

<br>

<space-example name="cdr-space-inset-eighth-x-stretch" />
<table>
  <tbody>
    <tr>
      <td width=440><b>cdr-space-inset-eighth-x-stretch </b> </td>
      <td>4px 2px</td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-eighth-x-stretch-top-bottom </td>
      <td>4px </td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-eighth-x-stretch-left-right </td>
      <td>2px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-quarter-x-stretch" />
<table>
  <tbody>
    <tr>
      <td width=440><b>cdr-space-inset-quarter-x-stretch </b> </td>
      <td>6px 4px</td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-quarter-x-stretch-top-bottom </td>
      <td>6px </td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-quarter-x-stretch-left-right </td>
      <td>4px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-half-x-stretch" />
<table>
  <tbody>
    <tr>
      <td width=440><b>cdr-space-inset-half-x-stretch </b> </td>
      <td>12px 8px</td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-half-x-stretch-top-bottom </td>
      <td>12px </td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-half-x-stretch-left-right </td>
      <td>8px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-three-quarter-x-stretch" />
<table>
  <tbody>
    <tr>
      <td width=440><b>cdr-space-inset-three-quarter-x-stretch </b> </td>
      <td>18px 12px</td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-three-quarter-x-stretch-top-bottom </td>
      <td>18px </td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-three-quarter-x-stretch-left-right </td>
      <td>12px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-one-x-stretch" />
<table>
  <tbody>
    <tr>
      <td width=440><b>cdr-space-inset-one-x-stretch </b> </td>
      <td>24px 16px</td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-one-x-stretch-top-bottom </td>
      <td>24px </td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-one-x-stretch-left-right </td>
      <td>16px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-one-and-a-half-x-stretch" />
<table>
  <tbody>
    <tr>
      <td width=440><b>cdr-space-inset-one-and-a-half-x-stretch </b> </td>
      <td>36px 24px</td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-one-and-a-half-x-stretch-top-bottom </td>
      <td>36px </td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-one-and-a-half-x-stretch-left-right </td>
      <td>24px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-two-x-stretch" />
<table>
  <tbody>
    <tr>
      <td width=440><b>cdr-space-inset-two-x-stretch </b> </td>
      <td>48px 32px</td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-two-x-stretch-top-bottom </td>
      <td>48px </td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-two-x-stretch-left-right </td>
      <td>32px </td>
    </tr>
  </tbody>
</table>

<br>

<space-example name="cdr-space-inset-four-x-stretch" />
<table>
  <tbody>
    <tr>
      <td width=440><b>cdr-space-inset-four-x-stretch </b> </td>
      <td>96px 64px</td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-four-x-stretch-top-bottom </td>
      <td>96px </td>
    </tr>
    <tr>
      <td width=440>cdr-space-inset-four-x-stretch-left-right </td>
      <td>64px </td>
    </tr>
  </tbody>
</table>


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
