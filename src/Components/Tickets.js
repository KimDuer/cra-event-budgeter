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
        paddingLeft: '20px',
        borderBottom: 'solid 1px rgb(53,53,53)',
    },
    column: {
        width: '50%'
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
    range: {
        '&::-webkit-slider-runnable-track': {
            '-webkit-appearance': 'none',
            backgroundColor: 'rgb(64,64,64)',
            borderRadius: '3px'
        },
        '&::-moz-range-track': {
            '-webkit-appearance': 'none',
            backgroundColor: 'rgb(64,64,64)',
            borderRadius: '3px'
            
        }
        
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

const Tickets = ({ capacity, currencyFormatter, setRevenue }) => {
    const classes = useStyles()

    const [toggle, setToggle] = useState(false)
    const [ticketsSold, updateCount] = useState(50)
    const [ticketPrice, updatePrice] = useState(25)
    const [ticketRevenue, updateRevenue] = useState()

    useEffect(() => {
        updateRevenue(ticketsSold*ticketPrice)
    },[ticketsSold, ticketPrice])

    const animateModule = () => {
        const module = document.getElementById('tickets-module')
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
        setRevenue(ticketRevenue)
    }
    return (
        <div className={classes.module} id='tickets-module'>
            <div className={classes.heading}>
                <h3 className={classes.headingText}>Tickets</h3>
                <button className={classes.toggle} onClick={animateModule}>{toggle === true ? '-' : '+'}</button>
            </div>
            <div className={classes.content}>
                <div className={classes.row}>
                    
                        <p className={classes.p}>{ticketsSold} tickets sold at {currencyFormatter.format(ticketPrice)}</p>
                    
                    
                        <h4 className={classes.revenue}>{`: ${currencyFormatter.format(ticketRevenue)}`}</h4>
                    
                    
                </div>
                <div className={classes.row}>
                    <input className={classes.range} type='range' min='50' max={capacity} defaultValue='50' id='ticketsSold' onChange={(e) => updateCount(parseInt(e.target.value))}></input>
                    <input className={classes.input} type='number' min='0' placeholder='25.00' id='ticket-price' onChange={(e) => updatePrice(e.target.value)}></input>
                </div>
                <button className={classes.moduleButton} onClick={onSubmit}>submit</button>
            </div>

        </div>
    )
}

export default Tickets