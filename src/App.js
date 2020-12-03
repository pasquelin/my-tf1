import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import Routes from './routes'
import Stores from './stores'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.store = createStore(Stores)
  }

  render() {
    return <Provider store={this.store}>{Routes()}</Provider>
  }
}
