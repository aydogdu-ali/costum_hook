import Picture from "./components/Picture";
import Video from "./components/Video";
import "./App.css";
import { useState } from "react";

function App() {
  const [picture, setPicture] = useState(false);
  const [video, setVideo] = useState(false);
  const [hidden, setHidden] = useState(false)


  const handleHome = ()=>{
    setPicture(false)
    setVideo(false)
    setHidden(false)
  }

  const handeClickp = () => {
    setPicture(true);
    setVideo(false);
    setHidden(true);
  };
  const handeClickv = () => {
    setPicture(false);
    setVideo(true);
    setHidden(true)
  };


  return (
    <>
      <div className="header">
        <h1>Ne Aramak İstersiniz </h1>
        <button className={`${hidden ? "" : "home"}`} onClick={handleHome}>
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
