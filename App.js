// import './App.css'
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { images } from './assets/images';
import Slider from './components/Slider';

  const {width} = Dimensions.get('window');
  const height = width ;
export default function App () {

  return (
    <View style={styles.container}>
      <Slider images={images}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { marginTop: 50, width, height },
});

