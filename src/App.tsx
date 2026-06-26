import React, { useState } from 'react'
import { Timeline } from './core/Timeline'

const timeline = new Timeline()
const trackId = timeline.addTrack('shape')

export default function App() {
  const [time, setTime] = useState(0)
  const [frame, setFrame] = useState<any[]>([])

  function render() {
    const out = timeline.renderFrame(time)
    setFrame(out)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Motion-3D Studio (Prototype)</h1>
      <div style={{ marginBottom: 10 }}>
        <label>Time: </label>
        <input type="number" value={time} onChange={e => setTime(Number(e.target.value))} />
        <button onClick={render} style={{ marginLeft: 8 }}>Render frame</button>
      </div>
      <pre style={{ background: '#111', color: '#0f0', padding: 10 }}>{JSON.stringify(frame, null, 2)}</pre>
    </div>
  )
}
