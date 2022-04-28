---
{
  "title": "FAQs",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "breadcrumbs": [
    {
      "text": "Resources/"
    }
  ],
}
---

Have a question? Find answers here. For more help, email us at cedar@rei.com or on slack at <cdr-link href="https://rei.slack.com/archives/CA58YCGN4">#cedar-user-support</cdr-link>. Please note some instructions and links on this page are only intended for users at REI.

<nav>
  <cdr-list tag="ol" modifier="ordered">
    <li><cdr-link href="#cedar-setup">Cedar setup</cdr-link></li>
    <li><cdr-link href="#cedar-parts">Cedar parts</cdr-link></li>
    <li><cdr-link href="#common-errors">Common errors</cdr-link></li>
    <li><cdr-link href="#detaching-from-cedar">Detaching from Cedar</cdr-link></li>
    <li><cdr-link href="#figma">Figma</cdr-link></li>
    <li><cdr-link href="#styling">Styling</cdr-link></li>
    <li><cdr-link href="#maintenance">Maintenance</cdr-link></li>
    <li><cdr-link href="#additonal-resources">Additional resources</cdr-link></li>
  </cdr-list>
</nav>

<br/>

## Cedar setup

<cdr-accordion-group>
<faq-entry title="What is Cedar?"><cdr-text tag="p"><cdr-link href="../../about/cedar-design-system/">Read about what we offer</cdr-link> as a design system and as a team.</cdr-text></faq-entry>
<faq-entry title="Why aren’t my styles showing up?"><cdr-text tag="p"><cdr-link href="../installing-cedar/#install-required-core-styles">Read about how to install required core Cedar styles.</cdr-link></cdr-text></faq-entry>
<faq-entry title="I am on a team that doesn’t directly consume Cedar, what do I use?"><cdr-text tag="p">If your team cannot directly use and consume Vue components, you can use <cdr-link href="../../components/component-variables/">component variables</cdr-link> or <cdr-link href="../../tokens/overview/">tokens</cdr-link></cdr-text></faq-entry>
<faq-entry title="What browsers are currently supported?"><cdr-text tag="p">View the <cdr-link href="../../about/browser-support/">supported browser matrix</cdr-link>.</cdr-text></faq-entry>
<faq-entry title="How can I best load CSS on my page?"><cdr-text tag="p">Cedar distributes its CSS as individual assets and how you include CSS depends on your tech stack. Typically we recommend loading each required asset once in your page's entry point. <cdr-link href="../installing-cedar/#include-component-css">Read more about CSS</cdr-link>.</cdr-text></faq-entry>
</cdr-accordion-group>

<br/>  

## Cedar Parts

<cdr-accordion-group>
<faq-entry title="What are tokens?"><cdr-text tag="p">Tokens are an evergreen set of variables mapped to the style attributes that define the foundation of REI's visual language, including color, typography, and spacing. Tokens are maintained and distributed by Cedar—just fetch the latest version to stay in sync with the visual language of the co-op. <cdr-link href="../../tokens/overview/">Read more about tokens</cdr-link> or <cdr-link href="../../tokens/all-tokens">view all of our tokens</cdr-link>.</cdr-text></faq-entry>

<faq-entry title="How do I know when to use tokens vs components vs patterns?">
<cdr-list tag="ol" modifier="ordered" style="list-style-type: lower-alpha">
<li>Use tokens when you are customizing the style and functionality of specific elements on a page. For example, if you are designing for a desktop web experience and you are adding text into a card component, you can use our <cdr-link href="../../tokens/all-tokens#text">text tokens</cdr-link> to specify the font family, size, style, weight, height, and spacing of the text. <cdr-link href="../../tokens/overview/">Read more about tokens</cdr-link> or <cdr-link href="../../tokens/all-tokens">view all tokens</cdr-link> in our library.</li>
<li>Use components when you are adding a functional and reusable element to the page such as <cdr-link href="../../components/button">buttons</cdr-link>, <cdr-link href="../../components/card">cards</cdr-link>, <cdr-link href="../../components/radio-buttons">radio buttons</cdr-link>, and <cdr-link href="../../components/tabs">tabs</cdr-link>. You can customize component styles with modifiers and tokens.</li>
<li>Use patterns to guide your decisions when you need to solve a common design problem such as presenting <cdr-link href="../../patterns/alerts">alerts</cdr-link>, deciding on <cdr-link href="../../patterns/forms-input-types">form input types</cdr-link>, offering <cdr-link href="../../patterns/form-validation">form validation</cdr-link>, and etc. Patterns may recommend that you use different components in response to common design problem variations.</li>
</cdr-list>
</faq-entry>
</cdr-accordion-group>

