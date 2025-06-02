import React from "react";

const SongDetails = ({ title, artist, length }) => {
  return (
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-bold text-gray-800 truncate">{title}</h2>
      <p className="text-sm text-gray-600 truncate">{artist}</p>
      <p className="text-xs text-gray-500 mt-1">Length: {length}</p>
    </div>
  );
};

export default SongDetails;