function getLatestEpisode(showId, token) {
  // APIリクエストを構築
  const urlLatestEpisode = 'https://api.spotify.com/v1/shows/' + showId + '/episodes?market=ES&limit=1';
  const options = {
    'method': 'get',
    'headers': {
      'Authorization': 'Bearer ' + token
    }
  };

  // APIリクエストを送信
  const responseEpisode = UrlFetchApp.fetch(urlLatestEpisode, options);
  const jsonResponseEpisode = JSON.parse(responseEpisode.getContentText());

  const latestEpisode = jsonResponseEpisode.items[0]; // 最新のエピソード
  
  // タイトルと概要を出力（実際には出力する必要はないのでコメントアウト）
  // Logger.log(latestEpisode.name);
  // Logger.log(latestEpisode.description);
  // Logger.log(latestEpisode.href);

  return latestEpisode
}