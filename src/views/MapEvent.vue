<script setup>
import { ref, watch } from "vue";
import { useInitMap, useClickMap, useZoomMap } from "@/hooks";

const mapContainer = ref(null);
const { map } = useInitMap(mapContainer, {}, ['AMap.ToolBar', 'AMap.Scale', 'AMap.MapType', 'AMap.ControlBar'])
const { position } = useClickMap(map)
const { zoom } = useZoomMap(map)
</script>

<template>
  <div class='w-full h-full' ref="mapContainer"></div>
  <div class="info">
    <div class="lng">lng : {{ position.lng }} </div>
    <div class="lng">lat : {{ position.lat }}</div>
    <div>zoom : {{ zoom }}</div>
  </div>
</template>

<style scoped lang="scss">
.info {
  position: absolute;
  left: calc(50% - 150px);
  bottom: 10px;
  background-color: aliceblue;
  display: flex;

  .lng {
    margin-right: 10px;
  }
}
</style>
