import { useEffect, useRef } from "react";
import styles from "./Breadcrum.module.css"
const Breadcrum = ({ videoUrl, fallback = "/images/aboutFallback.jpg" }: { videoUrl: string, fallback?: string }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.src = videoUrl;
            }
        }, 300);

        return () => {
            clearTimeout(timeout);
        };
    }, []);
    return (
        <div className={styles.videoContainer}>
            <video
                className={`${styles.video}`}
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                poster={fallback}
                preload="auto"
            >
                {/* <source src={"/home/video/videoBag.mp4"} type="video/mp4" /> */}
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Breadcrum;