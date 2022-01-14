import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    modal: {
        display: 'block',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1',
        background: 'linear-gradient(to bottom, rgba(100, 250, 250), rgba(154, 201, 252))',
        width: '50vw',
        height: '50vh',
        borderRadius: '.5em',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.69)',
        padding: '15px',
        overflow: 'scroll',
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
            backgroundColor: '#99bac9',
            borderRadius: '10px',
            width: '10px'
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#aa99c9',
            borderRadius: '10px'
        }
        
    },
    hidden: {
        display: 'none' 
    },
    h4: {
        height: '15%',
        width: '100%',
        margin: 0,
        marginTop: '5px',
        marginBottom: '10px',
        textAlign: 'center',
        fontSize: '2em',
        textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF',
    },
    button: {
        background: 'rgb(44,191,191)',
        borderRadius: '6px',
        marginTop: '5px'
    }
})

const Info = ({ display, setDisplay }) => {

    const classes = useStyles()

    const onClick = (e) => {
        e.preventDefault()
        setDisplay(null)
    }
    return (
        <div className={display ? classes.modal : classes.hidden}>
            <h4 className={classes.h4}>What is Prophitable?</h4>
            <p>This tool is for those in the business of booking talent for live events. It was built with live music in mind particularly as a way to quickly calculate projected event profit after entering a few preliminary values, however Prophitable can be used for any ticketed event and is not exclusive to live music.</p>
            <p>Start by specifying your venue details - cost, maximum capacity - and then continue by 'booking' your artists and adjusting your ticket price. You can even specify how many tickets you expect to sell. Prophitable will update your projected profit each time you submit a change.</p>
            <p>Is there a feature you'd like to be added to Prophitable? Let me know!</p>
            <button className={classes.button} onClick={onClick}>close</button>
        </div>
    )
}

export default Info