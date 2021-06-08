---
{
  "title": "As a Designer",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "breadcrumbs": [
    {
      "text": "Getting Started/"
    }
  ]
}
---

[cedar-user-support-link]: https://rei.slack.com/messages/CA58YCGN4
<cdr-doc-alert icon="warning">Instructions on this page are applicable to internal REI designers only.</cdr-doc-alert>

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>



## Design Guidelines
Cedar manages the design language for the Co-op’s digital products. On this site, you will find supporting documentation for everything Cedar offers. After you’re set up with our Toolkits, check out our foundation pages and pay special attention to [Color](../../foundation/color) and [Typography](../../foundation/typography/) for more nuanced guidance.

### Additional Brand Guidelines
- [Brand Asset Guide](https://public.cloud-dam.rei.com/api/public/content/6dcb72cc891243c0b8235c5cd0487637)
- [Photography Style Guide](https://www.cloud-dam.rei.com/en-us/AssetGuidesandCreativeStandards/AssetGuideBuild/REIPhotographyStandards)


## Design Toolkits

<cdr-doc-alert icon="info">As of our 2020 Spring Release, we’re no longer distributing toolkits through Sketch or Abstract. If you’re working on a legacy project and need access to an older version of Cedar, reach out to our <cdr-link src="https://rei.slack.com/archives/CA58YCGN4">User Support</cdr-link> channel on Slack. If you need help migrating your project to Figma, reach out to the <cdr-link src="https://rei.slack.com/archives/CT17MBAJ1">Figma Guild</cdr-link> on Slack.</cdr-doc-alert>

The design system toolkit is distributed as shared libraries through Figma. These libraries are directly managed by the Cedar team and automatically integrated into any new project.


#### Installing Figma
Figma is available for use directly in the browser, but we recommend installing the desktop app. The app is available to all designers through the Self Service client.

#### Required Fonts
[Typefaces](../../foundation/typography/) are automatically distributed through Figma for use across projects.

### Shared Token Libraries
[Design tokens](../../tokens/overview/) are available for use in any project using any platform and are easy for developers to work with. Token libraries are automatically shared through Figma when you start a new project.

#### Color
[Color](../../foundation/color) choices are all derived from a close working relationship with the Brand team.

#### Type
Two primary brand typefaces are available as a range of pre-defined, ready-to-use type styles.  

#### Spacing
All spacing — from the padding inside a button to range of available icon sizes — is derived from a single spacing [scale](../../foundation/spacing/).

#### Prominence & Shape
Design decisions like border radii and ranges of available drop shadows are stored in this library.

#### Grid & Breakpoints
The [grid system](../../components/grid/) enables consistency of layout while our breakpoints.

#### Iconography
Additionally, you can visit the [Icon Library](https://rei.github.io/cedar-icons/#/) for a complete and searchable list of icons.

### Shared Component Libraries
#### Web Components
Cedar’s web components are available for direct plug-and-play into all platforms using the Microsite Framework. Check with your developer to ensure your project can consume Cedar’s web components.

### Toolkit Updates
#### Major Releases
Major releases typically ship every quarter and with plenty of advance notice. Only two major releases are supported at a time: the current release and the prior release.

- The current toolkits will be tagged vCurrent
- The previous toolkit will be named vLegacy

#### Minor Releases and Patches
Smaller toolkit updates could come at any time. This could include (but is not limited to) accessibility fixes, bug fixes, layout improvements, or component behavior updates.

#### Consuming Updates in Figma
When we push changes to either our token or component libraries, users will be notified and prompted to update to the newer version directly in Figma.

<cdr-img alt="screenshot" :src="$withBase(`/getting-started-for-designers/figma-update-alert.png`)"/>


## Project Support
The Cedar team is available to help with adopting, consuming, or contributing to the design system. Feel free to swing by our weekly office hours or reach out to us on Slack for immediate support.


## FAQ
#### Can I break the library?
You won’t be able to make changes to the library that would impact other projects. By keeping Cedar libraries enabled and using components as-is, you minimize your risk of falling out of sync. Note that if you detach a component, you will no longer receive future updates from our team for that component. Never detach a component for production work.

#### How can I fix a bug or make an improvement to the toolkit?
You can create a branch of the Cedar library to make the changes yourself, or reach out to the Cedar team using the [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4) Slack channel to report a bug.

#### Should I always consume updates to Figma Components?
We keep the design and code aligned so if there’s an update available in Figma it means your developer has access to an update as well. It’s always smart to check in with your developer though.




<br/><br/>  

</cdr-doc-table-of-contents-shell>
