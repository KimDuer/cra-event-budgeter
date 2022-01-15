import React, { useState } from 'react'
import {createUseStyles} from 'react-jss'
import { getAuth } from 'firebase/auth'


const useStyles = createUseStyles({
    
    header: {
        display: 'inline-flex',
        background: 'linear-gradient(to bottom, rgba(100, 250, 250), rgba(154, 201, 252))',
        width: '100%',
        height: '10%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.69)',
        marginBottom: '10px'
        
    },
    titleText: {
        width: '90%',
        display: 'inline-flex',
        flexDirection: 'column',
        margin: 0,
        paddingLeft: '20px'
    },
    menuIcon: {
        float: 'right',
        width: '60px',
        height: 'auto',
        marginTop: '10px',
        marginRight: '10px',
        filter: 'drop-shadow(2px 2px 1px #443356)',
        cursor: 'pointer'
        
    },
    menu: {
        float: 'right',
        position: 'fixed',
        display:'inline-flex',
        flexDirection: 'column',
        width: '200px',
        right: '-200px',
        top: '10%',
        alignItems: 'right',
        textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.69)',
        backgroundColor: 'rgba(103, 103, 103, .8)',
        zIndex: '+2',
        transitionProperty: 'right, opacity',
        transitionDuration: '1s',
        transitionDelay: '0s',
    },
    row: {
        width: '100%',
        height: '40px',
        display: 'inline-flex',
        alignItems: 'center',
        paddingLeft: '10px',
        borderBottom: 'solid 1px rgb(53,53,53)',
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

    const [menuToggle, setToggle] = useState(false)

    const animateMenu = () => {
        const menu = document.getElementById('menu')
        if (!menuToggle) {
            menu.style.right = '0'
            menu.style.opacity = 1
            setToggle(true)
        } else {
            menu.style.right = '-200px'
            menu.style.opacity = 0
            setToggle(false)
        }
    }
    const onClick = (e) => {
        e.preventDefault()
        if (e.target.innerHTML === 'i\'m new here') {
            setModalDisplay('info')
            animateMenu()
        } else if (e.target.innerHTML === 'log in') {
            setModalDisplay('log-in')
            animateMenu()
        } else if (e.target.innerHTML === 'sign up') {
            setModalDisplay('sign-in')
            animateMenu()
        } else {
            const auth = getAuth()
            auth.signOut().then(() => {
                setUser(null)
            })
            animateMenu()
        }
    }
    
    return (
        <>
            <div className={classes.header}>
                <div className={classes.titleText}>
                    <h4 className={classes.title}>Prophitable</h4>
                    <h3 className={classes.subtext}>live event manager</h3>
                </div>
                <div className={classes.menuToggle} id='menu-toggle' onClick={animateMenu} alt='menu'>
                            <img src='/menu-icon.png' className={classes.menuIcon} id='menu-icon'/>
                </div>
            </div>
            <div className={classes.menu} id='menu'>
                    <div className={classes.row}>
                        <h3 className={classes.h3} onClick={onClick}>i'm new here</h3>
                    </div>
                    <div className={classes.row}>
                        <h3 className={classes.h3} onClick={onClick}>{user ? null : 'sign up'}</h3>
                    </div>
                    <div className={classes.row}>
                        <h3 className={classes.h3} onClick={onClick}>{user ? 'log out' : 'log in'}</h3>
                    </div>
            </div>
        </>
    )
}
/*
<div className={classes.navText}>
                <h3 className={classes.h3} onClick={onClick}>i'm new here</h3>
                <h3 className={classes.h3} onClick={onClick}>{user ? null : 'sign up'}</h3>
                <h3 className={classes.h3} onClick={onClick}>{user ? 'log out' : 'log in'}</h3>
            </div>
*/
export default Header