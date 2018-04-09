'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _mm             = require('util/mm.js');
var _product        = require('service/product-service.js');
// var Pagination      = require('util/pagination/index.js');
var templateIndex   = require('./index.string');

var page = {
    data : {
        listParam : {
            keyword         : _mm.getUrlParam('keyword')    || '',
            categoryId      : _mm.getUrlParam('categoryId') || '',
            orderBy         : _mm.getUrlParam('orderBy')    || 'default',
            pageNum         : _mm.getUrlParam('pageNum')    || 1,
            pageSize        : _mm.getUrlParam('pageSize')   || 20
        }
    },
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
        this.loadList();
    },
    bindEvent : function(){
        var _this = this;
        // 排序的点击事件
       
    },
    // 加载list数据
    loadList : function(){
        var _this = this;
        var listParam = this.data.listParam;
        var listHtml    = '';
        var $pListCon   = $('.p-list-con');
        _product.getProductList(listParam, function (res) {
            listHtml = _mm.renderHtml(templateIndex, {
                list :  res.list
            });
            $pListCon.html(listHtml);
            _this.loadPagination(res.pageNum, res.pages)
        }, function (errMsg) {
            _mm.errorTips(errMsg)
        })
    },
    // 加载分页信息
    loadPagination : function(pageNum, pages){
        var _this = this;
        console.log('加载分页信息')
    }
};
$(function(){
    page.init();
})