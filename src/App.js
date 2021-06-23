
import './App.css';
import {useState, useEffect} from "react"
import {RolandR8, Japanese, AtomHard} from "./AudioArrays.js"



function App() {
  const [Volume, setVolume] = useState(0.5);
  const [CurrentSet, setCurrentSet] = useState(RolandR8)
  const [JustPlayed, setJustPlayed] = useState("")

  const HandleKeypress = (e) => {
    for (let obj of CurrentSet){
      if (e.keyCode === obj.trigger){
        SoundPlay(obj)
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

  const SoundPlay = (src) =>{
      const audio = document.getElementById(src.button)
      audio.currentTime=0;
      audio.volume=Volume; 
      audio.play();
      
      setJustPlayed(src.label)
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

        <div>
          <input id="volume-slider" type="range" min='0' max='1' 
          value={Volume}step='0.01' onChange={HandleVolume} />
          <div id="display">
          {JustPlayed}
          </div>
          <div id="kit-buttons">
            <button onClick={()=> setCurrentSet(RolandR8)}>Roland<br/>R8</button>  
            <button onClick={()=> setCurrentSet(Japanese)}>Traditional<br/>Japanese</button>  
            <button onClick={()=> setCurrentSet(AtomHard)}>AtomHard<br/>ElectroFX</button>  
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
