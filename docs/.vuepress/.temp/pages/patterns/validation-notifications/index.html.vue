<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h2>
<p>Validation notifications provide important feedback to users during and after form submission.
These notifications include in-line feedback at or near the form controls and overall summaries that are typically provided after form submission.</p>
<p>While error messages are the most usual and critical use for validation notifications, success messages are also important to confirm task completion.</p>
<h2 id="form-control-validation-notification" tabindex="-1"><a class="header-anchor" href="#form-control-validation-notification">#</a> Form Control Validation Notification</h2>
<p>This notification is an <RouterLink to="/patterns/form-validation/#error-detection">error detection</RouterLink> response to incorrect or incomplete data entered into a form control, such as an input, checkbox, radio, or select.</p>
<p>Notifying the user of a form control's validation status can manifest in many ways, from adding iconography to signify success, altering the color of border text or background, and/or providing detailed instruction.
Regardless of the means they all have the goal of communicating information back to the user. To ensure this happens effectively the following requirements and best practices should be accounted for.</p>
<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td><icon-x-fill/> High</td>
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
        <cdr-list>
          <li>As instruction, once the form field or form group has been filled out by the user</li>
          <li>As confirmation that a field requiring specific formatting is valid</li>
          <li>In order to notify users of a potential problem that may require their attention</li>
        </cdr-list>
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
  <tr>
    <th class="advanced-table__header">Location</th>
    <td>In an associated section of the effected required form field</td>
  </tr>
