!function(o){var r={};function e(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return o[t].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=o,e.c=r,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([function(t,n,o){},function(t,n,o){},function(t,n,o){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var n=0,o=new Array(t.length);n<t.length;n++)o[n]=t[n];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}o.r(n);function e(t){return function(t){if(Array.isArray(t)){for(var n=0,o=new Array(t.length);n<t.length;n++)o[n]=t[n];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t){return function(t){if(Array.isArray(t)){for(var n=0,o=new Array(t.length);n<t.length;n++)o[n]=t[n];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a={el:"#app",components:{cart:{template:'\n\t\t<div class="cart-block" v-if="$root.cartShow">\n\t\t\t<div class="cart-item" v-for="goodInCart in cartList">\n\t\t\t\t<div class="product-bio">\n\t\t\t\t\t<img src="https://placehold.it/100x80" alt="Some image" />\n\t\t\t\t\t<div class="product-desc">\n\t\t\t\t\t\t<p class="product-title">{{ goodInCart.product_name }}</p>\n\t\t\t\t\t\t<p class="product-quantity">{{ goodInCart.qty }}</p>\n\t\t\t\t\t\t<p class="product-single-price">\n\t\t\t\t\t\t\t{{ goodInCart.price }}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="right-block">\n\t\t\t\t\t<p class="product-price">\n\t\t\t\t\t\t{{ goodInCart.qty * goodInCart.price }}\n\t\t\t\t\t</p>\n\t\t\t\t\t<button\n\t\t\t\t\t\tclass="del-btn"\n\t\t\t\t\t\t:data-id="goodInCart.id_product"\n\t\t\t\t\t\t@click="delGoodFromCart"\n\t\t\t\t\t>\n\t\t\t\t\t\t×\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p>Полная стоимость: {{ totalPrice }}</p>\n\t\t</div>\n\t',data:function(){return{cartList:[]}},computed:{totalPrice:function(){var n=0;return this.cartList.forEach(function(t){n+=t.price*t.qty}),n}},methods:{fetchCart:function(){var n=this;fetch("/cart").then(function(t){return t.json()}).then(function(t){n.cartList=r(t)})},addGoodToCart:function(){var n=this,o=+event.target.dataset.id,t=this.$root.$refs.catalog.goodList.find(function(t){return t.id_product===o});fetch("/addtocart",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"}}).then(function(t){return t.json()}).then(function(t){n.cartList=r(t)})},delGoodFromCart:function(){var n=this;console.log(+event.target.dataset.id);var o=+event.target.dataset.id,t=this.$root.$refs.catalog.goodList.find(function(t){return t.id_product===o});fetch("/delfromcart",{method:"DELETE",body:JSON.stringify(t),headers:{"Content-type":"application/json"}}).then(function(t){return t.json()}).then(function(t){n.cartList=r(t)})}}},catalog:{template:'\n\t\t\t<main>\n        <div class="products" v-if="!dataLoadingStatus">\n          <p>Товары не найдены.</p>\n\t\t\t\t</div>\n        <good :goods="filteredGoods" v-else></good>\n      </main>\t\n\t',component:{good:{template:'\n\t\t<div class="products">\n\t\t\t<div\n\t\t\t\tclass="product-item"\n\t\t\t\t:data-id="good.id_product"\n\t\t\t\tv-for="good in goods"\n\t\t\t>\n\t\t\t\t<img src="https://placehold.it/200x150" alt="Some img" />\n\t\t\t\t<div class="desc">\n\t\t\t\t\t<h3>{{ good.product_name }}</h3>\n\t\t\t\t\t<p>{{ good.price }} $</p>\n\t\t\t\t\t<button\n\t\t\t\t\t\tclass="buy-btn"\n\t\t\t\t\t\t:data-id="good.id_product"\n\t\t\t\t\t\t@click.stop="$root.$refs.cart.addGoodToCart"\n\t\t\t\t\t>\n\t\t\t\t\t\tКупить\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t',props:["goods"]}},data:function(){return{goodList:[],filteredGoods:[],dataLoadingStatus:!1}},methods:{fetchGoods:function(){var n=this;fetch("/catalog").then(function(t){return t.json()}).then(function(t){n.goodList=t,n.filteredGoods=e(n.goodList),n.dataLoadingStatus=!0})}}},search:{template:'\n\t\t<form action="#" class="search-form">\n\t\t\t<input\n\t\t\t\ttype="text"\n\t\t\t\tclass="search-field"\n\t\t\t\tv-model="searchLine"\n\t\t\t\t@input="setFilterGoods"\n\t\t\t/>\n\t\t\t<button class="btn-search" type="submit" @click="setFilterGoods">\n\t\t\t\tQ\n\t\t\t</button>\n\t\t</form>',data:function(){return{searchLine:""}},methods:{setFilterGoods:function(){var r=new RegExp(this.searchLine,"gi"),t=this.$root.$refs.catalog.goodList.filter(function(t,n,o){return r.test(o[n].product_name)});this.$root.$refs.catalog.filteredGoods=i(t)}}}},data:{cartShow:!1},mounted:function(){this.$refs.catalog.fetchGoods(),this.$refs.cart.fetchCart()}};o(0),o(1),new Vue(a)}]);