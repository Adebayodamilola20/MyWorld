import { useEffect, useRef, type VideoHTMLAttributes } from "react";

// Muted looping video that starts on its own, including on iPhones.
// React doesn't write the `muted` attribute to the DOM, so iOS treats the
// video as having sound and refuses to autoplay; set it by hand, then play.
// If the phone still blocks it (e.g. Low Power Mode), start on the next tap.

type AutoplayVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "autoPlay" | "muted" | "loop" | "playsInline">;

const AutoplayVideo = (props: AutoplayVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      if (video.paused) video.play().catch(() => {});
    };

    const retryOnTouch = () => tryPlay();
    document.addEventListener("touchstart", retryOnTouch, { passive: true });
    document.addEventListener("click", retryOnTouch);
    video.addEventListener("canplay", tryPlay);
    tryPlay();

    return () => {
      document.removeEventListener("touchstart", retryOnTouch);
      document.removeEventListener("click", retryOnTouch);
      video.removeEventListener("canplay", tryPlay);
    };
  }, []);

  return <video ref={ref} autoPlay muted loop playsInline controls={false} {...props} />;
};

export default AutoplayVideo;
