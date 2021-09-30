import React, { useState } from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';

/**
 * @class ForgotPassword
 * @param  {Object} navigation - Use for navigation
 */
export default ForgotPassword = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>ForgotPassword</Text>
            </View>
        </SafeAreaView>

    )
}