/* eslint-disable */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import InicioScreen from './Screens/InicioScreen';

export default function componentName() {
  return (
    <View style={styles.container}>

      <InicioScreen />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'black'
  }
});