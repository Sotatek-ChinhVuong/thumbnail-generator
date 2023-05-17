const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
console.log("🚀 ~ file: gen-image.ts:2 ~ ffmpegPath:", ffmpegPath)
const ffmpeg = require('fluent-ffmpeg');
const timeOffset = '00:00:01'; // Capture thumbnail at 5 seconds
ffmpeg.setFfmpegPath(ffmpegPath);

export async function genThumbnailFromVideoUrl(videoUrl: string) {
    const chunks: Buffer[] = [];
    const thumbnailBuffer: Buffer = await new Promise((resolve, reject) => {
        ffmpeg(videoUrl)
            .setStartTime(timeOffset)
            .frames(1)
            // .outputOptions(['-vf', 'scale=320:-1']) // Optional: Resize the thumbnail if needed
            // .toFormat('jpg')
            .format('image2pipe')
            .on('error', (err) => reject(err))
            .on('end', () => resolve(Buffer.concat(chunks)))
            .pipe()
            .on('data', (chunk: Buffer) => chunks.push(chunk));
    });
    return thumbnailBuffer
}
