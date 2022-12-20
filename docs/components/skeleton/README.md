---
{
  "title": "Skeleton",
  "layout_type": "LayoutComponent",
  "summary": "Visually communicates content is in the process of loading ",
  "title_metadata": "CdrSkeleton, CdrSkeletonBone, skeleton, bone",
  "component_location": "https://github.com/rei/rei-cedar/tree/skelelton-testing/src/components/skeleton",
  "structure": [
    {
      "type": "do",
      "image": "links/links_descriptivetext_do.png",
      "ratio": "16-9",
      "alt": "need image path",
      "caption": "represent the general structure of the container-based user-interface with skeleton."
    },
    {
      "type": "dont",
      "image": "links/links_descriptivetext_dont.png",
      "ratio": "16-9",
      "alt": "Two radio buttons one with a click here link.",
      "caption": "recreate the exact structure of the container-based user-interface with skeleton."
    }
  ],
  "where": [
    {
      "type": "do",
      "image": "links/links_underlinestyle_text_do.png",
      "ratio": "16-9",
      "alt": "A copy block using the cdr-link component which correctly underlines links.",
      "caption": "use to represent a yet to be loaded or updating container-based user-interface."
    },
    {
      "type": "dont",
      "image": "links/links_underlinestyle_text_dont.png",
      "ratio": "16-9",
      "alt": "TODO",
      "caption": "use to represent a yet to be loaded or updating isolated non repeated user-interface."
    }
  ],
   "when": [
    {
      "type": "do",
      "image": "links/links_underlinestyle_text_do.png",
      "ratio": "16-9",
      "alt": "needs path",
      "caption": "show page titles that never change for a page."
    },
    {
      "type": "dont",
      "image": "links/links_underlinestyle_text_dont.png",
      "ratio": "16-9",
      "alt": "TODO",
      "caption": "use placeholder content for titles that will change when the page fully loads."
    }
  ],
  "sandboxData": {
    "components": "CdrSkeleton"
  },
  "versions": [
    {
      "components": [
        {
          "name": "CdrSkeleton",
          "api": {
            "props": [
              {
                "name": "motion",
                "type": "Boolean",
                "default": "'true'",
                "description": "Toggle animation on/off. When `true`, animated gradient will be used while loading. When `false` a static background color will be used."
              },
            ],
            "slots": [
              {
                "name": "default",
                "description": "Sets the innerHTML for CdrSkeleton."
              }
            ]
          }
        },
        {
          "name": "CdrSkeletonBone",
          "api": {
            "props": [
              {
                "name": "type",
                "type": "String",
                "default": "'default'",
                "description": "Available types are `default`, `heading`, `line`, `rectangle`, and `square`. "
              },
            ],
            "slots": [
              {
                "name": "default",
                "description": "Sets the innerHTML for CdrSkeleton."
              }
            ]
          }
        }
      ],
      "version": "0.1.0"
    }
  ]
}
---


<cdr-doc-table-of-contents-shell parentSelector="h2" childSelector="h3">

## Overview

Skeleton components are intended for use on initial page load to loosely represent a container-based user-interface that is not fully loaded. A skeleton should never take the place of static content. 

Skeletons can be used for regions or sections of a page such as search results or a product tile filmstrip rather than specific interactive elements like a standalone button or image. 

Skeletons serve to reduce cumulative layout shift (CLS) and improve user-perceived load times. 

A skeleton should be temporary and not visible for more than a few seconds before being replaced by content. 

A complete skeleton requires the CdrSkeleton wrapping component and at least one CdrSkeletonBone component. 

### Types 

At its core, CdrSkeleton is essentially a paint brush you can use to create any UI shape your application requires. However, there are several presets to allow quick assembly of basic UI elements. 
 
#### Heading 

- Fluid 

<cdr-doc-example-code-pair :codeMaxHeight= false :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html
<CdrSkeleton :motion="motionToggle">
  <CdrSkeletonBone type="heading" />
