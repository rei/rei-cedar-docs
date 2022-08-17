<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<p>The primary benefits of a design system include code reusability, consistency and increased design and development efficiency. However a design system is not intended to distribute business logic, domain-specific styling, or other more complex UI elements.</p>
<p>For example, Cedar provides all of the elements necessary to build a login form component, but the business logic behind that form should be determined by the backend requirements of the authentication system it logs into. Furthermore, the UI/UX may need to be customized for the context in which it is rendered, and it would be impractical for Cedar to build in support for every possible use case of a login form.</p>
<p>By distributing flexible atomic design system elements (Vue components, design tokens, CSS styles) we provide teams with all the tools necessary to create performant branded reusable components. By creating new components following shared standards, we can help extend the Cedar library as well as ensure high-quality customer experiences.</p>
<h2 id="principles" tabindex="-1"><a class="header-anchor" href="#principles">#</a> Principles</h2>
<p>When building a new component, we encourage you to keep these core principals in mind to create durable solutions that can easily be shared and maintained:</p>
<p><strong>Unified</strong></p>
<p>Consistent styles and interactions across channels builds trust with customers and improves overall usability. Designing with unity and consistency in mind enables our visual language to scale across an omnichannel experience.</p>
<p><strong>Intentional</strong></p>
<p>Quality over quantity. Be deliberate about how you approach creating, building, documenting and maintaining components.</p>
<p><strong>Flexible</strong></p>
<p>Provide options for a component to work under a range of circumstances. The design should be flexible enough to support different scenarios, while still specific enough to be useful.</p>
<p><strong>Extensible</strong></p>
<p>Design to allow the addition of new capabilities or functionality. Create forward-compatible solutions that can be reused and extended in the future to make maintenance easier and help support speed to market.</p>
<p><strong>Accessible</strong></p>
<p>Accessibility is at the core of how we design usable experiences for all. Every design, asset, and piece of code should meet or exceed WCAG 2.1 AA accessibility standards, and should include guidance for any necessary implementation details.</p>
<h2 id="requirements-for-reusable-components" tabindex="-1"><a class="header-anchor" href="#requirements-for-reusable-components">#</a> Requirements for Reusable Components</h2>
<p>Build with reusability in mind:</p>
<ul>
<li>Designers: add to the <a href="https://www.figma.com/file/5R0ElfCIEJbRJx2tKzlA7s/Greenhouse?node-id=1673%3A4" target="_blank" rel="noopener noreferrer">Greenhouse Figma libary<ExternalLinkIcon/></a></li>
<li>Developers: add to FED Component repo. See: <a href="https://confluence.rei.com/display/FED/npm+packages+at+REI" target="_blank" rel="noopener noreferrer">npm packages at REI<ExternalLinkIcon/></a></li>
<li>Include usage guidelines alongside the design in the Figma library, and in the readme file</li>
</ul>
<p>Technical requirements:</p>
<ul>
<li>Leverage existing Cedar components, tokens, and variables wherever possible</li>
<li>Work with the Cedar team to extend or modify Cedar elements that do not satisfy your requirements</li>
<li>Adhere to Cedar usability and accessibility standards</li>
<li>Compliant with <a href="https://confluence.rei.com/display/TP/Cedar+Deprecation+Policy" target="_blank" rel="noopener noreferrer">Cedar's deprecation policy<ExternalLinkIcon/></a> - utilizing the current version</li>
<li>Component API must adhere to <a href="https://confluence.rei.com/display/FED/semver%2C+npm+versioning%2C+and+git+tags" target="_blank" rel="noopener noreferrer">semantic versioning<ExternalLinkIcon/></a> when updated</li>
</ul>
<p>Process:</p>
<ul>
<li>Include Cedar team as a stakeholder at kick-off</li>
<li>Checkpoint for design review and Cedar approval</li>
<li>Checkpoint for code review and Cedar approval (definition of done)</li>
<li>Have a plan to manage tech/design debt - lifecycle maintenance plan to update dependencies every 3-6 months to new Cedar releases</li>
</ul>
<p>Note that not every front-end element should be built as a reusable component. There is a maintenance cost associated with reusable components as they must be updated and released independently of your micro-site. If a component is infrequently used or is not sufficiently complex it may take more time to distribute and maintain it than it would to simply duplicate. Moreover, once a component is distributed and used by multiple teams it may become difficult to modify that component without impacting those other consumers.</p>
<h2 id="overriding-cedar" tabindex="-1"><a class="header-anchor" href="#overriding-cedar">#</a> Overriding Cedar</h2>
<p>There may be cases where the Cedar design system elements do not satisfy the requirements for your application, at which point you may need to override Cedar directly or replace those elements with entirely new ones. In such cases, all of the above requirements for reusable components still apply, in addition to the following considerations and risks:</p>
<ul>
<li>You will need to manually update your component as the design system evolves, as you will no longer be able to simply update your Cedar version to pull in updates.</li>
<li>Your team will need to handle accessibility implementation and testing for your component. For some elements, especially background colors, this may have a high cost. For example, every Cedar element is guaranteed to have accessible contrast levels when rendered on our primary and secondary background colors, but we cannot make that same guarantee for arbitrary background colors.</li>
<li>If you override internal Cedar logic like markup or CSS classes your code may break even with a patch release of Cedar as we can only semantically version the public API of the elements we distribute.</li>
<li>Other teams may copy what you are doing without knowing that they are diverging from the design system, please ensure that any overrides are well documented.</li>
</ul>
</cdr-doc-table-of-contents-shell>
</template>
