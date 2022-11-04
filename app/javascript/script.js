/* global $*/
// 上記を記述することでこのページでのエラーが出なくなる。（書かなくても問題なし）

// JavaScript
let title = "javascriptが使えました";
alert(title);

// jQuery
// 下記の記述でエラーが出るが上記の/* global $*/でエラーが出なくなる。（動作には問題なし）
$(document).ready(function () {
 $('.jquery').on('click', function(){
   $(this).css('color','red');
 });
});

// スライドショー
$(document).ready(function () {
 $("#theTarget").skippr({
  transition: 'slide',         // スライドショーの変化("fade" or "slide")
  speed: 1000,                 // 変化に係る時間（ミリ秒）
  easing: 'easeOutQuart',      // easingの種類
  navType: 'block',            // ナビゲーションの形("block" or "bubble")
  childrenElementType: 'div',  // 子要素の種類('div' or 'img')
  arrows: true,                // ナビゲーション矢印の表示(trueで表示)
  autoPlay: true,              // スライドショーの自動再生(falseで自動再生なし)
  autoPlayDuration: 3000,      // 自動再生時のスライド切替間隔（ミリ秒）
  keyboardOnAlways: true,      // キーボードの矢印キーによるスライド送りの設定(trueで有効)
  hidePrevious: false          // １枚目のスライド表示に戻る矢印を表示するかどうか(falseで非表示)
 });
});