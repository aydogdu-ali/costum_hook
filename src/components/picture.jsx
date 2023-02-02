import React from "react";
import { useState } from "react";
import { useFetch } from "../hook/useFetch";

const Picture = () => {
  const [text, setText] = useState("");
  const [hidden, setHidden] = useState(false);

  const url = `https://pixabay.com/api/?key=31725179-e9547203f59a4095ebc0c6c08&q=${text}&video_type=film&lang=tr&per_page=4`;
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
    <div className="picture">
      <h1>{loading ? "Yükleniyor" : "Fotoğraflar"}</h1>
      <div className="picture_form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />{" "}
          <button className="form-ara"> Bul</button>
        </form>
      </div>

      {hidden && (
        <div className="show">
          {shows?.map((item) => {
            //   const { id, webformatURL } = item;
            return (
              <div className="picture-show" key={item.id}>
                <div>
                  <p> Kategorisi: {item.tags}</p>
                  <small className="like_picture">Beğeni sayısı:{item.likes}</small>
                </div>
                <img src={item.webformatURL} alt={item.tags} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Picture;
