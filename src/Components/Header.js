import React from 'react'
import {createUseStyles} from 'react-jss'
import { getAuth } from 'firebase/auth'


const useStyles = createUseStyles({
    
    header: {
        display: 'block',
        background: 'linear-gradient(to bottom, rgba(100, 250, 250), rgba(154, 201, 252))',
        width: '100%',
        height: '10%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.69)',
        marginBottom: '10px'
        
    },
    titleText: {
        display: 'inline-flex',
        flexDirection: 'column',
        margin: 0,
        paddingLeft: '20px'
    },
    navText: {
        float: 'right',
        display:'inline-flex',
        flexDirection: 'column',
        textAlign: 'right',
        marginRight: '20px',
        textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF',
    },
    title: {
        fontSize: '2em',
        textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF',
        margin: 0
    },
    subtext: {
        margin: 0,
        fontSize: '1em'
    },
    h3: {
        margin: 0,
        cursor: 'pointer',
        userSelect: 'none'
    }
})

const Header = ({ setModalDisplay, user, setUser }) => {
    const classes = useStyles()

    const onClick = (e) => {
        e.preventDefault()
        if (e.target.innerHTML === 'i\'m new here') {
            setModalDisplay('info')
        } else if (e.target.innerHTML === 'log in') {
            setModalDisplay('log-in')
        } else if (e.target.innerHTML === 'sign up') {
            setModalDisplay('sign-in')
        } else {
            const auth = getAuth()
            auth.signOut().then(() => {
                setUser(null)
            })
        }
    }
    
    return (
        <div className={classes.header}>
            <div className={classes.titleText}>
                <h4 className={classes.title}>Prophitable</h4>
                <h3 className={classes.subtext}>live event manager</h3>
            </div>
            <div className={classes.navText}>
                <h3 className={classes.h3} onClick={onClick}>i'm new here</h3>
                <h3 className={classes.h3} onClick={onClick}>{user ? null : 'sign up'}</h3>
                <h3 className={classes.h3} onClick={onClick}>{user ? 'log out' : 'log in'}</h3>
            </div>
            
        </div>
    )
}

export default Header