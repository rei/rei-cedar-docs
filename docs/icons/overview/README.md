---
{
  "title": "Icon Overview",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Icons/"
    }
  ],
}
---
<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

UI icons or glyphs symbolize commands, navigation, utility, or common actions and provide additional visual context and enhance usability. Icons offer a form of “visual shorthand”, lowering cognitive load and better utilizing space. Icons use familiar shapes and metaphors to communicate concepts in simple graphic forms.


## Characteristics

### Grid

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/grid.png`)"/>

Design icons on a 20px grid and export on a 24px artboard. Constrain the content of an icon  to the “live area” of the icon grid. The live area and padding ensure sufficient display room and consistent scaling of the icon set.

### Shapes

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/shapes.png`)"/>

Create icons  on the grid using basic foundational shapes. Adhering to these shapes ensures consistent proportionality of iconography throughout the icon set.


### Sizes

Icons scale to display across three sizes: small (16px), medium (24px), and large (32px).

### Clearance

Adequate space around the icon allows for legibility and touch. A minimum touch target area of 40px is recommended for standalone iconography.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/clearance.png`)"/>

When the mouse and keyboard are the primary input methods or when icons are paired in-line with text, measurements may be condensed to accommodate denser layouts. Icon size should align to the line-height of the paired text element.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/clearance2.png`)"/>

## Style
Icons are built from foundational shapes within the icon grid and align to the pixel grid to ensure clarity when scaling. Optical corrections can be made where necessary.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/style.png`)"/>


Minimize use  of depth or implied perspective unless necessary to convey the relationship of grouped items.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/style2.png`)"/>


Constructed with a 2px stroke. Strokes have a 1px rounded terminus or butt-cap.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/style3.png`)"/>

Square and rectangular shapes have 1px rounded exterior corners and sharp interior angles.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/style4.png`)"/>

Filled versions of select icons are available and typically represent an “on” or active state of the action, feature, or validation colors. When icons are paired with a complex or noisy background, consider using a filled icon (e.g. a filled location pin on a map environment).

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/style5.png`)"/>

Inverse display is available when paired with darker backgrounds.

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/style6.png`)"/>


## Icons in Cedar

Icons are symbols or visual expressions that communicate meaning through the use of graphics.

The Cedar Icon Library contains simple, functional icons to use across the REI digital platform to help make navigation easier for common actions.

Icons are available in SVG format at 24px, and can be displayed using the Icon Component.

## Icon Component

The Cedar Icon component (cdr-icon) is intended to consume icons hosted in the Cedar Icon Library.

For information about using the Cedar Icon API, design guidelines, and accessibility considerations, visit the [Icon component](../../components/icon/) article.

## Icon Library and Naming

Cedar has a library of reusable icons with names and descriptive tags.

Visit the [Cedar Icon Library](../library) for a complete list of icons.

### Naming Convention

Cedar icons follow the kebab-case naming convention. For example, {group(s)}-{name}-{variation}-{size}.svg where:

- {groups}: A namespace for alphabetized grouping. Could be more than one
- {name}: The name of the icon
- {variation}: Variations of the same icon - fill vs stroke - horizontal vs vertical
- {size}: sm for 16px and lg for 32px. 24px icons don't have a size suffix

File name examples:

`arrow-down.svg`<br>
`arrow-left.svg`<br>
`arrow-right.svg`<br>
`arrow-up.svg`<br>
`check-fill.svg`<br>
`check.svg`<br>
`check-lg.svg`<br>
`check-sm.svg`<br>
`check-stroke.svg`<br>
`menu.svg`<br>
`gear-tent.svg`<br>
`gear-tent-outline.svg`<br>
`gear-backpack.svg`<br>
`gear-backpack-stroke.svg`<br>
`gear-sleeping-bag.svg`<br>
`gear-bike.svg`<br>
`gear-boating-kayak.svg`<br>
`gear-boating-canoe.svg`<br>
`gear-boating-paddleboard.svg`

### Using Inline Cedar Icons

The `@rei/cedar` component package exports an [inline Vue component](../../components/icon/#inline-icon-components) for every icon in the Cedar library. The inline icon components are the easiest way to make use of the Cedar icon library if you are building an application using Vue. These components are prefixed with the word `Icon` and are named using PascalCase, for example: `IconCaretDown`, `IconExperiencesBackpacking`.

### Creating a Cedar Icon Sprite

Icon sprite sheets should be avoided in favor of using the [inline cedar icon components](#using-inline-cedar-icons), as maintaining sprite sheets is difficult and usually has minimal impact on performance. However we do offer a sprite option for teams that need to optimize their icon usage.

The Cedar Icon Library has an easy to-use [sprite creator](https://rei.github.io/cedar-icons/#/sprite). Alternately, the icon library API also provides [sprite generation](https://github.com/rei/cedar-icons#creating-a-custom-sprite). The sprite can then be referenced using the [CdrIcon component](../../components/icon/#svg-sprite)

## Contribution Process

Cedar welcomes and encourages contributions to the icon library that are consistent with the REI style.

### Cedar Icon Guidelines

**Single Path**

Each Cedar icon must composed of a single path object.

<!-- TODO: -->
<!-- **Sketch Icon Path Geometry**  
A Sketch icon artboard must contain a single combined-shape object in order to export correctly.

1. Click **Layer > Convert to Outlines** to convert any layers or shapes that have a stroke.
2. Using Combine’s Subtract and Union functions, create a single-shape group using positive and negative space shapes to compose your final form.
3. Once in a combined shape, flatten the object to further simplify paths. -->

**Style**  

These rules are subjective, and can be bent or broken.

- 2px stroke weight
- 1px radius rounded edges and terminals
- Pixel aligned for proper anti-aliasing and rasterizing

**Dimensions**

Icons must be created at 24x24px size format. However, they can be displayed in any one of three sizes:

- sm: 16x16px
- md: 24x24px
- lg: 32x32px

## Adding an Icon to the Cedar Icon Library

Contact the Cedar team using the [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4) Slack channel for assistance in adding a new icon to the library.


</cdr-doc-table-of-contents-shell>
