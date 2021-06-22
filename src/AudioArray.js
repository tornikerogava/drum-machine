import test from './Audio/Dasani Kit/dasani7.wav'
import R8HHCl from "./Audio/Roland R-8/R8-Cl-Hi-Hat.wav"
import R8Clap from "./Audio/Roland R-8/R8-Clap.wav"
import R8Crash from "./Audio/Roland R-8/R8-Crash.wav"
import R8HiTom from "./Audio/Roland R-8/R8-Hi-Tom.wav"
import R8Kick from "./Audio/Roland R-8/R8-Kick-2.wav"
import R8LowTom from "./Audio/Roland R-8/R8-Low-Tom.wav"
import R8HHOp from "./Audio/Roland R-8/R8-Open-Hi-Hat.wav"
import R8Ride from "./Audio/Roland R-8/R8-Ride.wav"
import R8Snare from "./Audio/Roland R-8/R8-Snare-5.wav"


 const audioClips = [
    {sound: test, label: "test", trigger: 13}
]

const RolandR8 = [
    {sound:R8Crash, label:"Crash", trigger:81, Button:"Q"},
    {sound:R8Ride, label:"Ride", trigger:87, Button:"W"},
    {sound:R8HHOp, label:"Open HH", trigger:69, Button:"E"},
    {sound:R8HiTom, label:"Hi-Tom", trigger:65, Button:"A"},
    {sound:R8LowTom, label:"Low-Tom", trigger:83, Button:"S"},
    {sound:R8HHCl, label:"Closed HH", trigger:68, Button:"D"},
    {sound:R8Snare, label:"Snare", trigger:90, Button:"Z"},
    {sound:R8Kick, label:"Kick", trigger:88, Button:"X"},
    {sound:R8Clap, label:"Clap", trigger:67, Button:"C"}
]
// const Japanese = [
//     {sound: ,label:"", trigger: }
//     {sound: ,label:"", trigger: }
//     {sound: ,label:"", trigger: }
//     {sound: ,label:"", trigger: }
//     {sound: ,label:"", trigger: }
//     {sound: ,label:"", trigger: }
//     {sound: ,label:"", trigger: }
//     {sound: ,label:"", trigger: }
//     {sound: ,label:"", trigger: }
// ]
// const AtomHard = [
//     {sound: ,label:"", trigger: }
//     {sound: ,label:"", trigger: }
//     {sound: ,label:"", trigger: }
//     {sound: ,label:"", trigger: }
//     {sound: ,label:"", trigger: }
//     {sound: ,label:"", trigger: }
//     {sound: ,label:"", trigger: }
//     {sound: ,label:"", trigger: }
//     {sound: ,label:"", trigger: }
// ]

export {
    audioClips,
    RolandR8
  }