import { watch } from 'vue'

export function useDistance(map, Map, start, end) {
  let startM, endM, line, text
  watch([map, Map], ([map, Map]) => {
    if (map && Map) {
      text = drawText(map, Map)
      const { startM: _startM, endM: _endM } = drawStartEnd(map, Map)
      startM = _startM
      endM = _endM
      line = drawLine(map, Map)
      //   map.setFitView()
      calcDistance()
      startM.on('dragging', calcDistance)
      endM.on('dragging', calcDistance)
    }
  })

  function calcDistance() {
    const p1 = startM.getPosition()
    const p2 = endM.getPosition()
    line.setPath([p1, p2])
    const textPos = p1.divideBy(2).add(p2.divideBy(2))
    const distance = p1.distance(p2).toFixed(2)
    text.setText(`距离：${Math.round(distance / 1000)} 千米`)
    text.setPosition(textPos)
  }

  function drawStartEnd(map, Map) {
    const startM = new Map.Marker({
      position: start,
      draggable: true,
    })
    const endM = new Map.Marker({
      position: new Map.LngLat(...end),
      draggable: true,
    })
    startM.setMap(map)
    map.add(endM)
    return {
      startM,
      endM,
    }
  }

  function drawLine(map, Map) {
    const line = new Map.Polyline({
      path: [start, end],
      strokeWeight: 4,
      strokeColor: '#3366FF', // 线颜色
      lineJoin: 'round', // 折线拐点连接处样式
      lineCap: 'round', // 折线两端圆角
      zIndex: 50,
    })
    map.add(line)
    return line
  }

  function drawText(map, Map) {
    const text = new Map.Text({
      //   text: 'hello text',
      style: {
        'background-color': 'rgba(255,255,255,0.8)',
        'border-color': '#e1f5fe',
        'font-size': '16px',
      },
    })
    text.setMap(map)
    return text
  }
}
