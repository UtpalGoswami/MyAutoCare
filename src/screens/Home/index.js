import React, { useState, useEffect, useReducer } from 'react';
import { View, Text, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestLogin } from '../../redux/actions/loginActions';

/**
 * @class Home
 * @param  {Object} navigation - Use for navigation
 */
export default Home = ({ navigation }) => {

  /**
   * @description dispatch {object} - Dispatch Action
   */
  const dispatch = useDispatch();


  const loginResponse = useSelector(state => state.loginReducer.loginResponse);
  const spinnerResponse = useSelector(state => state.loginReducer.spinner);

  useEffect(() => {
    console.log('Final Login Resp : ' + JSON.stringify(loginResponse));
  }, [loginResponse]);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            console.log('On Press');
            dispatch(requestLogin('12211', '212121'));
          }}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}