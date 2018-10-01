import React, { Component } from 'react'
import { Link } from 'react-router';

import VideoPlayer from './VideoPlayer'
import LinkSubmitForm from './LinkSubmitForm'
import VideoShow from './VideoShow'

class VideoContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      urls: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  componentDidMount(){
    fetch('/api/v1/urls')
    .then(response => response.json())
    .then(body => {
      this.setState({ urls: body })
    })
  }

  handleSubmit(payload) {
    fetch('/api/v1/urls', {
      method: "POST",
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(body => {
      let newUrls = this.state.urls.concat(body)
      this.setState({ urls: newUrls })
    })
  }



  render() {
    let urlsMapped = this.state.urls.map((url) => {

      return(
        <div className='vid-player' key={url.id}>
          <VideoPlayer
            url={url.url}
            id={url.id}
            fileName={url.fileName}
            />
          <div className='text-center'>
          <Link className="show-link" to={`/videos/${url.id}`}>{url.fileName}</Link>
          </div>
        </div>
       )

    })

    return(
      <div className='rows columns'>
        <h1>welcome to your own personal dropbox video hosting center!</h1>
        <div className='small-6 columns'>
          {urlsMapped}
        </div>
        <LinkSubmitForm
          handleSubmit={this.handleSubmit}
          />
      </div>
    )
  }
}

export default VideoContainer;
