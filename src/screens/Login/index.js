import React, { useState } from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';

/**
 * @class Login
 * @param  {Object} navigation - Use for navigation
 */
export default Login = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Login</Text>
            </View>
        </SafeAreaView>

    )
}