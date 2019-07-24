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

## Learn About Cedar

- Browse the Cedar Design System documentation and the UI Toolkit library to familiarize yourself with our foundation styles, components, and naming conventions
- Run through the installation process outlined below for Abstract and Sketch
- Look across project files in Abstract to learn how designers are using components

<br/>
<hr>

## Installation

### Required Software

#### Abstract 
Abstract is used to distribute the Cedar UI toolkit, which allows for:
- Version control of design files
- Collaboration and project history
- Secure backup to REI servers

<br/>

Download the latest version of Abstract from [www.abstract.com/download](http://www.abstract.com/download). Install the software to your local user application folder:   
- From your desktop use the shortcut, **Shift-Command-C**, to access your Mac disks
- Navigate to your local application folder, **Macintosh HD > Users > “yourUserName” > Applications**
- Drop the downloaded Abstract file into this application folder
- Talk to your manager if you have any issues with installation


#### Sketch (latest version)
If you are a new designer, download the latest version of Sketch using REI’s Self Service application installed on your Mac. If Sketch isn’t available there, talk to your manager.

<br/>

Sketch libraries for teams using Cedar are:
- **CDS - Web Toolkit:** For web application design, including mobile web, and contains:
    - **CDS - Icons:** All Cedar icons  
    - **CDS - Web Toolkit:** Components and tokens for color, type, and spacing
- **CDS - Native Toolkit:** For native apps (iOS and Android) 


### Required Fonts
**Sentinel**<br/>
Install the font using REI’s Self Service application installed on your Mac.


**Roboto and Roboto Condensed**<br/>
Install these fonts from [Google Fonts](https://fonts.google.com/download?family=Roboto|Roboto+Condensed). This link will automatically download a zip file containing Roboto and Roboto Condensed. After downloading the zip file, install the fonts using Font Book. 


### Cedar UI Toolkit 
**Note:** Cedar’s UI Toolkit is only available for REI employees and approved third-party vendors. If you are an external vendor that needs access, please email [cedar@rei.com](mailto:cedar@rei.com).

The UI Toolkit provides reusable patterns and styles across the team using Sketch symbols. To link the UI Toolkit to your Abstract project:

<ol>
<li>
From within your new or current project, navigate to <strong>Master > Files</strong> and click on the <strong>Add File</strong> button. From the drop down, select <strong>Link Sketch Library</strong>.
<cdr-img class="cdr-doc-article-img" alt="screenshot of Abstract interface with Link Sketch Library button highlighted"  :src="$withBase(`/getting-started-for-designers/abstract_scr_01.png`)"/>
</li>
<br/>
<li>
From the list of projects on the left, select the <strong>CDS - Web Toolkit</strong> or <strong>CDS - Native Toolkit</strong> (depends on the platform you’re designing for). After selecting a file on the right, click on the <strong>Link Library</strong> button to add it to your project.
<cdr-img class="cdr-doc-article-img" alt="screenshot of Abstract interface with CDS - Web Toolkit menu highlighted" :src="$withBase(`/getting-started-for-designers/abstract_scr_02.png`)"/>
</li>
<br/>
<li>
The linked libraries will appear at the bottom of your page list for the project file.
<cdr-img class="cdr-doc-article-img" alt="screenshot of Abstract interface with Linked Libraries section highlighted" :src="$withBase(`/getting-started-for-designers/abstract_scr_03.png`)"/>
</li>
<br/>
<li>
That’s it! You can now add Cedar components to the Artboards in your project’s Sketch files.
<cdr-img class="cdr-doc-article-img" alt="screenshot of Sketch interface with Insert menu item for CDS -Web Toolkit highlighted" :src="$withBase(`/getting-started-for-designers/sketch_scr_01.png`)"/>
</li>
</ol>

<br/>
<hr>

### Recommended Tools and Plugins

**Sketch Measure**<br/>
Make it a fun process to create specs for developers and teammates.
[Download from GitHub](https://github.com/utom/sketch-measure)
<br/>

**Sketchpacks**<br/>
Manage and sync your Sketch plugins across machines and teams.
[Download from Sketchpacks](https://sketchpacks.com/)
<br/>

**Nudg.it**<br/>
Change your large (shift+arrow) nudge from 10 to 8 to easily align with spacing system.
[Download from Nudg.it](http://nudg.it/)
<br/>
<hr>

## Updating the UI Toolkit in Your Project 
### Sketch Update Notification

System releases are communicated through both [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4) and [#cedar-news](https://rei.slack.com/messages/C5W0VMKGU). 

If the UI Toolkit is linked to your project files, updates will automatically be available.

If a symbol within the UI Toolkit has been updated or changed, you will receive a notification of the change in the upper right corner of the Sketch application. You will then be prompted to upgrade the symbol if it is being used within your project. You can decline updates at any time, but will have to manually re-add the symbol back if you choose to update later.

<cdr-img class="cdr-doc-article-img" alt="screenshot of Sketch interface with Library Updates Available notification" :src="$withBase(`/getting-started-for-designers/sketch_scr_02.png`)"/>

<br>

If you see a change to a Symbol that you definitely do not want to make, then double-click an instance of it on the Sketch Canvas, and click **Unlink from Library**. This will turn the Library Symbol into a ‘local’ Symbol visible on your **Symbols** page.

<br>

### Manually Updating Your Symbols 

If you unlinked a symbol from Cedar’s UI Toolkit or if you previously installed the UI Toolkit from the Google drive, you will need to manually update your symbols. Follow these steps in your Sketch file:  
1. Select an unlinked symbol.
2. Open the **Insert** menu. 
3. From the **Symbols** section, select the corresponding symbol from **CDS - Web Toolkit** (or **CDS - Native Toolkit**) to replace the selected symbol.
4. Replace all unlinked symbols one-by-one until they’ve all been updated.

<br/>
<hr>

## Annotating Cedar-based Designs
The Cedar team suggests using Sketch Measure to label Cedar components when redlining final designs. An advantage of working with the UI Toolkit is that the name of the component symbols closely align to the names used in development. This provides a common language among the two teams and allows for smoother, more efficient handoffs.

Example of annotated redlines to show Cedar components as well as spacing variables:

<cdr-img class="cdr-doc-article-img" alt="annotation example using Sketch measure" :src="$withBase(`/getting-started-for-designers/image10.png`)"/>

<br/>
<hr>

## Contributing Design to Cedar
One of the best ways to influence the visual language of the Co-op’s digital products is by contributing to the design system. There are many ways to contribute: UX research, UI design, authoring, and editing, to name a few. If you’re interested in contributing, talk to your manager or reach out to the Cedar team.

<br/>
<hr>

## FAQ
### Transition from Google Drive

#### How can I transition from the Google Drive version?
Previously, the UI Toolkit was available using Abstract or Google Drive. Now, the UI Toolkit is only available using Abstract. 

Contact the Cedar team using the [#cedar-user-support](https://rei.slack.com/messages/CA58YCGN4) Slack channel or visit Cedar’s office hours. 

Follow the above steps for updating the UI Toolkit in your project. 

<br/>
<hr>

### Abstract

#### Do I need to install the Library for every new Abstract project file?
You will need to add the UI Toolkit for every new project you create in Abstract. Once the library is linked within a project, you will be able to access it through any Sketch file within your project.

<br/>
<hr>

#### How do I know Abstract is tracking my changes in Sketch? 
If you are working on a Sketch file, there will be a notification bar at the bottom of the Sketch UI with the current branch labeled. This is the notification that Abstract is tracking your changes.

<br/>
<hr>

### Sketch

#### Should I always update Sketch versions when it tells me to?
You should usually update Sketch whenever a new version is available. A major Sketch release may prevent the UI Toolkit from loading. 

Update Sketch using REI’s Self-Service application or talk with your manager about the best process for updating Sketch. 

<br/>
<hr>

#### Can I break the Library?
You cannot break or change the library when viewing the library in your project files or having the UI Toolkit opened “Untracked”.

<br/>
<hr>

#### I found a bug with the UI Toolkit (or some other Cedar service). How do I let you know?
Thanks for catching that for us. Please fill out and submit a [Bug Report Form](https://airtable.com/shr3wSPCYQbycVx7i) and the Cedar team will get it in our backlog.

<br/>
<hr>

#### I have an idea for an enhancement to the UI Toolkit. Who do I talk to?
Great! Your feedback is appreciated. If your addition is unique, you can submit a request using [Cedar Feature Request Form](https://airtable.com/shrcbq9CHthuMO7AC).

<br/>
<hr>

</cdr-doc-table-of-contents-shell>
