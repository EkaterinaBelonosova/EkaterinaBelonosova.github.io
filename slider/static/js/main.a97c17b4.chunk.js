(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,a){e.exports=a(24)},20:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a.n(o),c=(a(20),a(8)),i=a(9),s=a(13),u=a(11),m=a(14),h=a(29),d=a(30),f=a(26),g=a(27),p=a(28),v=a(5),E=a.n(v),y=(a(21),a(22),a(23),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).myRef=void 0,a.getData=function(){fetch("https://app.fakejson.com/q/W5NF5n0d?token=NZNDuadWK4Fe9NO0_c28Mg").then((function(e){return e.json()})).then((function(e){a.setState({fetching:!0,dataSlide:e})}),(function(e){a.setState({fetching:!0,error:e})}))},a.toCardList=function(){var e=[];return a.state.dataSlide.forEach((function(t,n){e.push(a.toTemplateCard(t,n))})),e},a.toTemplateCard=function(e,t){var n=a.state.scroll;return console.log(n),r.a.createElement(h.a,{key:t,style:{width:"90rem"}},r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,e.title),r.a.createElement(h.a.Text,{style:{textAlign:"center"}},r.a.createElement(h.a.Img,{variant:"top",src:e.img,style:{width:"100px"}})),r.a.createElement(h.a.Text,{ref:a.myRef,className:n?"text text-open":"text"},e.description),r.a.createElement("p",{className:n?"text-open toggle":"toggle"}),r.a.createElement(d.a,{variant:"outline-secondary",onClick:function(){return a.setState({scroll:!n})}},n?"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c":"\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c")))},a.state={value:0,fetching:!1,slides:[],dataSlide:[],error:null,scroll:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this;return r.a.createElement(f.a,null,r.a.createElement(g.a,null,r.a.createElement(p.a,null,r.a.createElement(E.a,{value:this.state.value,slides:this.toCardList(),onChange:function(t){return e.setState({value:t.target?t.target.value:t})}}),r.a.createElement(v.Dots,{value:this.state.value,onChange:function(t){return e.setState({value:t.target?t.target.value:t})},number:this.toCardList().length}))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.a97c17b4.chunk.js.map