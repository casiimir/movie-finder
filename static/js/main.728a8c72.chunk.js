(this["webpackJsonpmovie-finder"]=this["webpackJsonpmovie-finder"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(1),s=a.n(n),c=a(7),r=a.n(c),o=(a(13),a(14),a(2)),m=a(3),l=a(5),b=a(4),d=(a(15),function(e){var t=e.title,a=e.year,n=e.imdb,s=e.img;return"N/A"===s&&(s="https://image.shutterstock.com/image-vector/upset-magnifying-glass-cute-not-260nw-1127749553.jpg"),Object(i.jsxs)("div",{className:"card tc center ma2 pa2 white dib center grow w-100 w-25-l w-50-s shadow-5",children:[Object(i.jsx)("img",{className:"",src:s,alt:t}),Object(i.jsx)("h1",{children:t}),Object(i.jsx)("p",{children:a}),Object(i.jsx)("p",{children:n})]})}),h=function(e){e.dbLocal;return e.dbApi.map((function(e,t){return Object(i.jsx)(d,{title:e.Title,year:e.Year,imdb:e.imdbID,img:e.Poster},t)}))},j=function(e){var t=e.dbKey,a=e.byClick;return Object(i.jsxs)("div",{className:"tc ma4",children:[Object(i.jsx)("input",{className:"mb5 f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns",type:"search",name:"",id:"",onChange:t,onKeyDown:a}),Object(i.jsx)("button",{className:"mb5f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns",type:"submit",onClick:a,children:"Search!"})]})},M=function(e){Object(l.a)(a,e);var t=Object(b.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={hasError:!1},i}return Object(m.a)(a,[{key:"render",value:function(){return this.state.hasError?Object(i.jsx)("div",{children:Object(i.jsx)("h3",{className:"ma4",children:"No movies, please search again"})}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(s.a.Component),p=(a(16),[{Title:"House of Cards",Year:"2013\u20132018",imdbID:"tt1856010",Type:"series",Poster:"https://m.media-amazon.com/images/M/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwNjM@._V1_SX300.jpg"},{Title:"House",Year:"2004\u20132012",imdbID:"tt0412142",Type:"series",Poster:"https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"},{Title:"White House Down",Year:"2013",imdbID:"tt2334879",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BYmI5ZGIxOGMtMjcwMS00Yzk3LWE0YWUtMzc5YTFhNGQ4OWZmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"},{Title:"Safe House",Year:"2012",imdbID:"tt1599348",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMjI5ODkyMjA2Nl5BMl5BanBnXkFtZTcwNTcyNTgzNw@@._V1_SX300.jpg"},{Title:"The Haunting of Hill House",Year:"2018",imdbID:"tt6763664",Type:"series",Poster:"https://m.media-amazon.com/images/M/MV5BMTU4NzA4MDEwNF5BMl5BanBnXkFtZTgwMTQxODYzNjM@._V1_SX300.jpg"},{Title:"The Lake House",Year:"2006",imdbID:"tt0410297",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMTYxMTgxNDI3MV5BMl5BanBnXkFtZTcwMzIxMTIzMw@@._V1_SX300.jpg"},{Title:"House of Wax",Year:"2005",imdbID:"tt0397065",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BNDA4Nzg1NjQ2NV5BMl5BanBnXkFtZTcwMDYwNTgyMQ@@._V1_SX300.jpg"},{Title:"National Lampoon's Animal House",Year:"1978",imdbID:"tt0077975",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BM2M2ZDA4MTYtOGRjMi00OTg5LWI1ZTUtMjQxZTc2NWZjNDFkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"},{Title:"House of Flying Daggers",Year:"2004",imdbID:"tt0385004",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMWYzM2JmOWItN2IxZC00MmFjLWEyMTQtYTQ2ODBiNjRlYmZlXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg"},{Title:"Monster House",Year:"2006",imdbID:"tt0385880",Type:"movie",Poster:"https://m.media-amazon.com/images/M/MV5BMTIzNjE1NDg1N15BMl5BanBnXkFtZTcwOTg2NTMzMQ@@._V1_SX300.jpg"}]),u=function(e){Object(l.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).searchBoxEvent=function(t){e.setState({dbKey:t.target.value})},e.fetchOnClick=function(t){if(13===t.keyCode||"click"===t.type){if(e.state.dbKey.length<=3)return;fetch("https://www.omdbapi.com/?s=".concat(e.state.dbKey,"&apikey=42ba56ba")).then((function(e){return e.json()})).then((function(t){return e.setState({dbApi:t.Search})}))}},e.state={dbLocalsc:p,dbApi:[],dbKey:"casa",hasError:!1},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"tc f1 h-auto",children:"Movie Finder"}),Object(i.jsx)(j,{dbKey:this.searchBoxEvent,byClick:this.fetchOnClick}),Object(i.jsx)(M,{children:Object(i.jsx)(h,{dbLocal:p,dbApi:this.state.dbApi})})]})}}]),a}(n.Component),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),s(e),c(e)}))};r.a.render(Object(i.jsx)(u,{}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.728a8c72.chunk.js.map