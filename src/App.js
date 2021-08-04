import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import {createUseStyles} from 'react-jss'

import TicketRevenue from './Components/TicketRevenue'
import RoomOverview from './Components/RoomOverview'
import BudgetOverview from './Components/BudgetOverview'

const useStyles = createUseStyles({
    
  background: {
      position: 'fixed',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      zIndex: '-1',
      backgroundImage: `linear-gradient(to bottom, rgba(255, 250, 250, 0.82), rgba(154, 201, 252, 0.53)), url("dj-img.jpg")`,
      backgroundSize: '100%', 
      filter: 'blur(5px)',
      '-webkit-filter': 'blur(5px)'
  },

  globalStyles: {
      
      marginTop: '15px',
      padding: '0',
      fontFamily: '"Roboto Mono", monospace',
      marginLeft: '10px'
      
  }
})

const App = () => {
  
  const classes = useStyles()

  const [revenue, setRevenue] = useState(0)
  const [costs, addCost] = useState([])
  const [sumCosts, calcCosts] = useState(0)
  const [sumRevenue, calcRevenue] = useState(0)

  useEffect(() => {
      if (costs.length > 1) {
      calcCosts(costs.reduce((a, b) => a + b, 0))
      } else if (costs.length === 1) {
          calcCosts(costs[0])
      }
  }, [costs])

  const currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
  })

  return (
      <div className={classes.globalStyles}>
          <div className={classes.background} />
          <BudgetOverview   
              currencyFormatter={currencyFormatter}
              revenue={revenue}
              costs={sumCosts}
          /> 
          <RoomOverview 
              room='1'
              capacity='350'
              currencyFormatter={currencyFormatter}
              costs={costs}
              addCost={addCost}
          />
          <RoomOverview
              room='2'
              capacity='150'
              currencyFormatter={currencyFormatter}
              costs={costs}
              addCost={addCost}
          />
          
          <TicketRevenue 
              currencyFormatter={currencyFormatter}
              allRevenue={revenue}
              setRevenue={setRevenue}
          />
      </div>
  )
}

export default App;
