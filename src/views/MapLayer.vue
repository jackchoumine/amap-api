<!-- 地图图层 -->
<!-- 文档 https://lbs.amap.com/api/javascript-api-v2/guide/layers/official-layers -->
<script setup>
import { ref, watch } from "vue";
import { useInitMap } from "@/hooks";

const mapContainer = ref(null);
// const { map, Map } = 
useInitMap(mapContainer, {}, ['AMap.ToolBar', 'AMap.Scale'], (map, Map) => {
  // console.log(map)
  // console.log(Map)
  //创建实施交通图层
  const traffic = new Map.TileLayer.Traffic({
    autoRefresh: true, //是否自动刷新
    interval: 180, //刷新间隔，默认180s
  });
  // 通过 add 方法将图层添加到地图
  map.add(traffic);
})
// watch(map, (val) => {
//   console.log(val)
// })
// watch(Map, (val) => {
//   console.log(val)
// })
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
