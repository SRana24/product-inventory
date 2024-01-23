import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../../screen/ProductDetails';

const ProductDetailsNavigator = createNativeStackNavigator();

const ProductListNavigation = () => {
  return (
    <ProductDetailsNavigator.Navigator
      initialRouteName="ProductDetails"
      screenOptions={{headerShown: false}}>
      <ProductDetailsNavigator.Screen
        name="ProductDetails"
        component={ProductDetails}
      />
    </ProductDetailsNavigator.Navigator>
  );
};

export default ProductListNavigation;
