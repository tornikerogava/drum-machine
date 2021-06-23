import R8HHCl from "./Audio/Roland R-8/R8-Cl-Hi-Hat.wav"
import R8Clap from "./Audio/Roland R-8/R8-Clap.wav"
import R8Crash from "./Audio/Roland R-8/R8-Crash.wav"
import R8HiTom from "./Audio/Roland R-8/R8-Hi-Tom.wav"
import R8Kick from "./Audio/Roland R-8/R8-Kick-2.wav"
import R8LowTom from "./Audio/Roland R-8/R8-Low-Tom.wav"
import R8HHOp from "./Audio/Roland R-8/R8-Open-Hi-Hat.wav"
import R8Ride from "./Audio/Roland R-8/R8-Ride.wav"
import R8Snare from "./Audio/Roland R-8/R8-Snare-5.wav"

import BigTaiko from "./Audio/Japanese Drums/big_taiko.wav"
import MedTaiko from "./Audio/Japanese Drums/med_taiko.wav"
import Mokusho from "./Audio/Japanese Drums/mokusho-A1.wav"
import Cymbal from "./Audio/Japanese Drums/nipon_cymbal_2.wav"
import OhkawaMute from "./Audio/Japanese Drums/ohkawa_mute.wav"
import OhkawaOpen from "./Audio/Japanese Drums/ohkawa_open.wav"
import OkedoA2 from "./Audio/Japanese Drums/okedo-A2.wav"
import OkedoB1 from "./Audio/Japanese Drums/okedo-B1.wav"
import SmallTaiko from "./Audio/Japanese Drums/taiko_3.wav"

import Blart from "./Audio/Atomhard Electro FX/bandpass-blart.wav"
import Crackle from "./Audio/Atomhard Electro FX/cracklykick2.wav"
import Bass from "./Audio/Atomhard Electro FX/cracklykick3.wav"
import Pling from "./Audio/Atomhard Electro FX/electro-pling1.wav"
import Plang from "./Audio/Atomhard Electro FX/electro-pling2.wav"
import Glissup from "./Audio/Atomhard Electro FX/glissup.wav"
import Laser from "./Audio/Atomhard Electro FX/laser-powered-spitwad.wav"
import Zap from "./Audio/Atomhard Electro FX/quickkickzap.wav"
import UFO from "./Audio/Atomhard Electro FX/ufokick.wav"


const RolandR8 = [
    {sound:R8Crash, label:"Crash", trigger:81, button:"Q"},
    {sound:R8Ride, label:"Ride", trigger:87, button:"W"},
    {sound:R8HHOp, label:"Open HH", trigger:69, button:"E"},
    {sound:R8HiTom, label:"Hi Tom", trigger:65, button:"A"},
    {sound:R8LowTom, label:"Low Tom", trigger:83, button:"S"},
    {sound:R8HHCl, label:"Closed HH", trigger:68, button:"D"},
    {sound:R8Snare, label:"Snare", trigger:90, button:"Z"},
    {sound:R8Kick, label:"Kick", trigger:88, button:"X"},
    {sound:R8Clap, label:"Clap", trigger:67, button:"C"}
]
const Japanese = [
    {sound:Cymbal, label:"Cymbal", trigger:81, button:"Q"},
    {sound:Mokusho, label:"Mokusho", trigger:87, button:"W"},
    {sound:OhkawaMute, label:"Ohkawa Mute", trigger:69, button:"E"},
    {sound:OkedoA2, label:"Okedo A2", trigger:65, button:"A"},
    {sound:OkedoB1, label:"Okedo B1", trigger:83, button:"S"},
    {sound:OhkawaOpen, label:"Ohkawa Open", trigger:68, button:"D"},
    {sound:BigTaiko, label:"Big Taiko", trigger:90, button:"Z"},
    {sound:MedTaiko, label:"Med Taiko", trigger:88, button:"X"},
    {sound:SmallTaiko, label:"Small Taiko", trigger:67, button:"C"}
]
const AtomHard = [
    {sound:Pling, label:"Pling", trigger:81, button:"Q"},
    {sound:Plang, label:"Plang", trigger:87, button:"W"},
    {sound:Blart, label:"Blart", trigger:69, button:"E"},
    {sound:Glissup, label:"Glissup", trigger:65, button:"A"},
    {sound:Laser, label:"Laser", trigger:83, button:"S"},
    {sound:UFO, label:"UFO", trigger:68, button:"D"},
    {sound:Crackle, label:"Crackle", trigger:90, button:"Z"},
    {sound:Bass, label:"Bass", trigger:88, button:"X"},
    {sound:Zap, label:"Zap", trigger:67, button:"C"}
]

export {
    RolandR8,
    Japanese,
    AtomHard
  }