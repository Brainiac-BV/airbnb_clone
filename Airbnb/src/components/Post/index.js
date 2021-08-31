import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';

const Post = (props) => {

    const post = props.post;

  return (
    <View style={styles.container}>
      <Image source={{uri: post.image}} style={styles.image} />
      
      <Text style={styles.bedrooms}>{post.bed} beds {post.bedroom} bedrooms</Text>
      <Text style={styles.description}>
        {post.type} {post.title}
      </Text>
      <Text style={styles.prices}>
          <Text style={styles.oldPrice}>${post.oldPrice} </Text>
          <Text style={styles.price}>${post.newPrice} / night </Text>
      </Text>
      <Text style={styles.totalPrice}>${post.totalPrice} total </Text>
    </View>
  );
};

export default Post;
