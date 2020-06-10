---
{
  "title": "As a Mobile Developer",
  "title_metadata": false,
  "layout_type": "LayoutArticle",
  "breadcrumbs": [
    {
      "text": "Getting Started/"
    }
  ],
}
---

<cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>

## Developing for Mobile

Currently development for iOS and Android is through the usage of Cedar Tokens as documented below.  

Our mobile development packages include fonts that are licensed and proprietary to REI. For more information or questions regarding Cedar’s support for external consumers using the mobile development packages on GitHub or NPM, please reach out to [cedar@rei.com](mailto:cedar@rei.com).

### iOS

#### CocoaPods
The preferred way to consume Cedar for iOS is through CocoaPods.  View [www.cocoapods.org](https://www.cocoapods.org/) for more information.

To find out if Cocoapods is already installed, open the terminal and run:

_Terminal_
```bash
pod --version
```

If “command not found” is returned then Cocoapods in not installed.

To install Cocoapods:

_Terminal_
```bash
sudo gem install cocoapods
```

To set up Cocoapods from the project/workspace directory, run:

_Terminal_
```bash
pod init
```

The above command will create a Podfile in your current directory.


The Podfile must be modified with the following to include Cedar as a dependency:

**1. Prior to the Targets Section of the Podfile:**

_Terminal_
```bash
source 'https://git.rei.com/projects/CDR/repos/cedar-iosl/CedarPodSpec.git'
```

**2. In the Targets Section of the Podfile:**

_Terminal_
```bash
pod 'CedarTokens', '~> 0.2.0'
```

**Full Podfile Example for Reference:**

_Terminal_
```bash
project 'CedarIOSCocoaPodDemo.xcodeproj/'

platform :ios, '12.0'

source 'https://git.rei.com/projects/CDR/repos/cedar-ios-podspec/CedarPodSpec.git'

target 'CedarIOSCocoaPodDemo' do
  # Pods for CedarIOSCocoaPodDemo
  pod 'CedarTokens', '~> 0.2.0'

end
```

<hr/>

#### Manual Consumption
If you don’t use Cocoapods, you can manually import files into your iOS project/workspace.  

##### Colors

Color Sets in a .xcasset file.  Import the file by dragging the `Cedar.xcassets > Colors` folder into your project's asset folder.

You can set the colors in Interface Builder, or by:

_Terminal_
```bash
Button1.backgroundColor = UIColor(named: "cdr_color_text_primary");
```

##### Text

The package includes Sentinel and Roboto font source files along with Swift Classes for applying Apple's Dynamic Type behavior to the font.  

Importing the source font is done by creating a group under your target in xcode and dragging the font files into that group.  Add the fonts to the info.plist under `Fonts provided by application`.

Finally, import the CedarFont.swift file along with the CedarTextStyles.plist.  This will allow you to set the fonts by:

_Terminal_
```bash
  // Button Title 1 Style
  Button1.titleLabel?.font = CedarFont().getCedarFont(forTextStyle: .title1)
  Button1.titleLabel?.adjustsFontForContentSizeCategory = true;
```

##### Icons

Cedar provides icons  in vector PDF format for iOS scaling.  According to initial investigation, only one file per icon is needed in this format. There is no need for @1x, @2x, and @3x variants.


<hr/>

### Android
#### Maven
The preferred way to consume Cedar Tokens on Android is to use Maven.

Add the following to the build.gradle file in your Android project:

_Terminal_
```bash
Implementation mvnrepos.rei.com:cedar-android.aar:0.2.0
```

#### Manual Consumption
If you don’t use Maven, you can import the Cedar Tokens into your Android project/workspace manually by dragging the resources into your project within Android Studio.  The resources are located at the [cedar-android repository on Bitbucket]( https://git.rei.com/projects/CDR/repos/cedar-android)


<hr/>


</cdr-doc-table-of-contents-shell>
