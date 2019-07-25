import React, { Component } from 'react'
import { ScrollView, Alert, Text, TouchableOpacity } from 'react-native'
import { Image, View } from 'react-native-animatable'
import Icon from 'react-native-vector-icons/FontAwesome'

import { DrawerItems, SafeAreaView } from 'react-navigation'
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-community/async-storage';
import { DrawerStyle } from 'App/Theme'
import Images from 'App/Theme/Images'
import { PropTypes } from 'prop-types'

//Redux
import { connect } from 'react-redux'

_signMeOut = async (props) => {
  Alert.alert(
    'Log Out',
    'Are you sure you want to log out?',
    [
      { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      {
        text: 'OK',
        onPress: async () => {
          await AsyncStorage.clear()
          props.navigation.navigate('Auth')
        },
      },
    ],
    { cancelable: false }
  )
}

const SideBar = (props) => {
  const { items, ...rest } = props
  const filteredItems = items.filter((item) => {
      return item;
  })
  return (

    <LinearGradient style={DrawerStyle.container} colors={['#004B87', '#004B87', '#004B87']}>
      <ScrollView>
        <View style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
          <LinearGradient colors={['#FFF', '#FFF', '#FFF']}>
            <View style={DrawerStyle.profileView}>
              <Image
                source={Images.loginLogo}
                animation={'fadeIn'}
                duration={1200}
                delay={500}
                ref={(ref) => (this.logoImgRef = ref)}
                style={DrawerStyle.logoImg}
              />
            </View>
          </LinearGradient>
          <DrawerItems
            items={filteredItems}
            {...rest}
          />
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity
          onPress={() => {
            this._signMeOut(props)
          }}
          style={DrawerStyle.footer}
        >
          <Icon name="power-off" size={24} color="rgba(255,255,255,0.6)" />
          <Text style={DrawerStyle.logoutTxt}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}
const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar)

