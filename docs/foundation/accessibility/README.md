---
{
  "title": "Accessibility",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Foundation/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

At REI we believe that the outdoors is for all. Delivering valuable, inspirational, and accessible experiences for all kinds of users, including those with disabilities, is everyone's responsibility.

The Cedar Design System is committed to designing and developing components, tokens, and styles that will help ensure that REI’s digital products meet or exceed the World Wide Web Consortium’s Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.

The design and development of Cedar is a starting point to incorporate required accessibility standards into our website.  REI's aim is to make our digital products accessible and usable for all our customers, including those with disabilities. For more information about REI's position on accessibility, view the [Accessibility Statement](https://www.rei.com/accessibility).

However, how you use Cedar also affects the accessibility of a product. Read this page to learn about accessibility in general. Then, while you're working, use the accessibility guidelines for each Cedar component to help you make products that anyone can use.

## Why Does Accessibility Matter?
Designing for accessibility means being inclusive to the needs of our users - including our target users, users outside our target demographic, users with disabilities, and even users from different cultures and countries. Understanding those needs is the key to creating better and more accessible experiences for all users.

Disabilities can be a mismatch between one's ability and one's environment. Some examples are:
- **Situational:** A person with typical vision might struggle to view a screen in a bright environment
- **Temporary:** A person with a broken wrist may struggle to use a laptop and phone while recovering from an accident
- **Long-lasting:** A person with physical or any other limitation that lasts for a longer time

## How to Make Your Product Accessible
Most accessibility principles can be implemented easily and will not impact the overall “look and feel” of REI’s website. Some of the key principles are:
- Ensuring that content is available through sight, hearing, or touch
- Compatibility with keyboard or mouse navigation
- Ensuring content is understandable:
    - An acceptable reading ease score of 60-70
    - Consistent usage of navigation, icons, and terminology used across the site
    - Users can avoid and correct mistakes

Cedar components have accessibility attributes built in and provides guidelines for best practices in component documentation. The product team needs to ensure accessibility compliance when implementing Cedar components. This is a shared responsibility. The below table describes what is provided by Cedar and what is the product team's responsibility.

| **Key principles**                                       | **Cedar provides**                                                     | **Product team provides**                                              |
| -------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Provide appropriate alternative text                     | **CdrImage** provides empty `alt` attribute.                     | Write alt text to provide an equivalent to the image content. <br/><br/> Write alt text to convey information or explain actions. <br/><br/> Write alt text to describe a link’s function.   |
| Content is well structured and clearly written           | **CdrText** separates CSS styles from semantic structure. <br/><br/> **CdrText** provides max width container and line-height spacing for readability.    | Organize content using true headings (e.g., `<h1>`) and lists. <br/><br/> Use illustrations, icons, etc. to supplement text. <br/><br/> Check spelling, grammar, and readability.    |
| Help users navigate to relevant content                  | **CdrText** and **CdrList** separates CSS styles from semantic structure. <br/><br/> **CdrTabs** has keyboard interactions built into the component for the user to move focus between tabs, into the tab content, and back to the selected tab.    | Use existing REI website controls that allow the user to skip over navigation to the main content in the page. <br/><br/> Use true headings to organize content.    |
| Provide headers for data tables                          | **CdrDataTable** provides `caption` prop.                                 | Write captions to describe table contents. <br/><br/> Use scope attribute to define column or row headers.     |
| Do not rely on color alone to convey meaning             | Cedar’s color tokens ensure that color contrasts meet or exceed a Level AA contrast ratio of 4.5:1 contrast between the text color and the background.     | Use Cedar’s color tokens appropriately. For instance, use dark text colors only on light background colors. <br/><br/> Use color to enhance comprehension but do not use color alone to convey information.    |
| Ensure users can complete and submit all forms           | **CdrInput** requires a label and positions it adjacent to input fields. <br/><br/> If label is hidden, **CdrInput** sets the `aria-label` to this label value. <br/><br/> **CdrInput** can display "Required" next to the label.     | Group checkboxes or radio buttons using CdrFormGroup.    |
| Ensure links make sense out of context                   | **CdrLink** provides `cdr-sr-only` class that can hide descriptive text but make it available for screen readers.    | Avoid phrases such as “click here” or “start here” for links.    |
| Caption and/or provide transcripts for media             |                                                                       | Write captions and transcripts for video or audio.                     |
| Ensure accessibility of non-HTML content                 |                                                                       | Provide accessibility alternatives when appropriate.                   |
| Miscellaneous                                            |                                                                       | Ensure that the page is readable and usable when fonts are enlarged 150-200%. <br/><br/> Provide a descriptive page `title` attribute. <br/><br/> Ensure events are available with both mouse and keyboard. <br/><br/> Limit pop-up windows and notify users when pop-ups are used.    |

<br />

## Testing and Validating
Cedar Design System is only the foundation for accessible application development. We recommend that you review the accessibility of your web pages before release and ensure that it meets the WCAG 2.1 Guidelines at the AA Level.

We also recommend that you:
- Test all web pages using various assistive technologies
- Include users with impairments when user testing
- Ensure that tasks can be accomplished by anyone, regardless of ability

Cedar is working in tandem with the Accessibility team to provide standard testing processes for components and applications.

## Information About Specific Disabilities

### Auditory
- Users with hearing disabilities will have difficulty with audio or video content
- Provide captions or a transcript

### Cognitive
- This is the largest single group of disabilities worldwide and these users may have difficulty with:
    - Complex interaction processes or complex navigation, such as people with memory deficits    
    - Understanding how to recover from a mistake, such as people with problem-solving deficits    
    - Understanding what is important or getting distracted, such as people with attention deficits   
    - Reading, such as people with dyslexia   
    - Understanding math computations, such as people with math comprehension deficits    
    - Understanding visual computations, such as people with visual comprehension deficits

- Ensuring accessibility for this group is often forgotten or an afterthought. Resources for understanding cognitive disabilities:
    - WebAIM: [Cognitive Disabilities](https://webaim.org/articles/cognitive/)
    - Carnegie Museums of Pittsburgh, Innovation Studio: Web Accessibility Guidelines v1.0: [Cognitive Disabilities](http://web-accessibility.carnegiemuseums.org/content/cognitive/)  
    - Carleton College, Web Services Group: [Writing for Readability and Accessibility](https://apps.carleton.edu/campus/webgroup/training/accessibility/readability/)

### Physical
- Users with physical or motor disabilities may have difficulty with mouse devices
- Provide full keyboard access support
- Other assistive technologies include braille keyboards or voice commands

### Visual
- Users with visual disabilities may have difficulty with:
    - Making color-based selections or understanding color-coded content, such as people with color blindness
    - Viewing content that has insufficient color contrast, such as people with low vision
    - Viewing the entire screen, such as people with glaucoma or macular degeneration


- Color contrast has an impact for all users and especially for users with visual, physical, and cognitive disabilities
    - Follow recommendations for color pairings on the [Color](https://rei.github.io/rei-cedar-docs/foundation/color/) page   
    - For gradient backgrounds or images, check contrast ratios using WebAIM’s [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

#### Designing for Color Blindness
Color blindness involves difficulty in distinguishing between colors and sensitivity to color brightness. It affects approximately 1 in 12 men and 1 in 200 women worldwide.

Don't convey information using color alone. Use multiple visual cues, such as stroke weight, patterns, shape, or text.

When designing with color, use a color-blind simulator to review visibility of content.

- If you're working in Sketch, we recommend the [Stark plugin](http://www.getstark.co/)
- Test an image by uploading it to the Coblis, [Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/) web page

<cdr-img class="cdr-doc-article-img" style="margin-bottom: 0" alt="Four columns with various color shades to compare how color appears to a user who is color blind user versus a user who is not":src="$withBase(`/accessibility/Accessibility__ColorBlindness__16-9.png`)"/>
Non-color blind user versus color-blind user


## Resources
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)
- WebAIM: [Introduction to Web Accessibility](https://webaim.org/intro/)
- WebAIM: [Semantic Structure](https://webaim.org/techniques/semanticstructure/)

## Tools
Below are a collection of tools that can be used for accessibility testing:
- For testing readability level:
    - [Hemingway Editor](http://www.hemingwayapp.com/)

- For testing keyboard interactions:
    - WebAIM: [Keyboard Accessibility: Keyboard Testing](https://webaim.org/techniques/keyboard/#testing)

- For images and writing alternative text:
    - Web Accessibility Tutorials: [Image Tutorials: An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)

- For checking visual disability issues:
    - WebAIM: [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
    - Colblindor: Coblis: [Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)
    - Chrome Web Store: [High Contrast Chrome plugin](https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph/related?hl=en)
    - Chrome Web Store: [NoCoffee vision simulator](https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl)
    - Axe Browser Extension for easy accessibility testing: [axe Accessibility Testing](https://www.deque.com/axe/)

</cdr-doc-table-of-contents-shell>
