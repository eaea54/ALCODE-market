import React, { Component, useState} from 'react';
import { TextInput, StyleSheet, View, Text, Alert, Button, Keyboard, FlatList} from 'react-native';
import API from './API'; //!!


export default class App extends Component {
  
  render = () => {
    return (
      <View style={styles.container}>
          <API /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testInput: {
    color: 'white',
  }
});
