import React from 'react'
import {
  Platform,
  Text,
  View,
  ActivityIndicator,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { PropTypes } from 'prop-types'
import Style from './Style'

//Redux
import { connect } from 'react-redux'
import AuthAction from 'App/Stores/Auth/Actions';


// All Components 
import InputBox from 'App/Components/InputBox';
import ButtonBox from 'App/Components/ButtonBox';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentWillUpdate(nextProps, nextState) {

    if (nextProps.LoginData.credintial && nextProps.LoginIsLoading == false) {
      this.props.navigation.navigate('App');
    } else {
    }
  }
  onSubmit = async () => {
    this.props.doAuthantication({ email: 'vishalv.addweb@gmail.com', password: 'addweb123' })
  }
  render() {
    return (
      <View style={Style.container}>
        <View><InputBox
          placeholder={'Email'}
          leftIcon={<Icon name='email' size={24} />} />
        </View>
        <View>
          <InputBox
            placeholder={'Password'}
            leftIcon={<Icon name='lock' size={24} />}
            secureTextEntry={true} />
        </View>
        <View>
          <ButtonBox title={'Login'} onPress={() => { this.onSubmit() }} />
        </View>
        <View>
          <Text>{"Don't have an Account?"}</Text>
          <TouchableOpacity><Text>{'Sign up'}</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}
LoginScreen.propTypes = {
  LoginData: PropTypes.any,
  LoginIsLoading: PropTypes.bool.isRequired,
  LoginErrorMessage: PropTypes.string,
}
LoginScreen.defaultProps = {
  LoginData: [],
}

const mapStateToProps = (state) => {
  return {
    LoginData: state.Auth.LoginData,
    LoginIsLoading: state.Auth.LoginIsLoading,
    LoginErrorMessage: state.Auth.LoginErrorMessage
  }
}
const mapDispatchToProps = (dispatch) => ({
  doAuthantication: (data) => dispatch(AuthAction.doAuthantication(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
