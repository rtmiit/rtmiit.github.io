(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[11],{630:function(e,t,a){"use strict";a.r(t);var n=a(38),c=a.n(n),r=a(40),i=a(62),s=a(3),l=a(28),o=a.n(l),d=a(2),u=a(0),m=a.n(u),f=a(58),h=a.n(f),p=a(565);var b=m.a.memo((function(e){var t=e.stateCode,a=Object(u.useState)(!1),n=Object(s.a)(a,2),r=n[0],l=n[1],f=Object(u.useState)([]),b=Object(s.a)(f,2),v=b[0],g=b[1],E=Object(u.useState)([]),j=Object(s.a)(E,2),O=j[0],y=j[1];Object(u.useEffect)((function(){function e(){return(e=Object(i.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("https://api.covid19india.org/raw_data.json");case 3:a=e.sent,g(a.data.raw_data.filter((function(e){return e.statecode===t}))),l(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}r||function(){e.apply(this,arguments)}()}),[r,t]),Object(u.useEffect)((function(){y(function(e){var t=e.reduce((function(e,t){return e+t.contractedfromwhichpatientsuspected+", "}),"");t=t.replace(/\s+/g,"");var a=new Set(t.match(/[^,]+/g)),n=[],c=new Set,r=[];return e.forEach((function(e){var t=e.contractedfromwhichpatientsuspected.replace(/\s+/g,"").match(/[^,]+/g);if(t){var i="P"+e.patientnumber;c.add(i),n.push({id:i,group:a.has(i)?"source":"target",raw:e}),t.forEach((function(e){r.push({source:e,target:i})}))}})),r.forEach((function(e){c.has(e.source)||(n.push({id:e.source,group:"source",raw:e.source}),c.add(e.source))})),{nodes:n,links:r}}(v))}),[v]);var x=function(){var e=Object(u.useRef)();Object(u.useEffect)((function(){var t=e.current,a=document.getElementById("clusters").offsetWidth,n=a;t.d3Force("charge").strength(-60),t.d3Force("collision",d.i()),t.d3Force("x",d.j().strength(.3)),t.d3Force("y",d.k().strength(.3)),t.d3Force("box",(function(){for(var e=0,t=O.nodes.length;e<t;++e){var c=O.nodes[e];c.x=Math.max(-a,Math.min(a,c.x)),c.y=Math.max(-n,Math.min(n,c.y))}}))}),[]);var t=document.getElementById("clusters").offsetWidth,a=t;return m.a.createElement(p.a,{ref:e,width:t,height:a,graphData:O,nodeLabel:"id",nodeColor:function(e){return"source"===e.group?"#dc3545":"gray"},linkDirectionalParticleColor:function(){return"red"},linkDirectionalParticles:1,linkDirectionalParticleWidth:function(e){return"P"===e.source.id[0]?2:0},enableZoomPanInteraction:!1})};return Object(u.useEffect)((function(){h.a.render(m.a.createElement(x,null),document.getElementById("clusters"))}),[O]),m.a.createElement("div",{id:"clusters"})}),(function(){return!0}));var v=m.a.memo((function(e){var t=e.timeseries,a=e.arrayKey,n=Object(u.useState)([]),c=Object(s.a)(n,2),r=c[0],i=c[1],l=Object(u.useRef)();return Object(u.useEffect)((function(){i(t)}),[t]),Object(u.useEffect)((function(){if(r.length){var e=d.H(l.current),t=50,n=0,c=+e.attr("width")-0,i=+e.attr("height")-50,s=d.J("%e %b"),o=d.C().domain(r.map((function(e){return s(e.date)}))).range([n,c]).paddingInner(.33),u=d.D().domain([0,Math.max(1,d.w(r,(function(e){return e[a]})))]).range([i,t]),m=d.a(o).tickSize(0);e.select(".x-axis").style("transform","translateY(".concat(i,"px)")).call(m).call((function(e){return e.select(".domain").remove()})).selectAll("text").attr("y",0).attr("dy","1.5em").style("text-anchor","middle"),e.selectAll(".bar").data(r).join("path").attr("class","bar").attr("d",(function(e){return function(e,t,a,n,c,r){if(!n)return;void 0===r&&(r=1);var i=t-n+c;return["M",e,t,"L",e,i,"A",c,c,0,0,r,e+c,t-n,"L",e+a-c,t-n,"A",c,c,0,0,r,e+a,i,"L",e+a,t,"Z"].join(" ")}(o(s(e.date)),i,o.bandwidth(),i-u(e[a]),5)})).attr("fill",(function(e,t){return t<r.length-1?"#dc354590":"#dc3545"})),e.selectAll(".delta").data(r).join("text").attr("class","delta").attr("text-anchor","middle").attr("font-size","11px").attr("x",(function(e){return o(s(e.date))+o.bandwidth()/2})).attr("y",(function(e){return u(e[a])-6})).text((function(e){return e[a]})).append("tspan").attr("class","percent").attr("x",(function(e){return o(s(e.date))+o.bandwidth()/2})).attr("dy","-1.2em").text((function(e,t){return t&&r[t-1][a]?d.l("+.1%")((r[t][a]-r[t-1][a])/r[t-1][a]):""}))}}),[r,a]),m.a.createElement("div",{className:"DeltaBarGraph fadeInUp",style:{animationDelay:"0.8s"}},m.a.createElement("svg",{ref:l,width:"250",height:"250",viewBox:"0 0 250 250",preserveAspectRatio:"xMidYMid meet"},m.a.createElement("g",{className:"x-axis"}),m.a.createElement("g",{className:"y-axis"})))}),(function(){return!0}));var g=a(103),E=a(159),j=a(165),O=a(160),y=a(166),x=a(6),N=a(7),w=a(564),k=a(83),D=a(57),C=a(313),M=a(297),S=a(621),I=a(295),_=a(622),U=a(60),A=a(35),F=a(10),L=a(620),P=a(96);t.default=m.a.memo((function(e){var t=Object(u.useRef)(),a=Object(A.i)().stateCode.toUpperCase(),n=Object(u.useState)({}),l=Object(s.a)(n,2),d=l[0],f=l[1],h=Object(u.useState)(!1),p=Object(s.a)(h,2),R=p[0],X=p[1],B=Object(u.useState)({}),T=Object(s.a)(B,2),W=T[0],J=T[1],z=Object(u.useState)({}),H=Object(s.a)(z,2),K=H[0],V=H[1],Y=Object(u.useState)({}),Z=Object(s.a)(Y,2),G=Z[0],q=Z[1],Q=Object(u.useState)({}),$=Object(s.a)(Q,2),ee=$[0],te=$[1],ae=Object(u.useState)({}),ne=Object(s.a)(ae,2),ce=ne[0],re=ne[1],ie=Object(u.useState)(x.f[a]),se=Object(s.a)(ie,1)[0],le=Object(u.useState)("confirmed"),oe=Object(s.a)(le,2),de=oe[0],ue=oe[1],me=Object(L.a)(),fe=Object(s.a)(me,2),he=fe[0],pe=fe[1].width,be=Object(u.useState)(!1),ve=Object(s.a)(be,2),ge=ve[0],Ee=ve[1];Object(P.a)((function(){ye(a)}));var je,Oe,ye=function(){var e=Object(i.a)(c.a.mark((function e(t){var a,n,i,l,d,u,m,h,p,b,v,g,E,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([o.a.get("https://api.covid19india.org/data.json"),o.a.get("https://api.covid19india.org/state_district_wise.json"),o.a.get("https://api.covid19india.org/states_daily.json"),o.a.get("https://api.covid19india.org/state_test_data.json"),o.a.get("https://api.covid19india.org/sources_list.json")]);case 3:a=e.sent,n=Object(s.a)(a,5),i=n[0].data,l=n[1].data,d=n[2].data,u=n[3].data,m=n[4].data,h=x.f[t],p=i.statewise,f(p.filter((function(e){return e.statecode!==t&&x.f[e.statecode]}))),V(p.find((function(e){return e.statecode===t}))),b=Object(N.j)(d)[t],v=Object(N.i)(u.states_tested_data)[t],g=Object(N.g)(Object(r.a)({},t,b),Object(r.a)({},t,v)),J(g[t]),re(Object(r.a)({},h,l[h])),E=m.sources_list,te(E.filter((function(e){return e.statecode===t}))),j=u.states_tested_data,q(j.filter((function(e){return e.state===h&&""!==e.totaltested}))),X(!0),Object(k.a)({targets:".highlight",duration:200,delay:3e3,translateX:"confirmed"===de?"".concat(0*pe,"px"):"active"===de?"".concat(.25*pe,"px"):"recovered"===de?"".concat(.5*pe,"px"):"deceased"===de?"".concat(.75*pe,"px"):"0px",easing:"spring(1, 80, 90, 10)",opacity:1}),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(0),console.log(e.t0);case 30:case"end":return e.stop()}}),e,null,[[0,27]])})));return function(t){return e.apply(this,arguments)}}(),xe=G[G.length-1],Ne=function(){var e=window.innerWidth>=540?3:2,t=ce[se]&&Object.keys(ce[se].districtData).length||0;return Math.ceil(t/e)}();return se?m.a.createElement(m.a.Fragment,null,m.a.createElement(U.a,null,m.a.createElement("title",null,"Coronavirus Outbreak in ",x.f[a]," - covid19india.org"),m.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in ".concat(x.f[a],": Latest Map and Case Count")})),m.a.createElement("div",{className:"State"},m.a.createElement("div",{className:"state-left"},m.a.createElement("div",{className:"breadcrumb"},m.a.createElement(w.a,null,m.a.createElement(w.a.Item,{href:"/"},"Home"),m.a.createElement(w.b,{direction:"w"},m.a.createElement("summary",null,m.a.createElement(w.a.Item,{href:"".concat(a),selected:!0},se),m.a.createElement(w.b.Caret,{className:"caret"})),R&&m.a.createElement(w.b.Menu,{direction:"se"},d.map((function(e){return m.a.createElement(w.b.Item,{key:e.statecode,className:"item"},m.a.createElement(F.b,{to:"".concat(e.statecode)},x.f[e.statecode]))})))))),m.a.createElement("div",{className:"header"},m.a.createElement("div",{className:"header-left fadeInUp",style:{animationDelay:"0.3s"}},m.a.createElement("h1",null,se),m.a.createElement("h5",null,"Last Updated on"," ",Object.keys(K).length?Object(N.d)(K.lastupdatedtime):"")),m.a.createElement("div",{className:"header-right fadeInUp",style:{animationDelay:"0.5s"}},m.a.createElement("h5",null,"Tested"),m.a.createElement("h2",null,Object(N.e)(null===xe||void 0===xe?void 0:xe.totaltested)),m.a.createElement("h5",{className:"timestamp"},isNaN(Object(D.a)(null===xe||void 0===xe?void 0:xe.updatedon,"dd/MM/yyyy",new Date))?"":"As of ".concat(Object(C.a)(Object(D.a)(null===xe||void 0===xe?void 0:xe.updatedon,"dd/MM/yyyy",new Date),"dd MMM"))),m.a.createElement("h5",null,"per ",(null===xe||void 0===xe?void 0:xe.totaltested)&&m.a.createElement("a",{href:xe.source,target:"_noblank"},"source")))),R&&m.a.createElement("div",{className:"map-switcher",ref:he},m.a.createElement("div",{className:"highlight ".concat(de),style:{transform:"translateX(".concat(0*pe,"px)"),opacity:0}}),m.a.createElement("div",{className:"clickable",onClick:function(){ue("confirmed"),Object(k.a)({targets:".highlight",translateX:"".concat(0*pe,"px"),easing:"spring(1, 80, 90, 10)"})}}),m.a.createElement("div",{className:"clickable",onClick:function(){ue("active"),Object(k.a)({targets:".highlight",translateX:"".concat(.25*pe,"px"),easing:"spring(1, 80, 90, 10)"})}}),m.a.createElement("div",{className:"clickable",onClick:function(){ue("recovered"),Object(k.a)({targets:".highlight",translateX:"".concat(.5*pe,"px"),easing:"spring(1, 80, 90, 10)"})}}),m.a.createElement("div",{className:"clickable",onClick:function(){ue("deceased"),Object(k.a)({targets:".highlight",translateX:"".concat(.75*pe,"px"),easing:"spring(1, 80, 90, 10)"})}})),R&&m.a.createElement(E.a,{data:K}),R&&m.a.createElement(O.a,{timeseries:W}),R&&m.a.createElement(j.a,{forwardRef:t,mapMeta:x.c[se],states:[K],districts:ce,stateTestData:G,isCountryLoaded:!1,mapOption:de}),R&&m.a.createElement("div",{className:"meta-secondary"},m.a.createElement("div",{className:"alert"},m.a.createElement(M.a,null),m.a.createElement("div",{className:"alert-right"},"Awaiting district details for"," ",(null===(je=ce[se])||void 0===je||null===(Oe=je.districtData.Unknown)||void 0===Oe?void 0:Oe.confirmed)||"0"," ","cases")),m.a.createElement("div",{className:"alert"},m.a.createElement(S.a,null),m.a.createElement("div",{className:"alert-right"},"Data collected from sources"," ",ee.length>0?Object.keys(ee[0]).map((function(e,t){if(e.match("source")&&""!==ee[0][e]){var a=e.match(/\d+/);return m.a.createElement(m.a.Fragment,{key:t},a>1?",":"",m.a.createElement("a",{href:ee[0][e]},a))}return null})):"")))),m.a.createElement("div",{className:"state-right"},R&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"district-bar",style:ge?{}:{display:"flex"}},m.a.createElement("div",{className:"district-bar-left fadeInUp",style:{animationDelay:"0.6s"}},m.a.createElement("h2",null,"Top districts"),m.a.createElement("div",{className:"districts ".concat(ge?"is-grid":""),style:ge?{gridTemplateRows:"repeat(".concat(Ne,", 2rem)")}:{}},ce[se]?Object.keys(ce[se].districtData).filter((function(e){return"Unknown"!==e})).sort((function(e,t){return ce[se].districtData[t].confirmed-ce[se].districtData[e].confirmed})).slice(0,ge?void 0:5).map((function(e,t){return m.a.createElement("div",{key:t,className:"district"},m.a.createElement("h2",null,ce[se].districtData[e].confirmed),m.a.createElement("h5",null,e),m.a.createElement("div",{className:"delta"},m.a.createElement(I.a,null),m.a.createElement("h6",null,ce[se].districtData[e].delta.confirmed)))})):""),ce[se]&&Object.keys(ce[se].districtData).length>5&&m.a.createElement("button",{className:"button",onClick:function(){Ee(!ge)}},ge?"View less":"View all")),m.a.createElement("div",{className:"district-bar-right"},m.a.createElement("div",{className:"happy-sign fadeInUp",style:{animationDelay:"0.6s"}},W.slice(-5).every((function(e){return 0===e.dailyconfirmed}))&&m.a.createElement("div",{className:"alert is-green"},m.a.createElement(_.a,null),m.a.createElement("div",{className:"alert-right"},"No new confirmed cases in the past five days"))),m.a.createElement(v,{timeseries:W.slice(-5),arrayKey:"dailyconfirmed"}))),!1,m.a.createElement(y.a,{timeseries:W}))),m.a.createElement("div",{className:"state-left"},m.a.createElement("div",{className:"Clusters fadeInUp",style:{animationDelay:"0.8s"}},m.a.createElement("h1",null,"Network of Transmission"),m.a.createElement(b,{stateCode:a}))),m.a.createElement("div",{className:"state-right"})),m.a.createElement(g.a,null)):m.a.createElement(A.a,{to:"/"})}))}}]);
//# sourceMappingURL=11.7a6c8d36.chunk.js.map