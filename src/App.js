import React, { Component } from "react";
import ReactPlayer from 'react-player'

class App extends Component {
  state = {
    currentUrl: 'https://www.youtube.com/watch?v=p_f9eTjcNW4',
    isFetching: false
  };

  handleUrl = () => {
    this.setState({ isFetching: true , currentUrl: this.refs.ticket_desc.value})
  }

  render() { 
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
                <ReactPlayer url={this.state.currentUrl} playing width='600px' height='600px'/>
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
