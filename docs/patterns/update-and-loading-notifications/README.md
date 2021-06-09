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

Update and Loading Notifications update pre-existing inline page content. 
loading Notifications often effect the same section of live content on a page and may precede an update notification being communicated to our users.
When not pairing loading and update notifications, remember to create sufficient Visual feedback as many update notifications will be unassociated to their triggering actions.
## Update Notifications

Update Notifications inform users of advisory information that enhances the site experience such as quantity updates or busy states.
Additionally, These notifications often only update a specific part of an inline content section, such as the number of items in a cart.

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
      <cdr-list>
        <li>Updating inline messaging</li>
        <li>Providing UI responses to user initiated actions</li>
      </cdr-list>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Non-blocking, Not Required</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>Passive state changes </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Examples</th>
    <td>
      <cdr-list>
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
    </td>
  </tr>
</cdr-table>

### Use When

- Incrementing results or items
- adding or removing items from a list
- Changing inline content based on user selection

### Don't Use When
- The notification relates to an actionable element in a busy state (see [Loading Notifications](../update-and-loading-notifications/#loading-notifications))
- As confirmation that a task or process initiated by the user was completed successfully (see [Transient Status Notifications](#transient-status-notifications))
- providing contextual information on the page processes (see [Transient Status Notifications](#transient-status-notifications))
- Providing errors, warnings, or success messaging related to user entered formatting, incomplete inputs, or invalid selections (see [Validation Notifications](validation/#validation-notifications))
- The content added to the page is critical and needs immediate attention (see [alert](../alerts))
- Page usage should be blocked until the user takes an action within the message or exits (see [alert-dialog](alerts/#alert-dialog))
- User interaction is required or content is critical to the user flow(see [modal](../../components/modal/))
- The message contains a rich UI experience(see [modal](../../components/modal/))
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
  - Overuse Update notifications. They may interrupt your users experience
- May
  - be stacked with loading notification
##### Development Considerations

- Must
  - Define pre-existing page sections where content may be updated as a WAI-ARIA live region. 
  Use the aria-live attribute on the container of the content that may be updated or, in special cases, use one of the WAI-ARIA special live region roles.
   ```html
    <!-- EXAMPLE: while stable -->
    <div aria-live="polite" role="region" aria-labelledby="shopping-cart">
      4
      <span class="sr-only">items in your cart</span>
    </div>
    ```
    ```html
    <!-- EXAMPLE: when updated -->
    <div role="status" aria-live="polite" role="region" aria-labelledby="shopping-cart">

      <span class="sr-only">there are now</span>
      5
      <span class="sr-only">items in your cart</span>
    </div>
    ```
  - Ensure the container generating the update is able to receive focus
   
- May
  - on activation of dynamic messaging, use `role=”status”` in place of or in addition to `aria-live` to the markup announcing the notification
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
## loading Notifications

When we use visual loading transitions to show that a live section of a page is changing or presenting new data, we are actually notifying our users that something is happening, that the page is busy.
these transition should also notify assistive technology that it should temporarily ignore changes to an element.
This can be added in the form of additional element attributes that communicate to assistive technology, though consider if the action without context will create any cognitive dissonance for our visual users.


<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td>N/A</td>
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
      <cdr-list>
      <li>communicating the refresh of page data</li>
      <li>disabling a section of a page as new data is presented</li>
      <li>reporting the busy status of a page or section</li>
      </cdr-list>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Blocking, disabling</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>User requested state changes</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Examples</th>
    <td>
      <cdr-list>
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
      </cdr-list>
    </td>
  </tr>
</cdr-table>

### Use When

- refreshing data in a live region
- loading additional page content
- Providing loading icons or states
- Informing users that the application is busy
### Don't Use When

- The notification does not relate to an actionable element in a busy state

### Anatomy of a Loading Notification

<cdr-img :src="$withBase('/notifications/loadingNotification.png')" alt="Diagram of loading animation annotating the list below" width="600px"/>

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

</cdr-doc-table-of-contents-shell>
