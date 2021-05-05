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

Notifications are unexpected, asynchronous events providing user feedback to changes on specific elements or page sections.
Notifications should be designed to attract rather than capture a user’s attention, they add context to elements that exist on a page and should not employee design that blocks a pages content.
As messages, notifications offer important responses to changes in content that will help users understand additional options available or actions needing to take place.
These messages, though important, should not interrupt a user nor should focus be moved to them automatically.

A Notification has specific behaviors and content objectives which make it unique from other types of messaging. 

Use the following list to validate that your message is a notification.

## Behavior

the following should be true:

- The page state has changed after page load
- The message is not available until triggered by a user action
## Purpose

At least one of the following should be true:

  - Providing a user the status of an action they’re trying to complete 
  - notifying users of a potential problem that may require their attention
  - As a form validation message
  - As confirmation that a task was completed successfully 
  - As contextual information that might need their attention
  - communicating a status change caused by the user.

## Construction
(Must = WCAG lvl A, Should = WCAG lvl AA, May = WCAG lvl AAA)

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
  - Contain interactive controls if notification is displayed as an overlay
    
- **May**
  - Open or update content in locations unrelated to the action which caused the notification to appear 
  - Update a live region of the page
  - Use the HTML `<aside>` tag, denoting the section that, though related to the main element, doesn't belong to the main flow
  - appear as a timed display.
  - Include `aria-atomic` markup attribute to define what content will be presented to assistive technologies
  - Include `aria-relevant` to define what type of changes are being announced to assistive technologies
  
