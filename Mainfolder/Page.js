import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

export default class Page extends Component {
    static navigationOptions={
        title:"page3"
    }
  render() {
    return (
      <View style={{backgroundColor:"yellow", flex:1}}>
      <Text style={{fontSize:90}}> 
      pchukay hain hum

      </Text>
    
      </View>
    );
  }
}

