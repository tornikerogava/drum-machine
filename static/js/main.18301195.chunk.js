(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{11:function(t,e,a){},13:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),r=a(5),c=a.n(r),o=a(6),d=a(4),u=(a(11),a.p+"static/media/R8-Cl-Hi-Hat.38a925e4.wav"),s=a.p+"static/media/R8-Clap.e8520f81.wav",b=a.p+"static/media/R8-Crash.cfa3c844.wav",l=a.p+"static/media/R8-Hi-Tom.6008caf5.wav",m=a.p+"static/media/R8-Kick-2.15015122.wav",g=a.p+"static/media/R8-Low-Tom.791f6ecd.wav",p=a.p+"static/media/R8-Open-Hi-Hat.3bc187bb.wav",v=[{sound:b,label:"Crash",trigger:81,button:"Q"},{sound:a.p+"static/media/R8-Ride.38f23c79.wav",label:"Ride",trigger:87,button:"W"},{sound:p,label:"Open HH",trigger:69,button:"E"},{sound:l,label:"Hi-Tom",trigger:65,button:"A"},{sound:g,label:"Low-Tom",trigger:83,button:"S"},{sound:u,label:"Closed HH",trigger:68,button:"D"},{sound:a.p+"static/media/R8-Snare-5.b975082a.wav",label:"Snare",trigger:90,button:"Z"},{sound:m,label:"Kick",trigger:88,button:"X"},{sound:s,label:"Clap",trigger:67,button:"C"}],f=a(0);var w=function(){var t=Object(n.useState)(.5),e=Object(d.a)(t,2),a=(e[0],e[1],Object(n.useState)(v)),i=Object(d.a)(a,2),r=i[0],c=(i[1],function(t){var e,a=Object(o.a)(r);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.keyCode===n.trigger&&u(n)}}catch(i){a.e(i)}finally{a.f()}});Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}));var u=function(t){var e=document.getElementById(t.button);e.currentTime=0,e.play()};return Object(f.jsx)("div",{style:{height:"100vh"},id:"drum-machine",tabIndex:"0",children:Object(f.jsx)("div",{id:"display",children:r.map((function(t,e){return Object(f.jsxs)("button",{className:"drum-pad",id:t.label,onClick:function(){return u(t)},children:[t.button,Object(f.jsx)("audio",{className:"clip",id:t.button,src:t.sound})]},e)}))})})};c.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.18301195.chunk.js.map