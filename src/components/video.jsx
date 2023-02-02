import React from 'react'
import { useState } from 'react';
import { useFetch } from "../useFetch";


const Video = () => {
    const [text1, setText1] = useState("");
    const url = `https://pixabay.com/api/videos/?key=31725179-e9547203f59a4095ebc0c6c08&q=${text1}&video_type=film&lang=tr&per_page=4`;
    const { loading, shows } = useFetch(url);

const handleSubmit = (e) => {
  e.preventDefault();
  setText1(text1);
};

  return (
    <div className="video">
      <h1>{loading ? "Yükleniyor" : "Videolar"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="search"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
      </form>
      <div className="show">
        {shows.map((item) => {
          return (
            <div className="video-show" key={item.id}>
              <div>
                <p> Kategorisi: {item.tags}</p>
                <small>Beğeni sayısı:{item.likes}</small>
              </div>
              <video width="320" height="240" controls>
                <source src={item.videos.large.url} type="video/mp4" />
              </video>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Video