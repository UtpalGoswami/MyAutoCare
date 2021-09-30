import React, { useState } from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';

/**
 * @class OtpSignUp
 * @param  {Object} navigation - Use for navigation
 */
export default OtpSignUp = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>OtpSignUp</Text>
            </View>
        </SafeAreaView>

    )
}