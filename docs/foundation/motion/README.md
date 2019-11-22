---
{
  "title": "Motion",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "summary": false,
  "breadcrumbs": [
    {
      "text": "Foundation/"
    }
  ],
  "tokenDescriptions": {
    "cdr-duration-1-x": "Usage: Perceived as instant or very fast. Often used for selection controls such as radio buttons, checkboxes, or toggle buttons.",
    "cdr-duration-2-x": "Usage: Perceived as fast. Often used for hover or fading effects or icons that change shape, such as switching between a play button and a pause button.",
    "cdr-duration-3-x": "Usage: Perceived as normal. Often used for revealing content, such as the opening of a panel for the accordion component.",
    "cdr-duration-4-x": "Usage: Perceived as slow. Often used for revealing content on a tablet device because the screen is bigger than a phone or wearable device.",
    "cdr-duration-5-x": "Usage: Perceived as slower. Often used for icons with detailed animation, such as a ringing alarm clock or opening and closing a lock icon.",
    "cdr-duration-6-x": "Usage: Perceived as very slow. Often used for larger movement, such as revealing page content when switching tabs for the tabs component.",
    "cdr-timing-function-ease-out": "Specifies a transition effect that will feel responsive. This timing effect moves quickly at the beginning with a slow end. Use this animation when users expect an immediate response to their action such as clicking on an accordion or button.",
    "cdr-timing-function-ease": "Specifies a transition effect that is known as ease-in-out. This timing function can be quite satisfying for users because it has a slow start, a fast middle, and a slow end. Use this effect when users do not expect motion to occur. A suitable duration is 300-500ms for this timing function.",
    "cdr-timing-function-linear": "Specifies a transition effect with the same speed from start to end. Be cautious using this effect because objects in the real world don’t usually move with a linear motion. Best for things like opacity fades."
  }
}
---
<cdr-doc-table-of-contents-shell>

## Overview

Cedar provides easy-to-use, preset values to apply consistent motion for components. Motion tokens help maintain a cohesive experience across all REI properties by:
- Storing motion attributes for duration or timing using variable names, not hard-coded values such as cubic-bezier (0.15, 0, 0.15, 0)
- Specifying a hierarchical and semantically-defined system
  
<hr>  

Motion tokens are primarily used with web applications. Motion tokens for mobile devices are not currently available.

  
### Duration
- Animated components use short time durations so interactions feel responsive and succinct
- Recommended range for animated durations is from 100ms to 600ms
- Striking a balance is key - slow enough to comprehend and fast enough to respect the customer’s time
- From Nielsen Norman Group research:
  - 100ms is perceived as instant. Users feel that they are directly causing something to happen on the screen
  - Delays between 100ms and 1 second gives users the impression that the website is working and causing the result to appear 

 <br/>

<tokens-motion motion-type="duration" :descriptions="$page.frontmatter.tokenDescriptions" />

<br/>
<hr>

### Easing
Cedar’s collection of easings are based on physics found in the natural world. They respond quickly when invoked and slow down over time to ease into their final position. This communicates a sense of physicality and reflects the customer's expectation of objects moving in the real world. Best used with any UI element that opens or closes, such as the accordion or modal components.

<br />

<tokens-motion motion-type="timing" :descriptions="$page.frontmatter.tokenDescriptions" />

<br />
<hr>

#### Comparison of Timing Tokens 

<tokens-motion motion-type="timing" :comparison-view="true" />

<br/>
<hr>

## Guidelines

Cedar motion is purposefully designed to enhance the customer's understanding of REI’s digital products. Components use animated interface patterns to reduce cognitive load and imbue a natural interactivity. It’s an important part of building customer trust and affinity for our products.

<hr>

### Use When 

- Reducing cognitive load. For example, when a product image slides to reveal the next or previous product image after a user clicks on a directional arrow
- Attracting the user’s attention. For example, when a toast message moves down from the top browser bar for region-specific warning messages 
- Providing context with transitions of a single object. For example, rotating an arrow icon to show an accordion panel opening and closing
- Showing continuity through the system with transitions between objects. For example, using animation to reveal a modal window 
- Keeping users interested during loading or long processing times by providing delightful animations 

<br>

### Don't Use When
- Adding the animation could waste the user’s time
- Entertaining the user, rather than helping them to accomplish their goals

<hr>

### Accessibility
- Do not cause the screen to flash more than three times a second
- For any animation that starts automatically and plays for more than 5 seconds, provide pause controls. For example, auto-updating content and ambient videos

<hr>

### Interface Patterns
#### Transitions
Use the transition pattern when:
- Moving users from one page to another page 
- Transition out of one task to another
- Replacing large portions of information

<br>

