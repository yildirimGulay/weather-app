(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{21:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(14),s=c.n(r),i=(c(21),c(3)),o=c(0);var j=function(e){var t=e.setQuery,c=Object(n.useState)(""),a=Object(i.a)(c,2),r=a[0],s=a[1],j=Object(n.useState)(r),u=Object(i.a)(j,2),b=u[0],l=u[1];console.log("term:",r),console.log("debounce:",b),Object(n.useEffect)((function(){var e=setTimeout((function(){l(r)}),2e3);return function(){clearTimeout(e)}}),[r]);var d=function(e){e.preventDefault(),t(b)};return Object(o.jsxs)("form",{onSubmit:d,className:"search-form",children:[Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){return s(e.target.value)},placeholder:"Enter your cityname"}),Object(o.jsxs)("button",{type:"button",onClick:d,children:[" ","Search"," "]})]})},u=c(5),b=c.n(u),l=c(15),d=c(16),h=c.n(d),O=function(e){var t=e.city,c=e.temp,n=e.icon,a=e.country,r=e.description;return console.log("city:",t),console.log("temp:",c),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"main-contanier",children:[Object(o.jsx)("h4",{children:"Live Weather Condition"}),Object(o.jsx)("div",{className:"weather-icon",children:Object(o.jsx)("img",{style:{width:150,height:150},src:"http://openweathermap.org/img/w/".concat(n,".png"),alt:"icon"})}),Object(o.jsx)("h2",{children:r}),Object(o.jsx)("div",{className:"temprature",children:Object(o.jsxs)("h1",{children:[Math.floor(c),"\xb0C"]})}),Object(o.jsx)("div",{className:"location",children:Object(o.jsxs)("h3",{children:[Object(o.jsx)("i",{className:"fa fa-street-view"})," ",t,", ",a]})})]})})},p=function(e){var t=e.name;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"card"}),Object(o.jsxs)("h2",{className:"title",children:[" ",Object(o.jsx)("i",{className:"fa fa-cloud"})," ",t]})]})};var m=function(){var e=Object(n.useState)("London"),t=Object(i.a)(e,2),c=t[0],a=t[1],r=function(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),j=o[0],u=o[1],d=Object(n.useState)(""),O=Object(i.a)(d,2),p=O[0],m=O[1],f=Object(n.useState)(""),x=Object(i.a)(f,2),v=x[0],y=x[1],g=Object(n.useState)(""),w=Object(i.a)(g,2),S=w[0],N=w[1];return Object(n.useEffect)((function(){try{Object(l.a)(b.a.mark((function t(){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&mode=json&units=metric&APPID=").concat("cb370b1fdbe3b6b0965324cccfeb99e3"));case 2:c=t.sent,r(c.data.weather[0].description),u(c.data.main.temp),m(c.data.weather[0].icon),y(c.data.sys.country),N(c.data.name);case 8:case"end":return t.stop()}}),t)})))()}catch(t){console.log(t)}}),[e]),{description:a,temp:j,icon:p,country:v,city:S}}(c),s=r.description,u=r.temp,d=r.icon,m=r.country,f=r.city;return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(p,{name:"Weather App"}),Object(o.jsx)(j,{setQuery:a}),Object(o.jsx)(O,{city:f,icon:d,country:m,temp:u,description:s})]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.230434b9.chunk.js.map