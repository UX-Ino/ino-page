<template>
    <div class="popup">
        test
    </div>
    <div id="fullpage-wrap">
        <ul id="menu">
            <li data-menuanchor="page1" class="active"><a href="#page1">Section 1</a></li>
            <li data-menuanchor="page2"><a href="#page2">Section 2</a></li>
            <li data-menuanchor="page3"><a href="#page3">Section 3</a></li>
        </ul>

        <full-page :options="options" id="fullpage" ref="fullpage">
            <div class="section">
                <h3>Section 1</h3>
            </div>
            <div class="section">
                <div class="slide">
                    <h3>Slide 2.1</h3>
                </div>
                <div class="slide">
                    <h3>Slide 2.2</h3>
                </div>
                <div class="slide">
                    <h3>Slide 2.3</h3>
                </div>
            </div>
            <div class="section">
                <h3>Section 3</h3>
            </div>
        </full-page>
    </div>
    <div id="fp-nav" class="fp-right"><ul><li><a href="#page1" class="active"><span class="fp-sr-only">page1</span><span></span></a></li><li><a href="#page2"><span class="fp-sr-only">page2</span><span></span></a></li><li><a href="#page3"><span class="fp-sr-only">page3</span><span></span></a></li></ul></div>

</template>

<script>


  export default {
    name: 'app',
    data () {
      return {
        options: {
          licenseKey: 'YOUR_KEY_HERE',
          scrollOverflow: true,
          scrollBar: false,
          menu: '#menu',
          navigation: true,
          anchors: ['page1', 'page2', 'page3'],
          sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
        }
      }
    },
    methods: {
        handleScroll() {
        },
    },
    created() {
    },

  }
</script>

<style lang='scss'>
@import '~@/assets/scss/reset';

.popup{
    position: fixed;
    width: 100%; 
    height: 100%;
    background: red;
    z-index: 100;
    top: 0;
    left: 0;
}
</style>