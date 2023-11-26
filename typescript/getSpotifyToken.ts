import axios from 'axios';
import * as dotenv from 'dotenv'
dotenv.config()
const env = process.env

const clientId = env.SPOTIFY_CLIENT_ID;
const clientSecret = env.SPOTIFY_CLIENT_SECRET;
const spotifyApiUrl = 'https://accounts.spotify.com/api/token';

export async function GetSpotifyToken() {
    // Base64エンコード用の認証情報を作成
    const authString = `${clientId}:${clientSecret}`;
    const authHeader = `Basic ${Buffer.from(authString).toString('base64')}`;
    
    // Tokenリクエストのパラメータ
    const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');
    
    try {
        const response = await axios.post(spotifyApiUrl, data, {
            headers: {
                Authorization: authHeader,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
    
        if (response.status === 200) {
            const accessToken = response.data.access_token;
            return accessToken;
        } else {
            console.error('Failed to retrieve access token');
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}


