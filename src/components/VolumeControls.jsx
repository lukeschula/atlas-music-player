import React from "react";

const VolumeSlider = ({ volume, onVolumeChange }) => {
  return (
    <div className="flex items-center space-x-2 w-full max-w-sm">
      <label htmlFor="volume" className="text-sm font-medium text-gray-700">
        Volume
      </label>
      <input
        id="volume"
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
      />
    </div>
  );
};

export default VolumeSlider;
