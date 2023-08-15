$(function(){
  // サムネールをクリック
  $(".samne1 a").click(function(){
    // 拡大画像のsrc属性に、選択したa要素のhref属性を入れる
    $(".figure1 img").attr("src", $(this).attr("href"));

    return false;
  });
});

$(function(){
  // サムネールをクリック
  $(".samne2 a").click(function(){
    // 拡大画像のsrc属性に、選択したa要素のhref属性を入れる
    $(".figure2 img").attr("src", $(this).attr("href"));

    return false;
  });
});

$(function(){
  // サムネールをクリック
  $(".samne3 a").click(function(){
    // 拡大画像のsrc属性に、選択したa要素のhref属性を入れる
    $(".figure3 img").attr("src", $(this).attr("href"));

    return false;
  });
});
