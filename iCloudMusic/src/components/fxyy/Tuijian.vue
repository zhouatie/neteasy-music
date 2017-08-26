<template>
    <div class="tuijian">
        <div class="adv-wrap">
            <ul class="adv-list clearfix">
                <li>
                    <img src="../../assets/image/adv.png" />
                    <img src="../../assets/image/adv.png" />
                </li>
                <li>
                    <img src="../../assets/image/adv2.png" />
                    <img src="../../assets/image/adv2.png" />
                    <span class="adv-tip">专栏</span>
                </li>
                <li>
                    <img src="../../assets/image/adv.png" />
                    <img src="../../assets/image/adv.png" />
                </li>
            </ul>
            <ul class="dots">
                <li class="active"></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="hot-select clearfix">
            <div class="list-title">
                <span>热门精选</span>
            </div>
            <ul class="hot-select-items clearfix">
                <li v-for="item in hotLists[0]" class="hot-select-item">
                    <div class="item-img-wrap">
                        <img :src="item.src" alt="">
                        <p class="item-img-title"><i class="erji"></i><span>{{item.num}}</span></p>
                    </div>
                    <p class="item-text">{{item.dec}}</p>
                </li>
            </ul>
        </div>
        <div class="gxh-tj clearfix">
            <div class="list-title">
                <span>个性化推荐</span>根据你的口味生成，播放和收藏越多，推荐越准
            </div>
            <ul class="gxh-tj-items clearfix">
                <li class="gxh-tj-item">
                    <div class="imgWrap gxh-date-wrap">
                        6
                       <span class="date-bg-bottom"></span>
                    </div>
                    <div class="textWrap">
                        <dl>
                            <dt>每日歌曲推荐</dt>
                            <dd>根据你的口味生成，每天更新！</dd>
                        </dl>
                    </div>
                </li>
                <li class="gxh-tj-item" >
                    <div class="imgWrap">
                        <p class="item-img-title"><i class="erji"></i><span>34576</span></p>
                    </div>
                    <div class="textWrap">
                        <dl>
                            <dt>每日歌曲推荐</dt>
                            <dd>根据你的口味生成，每天更新！</dd>
                        </dl>
                    </div>
                </li>
            </ul>
        </div>
        <div class="newSong-sd clearfix">
            <div class="list-title">
                <span>新歌速递</span>
            </div>
            <div class="newSong-sd-items-wrap">
                <p class="newSong-sd-title"><span>播放全部</span></p>
                <ul class="newSong-sd-items clearfix">
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                    <li class="newSong-sd-item">
                        <span>01</span>
                        <span>十里桃花<span class="is-soup">（电影《三生三世十里桃花》）</span></span>
                        <span class="have-sq"></span>
                        <span class="have-mv"></span>
                        <span class="singer">张靓颖</span>
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hotLists:[],
            gxh: {}
        }
    },
    computed : {

    },
    mounted(){
        this.$http.get("/init").then( res => {
            //this.hotLists = Object.assign({}, this.hotLists, res.data.lists)
            this.$set(this.hotLists,0,res.data.lists)
            // var arr =  res.data.lists;
            // this.hotLists = arr;
            //this.$set(this.gxhLists,0,res.data.gxh.lists);
        })
    }
}
</script>

