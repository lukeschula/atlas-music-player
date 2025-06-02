import React, { useRef, useState, useEffect } from "react";

// VolumeSlider Component
const VolumeSlider = ({ volume, onVolumeChange }) => (
  <input
    type="range"
    min="0"
    max="1"
    step="0.01"
    value={volume}
    onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
  />
);

const NowPlaying = ({ title, coverArtUrl, audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlayback = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-sm mx-auto p-4 bg-white rounded-xl shadow-md border">
      {/* Cover Art */}
      <div className="aspect-square overflow-hidden rounded-lg mb-4">
        <img
          src={coverArtUrl}
          alt="Cover Art"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-center mb-4 truncate">{title}</h2>

      {/* Audio Tag (Hidden) */}
      <audio ref={audioRef} src={audioSrc} />

      {/* Controls */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        <button
          onClick={togglePlayback}
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>

      {/* Volume Control */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Volume
        </label>
        <VolumeSlider volume={volume} onVolumeChange={setVolume} />
      </div>
    </div>
  );
};

export default NowPlaying;
