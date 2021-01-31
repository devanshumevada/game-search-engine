import axios from 'axios';
import {get_game_detail_api_url, get_game_screenshots_api_url} from '../api';

const load_detail = id => async (dispatch) => {
        dispatch({
                type:"LOADING"
        });
        const gamae_detail_data = await axios.get(get_game_detail_api_url(id));
        const screenshots_data = await axios.get(get_game_screenshots_api_url(id));

        dispatch({
                type:"GAME_DETAIL",
                payload: {
                        game: gamae_detail_data.data,
                        screenshots: screenshots_data.data.results
                }
        });

}

export default load_detail;

