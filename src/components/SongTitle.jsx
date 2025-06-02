import React from "react";

const SongInfo = ({ title, author }) => {
  return (
    <div className="text-center mt-2">
      <h2 className="text-lg font-semibold truncate">{title}</h2>
      <p className="text-sm text-gray-500 truncate">{author}</p>
    </div>
  );
};

export default SongInfo;