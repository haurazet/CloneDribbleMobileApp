import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

    carouselContainer:{
      position: 'absolute',
      top: 70,
      zIndex: 2, 
      overflow:'visible'
    },
    topContainer:{
      height:250,
      width: '100%',
      backgroundColor: '#ffdd00',
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      paddingTop: 15,
      overflow:'visible'
    },
    headerContainer:{
      paddingTop: 10,
      flexDirection: "row",
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    greyOrangeText:{
      color: '#ba9e00',
      fontSize: 13
    },
    boldText:{
      fontSize: 22,
      fontWeight: 'bold', 
      marginRight: 5, 
      fontFamily:'notoserif'
    },
    iconContainer:{
      width: '45%', 
      alignItems: 'center', 
      flexDirection: 'row', 
      justifyContent: 'flex-end'
    },
    iconStyle:{
      backgroundColor: 'white', 
      borderRadius: 50, 
      justifyContent:'center', 
      alignItems:'center',
      height:45,
      width:45,
      elevation: 20,
    },
    bottomContainer:{
      flex: 2,
      backgroundColor: '#faf9f7',
      width: '100%',
      position: 'relative',
      zIndex: -1,
    },
    flatListContainer:{
      height:120, 
      marginTop:170, 
      marginHorizontal:15
    },
    greyLine:{
      borderBottomColor: '#dedede',
      borderBottomWidth: 1,
      marginHorizontal:20
    },
    bottomHeaderContainer:{
      paddingHorizontal:20, 
      marginTop:15
    },
    bottomHeaderFlex:{
      flexDirection:'row', 
      justifyContent:'space-between'
    },
    greyText:{ 
      color:'#c9c9c9', 
      fontSize:12 
    }
});