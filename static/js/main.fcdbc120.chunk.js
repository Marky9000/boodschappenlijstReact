(this.webpackJsonpmyboodschappeblijst=this.webpackJsonpmyboodschappeblijst||[]).push([[0],{15:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var c=n(2),s=n.n(c),a=n(16),i=n.n(a),r=(n(21),n(22),n(14)),o=n(13),u=n(5),l=n(6),j=n(3),d=n(9),b=n(8),m=(n(15),n(7)),h=n(12),O=n(0);var p=function(t){var e=t.items.map((function(e){return Object(O.jsxs)("div",{className:"listGroceries",children:[Object(O.jsx)(h.a,{icon:m.a,className:"faiconsCart",onClick:function(){return t.itemToBasket(e.title)}}),e.title,Object(O.jsxs)("span",{children:[" ",Object(O.jsx)(h.a,{icon:m.b,className:"faicons",onClick:function(){return t.deleteItem(e.key)}})]})]},e.key)}));return Object(O.jsx)("li",{children:e})},f=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(u.a)(this,n),(c=e.call(this,t)).state={count:1},c.increment=c.increment.bind(Object(j.a)(c)),c.decrement=c.decrement.bind(Object(j.a)(c)),c}return Object(l.a)(n,[{key:"increment",value:function(){this.setState((function(t){return{count:t.count+1}}))}},{key:"decrement",value:function(){this.setState({count:this.state.count-1})}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"aantal: "}),Object(O.jsx)("button",{className:"buttonsPlusMin",onClick:this.increment,children:"+"}),Object(O.jsx)("button",{className:"buttonsPlusMin",onClick:this.decrement,children:"-"}),this.state.count]})}}]),n}(s.a.Component);var v=function(t){t.amount;var e=t.cartItems.map((function(t){return Object(O.jsxs)("div",{className:"listBasket",children:[t,Object(O.jsx)("span",{className:"counter",children:Object(O.jsx)(f,{})})]})}));return Object(O.jsx)("li",{children:e})},x=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(u.a)(this,n),(c=e.call(this,t)).state={items:[],groceryItems:{title:"",key:""},cartItems:[]},c.addItem=c.addItem.bind(Object(j.a)(c)),c.handleInput=c.handleInput.bind(Object(j.a)(c)),c.deleteItem=c.deleteItem.bind(Object(j.a)(c)),c.itemToBasket=c.itemToBasket.bind(Object(j.a)(c)),c.emptyCart=c.emptyCart.bind(Object(j.a)(c)),c.plusAmount=c.plusAmount.bind(Object(j.a)(c)),c}return Object(l.a)(n,[{key:"addItem",value:function(t){t.preventDefault();var e=this.state.groceryItems;if(""!==e.title){var n=[].concat(Object(o.a)(this.state.items),[e]);this.setState({items:n,groceryItems:{title:"",key:""}})}}},{key:"deleteItem",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"itemToBasket",value:function(t){this.setState((function(e){var n=Object(o.a)(e.cartItems);return n.push(t),Object(r.a)(Object(r.a)({},e),{},{cartItems:n})}))}},{key:"handleInput",value:function(t){this.setState({groceryItems:{title:t.target.value,key:Date.now()}})}},{key:"emptyCart",value:function(){this.setState({cartItems:[]})}},{key:"plusAmount",value:function(){this.setState((function(t){return{amount:t.amount+1}}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("header",{children:Object(O.jsx)("h1",{children:"'Wie doet vandaag de boodschappen?'"})}),Object(O.jsx)("br",{}),Object(O.jsxs)("form",{id:"inputForm",onSubmit:this.addItem,children:[Object(O.jsx)("input",{className:"inputField",type:"text",placeholder:"type uw boodschap hier...",value:this.state.groceryItems.title,onChange:this.handleInput}),Object(O.jsx)("p",{}),Object(O.jsx)("button",{className:"addItemButton",type:"submit",children:"voeg boodschap toe"})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"twoList",children:[Object(O.jsxs)("ul",{children:[Object(O.jsx)("h2",{children:"boodschappen"}),Object(O.jsx)(p,{items:this.state.items,handleInput:this.handleInput,deleteItem:this.deleteItem,itemToBasket:this.itemToBasket,amount:this.state.groceryItems.amount})]}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("h2",{children:"winkelmand"}),Object(O.jsx)(v,{cartItems:this.state.cartItems})]}),Object(O.jsx)("button",{type:"submit",onClick:this.emptyCart,className:"button_emptyCart",children:" winkelmand legen"})]}),Object(O.jsx)("footer",{children:Object(O.jsx)("h6",{children:"winc-academy opdracht door mark van booren 2021"})})]})}}]),n}(s.a.Component);var y=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(x,{})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),s(t),a(t),i(t)}))};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),k()}},[[29,1,2]]]);
//# sourceMappingURL=main.fcdbc120.chunk.js.map