import {createMaterialTopTabNavigator, createAppContainer} from "react-navigation";
import Profile from "./Profile";
import Newscreen from "./Newscreen";
import Page from "./Page";


const stack=createMaterialTopTabNavigator({
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
 export default createAppContainer(stack);
