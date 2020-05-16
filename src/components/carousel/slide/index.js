import React from 'react'
import { View, ImageBackground } from 'react-native'
import { Icon } from "react-native-elements";
import { styles } from './style'
import RestaurantCard from './../../RestaurantCard'

export const Slide = (props) => {

  const { img } = props.data;
  return (
    <View style={styles.slideContainer}>
      <ImageBackground 
        style={styles.imageBackground}
        source={img}>
          <View style={styles.topIcon}>
          <Icon name="favorite"
                color="white"
                iconStyle={styles.iconStyle}
          />
          </View>

          <View style={styles.cardContainer}>
            <RestaurantCard
              data={props.data}
              isCarousel={true}
            />
          </View>

        </ImageBackground>
      </View>
  );
}

export default Slide;