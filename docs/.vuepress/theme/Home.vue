<template>
  <div class="home">
    <div class="hero cdr-stack--xl">
      <cdr-img
        v-if="data.heroImage"
        class="hero__image"
        :src="$withBase(data.heroImage)"
        ratio="2-1"
        crop="y-center x-center"
        cover
        alt="hero"/>
      <div class="hero__container cdr-text-center">
        <cdr-text
          tag="h1"
          modifier="display"
          class="cdr-stack"
        >{{ data.heroTitle }}</cdr-text>
        <p class="hero__description">{{ data.heroDescription }}</p>
      </div>
    </div>


    <div class="cdr-container">
      <cdr-row cols="1 2@md" align="middle" class="cdr-stack--xl">
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

      <div class="home-hr cdr-stack--xl" role="presentation"></div>

      <cdr-row cols="1 2@md" class="cdr-stack--xl">
        <cdr-col>
          <div class="cdr-text-center">
            <cdr-img
              class="home-start-image"
              :src="$withBase('home/foundation_icon.png')"
              ratio="square"
              radius="rounded"
              cover
            />
            <h2 class="home-heading">Foundation</h2>
            <cdr-text class="cdr-stack">Build cohesive digital experiences with the basic design elements that comprise the Cedar visual language.</cdr-text>
            <cdr-link
              :href="$withBase('/foundation/color/')"
              modifier="standalone"
            >Start with color</cdr-link>
          </div>
        </cdr-col>
        <cdr-col>
          <div class="cdr-text-center">
            <cdr-img
              class="home-start-image"
              :src="$withBase('home/components_icon.png')"
              ratio="square"
              radius="rounded"
              cover
            />
            <h2 class="home-heading">Components</h2>
            <cdr-text class="cdr-stack">Use components as building blocks to create new digital products - usage, visual guidelines, and code included.</cdr-text>
            <cdr-link
              :href="$withBase('/components/button/')"
              modifier="standalone"
            >Start with buttons</cdr-link>
          </div>
        </cdr-col>
      </cdr-row>

      <div class="home-hr-tree cdr-stack--xl">
        <cdr-img
          class="home-hr-tree__image"
          :src="$withBase('home/hr_tree.png')"
          role="presentation" />
      </div>


      <h2 class="home-heading cdr-text-center cdr-stack--xl">Resources</h2>

      <cdr-row cols="1 2@md" class="cdr-stack--xl">
        <cdr-col>
          <div class="home-card cdr-inset">
            <cdr-row align="middle">
              <cdr-col span="9">
                <div>
                  <cdr-text
                    tag="h3"
                    modifier="heading-small-static"
                    class="cdr-stack"
                  >Cedar Sketch UI toolkit</cdr-text>
                  <cdr-link :href="$withBase('/getting-started/as-a-designer/')" modifier="standalone">Download the Sketch library</cdr-link>
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
          <div class="home-card cdr-inset">
            <cdr-row align="middle">
              <cdr-col span="9">
                <div>
                  <cdr-text
                    tag="h3"
                    modifier="heading-small-static"
                    class="cdr-stack"
                  >Vue.js components</cdr-text>
                  <cdr-link href="https://www.npmjs.com/org/rei" target="_blank" modifier="standalone">View the NPM repository</cdr-link>
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
          <div class="home-card cdr-inset">
            <cdr-text
              tag="h3"
              modifier="heading-small-static"
              class="cdr-stack"
            >Contribute to Cedar</cdr-text>
            <cdr-text class="cdr-stack">The Cedar team welcomes contributions from the community. Learn how to become a pilot contributor.  </cdr-text>
            <cdr-link :href="$withBase('/getting-started/as-an-adopter/?active-link=contributions')" modifier="standalone">Help build Cedar</cdr-link>
          </div>
        </cdr-col>
        <cdr-col>
          <div class="home-card cdr-inset">
            <cdr-text
              tag="h3"
              modifier="heading-small-static"
              class="cdr-stack"
            >Feedback & support</cdr-text>
            <cdr-text class="cdr-stack">Questions, ideas, or comments? Your feedback can help improve Cedar. </cdr-text>
            <cdr-link href="mailto:cedar@rei.com" modifier="standalone">Get in touch</cdr-link>
          </div>
        </cdr-col>
      </cdr-row>

    </div>

    <div class="home-adopt">
      <h2 class="home-heading cdr-text-center">Looking to Adopt Cedar?</h2>
      <p class="adopt-text">Cedar will grow and evolve as more teams adopt and reuse components. Check out our step-by-step guide to adopting Cedar and other helpful resources for teams to get started.</p>
      <cdr-button tag="a" :href="$withBase('/getting-started/as-an-adopter/')" modifier="secondary">Get Cedar for your team</cdr-button>
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
    color: $clean-slate;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__description {
    @include redwood-display-40();
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
}

.home-heading {
  @include spruce-display-60();
  margin-bottom: $space-1-x;

  @media (max-width: $breakpoint-md) {
    text-align: center;
  }
}

.home-subheading {
  @include redwood-body-40();
  margin-bottom: $space-1-x;

  @media (max-width: $breakpoint-md) {
    text-align: center;
  }
}

.getting-started-image {
  max-width: 375px;
  margin: 0 auto;
}

.home-start-image {
  max-width: 170px;
  margin: 0 auto $space-1-x;
}

.home-adopt {
  background-color: #EFEEE1;
  text-align: center;
  padding: $space-2-x;
}

.home-hr {
  height: 1px;
  background-color: $partly-cloudy;
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
    border-top: 1px solid $partly-cloudy;
  }

  &::after {
    content: '';
    height: 1px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 33%;
    border-top: 1px solid $partly-cloudy;
  }

  &__image {
    width: 87px;
  }
}

.home-card {
  background-color: $clean-slate;
  border: 1px solid $partly-cloudy;
  border-radius: $radius-softer;
}

.home-resource-icon {
  max-width: 55px !important;
  display: block;
  margin-left: auto;
}

.adopt-text {
  max-width: 700px;
  margin: 0 auto $space-2-x;
}
</style>
