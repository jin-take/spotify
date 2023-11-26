function getSpotifyToken(clientId, clientSecret) {
  const endpoint = 'https://accounts.spotify.com/api/token';
  const credentials = Utilities.base64Encode(clientId + ':' + clientSecret);

  const options = {
    'method': 'post',
    'headers': {
      'Authorization': 'Basic ' + credentials
    },
    'payload': {
      'grant_type': 'client_credentials'
    }
  };

  const response = UrlFetchApp.fetch(endpoint, options);
  const jsonResponse = JSON.parse(response.getContentText());

  return jsonResponse.access_token;
}