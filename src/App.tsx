import React, { useState, useEffect } from 'react'
import { Timeline } from './core/Timeline'
import Viewport from './renderer/Viewport'

const timeline = new Timeline()
const trackId = timeline.addTrack('shape')
// add some demo keyframes
timeline.addKeyframe(trackId, 'p4_positionX', { time: 0, value: 960, easing: 'linear' })
timeline.addKeyframe(trackId, 'p4_positionX', { time: 2, value: 1200, easing: 'bezier', ox: 0, oy: 200, ix: 0, iy: -200 })

export default function App() {
  const [time, setTime] = useState(0)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    let id: number | undefined
    if (playing) {
      const start = performance.now()
      id = window.setInterval(() => {
        setTime(t => {
          const nt = t + 1 / 30
          if (nt > timeline.duration) return 0
          return nt
        })
      }, 1000 / 30)
    }
    return () => { if (id) clearInterval(id) }
  }, [playing])

  return (
    <div style={{ padding: 20 }}>
      <h1>Motion-3D Studio (Prototype)</h1>
      <div style={{ marginBottom: 10, display: 'flex', gap: 8, alignItems: 'center' }}>
        <label>Time: </label>
        <input type="number" value={time} onChange={e => setTime(Number(e.target.value))} />
        <button onClick={() => setPlaying(p => !p)}>{playing ? 'Stop' : 'Play'}</button>
      </div>

      <div style={{ display: 'flex', gap: 20 }}>
        <div style={{ width: 820 }}>
          <Viewport timeline={timeline} time={time} />
        </div>
        <div style={{ flex: 1 }}>
          <h3>Tracks</h3>
          <pre style={{ background: '#111', color: '#0f0', padding: 10 }}>{JSON.stringify(timeline.renderFrame(time), null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
