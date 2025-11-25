import { useRef, useState } from "react";

export default function Reels() {
  const videoRefs = useRef([]);
  const [playing, setPlaying] = useState(Array(3));
  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    // Add more URLs as needed
  ];

  // !  will check which index has active node attached --> play it
  function handlePlay(id) {
    if (videoRefs.current[id]) {
      videoRefs.current[id].play();
    }
  }

  function handleToggle(id) {
    const video = videoRefs.current(id);
    if (video) {
      if (video.paused) {
        video.play();
        setPlaying((prev) => prev.map((p, i) => (i === id ? true : false)));
      } else {
        video.pause();
        setPlaying((prev) => prev.map((p, i) => (i === id ? true : false)));
      }
    }
  }
  const video = videos.map((video, index) => (
    <div key={index}>
      <video
        ref={(el) => (videoRefs.current[index] = el)}
        loop
        muted
        controls={false}
        className="reel-video"
        onClick={() => handleToggle(index)}
        style={{ cursor: "pointer" }}
        src={video}
      />
      <button
        className="reels_play_button"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(0,0,0,0.4)",
          border: "none",
          borderRadius: "50%",
          color: "#fff",
          fontSize: "2rem",
          display: playing[index] ? "none" : "block",
          pointerEvents: "none", // so click goes to video
        }}
      >
        ▶
      </button>
    </div>
  ));
  return (
    <div className="reels_page_container">
      <div className="reels-grid">{video}</div>
    </div>
  );
}
