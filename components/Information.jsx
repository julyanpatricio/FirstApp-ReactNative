import { StyleSheet, Text,Image, View } from 'react-native';
import React from 'react';

export default function Information({ image, name, description }) {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={{uri: image}}
      />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  },
  image: {
    width: 200,
    height: 200
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});