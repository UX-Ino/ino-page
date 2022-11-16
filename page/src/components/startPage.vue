<template>
  <div class="start-page">
      <h3>Ino’s Web Portfolio</h3>
      <h1>
        I’m many<br>
        things.
      </h1>
       <div class="img-wrap">
          <div class="txt-wrap">
            <p class="txt">#CSS</p>
            <p class="txt">#JavaScript</p>
            <p class="txt">#Jquery</p>
            <p class="txt">#Food</p>
          </div>
       </div>
  </div>
</template>

<script>
export default {
  name: 'startPage',
  props: {
    msg: String
  },
    methods: {

  },
  mounted() { 
    /* 스크롤이벤트에 적용할 함수  */
/*     function listener(e) {
      e.preventDefault();
      e.stopPropagation();
    } */
    /* 
    - fullpage 선택자 
    - ref로 속성값을 받아옴 $el을 붙이면 객체 선택
    - var fullpage = document.querySelector('#fullpage') 같은의미
    */
    //const fullpage = this.$refs.fullpage.$el

    /*
    스크롤시 이벤트 생성
    fullpage.addEventListener('wheel', (e) => {
      e.stopPropagation();
    });  
    */
/*     function loadingOn(){
      fullpage.addEventListener('wheel',listener); 
    }
    function loadingOff(){
      fullpage.removeEventListener('wheel',listener);
    } 
    
    setTimeout(loadingOn,3000)
    setTimeout(loadingOff,5000) */

    function txtScroll(){
/*       let scrollTxtGroup = document.querySelector('.txt-wrap');
      let scrollTxtCount = scrollTxtGroup.childElementCount;
      let scrollTxt = document.querySelector('.txt');
 */
      
/* 
      for(let i =1; i < scrollTxtCount; i++){
        if(i < scrollTxtCount){
        scrollTxt.style.marginTop = '-3.8' * i +'vw';
                                        console.log(i)
        break
        }
      } */
/* 
      let num = 0

      function fun(){
        num ++; 
        scrollTxt.style.marginTop = '-3.8' * num +'vw';
        if (num == scrollTxtCount);
        console.log(num)
        return num
      } */

    }
    txtScroll();
  },
}
</script>

<style lang="scss">

</style>
