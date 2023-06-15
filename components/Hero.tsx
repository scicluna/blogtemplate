import Image from "next/image"

export default function Hero() {
    return (
        <div className="absolute h-full w-full bg-contain z-10">
            <Image src="/images/splash.webp" placeholder="blur" blurDataURL="/images/splashload.webp" sizes="100dvw" fill alt="..." />
        </div>
    )
}