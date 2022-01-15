import React, { useState } from 'react'
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
        paddingLeft: '20px',
        borderBottom: 'solid 1px rgb(53,53,53)',
    },
    input: {
        height: '20px',
        marginRight: '10px',
        marginLeft: '10px',
        width: '100px',
        border: 'solid 1px rgb(0,0,0)',
        borderRadius: '3px',
        backgroundColor: 'rgb(64,64,64)',
        color: 'rgb(255,255,255)',
    },
    moduleButton: {
        background: 'linear-gradient(to bottom, rgba(100, 250, 250, .7), rgba(154, 201, 252, .7))',
        border: 'none',
        width: '100%',
        height: '40px',
        fontFamily: 'inherit',
        fontSize: '20px',
        cursor: 'pointer'
    }
})

const Venue = ({ setCapacity, costs, addCost }) => {
    const classes = useStyles()

    const [toggle, setToggle] = useState(false)

    const animateModule = () => {
        const module = document.getElementById('venue-module')
        if (toggle === true) {
            module.style.height = '60px'
            setToggle(!toggle)
        } else {
            module.style.height = '183px'
            setToggle(!toggle)
        }
    }

    const onSubmit = () => {
        animateModule()
        const capacity = document.getElementById('input-venue-capacity').value
        const cost = document.getElementById('input-venue-cost').value
        console.log(typeof cost)
        setCapacity(capacity)
        addCost([...costs, parseInt(cost)])
    }
    return (
        <div className={classes.module} id='venue-module'>
            <div className={classes.heading}>
                <h3 className={classes.headingText}>Venue</h3>
                <button className={classes.toggle} onClick={animateModule}>{toggle === true ? '-' : '+'}</button>
            </div>
            <div className={classes.content}>
                <div className={classes.row}>
                    <h4>Cost:</h4>
                    <input className={classes.input} id='input-venue-cost' placeholder='$350.00' type='number'></input>
                </div>
                <div className={classes.row}>
                    <h4>Capacity:</h4>
                    <input className={classes.input} id='input-venue-capacity' placeholder='300' type='number'></input>
                </div>
                <button className={classes.moduleButton} onClick={onSubmit}>submit</button>
            </div>

        </div>
    )
}

export default Venue