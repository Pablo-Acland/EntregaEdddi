(this["webpackJsonpanime-app"]=this["webpackJsonpanime-app"]||[]).push([[0],{82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(22),s=n.n(r),i=n(12),o=n(41),l=n(13),m=n(43),d=n(2),u="[animeStreaming] show all top animes",j="[animeStreaming] show list with genre animes",b="[animeStreaming] show list with staff",h="[animeStreaming] show list promotional cover",p="[animeStreaming] show promotional trailer",f="[animeStreaming] show list with episodes",O="[animeStreaming] show list with news",x="[animeStreaming] show more information of this anime",v="[animeStreaming] get name of the anime and date by card",g="[animeStreaming] show list with anime by names",N="[animeStreaming] show mame list",y="[animeStreaming] clear all boxes containing the anime details",w="[animeStreaming] add anime at favorite list",S="[animeStreaming] remove anime at favorite list",k={nameList:[],animeList:[],nameAndDate:[],charactersAndStaff:[],picture:[],videos:[],episodes:[],news:[],moreInfo:[],searchAnime:[]},_=n(46),L={favoriteList:[]},A=Object(l.b)({animeStreaming:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:case j:return Object(d.a)(Object(d.a)({},e),{},{animeList:t.payload});case v:return Object(d.a)(Object(d.a)({},e),{},{nameAndDate:t.payload});case b:return Object(d.a)(Object(d.a)({},e),{},{charactersAndStaff:t.payload});case h:return Object(d.a)(Object(d.a)({},e),{},{picture:t.payload});case p:return Object(d.a)(Object(d.a)({},e),{},{videos:t.payload});case f:return Object(d.a)(Object(d.a)({},e),{},{episodes:t.payload});case O:return Object(d.a)(Object(d.a)({},e),{},{news:t.payload});case x:return Object(d.a)(Object(d.a)({},e),{},{moreInfo:t.payload});case g:return Object(d.a)(Object(d.a)({},e),{},{searchAnime:t.payload});case N:return Object(d.a)(Object(d.a)({},e),{},{nameList:t.payload});case y:return Object(d.a)(Object(d.a)({},e),{},{nameAndDate:k.nameAndDate,charactersAndStaff:k.charactersAndStaff,picture:k.picture,videos:k.videos,episodes:k.episodes,news:k.news,moreInfo:k.moreInfo});default:return e}},favoriteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(d.a)(Object(d.a)({},e),{},{favoriteList:[].concat(Object(_.a)(e.favoriteList),[t.payload])});case S:return Object(d.a)(Object(d.a)({},e),{},{favoriteList:e.favoriteList.filter((function(e){return e.id!==t.payload}))});default:return e}}}),G=n(30),E=n(42),C={key:"persist-key",storage:n.n(E).a},M=Object(G.a)(C,A),D="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,T=Object(l.d)(M,D(Object(l.a)(m.a))),I=Object(G.b)(T),F=n(8),P=n(6),R=n(5),B=n(4),V=n(7),H=n.n(V),U=n(14),W=n(44),J=n.n(W).a.create({baseURL:"https://api.jikan.moe/v3"}),X={getTop:function(e){return J({method:"GET",url:"/top/anime/1/".concat(e)})},getGenre:function(e){return J({method:"GET",url:"search/anime?genre=".concat(e)})},getCharactersStaff:function(e){return J({method:"GET",url:"/anime/".concat(e,"/characters_staff")})},getPictures:function(e){return J({method:"GET",url:"/anime/".concat(e,"/pictures")})},getVideos:function(e){return J({method:"GET",url:"/anime/".concat(e,"/videos")})},getEpisodes:function(e){return J({method:"GET",url:"/anime/".concat(e,"/episodes")})},getNews:function(e){return J({method:"GET",url:"/anime/".concat(e,"/news")})},getMoreInfo:function(e){return J({method:"GET",url:"/anime/".concat(e,"/moreinfo")})},getSearchAnimeByName:function(e){return J({method:"GET",url:"search/anime?q=".concat(e,"&limit=5")})}},Y=X.getTop,q=X.getGenre,z=X.getCharactersStaff,K=X.getPictures,Q=X.getVideos,Z=X.getEpisodes,$=X.getNews,ee=X.getMoreInfo,te=X.getSearchAnimeByName,ne=function(e){return function(){var t=Object(U.a)(H.a.mark((function t(n){var a,c;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y(e);case 3:a=t.sent,c=a.data.top,n({type:u,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},ae=function(e){return function(){var t=Object(U.a)(H.a.mark((function t(n){var a,c;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q(e);case 3:a=t.sent,c=a.data.results,n({type:j,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},ce=function(e){return function(){var t=Object(U.a)(H.a.mark((function t(n){var a,c,r,s,i,o;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,z(e);case 3:a=t.sent,c=a.data,r=c.characters,s=c.staff,i=r.slice(0,40),o=s.slice(0,40),n({type:b,payload:{charactersLimit:i,staffLimit:o}}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},re=function(e){return function(){var t=Object(U.a)(H.a.mark((function t(n){var a,c;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K(e);case 3:a=t.sent,c=a.data.pictures,n({type:h,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},se=function(e){return function(){var t=Object(U.a)(H.a.mark((function t(n){var a,c;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q(e);case 3:a=t.sent,c=a.data.promo,n({type:p,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},ie=function(e){return function(){var t=Object(U.a)(H.a.mark((function t(n){var a,c;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Z(e);case 3:a=t.sent,c=a.data.episodes,n({type:f,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},oe=function(e){return function(){var t=Object(U.a)(H.a.mark((function t(n){var a,c;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$(e);case 3:a=t.sent,c=a.data.articles,n({type:O,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},le=function(e){return function(){var t=Object(U.a)(H.a.mark((function t(n){var a,c;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ee(e);case 3:a=t.sent,c=a.data.moreinfo,n({type:x,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},me=function(e){return function(){var t=Object(U.a)(H.a.mark((function t(n){var a,c;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,te(e);case 3:a=t.sent,c=a.data.results,n({type:g,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},de=function(e,t,n){return function(a){a({type:v,payload:{name:e,date:t,id:n}})}},ue=function(e){return function(t){t({type:N,payload:e})}},je=function(){return function(e){e({type:y})}},be=function(e,t,n,a){return function(c){c({type:w,payload:{id:e,img:t,name:n,date:a}})}},he=function(e){return function(t){t({type:S,payload:e})}},pe=function(){return{actGetTop:ne,actGetGenre:ae,actGetCharactersStaff:ce,actGetPictures:re,actGetVideos:se,actGetEpisodes:ie,actGetNews:oe,actGetMoreInfo:le,actGetSearchAnimeByName:me,actGetNameAndDate:de,actGetNameList:ue,actgetClearAllDetail:je,actGetAddAnimeFavorite:be,actGetRemoveAnimeFavorite:he}},fe=function(){var e=Object(P.g)(),t=Object(i.b)(),n=Object(i.c)((function(e){return e.animeStreaming})),a=n.nameAndDate,c=n.charactersAndStaff,r=n.picture,s=n.videos,o=n.episodes,l=n.news,m=n.moreInfo,d=Object(i.c)((function(e){return e.favoriteList})).favoriteList,u=pe(),j=u.actGetNameAndDate,b=u.actGetCharactersStaff,h=u.actGetPictures,p=u.actGetVideos,f=u.actGetEpisodes,O=u.actGetNews,x=u.actGetMoreInfo,v=u.actgetClearAllDetail,g=u.actGetAddAnimeFavorite,N=u.actGetRemoveAnimeFavorite,y=d.find((function(e){return e.id===a.id}));return{nameAndDate:a,charactersAndStaff:c,picture:r,videos:s,episodes:o,news:l,moreInfo:m,favoriteList:d,handleNameAndDate:function(n,a,c){t(v()),t(j(n,a,c)),t(b(c)),t(h(c)),t(p(c)),t(f(c)),setTimeout((function(){t(O(c)),t(x(c)),e.push("/".concat(c))}),600)},handleFavoriteList:function(e,n,a,c,r){e.preventDefault();var s=d.find((function(e){return e.id===n}));console.log(s),t(s?N(n):g(n,a,c,r))},searchOnList:y}},Oe=n(0),xe=function(e){var t=fe().handleNameAndDate;return Object(Oe.jsx)("div",{onClick:function(){return t(e.title,e.start_date,e.mal_id)},className:"card",children:Object(Oe.jsxs)("div",{children:[Object(Oe.jsx)("div",{className:"img1",style:{backgroundImage:"url(".concat(e.image_url,")")}}),Object(Oe.jsx)("div",{className:"img2",style:{backgroundImage:"url(".concat(e.image_url,")")}}),Object(Oe.jsx)("div",{className:"title",children:e.title}),Object(Oe.jsxs)("div",{className:"text-card",children:["Start date: ",e.start_date,Object(Oe.jsx)("br",{}),"Start date: ",e.end_date?e.end_date:"Unknown date"]}),Object(Oe.jsxs)("div",{className:"score",children:[e.score,Object(Oe.jsx)(B.a,{style:{marginLeft:"6px"},icon:R.k})]}),Object(Oe.jsxs)("div",{className:"rank",children:[e.rank,Object(Oe.jsx)(B.a,{style:{marginLeft:"6px"},icon:R.m})]}),Object(Oe.jsxs)("div",{className:"catagory",children:[e.type,Object(Oe.jsx)(B.a,{style:{marginLeft:"6px"},icon:R.d})]}),Object(Oe.jsxs)("div",{className:"views",children:[e.members,Object(Oe.jsx)(B.a,{style:{marginLeft:"6px"},icon:R.c})]})]})})},ve=n(15),ge=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.animeStreaming})),n=t.animeList,c=t.nameList,r=pe(),s=r.actGetTop,o=r.actGetGenre,l=r.actGetNameList,m=Object(a.useState)(!1),d=Object(ve.a)(m,2),u=d[0],j=d[1],b=Object(a.useState)(!1),h=Object(ve.a)(b,2),p=h[0],f=h[1];Object(a.useEffect)((function(){0===n.length&&(e(l("TV")),e(s("tv")))}),[]);return{click:u,handleClick:function(){return j(!u)},closeMobileMenu:function(){return j(!1)},dropdown:p,onMouseEnter:function(){window.innerWidth<300?f(!1):f(!0)},onMouseLeave:function(){window.innerWidth,f(!1)},animeList:n,nameList:c,handleAnimeList:function(t,n){e(s(t)),e(l(n))},handleAnimeByGenre:function(t,n){e(o(t)),e(l(n))}}},Ne=function(){var e=ge(),t=e.animeList,n=e.nameList;return Object(Oe.jsxs)("div",{className:"anime_wrapper",children:[Object(Oe.jsx)("h3",{children:n}),Object(Oe.jsx)("div",{className:"container_card",children:t.map((function(e,t){return Object(Oe.jsx)(xe,Object(d.a)({},e),t)}))})]})},ye=n(25),we=function(){var e=fe(),t=e.nameAndDate,n=e.charactersAndStaff,a=e.picture,c=e.videos,r=e.episodes,s=e.news,i=e.moreInfo,o=e.handleFavoriteList,l=e.searchOnList;return Object(Oe.jsxs)("div",{className:"detail_wrapper",children:[Object(Oe.jsxs)("div",{className:"detail_main",children:[Object(Oe.jsx)("div",{className:"picture",children:Object(Oe.jsx)("img",{src:a[0]?a[0].large:"https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",alt:"anime cover"})}),Object(Oe.jsxs)("div",{className:"text",children:[Object(Oe.jsxs)("div",{className:"text_title1",children:[Object(Oe.jsx)("h2",{children:t.name}),Object(Oe.jsx)("h3",{children:t.date})]}),Object(Oe.jsxs)("div",{className:"text_title2",children:[Object(Oe.jsx)("h2",{children:"Mas informacion"}),Object(Oe.jsx)(B.a,{style:l&&{color:"#e63946"},onClick:function(e){return o(e,t.id,a[0].large,t.name,t.date)},icon:l?R.f:ye.b})]}),Object(Oe.jsx)("div",{className:"text_content",children:Object(Oe.jsx)("h3",{children:i&&i.length>0?i:"Lo sentimos no tenemos mas informacion por el momento"})}),Object(Oe.jsxs)("div",{className:"text_character",children:[Object(Oe.jsxs)("div",{className:"text_characters",children:[Object(Oe.jsx)("h3",{children:"Personajes"}),Object(Oe.jsx)("div",{className:"avatar-group",children:n.characterslimit?n.charactersLimit.map((function(e,t){return Object(Oe.jsxs)("div",{className:"avatar ",children:[Object(Oe.jsx)("span",{className:"tooltiptext",children:e.name}),Object(Oe.jsx)("img",{src:e.image_url,alt:"avatar"})]},t)})):Object(Oe.jsx)("div",{className:"warning_text",children:"En este momento no tenemos Personajes para mostrar"})})]}),Object(Oe.jsxs)("div",{className:"text_staff",children:[Object(Oe.jsx)("h3",{children:"Creadores"}),Object(Oe.jsx)("div",{className:"avatar-group",children:n.staffLimit?n.staffLimit.map((function(e,t){return Object(Oe.jsxs)("div",{className:"avatar",children:[Object(Oe.jsx)("span",{className:"tooltiptext",children:e.name}),Object(Oe.jsx)("img",{src:e.image_url,alt:"avatar"})]},t)})):Object(Oe.jsx)("div",{className:"warning_text",children:"En este momento no tenemos creadores para mostrar"})})]})]}),c[0]&&Object(Oe.jsx)("a",{style:{textDecoration:"none"},href:c[0].video_url,className:"btn btn-trailer",children:"Trailer"})]})]}),Object(Oe.jsxs)("div",{className:"detail_episodes",children:[Object(Oe.jsxs)("h3",{className:"detail_episodes_title",children:[t.name,Object(Oe.jsx)("span",{style:{marginLeft:"8px"},children:"Episodios"})]}),Object(Oe.jsx)("div",{className:"cards_episodes",children:r?r.map((function(e,t){return Object(Oe.jsxs)("div",{className:"card_episode",children:[Object(Oe.jsx)("a",{style:{textDecoration:"none"},href:e.video_url,children:Object(Oe.jsx)("img",{src:a[0].large,alt:"caps"})}),"Ep-",e.episode_id]},t)})):Object(Oe.jsx)("div",{className:"warning_text",children:"En este momento no tenemos episodios para mostrar"})})]}),Object(Oe.jsxs)("div",{className:"detail_new",children:[Object(Oe.jsx)("h3",{children:" Noticias sobre el Anime "}),Object(Oe.jsx)("div",{className:"detail_new_deck",children:s?s.map((function(e,t){return Object(Oe.jsx)("div",{className:"deck",children:Object(Oe.jsx)("a",{style:{textDecoration:"none"},href:e.url,children:Object(Oe.jsxs)("div",{className:"card-new",children:[Object(Oe.jsxs)("header",{className:"cardHeader",children:[Object(Oe.jsx)(B.a,{style:{color:"#FFD433",margin:"10px"},icon:ye.c}),Object(Oe.jsxs)("span",{className:"cardHeader_account",children:["@",e.title]}),Object(Oe.jsx)("span",{className:"cardHeader_date",children:e.date})]}),Object(Oe.jsxs)("div",{className:"cardBody",children:[Object(Oe.jsx)("p",{className:"cardText",children:e.intro}),Object(Oe.jsx)("section",{className:"cardStats",children:Object(Oe.jsxs)("span",{className:"cardStats_stat cardStats_stat-comments",children:[e.comments,Object(Oe.jsx)(B.a,{style:{marginLeft:"4px"},icon:ye.a})]})})]})]})})},t)})):Object(Oe.jsx)("div",{className:"warning_text",children:"En este momento no tenemos Noticias para mostrar"})})]})]})},Se=function(){return Object(Oe.jsx)(F.b,{to:"/",children:Object(Oe.jsx)("button",{className:"btn",children:"Sign Up"})})},ke=[{name:"Action",number:1},{name:"Adventure",number:2},{name:"Cars",number:3},{name:"Comedy",number:4},{name:"Avante Garde",number:5},{name:"Demons",number:6},{name:"Mystery",number:7},{name:"Drama",number:8},{name:"Ecchi",number:9},{name:"Fantasy",number:10},{name:"Game",number:11},{name:"Hentai",number:12},{name:"Historical",number:13},{name:"Horror",number:14},{name:"Kids",number:15},{name:"Martial Arts",number:17},{name:"Mecha",number:18},{name:"Music",number:19},{name:"Parody",number:20},{name:"Samurai",number:21},{name:"Romance",number:22},{name:"School",number:23},{name:"Sci Fi",number:24},{name:"Shoujo",number:25},{name:"Girls Love",number:26},{name:"Shounen",number:27},{name:"Boys Love",number:28},{name:"Space",number:29},{name:"Sports",number:30},{name:"Super Power",number:31},{name:"Vampire",number:32},{name:"Harem",number:35},{name:"Slice Of Life",number:36},{name:"Supernatural",number:37},{name:"Military",number:28},{name:"Police",number:39},{name:"Psychological",number:40},{name:"Suspense",number:41},{name:"Seinen",number:42},{name:"Josei",number:43},{name:"Award Winning",number:46},{name:"Gourmet",number:47},{name:"Work Life",number:48},{name:"Erotica",number:49}],_e=function(){var e=ge(),t=e.click,n=e.handleClick,a=e.closeMobileMenu,c=e.handleAnimeByGenre;return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsx)("ul",{onClick:n,className:t?"dropdown-menu clicked":"dropdown-menu",children:ke.map((function(e,t){return Object(Oe.jsx)("li",{onClick:function(){return c(e.number,e.name)},children:Object(Oe.jsxs)(F.b,{to:"/",className:"dropdown-link",onClick:a,children:[Object(Oe.jsx)(B.a,{style:{marginRight:"10px"},icon:R.g}),e.name]})},t)}))})})},Le=function(){var e=ge(),t=e.click,n=e.handleClick,a=e.closeMobileMenu,c=e.dropdown,r=e.onMouseEnter,s=e.onMouseLeave,i=e.handleAnimeList;return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsxs)("nav",{className:"navbar",children:[Object(Oe.jsxs)(F.b,{onClick:function(){return i("tv","TV")},to:"/",className:"navbar-logo",children:[Object(Oe.jsx)(B.a,{style:{marginRight:"10px"},icon:R.d}),Object(Oe.jsx)("span",{children:"Anime"}),"Por Pablo"]}),Object(Oe.jsx)("div",{className:"menu-icon",onClick:n,children:Object(Oe.jsx)(B.a,{icon:t?R.l:R.a})}),Object(Oe.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(Oe.jsx)("li",{onClick:function(){return i("upcoming","Upcoming")},className:"nav-item",children:Object(Oe.jsxs)(F.b,{to:"/",className:"nav-links",onClick:a,children:[Object(Oe.jsx)(B.a,{style:{marginRight:"10px"},icon:R.h}),"Proximamente"]})}),Object(Oe.jsx)("li",{className:"nav-item",children:Object(Oe.jsxs)(F.b,{to:"/favoritesList",className:"nav-links",onClick:a,children:[Object(Oe.jsx)(B.a,{style:{marginRight:"10px",color:"#e63946"},icon:R.e}),"Anime Favoritos"]})}),Object(Oe.jsx)("li",{onClick:function(){return i("airing","Most Popular")},className:"nav-item",children:Object(Oe.jsxs)(F.b,{to:"/",className:"nav-links",onClick:a,children:[Object(Oe.jsx)(B.a,{style:{marginRight:"10px",color:"#e9c46a"},icon:R.b}),"Mas Populares"]})}),Object(Oe.jsxs)("li",{className:"nav-item",onMouseEnter:r,onMouseLeave:s,children:[Object(Oe.jsxs)("div",{className:"nav-links",onClick:a,children:["Genero",Object(Oe.jsx)(B.a,{style:{marginLeft:"10px"},icon:R.j})]}),c&&Object(Oe.jsx)(_e,{})]}),Object(Oe.jsx)("li",{className:"nav-item",children:Object(Oe.jsxs)(F.b,{to:"/",className:"nav-links-mobile",onClick:a,children:[Object(Oe.jsx)(B.a,{style:{marginRight:"10px"},icon:R.n}),"Sign Up"]})})]}),Object(Oe.jsx)(Se,{})]})})},Ae=function(){return Object(Oe.jsxs)("div",{className:"img-notFound",children:[Object(Oe.jsx)("img",{src:"https://raw.githubusercontent.com/riimuru/AnimeLazer/a98a2f1b1127a68011c600f1bc43b967a5735d1f/public/404light.svg",alt:"notFoundPage404"}),Object(Oe.jsxs)("div",{className:"text-notFound",children:["You do not have any anime added to your list, I recommend that you add one ",Object(Oe.jsx)(F.b,{to:"/",children:"here"})]})]})},Ge=function(e){var t=fe().handleNameAndDate;return Object(Oe.jsxs)("div",{onClick:function(){return t(e.name,e.start_date,e.id)},className:"favorite_card",style:{marginTop:"20px"},children:[Object(Oe.jsx)("div",{className:"favorite_img",children:Object(Oe.jsx)("img",{src:e.img,alt:"img_favorite"})}),Object(Oe.jsx)("div",{className:"favorite_text",children:Object(Oe.jsx)("h2",{children:e.name})})]})},Ee=function(){var e=fe().favoriteList;return Object(Oe.jsxs)("div",{className:"favorite_wrapper",children:[Object(Oe.jsx)("h3",{children:" Your list of favorite anime "}),Object(Oe.jsx)("div",{className:"container_card",style:{marginTop:"20px"},children:e.length>0?e.map((function(e,t){return Object(Oe.jsx)(Ge,Object(d.a)({},e),t)})):Object(Oe.jsx)(Ae,{})})]})},Ce=n(23),Me=function(){var e=Object(i.b)(),t=pe().actGetSearchAnimeByName,n=Object(i.c)((function(e){return e.animeStreaming})).searchAnime,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(ve.a)(t,2),c=n[0],r=n[1];return[c,function(e){var t=e.target;r(Object(d.a)(Object(d.a)({},c),{},Object(Ce.a)({},t.name,t.value)))},function(){r(e)}]}({animeName:""}),r=Object(ve.a)(c,2),s=r[0],o=r[1],l=s.animeName;Object(a.useEffect)((function(){e(t(l))}),[t,l,e]);var m=Object(a.useState)(!1),u=Object(ve.a)(m,2),j=u[0],b=u[1],h=Object(a.useRef)(null);return{animeName:l,handleInputChange:o,searchAnime:n,searchContainer:h,showSearchDiv:j,onMouseEnterSearch:function(){b(!0)},onMouseLeaveSearch:function(){b(!1)}}},De=function(){var e=Me().searchAnime;return Object(Oe.jsx)("div",{className:"searchWindow_wrapper",children:e.map((function(e,t){return Object(Oe.jsxs)("div",{className:"search-card",children:[Object(Oe.jsx)("img",{src:e.image_url,alt:"art"}),Object(Oe.jsxs)("div",{className:"search-content",children:[Object(Oe.jsxs)("div",{className:"search-header",children:[Object(Oe.jsx)("h1",{className:"search-title",children:e.title}),Object(Oe.jsxs)("h4",{className:"search-info",children:[Object(Oe.jsx)(B.a,{style:{marginRight:"10px",color:"#e9c46a"},icon:R.k}),"score: ",e.score]})]}),Object(Oe.jsx)("p",{className:"search-desc",children:e.synopsis}),Object(Oe.jsx)("div",{style:{marginTop:"15px"},children:Object(Oe.jsx)("a",{href:e.url,style:{textDecoration:"none",textAlign:"end"},className:"btn btn-more-infor",children:"More information"})})]})]},t)}))})},Te=function(){var e=Me(),t=e.animeName,n=e.handleInputChange,a=e.showSearchDiv,c=e.onMouseEnterSearch,r=e.onMouseLeaveSearch;return Object(Oe.jsxs)("div",{className:"search-toggle",children:[Object(Oe.jsx)("input",{onFocus:c,onBlur:r,type:"text",placeholder:"Search an anime",name:"animeName",onChange:n,value:t,autoComplete:"off"}),Object(Oe.jsx)("i",{children:Object(Oe.jsx)(B.a,{icon:R.i})}),a&&t.length>3&&Object(Oe.jsx)(De,{})]})},Ie=function(){return Object(Oe.jsx)("div",{children:Object(Oe.jsx)(F.a,{children:Object(Oe.jsxs)("div",{className:"main_wrapper",children:[Object(Oe.jsx)(Le,{}),Object(Oe.jsxs)("div",{className:"streaming_wrapper",children:[Object(Oe.jsx)(Te,{}),Object(Oe.jsxs)(P.d,{children:[Object(Oe.jsx)(P.b,{exact:!0,path:"/",children:Object(Oe.jsx)(Ne,{})}),Object(Oe.jsx)(P.b,{exact:!0,path:"/favoritesList",children:Object(Oe.jsx)(Ee,{})}),Object(Oe.jsx)(P.b,{path:"/:id",children:Object(Oe.jsx)(we,{})}),Object(Oe.jsx)(P.a,{to:"/"})]})]})]})})})};var Fe=function(){return Object(Oe.jsx)(i.a,{store:T,children:Object(Oe.jsx)(o.a,{persistor:I,children:Object(Oe.jsx)(Ie,{})})})};n(82);s.a.render(Object(Oe.jsx)(c.a.StrictMode,{children:Object(Oe.jsx)(Fe,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.048152e8.chunk.js.map