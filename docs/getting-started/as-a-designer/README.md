---
{
  "title": "As a Designer",
  "title_metadata": false,
  "layout": "LayoutArticle",
  "breadcrumbs": [
    {
      "text": "Getting Started/",
      "href": "/getting-started/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell>

## Learn About Cedar

- Browse the library and familiarize yourself with our foundation, components, and naming conventions.
- Run through the installation process outlined below.
- If set up on Abstract, look across project files to learn how designers are using components.

## Installation

### Required Software

#### Sketch v50.x +

You should be very comfortable using Sketch. If you are a new designer, download the latest version of Sketch using the Self Service app installed on your mac. If Sketch isn’t available there, talk to your manager.

#### Google Drive

The Cedar UI Toolkit is distributed using Google Drive. This allows you to pull updates as they’re made available. Download Google Drive for your Mac. Choose the Personal version.

<ol>
  <li>
    Install Backup and Sync from Google
    <ol>
      <li>
        <strong>Navigate</strong> to your local Applications folder by pressing Command + Spacebar and typing in your REI username.
        <cdr-img class="cdr-doc-article-img" :src="$withBase(`/getting-started-for-designers/image9.png`)"/>
      </li>
      <li>
        <strong>Drag</strong> Backup and Sync to your local Applications folder, not the system folder.
        <cdr-img class="cdr-doc-article-img" :src="$withBase(`/getting-started-for-designers/image7.png`)"/>
      </li>
    </ol>
  </li>
  <li>
    Open Backup and Sync
    <ol>
      <li>
        <strong>Sign in</strong> to Google using your REI email. If you don’t have your company email linked to Google, create an account.
      </li>
      <li>
        On the next step, <strong>uncheck</strong> unneeded folders.
        <cdr-img class="cdr-doc-article-img" :src="$withBase(`/getting-started-for-designers/image2.png`)"/>
      </li>
      <li>
        <strong>Check</strong> the “Sync My Drive to this computer” option to add Google Drive to your Finder.
        <cdr-img class="cdr-doc-article-img" :src="$withBase(`/getting-started-for-designers/image6.png`)"/>
      </li>
      <li>
        Click <strong>Start</strong>.
      </li>
      <li>
        Upon successful installation, you’ll get a notification on you desktop that Sync is complete.
      </li>
      <li>
        Finally, <strong>navigate</strong> to the <a href="https://drive.google.com/drive/folders/0B7H-SygEBEpfQmloX1o5TThNRmc" target="_blank">Sketch Library folder</a> in the REI Design System Google Drive, right-click the Cedar UI Toolkit file and “Add it to My Drive”.
        <cdr-img class="cdr-doc-article-img" :src="$withBase(`/getting-started-for-designers/image5.png`)"/>
      </li>
    </ol>
  </li>
</ol>

### Required Fonts

#### Sentinel

Install the font using Self Service on your Mac.

#### Roboto

Install the font using [Google Fonts](https://fonts.google.com/specimen/Roboto).

### Sketch Library

Sketch Libraries enable us to sync and share system features across the team using Sketch Symbols. To install the Cedar Library:

<ol>
  <li>
    <strong>Add the Library to Sketch</strong>
    <ol>
      <li>
        Open Sketch and navigate to <strong>Sketch > Preferences > Libraries</strong> in the menu.
        <cdr-img class="cdr-doc-article-img" :src="$withBase(`/getting-started-for-designers/image1.png`)"/>
      </li>
      <li>
        Click “Add Library&hellip;”
      </li>
      <li>
        Navigate to your Google Drive in Finder.
      </li>
      <li>
        Select the <strong>Cedar UI Toolkit.sketch</strong> file and <strong>click</strong> “Open.”
        <cdr-img class="cdr-doc-article-img" :src="$withBase(`/getting-started-for-designers/image4.png`)"/>
      </li>
      <li>
        That’s it! You can now add Cedar components to designs in other Sketch files.
        <cdr-img class="cdr-doc-article-img" :src="$withBase(`/getting-started-for-designers/image8.png`)"/>
      </li>
    </ol>
  </li>
</ol>

### Recommended Tools and Plugins

#### Abstract 

Abstract is another way that the UI Toolkit is distributed to your project. If you’re interested in learning more about Abstract or would like a demo, talk to your manager.<br/>
[Learn more about Abstract](https://www.goabstract.com/)

#### Sketch Measure

Make it a fun process to create specs for developers and teammates.<br/>
[Download from Github](https://github.com/utom/sketch-measure)

#### Sketchpacks

Manage and sync your Sketch plugins across machines and teams.<br/>
[Download from Sketchpacks](https://sketchpacks.com/)

#### Nudg.it

Change your large (shift+arrow) nudge from 10 to 8 to easily align with spacing system.<br/>
[Download from Nudg.it](http://nudg.it/)

## Annotating/Delivering Cedar-based Designs

The Cedar team suggests using Sketch Measure to label and shade Cedar components when redlining final designs. An advantage of working with the REI UI Toolkit is the name of the component symbols closely align to the names used in development. This provides a common language among the two teams and allows for smoother, more efficient handoffs.

Example of UI annotated to show what is a Cedar component as well as spacing variables:

<cdr-img class="cdr-doc-article-img" :src="$withBase(`/getting-started-for-designers/image10.png`)"/>

## Contributing Design to Cedar

One of the best ways to influence the visual language of the co-op’s digital products is by contributing to the design system. There are many ways to contribute: UX research, UI design, authoring, and editing, to name a few. If you’re interested in contributing talk to your manager.

## Common Questions

- [How will I know when an update is available?](#how-will-i-know-when-an-update-is-available)
- [I found a bug in the UI Toolkit. How do I let you know?](https://airtable.com/shr3wSPCYQbycVx7i)
- [I have an idea for an enhancement to the Cedar UI Toolkit. Who do I talk to?](https://airtable.com/shrcbq9CHthuMO7AC)
- [Should I always update Sketch versions when it tells me to?](#should-i-always-update-sketch-versions-when-it-tells-me-to)
- [Can I break the Library?](#can-i-break-the-library)
- [Do I need to install the Library for every new Sketch file?](#do-i-need-to-install-the-library-for-every-new-sketch-file)

#### How will I know when an update is available?

System releases are communicated through both #cedar-design-system and #cedar-design.

Depending on your Google Drive settings, you will either see a notification in Sketch immediately or have to manually initiate a sync to see the notification. Clicking on the update in Sketch will reveal what component designs have been updated.
<cdr-img class="cdr-doc-article-img" :src="$withBase(`/getting-started-for-designers/image3.png`)"/>

#### I found a bug with the UI Toolkit (or some other Cedar service). How do I let you know?

Sorry about that. Please fill out and submit a [Bug Report Form](https://airtable.com/shr3wSPCYQbycVx7i) and the Cedar team will get it in our backlog.

#### I have an idea for an enhancement to the Cedar UI Toolkit. Who do I talk to?

Great! Your feedback is appreciated. If your addition is unique, you can [submit a request](https://airtable.com/shrcbq9CHthuMO7AC) to the Cedar team backlog.

#### Should I always update Sketch versions when it tells me to?

Updating Sketch is easy to do and ensures compatibility with the UI Toolkit. When prompted to update, simply install Sketch again using Self Service.

By not updating when the library does, you run the risk of the Sketch Library not loading. This has occurred with major Sketch releases (50.0) in the past. Minor releases (50.2) are less troublesome and have had minimal impact on the library updates.

#### Can I break the Library?

It’s possible to overwrite the shared Sketch library source file—breaking what’s real for all other users. Follow the [Sketch Library](#sketch-library) steps closely and refrain from opening the source file housed on the Design System team’s Google Drive.

#### Do I need to install the Library for every new Sketch file?

No. Once you finish the installation process above, the Cedar UI Toolkit library will be available in Sketch’s Symbols menu for any file you open.

</cdr-doc-table-of-contents-shell>