<style lang="less" type="text/less" rel="stylesheet/less" scoped>
.tuijian {
    padding:0 60px 58px;
    .adv-wrap {
        width:100%;
        padding-top:42px;
        overflow-x:hidden;
        perspective:1500px;
        perspective-origin:50% 50%;
        padding-bottom:52px;
        ul.adv-list {
            position:relative;
            height:420px;
            width:1486px;
            -webkit-transform-style:preserve-3d;
            -moz-transform-style:preserve-3d;
            -o-transform-style:preserve-3d;
            transform-style:preserve-3d;
            li {
                position:absolute;
                font-size:0;
                width:948px;
                padding-right:10px;
                height:382px;
                float:left;
                overflow-y:hidden;
                display:none;
                z-index:1;
                span.adv-tip {
                    display:inline-block;
                    width:88px;
                    height:46px;
                    border-radius:23px 0 0 23px;
                    background:#4c7bc9;
                    position:absolute;
                    right:0px;
                    bottom:57px;
                    text-align:center;
                    font-size:24px;
                    line-height:46px;
                    color:#fff;
                }
                &:after {
                    content:'';
                    display:block;
                    width:100%;
                    height:38px;
                    position:absolute;
                    left:0;
                    bottom:0;
                    border-radius:6px 6px 0 0;
                    background:-webkit-linear-gradient(top,rgba(255,255,255,0.7) 0%,rgba(255,255,255,1) 100%);
                }
                &:nth-of-type(1) {
                    -webkit-transform-origin:left center;
                    left:0;
                    display:block;
                    -webkit-transform:rotateY(60deg) scale(0.8);
                }
                &:nth-of-type(2) {
                    left:274px;
                    display:block;
                    -webkit-transform:rotateY(0deg);
                    z-index:2;
                }
                &:nth-of-type(3) {
                    -webkit-transform-origin:right center;
                    right:0;
                    display:block;
                    -webkit-transform:rotateY(-60deg) scale(0.8);
                }
                img {
                    width:938px;
                    height:344px;
                    border-radius:6px;
                    &:nth-of-type(2) {
                        transform:scaleY(-1);
                    }
                }
            }
        }
        ul.dots {
            text-align:center;
            font-size:0;
            margin-top:-8px;
            li {
                display:inline-block;
                width:16px;
                height:16px;
                margin:0 8px;
                border-radius:8px;
                background:#dcdcdc;
                transition:1s;
                &.active {
                    background:#d71a22;
                }
            }
        }
    }
    .fxyy-area {

    }
    .list-title {
        height:66px;
        width:100%;
        position:relative;
        padding-left:228px;
        line-height:66px;
        color:#696969;
        font-size:24px;
        span {
            position:absolute;
            left:0;
            bottom:0;
            font-size:38px;
            color:#313131;
            padding:0 8px;
            border-bottom:6px solid #e1e1e1;            
        }
    }
    p.item-img-title {
        height:40px;
        width:100%;
        position:absolute;
        left:0;
        top:0;
        text-align:right;
        font-size:20px;
        line-height:40px;
        color:#fff;
        padding-right:12px;
        letter-space:1px;
        background:linear-gradient(right,rgba(0,0,0,.5) 0%,rgba(0,0,0,0) 50%);
        background:-moz-linear-gradient(right,rgba(0,0,0,.5) 0%,rgba(0,0,0,0) 50%);
        background:-o-linear-gradient(right,rgba(0,0,0,.5) 0%,rgba(0,0,0,0) 50%);
        background:-webkit-linear-gradient(right,rgba(0,0,0,.5) 0%,rgba(0,0,0,0) 50%);
        &>span {
            display:inline-block;
            padding-left:36px;
            height:100%;
            line-height:40px;
            background:url(../../assets/image/erji.png) left center no-repeat;
        }
    }
    .hot-select {
        position:relative;
        .hot-select-items {
            border-top:2px solid #e1e1e1;
            padding-top:40px;
            font-size:0;
            .hot-select-item {
                float:left;
                width:300px;
                height:390px;
                margin-right:94px;
                margin-bottom:76px;
                &:nth-of-type(4n) {
                    margin-right:0;
                }
                .item-img-wrap {
                    position:relative;  
                    height:300px;
                    width:300px;
                    img {width:100%;height:100%;}
                    &:before {
                        content:"";
                        position:absolute;
                        box-sizing:border-box;
                        left:0;
                        top:0;
                        width:100%;
                        height:100%;
                        border:2px solid rgba(0,0,0,.2);
                    }
                }
                .item-text {
                    font-size:28px;
                    line-height:42px;
                }
            }
        }
    }
    .gxh-tj {
        position:relative;
        .gxh-tj-items {
            padding-top:38px;
            padding-bottom:94px;
            border-top:2px solid #e1e1e1;
            .gxh-tj-item {
                box-sizing:content-box;
                float:left;
                width:740px;
                height:244px;
                .imgWrap {
                    position:relative;
                    float:left;
                    width:244px;
                    height:244px;
                    border:2px solid rgba(192, 192, 192,.2);
                    &.gxh-date-wrap {
                        border-radius:8px;
                        font-size:150px;
                        line-height:244px;
                        color:#c75c5b;
                        font-weight:bold;
                        text-align:center;
                        background:linear-gradient(top, #fff 0,#f6f6f6 50%,#fff 50%,#fff 100%);
                        span {
                            display:inline-block;
                            width:100%;
                            height:50%;
                            text-align:center;
                            &.date-bg-bottom {
                                position:absolute;
                                left:0;
                                bottom:0;
                                background:rgba(255,255,255,.2)
                            }
                            
                        }
                    }
                    
                }
                .textWrap {
                    padding-left:284px;
                    height:100%;
                    padding-top:40px;
                    font-size:0;
                    dt {
                        font-size:30px;
                        line-height:70px;
                        color:#222222;
                    }
                    dd {
                        font-size:24px;
                        line-height:44px;
                        color:#8c8c8c;
                    }
                }
                &:nth-of-type(n) {
                    border-right:2px solid #ededed;
                    border-bottom:2px solid #ededed;
                    padding:38px 0;
                }
                &:nth-of-type(2n) {
                    border-right:none;
                    border-bottom:2px solid #ededed;
                    .imgWrap {
                        margin-left:40px;
                    }
                    .textWrap {
                        padding-left:324px;
                    }
                }
                &:nth-of-type(1) {
                    padding-top:0;
                }
                &:nth-of-type(2) {
                    padding-top:0;
                }
                &:nth-last-of-type(1) {
                    border-bottom:0;
                }
                &:nth-last-of-type(2) {
                    border-bottom:0;
                }
            }
        }
    }
    .newSong-sd {
        .list-title {
            border-bottom:2px solid #e1e1e1;
        }
        .newSong-sd-items-wrap {
            margin-top:40px;
            border:2px solid #e7e7e7;
            .newSong-sd-title {
                background:#fafafa;
                span {
                    display:inline-block;
                    height:60px;
                    line-height:60px;
                    padding-left:89px;
                    background:url(../../assets/image/icon-playAll.png) 20px center no-repeat;
                    cursor:pointer;
                }
            }
        }
        .newSong-sd-items {
            .newSong-sd-item {
                float:left;
                width:50%;
                height:60px;
                background:#fff;
                padding-left:20px;
                overflow:hidden;
                &:nth-of-type(4n-1) {
                    background:#fafafa;
                }
                &:nth-of-type(4n) {
                    background:#fafafa;
                }
                &:nth-of-type(odd) {
                    border-right:2px solid #f3f3f3;

                }
                &>span {
                    display:inline-block;
                    float:left;
                    height:100%;
                    line-height:60px;
                }
                span:nth-of-type(1) {
                    width:32px;
                    text-align:center;
                    font-size:20px;
                    margin-right:37px;
                }
                span:nth-of-type(2) {
                    width:324px;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                    font-size:22px;
                    color:#222222;
                    margin-right:30px;
                    span.is-soup {
                        color:#8a8a8a;
                    };
                }
                span.have-sq {
                    width:32px;
                    margin-right:18px;
                    background:url(../../assets/image/have-sq.png) center no-repeat;
                }
                span.have-mv {
                    width:32px;
                    margin-right:18px;
                    background:url(../../assets/image/have-mv.png) center no-repeat;
                }
                span.singer {
                    float:right;
                    padding-right:60px;
                    max-width:180px;
                    font-size:22px;
                    color:#545454;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                }
            }
        }
    }
}
</style>