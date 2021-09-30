import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Home,
  Profile,
  Setting
} from "../screens";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

/**
 * Manage application navigation
 * @class AppNavigator
 */

export default function MyTabs() {

  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          activeTintColor: '#e91e63',
          style: {
            paddingVertical: 20,
          }
        }
        }>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" color={color} size={size} />
            ),
            // tabBarIcon: ({ size, focused, color }) => {
            //   return (
            //     <Image
            //       // style={{ width: size, height: size }}
            //       source={Images.HomeIcon} style={styles.bottomIcon}
            //     />
            //   );
            // },
          }} />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            title: 'Setting',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="setting" color={color} size={size} />
            ),
            // tabBarIcon: ({ size, focused, color }) => {
            //   return (
            //     <Image
            //       // style={{ width: size, height: size }}
            //       source={Images.Location} style={styles.bottomIcon}
            //     />
            //   );
            // },
          }} />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    </View>
  );
}

// const DashboardStack = () => (
//   <Stack.Navigator headerMode='none' initialRouteName='EmptyScreen'>
//     <Stack.Screen name='LinkDevice' component={LinkDevice} />
//     <Stack.Screen name='LinkDevice1' component={LinkDevice1} />
//     <Stack.Screen name='Dashboard' component={Dashboard} />
//     <Stack.Screen name='Profile' component={Profile} />
//     <Stack.Screen name='Temperature' component={Temperature} />
//     <Stack.Screen name='Voltage' component={Voltage} />
//     <Stack.Screen name='Humidity' component={Humidity} />
//     <Stack.Screen name='EmptyScreen' component={EmptyScreen} />
//     <Stack.Screen name='EmptyDataScreen' component={EmptyDataScreen} />
//     <Stack.Screen name='Notification' component={Notification} />
//   </Stack.Navigator>
// );

// const SettingdStack = () => (
//   <Stack.Navigator headerMode='none' initialRouteName='Setting'>
//     <Stack.Screen name='Setting' component={Setting} />
//     <Stack.Screen name='Dashboard' component={Dashboard} />
//     <Stack.Screen name='Notification' component={Notification} />
//   </Stack.Navigator>
// );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomIcon: {
    width: 50,
    height: 50
  },
});