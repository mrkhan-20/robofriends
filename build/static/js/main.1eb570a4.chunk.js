(this.webpackJsonpmy=this.webpackJsonpmy||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),a=n.n(s),i=n(4),o=n(5),h=n(7),l=n(6),b=n(0),d=function(e){var t=e.name,n=e.email,c=e.id;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{src:"https://robohash.org/".concat(c,"?200x100"),alt:"robot",height:"250px",width:"250px"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})]})},u=function(e){var t=e.robots;return Object(b.jsxs)("div",{children:[t.map((function(e,n){return Object(b.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)})),"   "]})},j=function(e){e.searchfield;var t=e.searchchange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green  bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},f=function(e){return Object(b.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"600px"},children:e.children})},g=(n(13),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchchange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(b.jsx)(j,{searchchange:this.onSearchchange}),Object(b.jsx)(f,{children:Object(b.jsx)(u,{robots:c})})]})}}]),n}(c.Component)),p=(n(14),n(15),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))});a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.1eb570a4.chunk.js.map