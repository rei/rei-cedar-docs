---
{
  "title": "Messaging",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": "Use messaging patterns to provide supplemental communication and actively respond to user actions.",
  "sandboxData": {
    "components": "CdrBanner"
  },
  "breadcrumbs": [
    {
      "text": "Patterns/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'> 

## Overview

Consistency in messaging is important for communicating with users and providing additional information needed to complete common tasks.

Aside from the static content on a page, additional content can be exposed as a result of a user's actions or system-level events. As users encounter many types of actionable elements across a website, providing consistent interaction patterns can improve the overall usability of the experience and help distinguish critical actions that need their attention. 

There are four primary messaging patterns. Determine which to use by starting with the intent of the communication: 
- Inform
- Notify
- Alert 
- Help

Alerts and notifications communicate that something on the page has changed. The event could be based on a user action (e.g. notified that a product has been successfully added to a cart) or initiated at the system-level (e.g. alerted that an item in a cart is now out of stock).

Help and informational messaging appear contextually (e.g. helping a user locate a credit card's security code) or as ancillary information (e.g. information explaining how shipping restrictions apply to an item).

Depending on the situation, messaging may appear in an overlay (modals, tooltips, popovers), while other messaging will appear in-line (e.g. form field validation). Regardless of approach, the messaging will open in-page and should not navigate users to a new page or window.

When deciding what type of messaging pattern to use, reference the flowchart and table on this page, as well as the usage guidelines in the subsequent pages to help determine which components are appropriate for each experience.
## Deciding what to use

Consider the intent of the messaging and specific user task to determine which pattern to use. 

### Priority scale

- **Low**
<br />
Confirmations, applications process, and information unassociated to the primary purpose of the page. These messages or notifications can be missed without blocking a user from 
successfully moving through the primary flow of a page
  - [loading Notifications](../update-and-loading-notifications/#loading-notifications)
  - [Transient Status Notifications](../status-notifications/#transient-status-notifications)
- **Medium**
<br />
Ancillary, informative messaging or notifications, pertinent to a task the user is doing
  - [Update Notifications](../update-and-loading-notifications/#update-notifications)
  - [Persistent Status Notifications](../status-notifications/#persistent-status-notifications)
- **High**
<br />
Messaging that is important for our users to see and interact with, but that should not disrupt them when they are in the process of interacting with the page
  - [Error Validation](../form-validation/) (Notifications)
- **Critical**
<br />
For the most important blocking, disrupting updates that need immediate user attention and 
  - [System Alerts](../alerts/)
  - [Important User Prompts](../alerts/#alert-dialog)
  - Time Sensitive User Caused [Error Validation](../form-validation/) (Alerts)

 -- add condition for ending up as navigation as a parallel process 

<cdr-table>
  <thead>
    <tr>
      <th></th>
      <th>Intent</th>
      <th>Requires</th>
    </tr>
  </thead>

  <tbody>
  <tr>
  <th>Inform</th>
  <td>Provide ancillary information</td>
  <td></td>
  </tr>
  <tr>
  <th>Notify</th>
  <td>Notify of status update</td>
  <td>Provided after user interaction / pageload </td>
  </tr>
  <tr>
    <th>Alert</th>
    <td>
      <cdr-list>
        <li>System alerts</li>
        <li>Time sensitive notifications</li>
      </cdr-list>
    </td>
    <td>
      <cdr-list>
        <li>System alert OR time sensitive notification</li>
        <li>Provided after user interaction / pageload</li>
        </cdr-list>
    </td>
  </tr>
  <tr>
  <th>Help</th>
  <td>
    <cdr-list>
      <li>Provide additional context on a term</li>
      <li>Provide additional information on page content</li>
      <li>Provide reason for information being requested</li>
      <li>Inform users on how to format</li>
      <li>Inform users on what the actionable element will do</li>
    </cdr-list>
  </td>
  <td></td>
  </tr>
  </tbody>
  </cdr-table>

## Notifications
Notifications are asynchronous events providing user feedback to changes on specific elements or page sections.
Notifications should be designed to attract rather than capture a user’s attention, they add context to elements that exist on a page and should not employee design that blocks page content.
As messages, notifications offer responses to change. These responses help users understand page processes, actions they have competed, additional options available, or actions still needing attention.
Though important, notifications should not interrupt a user nor should focus be moved to them automatically.

In general all notifications share the following traits:

- Notifications provide feedback to users about actions they are taking on a page. They are not promotional nor navigational
- Notifications do not block a users access to the page and should not use a blocking overlay window
- Notifications are not a part of the page content and become available when triggered by a user action

Notifications may be used with the following message types

 - Errors
 - Warnings
 - Success
 - Page status
 - Content updates


Notifications may be stacked with each other to communicate complex processes to our users

** example removing an item from a cart **

A User removes an item from their wishlist using the "remove item" button; this triggers the following 3 actions:
1. action 1 > A loading notification displays, identifying that the list is busy processing request
2. action 2 > once the data has been updated, an update notification, listening for "removes" communicates that the item has been removed to assistive technology
3. action 3 > last in this example, a transient notification pops up confirming to the user that the item has been removed successfully

### Patterns
(the following do not consider mobile app patterns)

<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      <cdr-link href="../update-notifications">Update Notification</cdr-link>
    </th>
    <td>UI updates and non-verbal application state communications (such as "busy" or "loading" icons)</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      <cdr-link href="../status-notifications">Status Notifications</cdr-link>
    </th>
    <td>Page level responses to user interactions confirming actions made, communicating additional information based on user provided input</td>
  </tr>
  <tr>
  <tr>
    <th class="advanced-table__header">
      <cdr-link href="../validation">Validation Notifications</cdr-link>
    </th>
    <td>
      Form validation instruction
    </td>
  </tr>
</cdr-table>






</cdr-doc-table-of-contents-shell>
