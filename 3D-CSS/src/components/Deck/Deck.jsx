import './Deck.less'

const Deck = ({z, skin, text}) => {
    const classes = `deck ${skin}`
    const style = {transform: `translateZ(${z})`}

    return (
        <div className={classes} style={style} tabIndex={++Deck.population}>
            <div className='deck-top'></div>
            <div className='deck-right'></div>
            <div className='deck-left'></div>
            <div className='deck-front'></div>
            <div className='deck-content'><span className='deck-content-text'>{text}</span></div>
            <div className='deck-bottom'></div>
        </div>
    )
}

Deck.population = 0;

export default Deck;