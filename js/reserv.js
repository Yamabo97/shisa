// $(function () {
//   // 全てのアラート文を非表示にする
//   $(".alert").hide();

//   $("#submitBtn").click(function () {
//     // チェック用の変数sendFlag
//     var sendFlag = true;

//     // 一行入力フィールドのチェック
//     if (!$("#name-text").val()) {
//       // 入力がない：アラート文を表示
//       $("#name p.alert").show();
//       sendFlag = false; // 入力がなければfalseに
//     } else {
//       // 入力がある：アラート文を非表示
//       $("#name p.alert").hide();
//     }


//     return false;
//   });
// });

$(function() {
  // 全てのアラート文を非表示にする
  $(".alert").hide();
  // $(".name-alert").hide();

  // 送信ボタンをクリック
  $("#submitBtn").click(function(){
    // チェック用の変数sendFlag
    var sendFlag = true;

    // 一行入力フィールドのチェック
    // 名前
    if(!$("#name-text").val()){
      // 入力がない：アラート文を表示
      $(".name-alert").show();
      sendFlag = false; // 入力がなければfalseに
    }else{
      // 入力がある：アラート文を非表示
      $(".name-alert").hide();
    }

    // 電話
    if(!$("#tel-text").val()){
      // 入力がない：アラート文を表示
      $(".tel-alert").show();
      sendFlag = false; // 入力がなければfalseに
    }else{
      // 入力がある：アラート文を非表示
      $(".tel-alert").hide();
    }

    // メールアドレス
    if(!$("#mail-text").val()){
      // 入力がない：アラート文を表示
      $(".mail-alert").show();
      sendFlag = false; // 入力がなければfalseに
    }else{
      // 入力がある：アラート文を非表示
      $(".mail-alert").hide();
    }


    // ラジオボタンのチェック
    // var radioChk = $('input[name = "radio"]:checked').length;

    // 選択されたラジオボタンの数を調べる
    // if(radioChk == 0){
      // 選択がない：アラート文を表示
    //   $(".check-alert ").show();
    //   sendFlag = false; // 入力がなければfalseに
    // }else{
      // 選択がある：アラート文を非表示
    //   $(".check-alert").hide();
    // }

    // チェックボックスのチェック
    // 個人情報
    var chkboxChk = $('input[name = "checkbox"]:checked').length;

    // 選択されたチェックボックスの数を調べる
    if(chkboxChk < 1){
      // 選択が3つ未満：アラート文を表示
      $(".check-alert").show();
      sendFlag = false; // 選択が3つ未満ならfalseに
    }else{
      // 選択が3つ以上：アラート文を非表示
      $(".check-alert").hide();
    }

    // セレクトボックスのチェック
    // 時間帯
    if($("select.time").val() == "none"){
      // 選択がない：アラート文を表示
      $(".time-alert").show();
      sendFlag = false; // 「---」を選択していたらfalseに
    }else{
      // 選択がある：アラート文を非表示
      $(".time-alert").hide();
    }

    // 人数
    if($("select.number").val() == "none"){
      // 選択がない：アラート文を表示
      $(".number-alert").show();
      sendFlag = false; // 「---」を選択していたらfalseに
    }else{
      // 選択がある：アラート文を非表示
      $(".number-alert").hide();
    }



    // 複数行入力フィールドのチェック
    // if(!$("#textarea").val()){
    //   入力がない：アラート文を表示
    //   $("#textareaSection .alert").show();
    //   sendFlag = false; // 入力がなければfalseに
    // }else{
    //   入力がある：アラート文を非表示
    //   $("#textareaSection .alert").hide();
    // }

    // 変数sendFlagの値をチェック
    if(sendFlag == false){
      return false; // falseであれば送信を許可しない（そうでなければ送信）
    }
  });
});
