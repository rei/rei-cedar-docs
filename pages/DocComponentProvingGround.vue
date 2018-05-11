<template>
  <div>
    <cdr-doc-alert/>
    <cdr-doc-alert>Some custom alert message here</cdr-doc-alert>
    <cdr-doc-hero/>
    <!-- Leaving some space to separate them on the proving ground  -->
    <br>
    <cdr-doc-hero 
      title="Link" 
      :metadata="false">
      Links are used for navigation between pages.
    </cdr-doc-hero>
    <!-- Leaving some space to separate them on the proving ground  -->
    <br>
    <cdr-doc-hero 
      title="No Metadata and No Breadcrumbs" 
      :metadata="false" 
      :breadcrumbs="false">
      Metadata and breadcrumb options can be disabled by passing a 'false' value.
    </cdr-doc-hero>
    <!-- Leaving some space to separate them on the proving ground  -->
    <br>
    <cdr-doc-hero
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
    </cdr-doc-hero>
  </div>
</template>

<script>
import CdrDocAlert from '~/src/doc-components/alert/Alert'
import CdrDocHero from '~/src/doc-components/hero/Hero'

export default {
  layout: 'proving-ground',
  components: {
    CdrDocAlert,
    CdrDocHero
  }
}
</script>
