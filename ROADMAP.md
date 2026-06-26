# Motion-3D Studio — Roadmap & Issues

## Phase 1: Core Architecture (MVP — In Progress)
- [x] Timeline model + keyframe interpolation
- [x] Expression sandbox (vm2) + helpers (wiggle, loopOut, etc.)
- [x] Basic GPU viewport (Three.js)
- [x] UI: Timeline editor + Inspector panel
- [x] Importers: After Effects, CapCut, Premiere Pro
- [x] Generator: PARAMS_100 sync
- [ ] Export: JSON project format
- [ ] Electron build + FFmpeg integration
- [ ] CLI rendering

## Phase 2: Advanced Features (Next 2–3 weeks)
- [ ] Real-time audio reactivity
- [ ] GPU effect shaders (glow, blur, displacement, LUT, curves)
- [ ] Preset system & animation library
- [ ] Multi-layer rendering + blending modes
- [ ] Mask support (SAM2 integration placeholder)
- [ ] Performance optimization (GPU compute shaders)

## Phase 3: Professional Tools (4–6 weeks)
- [ ] Collaborative editing (WebSocket sync)
- [ ] Plugin API for custom effects
- [ ] WebGPU renderer (fallback from WebGL)
- [ ] Batch rendering + distributed render farm
- [ ] Advanced color grading (3D LUTs, curves editor)
- [ ] IA integration: Real-ESRGAN, Warp Stabilizer, rotoscope (SAM2)

## Open Issues & TODOs

### High Priority
1. **Implement JSON export/import** — Save projects, load from disk (feature)
2. **Add FFmpeg video rendering** — Export animations to MP4/ProRes (feature)
3. **Keyframe editor UI** — Drag-drop, multi-select, Bezier curves visual editor (UI)
4. **Audio track support** — Load audio files, sync timeline, waveform display (feature)
5. **Expression editor** — Syntax highlighting, live preview, error messages (UI)

### Medium Priority
6. **GPU effect shaders** — Implement glow, blur, displacement, color grading passes (feature)
7. **Preset system** — Built-in animation presets, import/export custom presets (feature)
8. **Mask editor** — Visual mask creation + SAM2 integration (feature)
9. **Multi-format import** — XML/JSON from premiere, CapCut, AE (io)
10. **Electron production build** — Code signing, installer, auto-updates (devops)

### Low Priority
11. **Collaborative features** — Real-time sync, shared projects, comments (feature)
12. **WebGPU renderer** — Compute shaders, advanced GPU features (renderer)
13. **Plugin marketplace** — Community effect packs, sharing (ecosystem)
14. **VR/3D export** — Equirectangular, stereoscopic output (feature)
15. **AI features** — Upscaling (Real-ESRGAN), stabilization, auto-rotoscope (ai)

## Known Limitations
- Expression sandbox (vm2) only works on Node.js/Electron, not in browser for security
- GPU shaders are WebGL 2 only (no WebGPU yet)
- Audio reactivity not yet implemented
- No collaborative editing in MVP
- Performance not optimized for 100+ layers or complex expressions

## Testing
- Unit tests for Timeline + expression evaluation (vitest)
- E2E tests for UI workflows (Playwright)
- Performance benchmarks (complex scenes, large keyframe counts)
- Import/export round-trip tests (AE → Motion-3D → JSON → AE)
