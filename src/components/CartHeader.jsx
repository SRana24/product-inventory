import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import Gobackicon from "@expo/vector-icons/Ionicons";

const CartHeader = ({navigation, cartItems}) => {
  return (
    <View style={styles.MainHeaderContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.NavigationContainer}>
        {/* <Gobackicon name="chevron-back" size={24} color="#000" /> */}
      </TouchableOpacity>
      <Text style={styles.HeaderTitle}>
        Shopping Cart{' '}
        {cartItems?.length !== 0 ? `(${cartItems?.length})` : null}
      </Text>
    </View>
  );
};

export default CartHeader;

// Styles below:

const styles = StyleSheet.create({
  MainHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 35,
    backgroundColor: '#fff',
  },
  HeaderTitle: {
    color: '#1E222B',
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 20,
  },
});
