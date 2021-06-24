
import './App.css';
import {useState, useEffect} from "react"
import {RolandR8, Japanese, AtomHard} from "./AudioArrays.js"
import logo from "./Images/TR-04.svg"



function App() {
  const [Volume, setVolume] = useState(0.5);
  const [CurrentSet, setCurrentSet] = useState(RolandR8)
  const [JustPlayed, setJustPlayed] = useState("")

  const HandleKeypress = (e) => {
    for (let obj of CurrentSet){
      if (e.keyCode === obj.trigger){
        document.getElementById(obj.label).click();    
      }
    }
  };

  const HandleVolume = (e) =>{
      setVolume(e.target.value);
  };
    
  useEffect(() => {
    window.addEventListener('keydown', HandleKeypress);

    return () => {
      window.removeEventListener('keydown', HandleKeypress);
    };
  });

  const SoundPlay = (obj) =>{
      const audio = document.getElementById(obj.button)
      audio.currentTime=0;
      audio.volume=Volume; 
      audio.play();
      // this.activatePad();
      // setTimeout(() => this.activatePad(), 100);
      setJustPlayed(obj.label)
  };

  const CreateButtons = () =>{
    return CurrentSet.map((obj, index) => {
      return(
        <div className="pad-container">
          <button className="drum-pad" id={obj.label} key={index} onClick={() => SoundPlay(obj)}>
          <audio className='clip'id={obj.button} src={obj.sound}/>
            {obj.button}
          </button>
          {obj.label}
        </div>
      )
    })
  };
  
  return (
    <div id="drum-machine">
      <div id="interface">
        <div id="pad-grid">{CreateButtons()}</div>

        <div id="settings">
          <input id="volume-slider" type="range" min='0' max='1' 
          value={Volume}step='0.01' onChange={HandleVolume} />
          <div id="display">
          <p>{JustPlayed}</p>
          </div>
          <div id="kit-buttons">
            <button onClick={()=> setCurrentSet(RolandR8)}>Roland<br/>R8</button>  
            <button onClick={()=> setCurrentSet(Japanese)}>Traditional<br/>Japanese</button>  
            <button onClick={()=> setCurrentSet(AtomHard)}>AtomHard<br/>ElectroFX</button>  
          </div>
        </div>

      </div>
      <a href="https://github.com/tornikerogava">
        <img id="logo" alt="logo" src={logo} />
      </a>
    </div>
  );
}

export default App;
