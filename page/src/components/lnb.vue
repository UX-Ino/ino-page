<template>
  <div class="lnb-wrap">
    <div class="tit-group">
      <h3>RENEE ANDERSON</h3>
      <p>WEB PUBLISHER / PORTFOLIO</p>
    </div>
    <ul class="lnb-box">
      <li class="lnb"><a class="active" href="#">PERSONAL INFORMATION</a></li>
      <li class="lnb"><a href="#">What I'm good at</a></li>
      <li class="lnb"><a href="#">SKILLS</a></li>
      <li class="lnb"><a href="#">WORKS</a></li>
    </ul>
    <div class="pagenation-wrap">
      <ul>
        <li>
          <a data-menuanchor="page1"  href="#page1" class="dot active"><span class="hide">page1</span></a>
        </li>
        <li>
          <a data-menuanchor="page2"  href="#page2" class="dot"><span class="hide">page2</span></a>
        </li>
        <li>
          <a data-menuanchor="page3"  href="#page3" class="dot"><span class="hide">page3</span></a>
        </li>
        <li>
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
  }
}
</script>

<style lang="scss">
.lnb-wrap{
  position: relative;
  padding: 8.854vw 3.125vw 0 3.125vw;
  width: 25vw;
  height: 100%;
  line-height: 1;
  .tit-group{
    margin-bottom: 9.792vw;
    h3{
      padding-bottom: 0.781vw;
      border-bottom:0.208vw solid #151515;
      font-size: 1.250vw;
      font-weight: bold;
    }
    p{
      margin-top: 0.781vw;
      text-align: right;
      font-size: 0.990vw;
      font-weight: bold;
    }
  }
  .lnb-box{
    padding-top: 1.563vw;
    border-top: 0.208vw solid #151515;
    .lnb{
      a{
        display: block;
        padding: 0.521vw 0 0.521vw 0.521vw;
        font-size: 1.25vw;
        &.active{
          background: #d4d4d4;
        }
      }
    }
  }
  .pagenation-wrap{
    position: absolute;
    left:50%;
    bottom: 5.208vw;
    transform: translateX(-50%);
    ul{
      display: flex;  
      li{
        margin-right: 1.563vw;
        &:last-child{
          margin-right: 0;
        }
        .dot{
          display: block;
          width: 1.042vw;
          height: 1.042vw;
          border-radius: 50%;
          background: #151515;
          &.active{
            background: #fff;
            border: 0.052vw solid #151515;
          }
        }
      }
    }
  }
}
</style>

