import axios from 'axios';
import {get_popular_games_api_url, get_upcoming_games_api_url, get_new_games_api_url} from '../api';

export const load_games = () => async (dispatch) => {
        const popular_games = await axios.get(get_popular_games_api_url());
        const upcoming_games = await axios.get(get_upcoming_games_api_url());
        const new_games = await axios.get(get_new_games_api_url());
        dispatch({
                type: "FETCH_GAMES",
                payload: {
                        popular: popular_games.data.results,
                        upcoming: upcoming_games.data.results,
                        new_games: new_games.data.results
                }
        });
}