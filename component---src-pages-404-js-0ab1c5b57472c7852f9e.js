(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Bl7J:function(e,a,t){"use strict";var l=t("q1tI"),n=t.n(l),c=(t("wcMv"),t("Wbzz")),r=function(e){return n.a.createElement("header",{id:"header",className:"alt"},n.a.createElement(c.Link,{to:"/",className:"logo"},n.a.createElement("strong",null,"tohokuolc")," ",n.a.createElement("span",null,"東北大OLC")),n.a.createElement("nav",null,n.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))},i=function(e){return n.a.createElement("nav",{id:"menu"},n.a.createElement("div",{className:"inner"},n.a.createElement("ul",{className:"links"},n.a.createElement("li",null,n.a.createElement(c.Link,{onClick:e.onToggleMenu,to:"/"},"ホーム")),n.a.createElement("li",null,n.a.createElement(c.Link,{onClick:e.onToggleMenu,to:"/landing"},"要項集")),n.a.createElement("li",null,n.a.createElement(c.Link,{onClick:e.onToggleMenu,to:"/generic"},"写真館")),n.a.createElement("li",null,n.a.createElement(c.Link,{onClick:e.onToggleMenu,to:"/elements"},"東北大大会"))),n.a.createElement("ul",{className:"actions vertical"},n.a.createElement("li",null,n.a.createElement("a",{href:"#",className:"button special fit"},"Get Started")),n.a.createElement("li",null,n.a.createElement("a",{href:"#",className:"button fit"}," LOG IN(学内ページ)")))),n.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))},s=function(e){return n.a.createElement("section",{id:"contact"},n.a.createElement("div",{className:"inner"},n.a.createElement("section",null,n.a.createElement("form",{method:"post",action:"#"},n.a.createElement("div",{className:"field half first"},n.a.createElement("label",{htmlFor:"name"},"Name"),n.a.createElement("input",{type:"text",name:"name",id:"name"})),n.a.createElement("div",{className:"field half"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"text",name:"email",id:"email"})),n.a.createElement("div",{className:"field"},n.a.createElement("label",{htmlFor:"message"},"Message"),n.a.createElement("textarea",{name:"message",id:"message",rows:"6"})),n.a.createElement("ul",{className:"actions"},n.a.createElement("li",null,n.a.createElement("input",{type:"submit",value:"Send Message",className:"special"})),n.a.createElement("li",null,n.a.createElement("input",{type:"reset",value:"Clear"}))))),n.a.createElement("section",{className:"split"},n.a.createElement("section",null,n.a.createElement("div",{className:"contact-method"},n.a.createElement("span",{className:"icon alt fa-envelope"}),n.a.createElement("h3",null,"Email"),n.a.createElement("a",{href:"#"},"information@untitled.tld"))),n.a.createElement("section",null,n.a.createElement("div",{className:"contact-method"},n.a.createElement("span",{className:"icon alt fa-phone"}),n.a.createElement("h3",null,"Phone"),n.a.createElement("span",null,"(000) 000-0000 x12387"))),n.a.createElement("section",null,n.a.createElement("div",{className:"contact-method"},n.a.createElement("span",{className:"icon alt fa-home"}),n.a.createElement("h3",null,"Address"),n.a.createElement("span",null,"1234 Somewhere Road #5432",n.a.createElement("br",null),"Nashville, TN 00000",n.a.createElement("br",null),"United States of America"))))))},m=function(e){return n.a.createElement("footer",{id:"footer"},n.a.createElement("div",{className:"inner"},n.a.createElement("ul",{className:"icons"},n.a.createElement("li",null,n.a.createElement("a",{href:"#",className:"icon alt fa-twitter"},n.a.createElement("span",{className:"label"},"Twitter"))),n.a.createElement("li",null,n.a.createElement("a",{href:"#",className:"icon alt fa-facebook"},n.a.createElement("span",{className:"label"},"Facebook"))),n.a.createElement("li",null,n.a.createElement("a",{href:"#",className:"icon alt fa-instagram"},n.a.createElement("span",{className:"label"},"Instagram"))),n.a.createElement("li",null,n.a.createElement("a",{href:"#",className:"icon alt fa-github"},n.a.createElement("span",{className:"label"},"GitHub"))),n.a.createElement("li",null,n.a.createElement("a",{href:"#",className:"icon alt fa-linkedin"},n.a.createElement("span",{className:"label"},"LinkedIn")))),n.a.createElement("ul",{className:"copyright"},n.a.createElement("li",null,"© Untitled"),n.a.createElement("li",null,"Design: ",n.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP")))))};var o=function(e){var a,t;function l(a){var t;return(t=e.call(this,a)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}t=e,(a=l).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var c=l.prototype;return c.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100)},c.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},c.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},c.render=function(){var e=this.props.children;return n.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},n.a.createElement("div",{id:"wrapper"},n.a.createElement(r,{onToggleMenu:this.handleToggleMenu}),e,n.a.createElement(s,null),n.a.createElement(m,null)),n.a.createElement(i,{onToggleMenu:this.handleToggleMenu}))},l}(n.a.Component);a.a=o},w2l6:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),c=t("Bl7J");a.default=function(){return n.a.createElement(c.a,null,n.a.createElement("div",{id:"main",className:"alt"},n.a.createElement("section",{id:"one"},n.a.createElement("div",{className:"inner"},n.a.createElement("h1",null,"NOT FOUND"),n.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))))}},wcMv:function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-404-js-0ab1c5b57472c7852f9e.js.map