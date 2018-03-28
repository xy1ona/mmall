require('./index.css')
var _mm = require('util/mm.js')

var nav = {
    init : function(){
        this.bindEvent();
        return this;
    },
    bindEvent : function () {
        // 登录点击事件
        $('.js-login').click(function(){
            _mm.doLogin();
        });
    }
}

module.exports = nav.init();