import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Linking , Button} from 'react-native';
import Heading from './Heading';
import Statecom from './Statecom';


export default class Profile extends Component {
    static navigationOptions={
        title:"Profile" 
    }
    
    gotoNewscreen=()=>{
      this.props.navigation.navigate("screen2")
    }
    dialnumber = () => {
        Linking.openURL("tel:090078601")
    }
    facebook = () => {
        Linking.openURL("https://www.facebook.com/adaakhan00")
    }

    render() {
        return (

            <ScrollView style={{backgroundColor:"purple"}}>
                <View>
                    <Text style={{ fontSize: 50, fontStyle: "italic", color: "yellow", fontWeight: "bold" }}> ADAA KHAN </Text>
                    <View style={{ flexDirection: "row", backgroundColor: "pink", marginTop: 20, padding: 20, justifyContent: "space-between" }} >
                        <Image source={require('./images/food.jpg')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                        <Image source={require("./images/burger.jpeg")} style={{ width: 100, height: 100, borderRadius: 50 }} />
                        <Image source={require("./images/noodles.jpeg")} style={{ width: 100, height: 100, borderRadius: 50 }} />
                    </View>
                
                    <Heading title="Description" bg="gray" />
                    <View style={{padding:10}}>
                    <Text style={{ fontSize: 20, color: "white" }}>Nothing is more sincerer than food. </Text>
                    
                    <TouchableOpacity onPress={this.dialnumber}>
                        <Text style={{ color: "white", fontSize: 20, marginTop:10}}>Call us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.facebook}>
                        <Text style={{ color: "white", fontSize: 20, marginTop:10 }}>contact us on facebook</Text>
                    </TouchableOpacity>
                    <Statecom/>
                    <View style={{width:100, alignSelf:"center"}}> 
                   <Button onPress={this.gotoNewscreen} title="pay bill" color="pink" />
                   </View>
                    
                      
                    </View>   
                    
                </View>
            </ScrollView>
        );
    }
}

