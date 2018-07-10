---
{
  "title": "Color",
  "title_metadata": false,
  "layout": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Foundation/",
      "href": "/foundation/"
    }
  ],
}
---

<div class="cdr-doc-colors-intro">

  <div class="cdr-doc-colors-intro__text">
    <h2>About our colors</h2>
    Cedar offers a range colors designed to be accessed, understood, and used by all
people regardless of their age, background, or ability. We meet or exceed color contrast [WCAG AA accessibility standards](https://www.w3.org/WAI/standards-guidelines/wcag/).
  </div>
  <img class="cdr-doc-colors-intro__image" :src="$withBase('/color-illustration.png')">

</div>

## Typography Colors
<cdr-doc-color-swatch-grid :token-names="[
  'text-color-primary-on-light',
  'text-color-primary-on-dark',
  'text-color-secondary-on-light',
  'text-color-secondary-on-dark'
]"/>

## Background Colors
<cdr-doc-color-swatch-grid :token-names="[
  'background-color-light',
  'background-color-lighter',
  'background-color-lightest',
  'background-color-dark',
  'background-color-darker'
]"/>

### Examples
<do-dont :examples="[
  {
    type: 'do',
    image: 'color-illustrations/color_1_do.png',
    caption: 'use approved background colors to separate content areas'
  },
  {
    type: 'dont',
    image: 'color-illustrations/color_1_dont.png',
    caption: 'use accent colors as backgrounds'
  }
]" />

<do-dont :examples="[
  {
    type: 'do',
    image: 'color-illustrations/color_2_do.png',
    caption: 'arrange background colors to promote page hierarchy by minimizing shifts in background'
  },
  {
    type: 'dont',
    image: 'color-illustrations/color_2_dont.png',
    caption: 'alternate background colors in visually jarring ways'
  }
]" />

Text choices should be paired with their corresponding background color to ensure accessibility.
<img :src="$withBase('/color-illustrations/color_accessibility.png')" alt="Color Accessibility Chart">


## Color Palette

### Neutral colors
Neutral colors support the cohesive use of typography, backgrounds, and borders across the digital ecosystem.

<cdr-doc-color-swatch-grid :token-names="[
  'clean-slate',
  'moon-shot',
  'partly-cloudy',
  'grey-matter',
  'holy-smoke',
  'coal-train',
  'taken-for-granite',
  'threat-level-midnight',
  'lost-in-space'
]"/>

### Accent colors
Accents drive a user’s attention to important actions or content. Use accents sparingly to maintain a balanced hierarchy.

<cdr-doc-color-swatch-grid :token-names="[
  'suede-shoes',
  'easily-excited',
  'closed-on-monday',
  'go-van-gogh',
  'snap-decision',
  'attention-grabber',
  'high-stakes',
  'quick-fixe'
]"/>

### Brand colors
Brand colors are core to the co-op. They’re often used as backgrounds when an experience calls for a stronger brand impression.
<cdr-doc-color-swatch-grid :token-names="[
  'old-growth',
  'moose-tooth',
  'hissing-llamas'
]"/>

### Feedback colors
Feedback colors are used for [alerts](#), [notifications](#), and other components to communicate, reinforce, or prompt user action.

<cdr-doc-color-swatch-grid :token-names="[
  'pick-your-potion',
  'center-of-attention',
  'to-the-rescue',
  'light-tension',
  'golden-face',
  'dehydrated-lemon',
  'thin-mint',
  'crimp-son-and-clover',
  'instant-winner',
  'ice-age',
  'hunky-dory',
  'crowd-pleaser'
]"/>
