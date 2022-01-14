
import React, {useState, useEffect} from 'react'
import {createUseStyles} from 'react-jss'

import Header from './Components/Header'
import Venue from './Components/Venue'
import Artists from './Components/Artists'
import Tickets from './Components/Tickets'
import BudgetOverview from './Components/BudgetOverview'
import SignUpForm from './Components/SignUpForm'
import SignInForm from './Components/SignInForm'
import Info from './Components/Info'


/* TO DO
1. trouble shoot background image in mobile browser by moving background
    to global styles instead of its own div
2. set up tests
*/
const useStyles = createUseStyles({
    
  /*background: {
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
*/
  globalStyles: {
      width: '100vw',
      height: '100vh',
      padding: '0',
      fontFamily: '"Roboto Mono", monospace',
      backgroundImage: `linear-gradient(to bottom, rgba(255, 250, 250, 0.82), rgba(154, 201, 252, 0.53)), url("dj-img.jpg")`,
      backgroundSize: 'cover'
  },
  body: {
      marginLeft: '5vw',
      marginTop: '5vh'
  }
})

const App = () => {
  
  const classes = useStyles()
  
  const [displayModal, setModalDisplay] = useState(null)
  const [user, setUser] = useState(null)
  const [revenue, setRevenue] = useState(0)
  const [costs, addCost] = useState([])
  const [sumCosts, calcCosts] = useState(0)
  const [capacity, setCapacity] = useState(300)

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
          <Header setModalDisplay={setModalDisplay} user={user ? true : false} setUser={setUser} />
          <SignUpForm display={displayModal === 'sign-up' ? true : false} setDisplay={setModalDisplay} setUser={setUser}/>
          <SignInForm display={displayModal === 'log-in' ? true : false} setDisplay={setModalDisplay} setUser={setUser} />
          <Info display={displayModal === 'info' ? true : false} setDisplay={setModalDisplay} />   
          <div className={classes.body}>
            <BudgetOverview   
                currencyFormatter={currencyFormatter}
                revenue={revenue}
                costs={sumCosts}
            />
            <Venue 
                setCapacity={setCapacity}
                costs={costs}
                addCost={addCost}
            />
            <Artists
                currencyFormatter={currencyFormatter}
                costs={costs}
                addCost={addCost}
            />
            <Tickets 
                currencyFormatter={currencyFormatter}
                setRevenue={setRevenue}
                capacity={capacity}
            />
        </div>
      </div>
  )
}

export default App;
