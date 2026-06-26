#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { Timeline } from '../src/core/Timeline';

interface CLIOptions {
  input?: string;
  output?: string;
  format?: string;
  fps?: number;
  width?: number;
  height?: number;
  duration?: number;
  frame?: number;
}

function parseArgs(): CLIOptions {
  const args = process.argv.slice(2);
  const options: CLIOptions = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--input' || arg === '-i') options.input = args[++i];
    else if (arg === '--output' || arg === '-o') options.output = args[++i];
    else if (arg === '--format' || arg === '-f') options.format = args[++i];
    else if (arg === '--fps') options.fps = Number(args[++i]);
    else if (arg === '--width') options.width = Number(args[++i]);
    else if (arg === '--height') options.height = Number(args[++i]);
    else if (arg === '--duration') options.duration = Number(args[++i]);
    else if (arg === '--frame') options.frame = Number(args[++i]);
  }
  return options;
}

async function renderFrame(timelineData: any, frameNum: number, outputPath: string) {
  const timeline = new Timeline();
  timeline.duration = timelineData.duration || 60;
  timeline.fps = timelineData.fps || 30;
  timeline.compWidth = timelineData.width || 1920;
  timeline.compHeight = timelineData.height || 1080;

  // Reconstruct tracks from data
  timelineData.tracks?.forEach((tr: any) => {
    const tid = timeline.addTrack(tr.type, tr.params);
    Object.entries(tr.keyframes || {}).forEach(([param, kfs]: [string, any]) => {
      kfs.forEach((kf: any) => timeline.addKeyframe(tid, param, kf));
    });
    Object.entries(tr.expressions || {}).forEach(([param, expr]: [string, string]) => {
      timeline.setExpression(tid, param, expr);
    });
  });

  const time = frameNum / timeline.fps;
  const frame = timeline.renderFrame(time);
  await fs.writeFile(outputPath, JSON.stringify(frame, null, 2));
  // eslint-disable-next-line no-console
  console.log(`✓ Rendered frame ${frameNum} to ${outputPath}`);
}

async function main() {
  const opts = parseArgs();

  if (!opts.input) {
    // eslint-disable-next-line no-console
    console.error('Usage: motion3d-cli --input project.json --output frame.json [--frame 0]');
    process.exit(1);
  }

  try {
    const projectData = JSON.parse(await fs.readFile(opts.input, 'utf-8'));
    const frameNum = opts.frame ?? 0;
    const outputPath = opts.output ?? `frame-${frameNum}.json`;
    await renderFrame(projectData, frameNum, outputPath);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error:', err);
    process.exit(1);
  }
}

main();
