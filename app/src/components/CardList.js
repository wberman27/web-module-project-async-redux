import { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchCards } from '../actions'
import './CardList.css'
import {BASE_CARDS, BLACK_CARDS, BLUE_CARDS, GREEN_CARDS, RED_CARDS, WHITE_CARDS} from '../consts'
import Loader from "react-loader-spinner"

const CardList = (props) =>{

    //fetchCards on page load
    const {fetchCards} = props
    useEffect(()=>{
        fetchCards(BASE_CARDS)
    },[fetchCards])


    const handleClick = (e) =>{
        e.preventDefault()
        fetchCards(e.target.id)

    }

    return(
        <>
        <div className = 'card-wrapper'>
            <h1>MTG Cards</h1>
            <div className="card-nav">
                <span>Filter Color: </span>
                <button className = "red" onClick={handleClick} id={RED_CARDS}>Red</button>
                <button className = "black" onClick={handleClick} id={BLACK_CARDS}>Black</button>
                <button className = "green" onClick={handleClick} id={GREEN_CARDS}>Green</button>
                <button className = "blue" onClick={handleClick} id={BLUE_CARDS}>Blue</button>
                <button className = "white" onClick={handleClick} id={WHITE_CARDS}>White</button>
            </div>
            {props.isLoading ? 
            <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
                />     : null}
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