import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    toCenter:{
      flex:1, //untuk heigth 1 layar, 100% thd parent
      // alignItems:'center',
      // justifyContent:'center',
      backgroundColor: 'white',
      color:'white'
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    statsHead: {
      paddingTop: 10,
      paddingHorizontal: 12,
    },

    //=====CAROUSEL=====//

    container: {
      // width: '100%',
      borderRadius: 20,
      elevation:10,
      marginTop: 10,
      marginLeft:20,
      height:300
    },
    scrollView: {
      display: 'flex',
      flexDirection: 'row',
      overflow:'visible',
      // paddingStart:20,
      // paddingEnd:20,
      height:350
    },
    bullets: {
      position: 'absolute',
      top: 315,
      left:0,
      right:0,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingHorizontal: 5,
      paddingTop: 5,
    },
    bullet: {
      paddingHorizontal: 1,
      fontSize: 30,
    },
    //=======SLIDE=======//
    slide: {
      paddingHorizontal: 20,
      paddingBottom: 10,
      paddingTop: 30,
      flexBasis: '100%',
      flex: 1,
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'space-between',
      height: 300,
},
  
});