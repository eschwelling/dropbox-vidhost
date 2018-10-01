import React, { Component } from 'react'

import VideoPlayer from "./VideoPlayer"


class VideoShow extends Component{
  constructor(props){
    super(props);
    this.state = {
      info: {}
    }
  }

  componentDidMount(){
    fetch(`/api/v1/url/${this.props.params.id}`)
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
    debugger;
  }

render() {
  debugger;
  return(
    <div>
    <video controls src={this.state.info.url} type="video/mp4" />
    <div className='text-center'>
    <a href={this.state.info.url}>{this.state.info.fileName}</a>
    </div>
    </div>
  )
}

}


export default VideoShow;
