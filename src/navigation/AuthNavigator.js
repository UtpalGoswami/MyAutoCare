import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp, ForgotPassword, OtpSignUp, ResetPassword,LinkDevice, LinkDevice1 } from "../screens";

const Stack = createStackNavigator();

/**
 * Manage application authentication navigation
 * @class AuthNavigator
 */

export default AuthNavigator = () => (
    <Stack.Navigator
        screenOptions = {{
            headerShown: null
        }}
    >     
        <Stack.Screen 
            name="Login" 
            component= {Login}
        />          
        <Stack.Screen 
            name="SignUp" 
            component= {SignUp}
        />          
        <Stack.Screen 
            name="ForgetPassword" 
            component= {ForgotPassword}
        /> 
        <Stack.Screen 
            name="ResetPassword" 
            component= {ResetPassword}
        />          
        <Stack.Screen 
            name="LinkDevice" 
            component= {LinkDevice}
        />          
        <Stack.Screen 
            name="LinkDevice1" 
            component= {LinkDevice1}
        />          
        <Stack.Screen
            name="OtpSignUp" 
            component= {OtpSignUp}
        /> 
    </Stack.Navigator> 
)