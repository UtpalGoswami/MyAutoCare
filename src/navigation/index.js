import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationService';
import AppNavigator from './AppNavigator';

/**
 * Manage application navigation flow, This function is called when application loads.
 * @class AppContainer
 */

export default AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  )
}

// {user ? <AppNavigator /> : <AuthNavigator />}