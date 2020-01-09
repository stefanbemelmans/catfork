(this.webpackJsonpcatfork=this.webpackJsonpcatfork||[]).push([[0],{32:function(e,t,n){e.exports=n.p+"static/media/CatForkLogo.5d6f0df5.png"},38:function(e,t,n){e.exports=n(70)},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),s=n.n(c),l=n(32),i=n.n(l),o=function(){return r.a.createElement("div",{className:"container-fluid text-center"},r.a.createElement("h3",{className:"appIntroText"},"This is a recipe search app based on ingredients you enter."," ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://thecatapi.com"},"Powered by Cats "),"And "," ",r.a.createElement("a",{href:"https://spoonacular.com/"},"Spoonacular ")),r.a.createElement("div",{className:"m-2"},r.a.createElement("img",{src:i.a,alt:"Logo"})))},u=n(6),m=n.n(u),p=n(9),E=n(35),f=n(7),d=n(17),h=n(16),g=n(33),b=n.n(g);n(30).config();var v="https://shielded-eyrie-66484.herokuapp.com/api/getCat",C=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){n||(console.log("setting CatPic in UseEffect"),x(c))})),r.a.createElement(h.a,{className:"mb-1"},r.a.createElement(d.a,{className:"catPicComponent"},r.a.createElement(f.a,{xs:12,sm:6,className:"text-center"},r.a.createElement(E.a,{src:n,alt:"logo",className:"m-1 catPic"})),r.a.createElement(f.a,{xs:12,sm:6,className:"text-center"},r.a.createElement("button",{className:"btn-class",onClick:function(){return x(c)}},"New Cat"))))};function x(e){var t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(b()(v));case 2:t=n.sent,console.log(t,"response from serverCat"),e(t.data);case 5:case"end":return n.stop()}}))}var y=n(11);n(30).config();var R={"X-Mashape-Key":"YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o"},S=function(e,t){return"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients="+e+"&limitLicense=false&number="+t+"&ranking=1"},j=function(){var e=Object(y.b)(),t=Object(a.useState)("peppers, onions"),n=Object(p.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)(10),i=Object(p.a)(l,2),o=i[0],u=i[1];return r.a.createElement(h.a,null,r.a.createElement(d.a,null,r.a.createElement(f.a,{xs:12,sm:4},r.a.createElement("div",{className:"searchComponent m-2 p-2"},r.a.createElement("h3",{className:"inputLabel"},"Number Of Recipes"),r.a.createElement("input",{id:"numOfRecipeInput",className:"searchInput",type:"number",placeholder:"10",onChange:function(e){return u(e.target.value)}}))),r.a.createElement(f.a,{sm:4,xs:12},r.a.createElement("div",{className:"searchComponent m-2 p-2"},r.a.createElement("h3",null,"Enter Ingredients"),r.a.createElement("h6",null,"Separated By A Comma"),r.a.createElement("input",{className:"searchInput ingredientInput",type:"text",value:c,onFocus:function(){return s("")},onChange:function(e){return s(e.target.value)}}))),r.a.createElement(f.a,{sm:4,xs:12,className:"mb-2"},r.a.createElement("div",{className:"w-100 text-center"},r.a.createElement("button",{type:"submit",title:"Search",onClick:function(){return function(t,n){var a,r,c,s;return m.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return a=t.split(",").map((function(e){return e.trim()})).toString(),e({type:"SET_SEARCH_TERMS",searchTerms:a}),e({type:"FETCH_RECIPES"}),r=S(a,n),l.next=6,m.a.awrap(fetch(r,{headers:R}));case 6:return c=l.sent,l.next=9,m.a.awrap(c.json());case 9:s=l.sent,e({type:"SET_RECIPES",searchResults:s});case 11:case"end":return l.stop()}}))}(c,o)}},"Search!"),r.a.createElement("button",{type:"reset",title:"Clear Results",onClick:function(){return e({type:"CEAR_SEARCH"})}},"Clear Results")))))},N=function(e){if(!e)return"No Details";var t=e.recipeDetails,n=t.analyzedInstructions[0].steps.map((function(e,t){return r.a.createElement("li",{key:t},"step:",e.number," ",e.step)})),a=t.extendedIngredients.map((function(e,t){return r.a.createElement("li",{key:t},e.originalString)}));return r.a.createElement("div",{className:"text-left m-1 p-1"},r.a.createElement("ul",null,a),r.a.createElement("ul",null,n))},O=n(10),I=n(18),T=function(e){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)(null),i=Object(p.a)(l,2),o=i[0],u=i[1],E=e.recipe,f=function(){s(!c)};return r.a.createElement(O.a,{style:{width:"100%"}},r.a.createElement(O.a.Img,{variant:"top",src:E.image}),r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Title,null,E.title),r.a.createElement(O.a.Text,null,"Used Ingredients: ",E.usedIngredients.length),r.a.createElement(O.a.Text,null,"Missing Ingredients: ",E.missedIngredientCount),r.a.createElement(O.a.Text,null,"Likes: ",E.likes),o?r.a.createElement(I.a,{variant:"outline-primary",onClick:function(){return f()}},c?"Hide ":"Show ","Recipe Details"):r.a.createElement(I.a,{variant:"outline-primary",onClick:function(){return function(e){var t,n,a;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(n){r.next=10;break}return t="https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"+e+"/information?includeNutrition=false",r.next=4,m.a.awrap(fetch(t,{headers:R}));case 4:return n=r.sent,r.next=7,m.a.awrap(n.json());case 7:a=r.sent,console.log(a,"should be object not promise"),u(a);case 10:case"end":return r.stop()}}))}(E.id)}},"Get Recipe Details"),c&&o&&r.a.createElement(N,{recipeDetails:o,toggleDetails:f})))},w=function(){var e,t=Object(y.c)((function(e){return e.searchResults}));return console.log(t),t?e=t.map((function(e){return r.a.createElement(f.a,{xs:12,sm:4,md:3,key:e.id,className:"text-center mb-2"},r.a.createElement(T,{recipe:e}))})):(console.log("No recipes"),e=r.a.createElement("p",null,"List Will Be here")),r.a.createElement("div",{className:"row"},e)},k=(n(67),n(68),function(){return r.a.createElement("div",{className:"app container-fluid justify-content-center"},r.a.createElement(o,null),r.a.createElement(C,null),r.a.createElement(j,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(w,null)))}),_=(n(69),n(14)),P={loading:!1,isLoaded:!1,searchResults:[],recipeDetails:{},searchTerms:"",error:{}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_RECIPES":return Object(_.a)({},e,{loading:!0});case"SET_RECIPES":return Object(_.a)({},e,{loading:!1,isLoaded:!0,searchResults:t.searchResults});case"SET_SEARCH_TERMS":return Object(_.a)({},e,{searchTerms:t.searchTerms});case"SET_RECIPE_DETAILS":return Object(_.a)({},e,{recipeDetails:t.recipeDetails});case"CEAR_SEARCH":return{state:P};case"RECIPE_SEARCH_ERROR":return Object(_.a)({},e,{error:!0});default:return e}},A=n(13),H=function(e){return function(t){return function(n){console.group(n.type),console.info("dispatching",n);var a=t(n);return console.log("next state",e.getState()),console.groupEnd(),a}}},L=function(e){return function(t,n,a){return e((function(e,n){var a,r=performance.now(),c=t(e,n),s=performance.now(),l=(a=s-r,Math.round(100*a)/100);return console.log("reducer process time:",l),c}),n,a)}},B=Object(A.a)(H),M=Object(A.c)(B,L),F=Object(A.d)(D,void 0,M);s.a.render(r.a.createElement(y.a,{store:F},r.a.createElement(k,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.1e999162.chunk.js.map