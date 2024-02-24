<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
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
  height: calc(100vh - 2rem);
}
</style>
