---
navbar: false
pageClass: cdr-doc-proving-ground
examples:
  do:
    image: button-do.png
    alt: Image showing button size
    caption: use button types to emphasize a preferred option rather than a non-important option.
  dont:
    image: button-dont.png
    alt: Image showing mixed button sizes
    caption: use multiple sizes in the same context.
  do2:
    image: button-do.png
    caption: use button types to emphasize a preferred option rather than a non-important option. use button types to emphasize a preferred option rather than a non-important option. use button types to emphasize a preferred option rather than a non-important option.
  dont2:
    image: button-dont.png
    caption: use multiple sizes in the same context. <a href="https://www.rei.com">REI.com</a>
---

# Do Don't proving grounds

<div class="cdr-container">

  ## Regular example

  <do-dont :do-example="$page.frontmatter.examples.do" :dont-example="$page.frontmatter.examples.dont" />

  ## With a link

  <do-dont :do-example="$page.frontmatter.examples.do2" :dont-example="$page.frontmatter.examples.dont2" />

  ## More Dos than don'ts

  <do-dont :do-example="$page.frontmatter.examples.do2" :dont-example="$page.frontmatter.examples.dont2" />
  <do-dont :do-example="$page.frontmatter.examples.do" />
  <do-dont :do-example="$page.frontmatter.examples.do2" />

  ## More don'ts than dos

  <do-dont :do-example="$page.frontmatter.examples.do2" :dont-example="$page.frontmatter.examples.dont2" />
  <do-dont :dont-example="$page.frontmatter.examples.dont" />
  <do-dont :dont-example="$page.frontmatter.examples.dont2" />
</div>
