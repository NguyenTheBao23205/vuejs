(function(e){function t(t){for(var n,s,l=t[0],o=t[1],i=t[2],d=0,m=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(m.length)m.shift()();return c.push.apply(c,i||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},c=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=o;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("nav",[a("router-link",{attrs:{to:"/"}},[e._v(" Home"),a("br")]),a("router-link",{attrs:{to:"/register"}},[e._v(" Register"),a("br")]),a("router-link",{attrs:{to:"/login"}},[e._v(" Login "),a("br")])],1),a("router-view"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("font-awesome-icon",{attrs:{icon:"home"}})],1),a("div",{staticClass:"col-md-6"},[a("HelloWorld",{attrs:{msg1:"Hello World!"}})],1),a("div",{staticClass:"col-md-6"},[a("WellCome",{attrs:{msg2:"Well come VueJS"}})],1),a("div",{staticClass:"col-md-12"},[a("Dem")],1),a("div",{staticClass:"col-md-6"},[a("User")],1)])],1)])},c=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("p",[e._v(e._s(e.msg1))])])},l=[],o={name:"HelloWorld",props:{msg1:String}},i=o,u=a("2877"),d=Object(u["a"])(i,s,l,!1,null,null,null),m=d.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wel"},[a("p",[e._v(e._s(e.msg2))])])},v=[],h={name:"Wellcome",props:{msg2:String}},f=h,_=Object(u["a"])(f,p,v,!1,null,null,null),g=_.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"panel panel-primary"},[e._m(0),a("div",{staticClass:"panel-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")])])])]),a("div",{staticClass:"panel panel-success"},[a("div",{staticClass:"panel-body"},[e._v("\n         My Name is : "+e._s(e.name)+"\n         "),a("br"),e._v("\n         My Email is : "+e._s(e.email)+"\n      ")])])])},k=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"panel-heading"},[a("h3",{staticClass:"panel-title"},[e._v("Add User")])])}],y={data:function(){return{name:"",email:""}}},N=y,C=Object(u["a"])(N,b,k,!1,null,null,null),x=C.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dem"},[a("p",[e._v("Số học sinh là: "+e._s(e.counter))]),a("button",{on:{click:function(t){e.counter+=1}}},[e._v("Add")])])},O=[],j={data:function(){return{counter:0}}},A=j,E=Object(u["a"])(A,w,O,!1,null,null,null),P=E.exports,$=(a("aaa6"),{name:"app",components:{HelloWorld:m,WellCome:g,User:x,Dem:P}}),S=$,B=Object(u["a"])(S,r,c,!1,null,null,null),W=B.exports,H=a("8c4f"),M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Home")]),a("div",{staticClass:"check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"bong-da",value:"Bóng đá"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"Bóng đá")>-1:e.checkedNames},on:{change:function(t){var a=e.checkedNames,n=t.target,r=!!n.checked;if(Array.isArray(a)){var c="Bóng đá",s=e._i(a,c);n.checked?s<0&&(e.checkedNames=a.concat([c])):s>-1&&(e.checkedNames=a.slice(0,s).concat(a.slice(s+1)))}else e.checkedNames=r}}}),a("label",{attrs:{for:"bong-da"}},[e._v("Bóng đá")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"cau-long",value:"Cầu lông"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"Cầu lông")>-1:e.checkedNames},on:{change:function(t){var a=e.checkedNames,n=t.target,r=!!n.checked;if(Array.isArray(a)){var c="Cầu lông",s=e._i(a,c);n.checked?s<0&&(e.checkedNames=a.concat([c])):s>-1&&(e.checkedNames=a.slice(0,s).concat(a.slice(s+1)))}else e.checkedNames=r}}}),a("label",{attrs:{for:"cau-long"}},[e._v("Cầu lông")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"bong-chuyen",value:"Bóng chuyền"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"Bóng chuyền")>-1:e.checkedNames},on:{change:function(t){var a=e.checkedNames,n=t.target,r=!!n.checked;if(Array.isArray(a)){var c="Bóng chuyền",s=e._i(a,c);n.checked?s<0&&(e.checkedNames=a.concat([c])):s>-1&&(e.checkedNames=a.slice(0,s).concat(a.slice(s+1)))}else e.checkedNames=r}}}),a("label",{attrs:{for:"bong-chuyen"}},[e._v("Bóng chuyền")]),a("br"),a("span",[e._v("Chọn môn thể thao bạn thích: "+e._s(e.checkedNames))])])])},J=[],T={data:function(){return{checkedNames:[]}}},U=T,D=Object(u["a"])(U,M,J,!1,null,null,null),L=D.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},V=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Register")])])}],q={},z=q,F=Object(u["a"])(z,R,V,!1,null,null,null),G=F.exports,I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},K=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Login")])])}],Q={},X=Q,Y=Object(u["a"])(X,I,K,!1,null,null,null),Z=Y.exports,ee=[{path:"/",component:L},{path:"/register",component:G},{path:"/login",component:Z}],te=ee,ae=a("ecee"),ne=a("c074"),re=a("ad3d");a("1f54"),a("ab8b");ae["c"].add(ne["a"]),n["a"].component("font-awesome-icon",re["a"]),n["a"].use(H["a"]);var ce=new H["a"]({routes:te});n["a"].config.productionTip=!1,new n["a"]({router:ce,render:function(e){return e(W)}}).$mount("#app")},aaa6:function(e,t,a){}});
//# sourceMappingURL=app.412e2a20.js.map