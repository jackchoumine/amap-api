<script setup>
import { ref } from "vue";
import { useInitMap } from "@/hooks";

const mapContainer = ref(null);
useInitMap(mapContainer, {}, ['AMap.Scale'])
</script>

<template>
  <div ref="mapContainer" class="container"></div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
}
</style>
