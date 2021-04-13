---
{
  "title": "Messaging",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": "How to choose the correct component for your content",
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
Messages allow us to communicate with our users. 
They may provide additional information needed to complete common tasks, direct users attention to additional information, or provide the user with help and tools.
Rather than being part of a pages content they are offered as asides, or responses to user interaction. They often include actionable elements which, when engaged, with will expose additional content. 

Unlike Navigation, Messages don't direct user flow, instead they expose additional in-page content to users and should not be used to navigate users to a new page or window.

Users will encounter many types of actionable elements on our pages. Not knowing when a link or button will open a dialog, popup, tooltip, or a whole new page is confusing.
Additionally if a user cannot easily distinguish important actions needing their attention from optional messages or navigation, we risk confusing and sometimes aggravating them.
 
This makes providing a consistent approach for how each action presents and behaves important. 
Making it easy to distinguish the difference in a message that will open a dialog to provide an in-page setting or opportunity 
vs one that will navigate you away from what you are doing will provide all users the best experience.

To help make this happen we have broken down some of the decisions that lead to each type of message
Reference the definitions and usage guidelines below when deciding what type of messaging pattern to use for different user experiences. 



## Deciding what to use:

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
  <td>provided after user interaction / pageload </td>
  </tr>
  <tr>
    <th>Alert</th>
    <td>
      <cdr-list>
        <li>System alerts</li>
        <li>time sencitive notifications</li>
      </cdr-list>
    </td>
    <td>
      <cdr-list>
        <li>System alert OR time sencitive notification</li>
        <li>provided after user interaction / pageload</li>
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
