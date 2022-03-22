---
{
  "title": "For Developers",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "breadcrumbs": [
    {
      "text": "Getting Started/"
    }
  ],
}
---

<cdr-img alt="representation of a development starting point - the ubiquitous Hello world text..." :src="$withBase(`/guides/for-developers/hello-world-1.png`)"/>

<br />
<br />

Welcome to the Cedar Design System. You can use Cedar’s components, tokens, and patterns to free
yourself (and your backlog) to continue doing work that inspires you and enhances the user
experience for our customers. Visit [“About“](../../about/cedar-design-system/) to learn more about
Cedar, design systems, and how you can benefit.

## First steps

If you are just starting out developing with Cedar, you’ll first need to [install Cedar](../installing-cedar/).
Once you have Cedar installed, here's a checklist of everything you need to get up and running.

-  [Learn Vue]()
-  [Understand Cedar’s parts]()
-  [Troubleshooting]()
-  [Contribute to Cedar]()
-  [Connect with us]()

## New to Vue?

Cedar components are built using Vue and can only be used in Vue projects.
Get updated on Vue with the following resources.

<br />

 <article-story-columns link1="https://vuejs.org" link2="https://vuejs.org/tutorial/#step-1"><template #col-1-img><cdr-img ratio="4-3" cover alt="" :src="$withBase(`/guides/for-developers/vue-docs-2.png`)"/></template><template #col-1-title>Review the official Vue docs</template><template #col-2-img><cdr-img ratio="4-3" cover alt="" :src="$withBase(`/guides/for-developers/vue-tutorials-3.png`)"/></template><template #col-2-title>Follow along with these Vue tutorials & online courses</template></article-story-columns>

<br />
<br />

## Understand Cedar’s Parts

### Tokens

Tokens are an evergreen set of variables mapped to the style attributes that define the foundation
of REI's visual language, including color, typography, and spacing. Tokens are maintained and
distributed by Cedar—just fetch the latest version to stay in sync with the visual language of
the co-op.


<br />

<article-story-columns link1="../../tokens/overview/" link2="../../tokens/all-tokens/" link3="#"><template #col-1-img><cdr-img ratio="4-3" cover alt="" :src="$withBase(`/guides/for-developers/token-overview-4.png`)"/></template><template #col-1-title> Token overview </template><template #col-2-img><cdr-img ratio="4-3" cover alt="" :src="$withBase(`/guides/for-developers/view-all-tokens-5.png`)"/></template><template #col-2-title> View all tokens  </template><template #col-3-img><cdr-img ratio="4-3" cover alt="" :src="$withBase(`/guides/for-developers/example-token-6.png`)"/></template><template #col-3-title>TODO: View an example token in the sandbox</template></article-story-columns>


<br />
<br />
  
### Components
Components are Cedar’s reusable, functional parts such as more visual components like buttons and
more functionally complex components like forms. Components are vue-based and use Cedar’s tokens to
distribute code templates that encapsulate reusable code. Components are maintained and distributed
by Cedar—when used in your application, you can stay in sync with the visual language of the co-op.

<article-story-columns link1="https://github.com/rei/rei-cedar" link2="../../components/buttons/" link3="https://codesandbox.io/s/hgjxb"><template #col-1-img><cdr-img ratio="4-3" cover alt="" :src="$withBase(`/guides/for-developers/view-all-components-7.png`)"/></template><template #col-1-title> View all components in Github </template><template #col-2-img><cdr-img ratio="4-3" cover alt="" :src="$withBase(`/guides/for-developers/view-button-doc-8.png`)"/></template><template #col-2-title> View button component docs for an example</template><template #col-3-img><cdr-img ratio="4-3" cover alt="" :src="$withBase(`/guides/for-developers/button-in-sandbox-9.png`)"/></template><template #col-3-title>TODO: may need to build this - View a button component example in the sandbox</template></article-story-columns>

<br />
<br />

### Component variables
Component variables are a limited set of style mixins for web that can be used to make DOM elements
appear to be a cedar component. Component variables should only be used when your team is unable to
directly consume and use the Vue Cedar components. Find out if your team should use component
variables and [learn more about them](../../components/component-variables/) or [view component variables in Github](https://github.com/rei/rei-cedar-component-variables).

### Patterns
Patterns are the principled guidance to common design problems at REI. Patterns may be UI or a
variety of other things, like a behavior, flow, or an application motif. For example, the alert
pattern gives design and development guidance for scenarios where you alert a user while the form
input types pattern offers common form types like street address. Access other patterns under the
pattern header in the navigation.

<br />

 <article-story-columns link1="../../patterns/alerts/" link2="../../patterns/forms-input-types/"><template #col-1-img><cdr-img ratio="4-2" cover alt="" :src="$withBase(`/guides/for-developers/alert-pattern-10.png`)"/></template><template #col-1-title>Alert pattern</template><template #col-2-img><cdr-img ratio="4-2" cover alt="" :src="$withBase(`/guides/for-developers/form-input-pattern-11.png`)"/></template><template #col-2-title>Form input types pattern</template></article-story-columns>

<br />
<br />

## Troubleshooting

Feeling stuck? Check out some important articles that might help you in your troubleshooting efforts.

<br />

 <article-story-columns link1="../../release-notes/fall-2021" link2="../../release-notes/deprecated/"><template #col-1-img><cdr-img ratio="4-2" cover alt="" :src="$withBase(`/guides/for-developers/past-release-notes-12.png`)"/></template><template #col-1-title>Reference past release notes</template><template #col-2-img><cdr-img ratio="4-2" cover alt="" :src="$withBase(`/guides/for-developers/deprecated-features.png`)"/></template><template #col-2-title>View the list of deprecated features</template></article-story-columns>

## Contribute to Cedar

Coding something that you think others can use? Learn about how you can contribute back to Cedar.

<br />

<article-story-columns link1="../../tokens/overview/#adding-design-tokens-to-the-repository" link2="../building-components-with-cedar/" link3="../../about/contributing-to-cedar/"><template #col-1-img><cdr-img ratio="4-3" cover alt="" :src="$withBase(`/guides/for-developers/contribute-token.png`)"/></template><template #col-1-title> Contribute a token </template><template #col-2-img><cdr-img ratio="4-3" cover alt="" :src="$withBase(`/guides/for-developers/build-reusable-component.png`)"/></template><template #col-2-title> Build a reusable component</template><template #col-3-img><cdr-img ratio="4-3" cover alt="" :src="$withBase(`/guides/for-developers/contributing-to-cedar.png`)"/></template><template #col-3-title>Read the guidelines for contributing to Cedar</template></article-story-columns>

<br />
<br />

## Connect with us
  The team is available for questions or one-on-one help. Connect with us on the Slack channel #cedar-user-support, join office hours (reach out to the team for an invite), or [sign up](https://forms.office.com/Pages/ResponsePage.aspx?id=npzFtGep6kuSHFlLQiB_F05iQ8ojF2dHtBV5C8NfjxBUMjFGRzNQOU04QkJGREFYNFNBTzFXQkZROC4u) for 1:1 help.

<br/>
<br/>

**Up next:** [Hand-off Process](../../getting-started/hand-off/)

<br/><br/>  
