const initial_state = {
        popular: [],
        new_games : [],
        upcoming : [],
        searched: []
}

const games_reducer = (state=initial_state, action) => {
        switch(action.type) {
                case "FETCH_GAMES":
                        return {...state}
                default:
                        return {...state}
        }
}

export default games_reducer;