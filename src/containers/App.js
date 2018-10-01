import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import NavBar from '../components/NavBar'
import VideoContainer from './VideoContainer'
import VideoShow from './VideoShow'

const App = props => {
  return(
    <Router history={browserHistory}>

      <Route path='/' component={NavBar}>

        <IndexRoute component={VideoContainer}/>
        <Route path='/videos/:id' component ={VideoShow}/>

      </Route>

    </Router>
  )
}


export default App;
