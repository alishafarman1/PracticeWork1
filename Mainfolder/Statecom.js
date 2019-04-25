import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';



export default class Statecom extends Component {
    state = {
        text: "ALISHA",
        color:"white",
        count:0
    };
    
    abu = () => {
        this.setState({
            text:"Queen",
            color:"#000",
            count:this.state.count+1
        });
    }

    render() {
        return (
            <TouchableOpacity onPress={this.abu}>
                <Text style={{color:this.state.color}}>
                    {this.state.text}{this.state.count}
                </Text>
            </TouchableOpacity>
        );
    }
}

