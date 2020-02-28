(this["webpackJsonpassessments-ui"]=this["webpackJsonpassessments-ui"]||[]).push([[0],{105:function(e,t,a){e.exports=a(210)},110:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),i=(a(110),a(97)),c=a(24),s=a(254),d=a(31),m=a.n(d),u=a(47),p=a(15),f=a(20),g=a(256),b=a(251),h=a(252),E=a(250),v=a(244),x=a(5),y=a(255),S=a(249),k=a(96),B=a.n(k),N=a(247),F=a(93),w=Object(v.a)((function(e){return{ratingWrapper:{display:"flex",backgroundColor:"#E1E1E1",borderRadius:15,width:245},selectedRatingBox:{padding:"4px 8px 1px 8px",color:"#fff"},unSelectedRatingBox:{padding:"4px 8px 1px 8px",color:"#747474",backgroundColor:"#E1E1E1"},borderLeft:{borderTopLeftRadius:15,borderBottomLeftRadius:15},borderRight:{borderTopRightRadius:15,borderBottomRightRadius:15}}})),C=function(e){var t=e.value,a=w();return r.a.createElement("div",{className:a.ratingWrapper},Array(t).fill("").map((function(e,n){return r.a.createElement("div",{key:n,style:t>5?{backgroundColor:"#27AE60"}:{backgroundColor:"#EB5757"},className:"".concat(0===n&&a.borderLeft," ").concat(n===t-1&&a.borderRight," ").concat(a.selectedRatingBox)},n+1)})),Array(10-t).fill("").map((function(e,n){return r.a.createElement("div",{key:n,className:"".concat(n===10-t-1&&a.borderRight," ").concat(a.unSelectedRatingBox)},t+n+1)})))},j=Object(v.a)((function(e){return{root:{padding:"10% 20%",color:"#fff",background:"transparent linear-gradient(119deg, #182343 0%, #1D53B9 25%, #0F57DD 44%, #0F49B6 69%, #0F1C3B 100%) 0% 0% no-repeat padding-box",minHeight:"100vh"},logo:{width:150,position:"absolute",top:50,left:50},container:{position:"absolute",top:"40%",left:"45%",color:"#fff"},donutWrapper:{position:"relative",marginBottom:100},donutTxt:{position:"absolute",fontSize:"2rem",color:"#588BFF"},resTxt:{fontSize:21}}})),O=function(e){var t=e.history,a=e.location,o=j(),l=Object(n.useState)({}),i=Object(f.a)(l,2),c=i[0],s=i[1],d=Object(n.useState)({datasets:[{data:[100],backgroundColor:["#58A5FF","#252F56"]}]}),p=Object(f.a)(d,2),g=p[0],b=p[1],h=function(){var e=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(t),b({datasets:[{borderColor:"#363A42",boredrAlign:"center",borderWidth:0,outerRadius:"100%",innerRadius:"99%",cornerRadius:"1%",padAngle:"10",data:[100*t.avgScore,100*(1-t.avgScore)],backgroundColor:["#5D8FFF","#002676"],weight:100}]});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(a.hash&&a.hash.substring(1).startsWith("r=")&&a.hash.substring(3))try{var e=JSON.parse(a.hash.substring(3).replace(/%22/g,'"').replace(/%20/g," "));h(e)}catch(n){console.log(a.hash.substring(3).replace(/%22/g,'"').replace(/%20/g," ")),console.log(n)}else t.push("#")}),[]),r.a.createElement("div",{className:o.root},r.a.createElement(N.a,{container:!0,spacing:0},r.a.createElement(N.a,{item:!0,md:12},r.a.createElement(N.a,{item:!0,md:12},r.a.createElement("div",{className:o.donutWrapper},r.a.createElement(S.a,{className:o.donutTxt,style:{top:"-10%",left:"49%"},component:"span"},"0"),r.a.createElement(S.a,{className:o.donutTxt,style:{right:"20%",top:"50%"},component:"span"},"25"),r.a.createElement(S.a,{className:o.donutTxt,style:{bottom:"-15%",left:"48%"},component:"span"},"50"),r.a.createElement(S.a,{className:o.donutTxt,style:{left:"20%",top:"50%"},component:"span"},"75"),r.a.createElement("div",{className:o.donutTxt,style:{top:"30%",left:"38%",textAlign:"center"}},r.a.createElement(S.a,{style:{fontSize:28,fontWeight:100,color:"#fff"},component:"h3"},"Your Score"),r.a.createElement(S.a,{style:{fontSize:82,color:"#F8D618"},component:"h3"},c.avgScore&&(100*c.avgScore).toFixed(0),"%")),r.a.createElement(F.a,{data:g,options:{responsive:!0,maintainAspectRatio:!0,cutoutPercentage:80,tooltips:{enabled:!1}}}))),r.a.createElement(N.a,{item:!0,md:12,style:{textAlign:"center"}},r.a.createElement(S.a,{className:o.resTxt},c.name,", your overall score is ",(100*c.avgScore).toFixed(0),"% ."),r.a.createElement(S.a,{className:o.resTxt},"High potentials score between 81-100."))),r.a.createElement(N.a,{item:!0,md:12},r.a.createElement(N.a,{item:!0,md:12},r.a.createElement(S.a,{style:{marginTop:50,marginLeft:70,marginBottom:10,fontSize:26}},"Analysis")),r.a.createElement(N.a,{item:!0,md:12,style:{marginLeft:50,display:"flex",flexWrap:"wrap"}},c.data&&c.data.map((function(e,t){var a=e.value,n=e.label;return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",padding:"10px 50px",margin:"0 20px 10px 20px",backgroundColor:"rgba(37, 47, 86, .15)",paddingBottom:25},key:t},r.a.createElement("div",{style:{width:350,position:"relative",display:"flex",justifyContent:"space-between"}},r.a.createElement(S.a,{style:{fontSize:28,marginTop:20,marginBottom:10},component:"h3"},n),r.a.createElement(S.a,{style:{fontSize:28,marginTop:20,marginBottom:10},component:"h3"},a," / 10")),r.a.createElement(C,{value:parseInt(a)}))}))))))},R=a(95),T=a.n(R),A=Object(v.a)((function(e){return{logo:{width:150,height:40,position:"fixed",top:56,left:63},container:{padding:"12% 15%",paddingBottom:45,background:"transparent linear-gradient(119deg, #182343 0%, #1D53B9 25%, #0F57DD 44%, #0F49B6 69%, #0F1C3B 100%) 0% 0% no-repeat padding-box",textAlign:"center",color:"#fff",minHeight:"100vh"},question:{fontSize:28,fontWeight:100,textTransform:"uppercase",padding:e.spacing(3,0)},ansBtn:{fontSize:14,padding:e.spacing(1.5,4),color:"#fff",background:"#1A4092"},actionBtn:{borderRadius:23,borderColor:"#fff",margin:"0 20px",width:185,height:45,fontSize:14},textField:{width:287},borderLine:{alignSelf:"center",width:300,borderTop:"1px solid #009DFF"},input:{color:"#fff","&::before":{borderColor:"#fff"},"&::after":{borderColor:"#fff"}},skillsWrapper:{margin:"20px 0"}}})),z=(Object(x.a)({colorPrimary:{backgroundColor:"#134DEA"},barColorPrimary:{backgroundColor:"#193D8B"}})(E.a),function(e){var t=e.history,a=e.location,o=A(),l=Object(n.useState)("details"),i=Object(f.a)(l,2),c=i[0],s=i[1],d=Object(n.useState)([{label:"",value:""}]),E=Object(f.a)(d,2),v=E[0],x=E[1],k=Object(n.useState)(""),N=Object(f.a)(k,2),F=N[0],w=N[1],C=function(e,t){return function(a){v[e][t]=a.target.value,x(Object(p.a)(v))}},j=function(e){return function(){v.splice(e,1),x(Object(p.a)(v))}},R=function(){var e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push("#r=".concat(JSON.stringify({name:F,data:v.filter((function(e){var t=e.label,a=e.value;return t&&a})),avgScore:v.reduce((function(e,t){var a=t.value;return e+parseInt(a)}),0)/(10*v.length)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a.hash&&(a.hash.substring(1).startsWith("r=")?s("result"):s("details"))}),[a.hash]),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(b.a,null),r.a.createElement("img",{alt:"egen logo",src:T.a,className:o.logo}),r.a.createElement("div",{className:"result"!==c?o.container:""},"details"===c&&r.a.createElement("div",{style:{display:"flex",flexDirection:"column",color:"#fff"}},r.a.createElement("div",{className:o.borderLine}),r.a.createElement(S.a,{style:{fontSize:24,padding:"20px 0"},component:"h3"},"ASSESSMENT ENTRY"),r.a.createElement("div",{className:o.borderLine}),r.a.createElement("div",{style:{alignSelf:"center",marginTop:50,display:"flex",flexDirection:"column"}},r.a.createElement(y.a,{required:!0,label:"Name",className:o.textField,value:F,onChange:function(e){var t=e.target.value;return w(t)},margin:"normal",InputProps:{className:o.input},InputLabelProps:{style:{color:"#fff"}}}),v.map((function(e,t){return r.a.createElement("div",{key:t,className:o.skillsWrapper},r.a.createElement(h.a,{className:o.input,placeholder:"Label",value:e.label,onChange:C(t,"label")}),":",r.a.createElement(h.a,{style:{marginLeft:10,width:60},className:o.input,placeholder:"Value",type:"number",inputProps:{min:"1",max:"10",step:"1"},value:e.value,onChange:C(t,"value")}),r.a.createElement(B.a,{onClick:j(t)}))})),r.a.createElement(g.a,{onClick:function(){x([].concat(Object(p.a)(v),[{label:"",value:""}]))},className:o.actionBtn,variant:"outlined",color:"default"},"Add Skill")),r.a.createElement("div",{style:{display:"flex",alignSelf:"center",margin:"75px"}},r.a.createElement(g.a,{disabled:!F,onClick:R,className:o.actionBtn,variant:"outlined",color:"default"},"VIEW CERTIFICATE"))),r.a.createElement("div",null,"result"===c&&r.a.createElement(O,{history:t,location:a}))),r.a.createElement("div",{style:{marginTop:-70,color:"#6699FC",textAlign:"center"}},r.a.createElement(S.a,{style:{padding:"5px 100px",fontSize:12},component:"h6"},"Egen\u2019s assessment is to analyze the ability of candidate\u2019s knowledge and proficiency. This score report is just to visualize the candidate\u2019s performance by Egen. Any other queries can be redirected to concerned person in contact at Egen."),r.a.createElement(S.a,{style:{fontSize:12},component:"h6"},"\xa9 2000-2020 Egen Solutions, Inc. \u2022 All Rights Reserved \u2022"))))}),W=a(99),D=a(53),L=a(54),I=a(253),P=Object(W.a)({palette:{primary:{main:"#0b5a92",light:"#F5F6FA"},secondary:{main:D.a[700],light:D.a[200]},error:{main:L.a[500],light:L.a[100]},text:{hint:I.a[100]}},typography:{fontFamily:"Roboto",subtitle1:{color:D.a[600],fontSize:"1.4em"},subtitle2:{color:D.a[600],fontSize:"1.4em"}},overrides:{MuiButton:{root:{color:"#fff"}},MuiPaper:{elevation2:{boxShadow:"0px 10px 15px -16px #bbbbbb"}}}}),J=function(){return r.a.createElement(s.a,{theme:P},r.a.createElement(i.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},95:function(e,t,a){e.exports=a.p+"static/media/egen_logo.8e3c062e.png"}},[[105,1,2]]]);
//# sourceMappingURL=main.bbfb37e6.chunk.js.map