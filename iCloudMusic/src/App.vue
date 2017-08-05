<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
  import Header from '@/components/Header'

export default {
  name: 'app',
  components: {
          Header
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
}
</style>
