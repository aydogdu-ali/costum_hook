import React from "react";
import { useState } from "react";
import { useFetch } from "../hook/useFetch";

const Video = () => {
  const [text, setText] = useState("");
   const [hidden, setHidden] = useState(false);
  const url = `https://pixabay.com/api/videos/?key=31725179-e9547203f59a4095ebc0c6c08&q=${text}&video_type=film&lang=tr&per_page=4`;
  const { loading, shows } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Lüften aranacak kelimeyi girin");
    } else {
      setHidden(true);
    }
  };

  return (
    <div className="video">
      <h1>{loading ? "Yükleniyor" : "Videolar"}</h1>
      <div className="video_form">
        <form onSubmit={handleSubmit}>
          <input
            type="type"
            placeholder="search"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="form-ara">Bul</button>
        </form>
      </div>

      {hidden && (
        <div className="show">
          {shows.map((item) => {
            return (
              <div className="video-show" key={item.id}>
                <div>
                  <p> Kategorisi: {item.tags}</p>
                  <small className="like_video">
                    Beğeni sayısı:{item.likes}
                  </small>
                </div>
                <video width="320" height="240" controls>
                  <source src={item.videos.large.url} type="video/mp4" />
                </video>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Video;
