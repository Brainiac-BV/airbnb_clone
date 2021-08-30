import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const Post = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/house.jpg')} style={styles.image} />
      
      <Text style={styles.bedrooms}>1 bed 1 bath</Text>
      <Text style={styles.description}>
        Long description of an apartment, home or some other shit you can rent
        here. Never used this before but seems cools.
      </Text>
      <Text style={styles.prices}>
          <Text style={styles.oldPrice}>$45 </Text>
          <Text style={styles.price}>$35 / night </Text>
      </Text>
      <Text style={styles.totalPrice}>$70 total </Text>
    </View>
  );
};

export default Post;
