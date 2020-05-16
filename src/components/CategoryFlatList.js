import React from 'react';
import {
    View,
    Text,
    StyleSheet
  } from 'react-native';
import {Icon as NativeIcon } from 'native-base'

export default Item=({ name, icon, type })=>{
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <NativeIcon name={icon} 
                      type={type} 
                      style={{color:'#ffdd00', fontSize:35}}
                      size={35} color='#ffdd00' />
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    container:{
        padding: 10,
        width: 78,
        marginRight:0
    },
    iconContainer:{
        backgroundColor: 'white', 
        borderRadius:50, 
        elevation: 5, 
        height:58, 
        marginBottom:10, 
        justifyContent:'center', 
        alignItems:'center' 
    },
    text:{
        fontSize: 12, 
        color:'black', 
        textAlign:'center'
    }
})