webpackJsonp([0],{0:function(t,e){},"3T/b":function(t,e){},"4+hh":function(t,e){},AnE8:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("md-tabs",{attrs:{"md-alignment":"fixed"}},[e("md-tab",{attrs:{id:"tab-home","md-label":"Pokemons"}},[e("PokeArc")],1),this._v(" "),e("md-tab",{attrs:{id:"tab-pages","md-label":"Find Pokemon"}}),this._v(" "),e("md-tab",{attrs:{id:"tab-posts","md-label":"Favorites"}}),this._v(" "),e("md-tab",{attrs:{id:"tab-favorites","md-label":"About"}})],1)],1)},staticRenderFns:[]},o=n("VU/8")({name:"app"},i,!1,function(t){n("3T/b")},null,null).exports,a={name:"PokeArc",data:function(){return{pokemons:[],next:"",limit:5,offset:0}},methods:{getPokemons:function(t,e){this.offset+=e;var n="https://pokeapi.co/api/v2/pokemon/?limit="+t+"&offset="+this.offset;this.$http.get(n).then(function(t){for(var e=0;e<this.limit;)this.getPokemon(t.body.results[e].url),e++})},getMorePokemons:function(){this.showProgressBar(),this.getPokemons(5,5)},getPokemon:function(t){this.$http.get(t).then(function(t){this.pokemons.push(t.body)}).then(function(){this.pokemons.length===this.limit+this.offset&&this.hideProgressBar()})},hideProgressBar:function(){document.getElementById("progress-bar").style.visibility="hidden"},showProgressBar:function(){document.getElementById("progress-bar").style.visibility="visible"}},beforeMount:function(){this.getPokemons(5,0)}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("md-progress-bar",{attrs:{id:"progress-bar","md-mode":"indeterminate"}}),t._v(" "),n("md-content",{staticClass:"md-scrollbar"},[n("ul",t._l(t.pokemons,function(e){return n("li",[n("md-card",{staticClass:"md-elevation-20"},[n("md-card-media",[n("img",{staticStyle:{height:"180px",width:"180px"},attrs:{src:e.sprites.front_default,alt:"People"}})]),t._v(" "),n("md-card-header",[n("div",{staticClass:"md-title"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"md-subhead"},[t._v("Subtitle here")])]),t._v(" "),n("md-card-expand",[n("md-card-actions",{attrs:{"md-alignment":"space-between"}},[n("div",[n("md-button",{attrs:{"md-dense":"","md-raised":""}},[t._v("Action")]),t._v(" "),n("md-button",{attrs:{"md-dense":"","md-raised":""}},[t._v("Action")])],1),t._v(" "),n("md-card-expand-trigger",[n("md-button",{staticClass:"md-icon-button"},[n("md-icon",[t._v("keyboard_arrow_down")])],1)],1)],1),t._v(" "),n("md-card-expand-content",[n("md-card-content",[n("span",{staticClass:"md-body-2"},[t._v("\n                  Weight: "+t._s(e.weight)+"\n                  "),n("br"),t._v("\n                  Base experience: "+t._s(e.base_experience)+"\n                ")])])],1)],1)],1)],1)})),t._v(" "),n("md-button",{staticClass:"md-dense md-raised md-primary",on:{click:function(e){t.getMorePokemons()}}},[t._v("Load more Pokemons")])],1)],1)},staticRenderFns:[]},r=n("VU/8")(a,d,!1,function(t){n("cUfy")},"data-v-093dd204",null).exports,m=n("ORbq"),c=n("Lgyv"),l=n.n(c);n("4+hh"),n("AnE8");s.default.use(l.a),s.default.use(m.a),s.default.component("PokeArc",r),s.default.config.productionTip=!1,new s.default({el:"#app",template:"<App/>",components:{App:o}})},cUfy:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fa16d3d2de2a680b90b7.js.map