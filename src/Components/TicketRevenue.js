import React, {useState, useEffect} from 'react'
import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles({
    heading: {
        marginBottom: '0'
    },
    revenue: {
        marginTop: '0',
        marginBottom: '10px'
    },
    p: {
        marginTop: '0',
        marginBottom: '5px',
        fontSize: '1.25em'
    },
    input: {
        marginLeft: '10px',
        marginRight: '10px',
        width: '15%',
        border: 'solid 1px rgb(0,0,0)',
        borderRadius: '3px',
        backgroundColor: 'rgb(64,64,64)',
        color: 'rgb(255,255,255)',
    },
    button: {
        background: 'rgb(44,191,191)',
        borderRadius: '6px',
        marginTop: '5px'
    }
})

const TicketRevenue = ({currencyFormatter, setRevenue}) => {
    const [ticketsSold, updateCount] = useState(50)
    const [ticketPrice, updatePrice] = useState(25)
    const [ticketRevenue, updateRevenue] = useState()
    
    useEffect(() => {
        updateRevenue(ticketsSold*ticketPrice)
    },[ticketsSold, ticketPrice])
    
    const classes = useStyles()

    return (
        <div>
            <h2 className={classes.heading}>Ticket Revenue:</h2>
            <h3 className={classes.revenue}>{currencyFormatter.format(ticketRevenue)}</h3>
            <p className={classes.p}>{ticketsSold} tickets sold at {currencyFormatter.format(ticketPrice)}</p>
            <input type='range' min='50' max={'500'} defaultValue='50' id='ticketsSold' onChange={(e) => updateCount(parseInt(e.target.value))}></input>
            <input className={classes.input} type='number' min='0' placeholder='25.00' id='ticket-price' onChange={(e) => updatePrice(e.target.value)}></input>
            <button className={classes.button} onClick={(e) => {
                e.preventDefault()
                setRevenue(ticketRevenue)}}>send it</button>
        </div>
    )
}


export default TicketRevenue