<br/>  

## Common errors

<cdr-accordion-group>
<faq-entry title="How can I stop Cedar styles from overriding my custom styles?">
<cdr-text>We see this fairly often and it's typically from one of two causes:</cdr-text><br/>
<cdr-list tag="ol" modifier="ordered" style="list-style-type: lower-alpha">
<li>Check to make sure your app and all its dependencies are loading the same version of cedar. Extra versions of Cedar will typically bundle their CSS lower in the cascade and result in styles being overriden.</li>
<li>Similarily, check that you are only importing a cedar component's style asset once per page. e.g. if you are importing <code>cdr-button.css</code> in your page's entry point but also in a child component you may run in to overriden style issues.</li>
</cdr-list>
</faq-entry>
</cdr-accordion-group>

<br/>

## Detaching from Cedar

<cdr-accordion-group>
<faq-entry title="How can I contribute to Cedar?">
<cdr-list tag="ol" modifier="ordered" style="list-style-type: lower-alpha">
<li>You can find guidelines on <cdr-link href="../../about/contributing-to-cedar/">how to contribute to Cedar here</cdr-link>.</li>
<li>How can I contribute a token to Cedar?
<cdr-list tag="ol" modifier="ordered">
<li>Reach out to us on <cdr-link href="https://rei.slack.com/archives/CA58YCGN4">Slack</cdr-link> (REI internal link) or attend our weekly office hours to see how we can best support you. Then, read about <cdr-link href="../../tokens/overview/#adding-design-tokens-to-the-repository">how to add design tokens to our repository</cdr-link>.</li>
</cdr-list>
</li>
</cdr-list>
</faq-entry>
<faq-entry title="What if Cedar doesn't have what I'm looking for/ how can I build my own Cedar-compatible components?">
<cdr-list tag="ol" modifier="ordered" style="list-style-type: lower-alpha">
<li>If you don’t see what you’re looking for in components and it’s not outlined in patterns, feel free to reach out to us on <cdr-link href="https://rei.slack.com/archives/CA58YCGN4">Slack</cdr-link> (REI internal link). You can also attend our weekly office hours to make sure we don’t have any direct solutions for you. If no components or patterns are recommended, you can learn how to build your own Cedar-compatible components or customize styling on a page with tokens.</li>
<li>(Designers see: <cdr-link href="#are-there-any-shared-components-or-patterns-outside-of-cedar-that-other-teams-use?">“Are there any shared components or patterns outside of Cedar that other teams use?”</cdr-link>)</li>
</cdr-list>
</faq-entry>
<faq-entry title="When should I override Cedar?">Read about <cdr-link href="../building-components-with-cedar/#overriding-cedar">how to override Cedar</cdr-link> in our Building Reusable Components article.</faq-entry>
</cdr-accordion-group>

<br/>

## Figma

