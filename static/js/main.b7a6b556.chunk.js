(this["webpackJsonpshopify-intern"]=this["webpackJsonpshopify-intern"]||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(11),a=n.n(i),r=(n(54),n(55),n(56),n(39)),o=n(9),j=n(77),l=n(78),b=n(47),u=n(83),d=n(81),h=n(74),O=n(29),m=n(14),x=n(85),f=n(1),p=function(e){var t=e.searchProgress;return Object(f.jsx)(x.a,{now:Math.round(100*t.get())})},v=function(e){var t=e.title,n=e.setTitle,c=e.handleSubmit,s=e.searchProgress;return Object(f.jsxs)(u.a,{className:"mt-4",children:[Object(f.jsxs)(u.a.Body,{children:[Object(f.jsx)(u.a.Title,{children:"Movie Search"}),Object(f.jsx)(d.a,{onSubmit:c,children:Object(f.jsx)(d.a.Row,{children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(d.a.Control,{placeholder:"Lookup Movies by Title",value:t,onChange:function(e){return n(e.target.value)}}),Object(f.jsx)(h.a.Append,{children:Object(f.jsx)(h.a.Text,{onClick:c,className:"ripple",style:{cursor:"pointer"},children:Object(f.jsx)(m.a,{icon:O.b})})})]})})})]}),Object(f.jsx)(p,{searchProgress:s})]})},g=n(46),y=n(84),N=n(79),w=n(75),S=function(e){var t=e.movie,n=e.nominations,s=e.setNominations,i=Object(c.useState)({}),a=Object(o.a)(i,2),j=a[0],l=a[1];Object(c.useEffect)((function(){fetch("https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?type=movie&i=".concat(t.imdbID,"&apikey=").concat("41227138")).then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]);return Object(f.jsx)(u.a,{className:"resultcard",children:Object(f.jsxs)("div",{className:"d-flex justify-content-start",children:["N/A"===t.Poster?Object(f.jsx)(m.a,{icon:O.a,className:"resultcard-imagenotfound ml-2"}):Object(f.jsx)("img",{src:t.Poster,alt:"poster",style:{width:"8rem"}}),Object(f.jsxs)("div",{className:"pt-2 pl-2 moviecard-details d-flex flex-column justify-content-between",children:[Object(f.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{className:"moviecard-title",children:[t.Title," "]}),Object(f.jsxs)("span",{className:"moviecard-year",children:["(",t.Year,")"]})]}),Object(f.jsx)("p",{className:"mr-2",children:function(){var e,t=null===(e=j.Ratings)||void 0===e?void 0:e.findIndex((function(e){return"Internet Movie Database"===e.Source}));return t>=0?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m.a,{icon:O.c,className:"gold"}),j.Ratings[t].Value]}):null}()})]}),Object(f.jsxs)("div",{className:"mb-2 mr-2 d-flex justify-content-between",children:[Object(f.jsx)(N.a,{trigger:["hover","focus"],delay:{hide:300},placement:"top",overlay:function(e){return Object(f.jsxs)(y.a,Object(g.a)(Object(g.a)({},e),{},{children:[Object(f.jsx)(y.a.Title,{children:t.Title}),Object(f.jsxs)(y.a.Content,{children:[Object(f.jsxs)("p",{children:["Directed by: ",j.Director]}),Object(f.jsxs)("p",{children:["Starring: ",j.Actors]}),Object(f.jsx)("p",{children:j.Plot}),Object(f.jsx)("p",{children:"".concat(j.Rated," | ").concat(j.Runtime," | ").concat(j.Genre," | ").concat(j.Released," (").concat(j.Country,")")})]})]}))},children:Object(f.jsx)("div",{children:Object(f.jsx)(w.a,{children:"More Details"})})}),n.some((function(e){return e.imdbID===t.imdbID}))?Object(f.jsx)(w.a,{className:"btn-secondary",disabled:!0,children:"Nominate"}):Object(f.jsx)(w.a,{className:"btn-secondary",onClick:function(){return s([].concat(Object(r.a)(n),[t]))},children:"Nominate"})]})]})]})})},C=n(86),k=function(e){var t=e.pageCount,n=e.page,s=e.setPage,i=Object(c.useState)(1),a=Object(o.a)(i,2),r=a[0],j=a[1];return Object(f.jsx)(C.a,{children:function(){for(var e,c=[],i=function(e){c.push(Object(f.jsx)(C.a.Item,{active:n===e,onClick:function(){s(e),j(e)},children:e},e))},a=1;a<=t;a++)i(a);return t<=5?c:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(C.a.First,{onClick:function(){s(1),j(1)}}),Object(f.jsx)(C.a.Prev,{onClick:function(){n>1&&(s(n-1),j(n-1))}}),r>5?Object(f.jsx)(C.a.Ellipsis,{onClick:function(){return j(r-5)}}):Object(f.jsx)(C.a.Ellipsis,{disabled:!0}),(e=c,r%5===0?e.slice(r-5,r):e.slice(r-r%5,r+5-r%5)),r+r%5<t?Object(f.jsx)(C.a.Ellipsis,{onClick:function(){return j(r+5)}}):Object(f.jsx)(C.a.Ellipsis,{disabled:!0}),Object(f.jsx)(C.a.Next,{onClick:function(){n<t&&(s(n+1),j(n+1))}}),Object(f.jsx)(C.a.Last,{onClick:function(){s(t),j(t)}})]})}()})},F=function(e){var t=e.results,n=e.nominations,s=e.setNominations,i=Object(c.useState)(1),a=Object(o.a)(i,2),r=a[0],j=a[1];Object(c.useEffect)((function(){j(1)}),[t]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{children:"Results"}),Object(f.jsx)("div",{className:"resultslist",children:t[r-1].map((function(e,t){return Object(f.jsx)(S,{movie:e,nominations:n,setNominations:s},e.imdbID+t)}))}),Object(f.jsx)("div",{className:"d-flex justify-content-center mt-2",children:Object(f.jsx)(k,{pageCount:t.length,page:r,setPage:j})})]})},T=n(82),I=function(e){var t=e.nominations,n=e.setNominations;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{children:"Nominations"}),Object(f.jsx)(T.a,{children:t.map((function(e,c){return Object(f.jsx)(T.a.Item,{children:Object(f.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(f.jsxs)("p",{style:{paddingTop:"1rem"},children:[e.Title,Object(f.jsxs)("span",{className:"moviecard-year",children:[" (",e.Year,")"]})]}),Object(f.jsx)(w.a,{className:"btn-danger mh-40",style:{marginTop:"0.5rem"},onClick:function(){return function(e){var c=t.filter((function(t){return t.imdbID!==e}));n(c)}(e.imdbID)},children:"Remove"})]})},e+c)}))})]})},D=n(76),P=function(e){var t=e.showFailedSearch,n=e.setShowFailedSearch,c=e.title;return t?Object(f.jsxs)(D.a,{variant:"danger",onClose:function(){return n(!1)},dismissible:!0,children:["No results found for '",c,"'"]}):null},R=function(e){var t=e.showSuccessfulSearch,n=e.setShowSuccessfulSearch,c=e.title,s=e.numResults;return t?Object(f.jsxs)(D.a,{variant:"success",onClose:function(){return n(!1)},dismissible:!0,children:[s," ",1===s?"movie":"movies"," found for '",c,"'"]}):null},E=n(49),M=n.n(E),B=n(48),L=n.n(B),A=n(80),Y=function(e){var t=e.showCelebration,n=e.setShowCelebration,c=M()(),s=c.width,i=c.height;return Object(f.jsxs)(f.Fragment,{children:[t&&Object(f.jsx)(L.a,{width:s,height:i}),Object(f.jsxs)(A.a,{show:t,onHide:function(){return n(!1)},children:[Object(f.jsx)(A.a.Header,{closeButton:!0,children:Object(f.jsx)(A.a.Title,{children:"You've Made 5 Nominations!"})}),Object(f.jsx)(A.a.Body,{children:"Thank you for your nominations. The academy looks forward to reviewing your selections."}),Object(f.jsx)(A.a.Footer,{children:Object(f.jsx)(w.a,{variant:"secondary",onClick:function(){return n(!1)},children:"Close"})})]})]})};var H=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)([]),a=Object(o.a)(i,2),u=a[0],d=a[1],h=Object(c.useState)(!1),O=Object(o.a)(h,2),m=O[0],x=O[1],p=Object(c.useState)(!1),g=Object(o.a)(p,2),y=g[0],N=g[1],w=Object(c.useState)(""),S=Object(o.a)(w,2),C=S[0],k=S[1],T=Object(c.useState)(""),D=Object(o.a)(T,2),E=D[0],M=D[1],B=Object(c.useState)([]),L=Object(o.a)(B,2),A=L[0],H=L[1],J=Object(c.useState)(!1),G=Object(o.a)(J,2),V=G[0],q=G[1],z=function(e){var t=Object(c.useState)(e),n=Object(o.a)(t,2),s=n[0],i=n[1],a=s;return{get:function(){return a},set:function(e){return a=e,i(e),a}}}(0);Object(c.useEffect)((function(){5===A.length&&q(!0)}),[A]);var K=function(e){0===e.length?(d([]),M(n),N(!0),z.set(0)):(d(e),N(!1),k(n),x(!0))},Q=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];fetch("https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?type=movie&s=".concat(n,"&page=").concat(t,"&apikey=").concat("41227138")).then((function(e){return e.ok&&e.json()})).then((function(n){if("True"===n.Response)return c.push(Object(r.a)(n.Search)),z.set(10*c.length/parseInt(n.totalResults)),t++,e(t,c);K(c)}))};return Object(f.jsxs)(j.a,{className:"mt-4",children:[Object(f.jsx)(Y,{showCelebration:V,setShowCelebration:q}),Object(f.jsxs)(l.a,{className:"d-flex justify-content-between",children:[Object(f.jsx)("h1",{className:"darkgreen",children:"The Shoppies"}),Object(f.jsx)(P,{title:E,showFailedSearch:y,setShowFailedSearch:N}),Object(f.jsx)(R,{title:C,numResults:u.length>0&&10*(u.length-1)+u[u.length-1].length,showSuccessfulSearch:m,setShowSuccessfulSearch:x})]}),Object(f.jsx)(v,{title:n,setTitle:s,handleSubmit:function(e){e.preventDefault(),z.set(0),N(!1),x(!1),Q()},searchProgress:z}),Object(f.jsxs)(l.a,{children:[u.length>0&&Object(f.jsx)(b.a,{className:"mt-4",xs:12,sm:12,lg:6,children:Object(f.jsx)(F,{results:u,nominations:A,setNominations:H})}),A.length>0&&Object(f.jsx)(b.a,{className:"mt-4",children:Object(f.jsx)(I,{nominations:A,setNominations:H})})]})]})},J=function(){return Object(f.jsx)("div",{className:"topbar"})},G=n(34),V=function(){return Object(f.jsx)("footer",{className:"footer",children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(l.a,{className:"d-flex justify-content-center",children:Object(f.jsx)("h2",{className:"mt-4 foot-title",children:"Shopify Fall 2021 Frontend Developer Internship"})}),Object(f.jsx)(l.a,{className:"d-flex justify-content-center",children:Object(f.jsxs)("p",{children:["Powered by"," ",Object(f.jsx)(m.a,{icon:G.d,style:{color:"#5ec6e3"}})," ","React | Styled with"," ",Object(f.jsx)(m.a,{icon:G.a,style:{color:"#8c5ad8"}})," ","Bootstrap"]})}),Object(f.jsxs)(l.a,{className:"d-flex justify-content-center",children:[Object(f.jsx)("div",{className:"mr-4 footer-byline",children:Object(f.jsx)("p",{children:"Made by Ben Swanson \xa9 2021"})}),Object(f.jsxs)("div",{className:"ml-4",children:[Object(f.jsx)("a",{href:"mailto:bswan0002@gmail.com",children:"bswan0002@gmail.com"}),Object(f.jsx)("a",{href:"https://github.com/bswan0002/",children:Object(f.jsx)(m.a,{icon:G.b,className:"mx-4"})}),Object(f.jsx)("a",{href:"https://www.linkedin.com/in/bswan0002/",children:Object(f.jsx)(m.a,{icon:G.c})})]})]})]})})},q=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"body",children:[Object(f.jsx)(J,{}),Object(f.jsx)(H,{}),";"]}),Object(f.jsx)(V,{})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(q,{})}),document.getElementById("root")),z()}},[[69,1,2]]]);
//# sourceMappingURL=main.b7a6b556.chunk.js.map