## Accessibility References
- [Accessible Notifications](https://www.w3.org/WAI/RD/wiki/Accessible_Notifications)
- [WCAG status messages 4.1.3](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html)
- Use [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) to indicate that an element will be updated. It describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
- Use [aria-atomic](https://www.digitala11y.com/aria-atomic-properties/) to indicate whether assistive technologies will present all, or only parts of the changed region based on the change notifications defined by the aria-relevant attribute.
- [aria-relevant](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute)
describes semantically meaningful changes as opposed to merely presentational ones

## Patterns
(the following do not consider mobile app patterns)
@flowstart
st=>start: Identify the correct message pattern
e=>end: End

interactive=>condition: Is this 
within 
a form?
inline=>condition: replacing 
content?
associated=>condition: User error?
succinct=>condition: Inline?
associatedYes=>operation: Validation |:>#validation-notifications
associatedNo=>operation: Conditional Notification,
Validation
succinctNo=>operation: Conditional Notification |:>#conditional-notifications
succinctYes=>operation: Status Notification |:>#status-notifications

interactive(yes)->associated(yes)->associatedYes
associated(no, bottom)->associatedNo()
interactive(no)->succinct(no)->succinctNo
succinct(yes)->inline(yes)->succinctYes
inline(no)->succinctNo
@flowend

### Status

- User Priority: low / expected 
- Passive Messages
- User Interaction is Not required
- Advisory Information

Status Notifications update existing inline page content.
They are informative only and provide our users with advisory information that enhances the site experience.
Adding the correct HTML `role="status"` to a status notification helps to inform a user of assisted technology, on change, that something has happened. 
The Status role has an implicit aria-live value of polite though the `aria-live` property may also be used.

These Notifications will not interrupt the current action of a user so be sure to consider what will be read out once the update is spoken. 
For instance a quantity update for items added to a cart would be of little use if all that was communicated was "one".
In this case add the additional "items in your cart" or "x items added to your cart" as screen reader only text. 
Alternatively you may pair the `aria-live` section with `aria-atomic`.
aria-atomic will ensure the content within the aria-live element is read on change.
#### Use When
It is important to grasp that many visual transitions are actually status notifications and should be providing contextual information to our users. 
This can be provided in the form of screen reader only text, though consider if the action without context will create any cognitive dissonance for our users.

- Loading icons or states
- Submitting Buttons
- Incrementing carts
- Changes to inline content based on user selection

##### Examples
- As the "Find a store near you" modal is loading results it displays a loading icon, additionally, a screen reader should announce "Finding stores in your area".
- After a user adds an item to their cart the button grays out or changes to a loading icon, additionally, a screen reader should announce "adding your items to the cart"
- After a user presses an Add to Cart button, a section of content near the Shopping Cart icon increments the number. A screen reader should announce "x items in your cart"
- After the user selects the "Co-op Cycles" filter on the Mountain Bikes search results page the "Mountain Bikes (number of results)" updates to "Co-op Cycles Mountain Bikes
(7 results)

#### Don't Use When
- The User makes a selection that does not change or add content to the page
- The notification is not updating inline copy
- The notification does not relate to an actionable element in a busy state
- The content added to the page is critical and needs immediate attention (see [alert](../alerts))

#### Notification Composition
- Authors SHOULD ensure an element with role status does not receive focus as a result of change in status.
- Identify content that may be updated as a WAI-ARIA live region. Use the aria-live attribute on the container of the content that may be updated or, in special cases, use one of the WAI-ARIA special live region roles.
- Status is a form of live region. If another part of the page controls what appears in the status, 
authors SHOULD make the relationship explicit with the aria-controls attribute.
- Elements with the role status have an implicit aria-live value of polite and an implicit aria-atomic value of true.

#### Using Available Cedar Components

Content control:
- Cdr-button
- Cdr-link

Content container:
- *Cdr-loading - potential component*

### Conditional

Similar to Status Notifications, these Conditional Notifications apply the `role="status"` to their HTML markup.
They will not interrupt a user from a task they are engaged in, and are provided on user action rather than as part of the page. 
These event based notifications differ from Status Notifications as they do not update live, existing inline sections of a page.
They provide information that will help users make a decisions or provide warnings about selections they have made.
These notifications may open or be added to locations unrelated to the action which caused the notification to trigger.
Additionally, they may open based on conditions a user has created or criterium they have met.

- User Priority: medium / inform
- Unexpected Response 
- User Interaction is Not required
- Concise Ancillary Information

<cdr-doc-example-code-pair repository-href="/src/components/alert"
:sandbox-data="$page.frontmatter.sandboxData" >

```html

<cdr-alert type="warning" role="status" aria-relevant="all" aria-atomic=true>
  <icon-warning-fill/> You did something that has caused this section to appear
</cdr-alert>

```
</cdr-doc-example-code-pair>

#### Conditional Notifications as an overlay
The concise messages contained within Conditional Notifications are not required for a user to interact with and may open unexpectedly, 
these Notifications should not be blocking. Opening in an overlay may disrupt and confuse or not be seen at all by users at some breakpoints.

If opening a Conditional Notification consider the following:
- A blocking window can introduce obstruction issues for people who have zoomed in browsers Or for users at smaller breakpoints
- A non-blocking window may be completely missed by those who are using screen magnification software, but who are not using a screen reader

#### Automatic dismissal
In some scenarios Conditional notifications may be displayed for a set amount of time rather than become an evergreen feature of a page. In these cases there should be no negative impact on their current activities or the status that the message conveyed. 
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


#### Construction
- **Must**
  -  Ensure notification will not be removed if keyboard focus or mouse hover is within or over the notification.
  -  Return user focus to a logical location.
  -  Not block the user from the page a notification is triggered from
  -  Not contain unique actionable items if the notification is an overlay
- **Should**
- Be used for short messages to confirm an action
- Provide necessary support to the primary activities or operations of a page base on users settings or selections
-**Should not**
- Be used for error messages
- Open as a blocking overlay window
- **May**
  - display notifications in rich, unique UI to create distinction around itself and the page content

#### Use When
- Exposing additional product information that may vary based on user selection
- Indicating the completion of a task or process initiated by the user
- notifications containing additional Rich UI

**Examples**
- New options are available based on selections you have made
- Shipping restrictions display once you have selected a location
- Quantity availability
- The user has items that are no longer available in their cart
- The user has successfully signed up for an email notifications
#### Don't Use When
- The User makes a selection that does not change or add content to the page
- The notification is an update to existing inline copy (see [status notifications](#status-notifications)
- The notification relates to an actionable element in a busy state (see [status notifications](#status-notifications)
- The content added to the page is critical and needs immediate attention (see [alert](../alerts))

#### Conditional Notifications Format

#### Using Available Cedar Components

Content control:
- Cdr-button
- Cdr-link

Content container:
- Cdr-alert
  - Warning
  - Info
  - Success
- *dismissible-notifications - potential component*

### Validation
Form validation responses provide unexpected instruction on blocking problems that must be fixed before moving on. 
Additionally, these messages may respond to input informing the user of further updates needed or to when the error has been resolved.
It is critical that these notifications accurately inform and help to clarify the issues being raised to the user.

- User Priority: High / blocking - requires resolution
- Unexpected Response 
- User Interaction is required
- Instructions for an element MUST be meaningful

When an error message is provided it must be identified in certain ways to be accessible. These include:

identifying each field in error
providing suggestions (when known) to correct the errors,
properly exposing this information to assistive technology.

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
#### Construction

- **Must**
  - Ensure the message container can receive focus
  - Include the `aria-live` or `role=”status”` markup to announce the notification without interrupting the page flow of the user

-  **Should**
  - Correctly filled out user provided data in a form that contains errors **SHOULD** remain populated post-submit.
  - Confirm successful submission of data.
  - Provide an explanation to the user when the submit button is not available

##### Role status or aria-live

-  **Should Not**
  - Be scripted to occur with every keystroke unless there is a delay built into the script to avoid announcements while the user is actively typing.
  - Be scripted to occur when a user leaves a field, because the `aria-live`
    announcement may conflict with the screen reader's attempt to read the next
    element which receives focus, causing some information to be interrupted
    or not announced at all.
- **May**
  - Be scripted to show on the screen for sighted users, but attempts to announce the real-time messages to screen reader users
    can be problematic. It is usually acceptable to wait to announce
    real-time errors until after form submission, assuming that no data has been saved yet.
##### Notification Instructions Required WCAG 1.3.3, WCAG 3.3.2

- **Must**
  - Be available as programmatically-discernible text
  - Be meaningful
  - Be visible Visible
  - Clearly and accurately describe the error and/or how to fix the error.
- **Should**
  - be visually and programmatically adjacent to the element.
  - if the text does not specifically call out the state of the message, error, warning, success, or info - that text should be provided via screen reader accessible text
- **Must Not**
  - Rely solely on references to sensory characteristics (for example, "round button" or "button to the right")
- **May**
  - Be hidden until the user requests them if the notification instructions are not critical.

When users enter input that is validated, and errors are detected, the nature of the error needs 
to be described to the user in manner they can access. One approach is to present an alert dialog 
that describes fields with errors when the user attempts to submit the form. Another approach, 
if validation is done by the server, is to return the form (with the user's data still in the fields) 
and a text description at the top of the page that indicates the fact that there was a validation problem, 
describes the nature of the problem, and provides ways to locate the field(s) with a problem easily. 
The "in text" portion of the Success Criterion underscores that it is not sufficient simply to indicate 
that a field has an error by putting an asterisk on its label or turning the label red. 
A text description of the problem should be provided.
##### Required Fields
The Asterisks may not be read by all screen readers (in all reading modes) and may be difficult for users with low vision because they are rendered in a smaller size than default text.
It is important for authors to include the text indicating that asterisk is used and to consider increasing the size of the asterisk that is presented.

- **Must**
  - Set `Required` or `aria-required` to true for inputs that must be completed by the user
- **Should**
  - Require only fields that are absolutely needed
  - Required fields **SHOULD** have a visual indicator that the field is required.
  - Required fields **SHOULD** be programmatically designated as such. Note: At a minimum, WCAG requires an informative error message about the field after the user submits the form.
  - Ensure that information conveyed by color differences is also available in text.
  - Provide screen reader text conveying that the field is required
##### Inline Client Validation Notifications
client-side validation results in a better user experience and makes resolving validation errors more understandable.

##### Error Suggestion
- **Must**
  - If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text WCAG 3.3.3

https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html
##### Error Prevention
If the form is submitting any of the following:

-  legal commitments
-  financial transactions
-  user-controllable data (e.g. user profile, social media posts)

we are required to implement at least one of the following error prevention techniques:

-  Reversible: Submissions are reversible.
-  Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
-  Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

##### Error Detection

**aria-invalid**
indicate that the value entered into an input field does not conform to the format expected by the application. This may include formats such as email addresses or telephone numbers. aria-invalid can also be used to 
indicate that a required field has not been filled in.
The attribute should be programmatically set as a result of a validation process.

-  Add aria-invalid="true" to the input

-  Identify the input (referencing the label):

  -  In a simple JavaScript alert

  -  with information associated with the input via aria-describedby (widely supported) or aria-errormessage (not yet widely supported)

  - with error text added to the input's label (other techniques are more semantically correct, but this is a reliable method)

  - with text on the web page (it may be appropriate to move the keyboard focus to the error message)

  - with an aria-live or role="alert" announcement

  - with information about the error in the page `<title>` if the submission causes a page reload or a new page load.

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
##### Success Detection
Use at least one of the following techniques:

-  Confirmation text on the web page 
(it may be appropriate to move the keyboard focus to the error message)
-  **Aria-live announcement**

-  Confirmation message in the page `<title>` if the submission causes a page reload or a new page load.

##### Disabled elements
-  Some dynamic forms will make the submit button unavailable until the form is completed correctly. 
This can be very confusing to users if insufficient error identification is provided
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
- [WCAG Error Identification 3.3.1 (lvl A)](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html)
- [WCAG Labels or Instructions 3.3.2 (lvl A)](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions)
- [WCAG Error Suggestion 3.3.3 (lvl AA)](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion)
- [WCAG Error Prevention 3.3.4 (lvl AA) ](https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data)
- [Form Notifications](https://www.w3.org/WAI/tutorials/forms/notifications/  )
- [Using Aria-Invalid to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21.html)
- [Using the aria-describedby property to provide a descriptive label for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1.html)

</cdr-doc-table-of-contents-shell>
