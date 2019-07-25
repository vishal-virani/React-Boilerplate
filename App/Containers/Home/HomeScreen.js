//Native
import React from 'react'
import { Text, View, RefreshControl, FlatList } from 'react-native'
import { PropTypes } from 'prop-types'

//Redux
import { connect } from 'react-redux'

//Components
import Header from 'App/Components/Header'
//Styles
import Style from './Style'

//Services

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <View >
        {/* <Header title={'Chats'} {...this.props} /> */}
        <Text>{'Home Screen'}</Text>
      </View>
    )
  }
}

HomeScreen.propTypes = {
}
HomeScreen.defaultProps = {
}
const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => ({
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
