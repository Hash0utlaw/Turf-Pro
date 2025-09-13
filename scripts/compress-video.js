#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Video compression script for Next.js projects
 * Compresses videos to web-optimized formats with multiple quality levels
 */

const INPUT_DIR = path.join(__dirname, '../public/videos');
const OUTPUT_DIR = path.join(__dirname, '../public/videos/optimized');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Compression presets
const PRESETS = {
  // High quality for desktop (target: ~8-12MB)
  high: {
    mp4: {
      crf: 23,
      preset: 'medium',
      maxrate: '4M',
      bufsize: '8M',
      vf: 'scale=1920:1080'
    },
    webm: {
      crf: 30,
      preset: 'medium',
      maxrate: '3M',
      bufsize: '6M',
      vf: 'scale=1920:1080'
    }
  },
  // Medium quality for mobile (target: ~3-6MB)
  medium: {
    mp4: {
      crf: 28,
      preset: 'fast',
      maxrate: '2M',
      bufsize: '4M',
      vf: 'scale=1280:720'
    },
    webm: {
      crf: 35,
      preset: 'fast',
      maxrate: '1.5M',
      bufsize: '3M',
      vf: 'scale=1280:720'
    }
  },
  // Low quality for slow connections (target: ~1-2MB)
  low: {
    mp4: {
      crf: 32,
      preset: 'ultrafast',
      maxrate: '800k',
      bufsize: '1.6M',
      vf: 'scale=854:480'
    },
    webm: {
      crf: 40,
      preset: 'ultrafast',
      maxrate: '600k',
      bufsize: '1.2M',
      vf: 'scale=854:480'
    }
  }
};

function checkFFmpeg() {
  try {
    execSync('ffmpeg -version', { stdio: 'pipe' });
    return true;
  } catch (error) {
    console.error('❌ FFmpeg not found. Please install FFmpeg first:');
    console.error('   macOS: brew install ffmpeg');
    console.error('   Ubuntu: sudo apt install ffmpeg');
    console.error('   Windows: Download from https://ffmpeg.org/download.html');
    return false;
  }
}

function getVideoInfo(inputPath) {
  try {
    const output = execSync(`ffprobe -v quiet -print_format json -show_format -show_streams "${inputPath}"`, {
      encoding: 'utf8'
    });
    const info = JSON.parse(output);
    const videoStream = info.streams.find(s => s.codec_type === 'video');
    
    return {
      duration: parseFloat(info.format.duration),
      size: parseInt(info.format.size),
      width: videoStream.width,
      height: videoStream.height,
      bitrate: parseInt(info.format.bit_rate)
    };
  } catch (error) {
    console.error(`❌ Error analyzing video: ${error.message}`);
    return null;
  }
}

function compressVideo(inputPath, outputPath, format, preset) {
  const { crf, preset: ffmpegPreset, maxrate, bufsize, vf } = preset;
  
  const command = [
    'ffmpeg',
    '-i', inputPath,
    '-c:v', format === 'mp4' ? 'libx264' : 'libvpx-vp9',
    '-crf', crf.toString(),
    '-preset', ffmpegPreset,
    '-maxrate', maxrate,
    '-bufsize', bufsize,
    '-vf', vf,
    '-an', // Remove audio for web optimization
    '-movflags', '+faststart', // Optimize for web streaming
    '-y', // Overwrite output file
    outputPath
  ].join(' ');

  console.log(`🔄 Compressing ${format.toUpperCase()} (${preset === PRESETS.high.mp4 ? 'high' : preset === PRESETS.medium.mp4 ? 'medium' : 'low'} quality)...`);
  
  try {
    execSync(command, { stdio: 'pipe' });
    const stats = fs.statSync(outputPath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`✅ ${format.toUpperCase()} compressed: ${sizeMB}MB`);
    return true;
  } catch (error) {
    console.error(`❌ Error compressing ${format}: ${error.message}`);
    return false;
  }
}

function generatePoster(inputPath, outputPath) {
  const command = [
    'ffmpeg',
    '-i', inputPath,
    '-ss', '00:00:02', // Extract frame at 2 seconds
    '-vframes', '1',
    '-q:v', '2', // High quality
    '-y',
    outputPath
  ].join(' ');

  console.log('🖼️  Generating poster image...');
  
  try {
    execSync(command, { stdio: 'pipe' });
    console.log('✅ Poster image generated');
    return true;
  } catch (error) {
    console.error(`❌ Error generating poster: ${error.message}`);
    return false;
  }
}

function main() {
  const inputFile = process.argv[2];
  
  if (!inputFile) {
    console.log('Usage: node compress-video.js <input-video-file>');
    console.log('Example: node compress-video.js turf-pro-putting-green-residential-home.MP4');
    process.exit(1);
  }

  const inputPath = path.join(INPUT_DIR, inputFile);
  
  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Input file not found: ${inputPath}`);
    process.exit(1);
  }

  if (!checkFFmpeg()) {
    process.exit(1);
  }

  console.log('🎬 Video Compression Tool');
  console.log('========================');
  
  const videoInfo = getVideoInfo(inputPath);
  if (!videoInfo) {
    process.exit(1);
  }

  console.log(`📹 Input: ${inputFile}`);
  console.log(`   Duration: ${videoInfo.duration.toFixed(1)}s`);
  console.log(`   Resolution: ${videoInfo.width}x${videoInfo.height}`);
  console.log(`   Size: ${(videoInfo.size / (1024 * 1024)).toFixed(2)}MB`);
  console.log(`   Bitrate: ${(videoInfo.bitrate / 1000).toFixed(0)}kbps`);
  console.log('');

  const baseName = path.parse(inputFile).name;
  
  // Generate poster image
  const posterPath = path.join(OUTPUT_DIR, `${baseName}-poster.jpg`);
  generatePoster(inputPath, posterPath);

  // Compress to multiple formats and qualities
  const formats = ['mp4', 'webm'];
  const qualities = ['high', 'medium', 'low'];
  
  for (const quality of qualities) {
    for (const format of formats) {
      const outputPath = path.join(OUTPUT_DIR, `${baseName}-${quality}.${format}`);
      compressVideo(inputPath, outputPath, format, PRESETS[quality][format]);
    }
  }

  console.log('');
  console.log('🎉 Compression complete!');
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
  console.log('');
  console.log('Generated files:');
  
  const files = fs.readdirSync(OUTPUT_DIR);
  files.forEach(file => {
    const filePath = path.join(OUTPUT_DIR, file);
    const stats = fs.statSync(filePath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`   ${file} (${sizeMB}MB)`);
  });
}

if (require.main === module) {
  main();
}

module.exports = { compressVideo, generatePoster, PRESETS };
