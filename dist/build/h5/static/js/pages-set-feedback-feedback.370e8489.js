(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-feedback-feedback"],{"0eda":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var a={"rf-image":i("b19a").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"feedback-title"},[i("v-uni-text",[e._v("问题和意见")]),i("v-uni-text",{staticClass:"feedback-quick",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseMsg.apply(void 0,arguments)}}},[e._v("快速键入"),i("v-uni-text",{staticClass:"iconfont iconxia"})],1)],1),i("v-uni-view",{staticClass:"feedback-body"},[i("v-uni-textarea",{staticClass:"feedback-textare",attrs:{placeholder:"请详细描述你的问题和意见..."},model:{value:e.sendDate.content,callback:function(t){e.$set(e.sendDate,"content",t)},expression:"sendDate.content"}})],1),i("v-uni-view",{staticClass:"feedback-title"},[i("v-uni-text",[e._v("图片(选填,提供问题截图,总大小10M以下)")])],1),i("v-uni-view",{staticClass:"feedback-body feedback-uploader rf-uploader"},[i("v-uni-view",{staticClass:"uni-uploader"},[i("v-uni-view",{staticClass:"uni-uploader-head"},[i("v-uni-view",{staticClass:"uni-uploader-title"},[e._v("点击预览图片")]),i("v-uni-view",{staticClass:"uni-uploader-info"},[e._v(e._s(e.imageList.length)+"/9")])],1),i("v-uni-view",{staticClass:"uni-uploader-body"},[i("v-uni-view",{staticClass:"uni-uploader__files"},[e._l(e.imageList,(function(t,a){return[i("v-uni-view",{key:a+"_0",staticClass:"uni-uploader__file",staticStyle:{position:"relative"}},[i("rf-image",{staticClass:"uni-uploader__img",attrs:{src:t}}),i("v-uni-view",{staticClass:"close-view",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close(a)}}},[e._v("x")])],1)]})),e.imageList.length<8?i("v-uni-view",{staticClass:"uni-uploader__input-box"},[i("v-uni-view",{staticClass:"uni-uploader__input",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadImage.apply(void 0,arguments)}}})],1):e._e()],2)],1)],1)],1),i("v-uni-view",{staticClass:"feedback-title"},[i("v-uni-text",[e._v("反馈类型")])],1),i("v-uni-view",{staticClass:"feedback-body"},[i("v-uni-radio-group",{staticClass:"feedback-type",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.handleFeedbackTypeChange.apply(void 0,arguments)}}},e._l(e.feedbackType,(function(t,a){return i("v-uni-label",{key:a,staticClass:"feedback-type-item"},[i("v-uni-radio",{attrs:{color:"#fa436a",value:t.value,checked:t.value===e.sendDate.type}}),i("v-uni-text",[e._v(e._s(t.name))])],1)})),1)],1),i("v-uni-view",{staticClass:"feedback-title"},[i("v-uni-text",[e._v("QQ/邮箱/手机号")])],1),i("v-uni-view",{staticClass:"feedback-body"},[i("v-uni-input",{staticClass:"feedback-input",attrs:{placeholder:"(选填,方便我们联系你 )"},model:{value:e.sendDate.contact_way,callback:function(t){e.$set(e.sendDate,"contact_way",t)},expression:"sendDate.contact_way"}})],1),i("v-uni-button",{staticClass:"feedback-submit",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.send.apply(void 0,arguments)}}},[e._v("提交")]),i("v-uni-view",{staticClass:"feedback-title"},[i("v-uni-text",[e._v("反馈结果可在设置 -> 意见反馈 -> 点击列表后查看！")])],1)],1)},r=[]},1514:function(e,t,i){var a=i("8d6e");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("70a4feb1",a,!0,{sourceMap:!1,shadowMode:!1})},4428:function(e,t,i){"use strict";i.r(t);var a=i("d156"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},"802d":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.orderProductIndex=t.orderCustomerRefundClose=t.orderCustomerRefundApply=t.orderCustomerSalesReturn=t.rechargeConfigIndex=t.thirdPartyAuthDelete=t.thirdPartyAuthList=t.opinionDetail=t.opinionCreate=t.opinionList=t.uploadImage=t.orderInvoiceList=t.invoiceDel=t.invoiceDefault=t.invoiceDetail=t.invoiceUpdate=t.invoiceCreate=t.invoiceList=t.evaluateAgain=t.evaluateCreate=t.creditsLogList=t.collectList=t.footPrintDel=t.footPrintList=t.couponReceive=t.orderTakeDelivery=t.orderDelete=t.orderDetail=t.orderProductSalesReturn=t.closeOrderRefundApply=t.orderRefundApply=t.orderList=t.couponDetail=t.couponClear=t.myCouponList=t.couponList=t.addressDelete=t.addressUpdate=t.addressDetail=t.addressDefault=t.addressCreate=t.addressList=t.memberUpdate=t.memberInfo=void 0;var a="/tiny-shop/v1/member/member/index";t.memberInfo=a;var n="/tiny-shop/v1/member/member/update";t.memberUpdate=n;var r="/tiny-shop/v1/member/address/index";t.addressList=r;var o="/tiny-shop/v1/member/address/default";t.addressDefault=o;var s="/tiny-shop/v1/member/address/view";t.addressDetail=s;var d="/tiny-shop/v1/member/address/create";t.addressCreate=d;var c="/tiny-shop/v1/member/address/update";t.addressUpdate=c;var u="/tiny-shop/v1/member/address/delete";t.addressDelete=u;var v="/tiny-shop/v1/marketing/coupon-type/index";t.couponList=v;var l="/tiny-shop/v1/member/coupon/index";t.myCouponList=l;var p="/tiny-shop/v1/marketing/coupon-type/view";t.couponDetail=p;var f="/tiny-shop/v1/marketing/coupon-type/create";t.couponReceive=f;var m="/tiny-shop/v1/member/coupon/clear";t.couponClear=m;var b="/tiny-shop/v1/member/order/index";t.orderList=b;var h="/tiny-shop/v1/member/order/take-delivery";t.orderTakeDelivery=h;var y="/tiny-shop/v1/member/order-product/refund-apply";t.orderRefundApply=y;var g="/tiny-shop/v1/member/order-product/refund-sales-return";t.orderProductSalesReturn=g;var k="/tiny-shop/v1/member/order-product/refund-close";t.closeOrderRefundApply=k;var w="/tiny-shop/v1/member/order/view";t.orderDetail=w;var C="/tiny-shop/v1/member/order/delete";t.orderDelete=C;var x="/tiny-shop/v1/member/footprint/index";t.footPrintList=x;var D="/tiny-shop/v1/member/footprint/delete";t.footPrintDel=D;var _="/tiny-shop/v1/member/collect/index";t.collectList=_;var L="/tiny-shop/v1/member/credits-log/index";t.creditsLogList=L;var P="/tiny-shop/v1/member/evaluate/create";t.evaluateCreate=P;var O="/tiny-shop/v1/member/evaluate/again";t.evaluateAgain=O;var j="/tiny-shop/v1/member/order-product/index";t.orderProductIndex=j;var R="/tiny-shop/v1/member/invoice/index";t.invoiceList=R;var I="/tiny-shop/v1/member/invoice/create";t.invoiceCreate=I;var A="/tiny-shop/v1/member/invoice/update";t.invoiceUpdate=A;var $="/tiny-shop/v1/member/invoice/view";t.invoiceDetail=$;var E="/tiny-shop/v1/member/invoice/default";t.invoiceDefault=E;var U="/tiny-shop/v1/member/invoice/delete";t.invoiceDel=U;var S="/tiny-shop/v1/member/order-invoice/index";t.orderInvoiceList=S;var T="/tiny-shop/v1/member/opinion/index";t.opinionList=T;var z="/tiny-shop/v1/member/opinion/create";t.opinionCreate=z;var M="/tiny-shop/v1/member/opinion/view";t.opinionDetail=M;var F="/tiny-shop/v1/member/auth/index";t.thirdPartyAuthList=F;var q="/tiny-shop/v1/member/auth/delete";t.thirdPartyAuthDelete=q;var J="/tiny-shop/v1/member/recharge-config/index";t.rechargeConfigIndex=J;var G="/tiny-shop/v1/member/order-customer/apply";t.orderCustomerRefundApply=G;var Q="/tiny-shop/v1/member/order-customer/sales-return";t.orderCustomerSalesReturn=Q;var B="/tiny-shop/v1/member/order-customer/close";t.orderCustomerRefundClose=B;var N="/tiny-shop/v1/common/file/images";t.uploadImage=N},"85f4":function(e,t,i){"use strict";i.r(t);var a=i("0eda"),n=i("4428");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("c8d2");var o,s=i("f0c5"),d=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"9e91d6a6",null,!1,a["a"],o);t["default"]=d.exports},"8d6e":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-9e91d6a6]{background-color:#f8f8f8}.feedback-title[data-v-9e91d6a6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?%;color:#8f8f94;font-size:%?28?%}.feedback-star-view.feedback-title[data-v-9e91d6a6]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;margin:0}.feedback-quick[data-v-9e91d6a6]{position:relative;padding-right:%?40?%}.feedback-quick .iconfont[data-v-9e91d6a6]{font-size:%?24?%}.feedback-body[data-v-9e91d6a6]{background:#fff}.feedback-body .feedback-type[data-v-9e91d6a6]{padding:%?20?%}.feedback-body .feedback-type .feedback-type-item[data-v-9e91d6a6]{margin-right:%?20?%}.feedback-textare[data-v-9e91d6a6]{height:%?200?%;font-size:%?34?%;line-height:%?50?%;width:100%;box-sizing:border-box;padding:%?20?% %?30?% 0}.feedback-input[data-v-9e91d6a6]{font-size:%?28?%;height:%?72?%;min-height:%?50?%;padding:%?15?% %?20?%;line-height:%?72?%}.feedback-uploader[data-v-9e91d6a6]{padding:%?22?% %?20?%}.feedback-submit[data-v-9e91d6a6]{background:#fa436a;color:#fff;margin:%?20?%}body.?%PAGE?%[data-v-9e91d6a6]{background-color:#f8f8f8}",""]),e.exports=t},c8d2:function(e,t,i){"use strict";var a=i("1514"),n=i.n(a);n.a},d156:function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("8e6e"),i("456d");var n=a(i("bd86"));i("96cf");var r=a(i("3b8d"));i("ac6a");var o=i("802d");function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){(0,n.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var c={data:function(){return{msgContents:["界面显示错乱","启动缓慢，卡出翔了","UI无法直视，丑哭了","偶发性崩溃"],stars:[1,2,3,4,5],imageList:[],feedbackType:[{value:"1",name:"功能建议"},{value:"2",name:"BUG反馈"},{value:"3",name:"业务咨询"}],sendDate:{type:"1",covers:"",content:"",contact_way:""}}},methods:{handleFeedbackTypeChange:function(e){this.sendDate.type=e.detail.value},uploadImage:function(){var e=this;uni.chooseImage({count:6,sizeType:["original","compressed"],sourceType:["album"],success:function(t){e.handleUploadFile(t.tempFilePaths)}})},handleUploadFile:function(e){var t=this;e.forEach((function(e){t.$http.upload(o.uploadImage,{filePath:e,name:"file"}).then((function(e){t.imageList.push(e.data.url)}))}))},close:function(e){this.imageList.splice(e,1)},chooseMsg:function(){var e=this;uni.showActionSheet({itemList:this.msgContents,success:function(t){e.sendDate.content=e.msgContents[t.tapIndex]}})},send:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.sendDate.covers=JSON.stringify(this.imageList),e.next=3,this.$http.post("".concat(o.opinionCreate),d({},this.sendDate)).then((function(){t.$mRouter.back()}));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};t.default=c}}]);