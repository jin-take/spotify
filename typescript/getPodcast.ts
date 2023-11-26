import axios from 'axios';
import * as dotenv from 'dotenv'
dotenv.config()
const env = process.env
import { GetSpotifyToken } from './getSpotifyToken';

async function getShowInfo() {
    // Spotify APIからショーの情報を取得
    const accessToken = await GetSpotifyToken(); 
    const showId = env.SPOTIFY_SHOW_ID;
    const apiEndpoint = `https://api.spotify.com/v1/shows/${showId}`; // ショーのAPIエンドポイント

    try {
        const response = await axios.get(apiEndpoint, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        });
    
        if (response.status === 200) {
            const showData = response.data;
            const showTitle = showData.name;
            const showDescription = showData.description;
            console.log('タイトル:', showTitle);
            console.log('概要:', showDescription);
        } else {
            console.error('取れんかった');
        }
    } catch (error) {
        console.error('えらった:', error);
    }
}

// ショーの情報を取得
getShowInfo();
