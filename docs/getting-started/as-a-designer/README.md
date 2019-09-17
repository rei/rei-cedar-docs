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

<cdr-doc-table-of-contents-shell>

<cdr-doc-alert icon="warning"><strong>Instructions on this page are for internal REI designers only.</strong></cdr-doc-alert>



## Learn About Cedar

- Browse the Cedar Design System documentation and the [UI Toolkit Library](https://share.goabstract.com/ab520e30-0db8-4e5d-8310-cea8739da61c) to familiarize yourself with our foundation styles, components, and naming conventions
- Run the Cedar UI Toolkit installation process outlined below for Abstract and Sketch
- Review project files in Abstract to understand how designers are using components

---



## Installation

### Required Software

#### Abstract 
Abstract is used to distribute the Cedar UI toolkit and allows for:
- Version control of design files
- Collaboration and the ability to view project history
- Secure backup to REI servers

Download the latest version of Abstract through REI's Self Service application. Install the software to your local user application folder: 
1. From your desktop use the shortcut __Shift+Command+C__ to access your Mac disks.
2. Navigate to your local application folder, __Macintosh HD > Users > 'yourUserName' > Applications__.
3. Move the downloaded Abstract app into this application folder.

If you have any issues with installation, visit the [Abstract help center](https://www.abstract.com/help/) or talk to your manager.


#### Sketch (latest version)
If you are a new designer, download the latest version of Sketch using REI's Self Service application installed on your Mac. If Sketch isn't available there, talk to your manager.

---



### Required Fonts

To Install, open REI's Self Service application, search for _'Cedar'_, and install the following fonts:
- Stuart TTF · Digital
- Graphik TTF · Digital

<cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/download-fonts.png`)"/>

__A few things to remember:__
- The Stuart and Graphik _"OTF · Print"_ font variants available on Self Service are __not__ compatible with the Cedar Sketch Toolkit.
- The TTF font variants have _"App"_ after their name in applications like Sketch or FontBook. For example, _"REI Stuart App" _and _"Graphik App"_. Please only use these TTF versions in any digital design.


#### Legacy Fonts
Legacy fonts are no longer part of Cedar so __don't use them in new designs__, but you'll still need to install them until so that old design files will render properly. Roboto is also still used in many Cedar components and is required for the Cedar Sketch Toolkits to work properly. 

To Install, open REI’s Self Service application, search for, and install the following fonts:
- Roboto
- Sentinel
- Plak

---



### Recommended Sketch Plugins


__Cedar SVGO Compressor__  
Export icon svgs in a Cedar-compliant format and optimize other svg exports.  
[Download the .sketchplugin zip](https://github.com/rei/rei-cedar-sketch-svgo-compressor/releases/latest)  |  [Learn more on github](https://github.com/rei/rei-cedar-sketch-svgo-compressor)

__Sketchpacks__  
Manage and sync your Sketch plugins across machines and teams.  
[Download Sketchpacks](https://sketchpacks.com/)

__Symbol Swapper__  
Swap the selected symbols and/or symbol instances to another master, or swap entire libraries.  
[Install with Sketchpacks](https://sketchpacks.com/sonburn/symbol-swapper)

__Symbol Instance Renamer__  
Rename symbol instances to the name of their master. Makes symbols easier to find using __Command+F__.  
[Install with Sketchpacks](https://sketchpacks.com/sonburn/symbol-instance-renamer)

__Stark__  
Simulates color blindness and easily checks contrast.  
[Install with Sketchpacks](https://sketchpacks.com/stark-contrast/stark-sketch-plugin)

---



## Cedar UI Toolkit 

__Note:__ Cedar's UI Toolkit is only available for REI employees and approved third-party vendors. If you are an external vendor that needs access, please email cedar@rei.com.


### Toolkit Versions

The Cedar Sketch UI Toolkit provides reusable patterns and styles using Sketch symbols, Text Styles, and Layer Styles. There are 3 Toolkit versions of Cedar:
- __[CDR Toolkits · vCurrent](https://share.goabstract.com/ab520e30-0db8-4e5d-8310-cea8739da61c):__ Present; this is the current stable release of Cedar and will be updated on our regular release schedule. This is the version you'd use in most cases
- __[CDR Toolkits · vNext](https://share.goabstract.com/b776d364-237a-4885-8849-610ac7afdfe5):__ Future; the next version under development and constantly changing
- __[CDR Toolkits · vLegacy](https://share.goabstract.com/d6622675-42d4-40ab-a31a-64669e0d0000):__ Past; if you need an older version of the Toolkit, it is archived here. Use this only if you cannot use _vCurrent_ or _vNext_


### Toolkit Libraries

Each Toolkit project version contains different editions of the same 4 libraries:
- __[CDR Icons](https://share.goabstract.com/e9186773-0cc3-43a6-b7ff-54b163d95e00?sha=a814b05c391c93f5a7d39ce9508cd5238ae8fe0e):__ All Cedar icons
- __[CDR Tokens](https://share.goabstract.com/ab846e4a-5927-40e5-bbe0-a48eb6baf732?sha=a814b05c391c93f5a7d39ce9508cd5238ae8fe0e):__ Text, color, and redlining/spacing tools; these are platform-agnostic.
- __[CDR Web Components](https://share.goabstract.com/29cd0f23-fb23-42e4-976d-57f93ff3aa5c?sha=a814b05c391c93f5a7d39ce9508cd5238ae8fe0e):__ For web design, including mobile web
- __[CDR Native UI Components](https://share.goabstract.com/65b5f352-8903-4664-b250-1d1842da8b54?sha=a814b05c391c93f5a7d39ce9508cd5238ae8fe0e):__ For native apps (iOS and Android)

If you need to switch between Toolkit versions (for example, from _CDR Tokens · vCurrent_ to _CDR Tokens · vNext_), use the [Linked Library Swapping](#linked-library-swapping) process detailed below.


### Using the Toolkit

To link the UI Toolkit to your Abstract project:

1. Find and sync the __CDR Toolkit projects__ you want to use.  
  <cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/use-1-sync-toolkits.png`)"/>
2. From your new or current project, navigate to __Branches > Your-Branch > Files__ and click on the __Add File__ button. From the drop down, select __Link Sketch Library__.  
  <cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/use-2-link-libraries.png`)"/>
3. From the list of projects on the left, select the libraries you'll need. After selecting a file on the right, click on the __Link Library__ button to add it to your project.  
  <cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/use-3-link-libraries.png`)"/>