</CdrSkeleton>
```
 </cdr-doc-example-code-pair>

#### Line 

- Repeated lines within a skeleton will automatically change their length 

<cdr-doc-example-code-pair :codeMaxHeight= false :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html
<CdrSkeleton>
  <CdrSkeletonBone type="line" />
  <CdrSkeletonBone type="line" />
  <CdrSkeletonBone type="line" />
</CdrSkeleton>
```
 </cdr-doc-example-code-pair>

#### Rectangle (4:3) 

- Fluid

 <cdr-doc-example-code-pair :codeMaxHeight= false :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html
<CdrSkeleton>
  <CdrSkeletonBone type="rectangle" />
</CdrSkeleton>
```
</cdr-doc-example-code-pair>

#### Square (1:1) 

- Fluid

 <cdr-doc-example-code-pair :codeMaxHeight= false :repository-href="$page.frontmatter.component_location" :sandbox-data="$page.frontmatter.sandboxData" >

```html
<CdrSkeleton>
  <CdrSkeletonBone type="square" />
</CdrSkeleton>
```
</cdr-doc-example-code-pair>

### Motion (shimmer effect) 

Skeletons use motion to convey the UI is still loading and the page is not frozen. 

- Can be disabled via prop 
- Disabled if user has reduced motion preferences 

### Accessibility

#### What Cedar provides 

- Skeleton wrapper adds `aria-busy=true` and aria-live=”polite” 
- Motion is disabled if user has indicated they prefer reduced motion 

#### Development responsibilities 

- Add a handler if true UI is still loading after 5 seconds 
-  Add a fallback if true UI never loads 


<hr>

## Guidelines

### Use When 

- Representing the shape of your UI with generic shapes. 
- Loading multiple items within a dynamic section of your page 
- Representing container-based components like cards, tiles, or tables 

### Don’t Use When 

- Communicating an actionable item, processing a user request, is busy 
- Representing isolated dynamic content  (like a page title or personalization data) 

## The Basics [in new docsite as best practices] 

When showing loading for in-context operations, consider using a spinner. 


### Content

### Do / Don’t

<do-dont :examples="$page.frontmatter.structure" />

<do-dont :examples="$page.frontmatter.where" />

<do-dont :examples="$page.frontmatter.when" />

<hr>

## API

<cdr-icon class="cdr-doc-code-snippet__action-icon" use="#brand-github"/> View it on Github: 
<cdr-link :href="$page.frontmatter.component_location">{{$page.frontmatter.component_location}}</cdr-link>

### Props

#### CdrSkeleton

CdrSkeleton is used to provide a visual placeholder while content is loading.

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[0].api.props" />

#### CdrSkeletonBone

CdrSkeletonBone is used to provide a visual placeholder for a single line of content while content is loading.

<cdr-doc-api type="prop" :api-data="$page.frontmatter.versions[0].components[1].api.props" />


### Slots

#### CdrSkeleton

<cdr-doc-api type="slot" :api-data="$page.frontmatter.versions[0].components[0].api.slots" />

### Usage

#### CdrSkeleton

```vue

 <CdrSkeleton :motion="motionToggle">
  // place your bones in  here
  <CdrSkeletonBone />
</CdrSkeleton>

```

##### Provide

- `motionToggle`: motion setting toggle. 

##### Setup

The `setup` method is used to create the instance data and provide the `motionToggle` setting.

##### CSS Modules

The `useCssModule` hook is used in the `setup` method to access the stylesheet. The `baseClass` variable is used to apply the styles to the skeleton. The `style` variable is used to apply the class names to the element.

#### CdrSkeletonBone

##### Inject

- `motionToggle`: motion setting toggle. 

##### Computed

- `typeClass`: class name for the bone type.
- `motionClass`: class name for the motion setting toggle.

##### Setup

The `setup` method is used to create the instance data, inject the `motionToggle` setting, and compute the class names.

##### CSS Modules

The `useCssModule` hook is used in the `setup` method to access the stylesheet. The `baseClass` variable is used to apply the styles to the skeleton bone. The `style` variable is used to apply the class names to the element. The `mapClasses` utility is used to apply the computed classes to the element.

</cdr-doc-table-of-contents-shell>
