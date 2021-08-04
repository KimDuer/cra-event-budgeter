import React, {useState} from 'react'
import AddArtistForm from './AddArtistForm'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    heading: {
        marginBottom: '0'
    },
    ul: {
        listStyleType: 'none'
    },
    li: {
        
    },
    remove: {
        letterSpacing: '.5px',
        fontSize: '.75em'

    }
})

const RoomOverview = ({room, capacity, currencyFormatter, costs, addCost}) => {

    const [artists, addArtist] = useState([])

    const classes = useStyles()

    let artistsLi = []
    if (artists.length > 0) {
        artistsLi = artists.map((artist) => {
            return (
                <li className={classes.li} key={artist.name}>
                    <span>{artist.name}, {currencyFormatter.format(artist.cost)}</span>
                </li>
            )
        })
    }
    return (
        <div >
            <h3 className={classes.heading}>Room {room}, Capacity: {capacity}</h3>
            <AddArtistForm 
                addArtist={addArtist} 
                artists={artists}
                costs={costs}
                addCost={addCost}/>
            {artists.length > 0 ? <ul className={classes.ul}>{artistsLi}</ul> : null}

        </div>
    )
}

export default RoomOverview