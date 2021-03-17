import { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchCards } from '../actions'


const CardList = (props) =>{

    const {fetchCards} = props
    useEffect(()=>{
        fetchCards()
    },[fetchCards])

    return(
        <>
        <div className = 'card-wrapper'>
            {props.cards.map((item)=>{
                return <p key={item.multiverseid}>{item.name}</p>
            })}
        </div>
        </>
    )
}


const mapStateToProps = (state) =>{
    return{
        cards: state.cards
    }
}

export default connect(mapStateToProps, {fetchCards})(CardList)