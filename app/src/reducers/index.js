import {FETCH_CARDS_SUCCESS, FETCH_CARDS_START} from '../actions'

const initialState = {
    cards: [],
    isLoading: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CARDS_START:
            return{
                ...state,
                isLoading: true
            }
        case FETCH_CARDS_SUCCESS:
            return{
                ...state,
                cards: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}