<cdr-accordion-group>
<faq-entry title="Where can I find mobile native typefaces?">
<cdr-text>Our two primary typefaces, Stuart and Graphik are available in Self-Service (be sure to get the Digital-specific TTF version). <cdr-link href="https://devimages-cdn.apple.com/design/resources/download/SF-Pro.dmg">Download the iOS native typeface SF Pro from Apple</cdr-link> and then call IT to approve the download.</cdr-text>
</faq-entry>
<faq-entry title="How can I access the Cedar libraries in Figma?">
<cdr-text>All Cedar-provided libraries will be pre-loaded when you create a new file within the REI Figma ecosystem. For more information on Cedar UI libraries, <cdr-link href="https://www.figma.com/community/file/1057372737094902305">check out this tutorial</cdr-link>.</cdr-text>
</faq-entry>
<faq-entry title="How can I add a new icon to the library?">
<cdr-text>First make sure we don’t cover your use case with <cdr-link href="../../icons/library/">one of our other icons</cdr-link>. If none of the icons satisfy your use case, copy and paste our <cdr-link href="https://www.figma.com/file/WyDv4HJx0ae3Oy5oxlvAbB/Icon-Grid?node-id=31%3A748">standard icon grid</cdr-link> into your own Figma file. Then, go ahead and design your icon according to the <cdr-link href="../../icons/overview/">icon design standards</cdr-link> we currently follow. Let the Cedar team know what you would like to add by messaging us in our <cdr-link href="https://rei.slack.com/archives/CA58YCGN4">Slack channel</cdr-link> or attending our office hours.</cdr-text>
</faq-entry>
<faq-entry title="Are there any shared components or patterns outside of Cedar that other teams use?">
<cdr-text><cdr-link href="https://www.figma.com/file/5R0ElfCIEJbRJx2tKzlA7s/Greenhouse?node-id=1753%3A2703">Greenhouse</cdr-link> is a shared Figma library of experimental components and patterns that are being tried and tested by product teams before they potentially make their way into Cedar. </cdr-text>
</faq-entry>
</cdr-accordion-group>

<br />

## Styling

<cdr-accordion-group>
<faq-entry title="Can I add different content to a card?">
<cdr-text>Yes, a card is just a container so any content can be added to it. Read more about <cdr-link href="../../components/card/#customizing-cards">how to customize cards</cdr-link>.</cdr-text>
</faq-entry>
<faq-entry title="Do we have a carousel component in Cedar?">
<cdr-text>Not at the moment, but we do have documentation on <cdr-link href="../../components/filmstrip/">creating a filmstrip compositional component using Cedar</cdr-link> which might suit your needs.</cdr-text>
</faq-entry>
</cdr-accordion-group>

<br/>

## Maintenance

<cdr-accordion-group>
<faq-entry title="Do you store past Cedar version release notes?">
<cdr-text>Find past release notes under the “Release Notes” category in Cedar’s documentation site navigation. </cdr-text>
</faq-entry>
<faq-entry title="Do we have information about our deprecated features?">
<cdr-text>Yes! View a <cdr-link href="../../release-notes/deprecated/">list of deprecated features</cdr-link>.</cdr-text>
</faq-entry>
</cdr-accordion-group>

<br />

## Additional resources

<cdr-accordion-group>
<faq-entry title="Do we have guidelines for the hand-off process between designers and developers?">
<cdr-text>Sure do. Check out our <cdr-link href="../hand-off/#developer-review">article on the hand-off process here</cdr-link>.</cdr-text>
</faq-entry>
<faq-entry title="Do we have copy or content guidelines?">
<cdr-text>You can find REI’s <cdr-link href="https://confluence.rei.com/pages/viewpage.action?spaceKey=DRCREAT&title=UX+Copy+Best+Practices">UX copy best practices here</cdr-link>.</cdr-text>
</faq-entry>
<faq-entry title="Where can I find illustrations?">
<cdr-text>Illustrations are not currently part of Cedar, but they’re an evolving part of the REI brand expression. You can <cdr-link href="https://reiweb.sharepoint.com/sites/ProductDesignPractice/SitePages/How-to-request-custom-illustration-assets-for-a-digital-UX-project.aspx">fill out a form</cdr-link> to request custom illustrations.</cdr-text>
</faq-entry>
<faq-entry title="How can I get additional help from Cedar?">
<cdr-text>We are happy to answer questions and support you as you design or develop at REI. Contact us by messaging us in our <cdr-link href="https://rei.slack.com/archives/CA58YCGN4">Slack channel</cdr-link> or attending our office hours. Reach out to us in Slack for an invite to our office hours if you do not have it.</cdr-text>
</faq-entry>
</cdr-accordion-group>

<br/><br/>  
