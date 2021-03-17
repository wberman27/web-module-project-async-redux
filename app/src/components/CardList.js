import { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchCards } from '../actions'


const CardList = (props) =>{

    //fetchCards on page load
    const {fetchCards} = props
    useEffect(()=>{
        fetchCards()
    },[fetchCards])

    return(
        <>
        <div className = 'card-wrapper'>
            <h1>MTG Cards</h1>
            {props.isLoading ? <h2 style={{color:'green'}}>Loading...</h2> : null}
            {props.error ? <h2 style={{color:'red'}}>{props.error}</h2> : null}
            {props.cards.map((item)=>{
                return <img key={item.multiverseid} src={item.imageUrl} alt={item.name}/>           
            })}
        </div>
        </>
    )
}


const mapStateToProps = (state) =>{
    return{
        cards: state.cards,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchCards})(CardList)