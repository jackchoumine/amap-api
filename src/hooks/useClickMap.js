import { watch, shallowRef, shallowReactive, onMounted, onBeforeUnmount } from 'vue'

export function useClickMap(map, onClick) {
  const position = shallowReactive({ lng: null, lat: null })
  const _pixel = shallowReactive({ x: null, y: null })

  watch(map, mapIns => {
    if (mapIns) {
      mapIns.on('click', handleClick)
    }
  })

  onBeforeUnmount(() => {
    map.value.off('click', handleClick)
  })

  return {
    position,
    pixel: _pixel,
  }

  function handleClick(e) {
    const { lnglat, pixel } = e
    position.lng = lnglat.lng
    position.lat = lnglat.lat
    _pixel.x = pixel.x
    _pixel.y = pixel.y
    onClick?.(e)
  }
}
