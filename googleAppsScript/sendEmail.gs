function sendEmail(spreadsheetId, address) {
  var range = 'A1:B8'; // 送信したいデータの範囲を指定

  // スプレッドシートからデータを取得
  var sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
  var data = sheet.getRange(range).getValues();

  // データを文字列に変換
  var message = 'Podcast 出力結果 \n 最新エピソード';
  data.forEach(function(row) {
    message += row.join('\t') + '\n'; // タブで列を区切り、改行で行を区切る
  });

  // メールの設定
  var email = address; // 受信者のメールアドレス
  var subject = 'Poadcastとれたよ';

  // メール送信
  MailApp.sendEmail(email, subject, message);
}

