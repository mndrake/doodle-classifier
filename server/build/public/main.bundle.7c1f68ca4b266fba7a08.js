!function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],p=0,f=[];p<s.length;p++)i=s[p],a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([109,1]),n()}({109:function(e,t,n){e.exports=n(265)},265:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(18),i=n.n(o),s=n(2),l=n.n(s),c=n(6),u=n.n(c),p=n(98),f=n.n(p),h=n(95),d=n.n(h),m=n(96),b=n.n(m),y=n(101),v=n.n(y),g=n(55),w=n.n(g),E=n(57),O=n.n(E),k=n(19),S=n.n(k),P=n(100),j=n.n(P),C=n(51),x=n.n(C),D=n(104),_=n.n(D),M=n(108),B=n.n(M),X=n(106),T=n.n(X),N=n(107),Y=n.n(N),W=n(105),A=n.n(W),R=n(54),I=n.n(R),L=n(97),G=n.n(L),q=n(99),J=n.n(q),z=n(56),H=n.n(z),U=n(102),F=n.n(U),K=n(103),V=n.n(K),Q=n(5),Z=n.n(Q),$=n(91),ee=n.n($),te=n(93),ne=n.n(te),re=n(29),ae=n.n(re),oe=n(92),ie=n.n(oe),se=n(52),le=n.n(se),ce=n(27),ue=n.n(ce);function pe(e){var t=e.classes;return a.a.createElement(ue.a,{className:t.root},a.a.createElement(ee.a,{className:t.table},a.a.createElement(ie.a,null,a.a.createElement(le.a,null,a.a.createElement(ae.a,null,"Label"),a.a.createElement(ae.a,{align:"right"},"Probability"))),a.a.createElement(ne.a,null,e.data.map(function(e){return a.a.createElement(le.a,{key:e.id},a.a.createElement(ae.a,{component:"th",scope:"row"},e.label),a.a.createElement(ae.a,{align:"right"},e.probability.toFixed(4)))}))))}pe.propTypes={classes:l.a.object.isRequired,data:l.a.arrayOf(l.a.shape({id:l.a.number,label:l.a.string,probability:l.a.number}))};var fe=Z()({root:{width:"60%",overflowX:"auto"},table:{minWidth:300,maxWidth:500}})(pe);function he(e){return(he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){ge(e,t,n[t])})}return e}function me(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function be(e){return(be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e,t){return(ye=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ve(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var we=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return r=this,a=(e=be(t)).call.apply(e,[this].concat(i)),n=!a||"object"!==he(a)&&"function"!=typeof a?ve(r):a,ge(ve(ve(n)),"isPainting",!1),ge(ve(ve(n)),"line",[]),ge(ve(ve(n)),"prevPos",{offsetX:0,offsetY:0}),ge(ve(ve(n)),"onMouseDown",function(e){var t=e.nativeEvent,r=t.offsetX,a=t.offsetY;n.isPainting=!0,n.prevPos={offsetX:r,offsetY:a}}),ge(ve(ve(n)),"onMouseMove",function(e){var t=e.nativeEvent;if(n.isPainting){var r={offsetX:t.offsetX,offsetY:t.offsetY},a={start:de({},n.prevPos),stop:de({},r)};n.line=n.line.concat(a),n.paint(n.prevPos,r)}}),ge(ve(ve(n)),"endPaintEvent",function(){if(n.isPainting){n.isPainting=!1;var e=[],t=[];if(n.line.length>0){e.push(n.line[0].start.offsetX),t.push(n.line[0].start.offsetY);for(var r=0;r<n.line.length;r++)e.push(n.line[r].stop.offsetX),t.push(n.line[r].stop.offsetY);n.line=[],n.props.onStroke([e,t])}}}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ye(e,t)}(t,a.a.Component),n=t,(r=[{key:"paint",value:function(e,t){var n=t.offsetX,r=t.offsetY,a=e.offsetX,o=e.offsetY;this.ctx.beginPath(),this.ctx.strokeStyle="#2c33ee",this.ctx.moveTo(a,o),this.ctx.lineTo(n,r),this.ctx.stroke(),this.prevPos={offsetX:n,offsetY:r}}},{key:"componentDidMount",value:function(){this.canvas.width=this.props.width,this.canvas.height=this.props.height,this.ctx=this.canvas.getContext("2d"),this.ctx,this.ctx.lineJoin="round",this.ctx.lineCap="round",this.ctx.lineWidth=5,this.updateCanvas()}},{key:"componentDidUpdate",value:function(){this.updateCanvas()}},{key:"updateCanvas",value:function(){this.ctx.clearRect(0,0,this.props.width,this.props.height);for(var e=0;e<this.props.strokes.length;e++)for(var t=1;t<this.props.strokes[e][0].length;t++){var n={offsetX:this.props.strokes[e][0][t-1],offsetY:this.props.strokes[e][1][t-1]},r={offsetX:this.props.strokes[e][0][t],offsetY:this.props.strokes[e][1][t]};this.paint(n,r)}}},{key:"render",value:function(){var e=this;return a.a.createElement("canvas",{ref:function(t){return e.canvas=t},style:{background:"lightgrey"},onMouseDown:this.onMouseDown,onMouseLeave:this.endPaintEvent,onMouseUp:this.endPaintEvent,onMouseMove:this.onMouseMove})}}])&&me(n.prototype,r),o&&me(n,o),t}();we.propTypes={height:l.a.number,width:l.a.number,onStroke:l.a.func.isRequired,strokes:l.a.array},we.defaultProps={height:256,width:256,strokes:[]};var Ee=we,Oe=n(53),ke=n.n(Oe),Se=n(50),Pe=n.n(Se),je=n(28),Ce=n.n(je),xe=n(94),De=n.n(xe);function _e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Me(e,t,n[t])})}return e}function Me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Be=Ce()({typography:{useNextVariants:!0}}),Xe=function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:_e({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Me({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:7*e.spacing.unit},e.breakpoints.up("sm"),{width:9*e.spacing.unit}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing.unit,height:"100vh",overflow:"auto"},chartContainer:{marginLeft:-22},tableContainer:{height:320},h5:{marginBottom:2*e.spacing.unit}}};var Te=function(e){return function(e){return function(t){return a.a.createElement(Pe.a,{theme:Be},a.a.createElement(De.a,null),a.a.createElement(e,t))}}(Z()(Xe)(e))};function Ne(e){return(Ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ye(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function We(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ae(e){return(Ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Re(e,t){return(Re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ge=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return r=this,a=(e=Ae(t)).call.apply(e,[this].concat(i)),n=!a||"object"!==Ne(a)&&"function"!=typeof a?Ie(r):a,Le(Ie(Ie(n)),"state",{openDrawer:!1,openDialog:!1,words:[],predictions:[],strokes:[]}),Le(Ie(Ie(n)),"handleAddStroke",function(e){var t={strokes:[].concat(Ye(n.state.strokes),[e]),n:4};ke.a.post("/api/doodle-prediction",t).then(function(e){n.setState({predictions:e.data,strokes:t.strokes})})}),Le(Ie(Ie(n)),"handleClearCanvas",function(){n.setState({predictions:[],strokes:[]})}),Le(Ie(Ie(n)),"handleWordClick",function(){ke.a.get("/api/sample-words/5").then(function(e){console.log("handleWordClick"),console.log(e),n.setState({openDialog:!0,words:e.data})})}),Le(Ie(Ie(n)),"handleDrawerOpen",function(){n.setState({openDrawer:!0})}),Le(Ie(Ie(n)),"handleDrawerClose",function(){n.setState({openDrawer:!1})}),Le(Ie(Ie(n)),"handleWordDialogClose",function(){n.setState({openDialog:!1})}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Re(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props.classes;return a.a.createElement("div",{className:e.root},a.a.createElement(d.a,{position:"absolute",className:u()(e.appBar,this.state.openDrawer&&e.appBarShift)},a.a.createElement(b.a,{disableGutters:!this.state.openDrawer,className:e.toolbar},a.a.createElement(I.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:u()(e.menuButton,this.state.openDrawer&&e.menuButtonHidden)},a.a.createElement(G.a,null)),a.a.createElement(S.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Doodle Guess"))),a.a.createElement(f.a,{variant:"permanent",classes:{paper:u()(e.drawerPaper,!this.state.openDrawer&&e.drawerPaperClose)},open:this.state.openDrawer},a.a.createElement("div",{className:e.toolbarIcon},a.a.createElement(I.a,{onClick:this.handleDrawerClose},a.a.createElement(J.a,null))),a.a.createElement(j.a,null),a.a.createElement(v.a,null,a.a.createElement(w.a,{button:!0,onClick:this.handleClearCanvas},a.a.createElement(H.a,null,a.a.createElement(F.a,null)),a.a.createElement(O.a,{primary:"Clear Sketchpad"})),a.a.createElement(w.a,{button:!0,onClick:this.handleWordClick},a.a.createElement(H.a,null,a.a.createElement(V.a,null)),a.a.createElement(O.a,{primary:"Sample Words"}))," ")),a.a.createElement("main",{className:e.content},a.a.createElement(qe,{open:this.state.openDialog,words:this.state.words,onClose:this.handleWordDialogClose}),a.a.createElement("div",{className:e.appBarSpacer}),a.a.createElement(S.a,{variant:"h4",gutterBottom:!0,component:"h2"},"Sketchpad"),a.a.createElement(S.a,{component:"div"},a.a.createElement(Ee,{ref:"canvas",onStroke:this.handleAddStroke,strokes:this.state.strokes})),a.a.createElement(S.a,{variant:"h4",gutterBottom:!0,component:"h2"},"Predictions"),a.a.createElement("div",{className:e.tableContainer},a.a.createElement(fe,{data:this.state.predictions}))))}}])&&We(n.prototype,r),o&&We(n,o),t}();function qe(e){var t=e.words,n=e.open,r=e.onClose,o=t.map(function(e){return a.a.createElement("li",{key:e},e)});return a.a.createElement(_.a,{open:n,onClose:r},a.a.createElement(A.a,null,"Try Drawing"),a.a.createElement(T.a,null,a.a.createElement(Y.a,null,o)),a.a.createElement(B.a,null,a.a.createElement(x.a,{color:"primary",onClick:r},"OK")))}Ge.propTypes={classes:l.a.object.isRequired};var Je=Te(Ge);i.a.render(a.a.createElement(Je,null),document.getElementById("root")||document.createElement("div"))}});
//# sourceMappingURL=main.bundle.7c1f68ca4b266fba7a08.js.map