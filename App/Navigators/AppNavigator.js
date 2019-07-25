import React from 'react'
import { Dimensions, Animated, Easing, ActivityIndicator, StatusBar, View } from 'react-native'
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation'
import { PropTypes } from 'prop-types'

import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage'
import SplashScreen from 'react-native-splash-screen'

//Auth Pages
import LoginScreen from 'App/Containers/Login/Login'

//App pages
import HomeScreen from 'App/Containers/Home/HomeScreen'

//App Components
import Header from 'App/Components/Header'
import SideBar from 'App/Components/DrawerSidebar'


class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props)
    this.isAuthenticated()
  }

  // Fetch the token from storage then navigate to our appropriate place
  isAuthenticated = async () => {
    const userId = await AsyncStorage.getItem('userId');
    this.props.navigation.navigate(userId ? 'App' : 'Auth')
    SplashScreen.hide()
  }
  // Render any loading content that you like here
  render() {
    return null
  }
}

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 200,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps
      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })
      return { transform: [{ translateX }] }
    },
  }
}

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => <Icon name="home" size={24} style={{ color: tintColor }} />,
      },
    },
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'right',
    contentOptions: {
      activeTintColor: '#FFF',
      inactiveTintColor: 'rgba(255,255,255,0.6)',
      itemsContainerStyle: {},
      iconContainerStyle: {
        opacity: 1,
        marginRight: -5,
      },
    },
    drawerWidth: Dimensions.get('window').width - 100,
    contentComponent: (props) => <SideBar {...props} />,
  }
)

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Drawer: Drawer,
  },
  {
    initialRouteName: 'Drawer',
    transitionConfig,
    navigationOptions: {
      // header : props => (<Header {...props} />),
      header: null,
      animationEnabled: true,
    },
  }
)
const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    headerMode: 'none',
  }
)

const AppNavigation = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack,
}, {
    initialRouteName: 'AuthLoading',
  })

export default createAppContainer(AppNavigation)
