import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CartHeader = ({cartItems}) => {
  const navigation = useNavigation();

  //   THIS HEADER IS CALLED IN ADD TO CART , HEADER

  return (
    <View style={styles.MainHeaderContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButtonContainer}>
        <Image
          source={require('../assets/Images/chevronback0.png')}
          resizeMode={'cover'}
          style={{width: 16, height: 16}}
        />
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
  backButtonContainer: {
    backgroundColor: '#f8f9fb',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
