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

<cdr-doc-table-of-contents-shell>

<cdr-doc-alert icon="warning"><strong>Instructions on this page are for internal REI designers only.</strong></cdr-doc-alert>



## Learn About Cedar Cuz its great

- Browse the Cedar Design System documentation and the [UI Toolkit Library]() to familiarize yourself with our [foundation styles](), [components](), and [naming conventions]().
- Run the Cedar UI Toolkit installation process outlined below for Abstract and Sketch.
- Review project files in Abstract to understand how designers are using components.

<hr/>



## Installation

### Required Software

#### Abstract 
Abstract is used to distribute the Cedar UI toolkit and allows for:
- Version control of design files
- Collaboration and the ability to view project history
- Secure backup to REI servers

Download the latest version of Abstract through REI’s Self Service application. Install the software to your local user application folder: 
1. From your desktop use the shortcut __Shift+Command+C__ `⇧⌘C` to access your Mac disks.
2. Navigate to your local application folder, __Macintosh HD > Users > 'yourUserName' > Applications__.
3. Move the downloaded Abstract app into this application folder.

If you have any issues with installation, visit the [Abstract help center](https://www.abstract.com/help/) or talk to your manager.


#### Sketch (latest version)
If you are a new designer, download the latest version of Sketch using REI’s Self Service application installed on your Mac. If Sketch isn’t available there, talk to your manager.

<hr/>



### Required Fonts
Open REI’s Self Service application, search for, and install the following fonts:
- Sentinel
- Roboto
- Plak

__Note:__ Plak is a legacy, but you’ll still want to install it until it is completely phased out.

<hr/>



### Recommended Sketch Plugins


__Cedar SVGO Compressor__<br/>
Export icon svgs in a Cedar-compliant format and optimize other svg exports.<br/>
[Download the .sketchplugin zip](https://github.com/rei/rei-cedar-sketch-svgo-compressor/releases/latest)  |  [Learn more on github](https://github.com/rei/rei-cedar-sketch-svgo-compressor)

__Sketchpacks__<br/>
Manage and sync your Sketch plugins across machines and teams.<br/>
[Download Sketchpacks](https://sketchpacks.com/)

__Symbol Swapper__<br/>
Swap the selected symbols and/or symbol instances to another master, or swap entire libraries.<br/>
[Install with Sketchpacks](https://sketchpacks.com/sonburn/symbol-swapper)

__Symbol Instance Renamer__<br/>
Rename symbol instances to the name of their master. Makes symbols easier to find using Command+F `⌘F`.<br/>
[Install with Sketchpacks](https://sketchpacks.com/sonburn/symbol-instance-renamer)

__Stark__<br/>
Simulates color blindness and easily checks contrast.<br/>
[Install with Sketchpacks](https://sketchpacks.com/stark-contrast/stark-sketch-plugin)

<hr/>



## Cedar UI Toolkit 

Note: Cedar’s UI Toolkit is only available for REI employees and approved third-party vendors. If you are an external vendor that needs access, please email cedar@rei.com.


### Toolkit Versions

The Cedar Sketch UI Toolkit provides reusable patterns and styles using Sketch symbols, Text Styles, and Layer Styles. There are 3 Toolkit versions of Cedar:
- __[CDR Toolkits · vCurrent]():__ Present; this is the current stable release of Cedar and will be updated on our regular release schedule. This is the version you’d use in most cases.
- __[CDR Toolkits · vNext]():__ Future; the next version under development and constantly changing.
- __[CDR Toolkits · vLegacy]():__ Past; if you need an older version of the Toolkit, it is archived here. Use this only if you cannot use _vCurrent_ or _vNext_.


### Toolkit Libraries

Each Toolkit project version contains different editions of the same 4 libraries:
- __[CDR Icons]():__ All Cedar icons.
- __[CDR Tokens]():__ Text, color, and redlining/spacing tools; these are platform-agnostic.
- __[CDR Web Components]():__ For web design, including mobile web.
- __[CDR Native UI Components]():__ For native apps (iOS and Android). 

If you need to switch between Toolkit versions (for example, from _CDR Tokens · vNext_ to _CDR Tokens · vCurrent_), use the [Linked Library Swapping]() process detailed below.


### Using the Toolkit

To link the UI Toolkit to your Abstract project:

1. Find and sync the __CDR Toolkit projects__ you want to use.<br/>
  <cdr-img class="cdr-doc-article-img" alt="screenshot"  :src="$withBase(`/getting-started-for-designers/screenshotName.png`)"/>
2. From your new or current project, navigate to __Branches > Your-Branch > Files__ and click on the __Add File__ button. From the drop down, select __Link Sketch Library__.<br/>
  <cdr-img class="cdr-doc-article-img" alt="screenshot"  :src="$withBase(`/getting-started-for-designers/screenshotName.png`)"/>
3. From the list of projects on the left, select the libraries you’ll need. After selecting a file on the right, click on the __Link Library__ button to add it to your project.<br/>
  <cdr-img class="cdr-doc-article-img" alt="screenshot"  :src="$withBase(`/getting-started-for-designers/screenshotName.png`)"/>
4. The linked libraries will appear at the bottom of your page list for the project file.<br/>
  <cdr-img class="cdr-doc-article-img" alt="screenshot"  :src="$withBase(`/getting-started-for-designers/screenshotName.png`)"/>
5. That’s it! You can now add Cedar components, icons, text styles, or layer styles to the artboards in your project’s Sketch files.<br/>
  <cdr-img class="cdr-doc-article-img" alt="screenshot"  :src="$withBase(`/getting-started-for-designers/screenshotName.png`)"/>

<hr/>



## Updating the UI Toolkit


### Sketch Update Notification

Cedar releases are communicated through both [#cedar-user-support]() and [#cedar-news](). 

If the UI Toolkit is linked to your project files, updates will automatically be available.

<cdr-img class="cdr-doc-article-img" alt="screenshot"  :src="$withBase(`/getting-started-for-designers/screenshotName.png`)"/>

If a symbol within the Cedar UI Toolkit has been updated or changed, you will receive a __Library Updates Available__ notification in the upper right corner of the Sketch application. You will then be prompted to upgrade the symbols being used within your project. You can decline updates at any time, but will have to manually relink the symbols, text styles, and layer styles if you choose to update later.


## Linked Library Swapping

If you need to replace one version of a linked library with another in a different project, follow the instructions below. Note that these libraries must be different versions of the same library and contain the same symbols. For Example, replacing _CDR Icons • vNext_ with _CDR Icons • vCurrent_.
1. Create a new branch of your project.<br/>
  <cdr-img class="cdr-doc-article-img" alt="screenshot"  :src="$withBase(`/getting-started-for-designers/screenshotName.png`)"/>
2. Add the new version of the linked library:<br/>
  __Your-Project > Branches > Your-Branch > Files > Add File > Link Sketch Library > ReplacementLibrary.sketch > Link Library__<br/>
    <cdr-img class="cdr-doc-article-img" alt="screenshot"  :src="$withBase(`/getting-started-for-designers/screenshotName.png`)"/>
3. For each file in the project referencing the old library, update the reference to the new library:<br/>
  __Your-Project > Branches > Your-Branch > Files > Your File > Right-Click > Manage Libraries__<br/>
  <cdr-img class="cdr-doc-article-img" alt="screenshot"  :src="$withBase(`/getting-started-for-designers/screenshotName.png`)"/>
  Match the old version of the library to the new version and click __Apply Changes__.
4. Validate that the file is referencing the new library.<br/>
  <cdr-img class="cdr-doc-article-img" alt="screenshot"  :src="$withBase(`/getting-started-for-designers/screenshotName.png`)"/>
5. Now, remove the old linked library:<br/>
  __Your-Project > Branches > Your-Branch > Files > Linked Libraries > LibraryToUnlink.sketch > Right-Click > Unlink Library > Stop Using as Library__<br/>
  <cdr-img class="cdr-doc-article-img" alt="screenshot"  :src="$withBase(`/getting-started-for-designers/screenshotName.png`)"/>
6. Merge to Master.

<hr/>



## Contributing to Cedar
One of the best ways to influence the visual language of the Co-op’s digital products is by contributing to the design system. There are many ways to contribute: UX research, UI design, authoring, and editing, to name a few. If you’re interested in contributing, talk to your manager or contact the Cedar team using the [#cedar-user-support]() Slack channel or visit Cedar’s office hours.

<hr/>


<!-- TODO: 
## Advanced Abstract Methods

### Linked Library Swapping
goes here when this section is filled out later

### Cross-Project Merge

If you need to merge a file from a project into a duplicate file in a different project, follow these steps. Note that the files must originate from the same file. This is useful for keeping multiple versions of the same files in different projects.
1. Download the *new-version.sketch* file to your computer:<br/>
  Navigate to the __*new-version.sketch* > Right-Click > Export > Save to your computer__<br/>
  <cdr-img class="cdr-doc-article-img" alt="screenshot"  :src="$withBase(`/getting-started-for-designers/screenshotName.png`)"/>
2. Create a new branch containing the *old-version.sketch*.
3. Replace the *old-version.sketch* file with the *new-version.sketch* file:<br/>
  Navigate to the __*old-version.sketch* > Right-Click > Replace > Select the *new-version.sketch*__ that you saved in step 1.<br/>
  <cdr-img class="cdr-doc-article-img" alt="screenshot"  :src="$withBase(`/getting-started-for-designers/screenshotName.png`)"/>
4. Merge to Master.


### Multi-Project Syncing Strategy

__James will doc this better and take screenshots when we actually release the fall update.__

This is how the cedar team keeps multiple versions of the same project in sync. This strategy requires the synced project set to have originated from the same project. After each project has been updated independently, to sync the projects again and make a new major release from a beta branch:
1. Restore the youngest vNext ancestor that had vCurrent merged into it:<br/>
  __vNext > Branches > Archived > (Youngest common ancestor *branch* with vCurrent) > … > New Branch__<br/>
  <cdr-img class="cdr-doc-article-img" alt="screenshot"  :src="$withBase(`/getting-started-for-designers/screenshotName.png`)"/><br/>
  __Restored Branch > Commits > (Youngest common ancestor *commit* with vCurrent) > Restore Commit__<br/>
  <cdr-img class="cdr-doc-article-img" alt="screenshot"  :src="$withBase(`/getting-started-for-designers/screenshotName.png`)"/>
2. [Cross-Project Merge]() the vCurrent project files into the vNext commit project files
3. Update from Master: Pull changes from vNext master into vNext branch, deal with merge conflicts, commit.
4. Merge Branch back into vNext Master
5. [Cross-Project Merge]() vNext Project into vCurrent

This is quite complex, but it might help you.

<cdr-img class="cdr-doc-article-img" alt="screenshot"  :src="$withBase(`/getting-started-for-designers/screenshotName.png`)"/>

<hr/>
 -->


## FAQ

### Google Drive

#### How can I transition from the Google Drive version?
Previously, the UI Toolkit was available using Abstract or Google Drive. Now, the UI Toolkit is only available using Abstract. If you need to relink symbols from the old Google Drive distributed version, use the [Symbol Swapper Plugin]().
If you need extra support, contact the Cedar team using the [#cedar-user-support]() Slack channel or visit Cedar’s office hours. 


### Abstract

#### Do I need to install the Library for every new Abstract project file?
You will need to add the UI Toolkit for every new project you create in Abstract. Once the library is linked within a project, you will be able to access it through any Sketch file within your project.


### Sketch

#### Should I always update Sketch versions when it tells me to?
Yes! You should update Sketch when a new version is available. Note that a major Sketch release may prevent the UI Toolkit from loading. You can update Sketch using REI’s Self Service application.

#### Can I break the Library?
You cannot break or change the library when viewing the library in your project files or having the UI Toolkit opened “Untracked”

#### I found a bug with the UI Toolkit or I want to make an improvement. How do I do that?
You can create a branch of the Cedar library to make the changes yourself, or reach out to the Cedar team using the [#cedar-user-support]() Slack channel to report a bug. 



</cdr-doc-table-of-contents-shell>
