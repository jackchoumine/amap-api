<!-- 地图图层 -->
<!-- 文档 https://lbs.amap.com/api/javascript-api-v2/guide/layers/official-layers -->
<script setup>
import { ref, watch } from "vue";
import { useInitMap } from "@/hooks";

const mapContainer = ref(null);
const selected = ref(true);
// const { map, Map } = 
const { map } = useInitMap(mapContainer, {}, ['AMap.ToolBar', 'AMap.Scale'], addTrafficLayer)
watch(selected, (val) => {
  console.log(val)
  if (val) {
    map.value.add(traffic)
  } else {
    map.value.remove(traffic)
  }
})
let traffic = null
function addTrafficLayer(map, Map) {
  console.log('addTrafficLayer')
  if (!traffic) {
    traffic = new Map.TileLayer.Traffic({
      autoRefresh: true, //是否自动刷新
      interval: 180, //刷新间隔，默认180s
    });
  }
  // 通过 add 方法将图层添加到地图
  map.add(traffic);
}

// watch(map, (val) => {
//   console.log(val)
// })
// watch(Map, (val) => {
//   console.log(val)
// })
</script>

<template>
  <!-- <button @click="">添加实时路况</button> -->
  <div class="layer-panel">
    <ul>
      <li><input type="checkbox" name="traffic" v-model="selected"/>traffic</li>
    </ul>
  </div>
  <div ref="mapContainer" class="container"></div>
</template>

<style scoped>
.layer-panel {
  position: absolute;
  z-index: 100;
  list-style-type: none;
}
.container {
  width: 100%;
  height: 100%;
}
</style>
