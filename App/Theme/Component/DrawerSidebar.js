import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const DrawerStyle = {
  container: {
    flex: 1,
  },
  logoImg: {
    width: 170,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  profileView: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: Platform.OS == 'ios' && DeviceInfo.hasNotch() ? 30 : null,
  },
  footer: {
    height: 50,
    backgroundColor: 'rgba(25,47,106,.9)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoutTxt: {
    marginLeft: 20,
    fontSize: 20,
    color: 'rgba(255,255,255,0.6)',
  },
}

export default DrawerStyle
