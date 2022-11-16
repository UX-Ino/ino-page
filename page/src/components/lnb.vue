<template>
  <div class="lnb-wrap">
    <div class="tit-group">
      <h3>RENEE ANDERSON</h3>
      <p>WEB PUBLISHER / PORTFOLIO</p>
    </div>
    <ul class="lnb-box">
      <li class="lnb"><a class="active" href="#page1">PERSONAL INFORMATION</a></li>
      <li class="lnb"><a href="#page2">What I'm good at</a></li>
      <li class="lnb"><a href="#page3">SKILLS</a></li>
      <li class="lnb"><a href="#page4">WORKS</a></li>
    </ul>
    <div class="pagenation-wrap">
      <ul>
        <li class="pagenation">
          <a data-menuanchor="page1"  href="#page1" class="dot active"><span class="hide">page1</span></a>
        </li>
        <li class="pagenation">
          <a data-menuanchor="page2"  href="#page2" class="dot"><span class="hide">page2</span></a>
        </li>
        <li class="pagenation">
          <a data-menuanchor="page3"  href="#page3" class="dot"><span class="hide">page3</span></a>
        </li>
        <li class="pagenation">
          <a data-menuanchor="page4"  href="#page4" class="dot"><span class="hide">page4</span></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lnbPage',
  props: {
    msg: String
  },
  methods: {

  },
  mounted() { 

    addEventListener('wheel', () => {

      let sectionAct = document.querySelector('.section.active');
      let secParentsEl = sectionAct.parentElement;
      let secChildEl = secParentsEl.children;
      let secIndex = Array.from(secChildEl).indexOf(sectionAct)
      let lnb = document.querySelectorAll('.lnb');
      let dot = document.querySelectorAll('.pagenation');

      for(let i = 0 ; i < lnb.length ; i ++){
        lnb[i].firstChild.classList.remove('active');
        dot[i].firstChild.classList.remove('active');
      }
      lnb[secIndex].firstChild.classList.add('active');
      dot[secIndex].firstChild.classList.add('active');
      // console.log(lnbChild);


    });


    // 탭에 필요한 리스트 아이템 
    const TAB_LIST = document.querySelectorAll('.lnb');
    const Page_list = document.querySelectorAll('.pagenation');

    let currentTab; // 클릭이벤트가 전달된 엘리먼트
    let parentEl; // 연결된 엘리먼트의 부모
    let childEl; // 부모 엘리먼트의 자식 엘리먼트들
    let tabIndex; // 연결된 엘리먼트의 인덱스

    const tabSlideAction = (tabEvents)=>{

      let lnb = document.querySelectorAll('.lnb');
      let dot = document.querySelectorAll('.pagenation');

      currentTab = tabEvents.currentTarget;
      parentEl = currentTab.parentElement;
      childEl = parentEl.children;
      tabIndex = Array.from(childEl).indexOf(currentTab);

      for(let i = 0 ; i < childEl.length ; i ++){
        lnb[i].firstChild.classList.remove('active');
        dot[i].firstChild.classList.remove('active');
      }
      lnb[tabIndex].firstChild.classList.add('active');
      dot[tabIndex].firstChild.classList.add('active');
      console.log(tabIndex)
    }

    TAB_LIST.forEach((items)=>{
      items.addEventListener("click", tabSlideAction)
    })
    Page_list.forEach((items)=>{
      items.addEventListener("click", tabSlideAction)
    })


  }
}
</script>

<style lang="scss">

</style>

