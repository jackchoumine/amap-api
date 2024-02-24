import AMapLoader from '@amap/amap-jsapi-loader'
import { onMounted, onUnmounted, shallowRef } from 'vue'

const JS_CODE = '5bcd46cd13026f9f897f1bfa6a691e6c'
const KEY = 'a50468e975c49b6d6d9ac14fef6e4723'

export function useInitMap(
  mapContainer,
  options = {},
  plugins = [],
  finishInit = () => {}
) {
  const map = shallowRef(null)
  let Map = shallowRef(null)

  onMounted(() => {
    init(mapContainer, options, plugins)
  })

  onUnmounted(() => {
    map.value.destroy()
    map.value = null
  })

  return { map, Map }

  function init(
    mapContainer,
    { viewMode = '2D', zoom = 11, center = [116.397428, 39.90923], ...rest } = {},
    plugins = []
  ) {
    window._AMapSecurityConfig = {
      securityJsCode: JS_CODE,
    }
    // console.log(plugins)
    AMapLoader.load({
      key: KEY, // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins, // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then(AMap => {
        Map.value = AMap
        const mapOptions = {
          viewMode, // 是否为3D地图模式
          zoom, // 初始化地图级别
          center, // 初始化地图中心点位置
          ...rest,
        }
        map.value = new AMap.Map(mapContainer.value, mapOptions)
        map.value.on('complete', () => {
          finishInit(map.value, AMap)
        })
        // 添加地图控件
        plugins.forEach(plugin => {
          AMap.plugin(plugin, () => {
            // console.log(plugin)
            const p = plugin.split('AMap.')[1]
            const _plugin = new AMap[p]()
            map.value.addControl(_plugin)
          })
        })
      })
      .catch(e => {
        console.log(e)
      })
  }
}
