<template>


  <app-header />
  <section class="home-page main-layout">
    <page-hero />
    <app-features />
    <app-slogan />
    <app-reviews />
    <app-action />
  </section>
  <app-footer />
</template>

<script>
import appHeader from '@/cmps/app-header.vue'
import pageHero from './cmps/page-hero.vue'
import appFeatures from './cmps/app-features.vue'
import appSlogan from './cmps/app-slogan.vue'
import appReviews from './cmps/app-reviews.vue'
import appAction from './cmps/app-action.vue'
import appFooter from './cmps/app-footer.vue'
export default {
  components: {
    appHeader,
    pageHero,
    appFeatures,
    appSlogan,
    appReviews,
    appAction,
    appFooter,
  },
  data() {
    return {

    }
  },
  methods: {},
  computed: {

  },

}
</script>


