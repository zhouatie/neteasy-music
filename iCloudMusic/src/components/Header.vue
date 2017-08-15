<template>
  <div class="head">
    <div class="header-left fl">
      <div class="header-btns">
        <span><i></i><i></i></span>
        <span><i></i></span>
        <span><i></i><i></i></span>
      </div>
      <div class="header-left-bottom clearfix">
        <div class="header-logo fl"></div>
        <div class="header-search fl clearfix">
          <div class="header-search-btns fl">
            <span class="active"></span>
            <span></span>
          </div>
          <div class="header-search-input fl">
            <i></i>
            <input type="text" placeholder="搜索音乐，歌手，歌词，用户">
          </div>
        </div>
      </div>
    </div>
    <div class="header-right clearfix fr">
      <div class="email_setting clearfix fl">
        <span class="email fl">
          <i class="iconfont icon-youxiang"></i>
          <span class="email-num-wrap">
            <span class="email-num">3</span>
          </span>
        </span>
        <span class="setting fl">
          <i class="iconfont icon-setting"></i>
        </span>
      </div>
      <div class="userInfo fl">
        <span class="mini"></span>
        <div @click="showInfo=!showInfo" class="userInfo-logoBtn">
          <img src="http://p3.music.126.net/UEMmd1f_N2dRaKmedTLeLA==/1423867573544918.jpg" />
          <div v-show="showInfo" class="info-holder">
            <div class="info-top">
              <div class="info-top-logo">
                <img src="http://p3.music.126.net/UEMmd1f_N2dRaKmedTLeLA==/1423867573544918.jpg" />
              </div>
              <p>我是南方大汉</p>
              <ul class="info-lists clearfix">
                <li>
                  <p class="info-num-wrap">0</p>
                  <p class="info-name">动态</p>    
                </li>
                <li>
                  <p class="info-num-wrap">9</p>
                  <p class="info-name">关注</p>    
                </li>
                <li>
                  <p class="info-num-wrap">0</p>
                  <p class="info-name">粉丝</p>    
                </li>
              </ul>
            </div>
            <div class="info-middle">
              <ul>
                <li><p class="hy-center">会员中心<i class="info-detail"></i><span>未订购</span></p></li>
                <li><p class="info-setting">个人信息设置<i class="info-detail"></i></p></li>
                <li><p class="bind-accout">绑定社交账号<i class="info-detail"></i><span><i class="accout-xlwb"></i><i class="accout-txwb"></i></span></p></li>
              </ul>
            </div>
            <div class="info-bottom">
              <p class="logout">退出登录<i class="info-detail"></i></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      showInfo: false
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .head {
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:120px;
    border-bottom: 2px solid #a81d0f;
    background:#b72712;
    .header-left {
      font-size:0;
      .header-btns {
        margin-top:8px;
        &:hover i{
          display:inline-block;
        }
        &>span {
          display:inline-block;
          height:24px;width:24px;
          margin-left: 16px;
          border-radius: 12px;
          position:relative;
          cursor:pointer;
          i {
            display:none;
            height:4px;width:16px;
            border-radius:2px;
            background:#000;
            opacity:.3;
            position:absolute;
            left:50%;
            top:50%;
            margin-left:-8px;
            margin-top:-2px;
          }
        }
        &>span:nth-of-type(1) {
            background:#fc625d;
            &>i:nth-of-type(1) {
              transform:rotateZ(45deg);
            }
            &>i:nth-of-type(2) {
              transform:rotateZ(-45deg);
            }
        }
        &>span:nth-of-type(2) {
            background:#fdbc40;
        }
        &>span:nth-of-type(3) {
            background:#34c84a;
            &>i:nth-of-type(1) {
              transform:rotateZ(90deg);
            }
        }
      }
      .header-left-bottom {
        .header-logo {
          background:url(../assets/image/logo.png) no-repeat;
          width:275px;height:86px;
          margin-left:40px;
        }
        .header-search {
          padding-left:145px;
          padding-top:16px;
          .header-search-btns {
            display:inline-block;
            height:48px;
            width:105px;
            border-radius:6px;
            border:1px solid #9b180d;
            overflow:hidden;
            &>span {
              display:inline-block;
              width:50%;
              height:100%;
              cursor:pointer;
              opacity:0.5;
            }
            &>span:nth-of-type(1){
              background:url(../assets/image/goLeft.png) center no-repeat;
              border-right:1px solid #88200d;
            }
            &>span:nth-of-type(2){
              background:url(../assets/image/goRight.png) center no-repeat;
            }
            &>span.active {
              background-color:#c32e17;
              opacity:1;
            }
          }
          .header-search-input {
            margin-left:28px;
            position:relative;
            i {
              position:absolute;
              left:14px;
              top:10px;
              width:30px;
              height:30px;
              background:url(../assets/image/icon-search.png) no-repeat;
            }
            input {
              height:48px;
              width:468px;
              border-radius:24px;
              padding-left:57px;
              font-size:22px;
            }
          }
        }
        
      }
    }
    .header-right {
      height:100%;
      .email_setting {
        padding-top:60px;
        i {font-size:28px;}
        .email {
          position:relative;
          margin-right:64px;
          .email-num-wrap {
            position:absolute;
            right:-30px;
            top:-30px;
            width:40px;
            height:40px;
            padding:4px;
            background:#b72712;
            border-radius:18px;
            .email-num {
              display:block;
              width:32px;
              height:32px;
              background:#fff;
              border-radius:16px;
              line-height:34px;
              text-align:center;
              font-size:20px;
              color:#b72712;
              font-weight:bold;
            }
          } 
        }
        .setting {
          font-size:28px;
          line-height:28px;
          margin-right:42px;
        }
      }
      .userInfo {
        width:132px;
        height:100%;
        border-left:2px solid #a81d0f;
        padding-top:50px;
        position:relative;
        .mini {
          position:absolute;
          right:12px;
          top:10px;
          width:28px;
          height:24px;
          background:url(../assets/image/mini.png) no-repeat;
          cursor:pointer;
        }
        .userInfo-logoBtn {
          width:76px;
          height:48px;
          margin-left:32px;
          cursor:pointer;
          position:relative;
          &:before {
            content:"";
            position:absolute;
            left:60px;
            top:24px;
            height:0;
            width:0;
            border-top:8px solid #fff;
            border-right:8px solid transparent;
            border-left:8px solid transparent;
            border-bottom:none;
          }
          img {
            width:48px;
            height:48px;
            border-radius:50%;
          }
          .info-holder {
            position:absolute;
            right:17px;
            top:70px;
            width:500px;
            background:#fff;
            border-radius:8px;
            border:2px solid #c3c3c3;
            background:#fafafa;
            &:before {
              content:"";
              position:absolute;
              right:23px;
              top:-8px;
              height:0;
              width:0;
              border-bottom:10px solid #fff;
              border-right:10px solid transparent;
              border-left:10px solid transparent;
              border-top:none;
              z-index:1;
            }
            &:after {
              content:"";
              position:absolute;
              right:19px;
              top:-13px;
              height:0;
              width:0;
              border-bottom:14px solid #c3c3c3;
              border-right:14px solid transparent;
              border-left:14px solid transparent;
              border-top:none;
            }
            .info-top {
              width:100%;
              padding-top:70px;
              padding-bottom:30px;
              border-bottom:2px solid #e1e1e1;
              .info-top-logo {
                margin-left:40px;
                display:inline-block;
                float:left;
                height:80px;
                width:80px;
                position:relative;
                img {
                  height:80px;
                  width:80px;
                }
                &:before {
                  box-sizing:border-box;
                  content:"";
                  position:absolute;
                  left:0;
                  top:-0;
                  width:80px;
                  height:80px;
                  opacity:.2;
                  border-radius:50%;
                  border:2px solid #000;
                }
              }
              &>p {
                padding-left:140px;
                line-height:80px;
                font-size:28px;
                color:#363636;
              }
              .info-lists {
                padding-left:30px;
                padding-top:38px;
                li {
                  float:left;
                  width:144px;
                  height:60px;
                  font-size:0;
                  padding-left:10px;
                  border-right:2px solid #e1e1e1;
                  &>p {font-size:28px;line-height:30px;}
                  &:last-of-type {border:none;}
                  .info-num-wrap {font-weight:bold;}
                  .info-name {color:#555555;}
                }
              }
            }
            .info-middle {

              border-bottom:2px solid #e1e1e1;
              ul {
                padding:6px 40px;
                li {
                  height:64px;
                  padding:12px 0;
                  .hy-center {
                    background:url(../assets/image/hy-center.png) no-repeat;
                  }
                  .info-setting {background:url(../assets/image/info-setting.png) no-repeat;}
                  .bind-accout {background:url(../assets/image/bind-accout.png) no-repeat;}
                  p {
                    height:100%;
                    padding-left:52px;
                    line-height:40px;
                    color:#222;
                    span {
                      float:right;
                      color:#555;
                      i {
                        display:inline-block;
                        height:40px;
                        width:40px;
                        margin-left:16px;
                        &.accout-xlwb {background:url(../assets/image/accout-xlwb.png) no-repeat;}
                        &.accout-txwb {background:url(../assets/image/accout-txwb.png) no-repeat;}
                      }
                    }
                    .info-detail {
                      display:inline-block;
                      height:100%;
                      float:right;
                      width:36px;
                      background:url(../assets/image/goin.png) no-repeat;
                    }
                  }
                }
              }
            }
            .info-bottom {
              padding:18px 40px;
              p {
                padding-left:52px;
                height:40px;
                line-height:40px;
                background:url(../assets/image/logout.png) no-repeat;
                i {
                  height:100%;
                  float:right;
                  width:36px;
                  background:url(../assets/image/goin.png) no-repeat;
                }
              }
            }
          }
        }
      }
    }

  }
</style>
