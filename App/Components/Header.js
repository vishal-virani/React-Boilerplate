import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, Image, SafeAreaView, Platform, Alert } from 'react-native'
import NavigationService from 'App/Services/NavigationService'
import { Header as ToolbarElement, Icon } from 'react-native-elements'
import { DrawerActions } from 'react-navigation-drawer'
import Colors from 'App/Theme/Colors'
import Images from 'App/Theme/Images'
import Fonts from 'App/Theme/Fonts'
import DeviceInfo from 'react-native-device-info';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      icon: 'reorder',
    }
  }

  toggleDrawer = () => {
    // this.props.navigation.openDrawer()
    this.props.navigation.dispatch(DrawerActions.openDrawer())
  };
  LeftComponent = () => {
    return (
      <TouchableOpacity onPress={() => NavigationService.navigateAndReset('Drawer')}>
        <View style={{ alignItems: 'center' }}>
          <Image source={Images.logo} style={{ resizeMode: 'contain', height: 30, width: 30 }} />
        </View>
      </TouchableOpacity>
    )
  };
  RightComponent = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => this.toggleDrawer()}>
          <View style={{ alignItems: 'flex-end' }}>
            <Icon name={'menu'} type="material" color="#2089dc" />
          </View>
        </TouchableOpacity>
      </View>
    )
  };
  render() {
    return (
      <ToolbarElement
        placement="left"
        rightComponent={this.RightComponent}
        //leftComponent={this.LeftComponent}
        centerComponent={{
          text: this.props.title !== '' ? this.props.title : 'Home',
          style: {
            color: Colors.Title,
            fontSize: 22,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: Fonts.Rockwell,
          },
        }}
        containerStyle={{ marginTop: Platform.OS === 'ios' ? 0 : -30, backgroundColor: '#FFF' }}
      />
    )
  }
}

export default Header
