(this.webpackJsonpLazy_Cat=this.webpackJsonpLazy_Cat||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(3),o=n.n(i),l=(n(15),n(4)),r=n(5),u=n(6),c=n(8),h=n(7),p=n(1),d=n(9);n(16),n(17),n(18);var v,m=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={english_text:"",vietnames_text:"",final_text:[],guessWord:"",checkAnswer:[],createAnswer:[],key:0,index:0,storeIndex:"",countGuess:0,bool:!1,english:"",vietnames:"",submit:!0,value:"default",voice:"US English Male",valueInput:"",inputArr:[],urlDownLoad:"",urlYouTuBe:"",captions:[],duration:"",audioElement:"",starts:[],durations:[],count:0,results:[]},n.handleGuessButtons=n.handleGuessButtons.bind(Object(p.a)(n)),n.handleGuessBox=n.handleGuessBox.bind(Object(p.a)(n)),n.handleOtherButton=n.handleOtherButton.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.showAnswers=n.showAnswers.bind(Object(p.a)(n)),n.handleSelectChange=n.handleSelectChange.bind(Object(p.a)(n)),n.playAudio=n.playAudio.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://code.responsivevoice.org/responsivevoice.js?key=FdquDWj4",e.async=!0,document.body.appendChild(e)}},{key:"componentDidUpdate",value:function(e,t){var n=this;if(t.urlYouTuBe!==this.state.urlYouTuBe&&0===this.state.captions.length&&this.state.urlYouTuBe.length>0){var a=this.state.urlYouTuBe.split("/"),s=[],i=[],o=[];new Promise((function(e){var t=new XMLHttpRequest,n="https://video.google.com/timedtext?&lang=en&v="+a[3].slice(0,11);t.open("GET",n,!0),t.onreadystatechange=function(){if(t.readyState===XMLHttpRequest.DONE){var e=t.status;(0===e||e>=200&&e<400)&&console.log("OK")}},t.onload=function(n){e(t.responseText)},t.onerror=function(){e(void 0),console.error("** An error occurred during the XMLHttpRequest")},t.send(null)})).then((function(e){var t=e.replace(new RegExp("&#39;","g"),"'").replace(new RegExp("&amp;#39;","g"),"'").replace(new RegExp("&amp;amp;","g"),"and").split("<transcript>")[1].split("</text>");t.pop();for(var a=0;a<t.length;a++){var l=t[a].split(">"),r=l[0].split(" "),u=r[1].split("=")[1],c=r[2].split("=")[1];s.push(l[1].replace(new RegExp('[&/\\#,+()$~%.":*?<>{}]',"g"),"")),i.push(+u.replace(new RegExp('"',"g"),"")),o.push(+c.replace(new RegExp('"',"g"),""))}var h=s.length,p=[];if(h%2===0)for(var d=0;d<h;d+=2)p.push(s[d]+" "+s[d+1]);else{for(var v=0;v<h-1;v+=2)p.push(s[v]+" "+s[v+1]);p.push(s[h-1])}for(var m=[],g=[],w=[],f=[],E=[],k=[],x=0;x<p.length;x++){var b=[];E.push(p[x].split(" ")),k.push(p[x].split(" ")),g.push(!0),w.push(0),f.push(0);for(var y=0;y<p[x].split(" ").length;y++)b.push("___");m.push(b)}n.setState({captions:s,starts:i,durations:o,results:p,final_text:k,createAnswer:m,inputArr:g,storeIndex:w,show:f,checkAnswer:E})}))}}},{key:"handleGuessBox",value:function(e){e!==this.state.key&&this.setState((function(t){return{key:e,index:0,countGuess:0}}))}},{key:"handleOtherButton",value:function(e){var t=e.target.value;"___"!==t&&window.responsiveVoice.speak(t,this.state.voice)}},{key:"handleGuessButtons",value:function(e){var t,n=this;try{t=e.target.value}catch(h){t=e}console.log(t);var a=this.state.key,s=this.state.storeIndex,i=s[a],o=this.state.countGuess;o<1&&window.responsiveVoice.speak(t,this.state.voice);var l=this.state.final_text.slice(0,this.state.final_text.length);if(this.state.checkAnswer[a][i].replace(",","").toLowerCase()===t.replace(",","").toLowerCase()){var r=this.state.createAnswer.slice(0,this.state.createAnswer.length);l[a].splice(l[a].indexOf(this.state.checkAnswer[a][i]),1),1!==o&&this.state.bool,r[a][i]=this.state.checkAnswer[a][i];var u=s.slice(0,s.length);u[a]=i+1,this.setState((function(e){return{createAnswer:r,index:i+1,guessWord:n.state.checkAnswer[a][i],final_text:l,storeIndex:u,countGuess:0,bool:!1,valueInput:""}})),i+1===this.state.checkAnswer[a].length&&this.setState((function(e){return{index:0}}))}else{if((o+=1)>=2){var c="The next word is ".concat(this.state.checkAnswer[a][i]);window.responsiveVoice.speak(c,this.state.voice),this.setState((function(e){return{valueInput:""}}))}this.setState((function(e){return{guessWord:n.state.checkAnswer[a][i],countGuess:o,bool:!0}}))}}},{key:"handleReadText",value:function(e){0===this.state.final_text[e].length&&window.responsiveVoice.speak(this.state.english_text[e],this.state.voice)}},{key:"playAudio",value:function(e){var t,n,a=this.state,s=a.starts,i=a.durations,o=a.results;e===o.length-1?(t=s[2*e],n=o.length%2!==0?i[2*e]+i[2*e+1]+1:i[2*e]+1,console.log("start",t,"dur",n)):(t=s[2*e],n=s[2*e+2]-s[2*e]-.15,console.log("start",t,"dur",n)),console.log("Text: ",o[e]);try{v.pause()}catch(l){console.log("Don't Worry")}(v=document.createElement("video")).setAttribute("src",this.state.urlDownLoad),v.addEventListener("timeupdate",(function(){v.currentTime-v._startTime>=v.value&&v.pause()})),v.value=n,v._startTime=t,v.currentTime=t,v.play()}},{key:"generateButtons",value:function(){var e=this;return this.state.results.map((function(t,n){return s.a.createElement("section",{className:"Container",key:n,value:n,onMouseEnter:function(){return e.handleGuessBox(n)}},e.state.createAnswer[n].map((function(t,n){return s.a.createElement("button",{className:"Button",key:n,value:t,onClick:e.handleOtherButton},t)})),e.state.final_text[n].length>0?s.a.createElement("div",null,s.a.createElement("input",{type:"text",name:"valueInput",placeholder:"Typing Answer",value:e.state.key===n?e.state.valueInput:"",onChange:function(t){return e.handleChange(t,n)},id:"typingAnswer"})):s.a.createElement("p",null),s.a.createElement("button",{className:"Button",key:n,onClick:function(){return e.playAudio(n)}},"Listening"),0===e.state.final_text[n].length?s.a.createElement("div",null,s.a.createElement("audio",{src:"https://media.vocaroo.com/mp3/9EciEJW3Cyt",autoPlay:!0,controls:!0,hidden:!0}),s.a.createElement("h1",{id:"meo"},e.state.results[n])):s.a.createElement("div",null,s.a.createElement("button",{className:"Button",style:{background:"#2c3e50",border:"none",color:"#e2e5e9"},key:n,onClick:function(){return e.showAnswers(n)}},"Show Answer")))}))}},{key:"handleChange",value:function(e,t){var n=this.state.index,a=this.state.checkAnswer,s=this.state.inputArr,i=s.slice(0,s.length),o=this.state.final_text;this.setState(Object(l.a)({},e.target.name,e.target.value),(function(){if(a.length>0){var e=o[t].map((function(e){return e.replace(",","").toLowerCase()}));if("meowmeow"===this.state.valueInput&&(window.responsiveVoice.speak("You say meowmeow",this.state.voice),0===this.state.final_text[t].length?this.setState({valueInput:"",index:n+1}):(this.handleGuessButtons(a[t][n]),this.setState({valueInput:""}))),this.state.valueInput.toLowerCase()===a[t][n].toLowerCase()&&0===this.state.final_text[t].length){if(window.responsiveVoice.speak(this.state.valueInput,this.state.voice),n===a[t].length-1)new Audio("https://media.vocaroo.com/mp3/9EciEJW3Cyt").play(),console.log("Yes"),i[t]=!1;this.setState({valueInput:"",index:n+1,inputArr:i})}else e.includes(this.state.valueInput.toLowerCase())&&this.handleGuessButtons(this.state.valueInput.toLowerCase())}}))}},{key:"handleSelectChange",value:function(e){var t=e.target.value,n=this.state.voice,a=this.state.final_text.slice(0,this.state.final_text.length),s=this.state.createAnswer.slice(0,this.state.createAnswer.length);switch(t){case"showanswer":for(var i=0;i<a.length;i++)a[i]=[],s[i]=this.state.checkAnswer[i]}this.setState({value:t,final_text:a,createAnswer:s,voice:n})}},{key:"showAnswers",value:function(e){var t=this.state.final_text.slice(0,this.state.final_text.length),n=this.state.createAnswer.slice(0,this.state.createAnswer.length);t[e]=[],n[e]=this.state.checkAnswer[e],this.setState((function(e){return{final_text:t,createAnswer:n}}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.urlYouTuBe.split("/"),n=this.state.urlDownLoad;t.length>0&&n.length>0&&this.setState({submit:!1})}},{key:"render",value:function(){var e=this.generateButtons();return this.state.guessWord===this.state.english_text[this.state.key]&&console.log("Your answer is correct"),console.clear(),s.a.createElement("div",{className:"App"},this.state.submit?s.a.createElement("form",{onSubmit:this.handleSubmit,id:"form"},s.a.createElement("label",null,s.a.createElement("input",{type:"text",name:"urlDownLoad",placeholder:"LinkDownLoad",value:this.state.urlDownLoad,onChange:this.handleChange})),s.a.createElement("label",null,s.a.createElement("input",{type:"text",name:"urlYouTuBe",placeholder:"LinkYouTuBe",value:this.state.urlYouTuBe,onChange:this.handleChange})),s.a.createElement("button",{id:"submit"},"Submit!")):s.a.createElement("div",null,s.a.createElement("section",{id:"meo"},s.a.createElement("form",{onSubmit:this.showAnswers},s.a.createElement("label",null,s.a.createElement("div",{className:"select"},s.a.createElement("select",{name:"slct",id:"slct",value:this.state.value,onChange:this.handleSelectChange},s.a.createElement("option",{value:"default"},"Choose an option"),s.a.createElement("option",{value:"showanswer"},"Show Answers"),s.a.createElement("option",{value:"usmale"},"US English Male Voice"),s.a.createElement("option",{value:"usfemale"},"US English FeMale Voice"),s.a.createElement("option",{value:"ukmale"},"UK English Male Voice"),s.a.createElement("option",{value:"ukfemale"},"UK English FeMale Voice")))))),s.a.createElement("p",{className:"Hangman-btns"},e)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.18dfb3a5.chunk.js.map