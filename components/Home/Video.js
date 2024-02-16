import useIntersectionObserver from "@react-hook/intersection-observer";
import { useRef } from "react";

const LazyVideo = () => {
  const containerRef = useRef();
  const lockRef = useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }
  return (
    <div ref={containerRef}>
      {lockRef.current && (
        <video
          autoPlay
          muted
          loop
          src="video.mp4"
          type="video/mp4"
          id="hero"
          style={{
            zIndex: -1,
            height: "auto",
            maxHeight: "80vh",
            minHeight: "40vh",
            width: "100vw",
            objectFit: "cover",
            opacity: 0.7,
            left: 0,
            top: 0,
            bottom: 0,
          }}
        ></video>
      )}
    </div>
  );
};

export default function Video() {
  return (
    <>
      <LazyVideo />
    </>
  );
}
