<template>
  <div id="app" class="layout">
    <router-view></router-view>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  @import "assets/styles/main";
  html, body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    background-color: #f2f2f2;
    font-family: Microsoft YaHei, '微软雅黑', Arial, Tahoma, STHeiti, Helvetica, "\5b\4f53", sans-serif;
    font-size: 16px;
  }
  .fade-enter-active, .fade-leave-active{
    transition: all .2s ease;
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
  }
</style>
