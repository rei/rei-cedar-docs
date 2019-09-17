---
{
  "title": "Resources",
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

<cdr-doc-table-of-contents-shell>

## Icons in Cedar

Icons are symbols or visual expressions that communicate meaning through the use of graphics.

The Cedar Icon Library contains simple, functional icons to use across the REI digital platform to help make navigation easier for common actions.

Icons are available in SVG format at 24px, and can be displayed using the Icon Component.

## Icon Component

The Cedar Icon component (cdr-icon) is intended to consume icons hosted in the Cedar Icon Library.

For information about using the Cedar Icon API, design guidelines, and accessibility considerations, visit the [Icon component](/components/icon/) article.

## Icon Library and Naming
Cedar has a library of reusable icons with names and descriptive tags.

Visit the [Cedar Icon Library](https://rei.github.io/cedar-icons/#/) for a complete and searchable list of icons.

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

## Contribution Process

Cedar welcomes and encourages contributions to the icon library that are consistent with the REI style.

### Cedar Icon Guidelines

**Sketch Icon Path Geometry**

A Sketch icon artboard must contain a single combined-shape object in order to export correctly.

1. Click **Layer > Convert to Outlines** to convert any layers or shapes that have a stroke.
2. Using Combine’s Subtract and Union functions, create a single-shape group using positive and negative space shapes to compose your final form.
3. Once in a combined shape, flatten the object to further simplify paths.

**Style**

These rules are subjective, and can be bent or broken.

- 2px stroke weight
- 1px radius rounded edges and terminals
- Pixel aligned for proper anti-aliasing and rasterizing

For more style guidelines, review the [Iconography article](/icons/iconography/) article.

**Dimensions**

Icons must be created at 24x24px size format. However, they can be displayed in any one of three sizes:

- sm: 16x16px
- md: 24x24px
- lg: 32x32px


### Creating a Cedar Icon Sprite

The Cedar Icon Library has an easy to-use [sprite creator](https://rei.github.io/cedar-icons/#/sprite).

Alternately, the icon library API also provides [sprite generation](https://github.com/rei/cedar-icons#creating-a-custom-sprite).

### Adding an Icon to the Cedar Icon Library

1. In Abstract, create a new branch of the [CDR - Icon Contribution](https://share.goabstract.com/99335c38-51ee-41c8-8454-38c2a70c4c7f) project.
2. Open the **Icon Contribution Area** file.
3. Duplicate the **Template (Right-Click > Duplicate Page)** for each new icon or set of icons. (It is ok to leave alternate versions on the page, but please indicate the final version.)
4. Follow the Iconography Foundation guidelines to ensure that your icon follows Cedar’s requirements.
5. Make a final version of your icon and add it as a page. Each new icon or set should have its own page.
6. Add a member of the Cedar team as a reviewer. 
7. Your icon will be merged into the **CDR Icons • vNext** library and released in the next version of Cedar. 

### Exporting Icons That Aren’t in the Library

1. Download and install the Cedar SVGO Compressor Sketch plugin. **Click Assets > To Install**.
2. Follow the usage directions for proper icon export in the plugin readme.
3. Send your SVG file to your developer for use with the `<cdr-icon/>` component.

**Note:** Icons in the vNext repository may not be in the library yet.

## Questions or Issues?

Contact the Cedar team using the [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4) Slack channel with your questions or issues.

</cdr-doc-table-of-contents-shell>
