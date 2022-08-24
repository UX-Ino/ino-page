<template>
  <startPage />
  <div id="fullpage-wrap">

    <lnbPage />
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section">
        <h3>Section 1</h3>
      </div>
      <div class="section">
        <h3>Section 2</h3>
      </div>
      <div class="section">
        <h3>Section 3</h3>
      </div>
      <div class="section">
        <h3>Section 4</h3>
      </div>
    </full-page>
  </div>

</template>

<script>
import startPage from "./components/startPage.vue";
import lnbPage from "./components/lnb.vue";

export default {
  components: {
    startPage,
    lnbPage,
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
