<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">初始化</RouterLink>
      <RouterLink to="/layer">图层</RouterLink>
      <RouterLink to="/event">事件</RouterLink>
      <RouterLink to="/distance">测距</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  height: 2rem;
  background-color: aliceblue;

  nav {
    display: flex;
    justify-content: center;
    height: 2rem;
    a {
      font-size: 1.2rem;
      padding: 0.2rem;
    }
  }
}

main {
  position: relative;
  height: calc(100vh - 2rem);
}
</style>
