import React, { Component } from 'react';
import { View, Text, TextInput, Button, ToastAndroid } from 'react-native';
import Firebase from 'react-native-firebase';
import { StackActions, NavigationActions } from 'react-navigation';

export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loading: false
        };
    }

    componentDidMount(){
        if(Firebase.auth().currentUser !== null){
            this.logInDone();
        }
    }

    login = () => {
        const { email, password } = this.state;
        if (email.length && password.length >= 6) {
            this.setState({ loading: true });
            Firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
                this.logInDone();
            }).catch((error) => {
                Firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
                    this.logInDone();
                }).catch((error) => {
                    this.setState({ loading: false });
                    alert(error);
                })
            })
        } else {
            ToastAndroid.showWithGravity("Please enter email & 6 Digit long password", ToastAndroid.LONG, ToastAndroid.CENTER)
        }
    }

    logInDone = () => { 
        this.setState({ loading: false,email:"",password:"" });
        this.props.navigation.navigate("MainScreen");
    };

    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: "center", flex: 1 }}>
                <View style={{ width: "80%" }}>
                    <Text style={{ fontSize: 25, color: "white", textAlign: "center" }}>Login</Text>
                    <TextInput placeholder="Email" placeholderTextColor="white" editable={!this.state.loading} style={{ borderBottomColor: "white", borderBottomWidth: 1, color: "white" }} onChangeText={(value) => { this.setState({ email: value }) }} />
                    <TextInput placeholder="Password" placeholderTextColor="white" editable={!this.state.loading} style={{ borderBottomColor: "white", borderBottomWidth: 1, color: "white", marginBottom: 10 }} onChangeText={(value) => { this.setState({ password: value }) }} secureTextEntry={true} />
                    <Button title="Login" onPress={this.login} disabled={this.state.loading} />
                </View>
            </View>
        );
    }
}
