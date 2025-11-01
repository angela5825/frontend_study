import { useState } from "react";
import "./CustomVideoPlayer.css";
import { useRef } from "react";

function CustomVideoPlayer() {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (videoRef.current) {
      videoRef.current.volume = vol;
    }
  };

  const handleSpeedChange = (e) => {
    const speed = parseFloat(e.target.value);
    setPlaybackRate(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  const handleFullScreen = () => {
    if (videoRef.currentorequestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      // Firefox
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      // Chrome, Safari, Opera
      videoRef.current.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      // IE/Edge
      videoRef.current.msRequestFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;

    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const formatTime = (time) => {
    // 1.22 ,1.23 초
    // 60초가 되었을 때 1분
    // Math.floor(time/60)
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // 재생 버튼 눌렀을 때의 반응들 관여
  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
      setIsPlaying(true);
      // playPauseBtn.textContent = "⏸ 일시정지";
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      // playPauseBtn.textContent = "▶ 재생";
    }
  };

  const handleRewind = () => {
    if (!videoRef.current) return;

    videoRef.current.currentTime -= 10;
  };
  const handleForward = () => {
    if (!videoRef.current) return;

    videoRef.current.currentTime += 10;
  };

  const handleProgressClick = (e) => {
    if (!videoRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    // console.log(e);
    // console.log(rect);
    // console.log(e.clientX);
    // console.log(e.currentTarget);
    // console.log(videoRef.current.duration);
    // console.log(offsetX);
    const newTime = (offsetX / rect.width) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  };
  return (
    <>
      <h1>🎥 커스텀 비디오 플레이어</h1>

      <div className="video-container">
        <video
          id="video"
          ref={videoRef}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          // video 태그의 시간이 업데이트됨에 따라 반응하는 리스너 -> currentTime 관리
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        ></video>

        <div
          className="progress"
          id="progressBar"
          onClick={handleProgressClick}
        >
          <div
            className="progress-filled"
            style={{
              width: duration
                ? `${
                    (videoRef.current.currentTime / videoRef.current.duration) *
                    100
                  }%`
                : "0%",
            }}
          ></div>
          {/* ⬆️ 온만큼 노란색으로 채워져야 함 */}
        </div>

        <div className="controls">
          <button id="rewind" onClick={handleRewind}>
            ⏪ 10초
          </button>
          <button id="playPauseBtn" onClick={togglePlayPause}>
            {isPlaying ? "⏸ 일시정지" : "▶ 재생"}
          </button>
          <button id="forward" onClick={handleForward}>
            10초 ⏩
          </button>
          <span id="currentTime">
            {" "}
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
          <input
            type="range"
            id="volume"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
          />
          <select id="speed" value={playbackRate} onChange={handleSpeedChange}>
            <option value="0.5">0.5x</option>
            <option value="1" selected>
              1x
            </option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
          <button id="fullscreenBtn" onClick={handleFullScreen}>
            ⛶ 전체 화면
          </button>
        </div>
      </div>
    </>
  );
}

export default CustomVideoPlayer;
