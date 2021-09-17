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

Update and Loading Notifications inform users of the current working state of their request and help reduce uncertainty. These notifications update pre-existing, inline page content. 
  
Often a Loading Notification will precede an Update Notification, affecting the same content element on a page and intentionally paired together to communicate to users the ongoing status of their request. When not pairing Loading and Update Notifications, remember to create sufficient visual feedback as many Update Notifications will be unassociated to their triggering actions.

## Update Notifications

Update Notifications inform users of advisory information that enhances the site experience such as quantity updates or busy states. These notifications update a specific part of an inline content section, such as the number of items in a cart.

<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td> <icon-information-fill /> Low</td>
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
                summary="After a user adds an item to their cart, a section of content near the Shopping Cart icon increases in number. Additionally, assistive technology should announce 'x items in your cart'."/>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <cdr-img :src="$withBase('/notifications/updateExample.png')" alt="An example on REI.com of this notifications" width="350px"/>
              <figcaption>
                <cdr-caption
                summary=" After a user selects the 'Bontrager' filter on the Mountain Bike Helmets search results page, the 'Mountain Bike Helmets
            (number of results)' updates to 'Bontrager Mountain Bike Helmets (5 results)'. Ensuring this is marked up as a notification enable users of assistive technology stay informed of this update."/>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <cdr-img :src="$withBase('/notifications/quantityUpdate.png')" alt="An example on REI.com of this notifications" width="500px"/>
              <figcaption>
                <cdr-caption
                summary=" As a user updates the quantity of an product in the shopping cart, multiple items are updated to reflect this change: item price, order summary subtotal, order total, and total and savings of the shopping cart."/>
              </figcaption>
            </figure>
          </li>
        </cdr-list>
    </td>
  </tr>
</cdr-table>

### Use When

- Incrementing results or items
- Adding or removing items from a list
- Changing inline content based on user selection

### Don't Use When
- The notification relates to an actionable element in a busy state (see [Loading Notifications](../update-and-loading-notifications/#loading-notifications))
- Confirming that a task or process initiated by the user was completed successfully (see [Transient Status Notifications](../status-notifications/#transient-status-notifications))
- Providing contextual information on the page processes (see [Transient Status Notifications](../status-notifications/#transient-status-notifications))
- Providing errors, warnings, or success messaging related to user entered formatting, incomplete inputs, or invalid selections (see [Validation Notifications](../validation-notifications/))
- The content added to the page is critical and needs immediate attention (see [Alert](../alerts/))
- Page usage should be blocked until the user takes an action within the message or exits (see [Alert Dialog](../alerts/#alert-dialog))
- User interaction is required or content is critical to the user flow (see [Modal](../../components/modal/))
- The message contains a rich UI experience (see [Modal](../../components/modal/))
- During the appearance or disappearance of content following a user's interaction which is also announced to assistive technology such as the following:
  - Tab
  - Accordion
  - Dialog
  - Popover
  - Tooltip
  
### Anatomy of a Update Notification

<cdr-img :src="$withBase('/notifications/updateNotification.png')" alt="Diagram for conditional notifications as an overlay, annotating the required layout of the elements listed below" />

- 1: [Content Container](#content-container)
- 2: [Content Control](#content-control)
  
#### Content Container

The Update Notification content container wraps both the element being updated and any assistive technology helpers such as screen reader text. It may be a pre-existing section of a page or dynamically added upon user action.

Design 
- Should ensure the Update Notification does not receive focus as a result of a change in status
- Should ensure sufficient visual feedback is provided to inform users that an update that may not be associated with the element they have interacted with has been updated
- Should not overuse Update Notifications as they may interrupt the user experience
- May be stacked with a Loading Notification
<hr/>

Development
- Must ensure the container generating the update is able to receive focus
- Must define pre-existing page sections where content may be updated as a WAI-ARIA live region
- Must use the `aria-live` attribute on the container of the content that may be updated or, in special cases, use one of the WAI-ARIA special live region roles:
  
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
  
- May use `role=”status”` in place of or in addition to `aria-live`
- May include [aria-atomic](https://www.digitala11y.com/aria-atomic-properties/) markup attribute to define what content will be presented to assistive technologies
- May include `aria-relevant` to define what type of changes are being announced to assistive technologies
  
#### Content Control
 The Update Notification content control may be any actionable element, such as a link or button.

Design 
- Should not move focus to the notification automatically
- May open or update content in locations unrelated to the action which caused the notification to appear
<hr/>

Development
- Should use the aria-controls attribute if another part of the page controls what appears in the notification
  
## Loading Notifications

Loading Notifications signal to users that loading is occurring, but do not give any specific indication of progress. Use Loading Notifcations to communicate the busy state of the page or content element, reassuring users that that page is not frozen and their request is in progress. 

Transitions should also notify assistive technology to temporarily ignore changes to an element. This can be added in the form of additional element attributes that communicate to assistive technology, though consider if the action without context will create any cognitive dissonance for our visual users.

<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td> <icon-information-fill /> Low</td>
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
      <li>Communicating the refresh of page data</li>
      <li>Disabling a section of a page as new data is presented</li>
      <li>Reporting the busy status of a page or section</li>
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
              summary="As the 'Find a store near you' modal is loading results, it displays a loading icon. Additionally, assistive technology should inform non-vision users of the busy state. For more information, review the loading notification section above."/>
            </figcaption>
          </figure>
        </li>
        <li>
        <figure>
            <cdr-img :src="$withBase('/notifications/updateExampleAddToCartButton.png')" alt="An example on REI.com of this update notification" width="250px"/>
            <figcaption>
              <cdr-caption
              summary="After a user presses the Add to Cart button, the button grays out or changes to a loading icon. Additionally, assistive technology should inform users of the busy state. For more information review the loading notification section above."/>
            </figcaption>
          </figure> 
        </li>
      </cdr-list>
    </td>
  </tr>
</cdr-table>

### Use When

- Refreshing data in a live region
- Loading additional page content
- Providing loading icons or states
- Informing users that the application is busy
### Don't Use When

- The notification does not relate to an actionable element in a busy state

### Anatomy of a Loading Notification

<cdr-img :src="$withBase('/notifications/loadingNotification.png')" alt="Diagram of loading animation annotating the list below" width="600px"/>

- Should define pre-existing page sections where content may be updated as a WAI-ARIA live region
- Should use the `aria-busy` attribute to indicate an element is being modified and that assistive technologies may want to wait until the modifications are complete before exposing them to the user

<cdr-doc-example-code-pair repository-href="/src/components/button" :sandbox-data="$page.frontmatter.sandboxData" :model="{isLoading: false}">

```html
<cdr-button :disabled="isLoading"  @click="isLoading = true" aria-controls="updateContainer">
  {{isLoading ? 'Loading...' : 'Add to cart'}}
</cdr-button>

<section role="region" aria-live="polite" :aria-busy="isLoading" id="updateContainer">{{isLoading ? 'This content is being updated...' : 'Live content section'}}</section>
```

</cdr-doc-example-code-pair>

</cdr-doc-table-of-contents-shell>
