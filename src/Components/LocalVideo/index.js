import { useEffect, useRef } from "react";
import styles from "./style.module.scss";

export default function LocalVideo({ style }) {
  const videoRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: { width: 1080, height: 720 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
      })
      .catch((err) => {
        console.error("error:", err);
      });
  }, []);

  return (
    <div className={styles.localVideoContainer}>
      <video
        controls
        ref={videoRef}
        autoPlay={true}
        muted
        className={styles.videoStream}
      />
    </div>
  );
}
