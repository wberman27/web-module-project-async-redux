import axios from 'axios'

export const FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS"

export const fetchCards = () =>{
    return (dispatch) =>{
        axios.get('https://api.magicthegathering.io/v1/cards?contains=imageUrl')
        .then(res =>{
            console.log(res)
            //res.data.cards
            dispatch({type:FETCH_CARDS_SUCCESS, payload: res.data.cards})
        })
        .catch(err =>{
            console.log(err)
        })
    }
}