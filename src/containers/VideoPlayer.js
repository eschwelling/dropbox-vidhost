import React, { Component } from 'react'


class VideoPlayer extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: this.props.url,
      className: "eth-vid"
    }
  }

  render(){
    return(
      <div className={this.state.className}>
      <video controls src={this.state.url} type="video/mp4" />
      </div>
    )
  }
}

export default VideoPlayer
