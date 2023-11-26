import axios from 'axios';
import * as dotenv from 'dotenv'
dotenv.config()
const env = process.env
import { GetSpotifyToken } from './getSpotifyToken';

const numberOfEpisodes = 10; // 取得するエピソードの数
const showId = env.SPOTIFY_SHOW_ID;

async function getLatestEpisodesInfo() {
    const accessToken = await GetSpotifyToken();
    const apiEndpoint = `https://api.spotify.com/v1/shows/${showId}`; // ショーのAPIエンドポイント
    try {
        const response = await axios.get(apiEndpoint, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
    
        if (response.status === 200) {
            const showData = response.data;
            const episodes = showData.episodes.items.slice(0, numberOfEpisodes);
        
            for (const episode of episodes) {
                const episodeTitle = episode.name;
                const episodeDescription = episode.description;
                const episodeUrl = episode.external_urls.spotify;
                
                console.log('エピソード タイトル:', episodeTitle);
                console.log('エピソード 概要:', episodeDescription);
                console.log('エピソード URL:', episodeUrl);
                console.log('---');
            }
        } else {
            console.error('Failed to fetch show information');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// 最新エピソードの情報を取得
getLatestEpisodesInfo();
