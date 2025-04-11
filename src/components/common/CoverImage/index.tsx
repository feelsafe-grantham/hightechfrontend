import { useRef, useEffect } from "react";
import styles from "./CoverImage.module.css"
const CoverImage = ({ videoUrl }: { videoUrl: string }) => {
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
                poster="/images/homeFallback.jpg"
                preload="auto"
            >
                {/* <source src={"/home/video/videoBag.mp4"} type="video/mp4" /> */}
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default CoverImage;