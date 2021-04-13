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
Messages allow us to communicate with our users. They may provide additional information needed to complete common tasks, direct users attention to additional information, or provide the user with help and tools.
Rather than being part of a pages content they are offered as asides, or responses to user interaction.  They often include actionable elements which when engaged with will expose additional content. Unlike Navigation, Messages will expose additional in-page content to users and will not navigate users to a new page or window. Experiences exposed in this manner will usually be of the following types:
- [Alerts](#alerts)
  - [Dialogs](#alert-diolog)
  - validation 
- [Notifications](#notificaions)
  - [Validation](#form-validation)
  - additional options
  - changes to status or quantity
- Information
- Help
  - Term
  - Context

Reference the definitions and usage guidelines on this page to help determine which components are appropriate for each experience.

  - breakdown and define each meassage type 
    - requierments:
      - content
      - accessibility
  - Do's and Don'ts
  - Extending components




## find the message pattern you need
@flowstart
st=>start: Identify the correct message pattern
e=>end: End

cond=>condition: Requires
user interaction 

interactionNo=>condition: Response to change?
interactionYes=>condition: time sensitive
or system error?
notification=>operation: Notifications |:>#notificaions
context=>condition: Provides help?
help=>operation: Help
inform=>operation: Inform
alert=>operation: Alerts |:>#alerts

st@>cond({"arrow-end":"classic-wide-long"})
cond@>interactionYes({"arrow-end":"classic-wide-long"})

cond(yes, right)->interactionYes(no, bottom)->notification
interactionYes(yes,right)->alert
cond(no, bottom)->interactionNo(yes, right)->notification
interactionNo(no)->context(yes)->help
context(no, bottom)->inform
@flowend

</cdr-doc-table-of-contents-shell>
