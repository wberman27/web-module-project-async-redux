import {FETCH_CARDS_SUCCESS} from '../actions'

const initialState = {
    cards: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CARDS_SUCCESS:
            return{
                ...state,
                cards: action.payload
            }
        default:
            return state;
    }
}