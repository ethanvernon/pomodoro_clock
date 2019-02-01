(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},16:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(8),c=a.n(i),l=(a(16),a(2)),r=a(3),o=a(5),h=a(4),m=a(6),u=(a(18),a(20),a(1)),d=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container",id:"title"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("h1",null,"Pomodoro Clock"))))}}]),t}(s.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col no-padding"},n.a.createElement("h3",{id:"break-label",className:"my-label"},"Break Length")),n.a.createElement("div",{className:"col no-padding"},n.a.createElement("h3",{id:"session-label",className:"my-label"},"Session Length"))))}}]),t}(s.Component),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e,t){"break"===e?this.props.changeBreak(t):"session"===e&&this.props.changeSession(t)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container",id:"lengths_and_buttons"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col no-padding"},n.a.createElement("span",{className:"fa-stack fa-2x",id:"break-decrement",onClick:function(){return e.handleClick("break","dec")}},n.a.createElement("i",{className:"fa fa-circle fa-stack-2x"}),n.a.createElement("i",{className:"fa fa-arrow-down fa-stack-1x"}))),n.a.createElement("div",{className:"col no-padding"},n.a.createElement("h3",{id:"break-length",className:"length"},this.props.breakLength)),n.a.createElement("div",{className:"col no-padding"},n.a.createElement("span",{className:"fa-stack fa-2x",id:"break-increment",onClick:function(){return e.handleClick("break","inc")}},n.a.createElement("i",{className:"fa fa-circle fa-stack-2x"}),n.a.createElement("i",{className:"fa fa-arrow-up fa-stack-1x"}))),n.a.createElement("div",{className:"col no-padding"},n.a.createElement("span",{className:"fa-stack fa-2x",id:"session-decrement",onClick:function(){return e.handleClick("session","dec")}},n.a.createElement("i",{className:"fa fa-circle fa-stack-2x"}),n.a.createElement("i",{className:"fa fa-arrow-down fa-stack-1x"}))),n.a.createElement("div",{className:"col no-padding"},n.a.createElement("h3",{id:"session-length",className:"length"},this.props.sessionLength)),n.a.createElement("div",{className:"col no-padding"},n.a.createElement("span",{className:"fa-stack fa-2x",id:"session-increment",onClick:function(){return e.handleClick("session","inc")}},n.a.createElement("i",{className:"fa fa-circle fa-stack-2x"}),n.a.createElement("i",{className:"fa fa-arrow-up fa-stack-1x"})))))}}]),t}(s.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container no-padding",id:"box"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col my-box"},n.a.createElement("h3",{id:"timer-label"},this.props.timerLabel))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col my-box",id:"time-left"},this.props.timeLeft)))}}]),t}(s.Component),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.props.handleClick()}},{key:"render",value:function(){return n.a.createElement("div",{className:"container",id:"bottom"},n.a.createElement("div",{className:"row no-padding"},n.a.createElement("div",{className:"col no-padding"},n.a.createElement("span",{className:"fa-stack fa-2x",id:"start-stop",onClick:this.handleClick},n.a.createElement("i",{className:"fas fa-circle fa-stack-2x"}),n.a.createElement("i",{className:"fa "+this.props.playPauseButton+" fa-stack-1x",id:"button-switch"}))),n.a.createElement("div",{className:"col no-padding"},n.a.createElement("span",{className:"fa-stack fa-2x",id:"reset"},n.a.createElement("i",{className:"fa fa-circle fa-stack-2x"}),n.a.createElement("i",{className:"fa fa-redo fa-stack-1x"})))))}}]),t}(s.Component),g=a(9),E=a.n(g),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={breakLength:5,sessionLength:25,minutes:25,seconds:0,playPause:0,counter:0,sessionBreak:0,timeLeft:"25:00",playPauseButton:"fa-play",timerLabel:"Session",firstClick:0},a.changeBreak=a.changeBreak.bind(Object(u.a)(Object(u.a)(a))),a.changeSession=a.changeSession.bind(Object(u.a)(Object(u.a)(a))),a.lengthChecker=a.lengthChecker.bind(Object(u.a)(Object(u.a)(a))),a.playPauseClicked=a.playPauseClicked.bind(Object(u.a)(Object(u.a)(a))),a.timer=a.timer.bind(Object(u.a)(Object(u.a)(a))),a.audio=new Audio(E.a),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"lengthChecker",value:function(e){return(e=e.toString()).length<2?e="0"+e:e}},{key:"changeBreak",value:function(e){var t=this.state.breakLength,a=this.state.seconds,s=this.state.minutes,n=this.state.timeLeft;0==this.state.firstClick&&(console.log(this.audio),this.audio.play(),this.audio.muted=!0,this.audio.pause(),this.setState({firstClick:1})),"dec"===e&&0==this.state.playPause&&this.state.breakLength-1>0&&(t-=1,1==this.state.sessionBreak&&(a=0,n=(s=this.lengthChecker(t))+":0"+a)),"inc"===e&&0==this.state.playPause&&this.state.breakLength+1<=60&&(t=Number(t)+1,1==this.state.sessionBreak&&(a=0,n=(s=this.lengthChecker(t))+":0"+a)),this.setState({breakLength:t,seconds:a,minutes:s,timeLeft:n})}},{key:"changeSession",value:function(e){var t=this.state.sessionLength,a=this.state.seconds,s=this.state.minutes,n=this.state.timeLeft;"dec"===e&&0==this.state.playPause&&this.state.sessionLength-1>0&&(t-=1,0==this.state.sessionBreak&&(a=0,n=(s=this.lengthChecker(t))+":0"+a)),"inc"===e&&0==this.state.playPause&&this.state.sessionLength+1<=60&&(t=Number(t)+1,0==this.state.sessionBreak&&(a=0,n=(s=this.lengthChecker(t))+":0"+a)),this.setState({sessionLength:t,seconds:a,minutes:s,timeLeft:n})}},{key:"playPauseClicked",value:function(){0==this.state.playPause?this.setState({playPause:1,playPauseButton:"fa-pause",counter:setInterval(this.timer,1e3)}):(this.setState({playPause:0,playPauseButton:"fa-play"}),clearTimeout(this.state.counter))}},{key:"timer",value:function(){var e=this.state.minutes,t=this.state.seconds;0==Number(t)&&Number(e)>0?(e=this.lengthChecker(Number(e)-1),t=59,this.setState({seconds:t,minutes:e,timeLeft:e+":"+t})):0==Number(t)&&0==Number(e)?(this.audio.muted=!1,this.audio.play(),0==this.state.sessionBreak?(e=this.lengthChecker(Number(this.state.breakLength)),this.setState({sessionBreak:1,timerLabel:"Break",minutes:e,timeLeft:e+":"+t})):(e=this.lengthChecker(Number(this.state.sessionLength)),this.setState({sessionBreak:0,timerLabel:"Session",minutes:e,timeLeft:e+":"+t}))):(t=this.lengthChecker(Number(t)-1),this.setState({seconds:t,timeLeft:e+":"+t}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(d,null),n.a.createElement(k,null),n.a.createElement(f,{breakLength:this.state.breakLength,sessionLength:this.state.sessionLength,changeBreak:this.changeBreak,changeSession:this.changeSession}),n.a.createElement(b,{timeLeft:this.state.timeLeft,timerLabel:this.state.timerLabel}),n.a.createElement(p,{handleClick:this.playPauseClicked,playPauseButton:this.state.playPauseButton}))}}]),t}(s.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(N,null))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a.p+"static/media/bell.e2e34916.mp3"}},[[10,2,1]]]);
//# sourceMappingURL=main.ae9c77ac.chunk.js.map