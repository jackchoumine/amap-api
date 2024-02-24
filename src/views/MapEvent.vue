<script setup>
import { ref, watch } from "vue";
import { useInitMap, useClickMap, useZoomMap } from "@/hooks";

const mapContainer = ref(null);
const { map, Map } = useInitMap(mapContainer, {}, ['AMap.ToolBar', 'AMap.Scale', 'AMap.MapType', 'AMap.ControlBar'])
const { position } = useClickMap(map, (event) => {
  const marker = new Map.value.Marker({
    position: event.lnglat,
    title: 'new marker'
  })
  // map.value.add(marker)
  marker.setMap(map.value)
})
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
