var _mm = require('util/mm.js');

_mm.request({
    url: '/product/list.do?keyword=1',
    success: function (res) {
        console.log(res);
    },
    error: function (err) {
        console.log(err)
    }
})

console.log(_mm.getUrlParam('test'))

var html = '<div>{{data}}</div>';
var data = {
   data: 123
}
console.log(_mm.renderHtml(html, data))