</cdr-table>
<h3 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h3>
<ul>
<li><strong>On Input</strong>
<ul>
<li>A user is typing into a form control which has complex formatting requirements</li>
</ul>
</li>
<li><strong>On Change</strong>
<ul>
<li>Providing errors or warning UI related to user entered formatting or invalid selections</li>
<li>Providing errors or warning messaging related to user entered formatting or invalid selections</li>
<li>Providing success confirmations related to a user entered form control which complies with formatting requirements</li>
</ul>
</li>
<li><strong>On Submit</strong>
<ul>
<li>Providing errors or warning messaging related to user entered formatting, incomplete inputs, or invalid selections</li>
<li>Elevating error or warning UI that already provided via OnChange or OnInput validation</li>
</ul>
</li>
</ul>
<h3 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h3>
<ul>
<li>Confirming that a task or process initiated by the user was completed successfully (see <RouterLink to="/patterns/status-notifications/#transient-status-notifications">Transient Status Notifications</RouterLink>)</li>
<li>Providing contextual information on the page processes (see <RouterLink to="/patterns/status-notifications/#transient-status-notifications">Transient Status Notifications</RouterLink>)</li>
<li>Providing summaries of errors, warnings, or success messaging related to form submission (see <a href="#validation-summary">Validation Summaries</a>)</li>
<li>Page usage should be blocked until the user takes an action within the message or exits (see <RouterLink to="/patterns/alerts/#user-confirmation-alerts">User Confirmation Alerts</RouterLink>)</li>
</ul>
<h3 id="anatomy-of-a-validation-notification" tabindex="-1"><a class="header-anchor" href="#anatomy-of-a-validation-notification">#</a> Anatomy of a Validation Notification</h3>
<cdr-img :src="$withBase('/forms/ValidationNotification.png')" alt="Diagram showing the location of the following requirements" />
<h3 id="validation-notification-container" tabindex="-1"><a class="header-anchor" href="#validation-notification-container">#</a> Validation Notification Container</h3>
<ul>
<li><strong>Must</strong>
<ul>
<li>Ensure the message container can receive focus</li>
<li>Include the <code>aria-live</code> or <code>role=”status”</code> markup to announce the notification without interrupting the page flow of the user</li>
<li>Be visible</li>
<li>Ensure the instruction is visible to all users
<ul>
<li>Avoid moving the form fields up or down when displaying validation</li>
<li>Display instruction at the right place:</li>
<li>For a singular form element, directly below the field in error, replacing the bottom helper text if present</li>
<li>For a group of elements such a form group of checkboxes, below the fieldset container</li>
</ul>
</li>
<li>Use meaningful colors and iconography</li>
</ul>
</li>
<li><strong>Should</strong>
<ul>
<li>Be visually and programmatically adjacent to the element</li>
<li>Display within the context of the action</li>
</ul>
</li>
<li><strong>May</strong>
<ul>
<li>Be hidden until the user requests them if the notification instructions are not critical</li>
</ul>
</li>
</ul>
<h3 id="validation-notification-instruction" tabindex="-1"><a class="header-anchor" href="#validation-notification-instruction">#</a> Validation Notification Instruction</h3>
<ul>
<li><strong>Must</strong>
<ul>
<li>Provide suggestions (when known) to correct the errors</li>
<li>Be available as programmatically-discernible text</li>
<li>Be meaningful</li>
<li>Use clear and simple language</li>
<li>Use meaningful colors and iconography</li>
<li>Be as concise as possible</li>
</ul>
</li>
<li><strong>Must Not</strong>
<ul>
<li>Rely solely on references to sensory characteristics (for example, &quot;round button&quot; or &quot;button to the right&quot;)</li>
</ul>
</li>
<li><strong>Should</strong>
<ul>
<li>Provide the state of the error, if using visual cues for error, warning, success, or info - that text should be provided via screen reader accessible text</li>
<li>Provide instruction that is as specific as possible</li>
<li>Clearly state errors:
<ul>
<li>What happened</li>
<li>What’s the next step the user should take to succeed</li>
<li>Avoid using technical jargon</li>
</ul>
</li>
<li>Confirm successful submission of data</li>
<li>Use language that conveys REI's Brand</li>
<li>Avoid uppercase text as it gives the visual impact of shouting</li>
</ul>
</li>
<li><strong>Should Not</strong>
<ul>
<li>Rely solely on visual cues to indicate an error</li>
<li>Remove incorrect data entered by the user</li>
<li>Provide validation messages for unfilled inputs until the users attempts to submit the form</li>
<li>Use technical language</li>
<li>Shame the user for the error</li>
<li>Joke with the user about the error</li>
<li>Use cute language</li>
</ul>
</li>
<li><strong>May</strong>
<ul>
<li>Provide instruction that changes progressively to guide the user through the error process</li>
</ul>
</li>
</ul>
<h4 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation">#</a> Implementation</h4>
<cdr-doc-example-code-pair repository-href="/src/components/input" :sandbox-data="$page.frontmatter.sandboxData" :codeMaxHeight="false" :model="{defaultModel: '', modelError: false}" :methods="{validateInput() {this.modelError = this.defaultModel.length > 4 && 'Error: please enter 4 or less characters'}}">
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cdr-input</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>defaultModel<span class="token punctuation">"</span></span>
  <span class="token attr-name">:background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>backgroundColor<span class="token punctuation">"</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input label<span class="token punctuation">"</span></span>
  <span class="token attr-name">:error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modelError<span class="token punctuation">"</span></span>
  <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>validateInput<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#helper-text-bottom</span><span class="token punctuation">></span></span>
    Must be 4 or less characters
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cdr-input</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></cdr-doc-example-code-pair>
<h4 id="grouping-controls" tabindex="-1"><a class="header-anchor" href="#grouping-controls">#</a> Grouping Controls</h4>
<p>Form groups are a collection of elements, defined by a shared label using the <code>legend</code> tag.</p>
<p>It is not recommended to require elements with a form group as logically there should be no incorrect answer for these elements.
They are either true or false. When designing a form where a user must make a selection consider a <RouterLink to="/components/selects/">select</RouterLink> control.
However, it is common to see these groups have the following needs:</p>
<ul>
<li>Require the user to select one of the set of options</li>
<li>Require that the user select at least one but only to 'x' amount of options</li>
</ul>
<p>As of now there seems to be no way to link one message to a group of controls with a form group that will communicate clearly to all users.
We need to do some extra work with these groups to make sure they work for all our users.
<a href="https://blog.tenon.io/accessible-validation-of-checkbox-and-radiobutton-groups/" target="_blank" rel="noopener noreferrer">Tennon.Io's article on this topic<ExternalLinkIcon/></a> found that the best solution for support
on a broad range of assisted tech solutions was achieved by dynamically injecting the error text into the legend. This forgoes the recommendation to add the <code>aria-describedby</code> attribute to the <code>fieldset</code> or <code>legend</code>.
Additionally the addition of <code>aria-invalid</code> to each control was not recommended as it may lead to user confusion.</p>
<ul>
<li><strong>Should</strong>
<ul>
<li>Dynamically inject the error instruction as a <code>span</code> into the form-group legend</li>
</ul>
</li>
<li><strong>Should Not</strong>
<ul>
<li>Add <code>aria-describedby</code> to the <code>legend</code>, linking to a span out of the form-group. This produces mixed results across the assisted tech matrix.</li>
<li>Use <code>aria-describedby</code> to the <code>fieldset</code>, linking to a span out of the form-group. This produces mixed results across the assisted tech matrix.</li>
<li>Add the <code>aria-invalid</code> attribute to form-group controls as this may cause user confusion on if all or just one item are required</li>
</ul>
</li>
</ul>
<h2 id="validation-summary" tabindex="-1"><a class="header-anchor" href="#validation-summary">#</a> Validation Summary</h2>
<p>Up to this point we have been going over best practices and requirements for individual form controls and form groups such as a singular text input or group of checkboxes.
This type of inline validation works well as users are provided feedback immediately.
However, for various reasons a user may lose sight of the problems needing remediation and become stuck on submit.</p>
<p>A validation summary outlines, informs and directs users to all existing errors that need to be fixed on the page.
The summary should be an additive error indication, summarizing pre-existing form control notifications.
As this may be the only error notification within a user's viewport, providing links to each specific error is recommended.</p>
<cdr-table class="advanced-table" full-width=false>
  <tr>
    <th class="advanced-table__header">
      Priority
    </th>
    <td><icon-x-fill/> High</td>
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
        <cdr-list>
          <li>To provide additional visibility to validation notifications</li>
          <li>As a summary for multiple validation problems</li>
          <li>For validation instruction returned by the server</li>
        </cdr-list>
    </td>
  </tr>
  <tr>
    <th class="advanced-table__header">Interaction</th>
    <td>Non-blocking, Required</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Information</th>
    <td>Guided summary, reiterating validation notifications</td>
  </tr>
  <tr>
    <th class="advanced-table__header">Location</th>
    <td>Client validation: below the form</td>
    <td>Server validation: at the top of the page</td>
  </tr>
