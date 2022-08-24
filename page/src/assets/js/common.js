export default {
  mounted() { 
        /**
    스크롤이벤트에 적용할 함수  
    */
    function listener(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    /** 
    - fullpage 선택자 
    - ref로 속성값을 받아옴 $el을 붙이면 객체 선택
    - var fullpage = document.querySelector('#fullpage') 같은의미
    */
    const fullpage = this.$refs.fullpage.$el

    /**
    스크롤시 이벤트 생성
    fullpage.addEventListener('wheel', (e) => {
      e.stopPropagation();
    });  
    */
    function loadingOn(){
      fullpage.addEventListener('wheel',listener); 
    }
    // function loadingOff(){
    //   fullpage.removeEventListener('wheel',listener);
    // } 
    
    setTimeout(loadingOn,3000)
    //setTimeout(loadingOff,5000)
  }
}