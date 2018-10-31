---
{
  "title": "Accessibility",
  "title_metadata": false,
  "layout": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Foundation/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell>

At REI we believe that the outdoors is for all. Delivering valuable, inspirational, and accessible experiences for all kinds of users, including those with disabilities, is everyone's responsibility.

The Cedar Design System is committed to designing and developing components, tokens, utilities, and styles that will help ensure that REI’s digital products meet or exceed the World Wide Web Consortium’s Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. 

The design and development of Cedar is a starting point to incorporate required accessibility standards into our website.  REI's aim is to make our digital products accessible and usable for all our customers, including those with disabilities. For more information about REI's position on accessibility, view the [Accessibility Statement](https://confluence.rei.com/pages/viewpage.action?spaceKey=EQA&title=Drafting+an+Accessibility+Statement). 

However, how you use Cedar also affects the accessibility of a product. Read this page to learn about accessibility in general. Then, while you're working, use the accessibility guidelines for each Cedar component to help you make products that anyone can use.

## Why does accessibility matter?
Designing for accessibility means being inclusive to the needs of our users - including our target users, users outside our target demographic, users with disabilities, and even users from different cultures and countries. Understanding those needs is the key to creating better and more accessible experiences for all users. 

Disabilities can be a mismatch between one's ability and one's environment. Some examples are: 
- **Situational:** A person with typical vision might struggle to view a screen in a bright environment
- **Temporary:** A person with a broken wrist may struggle to use a laptop and phone while recovering from an accident
- **Long-lasting:** This is what people typically think of when they hear "disability”

### Main categories of disabilities
- **Physical:** Users with physical or motor disabilities may have difficulty with mouse devices. Provide full keyboard access support. Other assistive technologies include braille keyboards or voice commands
- **Visual:** Users with low vision have difficulty when there is insufficient color contrast. Users with color blindness have difficulty with color-based selections. Provide text alternatives for icon and images for screen readers
- **Auditory:** Users with hearing disabilities will have difficulty with audio or video content. Provide a captions or transcript
- **Cognitive and neurological:** Users may have difficulty with complex navigation or page layouts. Provide a structured layout that is semantically correct. This is  the largest single group of disabilities worldwide and includes:
  - Clinical diagnoses such as autism or traumatic brain injury
  - Less severe cognition conditions such as ADD or dyslexia 
 
## How to make your product accessible
Most accessibility principles can be implemented easily and will not impact the overall “look and feel” of REI’s website. Some of the key principles are:
- Ensuring that content is available through sight, hearing or touch
- Compatibility with keyboard or mouse navigation
- Ensuring content is understandable:
    - An acceptable reading ease score of 60-70
    - Consistent usage of navigation, icons, and terminology used across the site
    - Users can avoid and correct mistakes

Cedar components have accessibility attributes built in and provides guidelines for best practices in component documentation. The product team needs to ensure accessibility compliance when implementing Cedar components. This is a shared responsibility. The below table describes what is provided by Cedar and what is the product team's responsibility.

| **Key principles**                                       | **Cedar provides**                                                     | **Product team provides**                                              |
| -------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Provide appropriate alternative text                     | CdrImage provides empty **&lt;alt&gt;** attribute.                     | Write alt text to provide an equivalent to the image content, to convey information or explain actions or to describe a link’s function.    |
| Content is well structured and clearly written           | CdrText separates CSS styles from semantic structure and provides max width container and line-height spacing for readability.    | Organize content using true headings (e.g., <h1>) and lists. Use illustrations, icons, etc. to supplement text. Check spelling, grammar, and readability.    |
| Help users navigate to relevant content                  | CdrText and CdrList separates CSS styles from semantic structure.     | Use existing REI website controls that allow the user to skip over navigation to the main content in the page. Use true headings to organize content.    |
| Provide headers for data tables                          | CdrDataTable provides ‘caption’ prop.                                 | Write captions to describe table contents. Use scope attribute to define column or row headers.    |
| Do not rely on color alone to convey meaning             | Cedar’s color tokens ensure that color contrasts meet or exceed a Level AA contrast ratio of 4.5:1 contrast between the text color and the background.     | Use Cedar’s color tokens appropriately. For instance, use dark text colors only on light background colors.Use color to enhance comprehension but do not use color alone to convey information.    |
| Ensure users can complete and submit all forms           | CdrInput requires a label and positions it adjacent to input fields. If label is hidden, CdrInput sets the ‘aria-label’ to this label value. CdrInput can display ‘Required’ next to the label.     | Group checkboxes or radio buttons using <fieldset> tags.    |
| Ensure links make sense out of context                   | CdrLink provides ‘cdr-sr-only’ class that can hide descriptive text but make it available for screen readers.    | Avoid phrases such as “click here” or “start here” for links.    |
| Caption and/or provide transcripts for media             |                                                                       | Write captions and transcripts for video or audio.                     |
| Ensure accessibility of non-HTML content                 |                                                                       | Provide accessibility alternatives when appropriate.                   |
| Miscellaneous                                            |                                                                       | Ensure that the page is readable and usable when fonts are enlarged 150-200%.    |
| Miscellaneous                                            |                                                                       | Provide a descriptive page **&lt;title&gt;** attribute.                |
| Miscellaneous                                            |                                                                       | Ensure events are available with both mouse and keyboard.              |
| Miscellaneous                                            |                                                                       | Limit pop-up windows and notify users when pop-ups are used.           |
<br />

## Testing and validating 
Cedar Design System is only the foundation for accessible application development. We recommend that you review the accessibility of your web pages before release and ensure that it meets the WCAG 2.1 Guidelines at the AA Level.

We also recommend that you:
- Test all web pages using various assistive technologies
- Include users with impairments when user testing
- Ensure that tasks can be accomplished by anyone, regardless of ability
 
Cedar is working in tandem with the Accessibility team to provide standard testing processes for components and applications.

## Information about specific disabilities
 
### Cognitive disabilities
 
Cognitive disabilities include difficulties with: 
- Memory
- Problem-solving
- Attention
- Reading
- Linguistic
- Deficits for verbal, math, or visual comprehension

These disabilities range from mild, moderate or severe. Many people have one or more cognitive disability. People with this disability represents perhaps the largest disability group. Ensuring accessibility for this group is often forgotten or an afterthought.

Resources for understanding cognitive disabilities:
- WebAIM: Cognitive Disabilities
- Carnegie Museums of Pittsburgh, Innovation Studio: Web Accessibility Guidelines v1.0: [Cognitive Disabilities](http://web-accessibility.carnegiemuseums.org/content/cognitive/)
- Carleton College, Web Services Group: [Writing for Readability and Accessibility](https://apps.carleton.edu/campus/webgroup/training/accessibility/readability/)

### Color
Color contrast has an impact for all users and especially for users with visual, physical, and cognitive disabilities. 
- Cedar complies with [WCAG 2.1 AA standard contrast ratios](http://www.w3.org/TR/WCAG/). Follow recommendations for color pairings on the [Color](https://rei.github.io/rei-cedar-docs/foundation/color/) page 
- For gradient backgrounds or images, check contrast ratios using WebAIM’s [Color Contrast Checker](https://webaim.org/resources/contrastchecker/) 
 
#### Designing for color blindness
Color blindness involves difficulty in distinguishing between colors, and sensitivity to color brightness. It affects approximately 1 in 12 men and 1 in 200 women worldwide.
 
Don't convey information using color alone. Use multiple visual cues, such as stroke weight, patterns, shape, or text. 
 
When designing with color, use a color-blind simulator to review visibility of content. 
- If you're working in Sketch, we recommend the [Stark plugin](http://www.getstark.co/)
- Test an image by uploading it to the Coblis, [Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/) web page
 
<cdr-img class="cdr-doc-article-img" alt="Non-color blind user versus color-blind user":src="$withBase(`/accessibility/Accessibility__ColorBlindness__16-9.png`)"/>
Non-color blind user versus color-blind user

#### Designing for low vision 
Low vision can include partial sight in one or both eyes, and range from mild to severe. It affects 246 million people, or about 4% of the world’s population. To design for users with low-vision disability:
- Follow keyboard navigation recommendations
- Organize the web page in a logical order
 
## Resources
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)
- WebAIM: [Introduction to Web Accessibility](https://webaim.org/intro/)
- WebAIM: [Semantic Structure](https://webaim.org/techniques/semanticstructure/)
 
## Tools
Below are a collection of tools that can be used for accessibility testing: 
- For testing readability level:
    - [Hemingway Editor](http://www.hemingwayapp.com/)
- For testing keyboard interactions:
    - WebAIM: [Keyboard Accessibility: Keyboard Testing table](https://webaim.org/techniques/keyboard/#testing)
- For images and writing alternative text:
    - Web Accessibility Tutorials: [Image Tutorials: An Alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- For checking visual disability issues:
    - WebAIM: [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
    - Colblindor: Coblis: [Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
    - Chrome Web Store: [High Contrast Chrome plugin](https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph/related?hl=en)
    - Chrome Web Store: [NoCoffee vision simulator](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl)
    - Axe Browser Extension for easy accessibility testing: [axe Accessibility Testing](https://www.deque.com/axe/)

</cdr-doc-table-of-contents-shell>
