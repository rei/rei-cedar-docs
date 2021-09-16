---
{
  "title": "Status Notifications",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": "Page and section errors, warnings, success or status responses based on user input",
  "breadcrumbs": [
    {
      "text": "Patterns/Messaging"
    }
  ],
}
---


<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Overview

Status Notifications inform users that something on the page has changed. These responses help users understand page processes, actions they have competed, additional options available, or actions still needing attention. Common examples include success and warning messages.

Based on the information being communicated, status notifications can be persistent or transient. While it’s important to keep users informed when there is an update or status change, these notifications should not be page blocking. 

## Persistent Status Notifications

Persistent Status Notifications are 'in page messages', often [validation summaries](../validation-notifications/#validation-summaries), presented to the user based on conditions the user has created via a selection of product or adjustment of settings.

<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td><icon-warning-fill/> Prominent, medium priority</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Expectancy
    </th>
    <td>Unexpected</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Purpose
    </th>
    <td>
        <cdr-list>
          <li>Exposing a status change to a product caused by user selection</li>
          <li>Providing non-validation errors or warnings or updates on the status of items in the user's curated item list</li>
          <li>Providing confirmation when updating and removing items which provide navigation or other actions</li>
        </cdr-list>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Non-blocking, not required</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>Advisory ancillary information </td>
  </tr>
  <tr>
  <th class="advanced-table__header">Location</th>
  <td>Inline on page, generally located in associated section of effected content</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Options</th>
    <td>
      <cdr-list>
        <li>May contain detailed information</li>
        <li>May include additional actions</li>
        <li>May be dismissible</li>
      </cdr-list>
    </td>
  </tr>
  <tr>
  <th class="advanced-table__header">Components</th>
  <td>
    <cdr-list>
      <li>[Banner](../../components/banner/)</li>
      <li>Announcement</li>
    </cdr-list>
  </td>
  </tr>
  <tr>
  <th class="advanced-table__header">Examples</th>
  <td>
  <cdr-list>
  <li>
    <figure>
      <cdr-img :src="$withBase('/notifications/announcementExample.png')" alt="An example on REI.com of this notification" width="500px"/>
      <figcaption>
        <cdr-caption
        summary="After a user selects 'save for later' or removes an unavailable item from their cart, a status notification banner replaces the item with the text that the item has been saved or removed."/>
      </figcaption>
    </figure>
  </li>
  <li>
    <figure>
      <cdr-img :src="$withBase('/notifications/cartstockExample.png')" alt="An example on REI.com of this notification" width="500px"/>
      <figcaption>
        <cdr-caption
        summary="After a user adds more stock than is available on the shopping cart page, a status notification banner displays informing the user of the product availability."/>
      </figcaption>
    </figure>
  </li>
</cdr-list>
  </td>
  </tr>
</cdr-table>

### Use When
- Exposing a status change to a product caused by user selection
- Providing confirmation when updating and removing items that provides navigation or other actions
- To summarize and direct users back to existing errors 
- To increase visibility of existing errors
- When valid form options cause invalid selections
- When validation is not possible prior to submit

### Don't Use When
- Changing inline content based on user selection (see [Update Notifications](../update-and-loading-notifications/#update-notifications))
- The notification relates to an actionable element in a busy state (see [Loading Notifications](../update-and-loading-notifications/#loading-notifications))
- As confirmation that a task or process initiated by the user was completed successfully (see [Transient Status Notifications](#transient-status-notifications))
- Providing contextual information on the page processes (see [Transient Status Notifications](#transient-status-notifications))
- Providing errors, warnings, or success messaging related to user entered formatting, incomplete inputs, or invalid selections (see [Validation Notifications](../validation-notifications))
- The content added to the page is critical and needs immediate attention (see [Alerts](../alerts))
- Page usage should be blocked until the user takes an action within the message or exits (see [Alert Dialog](../alerts/#alert-dialog))
- User interaction is required or content is critical to the user flow (see [Modal](../../components/modal/))
- The message contains a rich UI experience (see [Modal](../../components/modal/))
- The user makes a selection that does not change or add content to the page
- As the only indication of an error

### Anatomy of a Persistent Status Notification

<cdr-img :src="$withBase('/notifications/persistentStatusAnatomy.png')" alt="Diagram for persistent status notifications, annotating the required layout of the elements listed below" />

1. [Status Container](#status-container)
2. [Optional Dismiss Action](#optional-dismiss-action)
3. [Message](#message)

#### Status Container
- **Must**
  - Add `role=”status”`to the markup on activation, announcing the notification without interrupting the page flow of the user
  - Ensure the notification container is able to receive focus
  - If moving focus to the notification, the notification content container must be dismissible
- **Should**
  - Ensure an element with role status does not receive focus as a result of change in status
  - Make the relationship between page controls and the notification explicit with the `aria-controls` attribute if another part of the page controls what appears in the status
- **Should not**
  - Open as a blocking overlay window
  - Move focus automatically to the notification
  - Direct the user to a new page or window
  - Overuse Status Notifications as they may interrupt your users experience
  - Reuse bespoke UI intended for other message or navigation types
- **May**
  - Display notifications in unique UI to create distinction around themselves and the the page content
  - Open or update content in locations unrelated to the action which caused the notification to appear 
  - Update a live region of the page
  - Use the HTML `<aside>` tag, denoting the section that, though related to the main element, doesn't belong to the main flow
#### Optional Dismiss Action
- **Must**
  - Ensure the notification will not be removed if keyboard focus or mouse hover is within or over the notification
  - Return user focus to a logical location
  - Provide at least one focusable UI element (i.e. Close button, primary button)
- **Should not**
  - Create notifications that disappear automatically
#### Message
- **Should**
  - Clearly communicate what is happening

## Transient Status Notifications

 Transient Status Notifications are temporary messages that come and go without user input. They indicate the completion of a task or process initiated by the user or the application itself.

<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td><icon-information-fill /> low / minimally disruptive</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Expectancy
    </th>
    <td>Unexpected</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Purpose
    </th>
    <td>
        <cdr-list>
          <li>Provide confirmation when updating and removing items</li>
          <li>Providing simple messages when saving user preferences</li>
          <li>provide contextual information on the page processes</li>
        </cdr-list>
    </td>
  </tr>
  <tr>
      <th class="advanced-table__header">
        Interaction
      </th>
      <td>
        <cdr-list>
          <li>Non-blocking</li>
          <li>Not required</li>
          <li>Temporary</li>
          <li>Usually auto dismisses</li>
        </cdr-list>
      </td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Information
    </th>
    <td>Advisory ancillary information</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      Location
    </th>
    <td>
    <cdr-list>
    <li>Overlay</li>
    <li>Typically in the top right of the page
    </cdr-list>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Options</th>
    <td>
      <cdr-list>
        <li>Should not contain actions unless these actions are also available on the parent page</li>
        <li>Should not change their state nor update their content once visible</li>
        <li>May be dismissible</li>
        <li>Should not get in the way of important page content</li>
        <li>May be clicked on to see what’s previously happened</li>
      </cdr-list>
    </td>
  </tr>
  <tr>
  <th class="advanced-table__header">Components</th>
   <td>
    <cdr-list>
      <li>[Toast](../../components/toast/)</li>
      <li>Snack Bar</li>
       </cdr-list>
    </td>
  </tr>
  <tr>
  <th class="advanced-table__header">Examples</th>
  <td>
  <cdr-list modifier="ordered">
  <li>
    <figure>
      <cdr-img :src="$withBase('/notifications/storeStatusNotification.png')" alt="An example on REI.com of this notification" width="200px"/>
      <figcaption>
        <cdr-caption
        summary="After a user selects a store to 'Set as my REI' a 'saved' notification overlay displays. Assistive technology should inform users of the busy state"/>
      </figcaption>
    </figure>
  </li>
  <li>
    <figure>
      <cdr-img :src="$withBase('/notifications/wishlist.png')" alt="" width="500px"/>
      <figcaption>
        <cdr-caption
        summary="The user adds an item to their wishlist"/>
      </figcaption>
    </figure>
  </li>
  <li>
   Updating and removing an item from wish list
  </li>
</cdr-list>
  </td>
  </tr>
</cdr-table>

### Use When
- As confirmation that a task or process initiated by the user was completed successfully 
- Providing contextual information on the page processes
### Don't Use When
- Changing inline content based on user selection (see [Update Notifications](../update-and-loading-notifications/#update-notifications))
- The notification relates to an actionable element in a busy state (see [Loading Notifications](../update-and-loading-notifications/#loading-notifications))
- Exposing a status change to a product caused by user selection (see [Persistent Status Notifications](#persistent-status-notifications))
- Providing error or warnings on the status of items in the users cart (see [Persistent Status Notifications](#persistent-status-notifications))
- Providing confirmation when updating and removing items that provides navigation or other actions (see [Persistent Status Notifications](#persistent-status-notifications))
- Notifying users of a potential problem, outside of a form, that may require their attention (see [Persistent Status Notifications](#persistent-status-notifications))
- Providing errors, warnings, or success messaging related to user entered formatting, incomplete inputs, or invalid selections (see [Validation Notifications](../validation-notifications/))
- The content added to the page is critical and needs immediate attention (see [Alerts](../alerts))
- Page usage should be blocked until the user takes an action within the message or exits (see [Alert Dialog](../alerts/#alert-dialog))
- User interaction is required or content is critical to the user flow (see [Modal](../../components/modal/))
- The message contains a rich UI experience (see [Modal](../../components/modal/))
- The user makes a selection that does not change or add content to the page

### Anatomy of a Transient Status Notification

<cdr-img :src="$withBase('/notifications/transientStatusAnatomy.png')" alt="Diagram for transient status notifications, annotating the required layout of the elements listed below" />

Transient Status Notifications have the following requirements in addition to the requirements for Persistent Status Notifications (TODO should requirements that are pertinent be additive or all inclusive?)

1. **[Status Notifications as an Overlay](#status-notifications-as-an-overlay)**
2. **[Automatic Dismissal](#automatic-dismissal)**
3. **[Interactive Controls](#interactive-controls)**

#### Status Notifications as an overlay
The concise messages contained within Status Notifications are not required for a user to interact with and may open unexpectedly, 
these notifications should not be blocking. Opening in an overlay may disrupt or confuse users - additionally they may not be seen at all by users at some breakpoints.


- **Must**
  - Not block page content
  - Return user focus to a logical location
  - If moving focus to the notification, the notification: 
    - Must provide at least one focusable UI element (i.e. close button, primary button)
    - Content container must be dismissible
    - On dismiss, must return focus to the next logical location in the page flow
  - Meet the standard color ratio requirements for both text (4.5:1) and activatable components (3.0:1).
- **Should**
  - Be used for short messages to confirm an action
- **Should not**
  - Be located near or on top of navigation area
  - Contain interactive controls if notification is displayed as an overlay
  - Open as a blocking overlay window**
- **May**
  - Appear as a timed display

If opening a Status Notification consider the following:
- A blocking window can introduce obstruction issues for people who have zoomed in browsers or for users at smaller breakpoints
- A non-blocking window may be completely missed by those who are using screen magnification software, but who are not using a screen reader

#### Automatic Dismissal
In some scenarios status notifications may be displayed for a set amount of time rather than become a lasting feature of a page. In these cases there should be no negative impact on their current activities or the status that the message conveyed. 
Ignoring a timed notification would still mean that the action is completed successfully.

For example, an item would still be added to a cart regardless of a user's engagement with the notification informing them of the successfully added item.

- [WCAG 2.1 Understanding adjustable timing](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html)
#### Interactive Controls

Interactive controls within notifications produce several hurdles for users of assistive technology. 
Specifically, the `Aria-live` region will not preserve the semantics of elements being read aloud.
As an example, consider the virtual outfitting notification previousy seend on the product page: a user will not know what the title, copy, or link are in the following text:

"*Need help deciding? Schedule a free 1-on-1 virtual appointment with one of our experts. Book now*". 

Users may infer the "book now" text is a link - or just as likely search for a button or guess the entire text would be active.

Consider the following:
- When triggered, live regions only read out their content to assisted technologies. They will not distinguish text from actionable elements present within a notification.
- Users may infer that actionable element is present, however a user will need to guess what element to search for. This is especially problematic for notifications that are automatically dismissed, as users will have limited time to correctly guess and act on this choice.

If the notification must include an actionable element you are responsible for the following:
- **Must**
  - Return focus to next logical location in the page flow
  - Contained action is also readily available on the page
  - If the action is not available on page, the action should be added to a notification history page (see ARIA’s log role)


## Accessibility References
- [Notifications and feedback](https://www.w3.org/WAI/perspective-videos/notifications/)
- [Accessible Notifications](https://www.w3.org/WAI/RD/wiki/Accessible_Notifications)
- [WCAG status messages 4.1.3](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html)

</cdr-doc-table-of-contents-shell>
