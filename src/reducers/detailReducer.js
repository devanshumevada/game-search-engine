const initial_state = { game: {platforms:[]}, screenshots:[], is_loading:true };

const detailReducer = (state=initial_state, action) => {
        switch(action.type) {
                case "GAME_DETAIL":
                        return {
                                ...state,
                               ...action.payload,
                               is_loading:false
                        }
                
                case "LOADING":
                        return {
                                ...state,
                                is_loading:true
                        }

                default:
                        return {
                                ...state
                        }
        }
}

export default detailReducer;