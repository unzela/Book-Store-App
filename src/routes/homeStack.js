import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Login from "../login";
import Gallery from "../gallery";
import Category from "../categories";
import BaseHome from "../base";
import Register from "../register";
import Description from "../description";

const screens = {
BaseHome:
{
screen: BaseHome
},
Register:{
    screen:Register
},
Login: {
    screen: Login
},
Category:
{
    screen:Category
},
Gallery : {
    screen: Gallery
},
BookDetails:
{
screen: Description
},
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);