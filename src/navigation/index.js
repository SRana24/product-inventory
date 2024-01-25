import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import ProductStackNavigation from './ProductStackNavigation';

const Stack = createNativeStackNavigator();

const AppNavigationContainer = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen
        name="ProductStackNavigation"
        component={ProductStackNavigation}
      />
    </Stack.Navigator>
  );
};

export default AppNavigationContainer;
