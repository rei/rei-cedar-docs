---
{
  "title": "Filmstrip",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": "",
  "breadcrumbs": [
    {
      "text": "Components/"
    }
  ],
}
---


<cdr-doc-table-of-contents-shell >

# Overview
    
<cdr-doc-alert icon="info">Filmstrip is a Cedar cookbook component. Developers can choose from an optional range of subcomponents to create a custom version of it.</cdr-doc-alert>

A filmstrip is a functional component container which allows users to preview multiple related pieces of content such as images, text, or cards in an allocated amount of space.
  
TODO code example should mimic this image (remove image once code sample is working as expected)
<cdr-img src="https://i.imgur.com/Co3dIqI.jpg" alt="image of REI.com product recommendations filmstrip"/>


## Anatomy of a Filmstrip

Because the Filmstrip is a cookbook of multiple sub-components, its structure can be customized in a variety of ways.
For example, your page hierarchy will alter which heading you use. The amount and type of content being presented may alter the amount of content blocks 
in the preview. The style, inclusion, or speed of navigational controls may also be something unique to your page. 
Regardless of what changes you make, the following examples will outline some usage best practices, producing what we feel to be a good starting point for most implementations.


<cdr-img src="https://i.imgur.com/LYgWLPG.png" alt="a wireframe outlining the parts listed below"/>

(we don't need to have a section for each element - only the ones that have requirements that users need to be made aware of)

-  1.) [wrapping container](wrapping-container)
-  2.) Heading
-  3.) Link to see all
-  4.) [Overflow Grid](overflow-grid)
-  5.) Navigation Controls


NOTE - this is the expected structure: (the graphic does not align to the whole structure at the moment)
- wrapping container (not optional)
  - filmstrip header (not optional)
  - link to see all items in filmstrip category (optional)
  - overflow grid container (not optional)
    - navigation controls (optional)
    - grid items
    - overflow contents (not optional)


### Wrapping Container
- **Must**
  - Ensure all on-screen and touch target areas are at least 44 by 44 pixels
  - Include a skip link for keyboard and screen reading users to skip the filmstrip
- **Should**
  - Provide a heading title for the filmstrip
  - Provide navigation to view the entire category 
  
### Overflow Grid
The overflow grid container is the heavy lifter of this pattern, this is where the filmstrip items will be displayed. 
It will set up how many items are in view at a time, the spacing between items, hide all items not in view, 
and provide the very basic functionality of a horizontal scroll container.

- **Must**
  - Be able to receive tab focus

### Overflow Grid items

- **Must**
  - be a set of like content

### 4. Filmstrip navigation
The horizontal scroll provided by the overflow container will not by itself offer the most user friendly way to navigate all the items contained with a filmstrip,
We can enhance and augment the basic functionality already provided with the addition of some navigation controls and some logic informing the controls what to do when clicked
when overlaying additional actionable controls you
- **Must**
  - Provide visual boundaries with a minimum of 3:1 contrast to the background.
 For both keyboard focus and hover, it is important for the content to continue to have sufficient contrast, although it will depend on whether that content is text (relates to 1.4.3) or graphical (1.4.11) in nature.

  

 
###  1. Start by adding a Grid

Our filmstrip example uses a cdr-grid component set to overflow
-  Add a cdr-grid component to your application
-  update the `style` property to look something like `overflow: scroll; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; grid-auto-flow: column;`

<cdr-doc-example-code-pair repository-href="/src/components/grid" :sandbox-data="$page.frontmatter.sandboxData" >

