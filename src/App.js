
import './App.css';
import {Howl, Howler} from "howler"
import {useState} from "react"
import audioClips from "./AudioArray.js"


function App() {
  const [Volume, setVolume] = useState(0.5);
  Howler.volume(Volume)

  const HandleKeypress = (e) => {
    for (let obj of audioClips){
      if (e.keyCode === obj.trigger){
        SoundPlay(obj.sound)
      }
    }
  };

  const SoundPlay = (src) =>{
    const sound = new Howl({
      src
    })
    sound.play()
  };

  const RenderButtonAndSound = () =>{
    return audioClips.map((soundObj, index) => {
      return(
        <div key={index} >
          <button onClick={() => SoundPlay(soundObj.sound)}>
            {soundObj.label}
          </button>
        </div>
      )
    })
  };
  
  return (
    <div style={{height:"100vh"}}id="drum-machine" onKeyDown={HandleKeypress} tabIndex="0">
      <div id="display">
        {RenderButtonAndSound()}
      </div>
    </div>
  );
}

export default App;
