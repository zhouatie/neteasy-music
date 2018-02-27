<template>
  <div class="index">
    <div class="index-left fl">
      <div class="index-left-list">
        <ul>
          <li>
            <p class="list-title">推荐</p>
            <ul class="items">
              <router-link class="item" tag="li" to="/fxyy">
                <p class="fxyy">发现音乐</p>
              </router-link>
              <router-link class="item" tag="li" to="/srfm">
                <p class="srfm">私人FM</p>
              </router-link>
              <router-link class="item" tag="li" to="/mv">
                <p class="mv">MV</p>
              </router-link>
              <router-link class="item" tag="li" to="/friend">
                <p class="friend">朋友</p>
              </router-link>
            </ul>
          </li>
          <li>
            <p class="list-title">我的音乐</p>
            <ul class="items">
              <router-link class="item" tag="li" to="/iTunes">
                <p class="iTunes">iTunes音乐</p>
              </router-link>
              <router-link class="item" tag="li" to="/xzdyy">
                <p class="xzdyy">下载的音乐</p>
              </router-link>
              <router-link class="item" tag="li" to="/wddt">
                <p class="wddt">我的电台</p>
              </router-link>
            </ul>
          </li>
          <li>
            <p class="list-title">创建的歌单</p>
            <ul class="items">
              <router-link class="item" tag="li" to="/wxhdyy">
                <p class="wxhdyy">我喜欢的音乐</p>
              </router-link>
              <router-link class="item" tag="li" to="/kq">
                <p class="kq">口琴</p>
              </router-link>
              <router-link class="item" tag="li" to="/wz">
                <p class="wz">,</p>
              </router-link>
              <router-link class="item" tag="li" to="/srsc">
                <p class="srsc">私人收藏</p>
              </router-link>
            </ul>
          </li>
          <li>
            <p class="list-title">收藏的歌单</p>
          </li>
        </ul>
      </div>
      <div class="index-left-player clearfix">
        <div class="player-logo fl">
          <img src="../assets/image/player-logo.png" />
        </div>
        <div class="player-text fl">
          <p class="song-name">那就这样吧</p>
          <p class="singer-name">Rocky</p>
        </div>
        <span class="player-share"></span>
        <span class="player-addToWxh"></span>
      </div>
    </div>
    <div class="index-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .index {
    width:100%;
    height:100%;
    .index-left {
      position:relative;
      width:400px;
      height:100%;
      background-color:#f6f6f6;
      border-right:2px solid #dedede;
      .index-left-list {
        &>ul>li {margin-bottom:30px;}
        p.list-title {
          font-size:24px;
          color:#777777;
          padding:10px 20px 14px;
        }
        .items {
          .item {
            padding:8px 0;
            &.router-link-active {
              background-color:#e3e3e3;
              p {
                border-left:6px solid #d72128;
              }
            }
            p {
              font-size:24px;
              color:#242424;
              padding-left:86px;
              cursor:pointer;
              border-left:6px solid transparent;
              background-position:32px center;
              background-repeat:no-repeat;
              &.fxyy {background-image:url(../assets/image/icon-fxyy.png);}
              &.srfm {background-image:url(../assets/image/icon-srfm.png);}
              &.mv {background-image:url(../assets/image/icon-mv.png);}
              &.friend {background-image:url(../assets/image/icon-friend.png);}
              &.iTunes {background-image:url(../assets/image/icon-iTune.png);}
              &.xzdyy {background-image:url(../assets/image/icon-xzyy.png);}
              &.wddt {background-image:url(../assets/image/icon-wddt.png);}
              &.wxhdyy {background-image:url(../assets/image/icon-wxhdyy.png);}
              &.kq {background-image:url(../assets/image/icon-my_item.png);}
              &.wz {background-image:url(../assets/image/icon-my_item.png);}
              &.srsc {background-image:url(../assets/image/icon-my_item.png);}
            }
          }
        }
      }
      .index-left-player {
        position:absolute;
        left:0;
        bottom:0;
        border-top:2px solid #dedede;
        height:162px;
        width:100%;
        padding:18px;
        .player-logo {
          height:120px;
          width:120px;
          border:2px solid rgba(0,0,0,.2);
          border-radius:6px;
          overflow:hidden;
          img {
          }
        }
        .player-text {
          padding-left:10px;
          max-width:200px;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
          .song-name {
            font-size:26px;
            line-height:68px;
            color:#242424;
          }
          .singer-name {
            font-size: 24px;
            color:#777777;
            line-height:28px;
          }
        }
        &>span {
          position:absolute;
          right:10px;
          width:32px;
          height:28px;
          cursor:pointer;
        }
        .player-share {
          top:40px;
          background:url(../assets/image/icon-share.png) no-repeat;
        }
        .player-share {
          top:40px;
          background:url(../assets/image/icon-share.png) no-repeat;
        }
        .player-addToWxh {
          top:86px;
          background:url(../assets/image/icon-addToWxh.png) no-repeat;
        }
      }
    }
    .index-right {
      width:100%;
      height:100%;
      padding-left:400px;
    }
  }
</style>
