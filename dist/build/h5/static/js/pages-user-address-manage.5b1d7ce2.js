(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-address-manage"],{"0d21":function(e,t,a){"use strict";var r=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("ac6a"),a("96cf");var i=r(a("3b8d"));a("c5f6");var n=a("2b74"),s={props:{defaultLevel:{type:Number,default:3},addressData:{type:Object,default:function(){return{}}}},data:function(){return{multiArray:[],multiIndex:[0,0,0],multiStr:""}},mounted:function(){this.getProvinceList()},watch:{defaultLevel:function(){this.multiArray.length=0,this.getProvinceList()},addressData:function(e,t){e!==t&&this.getProvinceList()}},methods:{getProvinceList:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var t,a,r,s,d,u,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=0,a=0,r=0,s=null,d=null,u=null,e.next=8,this.$http.get("".concat(n.provinceList)).then(function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(l){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o.multiArray[0]=l.data,o.addressData.province_id?l.data.forEach((function(e,a){parseInt(e.id,10)===parseInt(o.addressData.province_id,10)&&(t=a,o.addressData.province_id=e.id,s=e.title)})):(o.addressData.province_id=o.multiArray[0][0].id,s=o.multiArray[0][0].title),o.multiIndex=[t],o.multiStr="".concat(s),e.next=6,o.$http.get("".concat(n.provinceList),{pid:o.addressData.province_id}).then(function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o.multiArray[1]=i.data,o.addressData.city_id?i.data.forEach((function(e,t){parseInt(e.id,10)==parseInt(o.addressData.city_id,10)&&(a=t,o.addressData.city_id=e.id,d=e.title)})):(o.addressData.city_id=o.multiArray[1][0].id,d=o.multiArray[1][0].title),o.multiIndex=[t,a],o.multiStr="".concat(s,", ").concat(d),e.next=6,o.$http.get("".concat(n.provinceList),{pid:o.addressData.city_id}).then((function(e){o.multiArray[2]=e.data,o.addressData.area_id?e.data.forEach((function(e,t){parseInt(e.id,10)==parseInt(o.addressData.area_id,10)&&(r=t,o.addressData.area_id=e.id,u=e.title)})):(o.addressData.area_id=o.multiArray[2][0].id,u=o.multiArray[2][0].title),1==o.defaultLevel?(o.addressData.area_id=null,o.addressData.city_id=null,o.multiArray.length=1,o.multiIndex=[t],o.multiStr="".concat(s)):2==o.defaultLevel?(o.addressData.area_id=null,o.multiArray.length=2,o.multiIndex=[t,a],o.multiStr="".concat(s,", ").concat(d)):(o.multiArray.length=3,o.multiIndex=[t,a,r],o.multiStr="".concat(s,", ").concat(d,", ").concat(u)),o.$emit("getRegions",o.addressData)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),bindMultiPickerColumnChange:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var a,r,s,d,u,o,l=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.multiIndex[t.detail.column]=t.detail.value,a=0,r=0,s=0,d=null,u=null,o=null,e.t0=t.detail.column,e.next=0===e.t0?10:1===e.t0?24:2===e.t0?45:67;break;case 10:e.t1=this.multiIndex[0],e.next=e.t1===this.multiIndex[0]?13:23;break;case 13:if(this.addressData.province_id=this.multiArray[0][t.detail.value].id,d=this.multiArray[0][t.detail.value].title,1!=this.defaultLevel){e.next=20;break}return this.multiIndex=[t.detail.value],this.multiStr="".concat(d),this.$emit("getRegions",this.addressData),e.abrupt("return",!0);case 20:return e.next=22,this.$http.get("".concat(n.provinceList),{pid:this.multiArray[0][t.detail.value].id}).then(function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(l.multiArray[1]=r.data,l.addressData.city_id=l.multiArray[1][0].id,u=l.multiArray[1][0].title,a=t.detail.value,2!=l.defaultLevel){e.next=8;break}return l.multiIndex=[a,0],l.multiStr="".concat(d,", ").concat(u),e.abrupt("return",!0);case 8:return e.next=10,l.$http.get("".concat(n.provinceList),{pid:l.multiArray[1][t.detail.column].id}).then((function(e){l.multiArray[2]=e.data,l.addressData.area_id=l.multiArray[2][0].id,o=l.multiArray[2][0].title,l.multiIndex=[a,0,0],l.multiStr="".concat(d,", ").concat(u,", ").concat(o)}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 22:return e.abrupt("break",23);case 23:return e.abrupt("break",67);case 24:e.t2=this.multiIndex[0],e.next=e.t2===this.multiIndex[0]?27:44;break;case 27:e.t3=this.multiIndex[1],e.next=e.t3===this.multiIndex[1]?30:43;break;case 30:if(this.addressData.province_id=this.multiArray[0][this.multiIndex[0]].id,d=this.multiArray[0][this.multiIndex[0]].title,this.addressData.city_id=this.multiArray[1][t.detail.value].id,u=this.multiArray[1][t.detail.value].title,r=t.detail.value,2!=this.defaultLevel){e.next=40;break}return this.multiIndex=[this.multiIndex[0],r],this.multiStr="".concat(d,", ").concat(u),this.$emit("getRegions",this.addressData),e.abrupt("return",!0);case 40:return e.next=42,this.$http.get("".concat(n.provinceList),{pid:this.multiArray[1][t.detail.value].id}).then((function(e){l.multiArray[2]=e.data,l.addressData.area_id=l.multiArray[2][0].id,o=l.multiArray[2][0].title,l.multiIndex=[l.multiIndex[0],r,0],l.multiStr="".concat(d,", ").concat(u,", ").concat(o)}));case 42:return e.abrupt("break",43);case 43:return e.abrupt("break",44);case 44:return e.abrupt("break",67);case 45:e.t4=this.multiIndex[0],e.next=e.t4===this.multiIndex[0]?48:66;break;case 48:e.t5=this.multiIndex[1],e.next=e.t5===this.multiIndex[1]?51:65;break;case 51:e.t6=this.multiIndex[2],e.next=e.t6===this.multiIndex[2]?54:64;break;case 54:return this.addressData.province_id=this.multiArray[0][this.multiIndex[0]].id,d=this.multiArray[0][this.multiIndex[0]].title,this.addressData.city_id=this.multiArray[1][this.multiIndex[1]].id,u=this.multiArray[1][this.multiIndex[1]].title,this.addressData.area_id=this.multiArray[2][t.detail.value].id,o=this.multiArray[2][t.detail.value].title,s=t.detail.value,this.multiIndex=[this.multiIndex[0],this.multiIndex[1],s],this.multiStr="".concat(d,", ").concat(u,", ").concat(o),e.abrupt("break",64);case 64:return e.abrupt("break",65);case 65:return e.abrupt("break",66);case 66:return e.abrupt("break",67);case 67:this.$emit("getRegions",this.addressData);case 68:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}};t.default=s},5944:function(e,t,a){var r=a("f106");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=a("4f06").default;i("1f280c4b",r,!0,{sourceMap:!1,shadowMode:!1})},"7d57":function(e,t,a){"use strict";a.r(t);var r=a("c406"),i=a("b162");for(var n in i)"default"!==n&&function(e){a.d(t,e,(function(){return i[e]}))}(n);a("cae5");var s,d=a("f0c5"),u=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,"5a46760f",null,!1,r["a"],s);t["default"]=u.exports},"802d":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.orderProductIndex=t.orderCustomerRefundClose=t.orderCustomerRefundApply=t.orderCustomerSalesReturn=t.rechargeConfigIndex=t.thirdPartyAuthDelete=t.thirdPartyAuthList=t.opinionDetail=t.opinionCreate=t.opinionList=t.uploadImage=t.orderInvoiceList=t.invoiceDel=t.invoiceDefault=t.invoiceDetail=t.invoiceUpdate=t.invoiceCreate=t.invoiceList=t.evaluateAgain=t.evaluateCreate=t.creditsLogList=t.collectList=t.footPrintDel=t.footPrintList=t.couponReceive=t.orderTakeDelivery=t.orderDelete=t.orderDetail=t.orderProductSalesReturn=t.closeOrderRefundApply=t.orderRefundApply=t.orderList=t.couponDetail=t.couponClear=t.myCouponList=t.couponList=t.addressDelete=t.addressUpdate=t.addressDetail=t.addressDefault=t.addressCreate=t.addressList=t.memberUpdate=t.memberInfo=void 0;var r="/tiny-shop/v1/member/member/index";t.memberInfo=r;var i="/tiny-shop/v1/member/member/update";t.memberUpdate=i;var n="/tiny-shop/v1/member/address/index";t.addressList=n;var s="/tiny-shop/v1/member/address/default";t.addressDefault=s;var d="/tiny-shop/v1/member/address/view";t.addressDetail=d;var u="/tiny-shop/v1/member/address/create";t.addressCreate=u;var o="/tiny-shop/v1/member/address/update";t.addressUpdate=o;var l="/tiny-shop/v1/member/address/delete";t.addressDelete=l;var c="/tiny-shop/v1/marketing/coupon-type/index";t.couponList=c;var m="/tiny-shop/v1/member/coupon/index";t.myCouponList=m;var p="/tiny-shop/v1/marketing/coupon-type/view";t.couponDetail=p;var v="/tiny-shop/v1/marketing/coupon-type/create";t.couponReceive=v;var h="/tiny-shop/v1/member/coupon/clear";t.couponClear=h;var f="/tiny-shop/v1/member/order/index";t.orderList=f;var y="/tiny-shop/v1/member/order/take-delivery";t.orderTakeDelivery=y;var b="/tiny-shop/v1/member/order-product/refund-apply";t.orderRefundApply=b;var g="/tiny-shop/v1/member/order-product/refund-sales-return";t.orderProductSalesReturn=g;var x="/tiny-shop/v1/member/order-product/refund-close";t.closeOrderRefundApply=x;var D="/tiny-shop/v1/member/order/view";t.orderDetail=D;var _="/tiny-shop/v1/member/order/delete";t.orderDelete=_;var A="/tiny-shop/v1/member/footprint/index";t.footPrintList=A;var w="/tiny-shop/v1/member/footprint/delete";t.footPrintDel=w;var k="/tiny-shop/v1/member/collect/index";t.collectList=k;var I="/tiny-shop/v1/member/credits-log/index";t.creditsLogList=I;var C="/tiny-shop/v1/member/evaluate/create";t.evaluateCreate=C;var R="/tiny-shop/v1/member/evaluate/again";t.evaluateAgain=R;var L="/tiny-shop/v1/member/order-product/index";t.orderProductIndex=L;var $="/tiny-shop/v1/member/invoice/index";t.invoiceList=$;var P="/tiny-shop/v1/member/invoice/create";t.invoiceCreate=P;var S="/tiny-shop/v1/member/invoice/update";t.invoiceUpdate=S;var E="/tiny-shop/v1/member/invoice/view";t.invoiceDetail=E;var M="/tiny-shop/v1/member/invoice/default";t.invoiceDefault=M;var U="/tiny-shop/v1/member/invoice/delete";t.invoiceDel=U;var O="/tiny-shop/v1/member/order-invoice/index";t.orderInvoiceList=O;var T="/tiny-shop/v1/member/opinion/index";t.opinionList=T;var j="/tiny-shop/v1/member/opinion/create";t.opinionCreate=j;var H="/tiny-shop/v1/member/opinion/view";t.opinionDetail=H;var N="/tiny-shop/v1/member/auth/index";t.thirdPartyAuthList=N;var G="/tiny-shop/v1/member/auth/delete";t.thirdPartyAuthDelete=G;var J="/tiny-shop/v1/member/recharge-config/index";t.rechargeConfigIndex=J;var B="/tiny-shop/v1/member/order-customer/apply";t.orderCustomerRefundApply=B;var q="/tiny-shop/v1/member/order-customer/sales-return";t.orderCustomerSalesReturn=q;var z="/tiny-shop/v1/member/order-customer/close";t.orderCustomerRefundClose=z;var F="/tiny-shop/v1/common/file/images";t.uploadImage=F},b162:function(e,t,a){"use strict";a.r(t);var r=a("f0a5"),i=a.n(r);for(var n in r)"default"!==n&&function(e){a.d(t,e,(function(){return r[e]}))}(n);t["default"]=i.a},c1eb:function(e,t,a){"use strict";a.r(t);var r=a("fa79"),i=a("f661");for(var n in i)"default"!==n&&function(e){a.d(t,e,(function(){return i[e]}))}(n);var s,d=a("f0c5"),u=Object(d["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],s);t["default"]=u.exports},c406:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));var r={"rf-loading":a("a7c6").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"address-manage rf-row-wrapper"},[a("v-uni-view",{staticClass:"row b-b"},[a("v-uni-text",{staticClass:"tit"},[e._v("联系人")]),a("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"收货人姓名","placeholder-class":"placeholder"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.handleRealNameChange.apply(void 0,arguments)}},model:{value:e.addressData.realname,callback:function(t){e.$set(e.addressData,"realname",t)},expression:"addressData.realname"}})],1),a("v-uni-view",{staticClass:"row b-b"},[a("v-uni-text",{staticClass:"tit"},[e._v("手机号")]),a("v-uni-input",{staticClass:"input",attrs:{type:"number",placeholder:"收货人手机号码","placeholder-class":"placeholder"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.handleMobileChange.apply(void 0,arguments)}},model:{value:e.addressData.mobile,callback:function(t){e.$set(e.addressData,"mobile",t)},expression:"addressData.mobile"}})],1),a("v-uni-view",{staticClass:"row b-b"},[a("v-uni-text",{staticClass:"tit"},[e._v("选择地址")]),a("rf-pick-regions",{attrs:{addressData:e.addressData},on:{getRegions:function(t){arguments[0]=t=e.$handleEvent(t),e.handleGetRegions.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"row b-b"},[a("v-uni-text",{staticClass:"tit"},[e._v("详细地址")]),a("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入详细地址","placeholder-class":"placeholder"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.bindAddressDetailsChange.apply(void 0,arguments)}},model:{value:e.addressData.address_details,callback:function(t){e.$set(e.addressData,"address_details",t)},expression:"addressData.address_details"}})],1),a("v-uni-view",{staticClass:"row default-row"},[a("v-uni-text",{staticClass:"tit"},[e._v("设为默认")]),a("v-uni-switch",{attrs:{checked:!!e.addressData.is_default,color:"#fa436a"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.switchChange.apply(void 0,arguments)}}})],1),a("v-uni-button",{staticClass:"add-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.confirm.apply(void 0,arguments)}}},[e._v("提交")]),e.loading?a("rf-loading"):e._e()],1)},n=[]},cae5:function(e,t,a){"use strict";var r=a("5944"),i=a.n(r);i.a},f0a5:function(e,t,a){"use strict";var r=a("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var i=r(a("3b8d")),n=a("802d"),s=r(a("c1eb")),d={components:{rfPickRegions:s.default},data:function(){return{addressData:{realname:"",mobile:"",address_details:"",address_name:"请选择地址",address:"",is_default:!1,province_id:"",city_id:"",area_id:""},multiArray:[[],[],[]],multiIndex:[0,0,0],loading:!0}},onLoad:function(e){this.initData(e)},methods:{handleGetRegions:function(e){this.addressData.province_id=e.province_id,this.addressData.city_id=e.city_id,this.addressData.area_id=e.area_id},initData:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var a,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a="新增收货地址","edit"!==t.type){e.next=7;break}return a="编辑收货地址",e.next=5,this.getAddressDetail(t.id);case 5:e.next=8;break;case 7:setTimeout((function(){r.loading=!1}),1e3);case 8:this.manageType=t.type,uni.setNavigationBarTitle({title:a});case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getAddressDetail:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("".concat(n.addressDetail),{id:t}).then(function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a.addressData=t.data,setTimeout((function(){a.loading=!1}),1e3);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){a.loading=!1}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleRealNameChange:function(e){this.addressData.realname=e.detail.value},bindAddressDetailsChange:function(e){this.addressData.address_details=e.detail.value},handleMobileChange:function(e){this.addressData.mobile=e.detail.value},switchChange:function(e){this.addressData.is_default=e.detail.value},confirm:function(){var e=this.addressData;e.realname?/(^1[3|4|5|7|8][0-9]{9}$)/.test(e.mobile)?"edit"===this.manageType?this.handleAddressUpdate(e):this.handleAddressCreate(e):this.$mHelper.toast("请输入正确的手机号码"):this.$mHelper.toast("请填写收货人姓名")},handleAddressUpdate:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.put("".concat(n.addressUpdate,"?id=").concat(t.id),{realname:t.realname,mobile:t.mobile,address_details:t.address_details,is_default:t.is_default?1:0,province_id:t.province_id,city_id:t.city_id,area_id:t.area_id}).then((function(){a.$mHelper.toast("收货地址修改成功！"),a.$mRouter.back()}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleAddressCreate:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("".concat(n.addressCreate),{realname:t.realname,mobile:t.mobile,address_details:t.address_details,is_default:t.is_default?1:0,province_id:t.province_id,city_id:t.city_id,area_id:t.area_id}).then((function(){a.$mHelper.toast("收货地址修改成功！"),a.$mRouter.back()}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}};t.default=d},f106:function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,"uni-page-body[data-v-5a46760f]{background:#f8f8f8}.address-manage[data-v-5a46760f]{padding-top:%?16?%}body.?%PAGE?%[data-v-5a46760f]{background:#f8f8f8}",""]),e.exports=t},f661:function(e,t,a){"use strict";a.r(t);var r=a("0d21"),i=a.n(r);for(var n in r)"default"!==n&&function(e){a.d(t,e,(function(){return r[e]}))}(n);t["default"]=i.a},fa79:function(e,t,a){"use strict";var r;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-picker",{attrs:{mode:"multiSelector",value:e.multiIndex,"range-key":"title",range:e.multiArray},on:{columnchange:function(t){arguments[0]=t=e.$handleEvent(t),e.bindMultiPickerColumnChange.apply(void 0,arguments)}}},[e._v(e._s(e.multiStr))])},n=[]}}]);