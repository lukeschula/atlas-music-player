import React from "react";

const CoverArt = ({ coverArtUrl, size = "w-48" }) => {
  return (
    <div className={`relative ${size} aspect-square overflow-hidden rounded-lg shadow-md`}>
      <img
        src={coverArtUrl}
        alt="Cover Art"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default CoverArt;