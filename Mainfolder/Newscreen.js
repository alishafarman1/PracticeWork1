import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Button} from 'react-native';



export default class Newscreen extends Component {
  static navigationOptions={
title:"page2"  
  }
  gotopage=()=>{
    this.props.navigation.navigate("screen3")
  }
  render() { 
    return ( 
      <View style={{flex:1, backgroundColor:"pink"}}>
        <Text style={{fontSize:40, color:"purple"}}>
            HELLO FRIENDS CHAAII P LOOO
        </Text>
        <View style={{width:100}}>
          <Button onPress={this.gotopage} title="open" color="orange"/>
        </View>
      </View>
      
    );
  }
}
 
