import {createStackNavigator,createDrawerNavigator, createAppContainer} from "react-navigation";
import Profile from "./Profile";
import Newscreen from "./Newscreen";
import Page from "./Page";
import MainScreen from "./MainScreen"
import LoginPage from "./LoginPage";

const stack=createStackNavigator({
    MainScreen:{
        screen:MainScreen
    },
    screen1:{
        screen:Profile
    },
    screen2:{
        screen:Newscreen
    }, 
    screen3:{
        screen:Page
    }
});
const drawer = createDrawerNavigator({
    LoginPage:{
        screen:LoginPage
    },   
    MainApp:{screen:stack}
}) 
 export default createAppContainer(drawer); 
