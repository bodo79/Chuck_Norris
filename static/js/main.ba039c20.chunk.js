(this.webpackJsonpChuck_Norris=this.webpackJsonpChuck_Norris||[]).push([[0],{20:function(e,t,o){e.exports=o(34)},30:function(e,t,o){},31:function(e,t,o){},34:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r),a=o(4),s=o.n(a),c=o(5),i=o(3),u=o(13),l=o(14),E=(o(30),o(15)),d=o(16),h=o(19),b=o(17),g=function(e){var t=e.joke;return n.a.createElement("div",{className:"tc bg-light-green dib br1 ma2 grow bw2 shadow-5"},n.a.createElement("img",{alt:"",src:t.icon_url}),n.a.createElement("h4",null,t.value))},p=function(e){return n.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"}},e.children)},k=(o(31),o(18)),j=(o(32),function(e){Object(h.a)(o,e);var t=Object(b.a)(o);function o(){return Object(E.a)(this,o),t.apply(this,arguments)}return Object(d.a)(o,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robotsIsPendig,o=e.onRequestJoke,r=e.jokeArr,a=e.buttonText;return t?n.a.createElement("h1",{className:"tc"}," LOADING... "):n.a.createElement("div",{className:"tc"},n.a.createElement("h1",{className:"f1"},"Chuck Norris Roulette"),n.a.createElement(k.a,{variant:"outline-danger",onClick:o},a)," ",n.a.createElement(p,null,n.a.createElement(g,{joke:r})))}}]),o}(r.Component)),f=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,robotsIsPendig:e.requestRobots.robotsIsPendig,robotsArr:e.requestRobots.robotsArr,robotsError:e.requestRobots.robotsError,jokeIsPendig:e.requestJoke.jokeIsPendig,jokeArr:e.requestJoke.jokeArr,jokeError:e.requestJoke.jokeError,buttonText:e.requestJoke.buttonText}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))},onRequestJoke:function(){return e((function(e){e({type:"REQUEST_JOKE_PENDING"}),fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_JOKE_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_JOKE_FAILED",payload:t})}))}))}}}))(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O={searchField:""},R={robotsIsPendig:!1,robotsArr:[],robotsError:""},S={jokeIsPendig:!1,jokeArr:[],jokeError:"",buttonText:"Do NOT press (if you are not Chuck)"},_=(o(33),Object(u.createLogger)()),m=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{robotsIsPendig:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robotsArr:t.payload,robotsIsPendig:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{robotsError:t.payload,robotsIsPendig:!1});default:return e}},requestJoke:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_JOKE_PENDING":return Object.assign({},e,{jokeIsPendig:!0,buttonText:"Loading..."});case"REQUEST_JOKE_SUCCESS":return Object.assign({},e,{jokeArr:t.payload,jokeIsPendig:!1,buttonText:"Give Me another Chuck joke"});case"REQUEST_JOKE_FAILED":return Object.assign({},e,{jokeError:t.payload,jokeIsPendig:!1});default:return e}}}),v=Object(i.d)(m,Object(i.a)(l.a,_));s.a.render(n.a.createElement(c.a,{store:v},n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.ba039c20.chunk.js.map