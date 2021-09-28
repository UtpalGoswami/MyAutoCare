import React from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
// import store from './redux/store/index.js';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { colors } from './constants/index';
import App from './navigation';

/**
 * @class Index
 * @description  Tattlebox init function
 */
export default function index() {
    // const { persistor, store } = configureStore();
    return (
        <App />
    );
}


    // <Provider store={store}>
    //     <StatusBar translucent backgroundColor={colors.headerBackgroundColor} barStyle="light-content" />
    //     <App />
    // </Provider>