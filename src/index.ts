import { genThumbnailFromVideoUrl } from "./gen-image"

(async () => {
    const rs = await genThumbnailFromVideoUrl('https://img.dev.curecos.net/794_c7442c5d_1680151350072.mp4')
    console.log("🚀 ~ file: index.ts:5 ~ rs:", rs)
})()