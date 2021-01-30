import {combineReducers} from 'redux';
import games_reducer from './gamesReducers';

const root_reducer = combineReducers({
        games: games_reducer,
});

export default root_reducer;