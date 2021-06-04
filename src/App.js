import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'



import React, { useState } from 'react'

function App() {


  return (
    <div className="App" >
      <Router>

        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>





    </div>
  )
}
export default App;