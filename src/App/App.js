import React from 'react'
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom';
import Characters from '../pages/characters';
import Episodes from '../pages/episodes';
import Menu from '../Menu';
import './styles.scss';

const App = props => {
    return (
        <Router>
        <Menu />
        <Route path="/" component={Characters} exact/>
        <Route path="/episodes" component={Episodes}/>
        <Route path="/locations" component={Characters}/>
        <Route path="/watchList" component={Characters}/>
        </Router>
    )
}

export default App
