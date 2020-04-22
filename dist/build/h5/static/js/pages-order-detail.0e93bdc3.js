(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-detail"],{"1e33":function(t,e,i){"use strict";i.r(e);var a=i("d1cc"),r=i("d92a");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("e195");var s,o=i("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"0f6e8d2c",null,!1,a["a"],s);e["default"]=c.exports},4596:function(t,e,i){var a=i("bb3a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("0fd41cd4",a,!0,{sourceMap:!1,shadowMode:!1})},"467e":function(t,e,i){"use strict";i.r(e);var a=i("c66c"),r=i("ced0");for(var n in r)"default"!==n&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("85f45");var s,o=i("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"587ac483",null,!1,a["a"],s);e["default"]=c.exports},"51f2":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var r=a(i("3b8d"));i("ac6a");var n=a(i("5028")),s=a(i("93f4")),o=a(i("1e33")),c=i("c4c8"),l=i("802d"),d={components:{rfNoData:o.default},data:function(){return{orderDetail:{},loading:!0,errInfo:null,order_id:null}},computed:{orderTimeLine:function(){var t=[];return 0!=this.orderDetail.created_at&&t.push({time:this.orderDetail.created_at,value:"订单创建"}),this.orderDetail.close_time<((new Date).getTime()/1e3&&0!=this.orderDetail.pay_time)&&t.push({time:this.orderDetail.close_time,value:"未付款订单关闭时间"}),0!=this.orderDetail.pay_time&&t.push({time:this.orderDetail.pay_time,value:"订单支付"}),0!=this.orderDetail.shipping_time&&t.push({time:this.orderDetail.shipping_time,value:"买家要求发货"}),0!=this.orderDetail.consign_time&&t.push({time:this.orderDetail.consign_time,value:"卖家发货"}),0!=this.orderDetail.sign_time&&t.push({time:this.orderDetail.sign_time,value:"买家确认收货"}),0!=this.orderDetail.finish_time&&t.push({time:this.orderDetail.finish_time,value:"订单完成"}),t}},filters:{time:function(t){return(0,n.default)(1e3*t).format("YYYY-MM-DD HH:mm:ss")},orderStatusFilter:function(t){var e=null;return s.default.orderStatus.forEach((function(i){i.key===parseInt(t,10)&&(e=i.value)})),e},filterProductStatus:function(t){var e=null;return 0!==parseInt(t.refund_status,10)&&-1!==parseInt(t.refund_status,10)&&-2!==parseInt(t.refund_status,10)?s.default.refundStatus.forEach((function(i){i.key===parseInt(t.refund_status,10)&&(e=i.value)})):4===parseInt(t.order_status,10)?s.default.evaluateStatus.forEach((function(i){i.key==t.is_evaluate&&(e=i.value)})):(s.default.orderStatus.forEach((function(i){i.key===parseInt(t.order_status,10)&&(e=i.value)})),1==t.order_status&&1==t.shipping_status&&(e="已发货")),e},filterShippingType:function(t){var e=["","物流配送","买家自提","本地配送"];return e[parseInt(t,10)]}},onLoad:function(t){this.order_id=t.id},onShow:function(){this.initData()},methods:{navTo:function(t){this.$mRouter.push({route:t})},navToEvaluation:function(t,e){this.$mRouter.push({route:"/pages/order/evaluation/evaluation?data=".concat(JSON.stringify(t),"&type=").concat(e)})},navToRefund:function(t,e){this.$mRouter.push({route:"/pages/order/refund/refund?data=".concat(JSON.stringify(t),"&refundType=").concat(e)})},navToShippingReturn:function(t){this.$mRouter.push({route:"/pages/order/shipping/return?data=".concat(JSON.stringify(t))})},handleOrderOperation:function(t,e,i){switch(e){case"detail":this.navTo("/pages/order/detail?id=".concat(t.id));break;case"evaluation":this.navTo("/pages/order/evaluation/evaluation?order_id=".concat(t.id));break;case"close":this.handleOrderClose(t.id);break;case"delete":this.handleOrderDelete(t.id);break;case"shipping":this.navTo("/pages/order/shipping/shipping?id=".concat(t.id));break;case"delivery":this.handleOrderTakeDelivery(t.id);break}},initData:function(){this.getOrderDetail()},getOrderDetail:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("".concat(l.orderDetail),{id:this.order_id}).then((function(t){e.loading=!1,e.orderDetail=t.data})).catch((function(t){e.loading=!1,e.errInfo=t}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleOrderClose:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("".concat(c.orderClose),{id:e}).then((function(){i.$mHelper.toast("订单取消成功"),i.getOrderDetail()}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleOrderDelete:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.delete("".concat(l.orderDelete,"?id=").concat(e),{}).then((function(){i.$mHelper.toast("订单删除成功"),i.$mRouter.back()}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleOrderTakeDelivery:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){var i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("".concat(l.orderTakeDelivery),{id:e}).then((function(){i.$mHelper.toast("确认收货成功"),i.getOrderDetail()}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleCloseOrderRefundApply:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e,i){var a,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=l.closeOrderRefundApply,4===parseInt(e,10)&&(a=l.orderCustomerRefundClose),t.next=4,this.$http.post("".concat(a),{id:i}).then((function(t){r.$mHelper.toast("取消成功"),r.getOrderDetail()}));case 4:case"end":return t.stop()}}),t,this)})));function e(e,i){return t.apply(this,arguments)}return e}()}};e.default=d},"802d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.orderProductIndex=e.orderCustomerRefundClose=e.orderCustomerRefundApply=e.orderCustomerSalesReturn=e.rechargeConfigIndex=e.thirdPartyAuthDelete=e.thirdPartyAuthList=e.opinionDetail=e.opinionCreate=e.opinionList=e.uploadImage=e.orderInvoiceList=e.invoiceDel=e.invoiceDefault=e.invoiceDetail=e.invoiceUpdate=e.invoiceCreate=e.invoiceList=e.evaluateAgain=e.evaluateCreate=e.creditsLogList=e.collectList=e.footPrintDel=e.footPrintList=e.couponReceive=e.orderTakeDelivery=e.orderDelete=e.orderDetail=e.orderProductSalesReturn=e.closeOrderRefundApply=e.orderRefundApply=e.orderList=e.couponDetail=e.couponClear=e.myCouponList=e.couponList=e.addressDelete=e.addressUpdate=e.addressDetail=e.addressDefault=e.addressCreate=e.addressList=e.memberUpdate=e.memberInfo=void 0;var a="/tiny-shop/v1/member/member/index";e.memberInfo=a;var r="/tiny-shop/v1/member/member/update";e.memberUpdate=r;var n="/tiny-shop/v1/member/address/index";e.addressList=n;var s="/tiny-shop/v1/member/address/default";e.addressDefault=s;var o="/tiny-shop/v1/member/address/view";e.addressDetail=o;var c="/tiny-shop/v1/member/address/create";e.addressCreate=c;var l="/tiny-shop/v1/member/address/update";e.addressUpdate=l;var d="/tiny-shop/v1/member/address/delete";e.addressDelete=d;var u="/tiny-shop/v1/marketing/coupon-type/index";e.couponList=u;var v="/tiny-shop/v1/member/coupon/index";e.myCouponList=v;var p="/tiny-shop/v1/marketing/coupon-type/view";e.couponDetail=p;var f="/tiny-shop/v1/marketing/coupon-type/create";e.couponReceive=f;var m="/tiny-shop/v1/member/coupon/clear";e.couponClear=m;var b="/tiny-shop/v1/member/order/index";e.orderList=b;var h="/tiny-shop/v1/member/order/take-delivery";e.orderTakeDelivery=h;var g="/tiny-shop/v1/member/order-product/refund-apply";e.orderRefundApply=g;var y="/tiny-shop/v1/member/order-product/refund-sales-return";e.orderProductSalesReturn=y;var x="/tiny-shop/v1/member/order-product/refund-close";e.closeOrderRefundApply=x;var _="/tiny-shop/v1/member/order/view";e.orderDetail=_;var w="/tiny-shop/v1/member/order/delete";e.orderDelete=w;var C="/tiny-shop/v1/member/footprint/index";e.footPrintList=C;var D="/tiny-shop/v1/member/footprint/delete";e.footPrintDel=D;var k="/tiny-shop/v1/member/collect/index";e.collectList=k;var O="/tiny-shop/v1/member/credits-log/index";e.creditsLogList=O;var R="/tiny-shop/v1/member/evaluate/create";e.evaluateCreate=R;var j="/tiny-shop/v1/member/evaluate/again";e.evaluateAgain=j;var P="/tiny-shop/v1/member/order-product/index";e.orderProductIndex=P;var A="/tiny-shop/v1/member/invoice/index";e.invoiceList=A;var S="/tiny-shop/v1/member/invoice/create";e.invoiceCreate=S;var T="/tiny-shop/v1/member/invoice/update";e.invoiceUpdate=T;var I="/tiny-shop/v1/member/invoice/view";e.invoiceDetail=I;var E="/tiny-shop/v1/member/invoice/default";e.invoiceDefault=E;var L="/tiny-shop/v1/member/invoice/delete";e.invoiceDel=L;var Z="/tiny-shop/v1/member/order-invoice/index";e.orderInvoiceList=Z;var G="/tiny-shop/v1/member/opinion/index";e.opinionList=G;var Y="/tiny-shop/v1/member/opinion/create";e.opinionCreate=Y;var z="/tiny-shop/v1/member/opinion/view";e.opinionDetail=z;var M="/tiny-shop/v1/member/auth/index";e.thirdPartyAuthList=M;var N="/tiny-shop/v1/member/auth/delete";e.thirdPartyAuthDelete=N;var H="/tiny-shop/v1/member/recharge-config/index";e.rechargeConfigIndex=H;var U="/tiny-shop/v1/member/order-customer/apply";e.orderCustomerRefundApply=U;var J="/tiny-shop/v1/member/order-customer/sales-return";e.orderCustomerSalesReturn=J;var W="/tiny-shop/v1/member/order-customer/close";e.orderCustomerRefundClose=W;var F="/tiny-shop/v1/common/file/images";e.uploadImage=F},"85f45":function(t,e,i){"use strict";var a=i("b43d"),r=i.n(a);r.a},b43d:function(t,e,i){var a=i("ce2f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("43d433bc",a,!0,{sourceMap:!1,shadowMode:!1})},bb3a:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".rf-no-data[data-v-0f6e8d2c]{width:100%;height:calc(100vh - %?90?%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.rf-no-data .image[data-v-0f6e8d2c]{width:60vw;height:40vw;margin-bottom:%?40?%}.rf-no-data .image uni-image[data-v-0f6e8d2c]{width:100%;height:100%}.rf-no-data .content[data-v-0f6e8d2c]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;letter-spacing:%?1?%}.rf-no-data .content .title[data-v-0f6e8d2c]{font-size:%?36?%}.rf-no-data .content .desc[data-v-0f6e8d2c]{font-size:%?28?%;margin-top:%?6?%}.rf-no-data .content .btn[data-v-0f6e8d2c]{width:%?160?%;height:%?65?%;color:#868d91;font-size:%?24?%;margin-top:%?34?%;border-radius:%?36?%;border:%?1?% solid #d4d4d4}.rf-no-data .content .btn[data-v-0f6e8d2c]::after{border:none}.rf-no-data .back[data-v-0f6e8d2c]{margin-top:%?20?%}.rf-no-data .back .btn[data-v-0f6e8d2c]{margin-left:%?10?%;color:#4399fc}",""]),t.exports=e},c66c:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={"rf-image":i("b19a").default,"rf-loading":i("a7c6").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"rf-order-detail"},[t.orderDetail.product?i("v-uni-view",{staticClass:"order-detail"},[i("v-uni-view",{staticClass:"rf-address-section"},[i("v-uni-view",{staticClass:"order-content"},[i("i",{staticClass:"iconfont iconshouhuodizhi"}),i("v-uni-view",{staticClass:"cen"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.orderDetail.receiver_name))]),i("v-uni-text",{staticClass:"mobile"},[t._v(t._s(t.orderDetail.receiver_mobile))])],1),i("v-uni-text",{staticClass:"address"},[t._v(t._s(t.orderDetail.receiver_region_name)+" "+t._s(t.orderDetail.receiver_address))])],1)],1),i("v-uni-image",{staticClass:"a-bg",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAFCAYAAAAaAWmiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjkzMjM2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3RjkzMjQ2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTdGOTMyMTY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTdGOTMyMjY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrEOZlQAAAiuSURBVHjazJp7bFvV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"}})],1),i("v-uni-view",{staticClass:"rf-goods-section"},[i("v-uni-view",{staticClass:"g-header b-b"},[i("v-uni-text",{staticClass:"name in1line"},[t._v("订单号："+t._s(t.orderDetail.order_sn))]),i("v-uni-text",{staticClass:"name red"},[t._v(t._s(t._f("orderStatusFilter")(t.orderDetail.order_status)))])],1),t._l(t.orderDetail.product,(function(e,a){return i("v-uni-view",{key:a,staticClass:"g-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/product/product?id="+e.product_id)}}},[i("rf-image",{attrs:{src:e.product_picture}}),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"title clamp in2line"},[t._v(t._s(e.product_name))]),i("v-uni-text",{staticClass:"spec"},[t._v(t._s(e.sku_name||"基础款")+"  * "+t._s(e.num))]),i("v-uni-view",{staticClass:"price-box"},[i("v-uni-text",{staticClass:"price-wrapper"},[i("v-uni-text",{staticClass:"price base-color"},[t._v("￥ "+t._s(e.product_money))])],1),i("v-uni-text",{staticClass:"status spec-color",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[t._v(t._s(t._f("filterProductStatus")(e)))])],1),i("v-uni-view",{staticClass:"btn-box"},[3!=e.order_status&&4!=e.order_status||0!=e.is_evaluate||0!=e.refund_status&&-2!=e.refund_status&&-3!=e.refund_status?t._e():i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.navToEvaluation(e)}}},[t._v("我要评价")]),3!=e.order_status&&4!=e.order_status||1!=e.is_evaluate||0!=e.refund_status&&-2!=e.refund_status&&-3!=e.refund_status?t._e():i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.navToEvaluation(e,"add")}}},[t._v("追加评价")]),1!=e.order_status||1==e.shipping_status||0!=e.refund_status&&-3!=e.refund_status?t._e():i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.navToRefund(e,1)}}},[t._v("申请退款")]),2!=e.order_status||1!=e.shipping_status||0!=e.refund_status&&-3!=e.refund_status?t._e():i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.navToRefund(e,2)}}},[t._v("申请退换")]),3!=e.order_status&&4!=e.order_status||0!=e.refund_status&&-3!=e.refund_status?t._e():i("v-uni-button",{staticClass:"action-btn",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.navToRefund(e,3)}}},[t._v("申请退换")]),2!=e.order_status&&3!=e.order_status&&4!=e.order_status||2!=e.refund_status?t._e():i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.navToShippingReturn(e)}}},[t._v("填写退货信息")]),1==e.refund_status||2==e.refund_status||3==e.refund_status||4==e.refund_status||-1==e.refund_status?i("v-uni-button",{staticClass:"action-btn",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.handleCloseOrderRefundApply(e.order_status,e.id)}}},[t._v("取消退款")]):t._e()],1)],1)],1)}))],2),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon"},[t._v("券")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("优惠券")]),i("v-uni-text",{staticClass:"cell-tip active"},[t._v(t._s(t.orderDetail.coupon&&t.orderDetail.coupon.title||"未使用优惠券"))]),i("v-uni-text",{staticClass:"cell-more wanjia wanjia-gengduo-d"})],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon"},[t._v("寄")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("配送方式")]),i("v-uni-text",{staticClass:"cell-tip active"},[t._v(t._s(t._f("filterShippingType")(t.orderDetail.shipping_type)))]),i("v-uni-text",{staticClass:"cell-more wanjia wanjia-gengduo-d"})],1),t.orderDetail.company_name?i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon"},[t._v("司")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("快递公司")]),i("v-uni-text",{staticClass:"cell-tip active"},[t._v(t._s(t.orderDetail.company_name))]),i("v-uni-text",{staticClass:"cell-more wanjia wanjia-gengduo-d"})],1):t._e(),"积分兑换"!=t.orderDetail.payment_explain?i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon hb"},[t._v("减")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("积分抵扣")]),i("v-uni-text",{staticClass:"cell-tip disabled"}),i("v-uni-text",{staticClass:"cell-tip disabled"},[t._v("已用"+t._s(t.orderDetail.point||0)+"积分抵用"+t._s(t.orderDetail.point_money||0)+"元")])],1):i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon hb"},[t._v("减")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("积分下单")]),i("v-uni-text",{staticClass:"cell-tip disabled"}),i("v-uni-text",{staticClass:"cell-tip disabled"},[t._v("消耗了"+t._s(t.orderDetail.point||0)+"积分")])],1)],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("商品金额")]),i("v-uni-text",{staticClass:"cell-tip red"},[t._v("￥"+t._s(t.orderDetail.order_money))])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("优惠金额")]),i("v-uni-text",{staticClass:"cell-tip red"},[t._v("-￥ "+t._s(t.orderDetail.coupon_money))])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("运费")]),i("v-uni-text",{staticClass:"cell-tip red"},[i("v-uni-text",[t._v("￥ "+t._s(t.orderDetail.shipping_money))])],1)],1),t.orderDetail.invoice?i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("开具发票")]),i("v-uni-text",{staticClass:"cell-tip red in1line"},[i("v-uni-text",[t._v(t._s("电子发票 -"+(1===parseInt(t.orderDetail.invoice&&t.orderDetail.invoice.type,10)?"公司":"个人")+"-"+(t.orderDetail.invoice&&t.orderDetail.invoice.title)+" [ "+(t.orderDetail.invoice&&t.orderDetail.invoice.content)+" ]"))])],1)],1):t._e(),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("发票税费")]),i("v-uni-text",{staticClass:"cell-tip red"},[i("v-uni-text",[t._v("￥ "+t._s(t.orderDetail.tax_money))])],1)],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("赠送积分")]),i("v-uni-text",{staticClass:"cell-tip"},[i("v-uni-text",[t._v(t._s(t.orderDetail.give_point)+" 积分")])],1)],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("实付金额")]),i("v-uni-text",{staticClass:"cell-tip red"},[t._v("￥ "+t._s(t.orderDetail.pay_money))])],1)],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("备注")]),i("v-uni-text",{staticClass:"cell-tip"},[t._v(t._s(t.orderDetail.buyer_message))])],1)],1),i("v-uni-view",{staticClass:"uni-timeline"},t._l(t.orderTimeLine,(function(e,a){return i("v-uni-view",{key:a,staticClass:"uni-timeline-item",class:{"uni-timeline-first-item":0===a,"uni-timeline-last-item":a===t.orderTimeLine.length-1}},[i("v-uni-view",{staticClass:"uni-timeline-item-divider"}),i("v-uni-view",{staticClass:"uni-timeline-item-content"},[i("v-uni-view",[t._v(t._s(e.value))]),i("v-uni-view",{staticClass:"datetime"},[t._v(t._s(t._f("time")(e.time)))])],1)],1)})),1),1!=t.orderDetail.order_status?i("v-uni-view",{staticClass:"footer"},[2==t.orderDetail.order_status?i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleOrderOperation(t.orderDetail,"delivery")}}},[t._v("确认收货")]):t._e(),3!=t.orderDetail.order_status&&4!=t.orderDetail.order_status||0!=t.orderDetail.is_evaluate?t._e():i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleOrderOperation(t.orderDetail,"evaluation")}}},[t._v("批量评价")]),0==t.orderDetail.order_status?i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/user/money/pay?id="+t.orderDetail.id)}}},[t._v("立即支付")]):t._e(),4!=t.orderDetail.order_status&&3!=t.orderDetail.order_status&&2!=t.orderDetail.order_status||1==t.orderDetail.is_virtual?t._e():i("v-uni-button",{staticClass:"action-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleOrderOperation(t.orderDetail,"shipping")}}},[t._v("查看物流")]),-4==t.orderDetail.order_status?i("v-uni-button",{staticClass:"action-btn recom",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleOrderOperation(t.orderDetail,"delete")}}},[t._v("删除订单")]):t._e(),0==t.orderDetail.order_status?i("v-uni-button",{staticClass:"action-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleOrderOperation(t.orderDetail,"close")}}},[t._v("取消订单")]):t._e()],1):t._e()],1):t._e(),t.orderDetail.product||t.loading?t._e():i("v-uni-view",[i("rf-no-data",{attrs:{custom:!0}},[i("v-uni-view",{staticClass:"title",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getOrderDetail.apply(void 0,arguments)}}},[t._v(t._s(t.errInfo||"订单不存在")+"，\n\t\t\t\t点击"),i("v-uni-text",{staticClass:"spec-color"},[t._v("重新加载")])],1)],1)],1),t.loading?i("rf-loading"):t._e()],1)},n=[]},ce2f:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-587ac483]{background:#f8f8f8}.order-detail[data-v-587ac483]{padding-bottom:%?100?%}.rf-goods-section .g-header[data-v-587ac483]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.rf-goods-section .g-header .red[data-v-587ac483]{color:#fa436a}.rf-goods-section .g-item[data-v-587ac483]{border-bottom:%?1?% solid rgba(0,0,0,.1)}.rf-goods-section .right .price-box[data-v-587ac483]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#303133;border-bottom:%?1?% solid rgba(0,0,0,.05)}.rf-goods-section .right .price-box .price-wrapper[data-v-587ac483]{margin-bottom:%?10?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.rf-goods-section .right .price-box .price-wrapper .price[data-v-587ac483]{font-size:%?24?%;margin-bottom:%?4?%}.rf-goods-section .right .price-box .price-wrapper .number[data-v-587ac483]{font-size:%?24?%;color:#606266;margin-left:%?24?%}.rf-goods-section .right .price-box .status[data-v-587ac483]{font-size:%?24?%;margin-left:%?10?%;color:#fa436a}.rf-goods-section .right .price-box .spec-color[data-v-587ac483]{color:#4399fc}.rf-goods-section .right .btn-box .action-btn[data-v-587ac483]{font-size:%?24?%;padding:0 %?20?%;text-align:center;height:%?48?%;line-height:%?48?%}.yt-list[data-v-587ac483]{margin-top:%?16?%;background:#fff}.yt-list .yt-list-cell[data-v-587ac483]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?30?% %?10?% %?40?%;line-height:%?70?%;position:relative}.yt-list .yt-list-cell.cell-hover[data-v-587ac483]{background:#fafafa}.yt-list .yt-list-cell.b-b[data-v-587ac483]:after{left:%?30?%}.yt-list .yt-list-cell .cell-icon[data-v-587ac483]{height:%?32?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;border-radius:%?4?%;margin-right:%?12?%}.yt-list .yt-list-cell .cell-icon.hb[data-v-587ac483]{background:#ffaa0e}.yt-list .yt-list-cell .cell-icon.lpk[data-v-587ac483]{background:#3ab54a}.yt-list .yt-list-cell .cell-more[data-v-587ac483]{-webkit-align-self:center;align-self:center;font-size:%?24?%;color:#909399;margin-left:%?8?%;margin-right:%?-10?%}.yt-list .yt-list-cell .cell-tit[data-v-587ac483]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;color:#909399;margin-right:%?10?%}.yt-list .yt-list-cell .cell-tip[data-v-587ac483]{font-size:%?26?%;color:#303133}.yt-list .yt-list-cell .cell-tip.disabled[data-v-587ac483]{color:#909399}.yt-list .yt-list-cell .cell-tip.active[data-v-587ac483]{color:#fa436a}.yt-list .yt-list-cell .cell-tip.red[data-v-587ac483]{color:#fa436a}.yt-list .yt-list-cell.desc-cell .cell-tit[data-v-587ac483]{max-width:%?90?%}.yt-list .yt-list-cell .desc[data-v-587ac483]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}.uni-timeline[data-v-587ac483]{padding:%?30?%;background-color:#fff}.footer[data-v-587ac483]{position:fixed;left:0;bottom:0;z-index:98;width:100%;height:%?100?%;background-color:#fff;color:#606266;padding-right:%?10?%;box-shadow:0 -1px 5px rgba(0,0,0,.1)}.action-btn[data-v-587ac483]{margin:%?20?% %?10?%;float:right;padding:0 %?30?%;text-align:center;height:%?60?%;line-height:%?60?%;font-size:%?24?%;color:#303133;background:#fff;border-radius:100px;border:1px solid rgba(0,0,0,.05)}.action-btn[data-v-587ac483]:after{border-radius:100px}.action-btn.recom[data-v-587ac483]{background:#fff9f9;color:#fa436a}.action-btn.recom[data-v-587ac483]:after{border-color:#f7bcc8}body.?%PAGE?%[data-v-587ac483]{background:#f8f8f8}",""]),t.exports=e},ced0:function(t,e,i){"use strict";i.r(e);var a=i("51f2"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},d1cc:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"rf-no-data hideToShow",style:{backgroundColor:t.bgColor}},[i("v-uni-view",{staticClass:"image"},[i("v-uni-image",{attrs:{src:1==t.custom?t.notFoundImg:t.noNetWorkImg}})],1),"none"==t.netType&&0==t.custom?i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"title",style:{color:t.mainColor}},[t._v(t._s(t.mainText))]),i("v-uni-text",{staticClass:"desc",style:{color:t.viceColor}},[t._v(t._s(t.viceText))])],1):t._e(),t._t("default"),i("v-uni-view",{staticClass:"back"},[t._v("或者"),i("v-uni-text",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/index/index")}}},[t._v("返回主页")])],1)],2)},n=[]},d92a:function(t,e,i){"use strict";i.r(e);var a=i("da8b"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},da8b:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("8e6e"),i("ac6a"),i("456d");var r=a(i("bd86")),n=i("2f62");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){(0,r.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var c={props:{isShow:{type:Boolean,default:!1},bgColor:{type:String,default:"#ffffff"},mainColor:{type:String,default:"#373a40"},viceColor:{type:String,default:"#8b8b8b"},custom:{type:Boolean,default:!1}},computed:o({},(0,n.mapGetters)(["networkStatus"])),data:function(){return{type:"",netType:this.networkType,mainText:"网络居然崩溃了",viceText:"别紧张,去检测一下网络设置",notFoundImg:this.$mAssetsPath.notFoundImg,noNetWorkImg:this.$mAssetsPath.noNetWorkImg}},methods:{setting:function(t){t&&this.$emit("handle",t)},navTo:function(t){this.$mRouter.reLaunch({route:t})}}};e.default=c},e195:function(t,e,i){"use strict";var a=i("4596"),r=i.n(a);r.a}}]);