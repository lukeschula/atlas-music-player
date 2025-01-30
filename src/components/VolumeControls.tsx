import React from 'react';
import volume from '../assets/volume.svg';

const VolumeControls: React.FC = () => {
  return (
    <div className="flex-col flex items-center mt-6 pb-1.5">
      <div className="w-96 flex justify-between gap-4">
        <img src={volume} className="w-5" alt="Volume icon" />
        <input
          type="range"
          min="0"
          max="100"
          className="w-full cursor-pointer caret-sky-800 bg-sky-700 accent-sky-900 rounded-lg"
        />
      </div>
    </div>
  );
};

export default VolumeControls;