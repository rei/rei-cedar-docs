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

 -- add condition for ending up as navigation as a parallel process 
@flowstart
st=>start: Identify the correct message pattern
e=>end: End

cond=>condition: Requires
user interaction 

interactionNo=>condition: Response to change?
interactionYes=>condition: time sensitive
or system error?
notification=>operation: Notifications |:>../notifications/
context=>condition: Provides help?
help=>operation: Help
inform=>operation: Inform
alert=>operation: Alerts |:>../alerts/

st@>cond({"arrow-end":"classic-wide-long"})
cond@>interactionYes({"arrow-end":"classic-wide-long"})

cond(yes, right)->interactionYes(no, bottom)->notification
interactionYes(yes,right)->alert
cond(no, bottom)->interactionNo(yes, right)->notification
interactionNo(no)->context(yes)->help
context(no, bottom)->inform
@flowend

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
