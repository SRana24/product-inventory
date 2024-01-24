import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../screen/ProductDetails';
import AddToCart from '../screen/AddToCart';

const Stack = createNativeStackNavigator();

const ProductStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProductDetails"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AddToCart" component={AddToCart} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default ProductStackNavigation;
