(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(3),c=a.n(l),r=(a(15),a(4)),o=a(5),s=a(8),u=a(6),d=a(7),m=a(1),k=[{id:"1",title:"Oceans 8",category:"Comedy",likes:4,dislikes:1},{id:"2",title:"Midnight Sun",category:"Comedy",likes:2,dislikes:0},{id:"3",title:"Les indestructibles 2",category:"Animation",likes:3,dislikes:1},{id:"4",title:"Sans un bruit",category:"Thriller",likes:6,dislikes:6},{id:"5",title:"Creed II",category:"Drame",likes:16,dislikes:2},{id:"6",title:"Pulp Fiction",category:"Thriller",likes:11,dislikes:3},{id:"7",title:"Pulp Fiction",category:"Thriller",likes:12333,dislikes:32},{id:"8",title:"Seven",category:"Thriller",likes:2,dislikes:1},{id:"9",title:"Inception",category:"Thriller",likes:2,dislikes:1},{id:"10",title:"Gone Girl",category:"Thriller",likes:22,dislikes:12}],h=new Promise(function(e,t){return setTimeout(e,2e3,k)});a(16),a(17);function g(e){return i.a.createElement("div",{className:"like__indicator"},i.a.createElement("i",{className:"far fa-thumbs-up"},i.a.createElement("p",null,e.likes)))}function f(e){return i.a.createElement("div",{className:"dislike__indicator"},i.a.createElement("i",{className:"far fa-thumbs-down"},i.a.createElement("p",null,e.dislikes)))}function v(e){return i.a.createElement("button",{onClick:e.onClick},"je n'aime pas")}function E(e){return i.a.createElement("button",{onClick:e.onClick},"j'aime")}function b(e){return i.a.createElement("li",{className:"cards__item"},i.a.createElement("button",{onClick:e.onDelete,className:"card__delete"},"X"),i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__image card__image--video"}),i.a.createElement("div",{className:"card__content"},i.a.createElement("div",{className:"card__title"},e.title),i.a.createElement("p",{className:"card__category"},e.category),i.a.createElement("div",{className:"card__button"},i.a.createElement(E,{onClick:e.onLike}),i.a.createElement(v,{onClick:e.onDislike}))),i.a.createElement("div",{className:"card__indicator"},i.a.createElement(g,{likes:e.likes}),i.a.createElement(f,{dislikes:e.dislikes}))))}var p=function(e){return i.a.createElement("ul",{className:"cards"},e.d.map(function(t,a){return i.a.createElement(b,{key:a,title:t.title,category:t.category,likes:t.likes,dislikes:t.dislikes,onDelete:function(){return e.onDelete(t)},onLike:function(){return e.onLike(t)},onDislike:function(){return e.onDislike(t)},onFilter:function(){return e.onFilter(t)}})}))};a(18);function y(e){return i.a.createElement("div",{className:"nav"},i.a.createElement("div",{className:"nav-header"},i.a.createElement("div",{className:"nav-title"},"React Interview")),i.a.createElement("input",{type:"checkbox",id:"nav-check"}),i.a.createElement("div",{className:"nav-links"},i.a.createElement("a",{href:"https://github.com/YonnaR",rel:"noopener noreferrer",target:"_blank"},"Made with ",i.a.createElement("i",{className:"fas fa-heart"})," by YonnaR")))}a(19);function N(){return i.a.createElement("div",{className:"div-activity-indicator"},i.a.createElement("i",{className:"fas fa-spinner fa-4x activity-indicator"}))}a(20);function _(e){return i.a.createElement("div",{className:"paging__container"},i.a.createElement("div",{className:"paging__div"},i.a.createElement("button",{onClick:e.onBackPage,className:"paging__button"},i.a.createElement("i",{className:"fas fa-arrow-left"})),i.a.createElement("button",{className:"paging__button"},e.page),i.a.createElement("button",{onClick:e.onNextPage,className:"paging__button"},i.a.createElement("i",{className:"fas fa-arrow-right"}))))}var j=function(e){return i.a.createElement("p",null,"Cat\xe9gorie : ",i.a.createElement("br",null),i.a.createElement("select",{onClick:function(t){return e.onFilter(0===t.target.selectedIndex?null:t.target.options[t.target.selectedIndex].value)}},i.a.createElement("option",null,"toute"),e.categories.map(function(e,t){return i.a.createElement("option",{key:t,value:e},e)})))};function C(e){return i.a.createElement("div",null,i.a.createElement("p",null,"\xc9l\xe9ment \xe0 afficher: ",i.a.createElement("br",null),i.a.createElement("select",{onClick:function(t){return e.onCountSelect(t.target.options[t.target.selectedIndex].value)}},i.a.createElement("option",{value:"10"},"10"),i.a.createElement("option",{value:"4"},"4"),i.a.createElement("option",{value:"8"},"8"),i.a.createElement("option",{value:"12"},"12"))))}var O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!0,movies:[],filter:null,page:0,count:0},h.then(function(e){a.setState({isLoading:!1,movies:e,count:e.length})}),a.handleFilter=a.handleFilter.bind(Object(m.a)(Object(m.a)(a))),a.handleDelete=a.handleDelete.bind(Object(m.a)(Object(m.a)(a))),a.handleLike=a.handleLike.bind(Object(m.a)(Object(m.a)(a))),a.handleDislike=a.handleDislike.bind(Object(m.a)(Object(m.a)(a))),a.handlePageSelect=a.handlePageSelect.bind(Object(m.a)(Object(m.a)(a))),a.handleCountSelect=a.handleCountSelect.bind(Object(m.a)(Object(m.a)(a))),a.handleBackPage=a.handleBackPage.bind(Object(m.a)(Object(m.a)(a))),a.handleNextPage=a.handleNextPage.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleFilter",value:function(e){this.setState({filter:e})}},{key:"handleDelete",value:function(e){this.setState(function(t){return{movies:t.movies.filter(function(t){return t.id!==e.id})}})}},{key:"handleDislike",value:function(e){this.setState(function(t){return{movies:t.movies.map(function(t){return t.id===e.id?(t.dislikes+=1,t):t})}})}},{key:"handleLike",value:function(e){this.setState(function(t){return{movies:t.movies.map(function(t){return t.id===e.id?(t.likes+=1,t):t})}})}},{key:"handlePageSelect",value:function(e){this.setState({page:e})}},{key:"handleBackPage",value:function(){this.setState({page:Math.max(this.state.page-1,0)})}},{key:"handleNextPage",value:function(){var e=this.state,t=e.count,a=e.page,n=e.movies;this.setState({page:Math.min(a+1,n.length/t)})}},{key:"handleCountSelect",value:function(e){this.setState({count:e})}},{key:"render",value:function(){console.log(this.state);var e=this.state,t=e.movies,a=e.filter,n=e.page,l=e.count,c=l*n,r=l*(n+1),o=null!==a?t.filter(function(e){return e.category===a}):t;o=o.slice(c,r);var s=t.map(function(e){return e.category});return s=Array.from(new Set(s)),console.log(s),i.a.createElement("div",{className:"App"},i.a.createElement(y,null),i.a.createElement("div",{className:"container"},i.a.createElement(j,{onFilter:this.handleFilter,categories:s}),i.a.createElement(_,{onBackPage:this.handleBackPage,onNextPage:this.handleNextPage,page:n}),i.a.createElement(C,{onCountSelect:this.handleCountSelect})),this.state.isLoading?i.a.createElement(N,null):i.a.createElement(p,{d:o,onDelete:this.handleDelete,onLike:this.handleLike,onDislike:this.handleDislike}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.2b319ba1.chunk.js.map