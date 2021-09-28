import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';

/**
 * @class SplashScreen
 * @param  {Object} navigation - Use for navigation
 */
export default SplashScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>SplashScreen</Text>
            </View>
        </SafeAreaView>

    )
}