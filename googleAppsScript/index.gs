function index() {
  // 各種変数の宣言
  const clientId = PropertiesService.getScriptProperties().getProperty("SPOTIFY_CLIENT_ID"); // SpotifyクライアントID
  const clientSecret = PropertiesService.getScriptProperties().getProperty("SPOTIFY_CLIENT_SECRET"); // Spotifyクライアントシークレット
  const showId = PropertiesService.getScriptProperties().getProperty("SPOTIFY_SHOW_ID"); // 取得したいShowのIDを入力
  const spreadsheetId = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID"); // スプレッドシートのID
  const address = PropertiesService.getScriptProperties().getProperty("EMAIL_ADDRESS"); // アドレス

  const token = getSpotifyToken(clientId, clientSecret);
  const podcast = getPodcast(showId, token);
  const latestEpisode = getLatestEpisode(showId, token);

  writeToSpreadsheet(spreadsheetId, podcast, latestEpisode);
  sendEmail(spreadsheetId, address);
}
