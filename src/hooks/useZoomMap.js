import { ref, watch } from 'vue'

export function useZoomMap(map) {
  const zoom = ref(11)
  watch(map, mapIns => {
    if (mapIns) {
      mapIns.on('zoomend', zoomEnd)
      mapIns.on('moveend', zoomEnd)
    }
  })

  return {
    zoom,
  }

  function zoomEnd(event) {
    // console.log(event)
    zoom.value = map.value.getZoom()
  }
}
