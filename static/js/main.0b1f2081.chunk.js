(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),s=a.n(r),o=a(1),l=a.n(o),m=a(5),i=a(2),u=(a(12),function(e){var t;return l.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(fetch(e));case 2:return t=a.sent,a.abrupt("return",t.json());case 4:case"end":return a.stop()}})}),p=function(e){var t=e.name,a=e.email,n=e.address;return c.a.createElement("div",{className:"user post__user"},c.a.createElement("h3",{className:"user__name"},"Author: ".concat(t)),c.a.createElement("p",{className:"user__email"},"email: ".concat(a)),c.a.createElement("p",{className:"user__city"},"city: ".concat(n.city)))},d=function(e){var t=e.name,a=e.email,n=e.body;return c.a.createElement("div",{className:"comment"},c.a.createElement("h3",{className:"comment__title"},"Comment: ".concat(t)),c.a.createElement("p",{className:"comment__content"},n),c.a.createElement("p",{className:"comment__user-email"},a))};d.defaultProps={name:"Without title",email:null,body:"Hidden comment"};var h=d,E=function(e){var t=e.list;return c.a.createElement("div",{className:"post__comments-container"},t.map(function(e){return c.a.createElement(h,Object.assign({key:e.id},e))}))};E.defaultProps={list:"No comments"};var f=E,b=function(e){var t=e.highlightedText,a=e.id,r=e.title,s=e.body,o=e.user,l=e.comments,m=function(e){return t?e.split(new RegExp("(".concat(t,")"),"gi")).map(function(e,a){return c.a.createElement(n.Fragment,{key:"".concat(e+a)},e.toLowerCase()===t.toLowerCase()?c.a.createElement("span",{className:"highlighted-text"},e):e)}):e};return c.a.createElement("article",{className:"post"},c.a.createElement("div",{className:"post__container"},c.a.createElement("article",{className:"post__information"},c.a.createElement("p",{className:"post__number"},"Post ".concat(a,":")),c.a.createElement("h2",{className:"post__title"},m(r)),c.a.createElement("p",{className:"post__content"},m(s))),c.a.createElement(p,o)),c.a.createElement(f,{list:l}))},_=function(e){var t=e.list,a=e.highlightedSearchResult;return c.a.createElement("div",{className:"posts-container"},t.map(function(e){return c.a.createElement(b,Object.assign({highlightedText:a,key:e.id},e))}))},N=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),p=o[0],d=o[1],h=Object(n.useState)(!1),E=Object(i.a)(h,2),f=E[0],b=E[1],N=Object(n.useState)(!1),v=Object(i.a)(N,2),g=v[0],y=v[1],j=Object(n.useState)(""),w=Object(i.a)(j,2),O=w[0],x=w[1],L=a.filter(function(e){return(e.title+e.body).toLowerCase().includes(O.toLowerCase())});return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"main-title"},"Dynamic list of posts"),p?c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"search",className:"posts-search",placeholder:"Search for posts",onChange:function(e){var t=e.target;x(t.value.replace(/^\s+/,"").slice(0,37))},value:O}),c.a.createElement(_,{list:L,highlightedSearchResult:O})):c.a.createElement(c.a.Fragment,null,g?c.a.createElement("h2",{className:"sub-title"},"Error occured!!!"):c.a.createElement("h2",{className:"sub-title"},"No PostsList yet!"),c.a.createElement("button",{className:"load-btn",type:"button",onClick:function(){var e,t,a,n;return l.a.async(function(c){for(;;)switch(c.prev=c.next){case 0:return b(!0),c.prev=1,c.next=4,l.a.awrap(u("https://jsonplaceholder.typicode.com/posts"));case 4:return e=c.sent,c.next=7,l.a.awrap(u("https://jsonplaceholder.typicode.com/users"));case 7:return t=c.sent,c.next=10,l.a.awrap(u("https://jsonplaceholder.typicode.com/comments"));case 10:a=c.sent,n=e.map(function(e){return Object(m.a)({},e,{user:t.find(function(t){return e.userId===t.id}),comments:a.filter(function(t){return e.id===t.postId})})}),r(n),b(!1),d(!0),c.next=21;break;case 17:c.prev=17,c.t0=c.catch(1),b(!1),y(!0);case 21:case"end":return c.stop()}},null,null,[[1,17]])},disabled:f},f?"Loading...":"Load TodoList")))};s.a.render(c.a.createElement(N,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.0b1f2081.chunk.js.map