---
navbar: false
pageClass: cdr-doc-proving-ground
examples1:
  - type: do
    image: button-do.png
    alt: Image showing button size
    caption: use button types to emphasize a preferred option rather than a non-important option.
  - type: dont
    image: button-dont.png
    alt: Image showing mixed button sizes
    caption: use multiple sizes in the same context.
examples2:
  - type: dont
    image: button-dont.png
    caption: use multiple sizes in the same context. <a href="https://www.rei.com">REI.com</a>
  - type: dont
    image: button-dont.png
    alt: Image showing mixed button sizes
    caption: use multiple sizes in the same context. <cdr-button>Rendering a component</cdr-button>
examples3:
  - type: do
    image: button-do.png
    caption: use button types to emphasize a preferred option rather than a non-important option. use button types to emphasize a preferred option rather than a non-important option. use button types to emphasize a preferred option rather than a non-important option.
  - type: do
    image: button-do.png
    alt: Image showing button size
    caption: use button types to emphasize a preferred option rather than a non-important option.
  - type: do
    image: button-do.png
    caption: use button types to emphasize a preferred option rather than a non-important option. use button types to emphasize a preferred option rather than a non-important option. use button types to emphasize a preferred option rather than a non-important option.
examples4:
  - type: dont
    image: button-do.png
    caption: use button types to emphasize a preferred option rather than a non-important option. use button types to emphasize a preferred option rather than a non-important option. use button types to emphasize a preferred option rather than a non-important option.
  - type: dont
    image: button-do.png
    alt: Image showing button size
    caption: use button types to emphasize a preferred option rather than a non-important option.
  - type: dont
    image: button-do.png
    caption: use button types to emphasize a preferred option rather than a non-important option. use button types to emphasize a preferred option rather than a non-important option. use button types to emphasize a preferred option rather than a non-important option.
examples5:
  - type: dont
    image: button-do.png
    caption: use button types to emphasize a preferred option rather than a non-important option. use button types to emphasize a preferred option rather than a non-important option. use button types to emphasize a preferred option rather than a non-important option.
  - type: do
    image: button-do.png
    alt: Image showing button size
    caption: use button types to emphasize a preferred option rather than a non-important option.
  - type: dont
    fullWidth: true
    image: button-do.png
    caption: use button types to emphasize a preferred option rather than a non-important option. use button types to emphasize a preferred option rather than a non-important option. use button types to emphasize a preferred option rather than a non-important option.
---

# Do Don't proving grounds

<div class="cdr-container">

  ## Regular example

  <do-dont :examples="$page.frontmatter.examples1" />

  ## With mixed content

  <do-dont :examples="$page.frontmatter.examples2" />

  ## Lots of dos

  <do-dont :examples="$page.frontmatter.examples3" />

  ## Lots of don'ts

  <do-dont :examples="$page.frontmatter.examples4" />

  ## Lots of both

  <do-dont :examples="[...$page.frontmatter.examples3, ...$page.frontmatter.examples4]" />

  ## Mixing full width

  <do-dont :examples="$page.frontmatter.examples5" />

</div>
