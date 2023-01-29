import React from 'react'
import { useState } from 'react'



const Picture = () => {
 const url = `https://pixabay.com/api/videos/?key=31725179-e9547203f59a4095ebc0c6c08&q=${text}&video_type=film&lang=tr&per_page=4`;
    const [text, setText] = useState("")
  return (
    <div className="picture">
        <h1>Fotoğraflar</h1>
        <input type="search"  placeholder='search' value = {text}onChange={(e)=> setText(e.target.value)}/>
        <div className="show"></div>
        </div>
  )
}

export default Picture