---
{
  "title": "Typography",
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
<cdr-doc-tabs :labels="['Overview', 'Guidelines', 'Brand Typography']">
<template slot="Overview">
<cdr-doc-table-of-contents-shell>
  
Cedar uses Design Tokens to store typographic attributes that represent the fundamental decisions of Cedar’s visual language. Design tokens: 
- Store font specifications using variable names, not hard-coded values such as font family name or pixel values for font size
- Specify a hierarchical and semantically defined system


For more information on what Design Tokens are and how to use them, visit the [Design Tokens] (http://cedar-docs.rei-cloud.com/rei-cedar-docs/components/design-tokens/) page.

For a complete list of Cedar Design Tokens, visit the [Cedar Tokens] (https://rei.github.io/rei-cedar-tokens/) page.


<br/>
<hr>


## Web


<tokens-typography platform="web" type="default">
### Default
</tokens-typography>

<tokens-typography platform="web" type="editorial">
### Editorial
</tokens-typography>

<tokens-typography platform="web" type="heading">
### Headings
</tokens-typography>
<tokens-typography platform="web" type="header" />

<hr>

## Mobile Apps

<tokens-typography platform="native" type="header">
### Headings 
</tokens-typography>

<tokens-typography platform="native" type="body">
### Body
</tokens-typography>

<tokens-typography platform="native" type="button">
### Buttons
</tokens-typography>

<hr/>


</cdr-doc-table-of-contents-shell>
</template>


<template slot="Guidelines">
<cdr-doc-table-of-contents-shell>

## Typefaces

Cedar supports two primary brand typefaces: Stuart and Graphik. Each play a specific role in our typographic system. While Graphik is available to consumers outside the co-op, Stuart is licensed and proprietary to REI.


### Stuart

Designed exclusively for the co-op, Stuart was influenced by the U.S. National Park Service signage. Modeled after Plantin, Stuart embraces the same softness in both structure and finish and its warm character balances well with the clean simplicity of Graphik.

<cdr-img class="cdr-doc-article-img" alt="A mosaic showing the Stuart font in various sizes and colors" :src="$withBase(`/typography/typography_stuart.png`)" />


https://drive.google.com/file/d/1LjY12GIK_ykZjG-kaaaLLYQAQS568jCE/view 


#### Features

Accessibility was front-of-mind during the development of Stuart. Accessible typefaces are inherently optimized for mobile usage.

<cdr-img class="cdr-doc-article-img" alt="An graphic highlighting the Stuart font's open terminals, optimal x-height, optimal stroke width, ligatures, and co-op diamond" :src="$withBase(`/typography/typography_stuart_features.png`)" />

https://drive.google.com/file/d/1k932SM5sY0We4MdDo61M0QUSqcmZdfDd/view?usp=sharing 


### Graphik

Graphik is a sans-serif typeface designed by Christian Schwartz and released through Commercial Type in 2009. Inspired by the lesser known grotesques and geometric sans-serifs, Graphik’s lower stroke contrast and a generous x-height lend it great versatility. Graphik is used for high-function or less-expressive moments.

<cdr-img class="cdr-doc-article-img" alt="A mosaic showing the Graphik font in various sizes and colors" :src="$withBase(`/typography/typography_graphik.png`)" />

https://drive.google.com/file/d/1a3UNbFPou6bymUwvEBex9morhuw-VtBh/view?usp=sharing


## Type Scale 

The typographic scale manages the font sizes used within Cedar. All type styles are derived from this scale.

<cdr-img class="cdr-doc-article-img" alt="A graphic displaying the range of sizes available for headings" :src="$withBase(`/typography/typography_type-scale.png`)" />

https://drive.google.com/file/d/1YM_bQPmrJDWgECZupEYGqz9QXS5BGxwc/view?usp=sharing


### Font Families

Cedar typography references two distinct font stacks: a serif and a sans-serif. Our default display preference always prioritizes Stuart and Graphik. Local fonts act as fallbacks should a brand font fail to load.

**Serif**

*insert code example to show font-family: 'REI Stuart app', 'Georgia', Times, serif

**Sans-serif**

*insert code example to show font-family: 'Graphik app', 'Helvetica Neue', Helvetica, Arial, sans-serif


### Supported Languages

Both Stuart and Graphik support the standard Western European languages.

**Coverage:**

+ Italian, Spanish, Portuguese, French, German, Dutch, English, Danish, Swedish, Norwegian, and Icelandic


### Resources

The distribution of brand fonts are managed through REI’s Self Service application.


## Type Guidelines


### Size

Font size selection directly impacts both readability and comprehension. Type styles are pre-optimized.

<cdr-img class="cdr-doc-article-img" alt="A mosaic of various examples of typographic hierarchy" :src="$withBase(`/typography/typography_type_guidelines_size.png`)" />

https://drive.google.com/file/d/1etkF3HpMUJRFt8BiWgYndcYJbQjW8izt/view?usp=sharing

*insert animation: typography_type_guidelines_size.gif https://drive.google.com/file/d/17HoK0g76yq8Xis5RhhdqQih8SZuTwxoM/view?usp=sharing


### Type Pairing

To create the appropriate contrast and hierarchy, use a mix of Stuart and Graphik—the latter typically plays a supporting role.

<cdr-img class="cdr-doc-article-img" alt="A graphic showing an example of a heading, subheading, and some body copy" :src="$withBase(`/typography/typography_type_guidelines_type-pairing.png`)" />

https://drive.google.com/file/d/1smSXpiPW44CQeJz5dUlSq5eSyzvvQbvs/view?usp=sharing


### Font Style


#### Italics

Users with certain disabilities like dyslexia might have difficulty making out italicized words. Only use italics if necessary and never for critical user flows.

*insert do/do not component here with this:
typography_italics_do.png https://drive.google.com/file/d/1hvuw6wVAaD2bN0FKebex2_H1nkrUmXba/view?usp=sharing
"Do use italics if necessary."
typography_italics_dont.png https://drive.google.com/file/d/1gHmyWWnXZaNO9jSF8lgyRsP7TV6qoITj/view?usp=sharing
"Don't use italics if the copy is part of important user flows."


### Font Weight

From refined to playful, Stuart’s personality becomes increasingly casual as it gets heavier. While six weights are included in the Stuart family, medium is preferred for most situations.

<cdr-img class="cdr-doc-article-img" alt="A graphic showing various Stuart font weights, highlighting Medium" :src="$withBase(`/typography/typography_type_guidelines_font-weight_graphik.png`)" />

https://drive.google.com/file/d/17diO4whCSNakFy8-gRC-iIr8r6gIQ4iB/view?usp=sharing


The Graphik family includes nine weights. Preferred choices are: regular, medium, and semibold. Regular is appropriate for most applications.

<cdr-img class="cdr-doc-article-img" alt="A graphic showing various Graphik font weights, highlighting Semibold, Medium, and Regular" :src="$withBase(`/typography/typography_type_guidelines_font-weight_stuart.png`)" />

https://drive.google.com/file/d/1enqvSuD2A2JLJxwFxd-iMb530gfRORZg/view?usp=sharing


### Letter Spacing

Stuart and Graphik were both designed with looser tracking to improve readability at smaller sizes. In code-driven environments, tracking is known as letter spacing. To best support the widest range of sizes, the letter spacing of text styles have been pre-optimized.

<cdr-img class="cdr-doc-article-img" alt="A graphic showing the difference between default and pre-optimized letter spacing" :src="$withBase(`/typography/typography_type_guidelines_letter-spacing.png`)" />
https://drive.google.com/file/d/1uG1ftgIXqGZmQEJiTm2uzC4gSxRsRj1Y/view?usp=sharing


### Alignment

For optimum legibility, it’s important to establish a strong vertical alignment. All text should be left-aligned whenever possible. Some exceptions include single words and short headlines. Never left and right justify text. 


*insert do/do not component here with this:
typography_alignment_do.png https://drive.google.com/file/d/1cqJmnZMfz6lgpJuiY5b6Rz6RrUOTyTRs/view?usp=sharing
"Do left align text."
typography_alignment_dont.png https://drive.google.com/file/d/163tz6h1JPPeY6_UsP-KD2zafZjn9gbb8/view?usp=sharing
"Don't center align long headlines."

*insert do/do not component here with this:
typography_alignment_do_image.png https://drive.google.com/file/d/1xfiZJHwmQyndHDan6s7KEzoz9GtA1hLL/view?usp=sharing
"Do left align text to other elements on the page."
typography_alignment_caution.png https://drive.google.com/file/d/163tz6h1JPPeY6_UsP-KD2zafZjn9gbb8/view?usp=sharing
"Use caution when center aligning short headlines."


### Line Length

An optimal length, or measure, of a line of copy is 50 to 60 characters. Line lengths more than 80 characters are discouraged.

<cdr-img class="cdr-doc-article-img" alt="A graphic showing how long a line of copy should be on mobile and desktop" :src="$withBase(`/typography/typography_type_guidelines_line-length.png`)" />
https://drive.google.com/file/d/1Sm-2HwhgmWdZpl0JKRXeTiJHPnvaC5aO/view?usp=sharing

*insert do/do not component here with this:
typography_line_length_mobile_do.png https://drive.google.com/file/d/1h_f3dNGn55DBJyTK-mOQB43dcQ0j8Fzi/view?usp=sharing
"Do reduce font sizes for mobile so that they are the optimal line length."
typography_line_length_mobile_dont.png https://drive.google.com/file/d/1DP58c6ElsozCAad97al0jAMpz4Y7bfkv/view?usp=sharing
"Don't use the same font size across all device sizes. This will create incorrect line lengths on certain devices."

*insert do/do not component here with this:
typography_line_length_desktop_do.png https://drive.google.com/file/d/13CJt07ysv3k9aQqpygDukDCtdP8QI7_W/view?usp=sharing
"Do use line lengths of 50–60 characters."
typography_line_length_desktop_dont.png https://drive.google.com/file/d/1oZBG0ffGFgjLkJnlaAqha7072vsv4jtT/view?usp=sharing
"Don't create line lengths of 80 characters or more."

#### 1.4.8 Visual Presentation (AAA)

For people with certain reading of vision disabilities, long lines of text can become a significant barrier. They have trouble keeping their place and following the flow of text. Having a narrow block of text makes it easier for them to continue on to the next line in a block. Lines of copy should not exceed 80 characters or glyphs. This accessibility guideline is applied when using Cedar’s [Paragraph] (https://rei.github.io/rei-cedar-docs/components/paragraphs/) component.



<hr/>

</cdr-doc-table-of-contents-shell>
</template>


<template slot="Brand Typography">
<cdr-doc-table-of-contents-shell>

<cdr-doc-alert icon="warning"><strong>These values should not be used standalone to create custom UI.</strong></cdr-doc-alert>

Typography from REI’s brand guidelines are used throughout Cedar components and design recommendations. 

**Use these values when:**
  - Requesting an update to an existing Cedar component
  - Requesting a new token 
  - Developing a new component that will be adopted by Cedar Design System
  - Creating a custom or product-specific solution that will not be reused 

<br> 

**Don't use these values when:**
  - Creating a broad solution that can be shared across teams. Instead, develop a new component or utility
  - Wanting the benefit of dynamically-updated styles when there are changes in the brand guidelines. Instead, use tokens
  - Typography values are repeated throughout the page. Instead, request a new token

<br> 

Note that the values on this page:
  - May not have a long lifespan
  - May alter the value more frequently
  - May be used for a wide variety of purposes

<br>  

**Requesting a Token** <br>
If you have a request for a token that is missing, you can submit a request using the [Feature Request Form](https://airtable.com/shrcbq9CHthuMO7AC), or ask in the [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4) Slack channel. View requirements in the <cdr-link :href="$withBase('/foundation/tokens/?active-link=adding-tokens-to-the-repository')">Adding Tokens to the Repository</cdr-link> section on the Tokens article.   

**Developing or Updating Cedar Components** <br>
The Cedar team welcomes contributions from the digital community at REI. If you are interested in contributing design or code, please reach out at in Slack at [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4), email [cedar@rei.com](mailto:cedar@rei.com), or talk to your manager.


<br>
<hr>

The type scale powers all the typography within Cedar components. These preset values are the best way to reinforce visual hierarchy and consistency across pages. 

## Body 
Uses a more open line height to font size ratio:
- Best suited for long-form content
- Specifications are available for default (Roboto or sans type styles) and editorial (Sentinel or serif type styles)

<br>

### Default 

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 14px; line-height: 24px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 14 <br>
        line-height: 24  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        cdr-text-default-compact <br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 16px; line-height: 26px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 16 <br>
        line-height: 26  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        cdr-text-default  <br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 18px; line-height: 28px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 18 <br>
        line-height: 28  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 20px; line-height: 32px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 20 <br>
        line-height: 32  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

### Editorial 

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 400; font-size: 16px; line-height: 26px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0 0 2px 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel <br>
        font-weight: 400 <br>
        font-size: 16 <br>
        line-height: 26  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 400; font-size: 18px; line-height: 28px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel <br>
        font-weight: 400 <br>
        font-size: 18 <br>
        line-height: 28  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        cdr-text-editorial-compact<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 400; font-size: 20px; line-height: 32px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel <br>
        font-weight: 400 <br>
        font-size: 20 <br>
        line-height: 32  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        cdr-text-editorial<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 400; font-size: 24px; line-height: 36px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel <br>
        font-weight: 400 <br>
        font-size: 24 <br>
        line-height: 36  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>
<hr />

## Display
Line height to font size ratio is more condensed than body type specifications and caters catered to an overall shorter line length:
- Best used for big moments, headings, titles, or subheadings
- Specifications are available for default (Roboto or sans type styles) and editorial (Sentinel or serif type styles)
- Avoid using display sizes for long-form content

### Default 

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 12px; line-height: 16px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 12 <br>
        line-height: 16  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 14px; line-height: 20px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 14 <br>
        line-height: 20  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 16px; line-height: 24px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 16 <br>
        line-height: 24  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 18px; line-height: 24px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 18 <br>
        line-height: 24  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 20px; line-height: 28px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 20 <br>
        line-height: 28  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 24px; line-height: 32px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 24 <br>
        line-height: 32  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto; font-variant: normal; font-weight: 400; font-size: 28px; line-height: 36px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Roboto <br>
        font-weight: 400 <br>
        font-size: 28 <br>
        line-height: 36  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

### Editorial 

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 14px; line-height: 20px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0;padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 14 <br>
        line-height: 20  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 16px; line-height: 24px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 16 <br>
        line-height: 24  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 18px; line-height: 24px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 18 <br>
        line-height: 24  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        cdr-text-header-7<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 20px; line-height: 28px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 20 <br>
        line-height: 28  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        cdr-text-header-6<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 24px; line-height: 32px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 24 <br>
        line-height: 32  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        cdr-text-header-5<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 28px; line-height: 36px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 28 <br>
        line-height: 36  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        cdr-text-header-4<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 32px; line-height: 40px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 32 <br>
        line-height: 40  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        cdr-text-header-3<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 40px; line-height: 48px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 40 <br>
        line-height: 48  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        cdr-text-header-2<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 56px; line-height: 60px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 56 <br>
        line-height: 60  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        cdr-text-header-1<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 76px; line-height: 84px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 76 <br>
        line-height: 84  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Sentinel; font-variant: normal; font-weight: 600; font-size: 96px; line-height: 104px; letter-spacing: 0.2px; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=192>
        font-family: Sentinel<br>
        font-weight: 600 <br>
        font-size: 96 <br>
        line-height: 104  
      </td>
      <td width=400>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<hr />

## Utility
Used sparingly within UI elements, currently used by Cedar components for:
- Form labels
- Call-to-Action text

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 12px; line-height: 16px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=264>
        font-family: Roboto Condensed<br>
        font-weight: 400 <br>
        font-size: 12 <br>
        line-height: 16  
      </td>
      <td width=328>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 14px; line-height: 20px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=264>
        font-family: Roboto Condensed<br>
        font-weight: 400 <br>
        font-size: 14 <br>
        line-height: 20  
      </td>
      <td width=328>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 16px; line-height: 24px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=264>
        font-family: Roboto Condensed<br>
        font-weight: 400 <br>
        font-size: 16 <br>
        line-height: 24  
      </td>
      <td width=328>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 18px; line-height: 24px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=264>
        font-family: Roboto Condensed<br>
        font-weight: 400 <br>
        font-size: 18 <br>
        line-height: 24  
      </td>
      <td width=328>
        <b>Tokens:</b><br>
        N/A<br>
       <br>
       <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 20px; line-height: 28px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=264>
        font-family: Roboto Condensed<br>
        font-weight: 400 <br>
        font-size: 20 <br>
        line-height: 28  
      </td>
      <td width=328>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 24px; line-height: 32px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=264>
        font-family: Roboto Condensed<br>
        font-weight: 400 <br>
        font-size: 24 <br>
        line-height: 32  
      </td>
      <td width=328>
        <b>Tokens:</b><br>
        N/A<br>
        <br>
        <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<div style="overflow: hidden; white-space: nowrap; font-family: Roboto Condensed; font-variant: normal; font-weight: 400; font-size: 28px; line-height: 36px; letter-spacing: normal; color: #292929; background-color: #FFFFFF; margin: 0; padding: 16px 0 16px 8px;">A different kind of company</div>
<table>
  <tbody>
    <tr>
      <td width=264>
        font-family: Roboto Condensed<br>
        font-weight: 400 <br>
        font-size: 28 <br>
        line-height: 36  
      </td>
      <td width=328>
        <b>Tokens:</b><br>
        N/A<br>
       <br>
       <br>
      </td>
    </tr>
  </tbody>
</table>

<br>

<hr />

</cdr-doc-table-of-contents-shell>
</template>
</cdr-doc-tabs>
