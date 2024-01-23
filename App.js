import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import AppNavigationContainer from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigationContainer />
      </NavigationContainer>
    </Provider>
  );
}
