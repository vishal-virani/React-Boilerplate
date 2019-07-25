import { StyleSheet } from 'react-native'
import { Colors , Fonts} from 'App/Theme'
import { ApplicationStyles } from 'App/Theme/ApplicationStyles'
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    // margin: 30,
    flex: 1,
    // flexDirection:'column',
    justifyContent: 'center',
  },
  Iconcircle: {
    fontSize: 10,
    marginRight: 15,
    marginLeft: 15,
    color: Colors.Blue,
    alignItems: 'center',
  },
  loginRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  loginRowOne: {
    marginTop: 50,
    marginBottom: 20,
    width: '100%',
  },
  logoTitle: {
    fontSize: 36,
    paddingLeft: 10,
    fontFamily: Fonts.Museo_Slab_300,
  },
  loginWelcometext: {
    fontSize: 40,
    textAlign: 'center',
    color: Colors.White,
    marginBottom: 'auto',
    fontFamily: Fonts.Museo_Sans_700,
    marginTop: '8%',
  },
  btnWrap: {
    marginBottom: '8%',
  },
  loginBtn: {
    backgroundColor: Colors.White,
    width: 280,
    fontFamily: Fonts.Museo_Sans_300,
    borderRadius: 8,
  },
  loginBtnText: {
    color: Colors.Blue,
    fontSize: 14,
  },
  subtitle: {
    color: Colors.Blue,
    fontSize: 17,
    fontFamily: Fonts.Museo_Slab_300,
    alignItems: 'center'
  },
  date: {
    color: Colors.Blue,
    fontSize: 17,
    alignItems: 'center',
    fontFamily: Fonts.Museo_Slab_300,
  },
  loginBox: {
    position: 'relative',
    borderRadius: 10,
    height: '35%',
    maxWidth: 800,
    alignItems: 'center',
    paddingHorizontal: 0,
    shadowOffset:{width: 0,  height: 0,},
    shadowColor: 'black',
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 30,
  },
  loginBoxImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // top: '50%',
    // transform: [{ translateY: -50 }],
  },
  cardFull: {
    flex: 1,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    position: 'relative',
  },
  topContainer: {
    flex:1,
    backgroundColor: Colors.White, 
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bottomContainer: {
    flex:1,
    backgroundColor: Colors.bottomContainerColor,
  },
})
