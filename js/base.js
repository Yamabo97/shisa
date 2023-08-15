
  
  // ---------------------------------------------------------------------------------------------
// フェードアップ
$(window).scroll(function (){
 $(".fadeUp").each(function(){
   var position = $(this).offset().top;
   var scroll = $(window).scrollTop();
   var windowHeight = $(window).height();
   if (scroll > position - windowHeight){
     $(this).addClass('active');
   }
 });
});

// -------------------------------------------------------------------------------------------------
トップへ戻るボタン

$(function () {
  // トップボタン
  $(".to-top").click(function () {                   //.toTopの中のimgがクリックされたとき、
    $("html,body").animate({ scrollTop: 0 }, 1500);     //1.5秒かけて画面の一番上までスクロールする。
  });
});
  
  
