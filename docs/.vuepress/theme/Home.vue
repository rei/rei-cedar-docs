<template>
  <div class="home">
    <div class="hero stack-4">
      <cdr-img
        v-if="data.heroImage"
        class="hero__image"
        :src="$withBase(data.heroImage)"
        ratio="2-1"
        crop="y-center x-center"
        cover
        alt="hero"/>
      <div class="hero__container align-center">
        <cdr-text
          class="stack-1 hero-heading"
        >{{ data.heroTitle }}</cdr-text>
        <p class="hero__description">{{ data.heroDescription }}</p>
      </div>
    </div>


    <div class="container">
      <cdr-row cols="1 2@md" align="middle" class="stack-4">
        <cdr-col>
          <cdr-img
            class="getting-started-image"
            :src="$withBase('home/gettingstarted_icon.png')"
            ratio="16-9"
            cover
            radius="rounded"
          />
        </cdr-col>
        <cdr-col>
          <div>
            <h2 class="home-heading">Getting Started</h2>
            <p class="home-subheading">Learn how to start using Cedar components with handy onboarding guides.</p>
            <cdr-row cols="auto" justify="around left@md">
              <cdr-col>
                <cdr-button
                  tag="a"
                  :href="$withBase('/getting-started/as-a-designer/')"
                  modifier="secondary">View Designer Guide</cdr-button>
              </cdr-col>
              <cdr-col>
                <cdr-button
                  tag="a"
                  :href="$withBase('/getting-started/as-a-developer/')"
                  modifier="secondary">View Developer Guide</cdr-button>
              </cdr-col>
            </cdr-row>
          </div>
        </cdr-col>
      </cdr-row>

      <div class="home-hr stack-4" role="presentation"></div>

      <cdr-row cols="1 2@md" class="stack-4">
        <cdr-col>
          <div class="align-center">
            <cdr-img
              class="home-start-image"
              :src="$withBase('home/foundation_icon.png')"
              ratio="square"
              radius="rounded"
              cover
            />
            <h2 class="home-heading">Foundation</h2>
            <cdr-text class="stack-1">Build cohesive digital experiences with the basic design elements that comprise the Cedar visual language.</cdr-text>
            <cdr-link
              :href="$withBase('/foundation/color/')"
              modifier="standalone"
            >Start with color</cdr-link>
          </div>
        </cdr-col>
        <cdr-col>
          <div class="align-center">
            <cdr-img
              class="home-start-image"
              :src="$withBase('home/components_icon.png')"
              ratio="square"
              radius="rounded"
              cover
            />
            <h2 class="home-heading">Components</h2>
            <cdr-text class="stack-1">Use components as building blocks to create new digital products - usage, visual guidelines, and code included.</cdr-text>
            <cdr-link
              :href="$withBase('/components/buttons/')"
              modifier="standalone"
            >Start with buttons</cdr-link>
          </div>
        </cdr-col>
      </cdr-row>

      <div class="home-hr-tree stack-4">
        <cdr-img
          class="home-hr-tree__image"
          :src="$withBase('home/hr_tree.png')"
          role="presentation" />
      </div>


      <h2 class="home-heading align-center stack-4">Resources</h2>

      <cdr-row cols="1 2@md" class="stack-4">
        <cdr-col>
          <div class="home-card">
            <cdr-row align="middle">
              <cdr-col span="9">
                <div>
                  <cdr-text
                    tag="h3"
                    class="home-card-heading stack-1"
                  >Cedar Design Libraries</cdr-text>
                  <cdr-link :href="$withBase('/getting-started/as-a-designer/#design-toolkits')" modifier="standalone">Learn more about the toolkit</cdr-link>
                </div>
              </cdr-col>
              <cdr-col span="3">
                <div>
                  <cdr-img class="home-resource-icon" :src="$withBase('sketch_icon.png')" />
                </div>
              </cdr-col>
            </cdr-row>
          </div>
        </cdr-col>
        <cdr-col>
          <div class="home-card">
            <cdr-row align="middle">
              <cdr-col span="9">
                <div>
                  <cdr-text
                    tag="h3"
                    class="home-card-heading stack-1"
                  >Vue.js components</cdr-text>
                  <cdr-link href="https://www.npmjs.com/package/@rei/cedar" target="_blank" modifier="standalone">View the NPM repository</cdr-link>
                </div>
              </cdr-col>
              <cdr-col span="3">
                <div>
                  <cdr-img class="home-resource-icon" :src="$withBase('vue_icon.png')" />
                </div>
              </cdr-col>
            </cdr-row>
          </div>
        </cdr-col>
        <cdr-col>
          <div class="home-card">
            <cdr-text
              tag="h3"
              class="home-card-heading stack-1"
            >Contribute to Cedar</cdr-text>
            <cdr-text class="stack-1">The Cedar team welcomes contributions from the community. Learn how to become a pilot contributor.  </cdr-text>
            <cdr-link :href="$withBase('/about/contributing-to-cedar/')" modifier="standalone">Help build Cedar</cdr-link>
          </div>
        </cdr-col>
        <cdr-col>
          <div class="home-card">
            <cdr-text
              tag="h3"
              class="home-card-heading stack-1"
            >Feedback & support</cdr-text>
            <cdr-text class="stack-1">Questions, ideas, or comments? Your feedback can help improve Cedar. </cdr-text>
            <cdr-link :href="$withBase('/about/cedar-design-system/#communications/')" modifier="standalone">Get in touch</cdr-link>
          </div>
        </cdr-col>
      </cdr-row>

    </div>

    <!-- <Content custom/> -->
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  components: { NavLink },
  computed: {
    data () {
      return this.$page.frontmatter
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="scss">
@import "styles/cdr-tokens.scss";

.container {
  @include cdr-container;
}

.hero {
  position: relative;

  &__image {
    max-height: 486px;
    min-height: 250px;

    &::before {
      padding-bottom: 40% !important;
    }
  }

  &__container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: $cdr-color-text-inverse;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__description {
    @include cdr-text-subheading-sans-400;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
}

.hero-heading {
  @include cdr-text-heading-serif-700;

  @media (min-width: $cdr-breakpoint-md) {
    @include cdr-text-heading-serif-strong-900;
  }

  @media (min-width: $cdr-breakpoint-lg) {
    @include cdr-text-heading-serif-strong-1100;
  }
}

.home-heading {
  @include cdr-text-heading-serif-700;
  margin-bottom: $cdr-space-one-x;

  @media (max-width: $cdr-breakpoint-md) {
    text-align: center;
  }
}

.home-subheading {
  @include cdr-text-body-400;
  font-size: 20px;
  line-height: 32px;
  margin-bottom: $cdr-space-one-x;

  @media (max-width: $cdr-breakpoint-md) {
    text-align: center;
  }
}

.getting-started-image {
  max-width: 375px;
  margin: 0 auto;
}

.home-start-image {
  max-width: 170px;
  margin: 0 auto $cdr-space-one-x;
}

.home-hr {
  height: 1px;
  background-color: $cdr-color-border-primary;
}

.home-hr-tree {
  position: relative;
  text-align: center;

  &::before {
    content: '';
    height: 1px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 33%;
    border-top: 1px solid $cdr-color-border-primary;
  }

  &::after {
    content: '';
    height: 1px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 33%;
    border-top: 1px solid $cdr-color-border-primary;
  }

  &__image {
    width: 87px;
  }
}

.home-card {
  background-color: $cdr-color-background-primary;
  border: 1px solid $cdr-color-border-primary;
  border-radius: $cdr-radius-softer;
  display: block;
  padding: $cdr-space-one-x;
}

.home-card-heading {
  @include cdr-text-heading-sans-400;
}

.home-resource-icon {
  max-width: 55px !important;
  display: block;
  margin-left: auto;
}


.align-center {
  text-align: center;
}

</style>
