import React, { useState } from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';

/**
 * @class SignUp
 * @param  {Object} navigation - Use for navigation
 */
export default SignUp = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>SignUp</Text>
            </View>
        </SafeAreaView>

    )
}