4. The linked libraries will appear at the bottom of your page list for the project file.  
  <cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/use-4-validate-linked-libraries.png`)"/>
5. That's it! You can now add Cedar components, icons, text styles, or layer styles to the artboards in your project's Sketch files.  
  <cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/use-5-use-linked-libraries.png`)"/>

---



## Updating the UI Toolkit


### Sketch Update Notification

Cedar releases are communicated through both [#cedar-user-support][cedar-user-support-link] and [#cedar-news](https://rei.slack.com/messages/C5W0VMKGU). 

If the UI Toolkit is linked to your project files, updates will automatically be available.

<cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/update-linked-libraries.png`)"/>

If a symbol within the Cedar UI Toolkit has been updated or changed, you will receive a __Library Updates Available__ notification in the upper right corner of the Sketch application. You will then be prompted to upgrade the symbols being used within your project. You can decline updates at any time, but will have to manually relink the symbols, text styles, and layer styles if you choose to update later.


### Linked Library Swapping

If you need to replace one version of a linked library with another in a different project, follow the instructions below. Note that these libraries must be different versions of the same library and contain the same symbols. For Example, replacing _CDR Icons • vCurrent_ with _CDR Icons • vNext_.
1. Add the new version of the linked library:  
  __Your-Project > Branches > Your-Branch > Files > Add File > Link Sketch Library > ReplacementLibrary.sketch > Link Library__  
  <cdr-img alt="screenshot" :src="$withBase(`/getting-started-for-designers/swap-1-add-new-lib.png`)"/>
2. For each file in the project referencing the old library, update the reference to the new library:  
  __Your-Project > Branches > Your-Branch > Files > Your File > Right-Click > Manage Libraries__  
  <cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/swap-2-manage-libs.png`)"/>  
3. Match the old version of the library to the new version and click __Apply Changes__.  
  <cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/swap-3-replace-libs.png`)"/>
3. Validate that the file is referencing the new library.  
  <cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/swap-4-validate-new-lib.png`)"/>
4. Now, remove the old linked library:  
  __Your-Project > Branches > Your-Branch > Files > Linked Libraries > LibraryToUnlink.sketch > Right-Click > Unlink Library > Stop Using as Library__  
  <cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/swap-5-unlink-old-lib.png`)"/>
5. Lastly, open the file, click the __Library Updates Available__ notification in the top right of sketch, and accept the updates.
  <cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/update-linked-libraries.png`)"/>
