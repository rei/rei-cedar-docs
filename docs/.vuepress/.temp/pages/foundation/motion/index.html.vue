<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview">#</a> Overview</h2>
<p>Cedar provides easy-to-use, preset values to apply consistent motion for components. Motion tokens help maintain a cohesive experience across all REI properties by:</p>
<ul>
<li>Storing motion attributes for duration or timing using variable names, not hard-coded values such as cubic-bezier (0.15, 0, 0.15, 0)</li>
<li>Specifying a hierarchical and semantically-defined system</li>
</ul>
<hr>  
<p>Motion tokens are primarily used with web applications. Motion tokens for mobile devices are not currently available.</p>
<h3 id="duration" tabindex="-1"><a class="header-anchor" href="#duration">#</a> Duration</h3>
<ul>
<li>Animated components use short time durations so interactions feel responsive and succinct</li>
<li>Recommended range for animated durations is from 100ms to 600ms</li>
<li>Striking a balance is key - slow enough to comprehend and fast enough to respect the customer’s time</li>
<li>From Nielsen Norman Group research:
<ul>
<li>100ms is perceived as instant. Users feel that they are directly causing something to happen on the screen</li>
<li>Delays between 100ms and 1 second gives users the impression that the website is working and causing the result to appear</li>
</ul>
</li>
</ul>
 <br/>
<tokens-motion motion-type="duration" :descriptions="$page.frontmatter.tokenDescriptions" />
<br/>
<hr>
<h3 id="easing" tabindex="-1"><a class="header-anchor" href="#easing">#</a> Easing</h3>
<p>Cedar’s collection of easings are based on physics found in the natural world. They respond quickly when invoked and slow down over time to ease into their final position. This communicates a sense of physicality and reflects the customer's expectation of objects moving in the real world. Best used with any UI element that opens or closes, such as the accordion or modal components.</p>
<br />
<tokens-motion motion-type="timing" :descriptions="$page.frontmatter.tokenDescriptions" />
<br />
<hr>
<h4 id="comparison-of-timing-tokens" tabindex="-1"><a class="header-anchor" href="#comparison-of-timing-tokens">#</a> Comparison of Timing Tokens</h4>
<tokens-motion motion-type="timing" :comparison-view="true" />
<br/>
<hr>
<h2 id="guidelines" tabindex="-1"><a class="header-anchor" href="#guidelines">#</a> Guidelines</h2>
<p>Cedar motion is purposefully designed to enhance the customer's understanding of REI’s digital products. Components use animated interface patterns to reduce cognitive load and imbue a natural interactivity. It’s an important part of building customer trust and affinity for our products.</p>
<hr>
<h3 id="use-when" tabindex="-1"><a class="header-anchor" href="#use-when">#</a> Use When</h3>
<ul>
<li>Reducing cognitive load. For example, when a product image slides to reveal the next or previous product image after a user clicks on a directional arrow</li>
<li>Attracting the user’s attention. For example, when a toast message moves down from the top browser bar for region-specific warning messages</li>
<li>Providing context with transitions of a single object. For example, rotating an arrow icon to show an accordion panel opening and closing</li>
<li>Showing continuity through the system with transitions between objects. For example, using animation to reveal a modal window</li>
<li>Keeping users interested during loading or long processing times by providing delightful animations</li>
</ul>
<br>
<h3 id="don-t-use-when" tabindex="-1"><a class="header-anchor" href="#don-t-use-when">#</a> Don't Use When</h3>
<ul>
<li>Adding the animation could waste the user’s time</li>
<li>Entertaining the user, rather than helping them to accomplish their goals</li>
</ul>
<hr>
<h3 id="accessibility" tabindex="-1"><a class="header-anchor" href="#accessibility">#</a> Accessibility</h3>
<ul>
<li>Do not cause the screen to flash more than three times a second</li>
<li>For any animation that starts automatically and plays for more than 5 seconds, provide pause controls. For example, auto-updating content and ambient videos</li>
</ul>
<hr>
<h3 id="interface-patterns" tabindex="-1"><a class="header-anchor" href="#interface-patterns">#</a> Interface Patterns</h3>
<h4 id="transitions" tabindex="-1"><a class="header-anchor" href="#transitions">#</a> Transitions</h4>
<p>Use the transition pattern when:</p>
<ul>
<li>Moving users from one page to another page</li>
<li>Transition out of one task to another</li>
<li>Replacing large portions of information</li>
</ul>
<br>
<cdr-table class="table-first-col-align-top">
  <tr>
    <td style="width: 160px;"><strong>Accordion</strong></td>
    <td></td>
  </tr>
  <tr>
    <td><cdr-img class="cdr-doc-article-img" style="margin-bottom: 0" alt="Symbol for Accordion component" :src="$withBase(`/motion/pattern_symbol_accordion_1-1.png`)"/></td>
    <td>The arrow icon rotates using ease out timing with 300ms duration. <br/><br/> When opening, the Accordion content is revealed using the ease timing with 300ms duration. <br/><br/> When closing, the duration changes to 200ms to hide content. <br/><br/> When opening or closing, the panel content fades on and off using linear timing at 100ms. <br/><br/> View <a href="../../components/accordion/">Accordion</a> component.</td>
  </tr>
