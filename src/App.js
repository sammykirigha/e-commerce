import React from 'react'
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'

const App = () => {
  return (
    <Router>
      <Switch>
         <Route path='/' component={Dashboard} />
       </Switch>
    </Router>
  )
}

export default App

