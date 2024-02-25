<script setup>
import { ref, watch } from "vue";
import { useInitMap, useClickMap, useDistance } from "@/hooks";
const mapContainer = ref()
const { map, Map } = useInitMap(mapContainer)
const startPos = [116.5005, 40.0006]
const endPos = [116.5395, 40.0286]
useDistance(map, Map, startPos, endPos)
</script>

<template>
  <div class='distance-map w-full h-full' ref="mapContainer"></div>
</template>

<style scoped lang="scss">
.distance-map {
    // scss code
}
</style>
