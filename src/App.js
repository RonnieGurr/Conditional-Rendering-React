import React from 'react';
import loadData from './components/LoadData';
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    loadData(this.props.dataType).then((response) => {
      console.log(response)
      if (!response) {
        this.setState({
          error: 'API seems down',
          code: 'ERR_CONNECTION_REFUSED'
        })
      }
      else if (response.error === 404) {
        this.setState({
          code: response.error,
          error: response.errorMessage
        })
      } else {
        this.setState({
          data: response,
          loading: false
        })
      }
    })
  }

  displayData(data) {
    return (
      JSON.stringify(data)
    )
  }

  render() {
    if (this.state.error) {
      return (
        <div className='error'>
          <h1>{this.state.error}</h1>
          <p>Error code: <b>{this.state.code}</b></p>
        </div>
      )
    } 
    else if(this.state.loadData) {
      return (
        <div className='loading'>
          <h1>Loading</h1>
        </div>
      )
    } 
    else {
      return (
        <div className='data'>
          <h1>Loading complete! Displaying your {this.props.dataType}!</h1>
          <p>{this.displayData(this.state.data)}</p>
        </div>
      )
    }
  }
}

export default App;
