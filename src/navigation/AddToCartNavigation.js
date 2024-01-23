import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddToCart from '../../screen/AddToCart';

const AddToCart = createNativeStackNavigator();

const AddToCartNavigation = () => {
  return (
    <AddToCart.Navigator
      initialRouteName="AddToCart"
      screenOptions={{headerShown: false}}>
      <AddToCart.Screen name="AddToCart" component={AddToCart} />
    </AddToCart.Navigator>
  );
};

export default AddToCartNavigation;
