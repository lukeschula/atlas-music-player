import React, { useState } from "react";
import PlaylistItem from "./PlaylistItem";

const songs = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd" },
  { id: 2, title: "Levitating", artist: "Dua Lipa" },
  { id: 3, title: "Watermelon Sugar", artist: "Harry Styles" },
];

const Playlist = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="max-w-md w-full space-y-2">
      {songs.map((song) => (
        <PlaylistItem
          key={song.id}
          title={song.title}
          artist={song.artist}
          isSelected={song.id === selectedId}
          onClick={() => setSelectedId(song.id)}
        />
      ))}
    </div>
  );
};

export default Playlist;
