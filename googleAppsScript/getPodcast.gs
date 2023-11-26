function getPodcast(showId, token) {
  // APIリクエストを構築
  const urlShow = 'https://api.spotify.com/v1/shows/' + showId;
  const options = {
    'method': 'get',
    'headers': {
      'Authorization': 'Bearer ' + token
    }
  };

  // APIリクエストを送信
  const responseShow = UrlFetchApp.fetch(urlShow, options);

  // レスポンスを取得
  const podcast = JSON.parse(responseShow.getContentText());

  return podcast
}


