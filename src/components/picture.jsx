import React from "react";
import { useState } from "react";
import { useFetch } from "../useFetch";

const Picture = () => {
  const [text, setText] = useState("");
  const url = `https://pixabay.com/api/?key=31725179-e9547203f59a4095ebc0c6c08&q=${text}&video_type=film&lang=tr&per_page=4`;
  const { loading, shows } = useFetch(url);
const handleSubmit = (e)=>{
e.preventDefault()
setText(text)

}
console.log(shows)
  return (
    <div className="picture">
      <h1>{loading ? "Yükleniyor" : "Fotoğraflar"}</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />{" "}
      </form>

      <div className="show">
        {shows.map((item) => {
        //   const { id, webformatURL } = item;
          return (
            <div className="picture-show" key={item.id}>
              <img src={item.webformatURL} alt={item.tags} />
              <p> Kategorisi: {item.tags}</p>
              <small>Beğeni sayısı:{item.likes}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Picture;
