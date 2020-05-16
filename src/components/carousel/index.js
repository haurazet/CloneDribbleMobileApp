import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Slide } from './slide';
import { styles } from './style'

export const Carousel = (props) => {

  const { items, style } = props;
  const itemsPerInterval = props.itemsPerInterval === undefined
    ? 1
    : props.itemsPerInterval;

  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const init = ({width}) => {
    // initialise width
    setWidth(width);
    // initialise total intervals
    const totalItems = items.length;
    // console.log(totalItems) //3
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  }

  const getInterval = (offset) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset < (width / intervals) * i) {
        return i;
      }
      if (i == intervals) {
        return i;
      }
    }
  }

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          opacity: interval === i ? 1 : 0.2
        }}
      >
        &bull;
      </Text>
    );
  }

  return (
    <View >
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ ...styles.scrollView, width: `${100 * intervals}%` }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={data => {
          setWidth((data.nativeEvent.contentSize.width-411));
          // console.log(data.nativeEvent.contentSize.width) //1234
          // console.log(width) //1234
          // console.log(data.nativeEvent.contentOffset.x) //0, 400, 600
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
      >
        {items.map((item, index) => {
          switch (style) {
            case 'stats':
              return (
                <Stat
                  key={index}
                  label={item.label}
                  value={item.value}
                />
              );
            default:
              return (
                <Slide
                  key={index}
                  data={item}
                //   name={item.name}
                //   category={item.category}
                //   rating={item.rating}
                //   review={item.review}
                //   time={item.time}
                //   fee={item.fee}
                //   image={item.img}
                />
              );
          }
        })}
      </ScrollView>
      <View style={styles.bullets}>
        {bullets}
      </View>
    </View>
  )
}

export default Carousel;