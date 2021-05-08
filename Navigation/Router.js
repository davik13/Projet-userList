import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import UserListScreen from '../Components/UserListScreen';
import SignInScreen from '../Screens/SignInScreen';
import UserDetails from '../Components/UserDetail';

const StackNavigator = createStackNavigator();

const Router = () =>{
    
    return(
        <StackNavigator.Navigator >
          <StackNavigator.Screen name="SignIn" component={SignInScreen} />
          <StackNavigator.Screen name="Home" component={UserListScreen}  />
          <StackNavigator.Screen name="Details" component={UserDetails}  />

        </StackNavigator.Navigator>
    );
}
export default Router;