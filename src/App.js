import React, { Component } from "react";
import ReactPlayer from 'react-player'

class App extends Component {
  state = {
    currentUrl: 'https://www.youtube.com/watch?v=p_f9eTjcNW4',
    isFetching: false,
    history:[],
    isError: false,
    errorText: ''
  };

  componentDidMount() {
  }

  handleUrl = () => {
    const data = {
      url: this.state.currentUrl
    }
    this.state.history.push(data)
    this.setState({ isFetching: true , currentUrl: this.refs.ticket_desc.value, history: this.state.history, isError: false})
  }

  onError = (data) => {
    if(data.type === 'error') {
      this.setState({isError: true, errorText: 'Invalid url'})
    }
  }

  render() {  
    console.log(this.state.history)
    return (
      <div>
        <input 
          type="text"
          ref='ticket_desc'
        />
        <button onClick={() => this.handleUrl()}>
          Go
        </button>

        <br />
        <div>
            <div>
              <label>NOW-PLAYING</label>
              <div>
                <ReactPlayer url={this.state.currentUrl} playing width='600px' height='600px' onError={this.onError}/>
                {this.state.isError && <p>{this.state.errorText}</p>}
              </div>
            </div>
            <div>
              <label>RECENTLY PLAYED</label>
              <div>
                {this.state.history.length > 0 && this.state.history.map((item, index) =>
                  <div>
                  <ReactPlayer url={item.url} playing width='300px' height='300px' />
                  <br/>
                  </div>
                )}
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
