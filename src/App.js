
import './App.css';
import {useState, useEffect} from "react"
import {RolandR8} from "./AudioArray.js"



function App() {
  const [Volume, setVolume] = useState(0.5);
  const [CurrentSet, setCurrentSet] = useState(RolandR8)

  const HandleKeypress = (e) => {
    for (let obj of CurrentSet){
      if (e.keyCode === obj.trigger){
        SoundPlay(obj)
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', HandleKeypress);

    return () => {
      window.removeEventListener('keydown', HandleKeypress);
    };
  });

  const SoundPlay = (src) =>{
      const audio = document.getElementById(src.button)
      audio.currentTime=0;
      audio.play();
    };
  

  const RenderButtonAndSound = () =>{
    return CurrentSet.map((soundObj, index) => {
      return(
        <button className="drum-pad" id={soundObj.label} key={index} onClick={() => SoundPlay(soundObj)}>
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
    <div style={{height:"100vh"}} id="drum-machine" tabIndex="0">
      <div id="display">
        {RenderButtonAndSound()}
      </div>
    
    </div>
  );
}

export default App;
