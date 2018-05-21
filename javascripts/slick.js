$('.slider').slick({
  // アクセシビリティ。左右ボタンで画像の切り替えをできるかどうか
  accessibility: false,
  // 自動再生。trueで自動再生される。
  autoplay: true,
  // 自動再生で切り替えをする時間
  autoplaySpeed: 2000,
  // 切り替え時のフェードイン設定。trueでon
  fade: true,
  // 無限スクロールにするかどうか。最後の画像の次は最初の画像が表示される。
  infinite: true,
  // 一度にスライドする数
  slidesToScroll: 1,
  // タッチスワイプに対応するかどうか
  swipe: true,
  // 左右の次へ、前へボタンを表示するかどうか
  arrows: false,
  // 画像下のドット（ページ送り）を表示
  dots: true,
  // ドットのclass名をつける
  dotsClass: 'dot-class',
});
