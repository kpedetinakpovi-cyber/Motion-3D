# Motion-3D Studio — Contributing Guide

Welcome ! This is an open collaborative project to build a professional animation/motion graphics suite.

## Getting Started

1. **Clone & setup**
   ```bash
   git clone https://github.com/kpedetinakpovi-cyber/Motion-3D.git
   cd Motion-3D
   npm install
   ```

2. **Run dev server**
   ```bash
   npm run dev
   # Opens http://localhost:5173
   ```

3. **Generate params**
   ```bash
   npm run generate:params
   # Writes /generated/params-100.json and params-100.ts
   ```

4. **Run CLI**
   ```bash
   npx ts-node cli/motion3d-cli.ts --input examples/simple-animation.json --output frame.json
   ```

## Project Structure

```
Motion-3D/
├── src/
│   ├── core/           # Timeline, params, expressions, types
│   ├── ui/             # React components (timeline, inspector, viewport)
│   ├── io/             # Importers/exporters (AE, CapCut, Premiere)
│   ├── renderer/       # Three.js viewport + shaders
│   └── App.tsx         # Main editor app
├── cli/                # CLI rendering
├── electron/           # Electron desktop app
├── examples/           # Sample projects (JSON)
├── generator/          # PARAMS_100 generator
├── package.json
├── tsconfig.json
├── vite.config.ts
└── ROADMAP.md
```

## Contributing

### Areas of Focus

**Core Animation**
- [ ] Implement loopOut variants (cycle/pingpong/offset/continue) fully
- [ ] Add more expression helpers (angle(), distance(), ease functions)
- [ ] Optimize keyframe interpolation for 1000+ keyframes
- [ ] Better error handling & validation in expressions

**UI/UX**
- [ ] Improve timeline drag-drop UX
- [ ] Add bezier curve editor for keyframe easing
- [ ] Implement undo/redo (use Zustand store)
- [ ] Add keyboard shortcuts (play/stop, delete, duplicate track)

**Rendering**
- [ ] Implement GPU effect shaders (glow, blur, displacement)
- [ ] Add LUT support for color grading
- [ ] Optimize render performance (batching, GPU compute)
- [ ] WebGPU fallback renderer

**Import/Export**
- [ ] Expand AE/CapCut/Premiere importers (better layer mapping)
- [ ] Add EDL export for Premiere compatibility
- [ ] JSON project save/load with validation
- [ ] FFmpeg integration for video export

**Testing**
- [ ] Unit tests for Timeline, interpolation, expressions (vitest)
- [ ] E2E tests for UI (Playwright)
- [ ] Performance regression tests

### Code Style
- TypeScript strict mode (no `any` unless necessary)
- React functional components + hooks
- ESLint + Prettier (auto-format)
- Comments for non-obvious logic
- Tests for new features

### Submitting PRs
1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit with clear messages: `feat(timeline): add loopOut support`
4. Push and open a PR with description of changes
5. Link related issues

### Reporting Issues
- Check existing issues first
- Describe the bug / feature clearly
- Include reproduction steps, expected vs actual
- Attach screenshots/videos if applicable

## License
MIT

## Questions ?
Open an issue or start a discussion. We're here to help !
