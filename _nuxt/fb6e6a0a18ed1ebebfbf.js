(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{305:function(e,t,r){var content=r(649);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("29333e17",content,!0,{sourceMap:!1})},648:function(e,t,r){"use strict";var c=r(305);r.n(c).a},649:function(e,t,r){(t=r(55)(!1)).push([e.i,".intro[data-v-8c8e9a50]{background-color:#eee;padding:1rem}.cover[data-v-8c8e9a50]{text-align:center}.title[data-v-8c8e9a50]{margin-bottom:.1rem!important}.desc[data-v-8c8e9a50]{font-size:.9rem;color:#999}@media (max-width:767px){.col-md-4.cow[data-v-8c8e9a50]{width:100%}.cow.card img.tokenlogo[data-v-8c8e9a50]{max-width:100px}}.cow.card img.tokenlogo[data-v-8c8e9a50]{display:block;margin:0 auto;max-width:150px}.cover img[data-v-8c8e9a50]{display:inline-block;width:50px;text-align:center}.cow[data-v-8c8e9a50]{margin-bottom:1rem}.cow img[data-v-8c8e9a50]{width:100%;padding:1rem;display:inline-block}.avatar[data-v-8c8e9a50],.cow img[data-v-8c8e9a50]{text-align:center}.avatar[data-v-8c8e9a50]{font-size:5rem}.milk[data-v-8c8e9a50]{width:3rem}.apy[data-v-8c8e9a50]{font-size:.9rem;color:#007bff}",""]),e.exports=t},651:function(e,t,r){"use strict";r.r(t);r(45),r(23),r(57),r(35);var c=r(15),d=r(54),n=r(271),o=r(225),B={data:function(){return{cows:d.default.cows,priceDEGENBUSD:null,priceDEGENBNB:null,priceBHCBUSD:null,priceBHCBNB:null,priceEARTHBUSD:null,priceEARTHBNB:null,priceRABBITUSDT:null,priceMOONUSDT:null,priceBSWAPUSDT:null,apy:{1:"--",2:"--",3:"--",4:"--",5:"--",6:"--",7:"--",8:"--",9:"--",10:"--",11:"--",12:"--",13:"--",14:"--",15:"--",16:"--",17:"--",18:"--",19:"--",20:"--",21:"--"}}},methods:{},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,d,B;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new n.f,d=[r.getPriceOfBNBBUSD(),r.getPriceOfDEGENBNB(),r.getPriceOfBHCBNB(),r.getPriceOfEARTHBNB(),r.getPriceOfBUSDBNB(),r.getPriceOfMOONUSDT(),r.getPriceOfRABBITUSDT(),r.getPriceOfBSWAPUSDT()],t.next=4,Promise.all(d);case 4:B=t.sent,e.priceDEGENBUSD=Object(o.BigNumber)(B[0]).times(Object(o.BigNumber)(B[1])),e.priceDEGENBNB=Object(o.BigNumber)(B[1]),e.priceBHCBUSD=Object(o.BigNumber)(B[0]).times(Object(o.BigNumber)(B[2])),e.priceBHCBNB=Object(o.BigNumber)(B[2]),e.priceEARTHBUSD=Object(o.BigNumber)(B[0]).times(Object(o.BigNumber)(B[3])),e.priceEARTHBNB=Object(o.BigNumber)(B[3]),e.priceMOONUSDT=Object(o.BigNumber)(B[5]),e.priceRABBITUSDT=Object(o.BigNumber)(B[6]),e.priceBSWAPUSDT=Object(o.BigNumber)(B[7]),e.priceBUSDBNB=Object(o.BigNumber)(B[4]),e.priceBNBBUSD=Object(o.BigNumber)(B[0]),e.cows.map(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(r){var c,d,B,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.initialized){t.next=11;break}return new n.e(r.stakeToken.address,r.stakeToken.symbol,r.stakeToken.decimals),c=new n.c(r.address,r.stakeToken,r.yieldToken),t.next=5,c.rewardRate();case 5:return d=t.sent,t.next=8,c.totalSupply();case 8:B=t.sent,m=d.times(31536e3).div(B),3==r.id?e.apy[3]=m.times(e.priceBSWAPUSDT).div(e.priceDEGENBUSD.plus(1)).times(50).toFixed(2):4==r.id?e.apy[4]=m.times(e.priceBSWAPUSDT).div(e.priceBHCBUSD.plus(1)).times(50).toFixed(2):5==r.id?e.apy[5]=m.times(e.priceBSWAPUSDT).div(e.priceEARTHBUSD.plus(1)).times(50).toFixed(2):6==r.id?e.apy[6]=m.times(e.priceBSWAPUSDT).div(e.priceMOONUSDT.plus(1)).times(50).toFixed(2):7==r.id?e.apy[7]=m.times(e.priceBSWAPUSDT).div(e.priceRABBITUSDT.plus(1)).times(50).toFixed(2):8==r.id?e.apy[8]=m.times(e.priceBSWAPUSDT).div(e.priceDEGENBUSD.plus(1)).times(50).toFixed(2):9==r.id?e.apy[9]=m.times(e.priceBSWAPUSDT).div(e.priceBHCBUSD.plus(1)).times(50).toFixed(2):10==r.id?e.apy[10]=m.times(e.priceBSWAPUSDT).div(e.priceEARTHBUSD.plus(1)).times(50).toFixed(2):11==r.id?e.apy[11]=m.times(e.priceBSWAPUSDT).div(e.priceMOONUSDT.plus(1)).times(50).toFixed(2):12==r.id?e.apy[12]=m.times(e.priceBSWAPUSDT).div(e.priceRABBITUSDT.plus(1)).times(50).toFixed(2):13==r.id?e.apy[13]=m.times(e.priceMOONUSDT).times(100).toFixed(2):14==r.id?e.apy[14]=m.times(e.priceEARTHBUSD).times(100).toFixed(2):15==r.id?e.apy[15]=m.times(e.priceMOONUSDT).div(e.priceMOONUSDT.plus(1)).times(100).toFixed(2):16==r.id?e.apy[16]=m.times(e.priceMOONUSDT).div(e.priceEARTHBUSD.plus(1)).times(100).toFixed(2):17==r.id?e.apy[17]=m.times(e.priceMOONUSDT).div(e.priceBNBBUSD.plus(1)).times(100).toFixed(2):18==r.id?e.apy[18]=m.times(e.priceBHCBNB).div(e.priceDEGENBNB.plus(1)).times(100).toFixed(2):19==r.id?e.apy[19]=m.times(e.priceBHCBNB).div(e.priceBHCBNB.plus(1)).times(100).toFixed(2):20==r.id?e.apy[20]=m.times(e.priceBHCBNB).div(e.priceEARTHBNB.plus(1)).times(100).toFixed(2):21==r.id?e.apy[21]=m.times(e.priceBHCBNB).div(e.priceBUSDBNB.plus(1)).times(100).toFixed(2):22==r.id?e.apy[22]=new o.BigNumber(0):23==r.id&&(e.apy[23]=m.times(e.priceDEGENBNB).div(e.priceDEGENBNB.plus(1)).times(100).toFixed(2));case 11:return t.abrupt("return",r);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 17:case"end":return t.stop()}}),t)})))()}},m=(r(648),r(41)),component=Object(m.a)(B,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("div",{staticClass:"intro"},[r("h3",[e._v("\n        "+e._s(e.$t("home.protocol-name"))+"\n      ")]),e._v(" "),r("p",[e._v("\n        "+e._s(e.$t("home.protocol-desc"))+"\n      ")]),e._v(" "),r("p")])]),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"price alert alert-success"},[e._v("\n    1 $BSWAP = "+e._s(e.priceBSWAPUSDT?e.priceBSWAPUSDT.toFixed(4):"--")+" $USDT /\n    1 $DEGEN = "+e._s(e.priceDEGENBUSD?e.priceDEGENBUSD.toFixed(4):"--")+" $BUSD /\n    0.00001 $RABBIT = "+e._s(e.priceRABBITUSDT?e.priceRABBITUSDT.div(1e5).toFixed(4):"--")+" $USDT /\n    0.00001 $MOON = "+e._s(e.priceMOONUSDT?e.priceMOONUSDT.div(1e5).toFixed(4):"--")+" $USDT /\n    0.00001 $EARTH = "+e._s(e.priceEARTHBUSD?e.priceEARTHBUSD.div(1e5).toFixed(4):"--")+" $BUSD /\n    1 $BHC = "+e._s(e.priceBHCBUSD?e.priceBHCBUSD.toFixed(4):"--")+" $BUSD\n  ")]),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"row"},e._l(e.cows,(function(t,i){return r("div",{key:i,staticClass:"col-md-4 cow"},[r("div",{staticClass:"card mb-4 text-white bg-dark cow"},[r("div",{staticClass:"card-body"},[r("img",{staticClass:"tokenlogo",attrs:{src:t.image}}),e._v(" "),r("h8",{staticClass:"card-title title"},[e._v(e._s(t.name))]),e._v(" "),r("div",{staticClass:"desc"},[e._v(e._s(e.$t("home.card-desc",{symbol:t.stakeToken.symbol})))]),e._v(" "),r("p",{staticClass:"card-text apy"},[e._v(" APY: "+e._s(e.apy[t.id])+"% ")]),e._v(" "),t.initialized?r("a",{staticClass:"btn btn-block btn-warning",attrs:{href:"/pool/"+t.id}},[e._v("\n            "+e._s(e.$t("home.select"))+"\n          ")]):r("a",{staticClass:"btn btn-secondary btn-block",attrs:{href:"#"}},[e._v(e._s(e.$t("home.coming-soon")))])],1)])])})),0),e._v(" "),r("br")])}),[],!1,null,"8c8e9a50",null);t.default=component.exports}}]);