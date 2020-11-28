import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Characters from '../pages/characters';
import Episodes from '../pages/episodes';
import Locations from '../pages/locations';
import WatchList from '../pages/watchList';
import Menu from '../Menu';
import './styles.scss';

const App = (props) => {
  return (
    <Router>
      <Menu />
      <Route path='/' component={Characters} exact />
      <Route path='/episodes' component={Episodes} />
      <Route path='/locations' component={Locations} />
      <Route path='/watchList' component={WatchList} />
    </Router>
  );
};

export default App;