<table class="table-first-col-align-top">
  <tr>
    <td style="width: 160px;"><strong>Accordion</strong></td>
    <td></td>
  </tr>
  <tr>
    <td><cdr-img class="cdr-doc-article-img" style="margin-bottom: 0" alt="Symbol for Accordion component" :src="$withBase(`/motion/pattern_symbol_accordion_1-1.png`)"/></td>
    <td>The arrow icon rotates using ease out timing with 300ms duration. <br/><br/> When opening, the Accordion content is revealed using the ease timing with 300ms duration. <br/><br/> When closing, the duration changes to 200ms to hide content. <br/><br/> When opening or closing, the panel content fades on and off using linear timing at 100ms. <br/><br/> View <a href="../../components/accordion/">Accordion</a> component.</td>
  </tr>
</table>

<br />

<table class="table-first-col-align-top">
  <tr>
    <td style="width: 160px"><strong>Tabs</strong></td>
    <td></td>
  </tr>
  <tr>
    <td><cdr-img class="cdr-doc-article-img" style="margin-bottom: 0" alt="Symbol for Tabs component" :src="$withBase(`/motion/pattern_symbol_tabs_1-1.png`)"/></td>
    <td>Ease out timing is used for updating the tab bar and revealing new content. <br/><br/> Duration was initially set at 600ms. During the development phase, the duration was updated to 500ms. <br/><br/> View <a href="../../components/tabs/">Tabs</a> component.</td>
  </tr>
</table>

<br/>

#### Supplements 
Use the supplements pattern when:
- Bringing information on or off of the page without changing the user's location
- Adding or updating bits of additional content on the page

There are currently no components in the Cedar Design System that use supplemental animation.  Common examples of this type of animation are:
- Modals
- Popovers
- Tooltips

<br/>

#### Feedback
Use the feedback pattern when:
- Giving users direct feedback about their interactions
- Linking a human action to an interface's reaction
- Keeping the user interested during slow page-loading times

<br>

<table class="table-first-col-align-top">
    <tr>
      <td style="width: 160px;"><strong>Buttons</strong></td>
      <td></td>
    </tr>
    <tr>
      <td><cdr-img class="cdr-doc-article-img" style="margin-bottom: 0" alt="Symbol for Buttons component" :src="$withBase(`/motion/pattern_symbol_buttons_16-9.png`)"/></td>
      <td>When user hovers on or off, color changes instantaneously.  <br/><br/> View <a href="../../components/buttons/">Button</a> component.</td>
    </tr>
</table>

<br />

<table class="table-first-col-align-top">
    <tr>
      <td style="width: 160px;"><strong>Breadcrumb</strong></td>
      <td></td>
    </tr>
    <tr>
      <td><cdr-img class="cdr-doc-article-img" style="margin-bottom: 0" alt="Symbol for Breadcrumb component" :src="$withBase(`/motion/pattern_symbol_breadcrumb_16-9.png`)"/></td>
      <td>When users hovers on or off, an underline style is applied to the link text.  <br/><br/> View <a href="../../components/breadcrumb/">Breadcrumb</a> component.</td>
    </tr>
</table>

<br/>

#### Demonstrations
Use the demonstrations pattern when:
- Explaining how something works
- Showing a process through action, instead of telling what's happening

There are currently no animations on the REI site that are demonstrations. An example of this type of animation is when a group of files emerge from the downloads icon on the Mac dock interface.


<br/>

#### Decorations
Use the decorations pattern when:
- Creating an emotional connection between the interface and the user 
- Sparking visual interest by keeping the user engaged
- Delighting a user's experience without conveying new information