```html
  <cdr-grid class="filmstrip-example" style="overflow: scroll; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; grid-auto-flow: column;">
    <div>
      <cdr-card>
        <div>
          <cdr-img
            alt="card test image alt text"
            :src="$withBase('/live.jpg')"
            modifier="responsive"
          />
        </div>
        <div class="content">
          <cdr-link class="cdr-card__link" href="#Overview">
            <cdr-text
              tag="h2"
              class="title"
            >
              Complex Card Title
            </cdr-text>
          </cdr-link>
          <cdr-rating
            rating="4.2"
            count="12"
            size="small"
          />
          <cdr-text class="body">
            Card content
          </cdr-text>
        </div>
      </cdr-card>
    </div>
        <div>
      <cdr-card>
        <div>
          <cdr-img
            alt="card test image alt text"
            :src="$withBase('/live.jpg')"
            modifier="responsive"
          />
        </div>
        <div class="content">
          <cdr-link class="cdr-card__link" href="#Overview">
            <cdr-text
              tag="h2"
              class="title"
            >
              Complex Card Title
            </cdr-text>
          </cdr-link>
          <cdr-rating
            rating="4.2"
            count="12"
            size="small"
          />
          <cdr-text class="body">
            Card content
          </cdr-text>
        </div>
      </cdr-card>
    </div>
        <div>
      <cdr-card>
        <div>
          <cdr-img
            alt="card test image alt text"
            :src="$withBase('/live.jpg')"
            modifier="responsive"
          />
        </div>
        <div class="content">
          <cdr-link class="cdr-card__link" href="#Overview">
            <cdr-text
              tag="h2"
              class="title"
            >
              Complex Card Title
            </cdr-text>
          </cdr-link>
          <cdr-rating
            rating="4.2"
            count="12"
            size="small"
          />
          <cdr-text class="body">
            Card content
          </cdr-text>
        </div>
      </cdr-card>
    </div>
        <div>
      <cdr-card>
        <div>
          <cdr-img
            alt="card test image alt text"
            :src="$withBase('/live.jpg')"
            modifier="responsive"
          />
        </div>
        <div class="content">
          <cdr-link class="cdr-card__link" href="#Overview">
            <cdr-text
              tag="h2"
              class="title"
            >
              Complex Card Title
            </cdr-text>
          </cdr-link>
          <cdr-rating
            rating="4.2"
            count="12"
            size="small"
          />
          <cdr-text class="body">
            Card content
          </cdr-text>
        </div>
      </cdr-card>
    </div>
        <div>
      <cdr-card>
        <div>
          <cdr-img
            alt="card test image alt text"
            :src="$withBase('/live.jpg')"
            modifier="responsive"
          />
        </div>
        <div class="content">
          <cdr-link class="cdr-card__link" href="#Overview">
            <cdr-text
              tag="h2"
              class="title"
            >
              Complex Card Title
            </cdr-text>
          </cdr-link>
          <cdr-rating
            rating="4.2"
            count="12"
            size="small"
          />
          <cdr-text class="body">
            Card content
          </cdr-text>
        </div>
      </cdr-card>
    </div>
        <div>
      <cdr-card>
        <div>
          <cdr-img
            alt="card test image alt text"
            :src="$withBase('/live.jpg')"
            modifier="responsive"
          />
        </div>
        <div class="content">
          <cdr-link class="cdr-card__link" href="#Overview">
            <cdr-text
              tag="h2"
              class="title"
            >
              Complex Card Title
            </cdr-text>
          </cdr-link>
          <cdr-rating
            rating="4.2"
            count="12"
            size="small"
          />
          <cdr-text class="body">
            Card content
          </cdr-text>
        </div>
      </cdr-card>
    </div>
        <div>
      <cdr-card>
        <div>
          <cdr-img
            alt="card test image alt text"
            :src="$withBase('/live.jpg')"
            modifier="responsive"
          />
        </div>
        <div class="content">
          <cdr-link class="cdr-card__link" href="#Overview">
            <cdr-text
              tag="h2"
              class="title"
            >
              Complex Card Title
            </cdr-text>
          </cdr-link>
          <cdr-rating
            rating="4.2"
            count="12"
            size="small"
          />
          <cdr-text class="body">
            Card content
          </cdr-text>
        </div>
      </cdr-card>
    </div>
        <div>
      <cdr-card>
        <div>
          <cdr-img
            alt="card test image alt text"
            :src="$withBase('/live.jpg')"
            modifier="responsive"
          />
        </div>
        <div class="content">
          <cdr-link class="cdr-card__link" href="#Overview">
            <cdr-text
              tag="h2"
              class="title"
            >
              Complex Card Title
            </cdr-text>
          </cdr-link>
          <cdr-rating
            rating="4.2"
            count="12"
            size="small"
          />
          <cdr-text class="body">
            Card content
          </cdr-text>
        </div>
      </cdr-card>
    </div>
  </cdr-grid>

```

</cdr-doc-example-code-pair>

-  2. buttons

  Scrollable grids can be created using the `grid-auto-flow` property set to `column` for horizontal scrolling or `row` for vertical scrolling. 


<h3> Demo filmstrip </h3>


## Product Recommendation Filmstrip
This the product recommendation filmstrip pattern to showcase relevant and related product recommendations. 
  
This pattern commonly displays six content blocks per view and does not require more than 5 clicks or swipes to view all of the content within it.

<cdr-img src="https://i.imgur.com/HMe834L.png"/>
TODO: code example, then replace the above image
  
## Category Hub Filmstrip
Use the category hub filmstrip pattern to display larger categories of content.
  
This pattern commonly displays 3 to 4 content blocks per view and does not require more than 5 clicks or swipes to view all of the content within it.
  
<cdr-img src="https://i.imgur.com/KFZMzV2.png"/>
TODO: code example, then replace the above image
  
  
# Guidelines
  
### Use When
- Providing a teaser of products, events, articles or categories to users

### Don't Use When
- The content blocks will not link to a destination or contains no actionable elements
- The information contained within the filmstrip is not related
- The content will exceed a maximum of 5 swipes to preview all the content
- The user will need to focus on 1 piece of content at a time. Instead, use a carousel
- There will be more than 5 full filmstrip views worth of content. Instead, consider using [Links](../links/)
  
## Structure

## Do/Don't
* Do display a minimum of 3 content blocks per view
* Don’t display less than 3 content blocks per view

* Do display a maximum of 6 content blocks per view
* Don’t display more than 6 content blocks per view

* Do include up to 5 clicks or swipes per filmstrip
* Do not allow the user to click or swipe excessively to view content in the filmstrip 

* Do give the filmstrip a defined start and endpoint 
* Do not allow the filmstrip to infinitely loop
  
* Do use like content for content blocks within the same filmstrip
* Do not present different types of content within the same filmstrip
  
  
## Behavior 

* A filmstrip has a defined beginning and end: if a user clicks left or right arrows when they are disabled, a bouncing animation occurs.
* When a user moves to a new view, there will always be 1 content block that stays the same, allowing the user to understand how the new view relates to the last view seen (for example, when the user clicks the right arrow, the last card becomes the first card and when the user clicks the left arrow, the first card becomes the last card).
* The number of new content blocks shown on the last page is determined by the remainder of content blocks when the total number of content blocks is divided by the amount of content blocks per view (for example, if there are 9 total blocks of content in a filmstrip that shows 4 blocks of content per view, then only 1 new block of content will display in the last view along with 3 blocks of repeated content from the previous views).

</cdr-doc-table-of-contents-shell>
