(this.webpackJsonpLazy_Cat=this.webpackJsonpLazy_Cat||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(3),l=n.n(i),o=(n(15),n(4)),r=n(5),c=n(6),h=n(8),u=n(7),v=n(1),m=n(9);var d=function(e){var t=[],n=!0,a=!1,s=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var o=i.value;t.push(o)}}catch(v){a=!0,s=v}finally{try{n||null==l.return||l.return()}finally{if(a)throw s}}for(var r=[],c=0,h=t;c<h.length;c++){var u=h[c];r.push(u.trim().split(" "))}return r.length>0&&r.pop(),r};var p=function(e){for(var t,n,a=e.length;a>0;)n=Math.floor(Math.random()*a),t=e[--a],e[a]=e[n],e[n]=t;return e},g=(n(16),n(17),n(18),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={english_text:"",vietnames_text:"",final_text:[],guessWord:"",checkAnswer:"",createAnswer:"",key:0,index:0,storeIndex:"",countGuess:0,bool:!1,english:"",vietnames:"",submit:!0,value:"default",voice:"US English Male",valueInput:"",inputArr:[]},n.handleGuessButtons=n.handleGuessButtons.bind(Object(v.a)(n)),n.handleGuessBox=n.handleGuessBox.bind(Object(v.a)(n)),n.handleOtherButton=n.handleOtherButton.bind(Object(v.a)(n)),n.handleChange=n.handleChange.bind(Object(v.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n.showAnswers=n.showAnswers.bind(Object(v.a)(n)),n.handleSelectChange=n.handleSelectChange.bind(Object(v.a)(n)),n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://code.responsivevoice.org/responsivevoice.js?key=FdquDWj4",e.async=!0,document.body.appendChild(e)}},{key:"handleGuessBox",value:function(e){e!==this.state.key&&this.setState((function(t){return{key:e,index:0,countGuess:0}}))}},{key:"handleOtherButton",value:function(e){var t=e.target.value;"___"!==t&&window.responsiveVoice.speak(t,this.state.voice)}},{key:"handleGuessButtons",value:function(e){var t=e.target.value,n=this.state.key,a=this.state.storeIndex,s=a[n],i=this.state.countGuess;i<1&&window.responsiveVoice.speak(t,this.state.voice);var l=this.state.final_text.slice(0,this.state.final_text.length);if(this.state.checkAnswer[n][s]===t){var o=this.state.createAnswer.slice(0,this.state.createAnswer.length);1===i&&window.responsiveVoice.speak(t,this.state.voice),l[n].splice(l[n].indexOf(t),1),1!==i&&this.state.bool&&window.responsiveVoice.speak(t,this.state.voice),o[n][s]=t;var r=a.slice(0,a.length);r[n]=s+1,this.setState((function(e){return{createAnswer:o,index:s+1,guessWord:t,final_text:l,storeIndex:r,countGuess:0,bool:!1}}))}else{if((i+=1)>=2){var c="The next word is ".concat(this.state.checkAnswer[n][s]);window.responsiveVoice.speak(c,this.state.voice)}this.setState((function(e){return{guessWord:t,countGuess:i,bool:!0}}))}}},{key:"handleReadText",value:function(e){0===this.state.final_text[e].length&&window.responsiveVoice.speak(this.state.english_text[e],this.state.voice)}},{key:"generateButtons",value:function(){var e=this;return this.state.final_text.map((function(t,n){return s.a.createElement("section",{className:"Container",key:n,value:n,onMouseEnter:function(){return e.handleGuessBox(n)}},e.state.createAnswer[n].map((function(t,n){return s.a.createElement("button",{className:"Button",key:n,value:t,onClick:e.handleOtherButton},t)})),s.a.createElement("h1",null,e.state.vietnames_text[n]),t.map((function(t,n){return s.a.createElement("button",{className:"Button",key:n,value:t,onClick:e.handleGuessButtons},t)})),e.state.inputArr[n]&&0===e.state.final_text[n].length?s.a.createElement("input",{type:"text",name:"valueInput",placeholder:"Typing Answer",value:e.state.valueInput,onChange:function(t){return e.handleChange(t,n)},id:"typingAnswer"}):s.a.createElement("p",null),0===e.state.final_text[n].length?s.a.createElement("div",null,s.a.createElement("audio",{src:"https://media.vocaroo.com/mp3/9EciEJW3Cyt",autoPlay:!0,controls:!0,hidden:!0}),s.a.createElement("h1",{id:"meo"},e.state.english_text[n]),s.a.createElement("button",{className:"Button",key:n,onClick:function(){return e.handleReadText(n)}},"Read Text")):s.a.createElement("div",{id:"showanswer"},s.a.createElement("button",{className:"Button",style:{background:"#2c3e50",border:"none",color:"#e2e5e9"},key:n,onClick:function(){return e.showAnswers(n)}},"Show Answer")))}))}},{key:"handleChange",value:function(e,t){var n=this.state.index,a=this.state.checkAnswer,s=this.state.inputArr,i=s.slice(0,s.length);this.setState(Object(o.a)({},e.target.name,e.target.value),(function(){if(a.length>0&&("meowmeow"===this.state.valueInput&&(window.responsiveVoice.speak("You said meowmeow",this.state.voice),this.setState({valueInput:"",index:n+1})),this.state.valueInput===a[t][n].toLowerCase())){if(window.responsiveVoice.speak(this.state.valueInput,this.state.voice),n===a[t].length-1)new Audio("https://media.vocaroo.com/mp3/9EciEJW3Cyt").play(),console.log("Yes"),i[t]=!1;this.setState({valueInput:"",index:n+1,inputArr:i})}}))}},{key:"handleSelectChange",value:function(e){var t=e.target.value,n=this.state.voice,a=this.state.final_text.slice(0,this.state.final_text.length),s=this.state.createAnswer.slice(0,this.state.createAnswer.length);switch(t){case"showanswer":for(var i=0;i<a.length;i++)a[i]=[],s[i]=this.state.checkAnswer[i];break;case"usmale":n="US English Male";break;case"usfemale":n="US English Female";break;case"ukmale":n="UK English Male";break;case"ukfemale":n="UK English Female"}this.setState({value:t,final_text:a,createAnswer:s,voice:n})}},{key:"showAnswers",value:function(e){var t=this.state.final_text.slice(0,this.state.final_text.length),n=this.state.createAnswer.slice(0,this.state.createAnswer.length);t[e]=[],n[e]=this.state.checkAnswer[e],this.setState((function(e){return{final_text:t,createAnswer:n}}))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.english,n=this.state.vietnames,a=this.state.english.length,s=this.state.vietnames.length;if(a>0&&s>0){"."!==this.state.english[a-1]&&(t+=".",console.log("ok")),"."!==this.state.vietnames[s-1]&&(n+=".",console.log("oker"));for(var i=d(t.split(".")),l=d(t.split(".")),o=[],r=[],c=[],h=[],u=0;u<l.length;u++){var v=[];h.push(!0),r.push(0),c.push(0);for(var m=0;m<l[u].length;m++)v.push("___");o.push(v)}i.forEach((function(e){return p(e)}));var g=t.split("."),f=n.split(".");console.log(g.length,f.length),this.setState({english_text:g,vietnames_text:f,final_text:i,checkAnswer:l,createAnswer:o,storeIndex:r,submit:!1,inputArr:h})}}},{key:"render",value:function(){var e=this.generateButtons();return this.state.guessWord===this.state.english_text[this.state.key]&&console.log("Your answer is correct"),s.a.createElement("div",{className:"App"},this.state.submit?s.a.createElement("form",{onSubmit:this.handleSubmit,id:"form"},s.a.createElement("label",null,s.a.createElement("input",{type:"text",name:"english",placeholder:"English",value:this.state.english,onChange:this.handleChange})),s.a.createElement("label",null,s.a.createElement("input",{type:"text",name:"vietnames",placeholder:"Vietnamese",value:this.state.vietnames,onChange:this.handleChange})),s.a.createElement("button",{id:"submit"},"Submit!")):s.a.createElement("div",null,s.a.createElement("section",{id:"meo"},s.a.createElement("form",{onSubmit:this.showAnswers},s.a.createElement("label",null,s.a.createElement("div",{className:"select"},s.a.createElement("select",{name:"slct",id:"slct",value:this.state.value,onChange:this.handleSelectChange},s.a.createElement("option",{value:"default"},"Choose an option"),s.a.createElement("option",{value:"showanswer"},"Show Answers"),s.a.createElement("option",{value:"usmale"},"US English Male Voice"),s.a.createElement("option",{value:"usfemale"},"US English FeMale Voice"),s.a.createElement("option",{value:"ukmale"},"UK English Male Voice"),s.a.createElement("option",{value:"ukfemale"},"UK English FeMale Voice")))))),s.a.createElement("p",{className:"Hangman-btns"},e)))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.de402c44.chunk.js.map