import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';

/**
 * @class Setting
 * @param  {Object} navigation - Use for navigation
 */
export default Setting = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Setting</Text>
      </View>
    </SafeAreaView>

  )
}