</cdr-table>
<br />
<cdr-table class="table-first-col-align-top">
  <tr>
    <td style="width: 160px"><strong>Tabs</strong></td>
    <td></td>
  </tr>
  <tr>
    <td><cdr-img class="cdr-doc-article-img" style="margin-bottom: 0" alt="Symbol for Tabs component" :src="$withBase(`/motion/pattern_symbol_tabs_1-1.png`)"/></td>
    <td>Ease out timing is used for updating the tab bar and revealing new content. <br/><br/> Duration was initially set at 600ms. During the development phase, the duration was updated to 500ms. <br/><br/> View <a href="../../components/tabs/">Tabs</a> component.</td>
  </tr>
</cdr-table>
<br/>
<h4 id="supplements" tabindex="-1"><a class="header-anchor" href="#supplements">#</a> Supplements</h4>
<p>Use the supplements pattern when:</p>
<ul>
<li>Bringing information on or off of the page without changing the user's location</li>
<li>Adding or updating bits of additional content on the page</li>
</ul>
<p>There are currently no components in the Cedar Design System that use supplemental animation.  Common examples of this type of animation are:</p>
<ul>
<li>Modals</li>
<li>Popovers</li>
<li>Tooltips</li>
</ul>
<br/>
<h4 id="feedback" tabindex="-1"><a class="header-anchor" href="#feedback">#</a> Feedback</h4>
<p>Use the feedback pattern when:</p>
<ul>
<li>Giving users direct feedback about their interactions</li>
<li>Linking a human action to an interface's reaction</li>
<li>Keeping the user interested during slow page-loading times</li>
</ul>
<br>
<cdr-table class="table-first-col-align-top">
  <thead>
    <tr>
      <th style="width: 160px;"><strong>Buttons</strong></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><cdr-img class="cdr-doc-article-img" style="margin-bottom: 0" alt="Symbol for Buttons component" :src="$withBase(`/motion/pattern_symbol_buttons_16-9.png`)"/></td>
      <td>When user hovers on or off, color changes instantaneously.  <br/><br/> View <a href="../../components/buttons/">Button</a> component.</td>
    </tr>
  </tbody>
</cdr-table>
<br />
<cdr-table class="table-first-col-align-top">
  <thead>
    <tr>
      <th style="width: 160px;"><strong>Breadcrumb</strong></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><cdr-img class="cdr-doc-article-img" style="margin-bottom: 0" alt="Symbol for Breadcrumb component" :src="$withBase(`/motion/pattern_symbol_breadcrumb_16-9.png`)"/></td>
      <td>When users hovers on or off, an underline style is applied to the link text.  <br/><br/> View <a href="../../components/breadcrumb/">Breadcrumb</a> component.</td>
    </tr>
  </tbody>
</cdr-table>
<br/>
<h4 id="demonstrations" tabindex="-1"><a class="header-anchor" href="#demonstrations">#</a> Demonstrations</h4>
<p>Use the demonstrations pattern when:</p>
<ul>
<li>Explaining how something works</li>
<li>Showing a process through action, instead of telling what's happening</li>
</ul>
<p>There are currently no animations on the REI site that are demonstrations. An example of this type of animation is when a group of files emerge from the downloads icon on the Mac dock interface.</p>
<br/>
<h4 id="decorations" tabindex="-1"><a class="header-anchor" href="#decorations">#</a> Decorations</h4>
<p>Use the decorations pattern when:</p>
<ul>
<li>Creating an emotional connection between the interface and the user</li>
<li>Sparking visual interest by keeping the user engaged</li>
<li>Delighting a user's experience without conveying new information</li>
</ul>
<p>There are no animations on the REI site that are decorative. For examples of decorative animations, view <a href="https://hackernoon.com/u15-latest-and-best-loading-animations-to-make-user-enjoy-waiting-9c7861ed5d47" target="_blank" rel="noopener noreferrer">15 Latest and Best Loading Animations to Make User Enjoy Waiting<ExternalLinkIcon/></a>.</p>
<br/>
<hr>
<h3 id="creating-new-motion-tokens" tabindex="-1"><a class="header-anchor" href="#creating-new-motion-tokens">#</a> Creating New Motion Tokens</h3>
<p>CSS animation frame rate for interface elements is dependent on the speed of the browser and computer:</p>
<ul>
<li>For animations running at less than 15fps, users will not be able to see continuous motion</li>
<li>Most devices refresh their screen at 60 times a second</li>
</ul>
<p>For smooth and responsive animation, use CSS attributes for:</p>
<ul>
<li><strong>Position:</strong> Using transform property for <code>translate()</code>, to reposition an element in the horizontal or vertical directions</li>
<li><strong>Scale:</strong> Using transform property for <code>scale()</code>, to resize an element on 2D plane</li>
<li><strong>Rotation:</strong> Using transform property for <code>rotate()</code>, to rotate an element on x, y, or z axis</li>
<li><strong>Skew:</strong> Using transform property for <code>skew()</code>, to distort an element on the 2D plane</li>
<li><strong>Opacity:</strong> Specifies the opacity or transparency of an element with values from 0.0 - 1.0. Lower values cause the element to be more transparent</li>
</ul>
<p>For more information, visit <RouterLink to="/tokens/overview/#adding-design-tokens-to-the-repository">Adding Tokens to the Repository</RouterLink>.</p>
<br>
<hr/>
<h2 id="glossary" tabindex="-1"><a class="header-anchor" href="#glossary">#</a> Glossary</h2>
<cdr-table class="table-first-col-align-top">
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
</cdr-table>
</cdr-doc-table-of-contents-shell>
</template>
