<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss" rel="stylesheet/scss">
 @import 'assets/style/common.scss';
 @import 'assets/style/variable.scss';
@import 'assets/style/main.scss';
#app {
  overflow: hidden;
  font-family: 'Microsoft YaHei',Helvetica-Neue,Helvetica,Arial,sans-serif;
}

</style>
