import { StyleSheet } from 'react-native'
import { Colors , Fonts} from 'App/Theme'
import { ApplicationStyles } from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    // margin: 30,
    flex: 1,
    // justifyContent: 'center',
  },
  title: {
    fontFamily: Fonts.Museo_Slab_500,
  },
})
