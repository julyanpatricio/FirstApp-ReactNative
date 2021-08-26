import * as React from 'react';
import { View, Text, Image } from 'react-native';

export default function Comic({ name, image }) {
  return (
    <View style={{width:200, marginLeft:40}}>
      <Image style={{width: 200, height:200}}
        source={{ uri: image }}
      />
      <Text>{name}</Text>
    </View>
  )
}