/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import {
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  
} from 'react-native';

import { styles } from './src/assets/style/style';
import { Icon } from "react-native-elements";
import Carousel from './src/components/carousel'
import RestaurantCard from './src/components/RestaurantCard'
import Item from './src/components/CategoryFlatList'
import {CATEGORY} from './src/assets/dummy/category'
import {RESTAURANT} from './src/assets/dummy/restaurant'

const App = () => {
  return (
    <>
      <View>
          <ScrollView>
              <StatusBar backgroundColor={'#ffdd00'} />

              {/* ===================
                        CAROUSEL 
                  =================== */}

              <View style={styles.carouselContainer} >
                <Carousel
                    style="slides"
                    itemsPerInterval={1}
                    items={RESTAURANT}
                  />
              </View>

            {/* ===================
                  TOP CONTAINER 
                =================== */}
              <View style={styles.topContainer}>
                  <View style={styles.headerContainer}>
                      <View style={{ width: '55%' }}>
                          <Text style={styles.greyOrangeText}>Delivery Address</Text>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                              <View>
                                  <Text style={styles.boldText}>Bielawska 12</Text>
                              </View>
                              <View>
                                  <Icon name='edit' color='#ba9e00' size={16} />
                              </View>
                          </View>
                      </View>
                      <View style={styles.iconContainer}>
                          <Icon name='search' containerStyle={[styles.iconStyle,{ marginHorizontal: 10 }]} />
                          <Icon name='person' containerStyle={styles.iconStyle} />
                      </View>
                  </View>
              </View>

            {/* ===================
                  BOTTOM CONTAINER 
                =================== */}

            <View style={styles.bottomContainer}>
              <View style={styles.flatListContainer}>
              <FlatList
                    data={CATEGORY}
                    renderItem={({ item }) => <Item name={item.name} icon={item.icon} type={item.type} />}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    />
              </View>
              <View style={styles.greyLine}/>
              <View style={styles.bottomHeaderContainer} >
                  <View style={styles.bottomHeaderFlex}>
                      <View>
                          <Text style={styles.boldText}>All restaurants</Text>
                          <Text style={styles.greyText}>Sorted by Fastest Delivery</Text>
                      </View>
                      <View>
                          <Icon name='tune' containerStyle={[styles.iconStyle,{ borderWidth:1, borderColor:'#c9c9c9' }]} />
                      </View>
                  </View>
                  <View>
                  <FlatList
                    data={RESTAURANT}
                    renderItem={({item}) =><RestaurantCard data={item} isLogo={true}  />}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    />
                  </View>
              </View>
            </View>
          </ScrollView>
          <View style={{height:50, width:50, borderColor:'black', borderWidth:1}}>
                <Text>tes</Text>
          </View>
      </View>
    </>
  );
};



export default App;
