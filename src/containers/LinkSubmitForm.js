import React, { Component } from 'react'

class LinkSubmitForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      fileName: "",
      id: ""
    }
    this.handleUrlInput = this.handleUrlInput.bind(this)
    this.handleFileNameInput = this.handleFileNameInput.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onClear = this.onClear.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }

  handleUrlInput(event) {
    let urlInput = event.target.value;
    this.setState({ url: urlInput })
  }

  handleFileNameInput(event) {
    let fileNameInput = event.target.value;
    this.setState({ fileName: fileNameInput })
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('click')
    let formPayload = {
      id: this.state.url.length + 1,
      url: this.state.url.replace('mp4?dl=0', 'mp4?raw=1'),
      fileName: this.state.fileName
    }
    this.props.handleSubmit(formPayload)
    this.clearForm()
  }

  clearForm() {
    this.setState( url: "", fileName: "")
  }

  onClear(event) {
    event.preventDefault()
    this.setState({ url: "", fileName: "" })
  }

  render() {
    console.log(this.state)
    return(
      <div className='row small-6 columns text-center'>
        <form onSubmit={this.onSubmit}>
          <label>Gimma ya linky poo!</label>
          <input type='text' name='url' id='url' value={this.state.url} onChange={this.handleUrlInput}/>
          <label>What's it called bud?</label>
          <input type='text' name='fileName' id='fileName' value={this.state.fileName} onChange={this.handleFileNameInput}/>
          <input type="submit" value='submit'/>
        </form>
      </div>
    )
  }
}

export default LinkSubmitForm;
