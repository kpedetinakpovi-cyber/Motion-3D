import React, { useState, useCallback } from 'react';
import './TimelineUI.css';
import { Timeline, Track } from '../core/Timeline';

type TimelineUIProps = {
  timeline: Timeline;
  currentTime: number;
  onTimeChange: (time: number) => void;
  onAddTrack: (type: string) => void;
  onAddKeyframe: (trackId: string, param: string, time: number, value: number) => void;
};

export default function TimelineUI({ timeline, currentTime, onTimeChange, onAddTrack, onAddKeyframe }: TimelineUIProps) {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);
  const [selectedParam, setSelectedParam] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  const PIXELS_PER_SECOND = 50;
  const TRACK_HEIGHT = 60;
  const RULER_HEIGHT = 40;
  const SIDEBAR_WIDTH = 200;

  const timelineWidth = Math.max(500, (timeline.duration || 60) * PIXELS_PER_SECOND);
  const currentX = currentTime * PIXELS_PER_SECOND;

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const time = x / PIXELS_PER_SECOND;
    onTimeChange(Math.max(0, Math.min(timeline.duration || 60, time)));
  };

  const handleTrackClick = (trackId: string) => {
    setSelectedTrackId(trackId);
  };

  const renderRuler = () => {
    const marks = [];
    for (let i = 0; i <= timeline.duration; i++) {
      const x = i * PIXELS_PER_SECOND;
      marks.push(
        <div key={i} style={{ position: 'absolute', left: x, width: 1, height: RULER_HEIGHT, borderRight: '1px solid #333' }}>
          <span style={{ fontSize: 10, color: '#666' }}>{i}s</span>
        </div>
      );
    }
    return marks;
  };

  return (
    <div className="timeline-container">
      {/* Ruler */}
      <div className="timeline-ruler" style={{ marginLeft: SIDEBAR_WIDTH }}>
        <div style={{ width: timelineWidth, height: RULER_HEIGHT, position: 'relative', background: '#222', borderBottom: '1px solid #444', overflow: 'hidden' }}>
          {renderRuler()}
        </div>
      </div>

      {/* Tracks */}
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ width: SIDEBAR_WIDTH, background: '#1a1a1a', borderRight: '1px solid #333', padding: 10, overflowY: 'auto', maxHeight: 400 }}>
          <button onClick={() => setShowMenu(!showMenu)} style={{ width: '100%', padding: 8, marginBottom: 10 }}>+ Add Track</button>
          {showMenu && (
            <div style={{ background: '#111', border: '1px solid #444', marginBottom: 10 }}>
              {['shape', 'video', 'text', 'null', 'adjustment'].map(t => (
                <div key={t} onClick={() => { onAddTrack(t); setShowMenu(false); }} style={{ padding: 8, cursor: 'pointer', borderBottom: '1px solid #333' }}>
                  {t}
                </div>
              ))}
            </div>
          )}
          {timeline.tracks.map(tr => (
            <div
              key={tr.id}
              onClick={() => handleTrackClick(tr.id)}
              style={{
                padding: 8,
                marginBottom: 4,
                background: selectedTrackId === tr.id ? '#444' : '#222',
                border: '1px solid #333',
                cursor: 'pointer',
                borderRadius: 4,
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 'bold' }}>{tr.type} #{tr.layer}</div>
            </div>
          ))}
        </div>

        {/* Timeline tracks area */}
        <div
          style={{
            flex: 1,
            background: '#111',
            borderLeft: '1px solid #333',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 400,
          }}
          onClick={handleTimelineClick}
        >
          <div style={{ position: 'relative', width: timelineWidth }}>
            {timeline.tracks.map((tr, idx) => (
              <div
                key={tr.id}
                style={{
                  height: TRACK_HEIGHT,
                  background: idx % 2 === 0 ? '#0a0a0a' : '#050505',
                  borderBottom: '1px solid #222',
                  position: 'relative',
                }}
              >
                {/* Render keyframes for this track */}
                {Object.entries(tr.keyframes).flatMap(([param, kfs]) =>
                  kfs.map((kf, kIdx) => (
                    <div
                      key={`${param}-${kIdx}`}
                      style={{
                        position: 'absolute',
                        left: kf.time * PIXELS_PER_SECOND - 5,
                        top: TRACK_HEIGHT / 2 - 5,
                        width: 10,
                        height: 10,
                        background: '#ff0033',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        border: '1px solid #fff',
                      }}
                      title={`${param}: ${kf.value}`}
                    />
                  ))
                )}
              </div>
            ))}

            {/* Playhead */}
            <div
              style={{
                position: 'absolute',
                left: currentX,
                top: 0,
                width: 2,
                height: timeline.tracks.length * TRACK_HEIGHT,
                background: '#0f0',
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
