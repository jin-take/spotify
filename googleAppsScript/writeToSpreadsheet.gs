function writeToSpreadsheet(spreadsheetId, podcast, latestEpisode) {
  // 既存のspreadsheetにアクセス
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  // 'spotify'というタブに記入。もしなければ作成。
  let sheet = spreadsheet.getSheetByName('spotify');
  if (!sheet) {
    sheet = spreadsheet.insertSheet('spotify');
  } else {
    sheet.clear();    // 既存のデータをクリア（今回は蓄積しない）
  }

  // ヘッダーを確認し、必要に応じて追加
  var firstRow = sheet.getRange(1, 1).getValue();
  if (firstRow !== 'Spotifyの取得結果') {
    sheet.insertRowBefore(1).getRange(1, 1).setValue('Spotifyの取得結果');
  }

  // 最新のエピソードのタイトルをスプレッドシートに保存
  const data = [
    ["---------------------Podcast---------------------"],
    ["タイトル", podcast.name],
    ["概要", podcast.description],
    ["-------------------New Episode-------------------"],
    ["タイトル", latestEpisode.name],
    ["概要", latestEpisode.description], 
    ["リンク", latestEpisode.href]
  ]

  for (var i = 0; i < data.length; i++) {
    sheet.appendRow(data[i]);
  }
}