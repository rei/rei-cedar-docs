<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<p>UI icons or glyphs symbolize commands, navigation, utility, or common actions and provide additional visual context and enhance usability. Icons offer a form of “visual shorthand”, lowering cognitive load and better utilizing space. Icons use familiar shapes and metaphors to communicate concepts in simple graphic forms.</p>
<h2 id="characteristics" tabindex="-1"><a class="header-anchor" href="#characteristics">#</a> Characteristics</h2>
<h3 id="grid" tabindex="-1"><a class="header-anchor" href="#grid">#</a> Grid</h3>
<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/grid.png`)"/>
<p>Design icons on a 20px grid and export on a 24px artboard. Constrain the content of an icon  to the “live area” of the icon grid. The live area and padding ensure sufficient display room and consistent scaling of the icon set.</p>
<h3 id="shapes" tabindex="-1"><a class="header-anchor" href="#shapes">#</a> Shapes</h3>
<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/shapes.png`)"/>
<p>Create icons  on the grid using basic foundational shapes. Adhering to these shapes ensures consistent proportionality of iconography throughout the icon set.</p>
<h3 id="sizes" tabindex="-1"><a class="header-anchor" href="#sizes">#</a> Sizes</h3>
<p>Icons scale to display across three sizes: small (16px), medium (24px), and large (32px).</p>
<h3 id="clearance" tabindex="-1"><a class="header-anchor" href="#clearance">#</a> Clearance</h3>
<p>Adequate space around the icon allows for legibility and touch. A minimum touch target area of 40px is recommended for standalone iconography.</p>
<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/clearance.png`)"/>
<p>When the mouse and keyboard are the primary input methods or when icons are paired in-line with text, measurements may be condensed to accommodate denser layouts. Icon size should align to the line-height of the paired text element.</p>
<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/clearance2.png`)"/>
<h2 id="style" tabindex="-1"><a class="header-anchor" href="#style">#</a> Style</h2>
<p>Icons are built from foundational shapes within the icon grid and align to the pixel grid to ensure clarity when scaling. Optical corrections can be made where necessary.</p>
<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/style.png`)"/>
<p>Minimize use  of depth or implied perspective unless necessary to convey the relationship of grouped items.</p>
<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/style2.png`)"/>
<p>Constructed with a 2px stroke. Strokes have a 1px rounded terminus or butt-cap.</p>
<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/style3.png`)"/>
<p>Square and rectangular shapes have 1px rounded exterior corners and sharp interior angles.</p>
<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/style4.png`)"/>
<p>Filled versions of select icons are available and typically represent an “on” or active state of the action, feature, or validation colors. When icons are paired with a complex or noisy background, consider using a filled icon (e.g. a filled location pin on a map environment).</p>
<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/style5.png`)"/>
<p>Inverse display is available when paired with darker backgrounds.</p>
<cdr-img class="cdr-doc-article-img" :src="$withBase(`/iconography/style6.png`)"/>
<h2 id="icons-in-cedar" tabindex="-1"><a class="header-anchor" href="#icons-in-cedar">#</a> Icons in Cedar</h2>
<p>Icons are symbols or visual expressions that communicate meaning through the use of graphics.</p>
<p>The Cedar Icon Library contains simple, functional icons to use across the REI digital platform to help make navigation easier for common actions.</p>
<p>Icons are available in SVG format at 24px, and can be displayed using the Icon Component.</p>
<h2 id="icon-component" tabindex="-1"><a class="header-anchor" href="#icon-component">#</a> Icon Component</h2>
<p>The Cedar Icon component (cdr-icon) is intended to consume icons hosted in the Cedar Icon Library.</p>
<p>For information about using the Cedar Icon API, design guidelines, and accessibility considerations, visit the <RouterLink to="/components/icon/">Icon component</RouterLink> article.</p>
<h2 id="icon-library-and-naming" tabindex="-1"><a class="header-anchor" href="#icon-library-and-naming">#</a> Icon Library and Naming</h2>
<p>Cedar has a library of reusable icons with names and descriptive tags.</p>
<p>Visit the <a href="../library">Cedar Icon Library</a> for a complete list of icons.</p>
<h3 id="naming-convention" tabindex="-1"><a class="header-anchor" href="#naming-convention">#</a> Naming Convention</h3>
<p>Cedar icons follow the kebab-case naming convention. For example, {group(s)}-{name}-{variation}-{size}.svg where:</p>
<ul>
<li>{groups}: A namespace for alphabetized grouping. Could be more than one</li>
<li>{name}: The name of the icon</li>
<li>{variation}: Variations of the same icon - fill vs stroke - horizontal vs vertical</li>
<li>{size}: sm for 16px and lg for 32px. 24px icons don't have a size suffix</li>
</ul>
<p>File name examples:</p>
<p><code>arrow-down.svg</code><br>
<code>arrow-left.svg</code><br>
<code>arrow-right.svg</code><br>
<code>arrow-up.svg</code><br>
<code>check-fill.svg</code><br>
<code>check.svg</code><br>
<code>check-lg.svg</code><br>
<code>check-sm.svg</code><br>
<code>check-stroke.svg</code><br>
<code>menu.svg</code><br>
<code>gear-tent.svg</code><br>
<code>gear-tent-outline.svg</code><br>
<code>gear-backpack.svg</code><br>
<code>gear-backpack-stroke.svg</code><br>
<code>gear-sleeping-bag.svg</code><br>
<code>gear-bike.svg</code><br>
<code>gear-boating-kayak.svg</code><br>
<code>gear-boating-canoe.svg</code><br>
<code>gear-boating-paddleboard.svg</code></p>
<h3 id="using-inline-cedar-icons" tabindex="-1"><a class="header-anchor" href="#using-inline-cedar-icons">#</a> Using Inline Cedar Icons</h3>
<p>The <code>@rei/cedar</code> component package exports an <RouterLink to="/components/icon/#inline-icon-components">inline Vue component</RouterLink> for every icon in the Cedar library. The inline icon components are the easiest way to make use of the Cedar icon library if you are building an application using Vue. These components are prefixed with the word <code>Icon</code> and are named using PascalCase, for example: <code>IconCaretDown</code>, <code>IconExperiencesBackpacking</code>.</p>
<h3 id="creating-a-cedar-icon-sprite" tabindex="-1"><a class="header-anchor" href="#creating-a-cedar-icon-sprite">#</a> Creating a Cedar Icon Sprite</h3>
<p>Icon sprite sheets should be avoided in favor of using the <a href="#using-inline-cedar-icons">inline cedar icon components</a>, as maintaining sprite sheets is difficult and usually has minimal impact on performance. However we do offer a sprite option for teams that need to optimize their icon usage.</p>
<p>The Cedar Icon Library has an easy to-use <a href="https://rei.github.io/cedar-icons/#/sprite" target="_blank" rel="noopener noreferrer">sprite creator<ExternalLinkIcon/></a>. Alternately, the icon library API also provides <a href="https://github.com/rei/cedar-icons#creating-a-custom-sprite" target="_blank" rel="noopener noreferrer">sprite generation<ExternalLinkIcon/></a>. The sprite can then be referenced using the <RouterLink to="/components/icon/#svg-sprite">CdrIcon component</RouterLink></p>
<h2 id="contribution-process" tabindex="-1"><a class="header-anchor" href="#contribution-process">#</a> Contribution Process</h2>
<p>Cedar welcomes and encourages contributions to the icon library that are consistent with the REI style.</p>
<h3 id="cedar-icon-guidelines" tabindex="-1"><a class="header-anchor" href="#cedar-icon-guidelines">#</a> Cedar Icon Guidelines</h3>
<p><strong>Single Path</strong></p>
<p>Each Cedar icon must composed of a single path object.</p>
<!-- TODO: -->
<!-- **Sketch Icon Path Geometry**  
A Sketch icon artboard must contain a single combined-shape object in order to export correctly.

1. Click **Layer > Convert to Outlines** to convert any layers or shapes that have a stroke.
2. Using Combine’s Subtract and Union functions, create a single-shape group using positive and negative space shapes to compose your final form.
3. Once in a combined shape, flatten the object to further simplify paths. -->
<p><strong>Style</strong></p>
<p>These rules are subjective, and can be bent or broken.</p>
<ul>
<li>2px stroke weight</li>
<li>1px radius rounded edges and terminals</li>
<li>Pixel aligned for proper anti-aliasing and rasterizing</li>
</ul>
<p><strong>Dimensions</strong></p>
<p>Icons must be created at 24x24px size format. However, they can be displayed in any one of three sizes:</p>
<ul>
<li>sm: 16x16px</li>
<li>md: 24x24px</li>
<li>lg: 32x32px</li>
</ul>
<h2 id="adding-an-icon-to-the-cedar-icon-library" tabindex="-1"><a class="header-anchor" href="#adding-an-icon-to-the-cedar-icon-library">#</a> Adding an Icon to the Cedar Icon Library</h2>
<p>Contact the Cedar team using the <a href="https://rei.slack.com/messages/CA58YCGN4" target="_blank" rel="noopener noreferrer">#cedar-user-support<ExternalLinkIcon/></a> Slack channel for assistance in adding a new icon to the library.</p>
</cdr-doc-table-of-contents-shell>
</template>
