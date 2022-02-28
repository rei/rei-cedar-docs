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
  "italics": [
    {
      "type": "do",
      "image": "typography/typography_italics_do.png",
      "alt": "Italics used within part of a sentence.",
      "caption": "use italics if necessary."
    },
    {
      "type": "dont",
      "image": "typography/typography_italics_dont.png",
      "alt": "An entire sentence italicized.",
      "caption": "use italics if the copy is part of important user flows."
    },
  ],
  "alignment1": [
    {
      "type": "do",
      "image": "typography/typography_alignment_do.png",
      "alt": "Left aligned headline and subhead.",
      "caption": "left align text."
    },
    {
      "type": "dont",
      "image": "typography/typography_alignment_dont.png",
      "alt": "Center aligned long headline.",
      "caption": "center align long headlines."
    },
  ],
  "alignment2": [
    {
      "type": "do",
      "image": "typography/typography_alignment_do_image.png",
      "alt": "Left aligned text above images.",
      "caption": "left align text to other elements on the page."
    },
    {
      "type": "caution",
      "image": "typography/typography_alignment_caution.png",
      "alt": "Center aligned headline above icons.",
      "caption": "center aligning short headlines."
    },
  ],
  "lineLengthMobile": [
    {
      "type": "do",
      "image": "typography/typography_line_length_mobile_do.png",
      "alt": "Appropriate line length on mobile is highlighted.",
      "caption": "reduce font sizes for mobile so that they are the optimal line length."
    },
    {
      "type": "dont",
      "image": "typography/typography_line_length_mobile_dont.png",
      "alt": "A short line length is highlighted because font size is too big on mobile.",
      "caption": "use the same font size across all device sizes. This will create incorrect line lengths on certain devices."
    },
  ],
  "lineLengthDesktop": [
    {
      "type": "do",
      "image": "typography/typography_line_length_desktop_do.png",
      "alt": "Proper line length is highlighted on desktop.",
      "caption": "use line lengths of 50-60 characters."
    },
    {
      "type": "caution",
      "image": "typography/typography_line_length_desktop_dont.png",
      "alt": "An incorrect line length over 80 characters is highlighted on desktop.",
      "caption": "create line lengths of 80 characters or more."
    },
  ],
  "see_also": [
    {
      "text": "See Also",
    },
    {
      "text": "Text",
      "href": "../../components/text"
    },
    {
      "text": "Design Tokens",
      "href": "../../tokens/overview/"
    },
  ]
}
---
<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

# Guidelines

## Typefaces

Cedar supports two primary brand typefaces: Stuart and Graphik. Each play a specific role in our typographic system. While Graphik is available to consumers outside the co-op, Stuart is licensed and proprietary to REI.


### Stuart

Designed exclusively for the co-op, Stuart was influenced by the U.S. National Park Service signage. Modeled after Plantin, Stuart embraces the same softness in both structure and finish and its warm character balances well with the clean simplicity of Graphik.

<cdr-img class="cdr-doc-article-img" alt="Four text examples showing the Stuart font in various sizes and colors." :src="$withBase(`/typography/typography_stuart.png`)" />

#### Features

Accessibility was front-of-mind during the development of Stuart. Accessible typefaces are inherently optimized for mobile usage.

<cdr-img class="cdr-doc-article-img" alt="The Stuart font's open terminals, optimal x-height, optimal stroke width, ligatures, and co-op diamond." :src="$withBase(`/typography/typography_stuart_features.png`)" />

### Graphik

Graphik is a sans-serif typeface designed by Christian Schwartz and released through Commercial Type in 2009. Inspired by the lesser known grotesques and geometric sans-serifs, Graphik’s lower stroke contrast and a generous x-height lend it great versatility. Graphik is used for high-function or less-expressive moments.

<cdr-img class="cdr-doc-article-img" alt="Four text examples showing the Graphik font in various sizes and colors." :src="$withBase(`/typography/typography_graphik.png`)" />

## Type Scale

The typographic scale manages the font sizes used within Cedar. All type styles are derived from this scale.

<cdr-img class="cdr-doc-article-img" alt="The range of sizes available for headings from largest to smallest." :src="$withBase(`/typography/typography_type-scale.png`)" />

### Font Families

