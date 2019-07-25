import { Colors , Fonts} from 'App/Theme'
import { red } from 'ansi-colors';

const CardStyle = {
  card: {
    borderRadius: 0,
    flex: 1,
    flexDirection: 'row',
    shadowOffset:{width: 0,  height: 0,},
    shadowColor: Colors.White,
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 0,
    marginBottom: 10,
    marginTop: 5,
  },
  cardWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  cardFull: {
    flex: 1,
  },
  cardLeft: {
    flex: 0.75,
  },
  cardTag: {
    fontSize: 13,
    lineHeight: 19,
    color: Colors.Tag,
    marginBottom: 5,
    fontFamily: Fonts.MuseoSansRounded_500,
  },
  cardTitle: {
    fontSize: 18,
    // lineHeight: 22,
    color: Colors.Cardtitle,
    marginBottom: 5,
    fontFamily: Fonts.Museo_Slab_300,
  },
  cardTimeinfo: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  Iconclock: {
    fontSize: 13,    
    color: Colors.iconColor,
  },
  cardDate: {
    fontSize: 10,
    // lineHeight: 19,
    marginLeft: 6,
    color: Colors.Text,
    fontFamily: Fonts.Museo_Sans_300,
  },
  Iconcircle: {
    fontSize: 5,
    marginRight: 5,
    marginLeft: 5,
    color: Colors.Text,
  },
  cardTime: {
    fontSize: 10,
    // lineHeight: 10,
    color: Colors.Text,
    fontFamily: Fonts.Museo_Sans_300,
  },

  Iconmapmarker: {
    fontSize: 13,
    // lineHeight: 26,
    marginRight: 7.5,
    marginLeft: 1.5,
    color: Colors.iconColor,
  },
  cardLocation: {
    marginLeft: 6,
    fontSize: 10,
    lineHeight: 10,
    color: Colors.Text,
    fontFamily: Fonts.Museo_Sans_300,
  },
  cardRight: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  lineheight26: {
    lineHeight: 26,
  },
  flexColumn: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',    
  },
  IconLeft: {
    marginRight: 20,
  },
  cardRequired: {
    backgroundColor: Colors.requiredCardColor,
    marginLeft: -15,
    marginRight: -15,
    marginTop: -15,
    marginBottom: -15,
    borderRadius: 0,
    padding: 15,
  },
  colorHTML: {
    color: red,
  }
}

export default CardStyle
