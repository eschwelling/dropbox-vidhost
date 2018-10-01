import React, { Component } from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton'

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <div className="navbar">
          <Link to='/'>Home!</Link>
          <BackButton />
        </div>
        {this.props.children}

      </div>
    )
  }
}

export default NavBar;
