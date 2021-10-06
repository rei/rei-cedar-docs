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

## Customizing Filmstrip

Because the Filmstrip is a cookbook of multiple subcomponents, its structure can be customized or overridden in a variety of ways. For example, not using a container, including a header, adding more or less content blocks in the preview, not including arrow pagination or using different types of content within the content blocks such as images, product tiles, animation or cards.

### Use When
- Providing a teaser of products, events, articles or categories to users

### Don't Use When
- The content blocks will not link to a destination or contains no actionable elements
- The information contained within the filmstrip is not related
- The content will exceed a maximum of 5 swipes to preview all the content
- The user will need to focus on 1 piece of content at a time 

### Implementation
TODO code example should mimic this image (remove image once code sample is working as expected)
<cdr-img src="https://i.imgur.com/Co3dIqI.jpg" alt="image of REI.com product recommendations filmstrip"/>

## Scrolling Grid

Scrollable grids can be created using the `grid-auto-flow` property set to `column` for horizontal scrolling or `row` for vertical scrolling.

<cdr-doc-example-code-pair repository-href="/src/components/grid" :sandbox-data="$page.frontmatter.sandboxData" >

```html
<h3> Demo filmstrip </h3>
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

### Anatomy of a Filmstrip

<cdr-img src="https://i.imgur.com/LYgWLPG.png" alt="a wireframe outlining the parts listed below"/>

1. <strong>Container (optional)</strong>
  <br>The container keeps the filmstrip within the grid. You can break out of the grid by not including a container.
2. <strong>Header (optional)</strong> 
   <br>The header is a recommended element for many filmstrip use cases to prime the user on the content that is within the filmstrip.
3. <strong>Content blocks</strong> 
   <br>Content blocks can include any type of content such as images, product tiles, animation or cards.
4. <strong>Arrow navigation (optional)</strong> 
  <br>Arrow navigation is an optional element that allows the user to move from one display view to another. 
5. <strong>Link to all content (optional)</strong> 
    <br>The view all link is a recommended element for many filmstrip use cases to allow the user to view all the content in another format, often in a search list, rather than in the filmstrip. 
  <br>  
#### Container

- **Must**
  - Be able to receive tab focus
  - Include a skip link for keyboard and screen reading users to skip the filmstrip
  - Ensure all on-screen and touch target areas are at least 44 by 44 pixels

#### Content Block

- **Should**
  - be a set of like data

#### Arrow navigation

- **Must**
  - Provide visual boundaries with a minimum of 3:1 contrast to the background
  - For both keyboard focus and hover, it is important for the content to continue to have sufficient contrast, although it will depend on whether that content is text (relates to 1.4.3) or graphical (1.4.11) in nature.


May use these 
## Content
  
## Structure

## Do/Don't
  
## Behavior 

## Placement 

</cdr-doc-table-of-contents-shell>
