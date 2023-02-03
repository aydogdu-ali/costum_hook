import React from "react";
import { useState } from "react";
import { useFetch } from "../hook/useFetch"; // custom hook umuzu import ettik.

const Video = () => {
  // kullanıcının gireceği inputu yakalamak için state tanımladım.
  const [text, setText] = useState("");
  // kullanıcı veri girmeden apiden gelen ilk verileri göstermiyorum
  const [hidden, setHidden] = useState(false);
  // base url imizi yazdım.
  // inputtan alacağınız kelimeyi api de ilgili yere değişken olarak yazıyoruz.
  const url = `https://pixabay.com/api/videos/?key=31725179-e9547203f59a4095ebc0c6c08&q=${text}&video_type=film&lang=tr&per_page=4`;

  // custom Hook umu çağırıyorum.
  const { loading, shows } = useFetch(url);
  // aramayı başlatacak olan event fonksiyonunu tanımlıyorrum.
  const handleSubmit = (e) => {
    e.preventDefault();
    // form kontrolü yapıyorum input boş ise uyarı veriyorum.
    if (text === "") {
      alert("Lüften aranacak kelimeyi girin");
    } else {
      setHidden(true);
    }
  };

  return (
    <div className="video">
      {/*veri apiden çekilene kadar kullanıcıya yükleniyor mesajı veriyorum.*/}
      <h1>{loading ? "Yükleniyor" : "Videolar"}</h1>
      <div className="video_form">
        <form onSubmit={handleSubmit}>
          {/*inputtan yazılan veriyi tanımladığımız state aktarmak için onChange kullanıyorum*/}
          <input
            type="type"
            placeholder="search"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="form-ara">Bul</button>
        </form>
      </div>
      {/*Burda koşulumuz hidden usatetimiz ile ilk başta kullanıcıya gösterilmiyor.*/}
      {hidden && (
        <div className="show">
          {/*kullanıcı inputa veri girip onaylamışsa veriyi map ile Ekrana basıyorum.*/}
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
