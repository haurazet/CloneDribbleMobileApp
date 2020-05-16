import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
//=======SLIDE=======//
    slideContainer: {
      flex:1,
      height: 280,
      position: 'relative',
      top: 30,
      zIndex: 1,
      elevation: 15,
      borderRadius: 20,
      overflow: 'hidden',
      justifyContent: 'space-between',
      marginHorizontal: 20,
    },
    imageBackground:{
      flex: 1,
      height: null,
      width: null,
      position: 'relative',
      bottom: 0,
      zIndex: 2,
      resizeMode: 'cover',
    },
    topIcon:{
      height: 20,
      position: 'absolute',
      top: 20,
      right:20,
      zIndex: 2
    },
    iconStyle:{
      fontSize: 25, 
      marginEnd: 5 
    },
    cardContainer:{
      position: 'relative',
      top: 150,
      zIndex: 3,
      marginHorizontal: 20,
    }
})