There are no animations on the REI site that are decorative. For examples of decorative animations, view [15 Latest and Best Loading Animations to Make User Enjoy Waiting](https://hackernoon.com/u15-latest-and-best-loading-animations-to-make-user-enjoy-waiting-9c7861ed5d47).


<br/>
<hr>

### Creating New Motion Tokens
CSS animation frame rate for interface elements is dependent on the speed of the browser and computer:

- For animations running at less than 15fps, users will not be able to see continuous motion
- Most devices refresh their screen at 60 times a second 

For smooth and responsive animation, use CSS attributes for:
- **Position:** Using transform property for `translate()`, to reposition an element in the horizontal or vertical directions
- **Scale:** Using transform property for `scale()`, to resize an element on 2D plane
- **Rotation:** Using transform property for `rotate()`, to rotate an element on x, y, or z axis 
- **Skew:** Using transform property for `skew()`, to distort an element on the 2D plane
- **Opacity:** Specifies the opacity or transparency of an element with values from 0.0 - 1.0. Lower values cause the element to be more transparent

For more information, visit the [Adding Tokens to the Repository](../../components/design-tokens/?active-link=adding-tokens-to-the-repository) page.


<br>
<hr/>

## Glossary

<table class="table-first-col-align-top">
  <thead>
    <tr>
      <th>Glossary Term</th>
      <th><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>animation</td>
      <td>An illusion of movement created by displaying a series of pictures or frames.</td>
    </tr>
    <tr>
      <td>aspect ratio</td>
      <td><cdr-img class="cdr-doc-article-img" style="margin-bottom: 0" alt="Graph to compare 16 to 9 with 4 to 3 aspect ratios" :src="$withBase(`/motion/glossary_aspect_ratio_16-9.png`)"/>  <br/><br/> The relationship between the width of an image to its height. Standard ratios are 16:9 for widescreen and 4:3 for television.</td>
    </tr>
    <tr>
      <td>Bézier curve</td>
      <td>A method of defining curved lines invented by French mathematician Pierre Bézier. For animation, a Bézier curve can be used to specify the velocity over time of an object such as an icon moving from A to B. Bézier curves are often used to replicate the physics found in the natural world. For the animation function, cubic-bezier (p1, p2, p3, p4), the p1 and p3 values must be in the range of 0 to 1.</td>
    </tr>
    <tr>
      <td>cross dissolve</td>
      <td>A transition effect used to fade one image into a different image simultaneously: one fades in while the other fades out.</td>
    </tr>
    <tr>
      <td>ease-in</td>
      <td><cdr-img class="cdr-doc-article-img" style="margin-bottom: 0" alt="Graph to show ease-in animation timing" :src="$withBase(`/motion/glossary_ease_in_16-9.png`)"/>  <br/><br/> Specifies a gradual acceleration in the action with a slow start and quick ending. Ease-in is not recommended because it may negatively impact the user's perception of your site's responsiveness by feeling sluggish at the start. A common value for the cubic-bezier is (0.25, 0.1, 0.25, 1.0). Also known as slow-in.</td>
    </tr>
    <tr>
      <td>ease-in-out</td>
      <td><cdr-img class="cdr-doc-article-img" style="margin-bottom: 0" alt="Graph to show ease-in-out animation timing" :src="$withBase(`/motion/glossary_ease_in_out_16-9.png`)"/>  <br/><br/> Specifies a gradual acceleration at the start until the middle of the action. Then, a gradual deceleration in the action at the end. This timing function can be quite satisfying for users because it has a slow start, a fast middle, and a slow end. Do not use this timing function for a long animation duration because of the sluggishness of the ease-in start. A suitable duration is 300-500ms for this timing function. Cedar’s token <code>cdr-timing-function-ease</code> uses this function.</td>
    </tr>
    <tr>
      <td>ease-out</td>
      <td><cdr-img class="cdr-doc-article-img" style="margin-bottom: 0" alt="Graph to show ease-out animation timing" :src="$withBase(`/motion/glossary_ease_out_16-9.png`)"/>  <br/><br/> Specifies a gradual deceleration in the action with a fast start and slow ending. Ease-out is recommended because it gives the animation a feeling of responsiveness. It also allows a natural slowdown at the end. A common value for the cubic-bezier is (0, 0, 0.58, 1.0). Also known as slow-out. Cedar’s token <code>cdr-timing-function-ease-out</code></td>
    </tr>
    <tr>
      <td>fade in</td>
      <td>Specifies a transition effect used to open a sequence. The first image gradually appears from complete transparency to its complete opacity.</td>
    </tr>
    <tr>
      <td>fade out</td>
      <td>Specifies a transition effect used to close a sequence. The last image gradually disappears, going from complete opacity to complete transparency.</td>
    </tr>
    <tr>
      <td>frame rate</td>
      <td>The frame rate is measured by the number of frames recorded or played back each second. It is denoted as fps (frames per second). For example, an animation could be played back at 12, 15, 24, 25, 30 or 60 frames per second or any other number.</td>
    </tr>
    <tr>
      <td>linear</td>
      <td><cdr-img class="cdr-doc-article-img" style="margin-bottom: 0" alt="Graph to show linear animation timing" :src="$withBase(`/motion/glossary_linear_16-9.png`)"/>  <br/><br/> Specifies an even speed in the action. A common value for the cubic-bezier is (0.0, 0.0, 1.0, 1.0). This is commonly used for opacity transitions. Cedar’s token <code>cdr-timing-function-linear</code></td>
    <tr>
      <td>path of action</td>
      <td>Specifies direction that the action will follow.</td>
    </tr>
    <tr>
      <td>slow-in</td>
      <td>Specifies a gradual acceleration in the action with a slow start and a quick ending. Also known as ease-in.</td>
    </tr>
    <tr>
      <td>slow-out</td>
      <td>Specifies a gradual deceleration in the action with a fast start and a slow ending. Also known as ease-out.</td>
    </tr>
    <tr>
      <td>timeline</td>
      <td>A horizontal representation of a scene's elements, timing, and keyframes.</td>
    </tr>
    <tr>
      <td>transition</td>
      <td>An effect that happens between two images or scenes. Common transition effects are cross-dissolve and wipe.</td>
    </tr>
  </tbody>
</table>

</cdr-doc-table-of-contents-shell>
