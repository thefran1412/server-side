import React, {Component} from 'react'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <h1>Home</h1>
        <button onClick={(e) => { console.log('button clicked') }}>Click</button>
      </div>
    )
  }
}

export default App
