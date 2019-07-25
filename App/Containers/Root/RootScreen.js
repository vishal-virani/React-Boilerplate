import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View, Platform, StatusBar, Text } from 'react-native'
import styles from './RootScreenStyle'

import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import { PropTypes } from 'prop-types'

class RootScreen extends Component {
  constructor(props) {
    super(props)
    SplashScreen.hide()
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </View>
    )
  }
}
RootScreen.propTypes = {
  startup: PropTypes.func,

}
const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
