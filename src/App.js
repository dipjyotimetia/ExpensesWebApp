import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from './views/Login/LoginPage'

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={LoginPage} />
      </Switch>
    </div>
  )
}

export default App
