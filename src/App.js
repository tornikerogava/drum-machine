
import './App.css';
import {useState} from "react"
import {RolandR8} from "./AudioArray.js"



function App() {
  const [Volume, setVolume] = useState(0.5);
  const [CurrentSet, setCurrentSet] = useState(RolandR8)

  const HandleKeypress = (e) => {
    for (let obj of CurrentSet){
      if (e.keyCode === obj.trigger){
        SoundPlay(obj.sound)
      }
    }
  };

  const SoundPlay = (src) =>{
      
    };
  

  const RenderButtonAndSound = () =>{
    return CurrentSet.map((soundObj, index) => {
      return(
        <button className="drum-pad" id={soundObj.label} key={index} onClick={() => SoundPlay(soundObj.sound)}>
          {soundObj.button}

          <audio
            className='clip'
            id={soundObj.button}
            src={soundObj.sound}
          />
          
        </button>
      )
    })
  };
  
  return (
    <div style={{height:"100vh"}} id="drum-machine" onKeyDown={HandleKeypress} tabIndex="0">
      <div id="display">
        {RenderButtonAndSound()}
      </div>
    
    </div>
  );
}

export default App;
