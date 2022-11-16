<template>
  <startPage />
  <div id="fullpage-wrap">

    <lnbPage />
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section section01">
        <sectionFirst />
      </div>
      <div class="section section02">
       <sectionSecond />
      </div>
      <div class="section section03">
        <sectionThird />
      </div>
      <div class="section section04">
        <sectionFourth />
      </div>
    </full-page>
  </div>

</template>

<script>
import startPage from "./components/startPage.vue";
import lnbPage from "./components/lnb.vue";
import sectionFirst from "./components/section01.vue";
import sectionSecond from "./components/section02.vue";
import sectionThird from "./components/section03.vue";
import sectionFourth from "./components/section04.vue";

export default {
  components: {
    startPage,
    lnbPage,
    sectionFirst,
    sectionSecond,
    sectionThird,
    sectionFourth
  },
  name: "app",
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HERE",
        scrollOverflow: true,
        scrollBar: false,
        menu: "#menu",
        navigation: false,
        anchors: ["page1", "page2", "page3" ,"page4"],
      },
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss">
@import "~@/assets/scss/main";
#fullpage-wrap{
  display: flex;
  #fullpage{
    width: calc(100% - 25vw);
  }
}

</style>
