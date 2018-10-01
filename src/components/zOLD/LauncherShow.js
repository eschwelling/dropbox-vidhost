import React, { Component } from 'react'


class LauncherShow extends Component{
  constructor(props){
    super(props);
    this.state = {
      info: {}
    }
  }

  componentDidMount(){
    fetch(`/api/v1/launcher/${this.props.params.id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ info: body })
    })
  }

render() {
  return(
    <div>
    <h1>{this.state.info.name}</h1>
    <h5>{this.state.info.bio}</h5>
    </div>
  )
}

}


export default LauncherShow;
