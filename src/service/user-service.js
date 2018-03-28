var _mm = require('util/mm.js')

var _user = {
    //用户登录
    login :function (userInfo, resolve, reject) {
        _mm.request({
            url     : _mm.getServerUrl('/user/login.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        })
    }
}

module.exports = _user;