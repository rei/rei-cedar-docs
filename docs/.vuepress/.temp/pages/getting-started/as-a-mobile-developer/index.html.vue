<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<h2 id="developing-for-mobile" tabindex="-1"><a class="header-anchor" href="#developing-for-mobile">#</a> Developing for Mobile</h2>
<p>Currently development for iOS and Android is through the usage of Cedar Tokens as documented below.</p>
<p>Our mobile development packages include fonts that are licensed and proprietary to REI. For more information or questions regarding Cedar’s support for external consumers using the mobile development packages on GitHub or NPM, please reach out to <a href="mailto:cedar@rei.com">cedar@rei.com</a>.</p>
<h3 id="ios" tabindex="-1"><a class="header-anchor" href="#ios">#</a> iOS</h3>
<h4 id="cocoapods" tabindex="-1"><a class="header-anchor" href="#cocoapods">#</a> CocoaPods</h4>
<p>The preferred way to consume Cedar for iOS is through CocoaPods.  View <a href="https://www.cocoapods.org/" target="_blank" rel="noopener noreferrer">www.cocoapods.org<ExternalLinkIcon/></a> for more information.</p>
<p>To find out if Cocoapods is already installed, open the terminal and run:</p>
<p><em>Terminal</em></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pod --version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>If “command not found” is returned then Cocoapods in not installed.</p>
<p>To install Cocoapods:</p>
<p><em>Terminal</em></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> gem <span class="token function">install</span> cocoapods
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>To set up Cocoapods from the project/workspace directory, run:</p>
<p><em>Terminal</em></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pod init
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>The above command will create a Podfile in your current directory.</p>
<p>The Podfile must be modified with the following to include Cedar as a dependency:</p>
<p><strong>1. Prior to the Targets Section of the Podfile:</strong></p>
<p><em>Terminal</em></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> <span class="token string">'https://git.rei.com/projects/CDR/repos/cedar-iosl/CedarPodSpec.git'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>2. In the Targets Section of the Podfile:</strong></p>
<p><em>Terminal</em></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pod <span class="token string">'CedarTokens'</span>, <span class="token string">'~> 0.2.0'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Full Podfile Example for Reference:</strong></p>
<p><em>Terminal</em></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>project <span class="token string">'CedarIOSCocoaPodDemo.xcodeproj/'</span>

platform :ios, <span class="token string">'12.0'</span>

<span class="token builtin class-name">source</span> <span class="token string">'https://git.rei.com/projects/CDR/repos/cedar-ios-podspec/CedarPodSpec.git'</span>

target <span class="token string">'CedarIOSCocoaPodDemo'</span> <span class="token keyword">do</span>
  <span class="token comment"># Pods for CedarIOSCocoaPodDemo</span>
  pod <span class="token string">'CedarTokens'</span>, <span class="token string">'~> 0.2.0'</span>

end
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><hr/>
<h4 id="manual-consumption" tabindex="-1"><a class="header-anchor" href="#manual-consumption">#</a> Manual Consumption</h4>
<p>If you don’t use Cocoapods, you can manually import files into your iOS project/workspace.</p>
<h5 id="colors" tabindex="-1"><a class="header-anchor" href="#colors">#</a> Colors</h5>
<p>Color Sets in a .xcasset file.  Import the file by dragging the <code>Cedar.xcassets &gt; Colors</code> folder into your project's asset folder.</p>
<p>You can set the colors in Interface Builder, or by:</p>
<p><em>Terminal</em></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Button1.backgroundColor <span class="token operator">=</span> UIColor<span class="token punctuation">(</span>named: <span class="token string">"cdr_color_text_primary"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h5 id="text" tabindex="-1"><a class="header-anchor" href="#text">#</a> Text</h5>
<p>The package includes Sentinel and Roboto font source files along with Swift Classes for applying Apple's Dynamic Type behavior to the font.</p>
<p>Importing the source font is done by creating a group under your target in xcode and dragging the font files into that group.  Add the fonts to the info.plist under <code>Fonts provided by application</code>.</p>
<p>Finally, import the CedarFont.swift file along with the CedarTextStyles.plist.  This will allow you to set the fonts by:</p>
<p><em>Terminal</em></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>  // Button Title <span class="token number">1</span> Style
  Button1.titleLabel?.font <span class="token operator">=</span> CedarFont<span class="token punctuation">(</span><span class="token punctuation">)</span>.getCedarFont<span class="token punctuation">(</span>forTextStyle: .title1<span class="token punctuation">)</span>
  Button1.titleLabel?.adjustsFontForContentSizeCategory <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="icons" tabindex="-1"><a class="header-anchor" href="#icons">#</a> Icons</h5>
<p>Cedar provides icons  in vector PDF format for iOS scaling.  According to initial investigation, only one file per icon is needed in this format. There is no need for @1x, @2x, and @3x variants.</p>
<hr/>
<h3 id="android" tabindex="-1"><a class="header-anchor" href="#android">#</a> Android</h3>
<h4 id="maven" tabindex="-1"><a class="header-anchor" href="#maven">#</a> Maven</h4>
<p>The preferred way to consume Cedar Tokens on Android is to use Maven.</p>
<p>Add the following to the build.gradle file in your Android project:</p>
<p><em>Terminal</em></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Implementation mvnrepos.rei.com:cedar-android.aar:0.2.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="manual-consumption-1" tabindex="-1"><a class="header-anchor" href="#manual-consumption-1">#</a> Manual Consumption</h4>
<p>If you don’t use Maven, you can import the Cedar Tokens into your Android project/workspace manually by dragging the resources into your project within Android Studio.  The resources are located at the <a href="https://git.rei.com/projects/CDR/repos/cedar-android" target="_blank" rel="noopener noreferrer">cedar-android repository on Bitbucket<ExternalLinkIcon/></a></p>
<hr/>
</cdr-doc-table-of-contents-shell>
</template>