</cdr-table>
<h3 id="use-when-1" tabindex="-1"><a class="header-anchor" href="#use-when-1">#</a> Use When</h3>
<ul>
<li>To summarize and direct users back to existing errors</li>
<li>To increase visibility of existing errors</li>
<li>For server-returned instruction</li>
</ul>
<h3 id="don-t-use-when-1" tabindex="-1"><a class="header-anchor" href="#don-t-use-when-1">#</a> Don't Use When</h3>
<ul>
<li>Confirming that a task or process initiated by the user was completed successfully (see <RouterLink to="/patterns/status-notifications/#transient-status-notifications">Transient Status Notifications</RouterLink>)</li>
<li>Providing contextual information on the page processes (see <RouterLink to="/patterns/status-notifications/#transient-status-notifications">Transient Status Notifications</RouterLink>)</li>
<li>Providing errors, warnings, or success messaging related to user entered formatting, incomplete inputs, or invalid selections (see <a href="#form-control-validation-notification">Validation Notifications</a>)</li>
<li>Page usage should be blocked until the user takes an action within the message or exits (see <RouterLink to="/patterns/alerts/#user-confirmation-alerts">User Confirmation Alerts</RouterLink>)</li>
<li>As the only indication of an error</li>
</ul>
<h3 id="anatomy-of-a-validation-summary" tabindex="-1"><a class="header-anchor" href="#anatomy-of-a-validation-summary">#</a> Anatomy of a Validation Summary</h3>
<cdr-img :src="$withBase('/notifications/validation-summary.png')" alt="Diagram showing the validation container and messaging requirements" />
<h3 id="validation-summary-container" tabindex="-1"><a class="header-anchor" href="#validation-summary-container">#</a> Validation Summary  Container</h3>
<ul>
<li><strong>Must</strong>
<ul>
<li>Ensure the message container can receive focus</li>
<li>Move user focus to this summary when presented
<ul>
<li>Focus can be set to the message with client-side scripting</li>
<li>Include an anchor name in the URL for server-returned summaries</li>
</ul>
</li>
<li>Ensure the instruction is visible to all users</li>
<li>Use meaningful colors and iconography</li>
<li>Use role=&quot;alert&quot; to assertively reiterate existing page errors if the summary is presented prior to page reload</li>
</ul>
</li>
<li><strong>Should</strong>
<ul>
<li>Be presented adjacent to the form when the summary is presented prior to page reload</li>
<li>Be presented at the top of the page when the summary is provided post form-submit</li>
</ul>
</li>
<li><strong>May</strong>
<ul>
<li>Be hidden until the user requests them if the notification instructions are not critical</li>
</ul>
</li>
</ul>
<h3 id="validation-summary-instruction" tabindex="-1"><a class="header-anchor" href="#validation-summary-instruction">#</a> Validation Summary Instruction</h3>
<ul>
<li><strong>Must</strong>
<ul>
<li>Indicate the fact that there was a validation problem</li>
<li>Summarize existing errors</li>
<li>Be available as programmatically-discernible text</li>
<li>Be meaningful</li>
<li>Use clear and simple language</li>
<li>Use meaningful colors and iconography</li>
<li>Be as concise as possible</li>
</ul>
</li>
<li><strong>Must Not</strong>
<ul>
<li>Rely solely on references to sensory characteristics (for example, &quot;round button&quot; or &quot;button to the right&quot;)</li>
</ul>
</li>
<li><strong>Should</strong>
<ul>
<li>Direct users back to existing errors</li>
<li>Provide the states of the items within the summary, if using visual cues for error, warning, success, or info - that text should be provided via screen reader accessible text</li>
<li>Provide instruction that is as specific as possible</li>
<li>Clearly state errors:
<ul>
<li>What happened</li>
<li>What’s the next step the user should take to succeed</li>
<li>Avoid using technical jargon</li>
</ul>
</li>
<li>remove items from the summary as they are resolved</li>
<li>Use language that conveys REI's Brand</li>
<li>Avoid uppercase text as it gives the visual impact of shouting</li>
</ul>
</li>
<li><strong>Should Not</strong>
<ul>
<li>Use technical language</li>
<li>Shame the user for the error</li>
<li>Joke with the user about the error</li>
<li>Use cute language</li>
</ul>
</li>
</ul>
<h2 id="references" tabindex="-1"><a class="header-anchor" href="#references">#</a> References</h2>
<ul>
<li>Accessibility - find more information on this topic in the following resource:
<ul>
<li><a href="https://www.w3.org/WAI/RD/wiki/Accessible_Notifications" target="_blank" rel="noopener noreferrer">Accessible Notifications<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html" target="_blank" rel="noopener noreferrer">WCAG status messages 4.1.3<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions" target="_blank" rel="noopener noreferrer">WCAG Labels or Instructions 3.3.2 (lvl A)<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion" target="_blank" rel="noopener noreferrer">WCAG Error Suggestion 3.3.3 (lvl AA)<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/tutorials/forms/notifications/" target="_blank" rel="noopener noreferrer">Form Notifications<ExternalLinkIcon/></a></li>
<li>Use <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions" target="_blank" rel="noopener noreferrer">aria-live<ExternalLinkIcon/></a> to indicate that an element will be updated. It describes the types of updates the user agents, assistive technologies, and user can expect from the live region.</li>
<li>Use <a href="https://www.digitala11y.com/aria-atomic-properties/" target="_blank" rel="noopener noreferrer">aria-atomic<ExternalLinkIcon/></a> to indicate whether assistive technologies will present all, or only parts of the changed region based on the change notifications defined by the aria-relevant attribute.</li>
<li><a href="https://www.w3.org/WAI/tutorials/forms/grouping/" target="_blank" rel="noopener noreferrer">Grouping Controls<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>UX/UI
<ul>
<li><a href="https://uxmovement.com/forms/why-users-make-more-errors-with-instant-inline-validation/" target="_blank" rel="noopener noreferrer">Instant Validation<ExternalLinkIcon/></a></li>
<li><a href="https://www.nngroup.com/articles/errors-forms-design-guidelines/" target="_blank" rel="noopener noreferrer">UI Guidelines<ExternalLinkIcon/></a></li>
<li><a href="https://uxmovement.com/forms/the-best-place-for-error-messages-on-forms/" target="_blank" rel="noopener noreferrer">Error message placement<ExternalLinkIcon/></a></li>
<li><a href="https://medium.com/@andrew.burton/form-validation-best-practices-8e3bec7d0549" target="_blank" rel="noopener noreferrer">Form Validation Best Practices<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
</cdr-doc-table-of-contents-shell>
</template>
