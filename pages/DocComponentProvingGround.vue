<template>
  <div>
    <cdr-doc-alert/>
    <cdr-doc-alert>Some custom alert message here</cdr-doc-alert>
    <cdr-doc-intro/>
    <!-- Leaving some space to separate them on the proving ground  -->
    <br>
    <cdr-doc-intro 
      title="Link" 
      :metadata="false">
      Links are used for navigation between pages.
    </cdr-doc-intro>
    <!-- Leaving some space to separate them on the proving ground  -->
    <br>
    <cdr-doc-intro 
      title="No Metadata and No Breadcrumbs" 
      :metadata="false" 
      :breadcrumbs="false">
      Metadata and breadcrumb options can be disabled by passing a 'false' value.
    </cdr-doc-intro>
    <!-- Leaving some space to separate them on the proving ground  -->
    <br>
    <cdr-doc-intro
      :breadcrumbs="[
        {
          text: 'Breadcrumb 1',
          href: '#'
        },
        {
          text: 'Breadcrumb 2',
          href: '#'
        },
        {
          text: 'Breadcrumb 3',
          href: '#'
        },
        {
          text: 'Breadcrumb 4',
          href: '#'
        },
        {
          text: 'Breadcrumb 5',
          href: '#'
        },
        {
          text: 'Breadcrumb 6',
          href: '#'
        },
        {
          text: 'Breadcrumb 7',
          href: '#'
        },
        {
          text: 'Breadcrumb 8',
          href: '#'
        },
        {
          text: 'Breadcrumb 9',
          href: '#'
        } ,
        {
          text: 'Breadcrumb 10',
          href: '#'
        } ,
        {
          text: 'Breadcrumb 11',
          href: '#'
        } ,
        {
          text: 'Breadcrumb 12',
          href: '#'
        } 
      ]"
      title="Content Resilience Test No Component Name Should Ever Be This Long Or We Have Bigger Problems To Worry About"
      metadata="Really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really long metadata">
      This is where the summary goes. Also really really really really really really really really really really really really really really really really really really really really long.
    </cdr-doc-intro>
  </div>
</template>

<script>
import CdrDocAlert from '~/src/doc-components/alert/Alert'
import CdrDocIntro from '~/src/doc-components/intro/Intro'

export default {
  layout: 'proving-ground',
  components: {
    CdrDocAlert,
    CdrDocIntro
  }
}
</script>
