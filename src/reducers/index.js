import {combineReducers} from 'redux';
import games_reducer from './gamesReducers';
import detailReducer from './detailReducer';
const root_reducer = combineReducers({
        games: games_reducer,
        detail: detailReducer
});

export default root_reducer;