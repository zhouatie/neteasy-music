<template>
    <div class="rank-list">
<button style="width:100px;height:50px;" @click="getInfo">dfdfd</button>
    </div>
</template>

<style lang="less" rel="stylesheet/less">
.rank-list {

}
</style>
<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        getInfo() {
            this.$http.get('/gets').then( res => {
                console.log(res)
            })
        }
    }
}
</script>