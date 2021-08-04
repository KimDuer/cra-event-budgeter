import React, {useState} from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    span: {
        padding: '5px',
        fontSize: '1em',
        position: 'float right'
    },
    heading: {
        marginTop: '0',
        marginBottom: '0'
    },
    profit: {
        marginTop: '0',
        marginBottom: '5px',
        color: 'green',
        
    }
})

const BudgetOverview = ({revenue, costs, currencyFormatter}) => {
    const classes = useStyles()
    const profit = revenue - costs
    return (
        <div className={classes.div}>
            <h2 className={classes.heading}>Projected Profit:</h2>
            <h2 className={classes.profit}>{currencyFormatter.format(profit)}</h2>
            <span className={classes.span}>Revenue: {currencyFormatter.format(revenue)}</span>
            <br></br>
            <span className={classes.span}>Costs: {currencyFormatter.format(costs)}</span>
        </div>
    )
}

export default BudgetOverview