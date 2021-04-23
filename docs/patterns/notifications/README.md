---
{
  "title": "Notifications",
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
* Response to change > User Input(not time sensitive)

# Overview

Notifications are asynchronous events providing user feedback to changes on specific elements or page sections.
Notifications should be designed to attract rather than capture a user’s attention, they add context to elements that exist on a page and should not employee design that blocks a pages content.
As messages, notifications offer important responses to changes in content that may help users understand additional options available or actions needing to take place.
These messages, though important, should not interrupt a user and focus should not be moved to them automatically.

## Guidelines

A Notification has specific behaviors and content objectives that make it unique from other types of messaging. 

Use the following list to validate that your message is a notification.

### Behavior

the following should all be true:

- The page state has changed after page load
- The message is not available until triggered by a user action
- A screen reader should speak changes whenever the user is idle.
### Purpose

At least one of the following should be true:

  - Providing a user the status of an action they’re trying to complete 
  - notifying users of a potential problem that may require their attention
  - As a form validation message
  - As confirmation that a task was completed successfully (See Success Type)
  - As contextual information that might need their attention (See Informational Type)
  - communicating a status change caused by the user.
## Constuction

The following provide the base requirement’s expected within a notification message.
- **Must**
  - Ensure the message container can receive focus
  - Include the `aria-live` or `role=”status”` markup to announce the notification without interrupting the page flow of the user
  - If moving focus to the notification, the notification 
    - Must provide At least one focusable UI element (i.e. Close button, primary button)
    - content container must be dismissible
    - On dismiss, must return focus to the next logical location in the page flow
- **Should**
  - Clearly communicate what is happening
- **Should not**
  - Move Focus automatically to the notification
  - Block page navigation
  - Direct the user to a new page or window
  - Overuse notifications. They may interrupt your users experience
  - Create notifications that disappear automatically
- **May**
  - Open or update content in locations unrelated to the action which caused the notification to appear 
  - Update a live region of the page
  - Use the HTML `<aside>` tag, denoting the section that, though related to the main element, doesn't belong to the main flow

## Accessibility References
- [Accessible Notifications](https://www.w3.org/WAI/RD/wiki/Accessible_Notifications)
- [WCAG status messages 4.1.3](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html)

## Notification Patterns

@flowstart
st=>start: Identify the correct message pattern
e=>end: End

interactive=>condition: Interactive
associated=>condition: Associated 
to a specific 
page section
succinct=>condition: succinct
associatedYes=>operation: validation, inline toast
succinctNo=>operation: toast
succinctYes=>operation: cdr-alert

interactive(no)->associated(yes)->associatedYes
associated(no, bottom)->succinctNo()
interactive(yes)->succinct(no)->succinctNo
succinct(yes)->succinctYes
@flowend

### Status Notifications

Status notifications provide our users with advisory information that while important, is less critical than an alert.
These notifications use the role status ensuring non visual users are notifified of changes taking place to the page based on their actions.
This role has an implicit aria-live value of polite though the `aria-live` property may be used on the region to override how it’s usually handled by assistive technologies.
#### Examples
- as the find a store modal is loading results. It displays a loading icon, additionally, a screen reader should announce "application busy".
- After a user adds a item to their cart that can 


#### Notification Composition
Adding the correct role to status notification infoms the user, on change, that something has happend. 
However, we still need to ensure that the user will understand the context of what the update is informing them of.
often we will use status messages to update numeric values on a page,
be status updates also provide supporting contextual text with the update, this can be screen reader only as appropriate.
for example:
- After a user fiters a search results page, the "Results for (search category) #" is updated to provide the items now available on the seach results page.
- After a user presses an Add to Cart button, a section of content near the Shopping Cart icon increments the number.

- Authors SHOULD ensure an element with role status does not receive focus as a result of change in status.
- Status is a form of live region. If another part of the page controls what appears in the status, 
authors SHOULD make the relationship explicit with the aria-controls attribute.
- Elements with the role status have an implicit aria-live value of polite and an implicit aria-atomic value of true.

#### Using Available Cedar Components
- Cdr-alert*toast?*
- *Cdr-loading - potential component*
## Accessibility References
- [Accessible Notifications](https://www.w3.org/WAI/RD/wiki/Accessible_Notifications)

### Form Validation Messages
These notifications are contextual to inline elements on the page.
They help to clarify an issue and/or notify users of a potential problem that may require their attention.

#### Examples of validation messages
- the user enters alphabetic characters into a quantity field that only accepts numbers;
- the user enters a negative quantity into a quantity field that only accepts numbers;
- the user enters a nonexistent zip or postal code;
- the user enters an invalid email;

#### Validation considerations

- Providing client-side validation and adding error text via the DOM
- Providing text descriptions to identify required fields that were not completed
- Identifying a required field with the aria-required property

by default, cedar form elements error message pattern  default to adding `role="status`, automatically setting your validation to a notification
#### Do
  - Succinctly describe how a user can resolve the problem.
  - Preserve as much user-entered input as possible
  - Help users understand how to fix problems
  - provide specific as possible
  
#### Don't
  - rely solely on visual cues to indicate an error
  - alter the user provided input to make it validate without providing the user with a validation message conveying this change

#### Use When
- The notification is directly associated with a form or element within the form
- Providing an error, warning, or success message caused by user input
#### Don't Use When

- The error or warning is time sensitive, instead use [alert](../alerts)

#### The Basics
**aria-invalid**
indicate that the value entered into an input field does not conform to the format expected by the application.This may include formats such as email addresses or telephone numbers. aria-invalid can also be used to 
indicate that a required field has not been filled in.
The attribute should be programmatically set as a result of a validation process.

**aria-errormessage**



Placed on input and mapped via id to error message.
used to:
  - Associate instructions with form fields
  - Provide information on the outcome of an action
  - To provide verbal information that may be conveyed via visual cues 
  - associate tooltips to form fields

- Error feedback SHOULD be programmatically-associated with the appropriate element.
- When `aria-errormessage` is pertinent, authors MUST ensure the content is not hidden
- Authors MUST either ensure the content is hidden or remove the aria-errormessage attribute or its value.
- User agents MUST NOT expose aria-errormessage for an object with an aria-invalid value of false.
#### Useing Available Cedar Components

the following Cedar components provide generic validation styling
- cdr-input
- cdr-form-group
- cdr-select

As a notification is generally what you will use for error validation, the cedar form components error message container role defaults to `role="status"`. All you have to do is provide the messaging.

TODO- something about how we only provide the UI/container but not validation logic

#### Examples
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :model="{defaultModel: '', errorMessage: false}" :methods="{validate() {this.errorMessage = !this.defaultModel.length ? 'A telephone number is required.' : this.defaultModel.length === 14 ? false : 'Enter a 10-digit telephone number beginning with the area code.'}}">

```html
<cdr-input
  v-model="defaultModel"
  label="Phone number"
  type="tel"
  v-mask="'(###) ###-####'"
  autocomplete="tel-national"
  :error="errorMessage"
  @blur="validate"
>
  <template slot="helper-text-top">
    To call if there's an issue with your order
  </template>

  <!-- <template slot="info">
    <cdr-tooltip id="phone-number-example" position="top">
      <cdr-link slot="trigger" tag="button">
        Why?
      </cdr-link>
      <div>
        To call if there's an issue with your order
      </div>
    </cdr-tooltip>
  </template> -->
</cdr-input>
```    
</cdr-doc-example-code-pair>

#### Accessibility References
- [WCAG Error Identification 3.3.1:](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html)
- [WCAG Labels or Instructions 3.3.2](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions)
- [WCAG Error Suggestion 3.3.3](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion)
- [WCAG Error Prevention 3.3.4: ](https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data)
- [Form Notifications](https://www.w3.org/WAI/tutorials/forms/notifications/	)
- [Using Aria-Invalid to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21.html)
- [Using the aria-describedby property to provide a descriptive label for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1.html)
### Status Message
#### Examples
* After a user presses an Add to Shopping Cart button, a section of content near the Shopping Cart icon adds the text "5 items". A screen reader announces "Five items" or "Shopping cart, five items".
* After a user presses a Search button, the page content is updated to include the results of the search, which are displayed in a section below the Search button. The change to content also includes the message "5 results returned" near the top of this new content. This text is given an appropriate role for a status message. A screen reader announces, "Five results returned".
* After a user enters incorrect text in an input called Postal Code, a message appears above the input reading "Invalid entry". The screen reader announces, "Invalid entry" or "Postal code, invalid entry".
* After a user activates a process, an icon symbolizing 'busy' appears on the screen. The screen reader announces "application busy".
* An application displays a progress bar to indicate the status of an upgrade. The element is assigned a suitable role. The screen reader provides intermittent announcements of the progress.
* After a user submits a form, text is added to the existing form which reads, "Your form was successfully submitted." The screen reader announces the same message.
* After a user unsuccessfully fills in a form because some of the data is in the incorrect format, text is added to the existing form which reads "5 errors on page". The screen reader announces the same message.

The intent of this Success Criterion is to make users aware of important changes in content that are not given focus, and to do so in a way that doesn't unnecessarily interrupt their work.
This means that these requirements are for dynamic, user caused notifications and do not apply to static messaging.






When an error message is provided it must be identified in certain ways to be accessible. These include:

identifying each field in error
providing suggestions (when known) to correct the errors,
properly exposing this information to assistive technology.

**role="status"**



### Cart item indicator (header)

### Status updates
| Accessibility       |
|---------------------|
| role=”status"       |

</cdr-doc-table-of-contents-shell>


