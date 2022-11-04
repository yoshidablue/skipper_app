/* global $*/
// 上記を記述することでこのページでのエラーが出なくなる。（書かなくても問題なし）

let title = "javascriptが使えました";
alert(title);

 // 下記の記述でエラーが出るが上記の/* global $*/でエラーが出なくなる。（動作には問題なし）
$(document).ready(function () {
 $('.jquery').on('click', function(){
   $(this).css('color','red');
 });
});