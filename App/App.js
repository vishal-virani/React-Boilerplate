import React, { Component } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import createStore from 'App/Stores'
import RootScreen from 'App/Containers/Root/RootScreen'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
const { store, persistor } = createStore()


export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      /**
       * @see https://github.com/reduxjs/react-redux/blob/master/docs/api.md#provider-store
       */
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar
            translucent={false}
            animated={false}
            hidden={false}
            backgroundColor="#FFF"
            barStyle="dark-content"
          />
          <RootScreen />
        </PersistGate>
      </Provider>
    )
  }
}
