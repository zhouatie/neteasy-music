<template>
    <div class="fxyy">
        <div class="header">
            <router-link tag="span" to="/fxyy/tuijian">推荐</router-link>
            <router-link tag="span" to="/fxyy/rank-list">排行榜</router-link>
            <router-link tag="span" to="/fxyy/song-list">歌单</router-link>
            <router-link tag="span" to="/fxyy/zb-dt">主播电台</router-link>
            <router-link tag="span" to="/fxyy/new-music">最新音乐</router-link>
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