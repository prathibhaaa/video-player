import React, { Component } from "react";
import ReactPlayer from 'react-player'
import './index.css'

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
    return (
      <div className='root'>
        <p>
        <b>Video player</b>
        </p>
        <input 
          type='text'
          ref='ticket_desc'
          className='text'
          placeholder='Enter video url'
        />
        <button onClick={() => this.handleUrl()}>
          Go
        </button>

        <br />
        <div className='container'>
            <div className='col-xs-8'>
              <label className='lablel'>NOW-PLAYING TEST</label>
              <div className='list'>
                <ReactPlayer url={this.state.currentUrl} playing width='600px' height='600px' onError={this.onError}/>
                {this.state.isError && <p className='text-red'>{this.state.errorText}</p>}
              </div>
            </div>
            <div className='col-xs-4'>
              <label className='label'>RECENTLY PLAYED</label>
              <div className='list inline'>
                {this.state.history.length > 0 && this.state.history.map((item, index) =>
                  <div>
                  <ReactPlayer url={item.url} playing width='300px' height='300px' />
                  <br/>
                  </div>
                )}
                {this.state.history.length <= 0 &&
                  <div>sorry no history</div>
                }
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
