<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<p>One of the best ways to influence the visual language of the Co-op’s digital products is by contributing to the design system. We welcome feedback, designs, code, and ideas from the REI digital community, in order to produce the best possible experience for our customers.</p>
<p>There are many ways to contribute to Cedar—new components, enhancements, and bug fixes will all be accepted for consideration. Cedar welcomes contributions to the system that meet brand and quality standards, and can be reused by two or more teams.</p>
<p>See the guidelines mentioned below on this page for more information about contributions, and reach out using <a href="https://rei.slack.com/messages/CA58YCGN4" target="_blank" rel="noopener noreferrer">#cedar-user-support<ExternalLinkIcon/></a> if you have any questions.</p>
<h2 id="component-contributions" tabindex="-1"><a class="header-anchor" href="#component-contributions">#</a> Component Contributions</h2>
<p>When creating a new component, first reach out to the Cedar team to see if the component is already under development in the <a href="https://issues.rei.com/secure/RapidBoard.jspa?rapidView=1996" target="_blank" rel="noopener noreferrer">Cedar backlog<ExternalLinkIcon/></a> or if exists in a shared repo. If not, the Cedar team can help advise on how to <RouterLink to="/getting-started/building-components-with-cedar/">build resuable components</RouterLink> using REI design foundations and system assets, so that it can be pulled into the system in the future.</p>
<p>If you have a request for the Cedar team, please submit it in <a href="https://rei.slack.com/messages/CA58YCGN4" target="_blank" rel="noopener noreferrer">#cedar-user-support<ExternalLinkIcon/></a> or come and talk to us during our weekly office hours.</p>
<h3 id="design" tabindex="-1"><a class="header-anchor" href="#design">#</a> Design</h3>
<p>New component designs can be added to the <a href="https://www.figma.com/file/5R0ElfCIEJbRJx2tKzlA7s/Greenhouse?node-id=1673%3A4" target="_blank" rel="noopener noreferrer">Greenhouse library in Figma<ExternalLinkIcon/></a>. Greenhouse is an internal library where designers can add new components, variants, and patterns to share with the community. The Cedar team will help facilitate additions to Greenhouse, and monitor the library for potential contributions to the design system.</p>
<h3 id="code" tabindex="-1"><a class="header-anchor" href="#code">#</a> Code</h3>
<p>Contribution candidates should be built using Cedar <RouterLink to="/tokens/overview/">Design Tokens</RouterLink> and Components, so that they can easily be pulled into the system.
Include relevant information in the readme file, which will be used for future documentation. Once added to Cedar, the design system team will take over all future maintenance and updates.</p>
<p>If you are working on a component or feature that can be shared with other projects, utilize design tokens to build it and add it to the <a href="https://git.rei.com/projects/FEDCOMP" target="_blank" rel="noopener noreferrer">fed-components repository<ExternalLinkIcon/></a>. The design system team will be looking at the fed-components repository for candidates to add to the system.</p>
<h3 id="bug-fixes" tabindex="-1"><a class="header-anchor" href="#bug-fixes">#</a> Bug Fixes</h3>
<p>The Cedar team is committed to maintaining consistent, quality components. If you encounter an issue, please submit it on <a href="https://rei.slack.com/messages/CA58YCGN4" target="_blank" rel="noopener noreferrer">#cedar-user-support<ExternalLinkIcon/></a> or come and talk to us during our weekly office hours.</p>
<p>The team will address the bug as soon as possible, depending on the severity of the issue and sprint capacity. Please include as much relevant information as possible when submitting a bug report, including steps to reproduce, urgency, and impact to help us prioritize. If the bug is present on a try server or branch it is especially helpful to include links to those so we can quickly assess the issue.</p>
<p>If you have a fix for a bug and would like to submit a pull request for it, reach out in the <a href="https://rei.slack.com/messages/CA58YCGN4" target="_blank" rel="noopener noreferrer">#cedar-user-support<ExternalLinkIcon/></a> Slack channel so we can work with you on submitting a PR.</p>
<h2 id="token-contributions" tabindex="-1"><a class="header-anchor" href="#token-contributions">#</a> Token Contributions</h2>
<p>If you have a request for a new token, let us know in <a href="https://rei.slack.com/messages/CA58YCGN4" target="_blank" rel="noopener noreferrer">#cedar-user-support<ExternalLinkIcon/></a> or come and talk to us during our weekly office hours.</p>
<p>You can also create a new token in the <a href="https://git.rei.com/projects/FEDPACK/repos/shared-tokens/browse" target="_blank" rel="noopener noreferrer">shared-tokens repository<ExternalLinkIcon/></a> for future integration in Cedar.</p>
<p>Ensure that the token meets the following requirements:</p>
<ul>
<li>Token is used in several components or layouts</li>
<li>Token is used for multiple elements and NOT specific to one element</li>
<li>Token name will continue to have the same semantic meaning in future releases</li>
<li>Token name uses the following platform requirements:
<ul>
<li>Web: Uses Kebab case. For example, cdr-color-background-primary</li>
<li>iOS: Uses Pascal case. For example, CdrColorBackgroundPrimary</li>
<li>Android: Uses Snake case. For example, cdr_color_background_primary</li>
</ul>
</li>
</ul>
<p>Learn more in the <RouterLink to="/tokens/overview/">Design Tokens</RouterLink> overview.</p>
<h2 id="icon-contributions" tabindex="-1"><a class="header-anchor" href="#icon-contributions">#</a> Icon Contributions</h2>
<p>Cedar welcomes and encourages contributions to the icon library that are consistent with the REI style.</p>
<p>Learn more about designing and contributing icons in the <RouterLink to="/icons/overview/">Icon Overview</RouterLink> article.</p>
</cdr-doc-table-of-contents-shell>
</template>
