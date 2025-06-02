import React, { useState, useRef, useEffect } from "react";

// Reusable VolumeSlider Component
const VolumeSlider = ({ volume, onVolumeChange }) => (
  <input
    type="range"
    min="0"
    max="1"
    step="0.01"
    value={volume}
    onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
    className="w-full h-2 accent-blue-500 rounded-lg bg-gray-200 cursor-pointer"
  />
);

const NowPlayingCard = ({ coverArtUrl, title, audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="max-w-sm mx-auto p-4 rounded-xl shadow-lg border bg-white">
      <div className="aspect-square overflow-hidden rounded-lg mb-4">
        <img src={coverArtUrl} alt="Cover Art" className="w-full h-full object-cover" />
      </div>

      <h2 className="text-lg font-bold truncate mb-2">{title}</h2>

      <audio ref={audioRef} src={audioSrc} />

      <div className="flex items-center justify-between mt-2 mb-4">
        <button
          onClick={togglePlay}
          className="px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Volume</label>
        <VolumeSlider volume={volume} onVolumeChange={setVolume} />
      </div>
    </div>
  );
};

export default NowPlayingCard;
