(this["webpackJsonpwow-raid-cds"]=this["webpackJsonpwow-raid-cds"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"sludgefist":{"name":"Sludgefist","abilities":[{"id":"332687","timers":[0,35,70,105,140,175,210,245,275,315],"name":"Roar","color":"ffffff"},{"id":"331209","timers":[60,130,195,265,330],"name":"Impact","color":"ffffff"}]}}')},14:function(e){e.exports=JSON.parse('[{"id":165775,"name":"Anti Magic Zone","cooldown":120,"class":"deathknight"},{"id":196718,"name":"Darkness","cooldown":180,"class":"demon_hunter"},{"id":97462,"name":"Rallying Cry","cooldown":180,"class":"warrior"},{"id":108280,"name":"Healing Tide Totem","cooldown":180,"class":"shaman_resto"},{"id":98008,"name":"Spirit Link Totem","cooldown":180,"class":"shaman_resto"},{"id":207399,"name":"APT","cooldown":300,"class":"shaman_resto"},{"id":114049,"name":"Ascendance","cooldown":180,"class":"shaman_resto"},{"id":265202,"name":"Holy Word: Salvation","cooldown":300,"class":"priest_holy"},{"id":64843,"name":"Divine Hymn","cooldown":180,"class":"priest_holy"},{"id":200183,"name":"Apotheosis","cooldown":120,"class":"priest_holy"},{"id":62618,"name":"Power Word: Barrier","cooldown":180,"class":"priest_disc"},{"id":109964,"name":"Spirit Shell","cooldown":60,"class":"priest_disc"},{"id":115310,"name":"Revival","cooldown":180,"class":"monk_mw"},{"id":325197,"name":"Invoke","cooldown":180,"class":"monk_mw"},{"id":740,"name":"Tranquility","cooldown":180,"class":"druid_resto"},{"id":33891,"name":"Incarnation: Tree of Life","cooldown":180,"class":"druid_resto"},{"id":31821,"name":"Aura Mastery","cooldown":180,"class":"paladin_holy"},{"id":31884,"name":"Avenging Wrath","cooldown":120,"class":"paladin_holy"},{"id":15286,"name":"Vampiric Embrace","cooldown":120,"class":"priest_shadow"},{"id":43185,"name":"Healing potion","cooldown":60,"class":""},{"id":6262,"name":"Healthstone","cooldown":60,"class":""}]')},28:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(5),r=n.n(a),i=n(17),l=n(7),o=(n(28),n(22)),d=n(8),j=n(1);var m=function(e){var t=e.players,n=e.setPlayers,c=Object(s.useState)(""),a=Object(l.a)(c,2),r=a[0],i=a[1],m=Object(s.useState)(""),u=Object(l.a)(m,2),h=u[0],b=u[1];return Object(j.jsxs)("div",{className:"col-3",children:[Object(j.jsxs)("form",{className:"form-inline",children:[Object(j.jsx)("input",{placeholder:"Player's name",type:"text",className:"form-control mb-2 mr-sm-2",value:r,onChange:function(e){return i(e.target.value)},style:{width:"170px"}}),Object(j.jsxs)("div",{className:"input-group mb-2 mr-sm-2",children:[Object(j.jsxs)("select",{className:"form-control",value:h,onChange:function(e){return b(e.target.value)},children:[Object(j.jsx)("option",{value:"",children:"Select a class"}),Object.keys(d).sort().map((function(e){return Object(j.jsx)("option",{value:e,children:d[e].name},e)}))]}),Object(j.jsx)("div",{className:"input-group-append",children:Object(j.jsx)("div",{className:"input-group-text",children:Object(j.jsx)("i",{className:"fas fa-plus",onClick:function(){if(""!==r&&""!==h){var e=Object(o.a)(t);e.push({name:r,class:h}),n(e),i(""),b("")}}})})})]})]}),Object(j.jsxs)("table",{className:"table table-dark table-striped",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Class (spec)"}),Object(j.jsx)("th",{})]})}),Object(j.jsx)("tbody",{children:t.map((function(e,s){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{style:{color:"#"+d[e.class].color},children:e.name}),Object(j.jsx)("td",{style:{color:"#"+d[e.class].color},children:d[e.class].name}),Object(j.jsx)("td",{children:Object(j.jsx)("i",{className:"fas fa-trash",id:"trash",onClick:function(){return s=e.name,void n(t.filter((function(e){return e.name!==s})));var s}})})]},e.name)}))})]}),Object(j.jsxs)("p",{children:["By ",Object(j.jsx)("a",{href:"https://tricht.dev/",target:"_blank",rel:"noreferrer",children:"Michael"})," - ",Object(j.jsxs)("a",{href:"https://github.com/mtricht/wow-raid-cds",target:"_blank",rel:"noreferrer",children:["View on ",Object(j.jsx)("i",{className:"fab fa-github"})]})]})]})},u=n(12),h=n(14),b=n(41),f=n(40),p=n(39);var O=function(e){var t=e.players,n=e.assignments,s=e.setAssignments,c=e.encounter,a=e.row,r=function(e,t){var r=JSON.parse(JSON.stringify(n));if(void 0!==r[c]&&null!==r[c]||(r[c]=[]),void 0===r[c][a]||null===r[c][a])r[c][a]=[];else if(r[c][a].filter((function(n){return n.player===e&&n.spellId===t})).length>0)return;r[c][a].push({player:e,spellId:t}),s(r)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("table",{className:"table table-dark table-striped",id:"cooldown-list",children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{style:{cursor:"pointer"},onClick:function(){return r("",6262)},children:[Object(j.jsx)("td",{children:Object(j.jsx)("a",{"data-wowhead":"spell=6262",href:"#",style:{marginLeft:"15px"},children:"Healthstone"})}),Object(j.jsx)("td",{children:Object(j.jsx)("i",{className:"fas fa-plus"})})]}),Object(j.jsxs)("tr",{style:{cursor:"pointer"},onClick:function(){return r("",43185)},children:[Object(j.jsx)("td",{children:Object(j.jsx)("a",{"data-wowhead":"spell=43185",href:"#",style:{marginLeft:"15px"},children:"Healing potion"})}),Object(j.jsx)("td",{children:Object(j.jsx)("i",{className:"fas fa-plus"})})]}),t.map((function(e){return h.filter((function(t){return t.class===e.class})).map((function(t){return Object(j.jsxs)("tr",{style:{cursor:"pointer"},onClick:function(){return r(e.name,t.id)},children:[Object(j.jsx)("td",{children:Object(j.jsxs)("a",{"data-wowhead":"spell=".concat(t.id),href:"#",style:{color:"#"+d[e.class].color,marginLeft:"15px"},children:[e.name,"'s ",t.name]})}),Object(j.jsx)("td",{children:Object(j.jsx)("i",{className:"fas fa-plus"})})]},e.name+t.id)}))}))]})})})},x=function(e){return new Date(1e3*e).toISOString().substr(14,5)},w=function(e){return e.flatMap((function(e){return e.timers.map((function(t,n){return{id:e.id,time:t,name:"".concat(e.name," ").concat(n+1),color:e.color}}))})).sort((function(e,t){return e.time-t.time}))};var y=function(){Object(s.useEffect)((function(){return window.$WowheadPower.refreshLinks()}));var e=Object(s.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),r=Object(l.a)(a,2),o=r[0],d=r[1],y=Object(s.useState)({}),g=Object(l.a)(y,2),v=g[0],N=g[1],k=Object(s.useState)(0),F=Object(l.a)(k,2),S=F[0],_=F[1],C=Object(s.useState)(!1),A=Object(l.a)(C,2),T=A[0],I=A[1],P=Object(s.useRef)(null);return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(m,{players:n,setPlayers:c}),Object(j.jsxs)("div",{className:"col-6",children:[Object(j.jsxs)("select",{value:o,className:"form-control mb-2 mr-sm-2",style:{width:"300px"},onChange:function(e){return function(e){d(e),_(0)}(e.target.value)},children:[Object(j.jsx)("option",{value:"",children:"Select encounter"}),Object.keys(u).map((function(e){return Object(j.jsx)("option",{value:e,children:u[e].name},e)}))]}),""!==o&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("table",{className:"table table-dark table-striped",id:"assignments",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Time"}),Object(j.jsx)("th",{children:"Ability"}),Object(j.jsx)("th",{width:"70%",children:"Assignment(s)"})]})}),Object(j.jsx)("tbody",{children:w(u[o].abilities).map((function(e,t){return Object(j.jsxs)("tr",{className:t===S?"table-info":"",onClick:function(){return _(t)},style:{cursor:"pointer"},children:[Object(j.jsx)("td",{children:x(e.time)}),Object(j.jsx)("td",{children:Object(j.jsx)("a",{href:"#","data-wowhead":"spell=".concat(e.id),children:e.name})}),Object(j.jsx)("td",{children:v[o]&&v[o][t]&&v[o][t].map((function(e,n){return Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{href:"#","data-wowhead":"spell=".concat(e.spellId)}),"\xa0",e.player,""!==e.player?"'s":"","\xa0",(s=e.spellId,h.filter((function(e){return e.id===s}))[0]).name,"\xa0 \xa0",Object(j.jsx)("i",{className:"fas fa-times",id:"trash",onClick:function(){return function(e,t){var n=JSON.parse(JSON.stringify(v));n[o][e].splice(t,1),N(n)}(t,n)}})]},e.player+e.spellId);var s}))})]},e.time+e.name)}))})]}),Object(j.jsx)(b.a,{className:"m-2",variant:"success",onClick:function(){I(!0),function(e,t){var n=e.map((function(e,n){var s="{time:".concat(x(e.time),"}: {spell:").concat(e.id,"}|cff").concat(e.color).concat(e.name,"|r - ");return void 0===t||null===t||void 0===t[n]||null===t[n]||0===t[n].length?s:s+=" "+t[n].map((function(e){return"".concat(""===e.player?"Everyone":e.player," {spell:").concat(e.spellId,"}")})).join(" + ")}));navigator.clipboard.writeText(n.join("\n"))}(w(u[o].abilities),v[o]),setTimeout((function(){return I(!1)}),2500)},ref:P,children:"Generate ERT note"}),Object(j.jsx)(f.a,{target:P.current,show:T,placement:"right",children:function(e){return Object(j.jsx)(p.a,Object(i.a)(Object(i.a)({},e),{},{children:"Copied ERT note"}))}})]})]}),Object(j.jsx)("div",{className:"col-3",children:""!==o&&Object(j.jsx)(O,{players:n,assignments:v,setAssignments:N,encounter:o,row:S})})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),g()},8:function(e){e.exports=JSON.parse('{"deathknight":{"name":"Deathknight","color":"C41F3B"},"demon_hunter":{"name":"Demon Hunter","color":"A330C9"},"warrior":{"name":"Warrior","color":"C79C6E"},"shaman_resto":{"name":"Shaman (Resto)","color":"0070DE"},"priest_holy":{"name":"Priest (Holy)","color":"FFFF00"},"priest_disc":{"name":"Priest (Disc)","color":"FFFFFF"},"monk_mw":{"name":"Monk (MW)","color":"00FF96"},"druid_resto":{"name":"Druid (Resto)","color":"FF7D0A"},"paladin_holy":{"name":"Paladin (Holy)","color":"F58CBA"},"priest_shadow":{"name":"Priest (Shadow)","color":"FFFFFF"}}')}},[[33,1,2]]]);
//# sourceMappingURL=main.6484a345.chunk.js.map