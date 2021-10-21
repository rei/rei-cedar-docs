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


<cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">

## Overview
    
Filmstrip is a type of constrained content container which allows users to preview multiple related pieces of content such as images, text, or cards in a horizontal overflow.  
  
Designers and developers will need to compose their own custome filmstrip based on their specific needs. The following documentation follows more of a ‘recipe’ format, with guidance and necessary component ‘ingredients’ available to customize as needed. 
  
Designers can copy and paste the two most common examples listed in this documentation or use another variant for a more custom use case from [the Figma library here.](https://www.figma.com/file/dGjTo4tpmVlSZQPWPnCLy0/Cedar-Web-Components?node-id=2019%3A183215)  

Developers use the following [guide](TODO link to start of steps) which applies specific filmstrip requirements to our basic cedar components as a starting point for your custom filmstrip. Please feel free to share feedback with us by posting in the [cedar-user-support slack channel here](https://rei.slack.com/archives/CA58YCGN4) or coming to an office hours.
  
TODO code example should mimic this image (remove image once code sample is working as expected)
<cdr-img src="https://i.imgur.com/Co3dIqI.jpg" alt="image of REI.com product recommendations filmstrip"/>


## Anatomy

Because the Filmstrip is a cookbook of multiple sub-components, its structure can be customized in a variety of ways.

<cdr-img src="https://i.imgur.com/LYgWLPG.png" alt="a wireframe outlining the parts listed below"/>
  
  
 ### 1. Wrapping container 
  
The wrapping container is a required element to house the filmstrip structure. The end of the page container can be removed to allow for a filmstrip that visually overflows.  

**Must**

- Ensure all on-screen and touch target areas are at least 44 by 44 pixels  

- Include a skip link for keyboard and screen reading users to skip the filmstrip 

**Should**
  

### 2. Header (optional)

The header is a recommended element for many filmstrip use cases to prime the user on the content that is within the filmstrip. 
  

### 3. Content Blocks 
  
Content blocks can include any type of content such as images, product tiles, videos, gifs or cards. 

On an X-axis, filmstrips items are linear and ordered, they start at item1 and end at item(n). 
  
**Must**

- be a set of like content 
  
  
### 4. Pagination Controls (optional) 
  
Pagination controls are an optional element that allows the user to move from one display view to another.  
  
**Behavior**
- Pagination controls become disabled when the set of data reaches either end of the x-axis.  
- A filmstrip has a defined beginning and end: if the user clicks a pagination control when it is disabled, a bouncing animation occurs.
- When a user moves to a new view, there will always be 1 content block that stays the same, allowing the user to understand how the new view relates to the last view seen (for example, when the user clicks the right pagination control, the last card becomes the first card and when the user clicks the left pagination control, the first card becomes the last card). 
- The number of new content blocks shown on the last page is determined by the remainder of content blocks when the total number of content blocks is divided by the amount of content blocks per view (for example, if there are 9 total blocks of content in a filmstrip that shows 4 blocks of content per view, then only 1 new block of content will display in the last view along with 3 blocks of repeated content from the previous views). 
  
**Must**
- Provide visual boundaries with a minimum of 3:1 contrast to the background 
- For both keyboard focus and hover, it is important for the content to continue to have sufficient contrast, although it will depend on whether that content is text (relates to 1.4.3) or graphical (1.4.11) in nature. 
- Provide a way for someone to escape the filmstrip items once they enter 

**Should**
- Use aria-hidden to remove controls from the tab and AT reading order
  
### 5. Link to all content (optional) 

The view all link is a recommended element for many filmstrip use cases to allow the user to view all the content in another format, often in a search list, rather than in the filmstrip. 

### 6. Overflow Grid 

The overflow grid container is the heavy lifter of this pattern, this is where the filmstrip items will be displayed. It will set up how many items are in view at a time, the spacing between items, hide all items not in view, and provide the basic functionality of a horizontal scroll container. 

**Must**
- Be able to receive tab focus 
- Allow left and right arrow key scrolling  
- Be assigned a `role` of “region” 
- If providing your filmstrip a heading us `aria-labelledby` to associate your filmstrip to the title, otherwise apply `aria-label` and provide the filmstrip a meaningful name.  
  
  

## Development Instructions
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
              tag="h4"
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
              tag="h4"
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
              tag="h4"
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
              tag="h4"
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
              tag="h4"
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
              tag="h4"
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
              tag="h4"
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
              tag="h4"
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



## Examples 
  
The following are two common use cases that can be followed. Designers can copy and paste these examples from the Figma library.
  
### Product Recommendation Filmstrip
This the product recommendation filmstrip pattern to showcase relevant and related product recommendations. 
  
This pattern commonly displays six content blocks per view and does not require more than 5 clicks or swipes to view all of the content within it.

<cdr-img src="https://i.imgur.com/HMe834L.png"/>
TODO: code example, then replace the above image
  
### Category Hub Filmstrip
Use the category hub filmstrip pattern to display larger categories of content.
  
This pattern commonly displays 3 to 4 content blocks per view and does not require more than 5 clicks or swipes to view all of the content within it.
  
<cdr-img src="https://i.imgur.com/KFZMzV2.png"/>
TODO: code example, then replace the above image
  
  
## Guidelines
  
### Use When
- Providing a teaser of products, events, articles or categories to users

### Don't Use When
- The content blocks will not link to a destination or contains no actionable elements
- The information contained within the filmstrip is not related
- The content will exceed a maximum of 5 swipes to preview all the content
- The user will need to focus on 1 piece of content at a time. Instead, use a carousel
- There will be more than 5 full filmstrip views worth of content. Instead, consider using [Links](../links/)
  
### Do/Don't
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
  
  
### Behavior 

- A tab user will focus first on the filmstrip container 
- The container should be scrollable via left and right arrow keys 
- A screen reader user will not hear the arrow controls but should hear the filmstrip container (Use aria-hidden to remove controls from the tab and AT reading order) 
  
  
### Accessibility 

**Overflow and Focus problem**
- Firefox puts an overflowing container into the tab order, making it reachable and its content scrollable. Because it has no focus styles, it is not obvious   
- Chrome, Chrome-based Edge and Safari do not add overflow containers to the tab order. By default, overflowing content on these browsers is not scrollable with the keyboard  
**Overflow and Focus solution**
- Add `tabindex="0"` to the overflowing container to make it baseline keyboard accessible. 
- Show this keyboard accessibility to users by applying focus styles (Cedar token mixin) 
- "Promote" the `<div>` to a landmark region by both applying role="region" and supplying an accessible name, by using aria-label, for example. By doing so, you provide much-needed context to screen reader users - because they suddenly discover a focusable element that is not interactive in the classic sense (like a link or button would be). 

</cdr-doc-table-of-contents-shell>
