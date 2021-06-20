<template>
  <div>
      <Header></Header>
      <div class="container">
        <form>
        <transition name="fade" mode="out-in">
        <router-view></router-view>
        </transition>
        </form>
      </div>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header,
  }
};
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
/* style for transition */
/*
  .fade-enter 表示開始状態
  .fade-enter-active 表示中のtransiton状態
  .fade-enter-to 表示状態 動作完了

  .fade-leave 非表示動作開始状態
  .fade-leave-active 非表示中のtransiton状態
  .fade-leave-to 非表示状態 動作完了
  */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
