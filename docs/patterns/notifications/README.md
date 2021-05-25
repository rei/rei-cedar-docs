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

## Overview

Notifications are asynchronous events providing user feedback to changes on specific elements or page sections.
Notifications should be designed to attract rather than capture a user’s attention, they add context to elements that exist on a page and should not employee design that blocks page content.
As messages, notifications offer responses to change. These responses help users understand page processes, actions they have competed, additional options available, or actions still needing attention.
Though important, notifications should not interrupt a user nor should focus be moved to them automatically.

In general all notifications share the following traits:

- Notifications provide feedback to users about actions they are taking on a page. They are not promotional nor navigational
- Notifications do not block a users access to the page and should not use a blocking overlay window
- Notifications are not a part of the page content and become available when triggered by a user action

## Patterns
(the following do not consider mobile app patterns)

<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      <cdr-link href="#status-notifications">Status Notification</cdr-link>
    </th>
    <td>UI updates and non-verbal application status communications (such as "busy" or "loading" icons)</td>
  </tr>
  <tr>
    <th class="advanced-table__header">
      <cdr-link href="#conditional-notifications">Conditional Notifications</cdr-link>
    </th>
    <td>Page level messaging available only in some situations</td>
  </tr>
  <tr>
  <tr>
    <th class="advanced-table__header">
      <cdr-link href="#validation">Validation Notifications</cdr-link>
    </th>
    <td>
      Form validation instruction
    </td>
  </tr>
</cdr-table>

@flowstart
st=>start: Identify the correct message pattern
e=>end: End

interactive=>condition: User interaction
required?
inline=>condition: providing 
messaging?
associated=>condition: Response to 
form inputs?
succinct=>condition: Inline?
associatedYes=>operation: Validation |:>#validation 
associatedNo=>operation: Conditional Notification |:>#conditional-notifications
succinctNo=>operation: Conditional Notification |:>#conditional-notifications
succinctYes=>operation: Status Notification |:>#status-notifications

interactive(yes)->associated(yes)->associatedYes
associated(no, bottom)->associatedNo()
interactive(no)->succinct(no)->succinctNo
succinct(yes)->inline(yes)->succinctNo
inline(no, bottom)->succinctYes
@flowend

### Status Notifications

Status Notifications update existing inline page content.
They are informative only and provide our users with advisory information that enhances the site experience.

#### At A Glance
<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td>low</td>
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
      <ul>
        <li>reporting page processes</li>
        <li>Confirming user initiated actions</li>
      </ul>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Non-blocking, not required</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>Passive state changes </td>
  </tr>
</cdr-table>

#### Use When

It is important to grasp that many visual transitions are actually status notifications and should be providing contextual information to our users. 
This can be provided in the form of screen reader only text, though consider if the action without context will create any cognitive dissonance for our users.

- Loading icons or states
- Submitting Buttons
- Incrementing carts
- Changes to inline content based on user selection

#### Don't Use When
- The User makes a selection that does not change or add content to the page
- The notification is not updating inline copy
- The notification does not relate to an actionable element in a busy state
- The content added to the page is important or needs attention
- During the appearance / disappearance of content following a user interaction which is also announced to assistive technology (for example, the screen reader is announced "open / closed" for a menu, an accordion)
- For a panel system, whose selected tab is announced at AT

#### Anatomy of a Status Notification

<cdr-img :src="$withBase('/notifications/statusNotification.png')" alt="Diagram for conditional notifications as an overlay, annotating the required layout of the elements listed below" />

