(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{267:function(t,e,n){"use strict";var o={name:"Location",props:{location:{type:Object,default:function(){}}}},l=n(29),r={name:"Map",components:{Market:Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("l-marker",{attrs:{"lat-lng":[t.location.lat,t.location.lng],title:t.location.title}},[n("l-popup",[n("div",{staticClass:"description"},[t._v("\n      "+t._s(t.location.description)+"\n    ")]),t._v(" "),n("a",{attrs:{href:"/locations/"+t.location.id}},[t._v("\n      read more\n    ")])])],1)},[],!1,null,null,null).exports},props:{locations:{type:Array,default:function(){return[]}}},head:function(){return{title:"Pink Film - Locations"}}},c=Object(l.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"80vh",position:"relative","z-index":"1"},attrs:{id:"map-wrap"}},[e("l-map",{attrs:{zoom:6,center:[40.4183083,-3.70275]}},[e("l-tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),this._v(" "),this._l(this.locations,function(t){return e("Market",{key:t.id,attrs:{location:t}})})],2)],1)},[],!1,null,null,null);e.a=c.exports},270:function(t,e,n){"use strict";var o=n(105),l=n.n(o),r={name:"New",data:function(){return{dialog:!1,location:{lat:"",lng:"",title:"",description:"",type:""}}},methods:{submit:function(){var t=this;l.a.post("https://pinkfilm.dev/api/locations/",this.location).then(function(){t.dialog=!1})}}},c=n(29),d=n(61),v=n.n(d),f=n(100),m=n(290),x=n(344),_=n(273),h=n(99),k=n(346),y=n(96),w=n(101),V=n(97),C=n(340),$=n(242),j=n(347),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){return e.on,[n("v-btn",{staticStyle:{"z-index":"99999"},attrs:{fab:"",dark:"",fixed:"",bottom:"",right:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[n("v-icon",[t._v("add")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("New location")])]),t._v(" "),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-text-field",{attrs:{label:"Lat*",required:""},model:{value:t.location.lat,callback:function(e){t.$set(t.location,"lat",e)},expression:"location.lat"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-text-field",{attrs:{label:"Lng*",required:""},model:{value:t.location.lng,callback:function(e){t.$set(t.location,"lng",e)},expression:"location.lng"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.location.title,callback:function(e){t.$set(t.location,"title",e)},expression:"location.title"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Description",required:""},model:{value:t.location.description,callback:function(e){t.$set(t.location,"description",e)},expression:"location.description"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-select",{attrs:{items:["House","Street"],label:"Type*",required:""}})],1)],1)],1),t._v(" "),n("small",[t._v("* required field")])],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"pink lighten-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n            Close\n          ")]),t._v(" "),n("v-btn",{attrs:{type:"submit",color:"pink darken-1",dark:""}},[t._v("\n            Save\n          ")])],1)],1)])],1)],1)},[],!1,null,null,null);e.a=component.exports;v()(component,{VBtn:f.a,VCard:m.a,VCardActions:x.a,VCardText:x.b,VCardTitle:_.a,VContainer:h.a,VDialog:k.a,VFlex:y.a,VIcon:w.a,VLayout:V.a,VSelect:C.a,VSpacer:$.a,VTextField:j.a})},345:function(t,e,n){"use strict";n.r(e);n(60);var o=n(13),l=n(105),r=n.n(l),c=n(267),d=n(270),v={components:{Map:c.a,New:d.a},asyncData:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("https://pinkfilm.dev/api/locations");case 2:return e=t.sent,n=e.data,t.abrupt("return",{locations:n});case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},f=n(29),component=Object(f.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Map",{attrs:{locations:this.locations}}),this._v(" "),e("New")],1)},[],!1,null,null,null);e.default=component.exports}}]);