6. Thats all! Now the new library version is available in palace of the old.
  <cdr-img alt="screenshot" :src="$withBase(`/getting-started-for-designers/swap-6-use-new-lib.png`)"/>

---



## Contributing to Cedar
One of the best ways to influence the visual language of the Co-op's digital products is by contributing to the design system. There are many ways to contribute: UX research, UI design, authoring, and editing, to name a few. If you're interested in contributing, talk to your manager or contact the Cedar team using the [#cedar-user-support][cedar-user-support-link] Slack channel or visit Cedar's office hours.

---



## FAQ


### Google Drive

#### How can I transition from the Google Drive version?
Previously, the UI Toolkit was available using Abstract or Google Drive. Now, the UI Toolkit is only available using Abstract. If you need to relink symbols from the old Google Drive distributed version, use the [Symbol Swapper Plugin](https://sketchpacks.com/sonburn/symbol-swapper).
If you need extra support, contact the Cedar team using the [#cedar-user-support][cedar-user-support-link] Slack channel or visit Cedar's office hours. 


### Abstract

#### Do I need to install the Library for every new Abstract project file?
You will need to add the UI Toolkit for every new project you create in Abstract. Once the library is linked within a project, you will be able to access it through any Sketch file within your project.


### Sketch

#### Should I always update Sketch versions when it tells me to?
Yes! You should update Sketch when a new version is available. Note that a major Sketch release may prevent the UI Toolkit from loading. You can update Sketch using REI's Self Service application.

#### Can I break the Library?
You cannot break or change the library when viewing the library in your project files or having the UI Toolkit opened "Untracked"

#### How can I fix a bug or make an improvement to the toolkit?
You can create a branch of the Cedar library to make the changes yourself, or reach out to the Cedar team using the [#cedar-user-support][cedar-user-support-link] Slack channel to report a bug. 

---



## Advanced Abstract Methods
Advanced techniques the Cedar team uses internally. They may help you too.


### Cross-Project Merge

If you need to merge a file from a project into a duplicate file in a different project, follow these steps. Note that the files must originate from the same file. This is useful for keeping multiple versions of the same files in different projects.
1. Download the *new-version.sketch* file to your computer:  
  Navigate to the __*new-version.sketch* > Right-Click > Export > Save to your computer__  
  <cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/cross-proj-merge-1.png`)"/>
2. Create a new branch containing the *old-version.sketch*.
3. Replace the *old-version.sketch* file with the *new-version.sketch* file:  
  Navigate to the __*old-version.sketch* > Right-Click > Replace > Select the *new-version.sketch*__ that you saved in step 1.  
  <cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/cross-proj-merge-2.png`)"/>


### Multi-Project Syncing Strategy

This is how the Cedar team keeps multiple versions of the same project in sync. This strategy requires the synced projects set to have originated from the same project.

Doing these steps in this order will alter the order of changes between the _vNext_ and _vCurrent_ branches so that all _vNext_ changes take place __*after*__ all _vCurrent_ changes in their commit order, regardless of their actual timestamped chronology.

<cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/multi-proj-sync-diagram.png`)"/>

After each project has been updated independently, to sync the projects again and make a new major release from a beta branch:
1. Restore the youngest _vNext_ ancestor that had _vCurrent_ merged into it:  
  __vNext > Branches > Archived > (Youngest common ancestor __*branch*__ with _vCurrent_) > … > New Branch__  
  <cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/multi-proj-sync-1.png`)"/>
  <cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/multi-proj-sync-2.png`)"/>
  <cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/multi-proj-sync-3.png`)"/>
  __Restored Branch > Commits > (Youngest common ancestor __*commit*__ with _vCurrent_) > Restore Commit__  
  <cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/multi-proj-sync-4.png`)"/>
2. [Cross-Project Merge](#cross-project-merge) all _vCurrent_ project files into the _vNext_ ancestor branch project files
3. Update from Master: Pull changes from _vNext_ master into the _vNext_ branch, deal with merge conflicts, and commit.
  <cdr-img alt="screenshot"  :src="$withBase(`/getting-started-for-designers/multi-proj-sync-5.png`)"/>
4. Merge Branch back into vNext Master
5. [Cross-Project Merge](#cross-project-merge) all _vNext_ project files into _vCurrent_

__*Good Luck!*__

<br/><br/>  

</cdr-doc-table-of-contents-shell>