Cedar typography references two distinct font stacks: a serif and a sans-serif. Our default display preference always prioritizes Stuart and Graphik. Local fonts act as fallbacks should a brand font fail to load.

**Serif**

`font-family: Stuart, Georgia, serif`

**Sans-serif**

`font-family: Graphik, 'Helvetica Neue', sans-serif`

#### Fallbacks

If everything goes right, REI Stuart will load. If it doesn’t, the serif font displayed on Apple and Microsoft platforms will be Georgia. At the same time, Android devices will display Noto Serif and Linux devices will display Liberation Serif.

It’s a similar story for sans-serif fonts. Graphik will display if there are no hiccups. If it fails to load, Apple devices will display Helvetica Neue while Microsoft platforms will display Arial. Android devices will display Roboto and Linux devices will display Liberation Sans.

### Supported Languages

Both Stuart and Graphik support the standard Western European languages.

**Coverage:**

+ Italian, Spanish, Portuguese, French, German, Dutch, English, Danish, Swedish, Norwegian, and Icelandic


### Resources

The distribution of brand fonts are managed through REI’s Self Service application.


## Type Guidelines


### Size

Font size selection directly impacts both readability and comprehension. Type styles are pre-optimized.

<cdr-img class="cdr-doc-article-img" alt="Three text examples displaying typographic hierarchy." :src="$withBase(`/typography/typography_type_guidelines_size.png`)" />


### Type Pairing

To create the appropriate contrast and hierarchy, use a mix of Stuart and Graphik—the latter typically plays a supporting role.

<cdr-img class="cdr-doc-article-img" alt="Mixed usage of Stuart and Graphik typefaces, with Stuart used in the header and Graphic in the subhead and body copy." :src="$withBase(`/typography/typography_type_guidelines_type-pairing.png`)" />

### Font Style


#### Italics

Users with certain disabilities like dyslexia might have difficulty making out italicized words. Only use italics if necessary and never for critical user flows.

<do-dont :examples="$page.frontmatter.italics" />

### Font Weight

From refined to playful, Stuart’s personality becomes increasingly casual as it gets heavier. While six weights are included in the Stuart family, medium is preferred for most situations.

<cdr-img class="cdr-doc-article-img" alt="Various Stuart font weights, highlighting Medium." :src="$withBase(`/typography/typography_type_guidelines_font-weight_stuart.png`)" />

The Graphik family includes five weights. Preferred choices are: regular, medium, and semibold. Regular is appropriate for most applications.

<cdr-img class="cdr-doc-article-img" alt="Various Graphik font weights, highlighting Semibold, Medium, and Regular." :src="$withBase(`/typography/typography_type_guidelines_font-weight_graphik.png`)" />


### Letter Spacing

Stuart and Graphik were both designed with looser tracking to improve readability at smaller sizes. In code-driven environments, tracking is known as letter spacing. To best support the widest range of sizes, the letter spacing of text styles have been pre-optimized.

<cdr-img class="cdr-doc-article-img" alt="Text boxes showing pre-optimized letter spacing for Stuart and Graphik." :src="$withBase(`/typography/typography_type_guidelines_letter-spacing.png`)" />


### Alignment

For optimum legibility, it’s important to establish a strong vertical alignment. All text should be left-aligned whenever possible. Some exceptions include single words and short headlines. Never left and right justify text.


<do-dont :examples="$page.frontmatter.alignment1" />

<do-dont :examples="$page.frontmatter.alignment2" />


### Line Length

An optimal length, or measure, of a line of copy is 50 to 60 characters. Line lengths more than 80 characters are discouraged.

<cdr-img class="cdr-doc-article-img" alt="Two examples of text highlighting how long a line of copy should be on mobile and desktop." :src="$withBase(`/typography/typography_type_guidelines_line-length.png`)" />

<do-dont :examples="$page.frontmatter.lineLengthMobile" />

<do-dont :examples="$page.frontmatter.lineLengthDesktop" />

#### 1.4.8 Visual Presentation (AAA)

For people with certain reading of vision disabilities, long lines of text can become a significant barrier. They have trouble keeping their place and following the flow of text. Having a narrow block of text makes it easier for them to continue on to the next line in a block. Lines of copy should not exceed 80 characters or glyphs. 



<hr/>

</cdr-doc-table-of-contents-shell>
