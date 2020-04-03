import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";
/** state hook: useState() */
const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 }
  ]);
  const [age, setAge] = useState(25);
  const addSongs = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  useEffect(() => {
    console.log("useEffect ran for songs: ", songs);
  }, [songs]);
  useEffect(() => {
    console.log("useEffect ran for age: ", age);
  }, [age]);
  return (
    <div>
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <button onClick={addSongs}>Add Song</button>
      <NewSongForm addSongs={addSongs} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
