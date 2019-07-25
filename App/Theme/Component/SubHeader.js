import { Colors, Fonts } from 'App/Theme'

const SubHeaderStyle = {
  container: {
    // justifyContent: "center",
    alignItems: 'center',
    flex: 1,
  },
  SubHeaderbackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 15,
  },
  Iconback: {
    color: Colors.White,
    textAlign: 'left',
    marginRight: 'auto',
  },
  SubTitle: {
    color: Colors.White,
    fontSize: 24,
    textAlign: 'center',
    fontFamily: Fonts.Rockwell,
  },
  SubTitledetailpage: {
    color: Colors.White,
    fontSize: 24,
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: Fonts.Rockwell,
  },
  detailspageTitle: {
    fontFamily: Fonts.Museo_Slab_300,
  }
}

export default SubHeaderStyle
