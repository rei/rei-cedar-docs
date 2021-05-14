---
{
  "title": "Messaging",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": "Use messaging patterns to communicate additional information or show responses to user actions",
  "sandboxData": {
    "components": "CdrAlert"
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


Aside from the static content on a page, additional content can be exposed as a result of user interactions. As users encounter many types of actionable elements across a website, providing consistent interaction patterns can improve the overall usability of the experience and help distinguish critical actions that need their attention. 

There are four primary messaging patterns that should be used consistently to make it easier for users to understand an interface and accomplish their tasks. You can determine which to use by starting with the intent of the communication: 
- Inform
- Notify
- Alert 
- Help

Alerts and notifications communicate if something has changed, whether it’s based on user interaction (e.g. confirmation that a product has been added to your cart) or initiated at the system-level (e.g. alert that an item in your cart is now out of stock). 

Help and informational messages can appear contextually (e.g. more information available in a popover) or as ancillary information (e.g. shipping restrictions apply). 

Depending on the situation, additional content may appear in an overlay (modals, tooltips, popovers), while other messages will appear in-line (e.g. form field validation). 

This additional content will open in-page and should not navigate users to a new page or window. 

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









</cdr-doc-table-of-contents-shell>
