import {
  Platform
} from 'react-native'


const Fonts = {

  //Museo_Slab_100: 'MuseoSlab-100',
  Museo_Slab_300: Platform.OS == 'ios' ? 'MuseoSlab-300' : 'Museo Slab 300',
  //Museo_Slab_500: 'MuseoSlab-500',
  //Museo_Slab_700: 'MuseoSlab-700',
  //Museo_Slab_900: 'MuseoSlab-900',

  
  //MuseoSansRounded_300: 'MuseoSansRounded-300',
  //MuseoSansRounded_500: 'MuseoSansRounded-500',
  //MuseoSansRounded_300: 'MuseoSansRounded-300',
  // Museo_Sans_500: 'MuseoSansRounded-500',
  Museo_Sans_300: Platform.OS == 'ios' ? 'MuseoSans-300' : 'MuseoSansRounded-300',
  Museo_Sans_500: Platform.OS == 'ios' ? 'MuseoSansRounded-500' : 'MuseoSansRounded-500',
  Museo_Sans_700: Platform.OS == 'ios' ? 'MuseoSansRounded-700' : 'MuseoSansRounded-700',
  Rockwell: 'Rockwell',

  Times_New_Roman: 'Times New Roman',


}

export default Fonts;