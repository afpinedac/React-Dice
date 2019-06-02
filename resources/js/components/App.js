import React, { Component } from 'react'
import NavigationBar from './NavigationBar'
import FormMessagesList from './common/flash/FlashMessagesList'

class App extends Component {
  render () {
    return (
      <div>
        <NavigationBar/>
        <FormMessagesList/>
        {this.props.children}
      </div>
    )
  }
}

export default App