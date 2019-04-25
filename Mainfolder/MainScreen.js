import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import BottomTap from './BottomTap';

export default class MainScreen extends Component {
    static navigationOptions={
        title:"page3"
    }
  render() {
    return (
      <View style={{backgroundColor:"yellow", flex:1}}>
     <BottomTap/>
    
      </View>
    );
  }
}