- 1 [Content Container](#content-container)
- 2 [Content Control](#content-control)
##### Content Container

The Status Notification Content Container wraps both the element being updated and any assistive technology helpers such as screen reader text. It may be a pre-existing section of a page or dynamically added upon user action.

###### Design Considerations

- Should
  - Ensure the Status notification does not receive focus as a result of a change in status.
- Should not
  - Move Focus automatically to the notification
  - Overuse status notifications. They may interrupt your users experience
- May
  - appear as a timed display.
###### Development Considerations

- Must
  - Define pre-existing page sections where content may be updated as a WAI-ARIA live region. Use the aria-live attribute on the container of the content that may be updated or, in special cases, use one of the WAI-ARIA special live region roles.
  - Ensure the container generating the status is able to receive focus
  - on activation, add `role=”status”` to the markup announcing the notification without interrupting the page flow of the user
```html
<!-- EXAMPLE: while stable -->

```
```html
<!-- EXAMPLE: while active -->
 <div role="status">
 Determining your location...
 </div>
```
- May
  - Update a live region of the page
   ```html
   <!-- EXAMPLE: while stable -->
  <div aria-live="polite" role="region" aria-labelledby="shopping-cart">
    4
    <span class="cdr-display-sr-only">items in your cart</span>
  </div>
  ```
  ```html
   <!-- EXAMPLE: when updated -->
  <div role="status" aria-live="polite" role="region" aria-labelledby="shopping-cart">

    <span class="cdr-display-sr-only">there are now</span>
    5 
    <span class="cdr-display-sr-only">items in your cart</span>
  </div>
  ```
  - Include [aria-atomic](https://www.digitala11y.com/aria-atomic-properties/) markup attribute to define what content will be presented to assistive technologies
  - Include `aria-relevant` to define what type of changes are being announced to assistive technologies
##### loading status
<cdr-img :src="$withBase('/notifications/loadingNotification.png')" alt="Diagram of loading animation annotating the list below" width="600px"/>

Status Notifications will often be used to represent loading icons or submitting buttons. These types of Status notifications 
- **Should**
  - Define pre-existing page sections where content may be updated as a WAI-ARIA live region.
  - Use the `aria-busy` attribute to call out the loading state of the section or element
```html
<!-- EXAMPLE: while stable -->
<section aria-live="polite" aria-busy="false">
  <!-- contents -->
</section>
```
```html
  <!-- EXAMPLE: while reloading -->
<section aria-live="polite" aria-busy="true">
  <!-- contents -->
</section>
```
##### Content Control
 The Status Notification Content Control may be any actionable element, such as a link or button.
###### Design Considerations

- **Should not**
  - Move Focus automatically to the notification
- **May**
  - Open or update content in locations unrelated to the action which caused the notification to appear

###### Development Considerations

- **Should**
  - Use the aria-controls attribute if another part of the page controls what appears in the status

```html
<button aria-controls="statusContainer-id" >Add to cart</button>
```
date content in locations unrelated to the action which caused the notification to appear

#### Status Notification Examples

- As the "Find a store near you" modal is loading results it displays a loading icon, additionally, a screen reader should announce "Finding stores in your area".
- After a user adds an item to their cart the button grays out or changes to a loading icon, additionally, a screen reader should announce "adding your items to the cart"
- After a user presses an Add to Cart button, a section of content near the Shopping Cart icon increments the number. A screen reader should announce "x items in your cart"
- After the user selects the "Co-op Cycles" filter on the Mountain Bikes search results page the "Mountain Bikes (number of results)" updates to "Co-op Cycles Mountain Bikes
(7 results)
#### Using Available Cedar Components

Content control:
- Cdr-button
- Cdr-link

Content container:
- *Cdr-loading - potential component*

### Conditional Notifications

Similar to Status Notifications, these Conditional Notifications apply the `role="status"` to their HTML markup.
They will not interrupt a user from a task they are engaged in, and are provided on user action rather than as part of the page. 
These event based notifications differ from Status Notifications as they do not update live, existing inline sections of a page.
They provide information that will help users make a decisions or provide warnings about selections they have made.
These notifications may open or be added to locations unrelated to the action which caused the notification to trigger.
Additionally, they may open based on conditions a user has created or criterium they have met.

#### At A Glance
<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td>medium / inform</td>
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
          <li>Communicating a status change caused by the user</li>
          <li>As contextual information that might need their attention</li>
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
</cdr-table>

#### Use When
- Exposing additional product information that may vary based on user selection
- As confirmation that a task or process initiated by the user was completed successfully 

- As confirmation that a task was completed successfully (See Success Type)
- As contextual information that might need their attention (See Informational Type)
#### Don't Use When
- presenting the user additional actions to take (see [modal](../../components/modal/))
- The UI is presented as a dialog that requires a user action, on which the focus is set (see [modal](../../components/modal/))
- The User makes a selection that does not change or add content to the page
- The notification is an update to existing inline copy (see [status notifications](#status-notifications))
- The notification relates to an actionable element in a busy state (see [status notifications](#status-notifications))
- The content added to the page is critical and needs immediate attention (see [alert](../alerts))

#### Anatomy of a Conditional Notification

<cdr-img :src="$withBase('/notifications/ConditionalAnatomy.png')" alt="Diagram for conditional notifications as an overlay, annotating the required layout of the elements listed below" />

1. Notification Type - Affects the color and icon associated with the notification. Choose from error, warning, success or informational.
2. Optional Dismiss Action - Enables the user to remove the notification from view.
3. Title - Briefly summarizes alert content.
4. Visual and Assistive technology aid
5. Message - Includes the core, most important alert content.

- **Must**
  - Include the `aria-live` or `role=”status”` markup to announce the notification without interrupting the page flow of the user
  - Not contain unique actionable items if the notification is an overlay
  - Ensure the notification container is able to receive focus
  - Ensure notification will not be removed if keyboard focus or mouse hover is within or over the notification.
  - Not block page content
  - Return user focus to a logical location.
  - If moving focus to the notification, the notification 
    - Must provide At least one focusable UI element (i.e. Close button, primary button)
    - content container must be dismissible
    - On dismiss, must return focus to the next logical location in the page flow
- **Should**
  - Be used for short messages to confirm an action
  - Provide necessary support to the primary activities or operations of a page base on users settings or selections
  - Authors SHOULD ensure an element with role status does not receive focus as a result of change in status.
  - Status is a form of live region. If another part of the page controls what appears in the status, 
authors SHOULD make the relationship explicit with the aria-controls attribute.
  - Clearly communicate what is happening
-**Should not**
  - Be used for error messages
  - Open as a blocking overlay window
  - Move Focus automatically to the notification
  - Direct the user to a new page or window
  - Overuse Conditional notifications. They may interrupt your users experience
  - Reuse bespoke UI intended for other message or navigation types
  - Create notifications that disappear automatically
  - Contain interactive controls if notification is displayed as an overlay
- **May**
  - display notifications in rich, unique UI to create distinction around itself and the page content
  - Open or update content in locations unrelated to the action which caused the notification to appear 
  - Update a live region of the page
  - Use the HTML `<aside>` tag, denoting the section that, though related to the main element, doesn't belong to the main flow
  - appear as a timed display.
  - Include `aria-atomic` markup attribute to define what content will be presented to assistive technologies
  - Include `aria-relevant` to define what type of changes are being announced to assistive technologies


<cdr-img :src="$withBase('/notifications/ConditionalOverlayAnatomy.png')" alt="Diagram for conditional notifications as an overlay, annotating the required layout of the elements listed below" />

1. **[Conditional Notifications as an Overlay](#conditional-notifications-as-an-overlay)**
2. **[Automatic Dismissal](#automatic-dismissal)**
3. **[Interactive Controls](#interactive-controls)**

##### Conditional Notifications as an overlay
The concise messages contained within Conditional Notifications are not required for a user to interact with and may open unexpectedly, 
these Notifications should not be blocking. Opening in an overlay may disrupt and confuse or not be seen at all by users at some breakpoints.

If opening a Conditional Notification consider the following:
- A blocking window can introduce obstruction issues for people who have zoomed in browsers Or for users at smaller breakpoints
- A non-blocking window may be completely missed by those who are using screen magnification software, but who are not using a screen reader

##### Automatic Dismissal
In some scenarios Conditional notifications may be displayed for a set amount of time rather than become an evergreen feature of a page. In these cases there should be no negative impact on their current activities or the status that the message conveyed. 
ignoring a timed notification would still mean that the action is completed successfully.

For example an item would still be added to a cart regardless of a users engagement with the notification informing them of the successfully added item.

- [WCAG 2.1 Understanding adjustable timing](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html)
##### Interactive Controls

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


#### Examples
- New options are available based on selections you have made
- Shipping restrictions display once you have selected a location
- Quantity availability
- The user has items that are no longer available in their cart
- The user has successfully signed up for an email notifications
#### Using Available Cedar Components

Content control:
- actionable elements
  - cdr-button
  - cdr-link
- form elements
  - cdr-radio
  - cdr-checkbox
  - cdr-select

Content container:
- Cdr-alert (snackbar?)

<cdr-doc-example-code-pair repository-href="/src/components/alert"
:sandbox-data="$page.frontmatter.sandboxData" >

```html

<cdr-alert type="warning" role="status" aria-relevant="all" aria-atomic=true>
  <icon-warning-fill/> You did something that has caused this section to appear
</cdr-alert>

```
</cdr-doc-example-code-pair>

- *dismissible-notifications - potential component*
- *Cdr-toast*


### Validation
Form validation responses provide unexpected instruction on blocking problems that must be fixed before moving on. 
Additionally, these messages may respond to input informing the user of further updates needed and or to inform the user that an error has been resolved.
It is critical that these notifications accurately inform and help to clarify the issues being presented to users.
#### At A Glance
<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td>High</td>
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
          <li>As a form validation message</li>
          <li>As confirmation that an error was resolved successfully</li>
          <li>Notifying users of a potential problem that may require their attention</li>
        </ul>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Non-blocking, Required</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>Meaningful instruction</td>
  </tr>
</cdr-table>

#### Use When
- The notification is directly associated with a form or element within the form
- Use when you need to provide a user the status of an action they’re trying to complete
- As a validation message that notifies someone that they just did something that needs to be corrected (See Error and Warning Types)
- Resolving the instruction within the notification is required
- The notification content provides instructions to resolve an error, warning, or confirms success of a resolved error
#### Don't Use When
- The error or warning is time sensitive, instead replace `role="status"` with `role="alert` as outlined in [alert](../alerts)

#### Anatomy of a Validation Notification
These notifications are associated with special "required" 
elements on the page and where possible should be added to the DOM under the element that needs the users attention

<cdr-img :src="$withBase('/notifications/validationAnatomy.png')" alt="Diagram showing the required layout of the elements listed below" />

1. **[Validating a required form field](#validating-a-required-form-field)**
2. **[Display](#required-form-fields-display)**
3. **[Static properties](#required-form-fields-static-properties)**
4. **[Error Detection](#required-form-fieldson-validation)**
5. **[Notification Instruction container](#notification-instruction)**
6. **[visual aid and Assistive technology text](#visual-aid-and-assistive-technology-text)**
7. **[Instruction](#instruction)**
#### Validating a required form field

Validation Notifications used to present instructions on user errors have specific accessibility requirements. These include:

- **Must**
  - Identify each field in error
  - Providing suggestions (when known) to correct the errors
  - Preserve as much user-entered input as possible

-  **Should**
  - Correctly filled out user provided data in a form that contains errors **SHOULD** remain populated post-submit.
  - Confirm successful submission of data.
  - Provide an explanation to the when user when the submit button is not available
- **Should Not**
  - rely solely on visual cues to indicate an error
  - alter the user provided input to make it validate without providing the user with a validation message conveying this change

  ##### Client-side Validation
Client-side validation results in a better user experience and makes resolving validation errors more understandable.
By using script languages user’s input can be validated as they type. This means a more responsive, visually rich validation.
With client-side validation, form never gets submitted if validation fails. 

##### Server-side Validation
**Server-side Validation responses occur as part of a page refresh, the are available as part of a pages content and are not notifications.**
With these responses information is being sent to the server and validated using server-side languages. 
If the validation fails, the response is then sent back, the page is refreshed and the new data is presented to the users.

This experience is while less optimal than client validation can be helped with the following considerations:

- **May**
  - Change the title of the page
  - Give the error a heading level: Provide a header, preferably a H1, so that assistive technology users can jump directly to the error and correct it.
  - Visually style the error in such a way that it is distinguishable from other content
  - Provide a same-page link so that users can jump directly to the form field that has the error.

#### Required Form Fields Display
The Asterisks may not be read by all screen readers (in all reading modes) and may be difficult for users with low vision because they are rendered in a smaller size than default text.
It is important for authors to include the text indicating that asterisk is used and to consider increasing the size of the asterisk that is presented.

- **Should**
  - Require only fields that are absolutely needed
  - Required fields **SHOULD** have a visual indicator that the field is required.
  - Ensure that information conveyed by color differences is also available in text.

#### Required Form Fields Static properties

- **Must**
  - Set `Required` or `aria-required` to true for inputs that must be completed by the user
- **Should**
  - Require only fields that are absolutely needed
  - Required fields **SHOULD** be programmatically designated as such. Note: At a minimum, WCAG requires an informative error message about the field after the user submits the form.
  - Ensure assistive technology is provided text conveying that the field is required

##### aria-required or required 

#### Required Form Fields On validation
- **Must**
  - Identify each field in error
  - Preserve as much user-entered input as possible
  - set [aria-invalid](#aria-invalid) to `true`
  - map the associated id of the notification instruction to the [aria-errormessage](aria-errormessage) attribute for each field in error
- **May**
  - also use '[aria-describedby]()' in conjunction with [aria-errormessage](aria-errormessage)

#### Notification Instruction 
WCAG 1.3.3, WCAG 3.3.2 provide the following guidelines for validation instructions.
When users enter input that is validated, and errors are detected, the nature of the error needs 
to be described to the user in manner they can access. One approach is to present an alert dialog 
that describes fields with errors when the user attempts to submit the form. Another approach, 
if validation is done by the server, is to return the form (with the user's data still in the fields) 
and a text description at the top of the page that indicates the fact that there was a validation problem, 
describes the nature of the problem, and provides ways to locate the field(s) with a problem easily. 
The "in text" portion of the Success Criterion underscores that it is not sufficient simply to indicate 
that a field has an error by putting an asterisk on its label or turning the label red. 
A text description of the problem should be provided.

- **Must**
  - Providing suggestions (when known) to correct the errors
  - Ensure the message container can receive focus
  - Include the [`aria-live` or `role=”status”`](role-status-or-aria-live) markup to announce the notification without interrupting the page flow of the user
- **Should**
  - be visually and programmatically adjacent to the element.
- **Should Not**
  - rely solely on visual cues to indicate an error
- **May**
  - Be hidden until the user requests them if the notification instructions are not critical.

#### visual aid and Assistive technology text

-**Should**
-  if the text does not specifically call out the state of the message, error, warning, success, or info - that text should be provided via screen reader accessible text

#### Instruction
- **Must**
  - Be available as programmatically-discernible text
  - Be meaningful
  - Be visible
  - Clearly and accurately describe the error and/or how to fix the error.
  - Succinctly describe how a user can resolve the problem.
  - Help users understand how to fix problems
  - provide instruction that is as specific as possible
- **Must Not**
  - Rely solely on references to sensory characteristics (for example, "round button" or "button to the right")
-  **Should**
  - Provide an explanation when the submit button is not available
#### Role status / aria-live

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

Find more information on this topic in the [Accessibility References](#accessibility-references)


#### Error Suggestion
- **Must**
  - If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text WCAG 3.3.3

Find more information on this topic in the [Accessibility References](#accessibility-references)

https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html
#### Error Prevention
If the form is submitting any of the following:

-  legal commitments
-  financial transactions
-  user-controllable data (e.g. user profile, social media posts)

we are required to implement at least one of the following error prevention techniques:

-  Reversible: Submissions are reversible.
-  Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.
-  Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.

Find more information on this topic in the [Accessibility References](#accessibility-references)

#### Error Detection

##### aria-invalid
indicate that the value entered into an input field does not conform to the format expected by the application. This may include formats such as email addresses or telephone numbers. aria-invalid can also be used to 
indicate that a required field has not been filled in.
The attribute should be programmatically set as a result of a validation process.

-  Add aria-invalid="true" to the input
-  Identify the input (referencing the label):
  - In a simple JavaScript alert
  - with information associated with the input via aria-describedby (widely supported) or aria-errormessage (not yet widely supported)
  - with error text added to the input's label (other techniques are more semantically correct, but this is a reliable method)
  - with text on the web page (it may be appropriate to move the keyboard focus to the error message)
  - with an aria-live or role="alert" announcement
  - with information about the error in the page `<title>` if the submission causes a page reload or a new page load.

Find more information on this topic in the [Accessibility References](#accessibility-references)

##### aria-errormessage
The `aria-errormessage` attribute takes an ID reference in the same manner as `aria-describedby`, and is only exposed when aria-invalid is set to ‘true’ on the same element. The use of a live region attribute such as aria-live=”polite” on the error message container element is optional.

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

Find more information on this topic in the [Accessibility References](#accessibility-references)
#### Success Detection
Use at least one of the following techniques:

-  Confirmation text on the web page 
(it may be appropriate to move the keyboard focus to the error message)
-  **Aria-live announcement**

-  Confirmation message in the page `<title>` if the submission causes a page reload or a new page load.
#### Using Available Cedar Components
by default, cedar form elements error message pattern  default to adding `role="status`, automatically setting your validation to a notification
the following Cedar components provide generic validation styling
- cdr-input
- cdr-form-group
- cdr-select

As a notification is generally what you will use for error validation, the cedar form components error message container role defaults to `role="status"`. All you have to do is provide the messaging.

TODO- something about how we only provide the UI/container but not validation logic



#### Accessibility References
- [Accessible Notifications](https://www.w3.org/WAI/RD/wiki/Accessible_Notifications)
- [WCAG status messages 4.1.3](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html)
- [WCAG Error Identification 3.3.1 (lvl A)](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html)
- [WCAG Labels or Instructions 3.3.2 (lvl A)](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions)
- [WCAG Error Suggestion 3.3.3 (lvl AA)](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion)
- [WCAG Error Prevention 3.3.4 (lvl AA) ](https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data)
- [Form Notifications](https://www.w3.org/WAI/tutorials/forms/notifications/)
- [Using Aria-Invalid to Indicate An Error Field](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21.html)
- [Using the aria-describedby property to provide a descriptive label for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1.html)
- Use [aria-live](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) to indicate that an element will be updated. It describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
- Use [aria-atomic](https://www.digitala11y.com/aria-atomic-properties/) to indicate whether assistive technologies will present all, or only parts of the changed region based on the change notifications defined by the aria-relevant attribute.
- [aria-relevant](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute)
describes semantically meaningful changes as opposed to merely presentational ones


## Move to Form doc as these are not specific to the notification validation topic but to the broader Form validation


##### Disabled elements

-  Some dynamic forms will make the submit button unavailable until the form is completed correctly. 
This can be very confusing to users if insufficient error identification is provided

</cdr-doc-table-of-contents-shell>
