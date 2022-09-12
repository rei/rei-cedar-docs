<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h2>
<p>Form validation ensures the data a user has entered into a form matches the requirements of our systems. Validation allows us to cater contextual feedback and instructions to what the user is doing.
Validation feedback can be presented before, during or after an interaction, depending on the need and technique used.
Validation should only be used once non-blocking techniques such as providing help text, accepting multiple formats for input data and using input masking have all failed.</p>
<h3 id="basics" tabindex="-1"><a class="header-anchor" href="#basics">#</a> Basics</h3>
<ul>
<li>Ensure forms are logical and easy to use</li>
<li>Ensure forms are keyboard accessible</li>
<li>Associate form labels with controls</li>
<li>Label must have a relationship to the input</li>
<li><RouterLink to="/patterns/validation-notifications/#grouping-controls">Groups of controls</RouterLink> should use the <RouterLink to="/components/form-group/">cdr-form-group</RouterLink> component or be within a <code>fieldset</code>, and be provided a legend description</li>
<li>Avoid using the <code>placeholder</code> attribute, instead, use the help <code>text</code> slots to provide formatting information</li>
<li>Outside of page and site controls, form elements should be contained within a form</li>
<li>Limit the amount or need of validation using other options first</li>
</ul>
<h2 id="best-practices-for-form-validation" tabindex="-1"><a class="header-anchor" href="#best-practices-for-form-validation">#</a> Best Practices for Form Validation</h2>
<ul>
<li><strong>Avoid it - design to prevent errors</strong>
<ul>
<li>Clearly label required fields</li>
<li>Label text must adequately inform the user of input type expectations</li>
<li>Accept and filter multiple formats for data</li>
<li>Use helper text slots to state content requirements</li>
<li>Use helper text to clearly and concisely inform the user of formatting requirements</li>
<li>Only require form fields that are absolutely needed</li>
<li>Integrate input masking that can clearly visualize formatting expectations</li>
<li>Only use live validation on form fields with the strictest input requirements</li>
<li>Do not place formatting help or expectations in the placeholder of an input</li>
</ul>
</li>
<li><strong>Limit it</strong>
<ul>
<li>Request less information in your form. Combine fields such as first and last name where possible and solicit only the most relevant and important information from your users.</li>
<li>Provide instruction or hints once a user has interacted and moved on from the form field</li>
<li>Do not provide instruction to a form field which has not received user input, for example to one clicked into and out of</li>
</ul>
</li>
<li><strong>Make it easy</strong>
<ul>
<li>Position the required label next to the input field label</li>
<li>Provide instruction that changes progressively to guide the user through the error process</li>
<li>Use clear and simple language</li>
<li>Ensure the instruction is visible to all users:
<ul>
<li>Avoid moving the form fields up or down when displaying validation</li>
<li>Place helpful formatting instruction above the input if that formatting instruction will remain helpful to your users during error resolution</li>
<li>Display notifications directly below the field in error (note that this will overlay the bottom help text slot on cdr-inputs)</li>
<li>For a group of elements such a form group of checkboxes, display notifications below the fieldset container</li>
</ul>
</li>
<li>Use meaningful colors and iconography</li>
<li>Display messages within the context of the action</li>
<li>Consider disabling the form submission to help direct the users attention to issues that exist</li>
<li>Don't remove incorrect data entered by the user</li>
<li>Don't provide validation messages for unfilled inputs until the user attempts to submit the form</li>
</ul>
</li>
<li><strong>Make it unassuming and friendly</strong>
<ul>
<li>Don’t use technical language</li>
<li>Don't shame the user for the error</li>
<li>Don't joke with the user about the error</li>
<li>Don't use cute language</li>
<li>Use language that conveys REI's Brand</li>
<li>Avoid uppercase text as it gives the visual impact of shouting</li>
</ul>
</li>
</ul>
<h3 id="validation-requirements" tabindex="-1"><a class="header-anchor" href="#validation-requirements">#</a> Validation Requirements</h3>
<cdr-img :src="$withBase('/notifications/validationAnatomy.png')" alt="Diagram showing the location of the following requirements" />
1. [Error prevention](#error-prevention)
2. [Error detection](#error-detection)
3. [Validation Notifications](#validation-notifications)
<h3 id="error-prevention" tabindex="-1"><a class="header-anchor" href="#error-prevention">#</a> Error Prevention</h3>
<p>The best interaction a user can have with a form is to easily enter their data and to move on, never interacting with the provided validation.
We can help our users avoid blocking validation by clearly identifying required form fields, using clear and informative text for labels, and providing persistent formatting instructions.
The following requirements will help reduce user exposure to form blocking validation.</p>
<h4 id="anatomy-of-form-validation-error-prevention" tabindex="-1"><a class="header-anchor" href="#anatomy-of-form-validation-error-prevention">#</a> Anatomy of Form Validation Error Prevention</h4>
<cdr-img :src="$withBase('/forms/ErrorPrevention.png')" alt="Diagram showing the location of the following requirements" />
<ul>
<li>
<p><strong>Must</strong></p>
<ul>
<li>Clearly label required form fields</li>
<li>Apply the <code>Required</code> and/or <code>aria-required</code> attributes to &quot;required&quot; form fields</li>
<li>Ensure assistive technology is provided text conveying that the field is required</li>
</ul>
</li>
<li>
<p><strong>Must Not</strong></p>
<ul>
<li>Use color alone to convey required or non-required fields</li>
</ul>
</li>
<li>
<p><strong>Should</strong></p>
<ul>
<li>Provide an explanation to the user when the &quot;submit&quot; button is not available</li>
<li>Provide a clear and informative form title</li>
<li>Create a clean and easy to understand layout by placing groups of form fields into fieldsets and providing adequate spacing between all elements</li>
<li>Accept and filter multiple formats for form field data</li>
<li>Use helper text to clearly and concisely inform the user of any formatting requirements</li>
<li>Integrate <RouterLink to="/components/input/#input-masking">input masking</RouterLink> that can clearly visualize formatting expectations</li>
<li>Only require fields that are absolutely needed</li>
<li>Use an asterisk to indicate that the field is required</li>
<li>Append &quot;(Optional)&quot; text to non-required fields within a form where the bulk of elements are required</li>
<li>Consider placing formatting instruction above the input if that formatting instruction will remain helpful to your users during error resolution</li>
</ul>
</li>
<li>
<p><strong>Should Not</strong></p>
<ul>
<li>Alter the user provided input to make it validate</li>
<li>Place formatting help or expectations in the placeholder of an input</li>
</ul>
</li>
</ul>
<h3 id="error-detection" tabindex="-1"><a class="header-anchor" href="#error-detection">#</a> Error Detection</h3>
<p>Once the user has created an error and validation has been triggered, it's necessary to call out the form field(s) in error and provide instruction on how to resolve them.</p>
<h4 id="anatomy-of-form-validation-error-detection" tabindex="-1"><a class="header-anchor" href="#anatomy-of-form-validation-error-detection">#</a> Anatomy of Form Validation Error Detection</h4>
<cdr-img :src="$withBase('/forms/ErrorDetection.png')" alt="Diagram showing the location of the following requirements" />
<ul>
<li>
<p><strong>Must</strong></p>
<ul>
<li>Identify each field in error</li>
<li>Provide suggestions to correct the errors</li>
<li>Append <code>aria-invalid=&quot;true&quot;</code> to the input</li>
<li>Map the associated id of the notification instruction to the input via <code>aria-describedby</code> (widely supported) or <a href="https://a11ysupport.io/tech/aria/aria-errormessage_attribute" target="_blank" rel="noopener noreferrer">aria-errormessage<ExternalLinkIcon/></a> (not yet widely supported)</li>
<li>Append <code>aria-live</code> <code>role=&quot;status&quot;</code>, or <code>role=&quot;alert&quot;</code> to the notification container</li>
<li>Not hide the content of error messages when <code>aria-errormessage</code> is pertinent</li>
<li>Ensure the notification content is hidden or remove the aria-errormessage attribute or its value</li>
</ul>
</li>
<li>
<p><strong>Must Not</strong></p>
<ul>
<li>Use color alone to convey a field in error</li>
<li>Expose aria-errormessage for an object with an aria-invalid value of false</li>
</ul>
</li>
<li>
<p><strong>Should</strong></p>
<ul>
<li>Preserve as much user-entered input as possible</li>
<li>Add information about the error in the page <code>&lt;title&gt;</code> if the submission causes a page reload or a new page load</li>
<li>Consider disabling the form submission to help direct the user's attention to issues that exist</li>
</ul>
</li>
<li>
<p><strong>Should Not</strong></p>
<ul>
<li>Rely solely on visual cues to indicate an error</li>
<li>Set the <code>aria-invalid</code> attribute on required field prior to incorrect user data or attempted submission</li>
<li>Be scripted to occur with every keystroke/OnInput unless there is a delay built into the script to avoid <code>role</code> or <code>aria-live</code> announcements while the user is actively typing</li>
<li>Be scripted to occur when a user leaves a field, because the <code>aria-live</code>
announcement may conflict with the screen reader's attempt to read the next
element which receives focus, causing some information to be interrupted
or not announced at all</li>
<li>Alter the user-provided input to make it validate without providing the user with a validation message conveying this change</li>
<li>Remove incorrect data entered by the user</li>
</ul>
</li>
<li>
<p><strong>May</strong></p>
<ul>
<li>Also use <code>aria-describedby</code> in conjunction with <code>aria-errormessage</code></li>
<li>Be scripted to show on the screen for sighted users, but attempts to announce the real-time messages to screen reader users
can be problematic. It is usually acceptable to wait to announce
real-time errors until after form submission, assuming that no data has been saved yet.</li>
</ul>
</li>
</ul>
<h4 id="error-detection-location" tabindex="-1"><a class="header-anchor" href="#error-detection-location">#</a> Error Detection Location</h4>
<p>A user's ability to complete a form may be impacted if the <RouterLink to="/patterns/validation-notifications/#form-control-validation-notification">validation notification</RouterLink> is not displayed in a manner the user expects.</p>
<p>When providing inline instruction it is important to be non-disruptive, as enabling users to think less allows them to complete a form more quickly.
We can help reduce a user's cognitive lift by adding any additional information to locations within their natural reading flow, either to the right of the form element or below it. Displaying all validation in a <RouterLink to="/patterns/validation-notifications/#validation-summary">validation summary</RouterLink> at the top of a page or top/bottom of a form will produce a poorer user experience than providing messaging inline as the user interacts with each form element.</p>
<p>Cedar recommends placing validation information below the form field for a couple of reasons:</p>
<ul>
<li>Constrained space will not alter the location of instruction</li>
<li>Below the form element is an expected pattern that is within a user's reading flow</li>
</ul>
<p>There are three unique opportunities which can be targeted to provide notification updates:</p>
<ul>
<li><a href="#while-user-is-typing-oninput">While user is typing</a>: using the <code>OnInput</code> event</li>
<li><a href="#once-the-user-moves-focus-onchange">Once the user moves focus</a>: using the <code>OnChange</code> event</li>
<li><a href="#once-the-user-submits-onsubmit">Once the user submits</a>: using the <code>OnSubmit</code> event</li>
</ul>
<h5 id="while-user-is-typing-oninput" tabindex="-1"><a class="header-anchor" href="#while-user-is-typing-oninput">#</a> While user is typing (OnInput)</h5>
<p>&quot;On input&quot; validation provides instant feedback as the user types making it highly visible.
However, it forces them out of a &quot;completion&quot; mindset and may cause frustration.</p>
<p>While useful for form fields with very strict input requirements, research has
<a href="https://www.researchgate.net/publication/221054469_Online_Form_Validation_Don't_Show_Errors_Right_Away" target="_blank" rel="noopener noreferrer">proven<ExternalLinkIcon/></a>
it to <a href="https://www.researchgate.net/publication/220054837_Usable_error_message_presentation_in_the_World_Wide_Web_Do_not_show_errors_right_away" target="_blank" rel="noopener noreferrer">cause<ExternalLinkIcon/></a>
more user errors and take longer to successfully complete the form.</p>
<p>Instruction offered this way should focus on positive progressive cues and should not present error instruction.
It should not be used to immediately communicate that the user has caused an error.</p>
<ul>
<li>
<p>Use instant validation:</p>
<ul>
<li>For difficult-to-answer questions where a user may create several formatting errors</li>
<li>To indicate progress as a user types</li>
</ul>
</li>
<li>
<p>Don't annoy the user</p>
<ul>
<li>By providing instant error instruction</li>
<li>By using on simple inputs</li>
</ul>
</li>
</ul>
<h5 id="once-the-user-moves-focus-onchange" tabindex="-1"><a class="header-anchor" href="#once-the-user-moves-focus-onchange">#</a> Once the user moves focus (OnChange)</h5>
<p>&quot;On Change&quot; validation takes place after the user changes or removes focus from their current element.
In most cases this is the best time to begin validating user data as the user will not need to locate or navigate back to the form field that contains the error.
This informs the user that there are additional expectations but does not block them from moving on and working through the remainder of the form.</p>
<p>Providing validation instruction on change, and enhancing the validation on submit can ease the users through the form without blocking or frustrating them.
We could for example, alter the the appearance of an element on change, which would warn or confirm the user's input and if needed on submit reinforce this change with additional validation instruction.</p>
<cdr-img :src="$withBase('/input/progressiveexample.png')" alt="An example on REI.com of this notification" width="500px"/>
<h5 id="once-the-user-submits-onsubmit" tabindex="-1"><a class="header-anchor" href="#once-the-user-submits-onsubmit">#</a> Once the user submits (OnSubmit)</h5>
<p>A user submitting a form will be expecting to move on or to be reminded of existing errors.
They may be on a location of the page where they are unable to see individual invalidated form fields.
It may benefit user of longer forms to be presented with a <RouterLink to="/patterns/validation-notifications/#validation-summary">validation summary</RouterLink> that can reiterate the errors and guide them to the locations needing work.</p>
<p>OnSubmit is a user-expected location to offer validation.
While less optimal than onChange, this event is preferable to OnInput. Users in a completion mindset may knowingly move through a form,
even once aware of errors, and wait to submit prior to addressing additional form needs. Consider pairing OnChange progressively with onSubmit validation.
A user who receives errors after submitting the form may no longer be able to see the input errors due to page scroll or some other limiting factor, in this case they may find a validation summary useful or needed.</p>
<h5 id="as-a-return-from-the-server-server-side-validation" tabindex="-1"><a class="header-anchor" href="#as-a-return-from-the-server-server-side-validation">#</a> As a return from the server (server-side validation)</h5>
<p>Client side or &quot;inline&quot; validation notifications can interact with the user as they are working through the form process.
Inline validation allows us to interact with a user prior to the data being submitted to a server.</p>
<p>As this provides an enhanced user experience, inline validation should be used where possible.</p>
<p>This validation does not replace server validation, rather it enhances it with the ability to present instruction prior to submitting or refreshing the page.</p>
<p>When the user submits the form their information is sent to the server and validated. If validation did not take place prior to server validation or if there are additional errors, the response of the “validator” is sent back to the user’s computer.</p>
<p>Server-side validation notifications:</p>
<ul>
<li><strong>Must</strong>
<ul>
<li>Return the form (with the user's data still in the fields)</li>
<li>Provide a validation summary at the top of the page</li>
</ul>
</li>
<li><strong>May</strong>
<ul>
<li>Change the title of the page</li>
<li>Give the error a heading level: provide a header, preferably a H1, so that assistive technology users can jump directly to the error and correct it.</li>
<li>Provide a same-page link so that users can jump directly to the form field that has the error.</li>
</ul>
</li>
</ul>
<h3 id="validation-notifications" tabindex="-1"><a class="header-anchor" href="#validation-notifications">#</a> Validation Notifications</h3>
<p><RouterLink to="/patterns/validation-notifications/">Validation Notifications</RouterLink> provide the instruction on how to resolve the detected errors or confirm task completion.
There are multiple types of validation notification which are applicable based on the validation technique being used, such as inline feedback and validation summaries. Detailed information about the types and requirements can be found on the <RouterLink to="/patterns/validation-notifications/">Validation Notifications</RouterLink> page.</p>
<h2 id="more-reading-and-resources" tabindex="-1"><a class="header-anchor" href="#more-reading-and-resources">#</a> More Reading and Resources</h2>
<ul>
<li>Accessibility:
<ul>
<li><a href="https://dequeuniversity.com/checklists/web/form-validation-feedback" target="_blank" rel="noopener noreferrer">Deque Checklist<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/perspective-videos/notifications/" target="_blank" rel="noopener noreferrer">Notifications and feedback<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/RD/wiki/Accessible_Notifications" target="_blank" rel="noopener noreferrer">Accessible Notifications<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html" target="_blank" rel="noopener noreferrer">WCAG status messages 4.1.3<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html" target="_blank" rel="noopener noreferrer">WCAG Error Identification 3.3.1 (lvl A)<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions" target="_blank" rel="noopener noreferrer">WCAG Labels or Instructions 3.3.2 (lvl A)<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion" target="_blank" rel="noopener noreferrer">WCAG Error Suggestion 3.3.3 (lvl AA)<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data" target="_blank" rel="noopener noreferrer">WCAG Error Prevention 3.3.4 (lvl AA) <ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/tutorials/forms/notifications/" target="_blank" rel="noopener noreferrer">Form Notifications<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21.html" target="_blank" rel="noopener noreferrer">Using Aria-Invalid to Indicate An Error Field<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1.html" target="_blank" rel="noopener noreferrer">Using the aria-describedby property to provide a descriptive label for user interface controls<ExternalLinkIcon/></a></li>
<li>Use <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions" target="_blank" rel="noopener noreferrer">aria-live<ExternalLinkIcon/></a> to indicate that an element will be updated. It describes the types of updates the user agents, assistive technologies, and user can expect from the live region.</li>
<li>Use <a href="https://www.digitala11y.com/aria-atomic-properties/" target="_blank" rel="noopener noreferrer">aria-atomic<ExternalLinkIcon/></a> to indicate whether assistive technologies will present all, or only parts of the changed region based on the change notifications defined by the aria-relevant attribute.</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute" target="_blank" rel="noopener noreferrer">aria-relevant<ExternalLinkIcon/></a></li>
<li><a href="https://www.w3.org/WAI/tutorials/forms/grouping/" target="_blank" rel="noopener noreferrer">Grouping Controls<ExternalLinkIcon/></a></li>
<li><a href="https://blog.tenon.io/accessible-validation-of-checkbox-and-radiobutton-groups/" target="_blank" rel="noopener noreferrer">Checkbox and radiobutton groups<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>UX/UI
<ul>
<li><a href="https://uxmovement.com/forms/why-users-make-more-errors-with-instant-inline-validation/" target="_blank" rel="noopener noreferrer">Instant Validation<ExternalLinkIcon/></a></li>
<li><a href="https://www.nngroup.com/articles/errors-forms-design-guidelines/" target="_blank" rel="noopener noreferrer">UI Guidelines<ExternalLinkIcon/></a></li>
<li><a href="https://uxmovement.com/forms/the-best-place-for-error-messages-on-forms/" target="_blank" rel="noopener noreferrer">Error message placement<ExternalLinkIcon/></a></li>
<li><a href="https://medium.com/@andrew.burton/form-validation-best-practices-8e3bec7d0549" target="_blank" rel="noopener noreferrer">Form Validation Best Practices<ExternalLinkIcon/></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation" target="_blank" rel="noopener noreferrer">Constraint validation<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>Front-end
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation" target="_blank" rel="noopener noreferrer">HTML5 Constraint validation<ExternalLinkIcon/></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation" target="_blank" rel="noopener noreferrer">Constraint validation API<ExternalLinkIcon/></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/ValidityState" target="_blank" rel="noopener noreferrer">Validity state API<ExternalLinkIcon/></a></li>
<li><a href="https://www.youtube.com/watch?v=D9JHizCAx8U" target="_blank" rel="noopener noreferrer">Validity API overview video<ExternalLinkIcon/></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity" target="_blank" rel="noopener noreferrer">checkValidity()<ExternalLinkIcon/></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity" target="_blank" rel="noopener noreferrer">setCustomValidity()<ExternalLinkIcon/></a></li>
<li><a href="https://vuejs.org/v2/cookbook/form-validation.html" target="_blank" rel="noopener noreferrer">Vue validation cookbook<ExternalLinkIcon/></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation" target="_blank" rel="noopener noreferrer">Client-side form validation<ExternalLinkIcon/></a></li>
<li><a href="https://medium.com/front-end-weekly/html5-form-validation-in-react-65712f778196" target="_blank" rel="noopener noreferrer">HTML5 form validation<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
</cdr-doc-table-of-contents-shell>
</template>
