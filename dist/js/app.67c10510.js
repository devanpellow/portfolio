(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0027":function(t,e,n){},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"08f2":function(t,e,n){t.exports=n.p+"img/flash.3d24bead.png"},"0afc":function(t,e,n){"use strict";var a=n("8d14"),r=n.n(a);r.a},"146a":function(t,e,n){"use strict";var a=n("1969"),r=n.n(a);r.a},1969:function(t,e,n){},"32f8":function(t,e,n){"use strict";var a=n("f201"),r=n.n(a);r.a},"37ab":function(t,e,n){},"557b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"flex justify-center",attrs:{id:"nav"}},[n("router-link",{staticClass:"px-10",attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{staticClass:"px-10",attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),n("router-link",{staticClass:"px-10",attrs:{to:"/animations"}},[t._v("Animations")]),t._v(" | "),n("router-link",{staticClass:"px-10",attrs:{to:"/crazy-calculator"}},[t._v("Crazy Calculator")]),t._v(" | "),n("router-link",{staticClass:"px-10",attrs:{to:"/ledger-a"}},[t._v("Ledger A")]),t._v(" | "),n("router-link",{staticClass:"px-10",attrs:{to:"/habit-tracker"}},[t._v("Habit Tracker")])],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},i=[],o={name:"App",components:{}},s=o,l=(n("034f"),n("2877")),c=Object(l["a"])(s,r,i,!1,null,null,null),u=c.exports,d=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("Header")],1)},f=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-4xl flex justify-center py-10",domProps:{textContent:t._s(t.name)}})])},v=[],h={data:function(){return{name:"Devan Pellow"}}},y=h,b=Object(l["a"])(y,m,v,!1,null,null,null),g=b.exports,x={components:{Header:g}},C=x,_=Object(l["a"])(C,p,f,!1,null,null,null),w=_.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" About ")],1)},E=[],O={components:{Header:g},data:function(){return{title:"title"}},methods:{function:function(){}}},A=O,G=Object(l["a"])(A,k,E,!1,null,null,null),P=G.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("Header"),n("div",{staticClass:"flex flex-col"},[n("AnimationOne"),n("AnimationTwo"),n("AnimationThree"),n("AnimationFour"),n("AnimationFive"),n("AnimationSix"),n("Stagger"),n("AnimationState"),n("AnimationTimelines")],1)],1)},D=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-2xl",domProps:{textContent:t._s(t.title)}}),n("div",[n("button",{on:{click:t.toggleModal}},[t._v("Open Modal")]),n("transition",{attrs:{name:"fade"}},[t.isOpen?n("div",{staticClass:"modal w-48 h-48 bg-gray-400 rounded-lg"},[n("button",{on:{click:t.toggleModal}},[t._v("Close")])]):t._e()])],1)])},$=[],M={data:function(){return{title:"Fade Modal In and Out",isOpen:!1}},methods:{toggleModal:function(){this.isOpen=!this.isOpen}}},T=M,F=(n("32f8"),Object(l["a"])(T,S,$,!1,null,null,null)),H=F.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-2xl",domProps:{textContent:t._s(t.title)}}),n("div",[n("button",{on:{click:t.slideModal}},[t._v("Slide Fade Modal")]),n("transition",{attrs:{name:"slide-fade"}},[t.isOpen?n("div",{staticClass:"modal w-48 h-48 bg-gray-400 rounded-lg"},[n("button",{on:{click:t.slideModal}},[t._v("Close")])]):t._e()])],1)])},I=[],R={data:function(){return{title:"Slide Fade In and Out",isOpen:!1}},methods:{slideModal:function(){this.isOpen=!this.isOpen}}},L=R,q=(n("8ec6"),Object(l["a"])(L,N,I,!1,null,null,null)),z=q.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-2xl",domProps:{textContent:t._s(t.title)}}),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newContact,expression:"newContact"}],attrs:{type:"text",placeholder:"Name"},domProps:{value:t.newContact},on:{input:function(e){e.target.composing||(t.newContact=e.target.value)}}}),n("button",{staticClass:"bg-white text-xs hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow",on:{click:t.addContact}},[t._v(" Add Contact ")]),n("button",{staticClass:"bg-white text-xs hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow",on:{click:t.sortContact}},[t._v(" Sort ContactS ")]),n("transition-group",{attrs:{name:"slide-up",tag:"ul",appear:""}},t._l(t.contacts,(function(e){return n("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0)],1)])},K=[],W={data:function(){return{title:"Add to a list:",newContact:"",contacts:["Harambe","Elon's robot child","Arnold Schwarzenegger","Michael Jordan","Britney 2007"]}},methods:{addContact:function(){this.contacts.push(this.newContact),this.newContact=""},sortContact:function(){this.contacts.sort()}}},B=W,Q=(n("c621"),Object(l["a"])(B,J,K,!1,null,null,null)),X=Q.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-2xl",domProps:{textContent:t._s(t.title)}}),n("div",[n("button",{on:{click:function(e){t.isOpen=!t.isOpen}}},[t._v("Slide Drawer Open")]),n("transition",{attrs:{css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter,leave:t.leave}},[t.isOpen?n("div",{staticClass:"modal w-48 h-48 bg-gray-400 rounded-lg"},[t._v(" https://easings.net/ ")]):t._e()])],1)])},V=[],Y=n("589d"),Z=n.n(Y),tt={data:function(){return{title:"Drawer",isOpen:!1}},methods:{beforeEnter:function(t){t.style.opacity=0,t.style.width="0em"},enter:function(t,e){Z()(t,{opacity:1,width:"12em"},{duraction:1e3,easing:"easeOutCubic",complete:e})},leave:function(t,e){Z()(t,{opacity:0,width:"0em"},{duraction:500,easing:"easeInCubic",complete:e})}}},et=tt,nt=Object(l["a"])(et,U,V,!1,null,null,null),at=nt.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-2xl",domProps:{textContent:t._s(t.title)}}),n("div",[n("button",{on:{click:function(e){t.isOpen=!t.isOpen}}},[t._v("Slide Drawer Open")]),n("transition",{attrs:{css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter,leave:t.leave}},[t.isOpen?n("div",{staticClass:"modal w-48 h-48 bg-gray-400 rounded-lg"},[t._v(" Snappppy ")]):t._e()])],1)])},it=[],ot={data:function(){return{title:"Drawer",isOpen:!1}},methods:{beforeEnter:function(t){t.style.opacity=0,t.style.width="0em"},enter:function(t,e){Z()(t,{opacity:1,width:"12em"},{duraction:1e3,easing:[70,8],complete:e})},leave:function(t,e){Z()(t,{opacity:0,width:"0em"},{duraction:500,easing:"easeInCubic",complete:e})}}},st=ot,lt=Object(l["a"])(st,rt,it,!1,null,null,null),ct=lt.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{domProps:{textContent:t._s(t.title)}}),n("transition",{attrs:{appear:"",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter}},[n("div",{staticClass:"modal w-48 h-48 bg-gray-400 rounded-lg"})])],1)},dt=[],pt=n("cffa"),ft={data:function(){return{title:"GSAP"}},methods:{beforeEnter:function(t){t.style.opacity=0,t.style.transform="scale(0,0)"},enter:function(t,e){pt["a"].to(t,{duration:1,opacity:1,scale:1,ease:"bounce.out",onComplete:e})}}},mt=ft,vt=Object(l["a"])(mt,ut,dt,!1,null,null,null),ht=vt.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},t._l(t.cards,(function(t){return n("div",{key:t.id,staticClass:"card modal my-2 mx-2 w-10 h-10 bg-gray-400 rounded-lg"})})),0)},bt=[],gt={data:function(){return{title:"Stagger",cards:[{id:123},{id:456},{id:789},{id:321},{id:654},{id:987}]}},methods:{function:function(){}},mounted:function(){pt["a"].from(".card",{duration:.5,opacity:0,scale:0,y:200,ease:"power1",stagger:{each:.1,from:"center"}})}},xt=gt,Ct=Object(l["a"])(xt,yt,bt,!1,null,null,null),_t=Ct.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{domProps:{textContent:t._s(t.title)}}),n("div",{staticClass:"bar",style:{width:t.tweenedNumber+"px"}},[n("span",[t._v(t._s(t.tweenedNumber.toFixed(0)))])])])},kt=[],Et={data:function(){return{title:"GSAP State",number:0,tweenedNumber:0}},watch:{number:function(t){pt["a"].to(this.$data,{duration:1,ease:"circ.out",tweenedNumber:t})}},methods:{randomNumber:function(){this.number=Math.floor(600*Math.random())}},created:function(){setInterval(this.randomNumber,1500)}},Ot=Et,At=(n("146a"),Object(l["a"])(Ot,wt,kt,!1,null,"0703e2ed",null)),Gt=At.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{domProps:{textContent:t._s(t.title)}}),n("button",{on:{click:t.startRace}},[t._v("Click to race heros!")]),t._m(0)])},jt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"img-container"},[a("img",{staticClass:"runner first",attrs:{src:n("08f2"),alt:"Flash"}}),a("img",{staticClass:"runner second",attrs:{src:n("993c"),alt:"QuickSilver"}}),a("img",{staticClass:"runner third",attrs:{src:n("6975"),alt:"SilverSurfer"}})])}],Dt={data:function(){return{title:"GSAP Timeline"}},methods:{startRace:function(){this.superHeroRace()},superHeroRace:function(){var t=pt["a"].timeline({repeat:-1,repeatDelay:.75});t.to(".first",{x:700,duration:6,ease:"none"}),t.to(".second",{x:700,duration:4.5,ease:"none"},"<"),t.to(".third",{x:700,duration:2,ease:"none"},"<")}}},St=Dt,$t=(n("fab7"),Object(l["a"])(St,Pt,jt,!1,null,"f7ee9e40",null)),Mt=$t.exports,Tt={components:{Header:g,AnimationOne:H,AnimationTwo:z,AnimationThree:X,AnimationFour:at,AnimationFive:ct,AnimationSix:ht,Stagger:_t,AnimationState:Gt,AnimationTimelines:Mt}},Ft=Tt,Ht=Object(l["a"])(Ft,j,D,!1,null,null,null),Nt=Ht.exports,It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-4xl text-center py-10"},[t._v("Crazy Calculator")]),n("Calculator")],1)},Rt=[],Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center"},[n("div",{staticClass:"w-64"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("div",{staticClass:"h-16 rounded w-full text-right text-white text-5xl bg-black bg-opacity-50 border-none px-2"},[t._v(" "+t._s(t.display||"")+" ")])]),n("div",{staticClass:"flex flex-row "},[n("div",{staticClass:"rounded border w-1/2 h-16 text-2xl"},[n("button",{staticClass:"w-full h-full",attrs:{value:"clr"},on:{click:function(e){return t.clear()}}},[t._v(" C ")])]),n("div",{staticClass:"rounded border w-1/4 h-16 text-2xl"},[n("button",{staticClass:"w-full h-full",attrs:{value:"del"},on:{click:function(e){return t.del()}}},[t._v(" del ")])]),n("div",{staticClass:"rounded border w-1/4 h-16 text-2xl"},[n("button",{staticClass:"w-full h-full",attrs:{value:"div"},on:{click:function(e){return t.divide()}}},[t._v(" ÷ ")])])]),n("div",{staticClass:"flex"},[n("transition-group",{staticClass:"w-3/4 justify-center flex flex-wrap",attrs:{name:"slide-up",appear:""}},t._l(t.numbers,(function(e){return n("div",{key:e.value,staticClass:"rounded border shadow-2xl h-16 w-16 text-2xl"},[n("button",{staticClass:"w-full h-full",on:{click:function(n){return t.append(e)}}},[t._v(" "+t._s(e.label)+" ")])])})),0),n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"rounded border h-16 w-16 text-2xl"},[n("button",{staticClass:"w-full h-full",attrs:{value:"div"},on:{click:function(e){return t.times()}}},[t._v(" × ")])]),n("div",{staticClass:"rounded border h-16 w-16 text-2xl"},[n("button",{staticClass:"w-full h-full",attrs:{value:"div"},on:{click:function(e){return t.minus()}}},[t._v(" − ")])]),n("div",{staticClass:"border h-16 w-16 text-2xl"},[n("button",{staticClass:"w-full h-full",attrs:{value:"div"},on:{click:function(e){return t.add()}}},[t._v(" + ")])])])],1),n("div",{},[n("div",{staticClass:"-my-16 rounded border h-16 w-16 text-2xl"},[n("button",{staticClass:"w-full h-full",attrs:{value:"."},on:{click:function(e){return t.dot(".")}}},[t._v(" . ")])]),n("div",{staticClass:"rounded border ml-32 h-16 w-32 text-2xl"},[n("button",{staticClass:"w-full h-full",attrs:{value:"sum"},on:{click:function(e){return t.equal()}}},[t._v(" = ")])])])],1)])},qt=[],zt=(n("99af"),n("c975"),{data:function(){return{display:"",previous:null,current:"",operator:null,operatorClicked:!1,numbers:[{label:"7",value:7},{label:"8",value:8},{label:"9",value:9},{label:"4",value:4},{label:"5",value:5},{label:"6",value:6},{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"0",value:0}]}},methods:{append:function(t){t.value>=0||t.value<9?(this.shuffle(),this.operatorClicked&&(this.current="",this.operatorClicked=!1),this.current="".concat(this.current).concat(t.value),this.display+=t.value):(this.operatorClicked&&(this.current="",this.operatorClicked=!1),this.current="".concat(this.current).concat(t),this.display+=t.value)},dot:function(){-1===this.current.indexOf(".")&&this.append(".")},setPrevious:function(){this.previous=this.current,this.operatorClicked=!0},divide:function(){this.display+="÷",this.operator=function(t,e){return t/e},this.setPrevious()},times:function(){this.display+="×",this.operator=function(t,e){return t*e},this.setPrevious()},minus:function(){this.display+="−",this.operator=function(t,e){return t-e},this.setPrevious()},add:function(){this.display+="+",this.operator=function(t,e){return t+e},this.setPrevious()},equal:function(){this.current="".concat(this.operator(parseFloat(this.previous),parseFloat(this.current))),this.previous=null,this.display=this.current},shuffle:function(){this.numbers.sort((function(){return Math.random()-.5}))},clear:function(){this.display="",this.current=""},del:function(){this.display=this.display.substring(0,this.current.length-1),this.current=this.current.substring(0,this.current.length-1)}}}),Jt=zt,Kt=(n("667c"),Object(l["a"])(Jt,Lt,qt,!1,null,null,null)),Wt=Kt.exports,Bt={components:{Calculator:Wt},data:function(){return{}},methods:{function:function(){}}},Qt=Bt,Xt=Object(l["a"])(Qt,It,Rt,!1,null,null,null),Ut=Xt.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-4xl text-center py-10"},[t._v("Ledger A")]),n("div",{staticClass:"text-xs text-center flex flex-col w-1/2 mx-auto mb-20",domProps:{innerHTML:t._s(t.quote)}}),n("LedgerA")],1)},Yt=[],Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-2xl",domProps:{textContent:t._s(t.title)}}),n("div",{staticClass:"flex flex-col items-center"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.addEntry(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newEntry.date,expression:"newEntry.date"}],attrs:{type:"date",placeholder:"Date"},domProps:{value:t.newEntry.date},on:{input:function(e){e.target.composing||t.$set(t.newEntry,"date",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newEntry.description,expression:"newEntry.description"}],attrs:{type:"text",placeholder:"Description"},domProps:{value:t.newEntry.description},on:{input:function(e){e.target.composing||t.$set(t.newEntry,"description",e.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.newEntry.currency,expression:"newEntry.currency"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newEntry,"currency",e.target.multiple?n:n[0])}}},t._l(t.currencies,(function(e){return n("option",{key:e.id,domProps:{value:e.sign}},[t._v(" "+t._s(e.label)+" ")])})),0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newEntry.amount,expression:"newEntry.amount"}],attrs:{type:"text",placeholder:"Amount"},domProps:{value:t.newEntry.amount},on:{input:function(e){e.target.composing||t.$set(t.newEntry,"amount",e.target.value)}}}),n("button",{staticClass:"bg-white text-xs hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow",on:{submit:function(e){return e.preventDefault(),t.addEntry(e)}}},[t._v(" Add Entry ")]),n("button",{staticClass:"bg-white text-xs hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow",on:{submit:function(e){return e.preventDefault(),t.clearEntryForm(e)}}},[t._v(" Cancel ")])]),n("table",{staticClass:"table-auto w-1/2"},[t._m(0),n("tbody",[n("transition-group",{attrs:{name:"slide-up",tag:"td",appear:""}},t._l(t.entries,(function(e){return n("tr",{key:e.id},[n("td",{staticClass:"border px-4 py-2",domProps:{textContent:t._s(e.date)}}),n("td",{staticClass:"border px-4 py-2",domProps:{textContent:t._s(e.description)}}),n("td",{staticClass:"border px-4 py-2"},[t._v(t._s(e.currency)+" "+t._s(e.amount))]),n("td",{staticClass:"border px-4 py-2",on:{click:function(n){return t.deleteEntry(e)}}},[n("button",[t._v("Delete")])])])})),0)],1)])])])},te=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("th",{staticClass:"px-4 py-2"},[t._v("Date")]),n("th",{staticClass:"px-4 py-2"},[t._v("Description")]),n("th",{staticClass:"px-4 py-2"},[t._v("Amount")])])}],ee=(n("a434"),n("d3b7"),n("ddb0"),{data:function(){return{title:"Record Transation:",currencies:[{id:1,sign:"$",label:"CAD"},{id:2,sign:"€",label:"Euro"}],newEntry:{description:"",amount:"",currency:"",date:""},entries:[{id:1,description:"Take Out Burritos",amount:10.4,currency:"$",date:"10/05/2020"},{id:2,description:"Clothes from American Eagle",amount:70.48,currency:"$",date:"05/05/2020"}]}},methods:{addEntry:function(){this.newEntry.id=Math.floor(Math.random()*Math.floor(100))+1,this.entries.push(this.newEntry),this.clearEntryForm()},clearEntryForm:function(){this.newEntry={description:"",amount:"",currency:"",date:""}},deleteEntry:function(t){var e=this.entries.indexOf(t);this.entries.splice(e,1)}}}),ne=ee,ae=(n("8eac"),Object(l["a"])(ne,Zt,te,!1,null,null,null)),re=ae.exports,ie={components:{LedgerA:re},data:function(){return{quote:"<strong>“No less than his business life, Rockefeller’s private life was ruled by bookkeeping entries. Since he found numbers so clean and soothing in their simplicity, he applied the business principles…to his own personaleconomy. When he started working in September 1855, he paid a dime for asmall red book, anointed Ledger A, in which he minutely recorded hisreceipts and expenditures. Many of his young contemporaries kept suchrecord books but seldom with such exacting care. For the remainder of hislife, Rockefeller treated Ledger A as his most sacred relic.”</strong> (Chernow,Ron (2007-12-18). Titan: The Life of John D. Rockefeller, Sr. (KindleLocations 1321-1325). Knopf Doubleday Publishing Group. Kindle Edition.)"}},methods:{function:function(){}}},oe=ie,se=Object(l["a"])(oe,Vt,Yt,!1,null,null,null),le=se.exports,ce=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-4xl text-center py-10"},[t._v("Habit Tracker - GitHub Style")]),n("HabitTracker")],1)},ue=[],de=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-col items-center"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.addEntry(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newDailyGoal.description,expression:"newDailyGoal.description"}],attrs:{type:"text",placeholder:"Description"},domProps:{value:t.newDailyGoal.description},on:{input:function(e){e.target.composing||t.$set(t.newDailyGoal,"description",e.target.value)}}}),n("button",{staticClass:"bg-white text-xs hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow",on:{submit:function(e){return e.preventDefault(),t.addEntry(e)}}},[t._v(" Set Daily Goals ")])]),n("transition-group",{attrs:{name:"slide-up",tag:"ul",appear:""}},t._l(t.dailyGoals,(function(e){return n("li",{key:e.id},[n("button",{staticClass:"px-2 py-2",on:{click:function(n){return t.deleteDailyGoal(e)}}},[t._v("X")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedItems,expression:"checkedItems"}],attrs:{type:"checkbox",name:"completed"},domProps:{checked:Array.isArray(t.checkedItems)?t._i(t.checkedItems,null)>-1:t.checkedItems},on:{change:function(e){var n=t.checkedItems,a=e.target,r=!!a.checked;if(Array.isArray(n)){var i=null,o=t._i(n,i);a.checked?o<0&&(t.checkedItems=n.concat([i])):o>-1&&(t.checkedItems=n.slice(0,o).concat(n.slice(o+1)))}else t.checkedItems=r}}}),t._v(" "+t._s(e.description)+" ")])})),0),n("div",{staticClass:"flex"},[t._l(t.trackedDays,(function(t){return n("div",{key:t.day,class:["card my-2 mx-2 w-10 h-10 rounded-lg",1===t.goalsCompleted?"bg-green-200":"bg-gray-400",2===t.goalsCompleted?"bg-green-300":"bg-gray-400",3===t.goalsCompleted?"bg-green-600":"bg-gray-400"]})})),n("div",[t._v("create set width, add nice transitional delay to coloured backgrounds ")])],2)],1)])},pe=[],fe={data:function(){return{title:"",newDailyGoal:{id:"",description:"",completed:!1},dailyGoals:[{id:1,description:"Read for 15mins",completed:!1},{id:2,description:"Push To GitHub",completed:!1},{id:3,description:"Workout or Walk",completed:!1}],trackedDays:[{day:3,dailyGoals:3,goalsCompleted:1},{day:1,dailyGoals:3,goalsCompleted:3},{day:2,dailyGoals:3,goalsCompleted:2},{day:4,dailyGoals:3,goalsCompleted:0},{day:5,dailyGoals:3,goalsCompleted:3},{day:6,dailyGoals:3,goalsCompleted:3},{day:7,dailyGoals:3,goalsCompleted:2},{day:8,dailyGoals:3,goalsCompleted:3},{day:9,dailyGoals:3,goalsCompleted:1},{day:10,dailyGoals:3,goalsCompleted:2},{day:3,dailyGoals:3,goalsCompleted:1},{day:1,dailyGoals:3,goalsCompleted:3},{day:2,dailyGoals:3,goalsCompleted:2},{day:4,dailyGoals:3,goalsCompleted:0},{day:5,dailyGoals:3,goalsCompleted:3},{day:6,dailyGoals:3,goalsCompleted:3},{day:7,dailyGoals:3,goalsCompleted:2},{day:8,dailyGoals:3,goalsCompleted:3},{day:9,dailyGoals:3,goalsCompleted:1},{day:10,dailyGoals:3,goalsCompleted:2}]}},methods:{addEntry:function(){this.newDailyGoal.id=Math.floor(Math.random()*Math.floor(100))+1,this.dailyGoals.push(this.newDailyGoal),this.clearForm()},clearForm:function(){this.newDailyGoal={id:"",description:"",completed:!1}},deleteDailyGoal:function(t){var e=this.dailyGoals.indexOf(t);this.dailyGoals.splice(e,1)}},mounted:function(){pt["a"].from(".card",{duration:.5,opacity:0,scale:0,y:200,ease:"power1",stagger:{each:.1,from:"center"}})}},me=fe,ve=(n("0afc"),Object(l["a"])(me,de,pe,!1,null,null,null)),he=ve.exports,ye={components:{HabitTracker:he},data:function(){return{}},methods:{function:function(){}}},be=ye,ge=Object(l["a"])(be,ce,ue,!1,null,null,null),xe=ge.exports;a["a"].use(d["a"]);var Ce=new d["a"]({mode:"history",routes:[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:P},{path:"/animations",name:"animations",component:Nt},{path:"/crazy-calculator",name:"calculator",component:Ut},{path:"/ledger-A",name:"ledger-a",component:le},{path:"/habit-tracker",name:"habit-tracker",component:xe}]});n("557b");a["a"].config.productionTip=!1,new a["a"]({router:Ce,render:function(t){return t(u)}}).$mount("#app")},"667c":function(t,e,n){"use strict";var a=n("bc62"),r=n.n(a);r.a},6975:function(t,e,n){t.exports=n.p+"img/silverSurfer.8d59b759.png"},"85ec":function(t,e,n){},"89d3":function(t,e,n){},"8d14":function(t,e,n){},"8eac":function(t,e,n){"use strict";var a=n("37ab"),r=n.n(a);r.a},"8ec6":function(t,e,n){"use strict";var a=n("0027"),r=n.n(a);r.a},"993c":function(t,e,n){t.exports=n.p+"img/quicksilver.bf0b9af0.png"},aa82:function(t,e,n){},bc62:function(t,e,n){},c621:function(t,e,n){"use strict";var a=n("89d3"),r=n.n(a);r.a},f201:function(t,e,n){},fab7:function(t,e,n){"use strict";var a=n("aa82"),r=n.n(a);r.a}});
//# sourceMappingURL=app.67c10510.js.map