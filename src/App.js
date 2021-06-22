
import './App.css';
import {Howl, Howler} from "howler"
import {useState} from "react"
import audioClips from "./AudioArray.js"


function App() {
  const [Volume, setVolume] = useState(0.5);
  Howler.volume(Volume)
  

  const SoundPlay = (src) =>{
    const sound = new Howl({
      src
    })
    sound.play()
  }

  const RenderButtonAndSound = () =>{
    return audioClips.map((soundObj, index) => {
      return(
        <button key={index} onClick={() => SoundPlay(soundObj.sound)}>
          {soundObj.label}
        </button>
      )
    })
  }
  
  return (
    <div id="drum-machine">
      <div id="display">
        {RenderButtonAndSound()}
      </div>
    </div>
  );
}

export default App;
