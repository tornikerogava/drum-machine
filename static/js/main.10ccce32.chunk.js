(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{11:function(t,e,a){},13:function(t,e,a){"use strict";a.r(e);var i=a(1),n=a.n(i),o=a(5),c=a.n(o),d=a(6),r=a(3),s=(a(11),a.p+"static/media/R8-Cl-Hi-Hat.38a925e4.wav"),l=a.p+"static/media/R8-Clap.e8520f81.wav",b=a.p+"static/media/R8-Crash.cfa3c844.wav",u=a.p+"static/media/R8-Hi-Tom.6008caf5.wav",g=a.p+"static/media/R8-Kick-2.15015122.wav",m=a.p+"static/media/R8-Low-Tom.791f6ecd.wav",p=a.p+"static/media/R8-Open-Hi-Hat.3bc187bb.wav",j=a.p+"static/media/R8-Ride.38f23c79.wav",v=a.p+"static/media/R8-Snare-5.b975082a.wav",w=a.p+"static/media/big_taiko.7d3bb6ca.wav",k=a.p+"static/media/med_taiko.082efa99.wav",O=a.p+"static/media/mokusho-A1.32c9074b.wav",f=a.p+"static/media/nipon_cymbal_2.9da50229.wav",h=a.p+"static/media/ohkawa_mute.bc64307a.wav",x=a.p+"static/media/ohkawa_open.3433aa8f.wav",C=a.p+"static/media/okedo-A2.b6daa4bf.wav",y=a.p+"static/media/okedo-B1.42021fe8.wav",R=a.p+"static/media/taiko_3.79632388.wav",H=a.p+"static/media/bandpass-blart.a42d4412.wav",E=a.p+"static/media/cracklykick2.f43267f7.wav",S=a.p+"static/media/cracklykick3.db05c973.wav",T=a.p+"static/media/electro-pling1.c20d1eb1.wav",B=a.p+"static/media/electro-pling2.18601dc2.wav",A=a.p+"static/media/glissup.142814df.wav",_=a.p+"static/media/laser-powered-spitwad.4a9753bb.wav",L=a.p+"static/media/quickkickzap.ab5340f8.wav",M=a.p+"static/media/ufokick.0b66ab07.wav",X=[{sound:b,label:"Crash",trigger:81,button:"Q"},{sound:j,label:"Ride",trigger:87,button:"W"},{sound:p,label:"Open HH",trigger:69,button:"E"},{sound:u,label:"Hi Tom",trigger:65,button:"A"},{sound:m,label:"Low Tom",trigger:83,button:"S"},{sound:s,label:"Closed HH",trigger:68,button:"D"},{sound:v,label:"Snare",trigger:90,button:"Z"},{sound:g,label:"Kick",trigger:88,button:"X"},{sound:l,label:"Clap",trigger:67,button:"C"}],Z=[{sound:f,label:"Cymbal",trigger:81,button:"Q"},{sound:O,label:"Mokusho",trigger:87,button:"W"},{sound:h,label:"Ohkawa M",trigger:69,button:"E"},{sound:C,label:"Okedo A2",trigger:65,button:"A"},{sound:y,label:"Okedo B1",trigger:83,button:"S"},{sound:x,label:"Ohkawa O",trigger:68,button:"D"},{sound:w,label:"Big Taiko",trigger:90,button:"Z"},{sound:k,label:"Med Taiko",trigger:88,button:"X"},{sound:R,label:"Small Taiko",trigger:67,button:"C"}],D=[{sound:T,label:"Pling",trigger:81,button:"Q"},{sound:B,label:"Plang",trigger:87,button:"W"},{sound:H,label:"Blart",trigger:69,button:"E"},{sound:A,label:"Glissup",trigger:65,button:"A"},{sound:_,label:"Laser",trigger:83,button:"S"},{sound:M,label:"UFO",trigger:68,button:"D"},{sound:E,label:"Crackle",trigger:90,button:"Z"},{sound:S,label:"Bass",trigger:88,button:"X"},{sound:L,label:"Zap",trigger:67,button:"C"}],I=a.p+"static/media/TR-04.d9c4f1b5.svg",J=a(0);var N=function(){var t=Object(i.useState)(.5),e=Object(r.a)(t,2),a=e[0],n=e[1],o=Object(i.useState)(X),c=Object(r.a)(o,2),s=c[0],l=c[1],b=Object(i.useState)(""),u=Object(r.a)(b,2),g=u[0],m=u[1],p=function(t){var e,a=Object(d.a)(s);try{for(a.s();!(e=a.n()).done;){var i=e.value;t.keyCode===i.trigger&&document.getElementById(i.label).click()}}catch(n){a.e(n)}finally{a.f()}};return Object(i.useEffect)((function(){return window.addEventListener("keydown",p),function(){window.removeEventListener("keydown",p)}})),Object(J.jsxs)("div",{id:"drum-machine",children:[Object(J.jsxs)("div",{id:"interface",children:[Object(J.jsx)("div",{id:"pad-grid",children:s.map((function(t,e){return Object(J.jsxs)("div",{className:"pad-container",children:[Object(J.jsxs)("button",{className:"drum-pad",id:t.label,onClick:function(){return function(t){var e=document.getElementById(t.button);e.currentTime=0,e.volume=a,e.play(),m(t.label)}(t)},children:[Object(J.jsx)("audio",{className:"clip",id:t.button,src:t.sound}),t.button]},e),t.label]})}))}),Object(J.jsxs)("div",{id:"settings",children:[Object(J.jsx)("input",{id:"volume-slider",type:"range",min:"0",max:"1",value:a,step:"0.01",onChange:function(t){n(t.target.value)}}),Object(J.jsx)("div",{id:"display",children:Object(J.jsx)("p",{children:g})}),Object(J.jsxs)("div",{id:"kit-buttons",children:[Object(J.jsxs)("button",{onClick:function(){return l(X)},children:["Roland",Object(J.jsx)("br",{}),"R8"]}),Object(J.jsxs)("button",{onClick:function(){return l(Z)},children:["Traditional",Object(J.jsx)("br",{}),"Japanese"]}),Object(J.jsxs)("button",{onClick:function(){return l(D)},children:["AtomHard",Object(J.jsx)("br",{}),"ElectroFX"]})]})]})]}),Object(J.jsx)("a",{href:"https://github.com/tornikerogava",children:Object(J.jsx)("img",{id:"logo",alt:"logo",src:I})})]})};c.a.render(Object(J.jsx)(n.a.StrictMode,{children:Object(J.jsx)(N,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.10ccce32.chunk.js.map