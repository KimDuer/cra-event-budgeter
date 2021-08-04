import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles({
    input: {
        marginRight: '10px',
        width: '50%',
        border: 'solid 1px rgb(0,0,0)',
        borderRadius: '3px',
        backgroundColor: 'rgb(64,64,64)',
        color: 'rgb(255,255,255)',
    },
    nameInput: {
        width: '75%'
    },
    cost: {
        width: '100px'
    },
    button: {
        background: 'rgb(44,191,191)',
        borderRadius: '6px',
        marginTop: '5px'
    }
})

const AddArtistForm = ({artists, addArtist, costs, addCost}) => {
    const [artist, setArtistInfo] = useState({
        name: '',
        cost: ''
    })
    const [error, sendError] = useState(false)

    const classes = useStyles()
    const updateArtistName = (e) => {
        setArtistInfo({
            name: e.target.value,
            cost: artist.cost
        })
    }

    const updateArtistCost = (e) => {
        setArtistInfo({
            name: artist.name,
            cost: parseInt(e.target.value)
        })
    }

    const onSubmit = () => {
        addArtist([...artists, artist])
        addCost([...costs, artist.cost])
        error === true && sendError(false)
        setArtistInfo({
            name: '',
            cost: ''
        })
    }

    const toggleError = () => {
        sendError(true)
    }
    return (
        <div>
            <span>artist name:</span>
            <div className={classes.nameInput}>
                <input className={classes.input} type='text' value={artist.name} onChange={updateArtistName}></input>
            </div>
            <span>cost to book:</span>
            <div className={classes.cost}>
            <input className={classes.input} type='number' placeholder='00.00' value={artist.cost} onChange={updateArtistCost}></input>
            </div>
            <button className={classes.button} onClick={artist.name != '' && artist.cost != '' ? onSubmit : toggleError}>send it</button>
            {error === true ? <p>please enter artist name and cost.</p> : null}
        </div>
    )
}

export default AddArtistForm