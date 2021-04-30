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
As messages, notifications offer important responses to changes in content that will help users understand additional options available or actions needing to take place.
These messages, though important, should not interrupt a user and focus should not be moved to them automatically.

## Guidelines

A Notification has specific behaviors and content objectives which make it unique from other types of messaging. 

Use the following list to validate that your message is a notification.

### Behavior

the following should be true:

- The page state has changed after page load
- The message is not available until triggered by a user action
### Purpose

At least one of the following should be true:

  - Providing a user the status of an action they’re trying to complete 
  - notifying users of a potential problem that may require their attention
  - As a form validation message
  - As confirmation that a task was completed successfully 
  - As contextual information that might need their attention
  - communicating a status change caused by the user.
### Interactive Controls

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
## Construction

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
  - Contain interactive controls
    
- **May**
  - Open or update content in locations unrelated to the action which caused the notification to appear 
  - Update a live region of the page
  - Use the HTML `<aside>` tag, denoting the section that, though related to the main element, doesn't belong to the main flow
  - appear as a timed display.

## Accessibility References
- [Accessible Notifications](https://www.w3.org/WAI/RD/wiki/Accessible_Notifications)
- [WCAG status messages 4.1.3](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html)

## Notification Web Patterns
(the following do not consider mobile app patterns)
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

### Conditional Notifications (when to use on page vs over page)

- Concise Messages
- User Interaction is Not required
- Ancillary Information

Similar to Status Notifications, these Conditional Notifications apply the `role="status"` to their HTML markup.
They will not interrupt a user from a task they are engaged in, and are provided on user action rather than as part of the page. 
These event based notifications differ from Status Notifications as they do not update live, existing inline sections of a page.
These notifications may open or be added to locations unrelated to the action which caused the notification to trigger.
Additionally, they may open based on conditions a user has created or criterium they have met.

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

### Validation Notifications
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
indicate that the value entered into an input field does not conform to the format expected by the application. This may include formats such as email addresses or telephone numbers. aria-invalid can also be used to 
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
- [Form Notifications](https://www.w3.org/WAI/tutorials/forms/notifications/  )
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
