
import './App.css';
import {Howl, Howler} from "howler"
import {useState} from "react"
import {audioClips, RolandR8} from "./AudioArray.js"
import test from './Audio/Dasani Kit/dasani7.wav'


function App() {
  const [Volume, setVolume] = useState(0.5);
  Howler.volume(Volume)

  const HandleKeypress = (e) => {
    for (let obj of RolandR8){
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
    return RolandR8.map((soundObj, index) => {
      return(
        <button className="drum-pad" id={soundObj.label} key={index} onClick={() => SoundPlay(soundObj.sound)}>
          {soundObj.Button}

          <audio
            className='clip'
            id="ddshvc"
            src={RolandR8[1].sound}
          />
          
        </button>
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
