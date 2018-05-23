<template>
  <div class="page">
    <cdr-doc-intro :title="data.title" :metadata="data.title_metadata" :breadcrumbs="data.breadcrumbs">
      {{ data.summary }}
    </cdr-doc-intro>
    <Content :custom="false"/>
    <div class="content edit-link" v-if="editLink">
      <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ editLinkText }}</a>
      <OutboundLink/>
    </div>
    <div class="content page-nav" v-if="prev || next">
      <p class="inner">
        <span v-if="prev" class="prev">
          ← <router-link v-if="prev" class="prev" :to="prev.path">
            {{ prev.title || prev.path }}
          </router-link>
        </span>
        <span v-if="next" class="next">
          <router-link v-if="next" :to="next.path">
            {{ next.title || next.path }}
          </router-link> →
        </span>
      </p>
    </div>
    <slot name="bottom"/>
  </div>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<style lang="scss">

</style>
