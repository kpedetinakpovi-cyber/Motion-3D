import React, { useState } from 'react';
import './InspectorPanel.css';
import { PARAMS_100 } from '../../core/params';

type InspectorPanelProps = {
  trackId?: string;
  frameData?: Record<string, any>;
  onSetValue?: (param: string, value: any) => void;
};

export default function InspectorPanel({ trackId, frameData = {}, onSetValue }: InspectorPanelProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    transform: true,
    color: false,
    effects: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const groupParams = () => {
    const groups: Record<string, typeof PARAMS_100> = {
      transform: [],
      text: [],
      color: [],
      effects: [],
    };
    PARAMS_100.forEach(p => {
      if (p.key.includes('anchor') || p.key.includes('position') || p.key.includes('scale') || p.key.includes('rotation')) {
        groups.transform.push(p);
      } else if (p.key.includes('texte') || p.key.includes('police') || p.key.includes('taille')) {
        groups.text.push(p);
      } else if (p.key.includes('couleur') || p.key.includes('luminance') || p.key.includes('saturation')) {
        groups.color.push(p);
      } else {
        groups.effects.push(p);
      }
    });
    return groups;
  };

  const groups = groupParams();

  const renderSection = (sectionName: string, params: typeof PARAMS_100) => {
    const isExpanded = expandedSections[sectionName];
    return (
      <div key={sectionName} style={{ marginBottom: 10 }}>
        <div
          onClick={() => toggleSection(sectionName)}
          style={{
            padding: 10,
            background: '#222',
            cursor: 'pointer',
            userSelect: 'none',
            fontSize: 14,
            fontWeight: 'bold',
            borderBottom: '1px solid #333',
          }}
        >
          {isExpanded ? '▼' : '▶'} {sectionName.toUpperCase()}
        </div>
        {isExpanded && (
          <div style={{ padding: 10, background: '#111' }}>
            {params.slice(0, 5).map(p => (
              <div key={p.key} style={{ marginBottom: 8 }}>
                <label style={{ fontSize: 12, color: '#888' }}>{p.key}</label>
                <div>
                  {p.type === 'number' ? (
                    <input
                      type="range"
                      min={p.min ?? -100}
                      max={p.max ?? 100}
                      value={frameData[p.key] ?? p.default}
                      onChange={e => onSetValue?.(p.key, Number(e.target.value))}
                      style={{ width: '100%' }}
                    />
                  ) : p.type === 'color' ? (
                    <input
                      type="color"
                      value={frameData[p.key] ?? p.default}
                      onChange={e => onSetValue?.(p.key, e.target.value)}
                      style={{ width: '100%', height: 30 }}
                    />
                  ) : p.type === 'enum' ? (
                    <select
                      value={frameData[p.key] ?? p.default}
                      onChange={e => onSetValue?.(p.key, e.target.value)}
                      style={{ width: '100%' }}
                    >
                      {p.options?.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  ) : (
                    <input
                      type="text"
                      value={frameData[p.key] ?? p.default}
                      onChange={e => onSetValue?.(p.key, e.target.value)}
                      style={{ width: '100%' }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="inspector-panel">
      <h3 style={{ padding: 10, borderBottom: '1px solid #333' }}>Properties</h3>
      {trackId ? (
        <div style={{ padding: 10 }}>
          <div style={{ fontSize: 12, color: '#666', marginBottom: 10 }}>Track: {trackId.slice(0, 8)}</div>
          {Object.entries(groups).map(([name, params]) => renderSection(name, params))}
        </div>
      ) : (
        <div style={{ padding: 10, color: '#666' }}>Select a track to inspect</div>
      )}
    </div>
  );
}
