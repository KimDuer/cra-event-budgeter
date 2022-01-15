import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    module: {
        marginTop: '20px',
        width: '85vw',
        maxWidth: '500px',
        height: '60px',
        transitionProperty: 'height',
        transitionDuration: '1s',
        backgroundColor: 'rgba(103, 103, 103, .7)',
        overflow: 'hidden',
        border: 'solid 1px rgb(0,0,0)',
    },
    heading: {
        display: 'inline-flex',
        width: '100%',
        backgroundColor: 'rgba(53, 53, 53, .7)',
        color: 'white'
    },
    headingText: {
        width: '90%',
        paddingLeft: '10px'
    },
    toggle: {
        width: '10%',
        background: 'none',
        border: 'none',
        fontFamily: 'inherit',
        fontWeight: 'bold',
        color: 'white',
        cursor: 'pointer'
    },
    content: {
        width: '100%',
        
    },
    row: {
        width: '100%',
        height: '40px',
        display: 'inline-flex',
        alignItems: 'center',
        paddingLeft: '10px',
        borderBottom: 'solid 1px rgb(53,53,53)',
    },
    column: {
        width: '50%'
    },
    formRow: {
        width: '100%',
        height: '40px',
        display: 'inline-flex',
        alignItems: 'center',
        borderBottom: 'solid 1px rgb(53,53,53)',
    },
    input: {
        height: '30px',
        width: '90%',
        borderBottom: 'solid 1px rgb(0,0,0)',
        //borderRadius: '3px',
        marginLeft: '2px',
        backgroundColor: 'rgb(64,64,64)',
        color: 'rgb(255,255,255)',
        fontFamily: 'inherit',
        fontSize: '18px',
        '@media (max-width: 400px)': {
            fontSize: '14px'
        }
    },
    buttons: {
        display: 'inline-flex',
        width: '100%'
    },
    smallButton: {
        background: 'linear-gradient(to bottom, rgba(100, 250, 250, .7), rgba(154, 201, 252, .7))',
        //borderRight: 'solid 1px rgb(53,53,53)',
        width: '50%',
        height: '40px',
        fontFamily: 'inherit',
        fontSize: '20px',
        cursor: 'pointer',
        '@media (max-width: 400px)': {
            fontSize: '14px'
        }
    },
    
    moduleButton: {
        background: 'linear-gradient(to bottom, rgba(100, 250, 250, .7), rgba(154, 201, 252, .7))',
        //borderRight: 'solid 1px rgb(53,53,53)',
        width: '100%',
        height: '40px',
        fontFamily: 'inherit',
        fontSize: '20px',
        cursor: 'pointer'
    }
})

const Artists = ({currencyFormatter, costs, addCost}) => {
    const classes = useStyles()

    const [toggle, setToggle] = useState(false)
    const [artist, setArtistInfo] = useState({
        name: '',
        cost: ''
    })
    const [artists, addArtist] = useState([])
    const [artistCosts, addArtistCost] = useState(0)

    useEffect(() => {
        if (toggle) {
        calcModuleHeight()
        }
        // eslint-disable-next-line
    }, [artists])

    const animateModule = () => {
        const module = document.getElementById('artists-module')
        if (toggle === true) {
            module.style.height = '60px'
            setToggle(!toggle)
        } else {
            module.style.height = calcModuleHeight()
            setToggle(!toggle)
        }
    }

    const calcModuleHeight = () => {
        const module = document.getElementById('artists-module')
        const rowHeight = 40
        const numberOfRows = artists.length
        const height = 183 + (rowHeight*numberOfRows)
        module.style.height = `${height}px`
        
    }

    const getArtistName = (e) => {
        setArtistInfo({
            name: e.target.value,
            cost: artist.cost
        })
    }

    const getArtistCost = (e) => {
        setArtistInfo({
            name: artist.name,
            cost: parseInt(e.target.value)
        })
    }
    const onAddArtist = () => {
        addArtist([...artists, artist])
        addArtistCost(artistCosts+artist.cost)
        setArtistInfo({
            name: '',
            cost: ''
        })
    }

    const onClear = () => {
        addArtist([])
    }
    const onSubmit = () => {
        animateModule()
        addCost([...costs, artistCosts])
    }

    return (
        <div className={classes.module} id='artists-module'>

            <div className={classes.heading}>
                <h3 className={classes.headingText}>Artists</h3>
                <button className={classes.toggle} onClick={animateModule}>{toggle === true ? '-' : '+'}</button>
            </div>

            <div className={classes.content}>
                <div className={classes.artists}>
                    {artists.length > 0 ? artists.map((artist) => {
                        return (
                            <div className={classes.row} key={artist.name}>
                                <div className={classes.column}>
                                    <h4>{artist.name}</h4>
                                </div>
                                <div className={classes.column}>
                                    <h4>{currencyFormatter.format(artist.cost)}</h4>
                                </div>
                            </div>
                        )
                    }) : null}
                </div>
                
                <div className={classes.formRow}>
                    <div className={classes.column}>
                        <input className={classes.input} id='input-artist-name' value={artist.name} onChange={getArtistName} placeholder='artist name'></input>
                    </div>
                    <div className={classes.column}>
                        <input className={classes.input} id='input-artist-cost' value={artist.cost} onChange={getArtistCost} type='number' placeholder='cost to book'></input>
                    </div>

                </div>
                <div className={classes.buttons}>
                    <button className={classes.smallButton} onClick={onAddArtist}>add an artist</button>
                    <button className={classes.smallButton} onClick={onClear}>clear all</button>
                </div>

                <button className={classes.moduleButton} onClick={onSubmit} disabled={artists.length < 1 ? true : false}>submit</button>
            </div>

        </div>
    )
}

export default Artists