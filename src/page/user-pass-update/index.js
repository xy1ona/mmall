/*
* @Author: Rosen
* @Date:   2017-05-24 11:03:57
* @Last Modified by:   Rosen
* @Last Modified time: 2017-05-24 17:21:02
*/

'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide         = require('page/common/nav-side/index.js');
var _mm             = require('util/mm.js');
var _user           = require('service/user-service.js');

// page 逻辑部分
var page = {
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
        // 初始化左侧菜单
        navSide.init({
            name: 'user-pass-update'
        });
    },
    bindEvent : function(){
        var _this = this;
        // 点击提交按钮后的动作
        $(document).on('click', '.btn-submit', function () {
            var userInfo = {
                    password        : $.trim($('#password').val()),
                    passwordNew     : $.trim($('#password-new').val()),
                    passwordConfirm : $.trim($('#password-confirm').val())
            }
            var validateResult = _this.validateForm(userInfo);
            if(validateResult.status){
                _user.updateUserInfo({
                    passwordOld : userInfo.password,
                    passwordNew : userInfo.passwordNew
                    } ,function (res, msg) {
                        _mm.successTips(msg);
                    }, function (errMsg) {
                        _mm.errorTips(errMsg)
                    }
                )
            }
        })

    },
    // 验证字段信息
    validateForm : function(formData){
        var result = {
            status : false,
            msg : ''
        }
        if(!_mm.validate(formData.password, 'require')) {
            result.msg = '原密码不能为空';
            return result;
        }
        if(!formData.password || formData.passwordNew.length <6){
            result.msg = '密码不能少于六位';
            return result;
        }
        if(!formData.passwordNew == formData.passwordConfirm){
            result.msg = '两次输入的密码不一致';
            return result;
        }
        result.status = true;
        result.msg = '验证通过';
        return result;
    }
};
$(function(){
    page.init();
});