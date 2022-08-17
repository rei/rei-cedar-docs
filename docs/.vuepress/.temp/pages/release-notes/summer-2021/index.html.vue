<template><cdr-doc-table-of-contents-shell parentSelector='h2' childSelector='h3'>
<h2 id="update-steps" tabindex="-1"><a class="header-anchor" href="#update-steps">#</a> Update Steps</h2>
<ul>
<li>Update to the latest version of the Cedar packages:</li>
</ul>
<table>
<thead>
<tr>
<th>package name</th>
<th>version</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>@rei/cedar</code></td>
<td>^10.x.x</td>
</tr>
<tr>
<td><code>@rei/febs</code></td>
<td>^8.3.x</td>
</tr>
</tbody>
</table>
<ul>
<li>Remove <code>@babel/preset-env</code> and <code>@babel/register</code> if they are included in your project, the functionality provided by these modules is now included in the latest version of FEBS.</li>
<li>Depending on the age of your microsite, you may wish to ensure your other dependencies are also up to date. As always, <a href="https://git.rei.com/projects/CLIMB/repos/climbers-site/browse" target="_blank" rel="noopener noreferrer">Climbers Site<ExternalLinkIcon/></a> is a good reference point.</li>
<li>If your project depends on any shared component packages (i.e, FEDPACK, FEDCOMP, FEDPAGES), you will want to update those packages to the new version of Cedar before updating your microsite.</li>
<li>Please reach out in Slack at <a href="https://rei.slack.com/messages/CA58YCGN4" target="_blank" rel="noopener noreferrer">#cedar-user-support<ExternalLinkIcon/></a> or <a href="https://rei.slack.com/archives/CLWJC9FFW" target="_blank" rel="noopener noreferrer">#frontier-users<ExternalLinkIcon/></a> if you have any questions.</li>
</ul>
<h2 id="_10-0-1" tabindex="-1"><a class="header-anchor" href="#_10-0-1">#</a> 10.0.1</h2>
<h3 id="bug-fixes" tabindex="-1"><a class="header-anchor" href="#bug-fixes">#</a> Bug Fixes</h3>
<ul>
<li>CdrModal has been updated to address an issue when using the modal slot that would result in errors being thrown when opened</li>
</ul>
<h2 id="new-features" tabindex="-1"><a class="header-anchor" href="#new-features">#</a> New Features</h2>
<h3 id="polyfill-removals" tabindex="-1"><a class="header-anchor" href="#polyfill-removals">#</a> Polyfill Removals</h3>
<p>Polyfills for older, unsupported browsers have been removed. This should reduce the bundle sizes and result in better performance.</p>
<h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes">#</a> Breaking Changes</h2>
<p>The removal of polyfills involves some risk of breaking changes. If for some reason you need to support older browsers, you should ensure this update does not break critical functionality prior to incorporating.</p>
</cdr-doc-table-of-contents-shell>
</template>
