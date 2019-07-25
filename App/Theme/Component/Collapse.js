import { Colors, Fonts } from 'App/Theme'

const CollapseStyle = {
  cardEventDescription: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginBottom: 0,
    borderStyle: 'solid',
    borderTopColor: Colors.Text,
    borderTopWidth: 0.5,
    marginTop: 10,
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: -15,
    marginRight: -15,
    fontFamily: Fonts.Museo_Sans_500,
  },
  marginBottomZero: {
    marginBottom: 0,
  },
  cardTitle: {
    fontFamily: Fonts.Museo_Slab_300,
    color: Colors.Title,
    fontSize: 14,
  },
  cardText: {
    color: Colors.Blue,
    paddingTop: 0,
    fontFamily: Fonts.Museo_Sans_300,
  },
  cardFull: {
    flex: 1,    
  },
}

export default CollapseStyle
