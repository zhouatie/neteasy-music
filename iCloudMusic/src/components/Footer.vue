<template>
  <div class="footer">
    <div class="music-icons">
      <span class="music-icon-left"></span>
      <span class="music-icon-center"></span>
      <span class="music-icon-right"></span>
    </div>
    <div class="music-bar">
      <div class="music-bar-now">
        <div class="music-pointer"></div>
      </div>
    </div>
    <div class="music-time">00:56/04:27</div>
    <div class="music-sound">
      <div class="music-bar-wrap">
        <div class="music-bar-now">
          <div class="music-pointer"></div>
        </div>
      </div>
    </div>
    <div class="music-function">
      <span class="cycle"></span>
      <span class="lyrics"></span>
      <span class="music-list-btn"><span>30</span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .footer {
    position:absolute;
    left:0;
    bottom:0;
    font-size:0;
    height:130px;
    width:100%;
    background:#f6f6f6;
    padding:28px 43px 28px 53px;
    border-top:2px solid #c5c5c5;
    &>div {float:left;}
    .music-icons {
      margin-right:82px;
      &>span {display:inline-block;vertical-align:middle;cursor:pointer;}
      .music-icon-left {width:66px;height:66px;margin-right:48px;background:url(../assets/image/music-icon-left.png) no-repeat;}
      .music-icon-center {width:74px;height:74px;margin-right:46px;background:url(../assets/image/music-icon-center.png) no-repeat;}
      .music-icon-right {width:66px;height:66px;background:url(../assets/image/music-icon-right.png) no-repeat;}
    }
    .music-bar {
      position:relative;
      width:814px;
      height:8px;
      background:#b0b0b0;
      margin-top:32px;
      border-radius:3px;
      .music-bar-now {
        position:relative;
        width:30%;
        height:100%;
        background:#d71a22;
        .music-pointer {
          position:absolute;
          right:-16px;
          top:-12px;
          width:32px;
          height:32px;
          border-radius:50%;
          background:#fff;;
          border:2px solid #dedede;
          &:before {
            content:"";
            position:absolute;
            left:50%;
            top:50%;
            margin-left:-4px;
            margin-top:-4px;
            width:8px;
            height:8px;
            border-radius:4px;
            background:#d71a22;
          }
        }
      }
      
    }
    .music-time {
      padding-left:25px;
      font-size:18px;
      color:#888888;
      margin-top:24px;
    }
    .music-sound {
      width:242px;
      height:24px;
      padding:8px 0 8px 42px;
      margin-top:24px;
      margin-left:65px;
      background:url(../assets/image/music-sound.png) no-repeat;
      .music-bar-wrap {
        background:#b0b0b0;
        height:100%;
        width:100%;
        border-radius:3px;
        .music-bar-now {
          position:relative;
          width:30%;
          height:100%;
          background:#d71a22;
          border-radius:3px;  
          .music-pointer {
            position:absolute;
            right:-12px;
            top:-8px;
            width:24px;
            height:24px;
            border-radius:50%;
            background:#fff;;
            border:2px solid #dedede;
          }
        }
      }
    }
    .music-function {
      margin-top:20px;
      margin-left:40px;
      &>span {float:left;}
      span {display:inline-block;cursor:pointer;}
      .cycle {
        width:32px;
        height:28px;
        margin-right:30px;
        margin-top:2px;
        background:url(../assets/image/icon-cycle.png) no-repeat;
      }
      .lyrics {
        width:32px;
        height:32px;
        margin-right:30px;
        background:url(../assets/image/icon-lyrics.png) no-repeat;
      }
      .music-list-btn {
        width:93px;
        height:32px;
        padding-left:40px;
        background:url(../assets/image/music-list-btn.png) left center no-repeat;
        span {
          width:53px;
          height:32px;
          background:#c5c5c5;
          border-radius:16px;
          font-size:16px;
          line-height:32px;
          color:#fff;
          text-align:center;
        }
      }
    }
  }
</style>
