<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<p>At REI we believe that the outdoors is for all. Delivering valuable, inspirational, and accessible experiences for all kinds of users, including those with disabilities, is everyone's responsibility.</p>
<p>The Cedar Design System is committed to designing and developing components, tokens, and styles that will help ensure that REI’s digital products meet or exceed the World Wide Web Consortium’s Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.</p>
<p>The design and development of Cedar is a starting point to incorporate required accessibility standards into our website.  REI's aim is to make our digital products accessible and usable for all our customers, including those with disabilities. For more information about REI's position on accessibility, view the <a href="https://www.rei.com/accessibility" target="_blank" rel="noopener noreferrer">Accessibility Statement<ExternalLinkIcon/></a>.</p>
<p>However, how you use Cedar also affects the accessibility of a product. Read this page to learn about accessibility in general. Then, while you're working, use the accessibility guidelines for each Cedar component to help you make products that anyone can use.</p>
<h2 id="why-does-accessibility-matter" tabindex="-1"><a class="header-anchor" href="#why-does-accessibility-matter">#</a> Why Does Accessibility Matter?</h2>
<p>Designing for accessibility means being inclusive to the needs of our users - including our target users, users outside our target demographic, users with disabilities, and even users from different cultures and countries. Understanding those needs is the key to creating better and more accessible experiences for all users.</p>
<p>Disabilities can be a mismatch between one's ability and one's environment. Some examples are:</p>
<ul>
<li><strong>Situational:</strong> A person with typical vision might struggle to view a screen in a bright environment</li>
<li><strong>Temporary:</strong> A person with a broken wrist may struggle to use a laptop and phone while recovering from an accident</li>
<li><strong>Long-lasting:</strong> A person with physical or any other limitation that lasts for a longer time</li>
</ul>
<h2 id="how-to-make-your-product-accessible" tabindex="-1"><a class="header-anchor" href="#how-to-make-your-product-accessible">#</a> How to Make Your Product Accessible</h2>
<p>Most accessibility principles can be implemented easily and will not impact the overall “look and feel” of REI’s website. Some of the key principles are:</p>
<ul>
<li>Ensuring that content is available through sight, hearing, or touch</li>
<li>Compatibility with keyboard or mouse navigation</li>
<li>Ensuring content is understandable:
<ul>
<li>An acceptable reading ease score of 60-70</li>
<li>Consistent usage of navigation, icons, and terminology used across the site</li>
<li>Users can avoid and correct mistakes</li>
</ul>
</li>
</ul>
<p>Cedar components have accessibility attributes built in and provides guidelines for best practices in component documentation. The product team needs to ensure accessibility compliance when implementing Cedar components. This is a shared responsibility. The below table describes what is provided by Cedar and what is the product team's responsibility.</p>
<table>
<thead>
<tr>
<th><strong>Key principles</strong></th>
<th><strong>Cedar provides</strong></th>
<th><strong>Product team provides</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Provide appropriate alternative text</td>
<td><strong>CdrImage</strong> provides empty <code>alt</code> attribute.</td>
<td>Write alt text to provide an equivalent to the image content. <br/><br/> Write alt text to convey information or explain actions. <br/><br/> Write alt text to describe a link’s function.</td>
</tr>
<tr>
<td>Content is well structured and clearly written</td>
<td><strong>CdrText</strong> separates CSS styles from semantic structure. <br/><br/> <strong>CdrText</strong> provides max width container and line-height spacing for readability.</td>
<td>Organize content using true headings (e.g., <code>&lt;h1&gt;</code>) and lists. <br/><br/> Use illustrations, icons, etc. to supplement text. <br/><br/> Check spelling, grammar, and readability.</td>
</tr>
<tr>
<td>Help users navigate to relevant content</td>
<td><strong>CdrText</strong> and <strong>CdrList</strong> separates CSS styles from semantic structure. <br/><br/> <strong>CdrTabs</strong> has keyboard interactions built into the component for the user to move focus between tabs, into the tab content, and back to the selected tab.</td>
<td>Use existing REI website controls that allow the user to skip over navigation to the main content in the page. <br/><br/> Use true headings to organize content.</td>
</tr>
<tr>
<td>Provide headers for data tables</td>
<td><strong>CdrDataTable</strong> provides <code>caption</code> prop.</td>
<td>Write captions to describe table contents. <br/><br/> Use scope attribute to define column or row headers.</td>
</tr>
<tr>
<td>Do not rely on color alone to convey meaning</td>
<td>Cedar’s color tokens ensure that color contrasts meet or exceed a Level AA contrast ratio of 4.5:1 contrast between the text color and the background.</td>
<td>Use Cedar’s color tokens appropriately. For instance, use dark text colors only on light background colors. <br/><br/> Use color to enhance comprehension but do not use color alone to convey information.</td>
</tr>
<tr>
<td>Ensure users can complete and submit all forms</td>
<td><strong>CdrInput</strong> requires a label and positions it adjacent to input fields. <br/><br/> If label is hidden, <strong>CdrInput</strong> sets the <code>aria-label</code> to this label value. <br/><br/> <strong>CdrInput</strong> can display &quot;Required&quot; next to the label.</td>
<td>Group checkboxes or radio buttons using CdrFormGroup.</td>
</tr>
<tr>
<td>Ensure links make sense out of context</td>
<td><strong>CdrLink</strong> provides <code>cdr-sr-only</code> class that can hide descriptive text but make it available for screen readers.</td>
<td>Avoid phrases such as “click here” or “start here” for links.</td>
</tr>
<tr>
<td>Caption and/or provide transcripts for media</td>
<td></td>
<td>Write captions and transcripts for video or audio.</td>
</tr>
<tr>
<td>Ensure accessibility of non-HTML content</td>
<td></td>
<td>Provide accessibility alternatives when appropriate.</td>
</tr>
<tr>
<td>Miscellaneous</td>
<td></td>
<td>Ensure that the page is readable and usable when fonts are enlarged 150-200%. <br/><br/> Provide a descriptive page <code>title</code> attribute. <br/><br/> Ensure events are available with both mouse and keyboard. <br/><br/> Limit pop-up windows and notify users when pop-ups are used.</td>
</tr>
</tbody>
</table>
<br />
<h2 id="testing-and-validating" tabindex="-1"><a class="header-anchor" href="#testing-and-validating">#</a> Testing and Validating</h2>
<p>Cedar Design System is only the foundation for accessible application development. We recommend that you review the accessibility of your web pages before release and ensure that it meets the WCAG 2.1 Guidelines at the AA Level.</p>
<p>We also recommend that you:</p>
<ul>
<li>Test all web pages using various assistive technologies</li>
<li>Include users with impairments when user testing</li>
<li>Ensure that tasks can be accomplished by anyone, regardless of ability</li>
</ul>
<p>Cedar is working in tandem with the Accessibility team to provide standard testing processes for components and applications.</p>
<h2 id="information-about-specific-disabilities" tabindex="-1"><a class="header-anchor" href="#information-about-specific-disabilities">#</a> Information About Specific Disabilities</h2>
<h3 id="auditory" tabindex="-1"><a class="header-anchor" href="#auditory">#</a> Auditory</h3>
<ul>
<li>Users with hearing disabilities will have difficulty with audio or video content</li>
<li>Provide captions or a transcript</li>
</ul>
<h3 id="cognitive" tabindex="-1"><a class="header-anchor" href="#cognitive">#</a> Cognitive</h3>
<ul>
<li>
<p>This is the largest single group of disabilities worldwide and these users may have difficulty with:</p>
<ul>
<li>Complex interaction processes or complex navigation, such as people with memory deficits</li>
<li>Understanding how to recover from a mistake, such as people with problem-solving deficits</li>
<li>Understanding what is important or getting distracted, such as people with attention deficits</li>
<li>Reading, such as people with dyslexia</li>
<li>Understanding math computations, such as people with math comprehension deficits</li>
<li>Understanding visual computations, such as people with visual comprehension deficits</li>
</ul>
</li>
<li>
<p>Ensuring accessibility for this group is often forgotten or an afterthought. Resources for understanding cognitive disabilities:</p>
<ul>
<li>WebAIM: <a href="https://webaim.org/articles/cognitive/" target="_blank" rel="noopener noreferrer">Cognitive Disabilities<ExternalLinkIcon/></a></li>
<li>Carnegie Museums of Pittsburgh, Innovation Studio: Web Accessibility Guidelines v1.0: <a href="http://web-accessibility.carnegiemuseums.org/content/cognitive/" target="_blank" rel="noopener noreferrer">Cognitive Disabilities<ExternalLinkIcon/></a></li>
<li>Carleton College, Web Services Group: <a href="https://apps.carleton.edu/campus/webgroup/training/accessibility/readability/" target="_blank" rel="noopener noreferrer">Writing for Readability and Accessibility<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="physical" tabindex="-1"><a class="header-anchor" href="#physical">#</a> Physical</h3>
<ul>
<li>Users with physical or motor disabilities may have difficulty with mouse devices</li>
<li>Provide full keyboard access support</li>
<li>Other assistive technologies include braille keyboards or voice commands</li>
</ul>
<h3 id="visual" tabindex="-1"><a class="header-anchor" href="#visual">#</a> Visual</h3>
<ul>
<li>
<p>Users with visual disabilities may have difficulty with:</p>
<ul>
<li>Making color-based selections or understanding color-coded content, such as people with color blindness</li>
<li>Viewing content that has insufficient color contrast, such as people with low vision</li>
<li>Viewing the entire screen, such as people with glaucoma or macular degeneration</li>
</ul>
</li>
<li>
<p>Color contrast has an impact for all users and especially for users with visual, physical, and cognitive disabilities</p>
<ul>
<li>Follow recommendations for color pairings on the <a href="https://rei.github.io/rei-cedar-docs/foundation/color/" target="_blank" rel="noopener noreferrer">Color<ExternalLinkIcon/></a> page</li>
<li>For gradient backgrounds or images, check contrast ratios using WebAIM’s <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">Color Contrast Checker<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h4 id="designing-for-color-blindness" tabindex="-1"><a class="header-anchor" href="#designing-for-color-blindness">#</a> Designing for Color Blindness</h4>
<p>Color blindness involves difficulty in distinguishing between colors and sensitivity to color brightness. It affects approximately 1 in 12 men and 1 in 200 women worldwide.</p>
<p>Don't convey information using color alone. Use multiple visual cues, such as stroke weight, patterns, shape, or text.</p>
<p>When designing with color, use a color-blind simulator to review visibility of content.</p>
<ul>
<li>If you're working in Sketch, we recommend the <a href="http://www.getstark.co/" target="_blank" rel="noopener noreferrer">Stark plugin<ExternalLinkIcon/></a></li>
<li>Test an image by uploading it to the Coblis, <a href="https://www.color-blindness.com/coblis-color-blindness-simulator/" target="_blank" rel="noopener noreferrer">Color Blindness Simulator<ExternalLinkIcon/></a> web page</li>
</ul>
<cdr-img class="cdr-doc-article-img" style="margin-bottom: 0" alt="Non-color blind user versus color-blind user":src="$withBase(`/accessibility/Accessibility__ColorBlindness__16-9.png`)"/>
Non-color blind user versus color-blind user
<h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources">#</a> Resources</h2>
<ul>
<li><a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines (WCAG) 2.1<ExternalLinkIcon/></a></li>
<li>WebAIM: <a href="https://webaim.org/intro/" target="_blank" rel="noopener noreferrer">Introduction to Web Accessibility<ExternalLinkIcon/></a></li>
<li>WebAIM: <a href="https://webaim.org/techniques/semanticstructure/" target="_blank" rel="noopener noreferrer">Semantic Structure<ExternalLinkIcon/></a></li>
</ul>
<h2 id="tools" tabindex="-1"><a class="header-anchor" href="#tools">#</a> Tools</h2>
<p>Below are a collection of tools that can be used for accessibility testing:</p>
<ul>
<li>
<p>For testing readability level:</p>
<ul>
<li><a href="http://www.hemingwayapp.com/" target="_blank" rel="noopener noreferrer">Hemingway Editor<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<p>For testing keyboard interactions:</p>
<ul>
<li>WebAIM: <a href="https://webaim.org/techniques/keyboard/#testing" target="_blank" rel="noopener noreferrer">Keyboard Accessibility: Keyboard Testing<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<p>For images and writing alternative text:</p>
<ul>
<li>Web Accessibility Tutorials: <a href="https://www.w3.org/WAI/tutorials/images/decision-tree/" target="_blank" rel="noopener noreferrer">Image Tutorials: An alt Decision Tree<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<p>For checking visual disability issues:</p>
<ul>
<li>WebAIM: <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">Color Contrast Checker<ExternalLinkIcon/></a></li>
<li>Colblindor: Coblis: <a href="https://www.color-blindness.com/coblis-color-blindness-simulator/" target="_blank" rel="noopener noreferrer">Color Blindness Simulator<ExternalLinkIcon/></a></li>
<li>Chrome Web Store: <a href="https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph/related?hl=en" target="_blank" rel="noopener noreferrer">High Contrast Chrome plugin<ExternalLinkIcon/></a></li>
<li>Chrome Web Store: <a href="https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl" target="_blank" rel="noopener noreferrer">NoCoffee vision simulator<ExternalLinkIcon/></a></li>
<li>Axe Browser Extension for easy accessibility testing: <a href="https://www.deque.com/axe/" target="_blank" rel="noopener noreferrer">axe Accessibility Testing<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
</cdr-doc-table-of-contents-shell>
</template>
