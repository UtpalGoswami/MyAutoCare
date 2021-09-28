import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';

/**
 * @class Profile
 * @param  {Object} navigation - Use for navigation
 */
export default Profile = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>

  )
}