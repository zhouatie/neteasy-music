<template>
  <div id="app">
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  
export default {
  name: 'app',
  components: {
          Header,
          Footer
  },
  created(){
      
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
#app {
  transform-origin: center center;
  transform:scale(0.5);
  width:2004px;
  height:1340px;
  position:absolute;
  left:50%;
  top:50%;
  margin-left:-1002px;
  margin-top: -670px;
  border-radius: 10px;
  background:#fff;
  overflow: hidden;
  .content {
    height:100%;
    width:100%;
    padding:120px 0 130px;
  }
}
</style>
