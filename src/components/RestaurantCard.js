import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
  } from 'react-native';
import { Icon } from "react-native-elements";

export default RestaurantCard=({data,isCarousel,isLogo})=>{
    const {name,category,rating,review,time,fee,logo}=data
    const {whiteContainer,topContainer,title,grayText,logoSize,line,bottomContainer,iconAndText,iconStyle,blackText}=styles
    return(
        <View style={whiteContainer}>
            <View style={topContainer}>
                <View>
                    <Text style={title}>{name}</Text>
                    <Text style={grayText}>{category}</Text>
                </View>
                {isLogo?
                    <View >
                        <Image style={logoSize} source={logo}/>
                    </View>:null
                }
            </View>

            <View style={line}/>

            <View style={bottomContainer}>
                <View style={[{width: '30%'},iconAndText]}>
                    <Icon 
                        name="star" 
                        color="#ffdd00" 
                        iconStyle={iconStyle} 
                    />
                    <Text style={[blackText,{marginEnd:3}]}>{rating}</Text>
                    <Text style={grayText}>({review})</Text>
                </View>
                <View style={[{ width: '35%'},iconAndText]}>
                    <Icon 
                        name="alarm"
                        color="#c9c9c9"
                        iconStyle={iconStyle}
                    />
                    <Text style={blackText}>{time}</Text>
                </View>
                <View style={[{ width: '27%', justifyContent:'center'},iconAndText]}>
                    <Icon   
                        name='dollar-sign'
                        type='font-awesome-5'
                        color="#c9c9c9"
                        iconStyle={[iconStyle,{fontSize:16}]} 
                    />
                    <Text style={blackText}>{fee}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    whiteContainer:{
        height: 100,
        backgroundColor: 'white',
        marginVertical:10,
        borderRadius: 10,
        elevation: 2,
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    topContainer:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        paddingRight:5,
        marginBottom:5
    },
    title:{
        fontWeight: 'bold', 
        fontSize: 20
    },
    grayText:{
        color: "#c9c9c9", 
        fontSize: 12, 
    },
    logoSize:{
        height:50, 
        width:50
    },
    line:{
        borderBottomColor: '#c9c9c9',
        borderBottomWidth: 1,
        marginHorizontal:4
    },
    bottomContainer:{
        paddingVertical: 7,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        maxWidth:290
    },
    iconAndText:{
        flexDirection: 'row', 
        alignItems: "center"
    },
    iconStyle:{
        fontSize: 20, 
        marginEnd: 5
    },
    blackText:{
        fontSize:12
    }
})