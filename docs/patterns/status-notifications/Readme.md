---
{
  "title": "Status Notifications",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": "Page and page section errors, warnings, success or status responses based on user input",
  "sandboxData": {
    "components": "CdrAlert"
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

Status Notifications apply the `role="status"` to their HTML markup.
They will not interrupt a user from a task they are engaged in, and are provided on user action rather than as part of the page. 
These event based notifications differ from Update Notifications as they do not update live, existing inline sections of a page.
They provide information which will help users make a decision, communicate statuses, or provide feedback about selections that have been have made.
These notifications may open or be added to locations unrelated to the action which caused the notification to trigger.
Additionally, they may open based on conditions a user has created or criterium they have met.
### Use When
- Exposing additional product information that may vary based on user selection
- As confirmation that a task or process initiated by the user was completed successfully 

- As confirmation that a task was completed successfully (See Success Type)
### Don't Use When
- presenting the user additional actions to take (see [modal](../../components/modal/))
- The UI is presented as a dialog that requires a user action, on which the focus is set (see [modal](../../components/modal/))
- The User makes a selection that does not change or add content to the page
- The notification is an update to existing inline copy (see [status notifications](#status-notifications))
- The notification relates to an actionable element in a busy state (see [status notifications](#status-notifications))
- The content added to the page is critical and needs immediate attention (see [alert](../alerts))

## Persistent Status notifications

<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td>medium</td>
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
        <ul>
          <li>proved error or warnings on the status of items in your carts</li>
          <li>providing confirmation when updating and removing items that provides navigation or other actions</li>
          <li>Communicating a status change caused by the user</li>
          <li>Contextual information that might need their attention</li>
          <li>Notifying users of a potential problem that may require their attention</li>
        </ul>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Non-blocking, Not Required</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>Advisory ancillary information </td>
  </tr>
  <tr>
  <th class="advanced-table__header">Location</th>
  <td>Inline on page generally located in associated section of effected content</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Options</th>
    <td>
      <cdr-list>
        <li>may contain detailed information</li>
        <li>may include additional actions</li>
        <li>may be dismissible</li>
      </cdr-list>
    </td>
  </tr>
  <tr>
  <th class="advanced-table__header">Potential Component</th>
  <td>banner / announcement</td>
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
        summary="After a user selects 'save for latter' or removes an unavailable item from their cart a status notification banner replaces the item with the text that the item has been saved or removed."/>
      </figcaption>
    </figure>
  </li>
  <li>
    <figure>
      <cdr-img :src="$withBase('/notifications/cartstockExample.png')" alt="An example on REI.com of this notification" width="500px"/>
      <figcaption>
        <cdr-caption
        summary="After a user adds more stock than is available on the shopping cart page a status notification banner displays informing the user of the product availability."/>
      </figcaption>
    </figure>
  </li>
</cdr-list>
  </td>
  </tr>
</cdr-table>

### Anatomy of a Persistent Status notifications

<cdr-img :src="$withBase('/notifications/persistentStatusAnatomy.png')" alt="Diagram for persistent status notifications, annotating the required layout of the elements listed below" />

1. [Status Container](#status-container)
2. Optional Dismiss Action - Enables the user to remove the notification from view.
3. Title - Briefly summarizes alert content.
4. Visual and Assistive technology aid
5. Message - Includes the core, most important alert content.

#### Status Container
- **Must**
  - on activation, add `role=”status”` to the markup announcing the notification without interrupting the page flow of the user
  - Not contain unique actionable items if the notification is an overlay
  - Ensure the notification container is able to receive focus
- **Should**
  - Be used for short messages to confirm an action
  - Authors SHOULD ensure an element with role status does not receive focus as a result of change in status.
  - Status is a form of live region. If another part of the page controls what appears in the status, 
authors SHOULD make the relationship explicit with the aria-controls attribute.
  - Clearly communicate what is happening
- **Should not**
  - Open as a blocking overlay window
  - Move Focus automatically to the notification
  - Direct the user to a new page or window
  - Overuse Status notifications. They may interrupt your users experience
  - Reuse bespoke UI intended for other message or navigation types
- **May**
  - display notifications in rich, unique UI to create distinction around itself and the page content
  - Open or update content in locations unrelated to the action which caused the notification to appear 
  - Update a live region of the page
  - Use the HTML `<aside>` tag, denoting the section that, though related to the main element, doesn't belong to the main flow
  - Include `aria-atomic` markup attribute to define what content will be presented to assistive technologies
  - Include `aria-relevant` to define what type of changes are being announced to assistive technologies

#### status dismissal
- **Must**
  - Ensure notification will not be removed if keyboard focus or mouse hover is within or over the notification.
  - Return user focus to a logical location.
  - If moving focus to the notification, the notification 
    - Must provide At least one focusable UI element (i.e. Close button, primary button)
    - content container must be dismissible
    - On dismiss, must return focus to the next logical location in the page flow
- **Should not**
  - Create notifications that disappear automatically

## Transient Status notifications

<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td>low / inform</td>
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
        <ul>
          <li>proved confirmation when updating and removing items</li>
          <li>providing simple messages when saving user preferences</li>
        </ul>
    </td>
  </tr>
  <tr>
      <th class="advanced-table__header">
        Interaction
      </th>
      <td>
        Non-blocking, Not Required Temporary, usually auto dismissing
      </td>
  </tr>
  <tr>
      <th class="advanced-table__header">
        Information
      </th>
      <td> 
        Advisory ancillary information 
      </td>
  </tr>
    <th class="advanced-table__header">
      Location
    </th>
    <td>
      Overlay the page at the top left
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Options</th>
    <td>
      <cdr-list>
        <li>Should not contain actions unless these actions are also available on the parent page</li>
        <li>Should not change their state nor update their content once visible</li>
        <li>may be dismissible</li>
        <li>Should not get in the way of important page content</li>
        <li>May be clicked on to see what’s previously happened</li>
      </cdr-list>
    </td>
  </tr>
  <tr>
  <th class="advanced-table__header">Potential Component</th>
  <td>toast / snack-bar </td>
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
        summary="After a user selects 'Set as my REI' for and REI store a 'saved' notification overlay displays. Assistive technology should inform users of the busy state."/>
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
   updating and removing an item from wish list
  </li>
</cdr-list>
  </td>
  </tr>
</cdr-table>

### Anatomy of a Transient Status notifications

<cdr-img :src="$withBase('/notifications/transientStatusAnatomy.png')" alt="Diagram for transient status notifications, annotating the required layout of the elements listed below" />

Transient Status notifications have the following requirements in addition to the requirements for Persistent Status Notifications:

1. **[Status Notifications as an Overlay](#status-notifications-as-an-overlay)**
2. **[Automatic Dismissal](#automatic-dismissal)**
3. **[Interactive Controls](#interactive-controls)**

#### Status Notifications as an overlay
The concise messages contained within Status Notifications are not required for a user to interact with and may open unexpectedly, 
these Notifications should not be blocking. Opening in an overlay may disrupt and confuse or not be seen at all by users at some breakpoints.

- **Must**
  - Not block page content
  - Return user focus to a logical location.
  - If moving focus to the notification, the notification 
    - Must provide At least one focusable UI element (i.e. Close button, primary button)
    - content container must be dismissible
    - On dismiss, must return focus to the next logical location in the page flow
- **Should**
  - Be used for short messages to confirm an action
- **Should not**
  - Contain interactive controls if notification is displayed as an overlay
  - Open as a blocking overlay window**
- **May**
  - appear as a timed display.

If opening a Status Notification consider the following:
- A blocking window can introduce obstruction issues for people who have zoomed in browsers Or for users at smaller breakpoints
- A non-blocking window may be completely missed by those who are using screen magnification software, but who are not using a screen reader

#### Automatic Dismissal
In some scenarios Status notifications may be displayed for a set amount of time rather than become an evergreen feature of a page. In these cases there should be no negative impact on their current activities or the status that the message conveyed. 
ignoring a timed notification would still mean that the action is completed successfully.

For example an item would still be added to a cart regardless of a users engagement with the notification informing them of the successfully added item.

- [WCAG 2.1 Understanding adjustable timing](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html)
#### Interactive Controls

Interactive controls within notifications produce several hurdles for users of assistive technology. 
Specifically, the `Aria-live` region will not preserve the semantics of elements being read aloud.
As an example consider the virtual outfitting window on the product page: a user will not know what the title, copy, or link are in the following text

"*Need help deciding? Schedule a free 1-on-1 virtual appointment with one of our experts. Book now*". 

Users may infer the "book now" text is a link - or just as likely search for a button or may guess the entire text would be active.

Consider the following:
- When triggered, live regions only read out their content to assisted technologies. They will not distinguish text from actionable elements present within a notification.
- Users may infer that actionable element is present, however A user will need to guess what element to search for. This is especially problematic for notifications that are automatically dismissed, as users will have limited time to correctly guess and act on this choice.

If the notification must include an actionable element you are responsible for the following:
- **Must**
  - Return focus to next logical location in the page flow
  - Contained action is also readily available on the page
  - If the action is not available on page, the action should be added to a notification history page (see ARIA’s log role)

</cdr-doc-table-of-contents-shell>