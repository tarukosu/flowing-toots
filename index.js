NicoJS = require('nicoJS')

window.onload = function(){

var screen = document.getElementById('screen');
console.log(screen);
var nico = new NicoJS({
    app: screen, // スクリーンになる要素
    width: screen.clientWidth,                           // スクリーン幅
    height: screen.clientHeight,                          // スクリーン高さ
    font: 50,                             // フォントサイズ
    color: '#fff',                        // フォントカラー
});

nico.loop([
    'comment_1',
    'comment_2',
    'comment_3',
    'comment_4'
])
}