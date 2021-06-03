---
{
  "title": "Update and Loading Notifications",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": "Loading and inline page content updates",
  "sandboxData": {
    "components": "CdrBanner"
  },
  "breadcrumbs": [
    {
      "text": "Patterns/Messaging"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Overview

Update and Loading Notifications update existing inline page content.
They inform users of advisory information that enhances the site experience such as quantity updates or busy states.
Additionally, These notifications often only update a specific part of an inline content section.

It is important to grasp that many visual transitions are actually update notifications and should provide contextual information to our users. 
This can be added in the form of screen reader only text, though consider if the action without context will create any cognitive dissonance for our visual users.
Remember to create sufficient Visual feedback as many update notifications are unassociated triggering action.

### At A Glance
<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td>low</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Expectancy
    </th>
    <td>Expected / Assumed</td>
  </tr>
  <tr>
  <tr>
    <th class="advanced-table__header">
      Purpose
    </th>
    <td>
      <ul>
        <li>reporting page processes</li>
        <li>Responses to user initiated actions</li>
      </ul>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Non-blocking, not required</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>Passive state changes </td>
  </tr>
</cdr-table>

### Use When

- Providing loading icons or states
- Informing users that the application is busy
- Incrementing results or items
- Changing inline content based on user selection
- Confirming an action has taken place

### Don't Use When
- The User makes a selection that does not change or add content to the page
- The notification does not relate to an actionable element in a busy state
- The content added to the page is important or needs attention
- For delivery of messaging
- During the appearance / disappearance of content following a user interaction which is also announced to assistive technology such as the following:
  - tab
  - accordion
  - dialog
  - popover
  - tooltip

### Anatomy of a Update Notification

<cdr-img :src="$withBase('/notifications/updateNotification.png')" alt="Diagram for conditional notifications as an overlay, annotating the required layout of the elements listed below" />

- 1 [Content Container](#content-container)
- 2 [Content Control](#content-control)
#### Content Container

The Update Notification Content Container wraps both the element being updated and any assistive technology helpers such as screen reader text. It may be a pre-existing section of a page or dynamically added upon user action.

##### Design Considerations

- Should
  - Ensure the Update notification does not receive focus as a result of a change in status.
  - Ensure sufficient Visual feedback is provided to inform users that an update that may not be associated with the element they have interacted with has been updated
- Should not
  - Move Focus automatically to the notification
  - Overuse Update notifications. They may interrupt your users experience
- May
  - appear as a timed display.
##### Development Considerations

- Must
  - Define pre-existing page sections where content may be updated as a WAI-ARIA live region. Use the aria-live attribute on the container of the content that may be updated or, in special cases, use one of the WAI-ARIA special live region roles.
  - Ensure the container generating the update is able to receive focus
  - Update a live region of the page
    ```html
    <!-- EXAMPLE: while stable -->
    <div aria-live="polite" role="region" aria-labelledby="shopping-cart">
      4
      <span class="cdr-display-sr-only">items in your cart</span>
    </div>
    ```
    ```html
    <!-- EXAMPLE: when updated -->
    <div role="status" aria-live="polite" role="region" aria-labelledby="shopping-cart">

      <span class="cdr-display-sr-only">there are now</span>
      5 
      <span class="cdr-display-sr-only">items in your cart</span>
    </div>
    ```

- May
  - on activation, add `role=”status”` to the markup announcing the notification without interrupting the page flow of the user
    ```html
    <!-- EXAMPLE: while stable -->

    ```
    ```html
    <!-- EXAMPLE: while active -->
    <div role="status">
    Determining your location...
    </div>
    ```
  - Include [aria-atomic](https://www.digitala11y.com/aria-atomic-properties/) markup attribute to define what content will be presented to assistive technologies
  - Include `aria-relevant` to define what type of changes are being announced to assistive technologies
#### loading status
<cdr-img :src="$withBase('/notifications/loadingNotification.png')" alt="Diagram of loading animation annotating the list below" width="600px"/>

Update Notifications will often be used to represent loading icons or submitting buttons. These types of Update notifications 
- **Should**
  - Define pre-existing page sections where content may be updated as a WAI-ARIA live region.
  - Use the `aria-busy` attribute to indicate an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.

   <cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" :model="{isLoading: false}">

    ```html
    <cdr-button :disabled="isLoading"  @click="isLoading = true" aria-controls="updateContainer">
      {{isLoading ? 'Loading...' : 'Add to cart'}}
    </cdr-button>

    <section role="region" aria-live="polite" :aria-busy="isLoading" id="updateContainer">{{isLoading ? 'this content is being updated...' : 'live content section'}}</section>
    ```

    </cdr-doc-example-code-pair>

#### Content Control
 The Update Notification Content Control may be any actionable element, such as a link or button.
##### Design Considerations

- **Should not**
  - Move Focus automatically to the notification
- **May**
  - Open or update content in locations unrelated to the action which caused the notification to appear

##### Development Considerations

- **Should**
  - Use the aria-controls attribute if another part of the page controls what appears in the notification
    ```html
    <button aria-controls="updateContainer-id" >Add to cart</button>
    ```
date content in locations unrelated to the action which caused the notification to appear

### Examples that should be Update Notifications
<cdr-list modifier="unordered">
  <li>
    <figure>
      <cdr-img :src="$withBase('/notifications/updateExamples.png')" alt="An example on REI.com of this update notification" width="250px"/>
      <figcaption>
        <cdr-caption
        summary=" As the 'Find a store near you' modal is loading results it displays a loading icon, additionally, assistive technology should inform non-vision users of the busy state. For more information review the loading notification section above"/>
      </figcaption>
    </figure>
  </li>
  <li>
   <figure>
      <cdr-img :src="$withBase('/notifications/updateExampleAddToCartButton.png')" alt="An example on REI.com of this update notification" width="250px"/>
      <figcaption>
        <cdr-caption
        summary="After a user presses the Add to Cart button, the button grays out or changes to a loading icon, additionally, assistive technology should inform users of the busy state. For more information review the loading notification section above"/>
      </figcaption>
    </figure> 
  
  </li>
  <li>
    <figure>
      <cdr-img :src="$withBase('/notifications/cartUpdateExample.png')" alt="An example on REI.com of this notifications" width="80px"/>
      <figcaption>
        <cdr-caption
        summary="After a user adds an item to their cart a section of content near the Shopping Cart icon increments the number. additionally, assistive technology should announce 'x items in your cart'"/>
      </figcaption>
    </figure>
  </li>
  <li>
    <figure>
      <cdr-img :src="$withBase('/notifications/updateExample.png')" alt="An example on REI.com of this notifications" width="350px"/>
      <figcaption>
        <cdr-caption
        summary=" After a user selects the 'Bontrager' filter on the Mountain Bike Helmets search results page the 'Mountain Bike Helmets
    (number of results)' updates to 'Bontrager Mountain Bike Helmets (5 results)', ensuring this is marked up as a notification enable users of assistive technology stay informed of this update."/>
      </figcaption>
    </figure>
  </li>
  <li>
    <figure>
      <cdr-img :src="$withBase('/notifications/quantityUpdate.png')" alt="An example on REI.com of this notifications" width="500px"/>
      <figcaption>
        <cdr-caption
        summary=" A user updates the quantity of an item in the shopping cart, multiple items are updated to reflect this change including the item price, the order summary subtotal, order total, and total and savings of the shopping cart"/>
      </figcaption>
    </figure>
  </li>
</cdr-list>

### Available Cedar Components

Content control:
- [cdr-button](../../components/buttons/)
- [cdr-link](../../components/links/)
- [cdr-chip](../../components/links/)
- [cdr-checkbox](../../components/links/)
- [cdr-radio](../../components/links/)

Content container:
- *Cdr-loading - potential component*


</cdr-doc-table-of-contents-shell>
