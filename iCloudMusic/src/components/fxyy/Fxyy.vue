<template>
    <div class="fxyy">
        <div class="header">
            <router-link tag="span" to="/fxyy/tuijian">推荐</router-link>
            <span>排行榜</span>
            <span>歌单</span>
            <span>主播电台</span>
            <span>最新音乐</span>
        </div>
        <div class="fxyy-content" style="height:calc(100% - 88px)">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:"fxyy",
    data() {
        return {

        }
    }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.fxyy {
    height:100%;
    width:100%;
    overflow:auto;
    border-bottom:2px solid #e1e1e1;
    .header {
        height:88px;
        text-align:center;
        font-size:0;
        border-bottom:2px solid #e1e1e1;
        span {
            display:inline-block;
            height:100%;
            line-height:86px;
            font-size:26px;
            color:#323232;
            padding:0 65px;
            cursor:pointer;
            &.router-link-active {
                color:#b32511;
            }
        }
    }
    .fxyy-content {
        width:100%;
    }
}
</style>