import Picture from "./components/Picture";
import Video from "./components/Video";
import "./App.css";
import { useState } from "react";

function App() {
  // apiden gelen verileri yakalamamak için stateleri tanımladım.
  const [picture, setPicture] = useState(false);
  const [video, setVideo] = useState(false);

  // anasayfa butonu için state tanımladım.
  const [hidden, setHidden] = useState(false);

  // anasayfa butonunun yapacağı fonksiyonu tanımladım.
  const handleHome = () => {
    setPicture(false);
    setVideo(false);
    setHidden(false);
  };

  //fotograf arama butonu click eventini tanımladım.
  const handeClickp = () => {
    setPicture(true);
    setVideo(false);
    setHidden(true);
  };

  //video arama butonu click eventini tanımladım.
  const handeClickv = () => {
    setPicture(false);
    setVideo(true);
    setHidden(true);
  };

  return (
    <>
    
      <div className="header">
        <h1>Ne Aramak İstersiniz </h1>
        {/*statein durumuna göre class tanımladım.*/}
        <button
          className={`${hidden ? "home-show" : "home"}`}
          onClick={handleHome}
        >
          Anasayfa
        </button>
        <div className="header_button">
          <button className="foto_button" onClick={handeClickp}>
            {" "}
            Fotoğraf
          </button>
          <button className="video_button" onClick={handeClickv}>
            Video
          </button>
        </div>
      </div>

      <div className="App">
        {picture && (
          <aside>
            <Picture />
          </aside>
        )}

        {video && (
          <aside>
            <Video />
          </aside>
        )}
      </div>
    </>
  );
}

export default App;
