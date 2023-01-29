import React from 'react'
import { useState } from 'react';

const Video = () => {
    const url = `https://pixabay.com/api/?key=31725179-e9547203f59a4095ebc0c6c08&q=${text}&image_type=photo&lang=tr&per_page=4`;
      const [text, setText] = useState("");
  return (
    <div className="video">
      <h1>Videolar </h1>
      <form action="">
        <input
          type="search"
          placeholder="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="göster"></div>
      </form>
    </div>
  );
}

export default Video