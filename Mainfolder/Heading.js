import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';


export default class Heading extends Component {

    render() {
    return (
        <View style={{backgroundColor:this.props.bg || "gray", padding:10, marginTop:10 }}>
            <Text style={{color:"yellow", fontSize:20, fontWeight:"bold"}}>{this.props.title}</Text>
        </View>
    );
  }
}

