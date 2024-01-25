import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {selectTotalPrice} from '../redux/addToCartSlice';
import {useSelector} from 'react-redux';

const Bottombar = () => {
  // THIS COMPONENT IS CALLED IN ADD TO CART SCREEN IN BOTTOM

  // CALCULATION IS IN REDUCER
  const Subtotal = useSelector(selectTotalPrice);
  //   STATIC DELIVERY CHARGES
  const deliveryCharges = 2;
  //   TOTAL PRICE WITH DELIVERY CHARGES
  const totalPrice = Subtotal + deliveryCharges;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View style={styles.rowView}>
          <Text style={styles.titles}>Subtotal</Text>
          <Text style={styles.valueText}>${Subtotal.toFixed(2)}</Text>
        </View>

        <View style={styles.rowView}>
          <Text style={styles.titles}>Delivery</Text>
          <Text style={styles.valueText}>${deliveryCharges.toFixed(2)}</Text>
        </View>

        <View style={styles.rowView}>
          <Text style={styles.titles}>Total</Text>
          <Text style={styles.valueText}>${totalPrice.toFixed(2)}</Text>
        </View>

        {/* Checkout button */}
        <TouchableOpacity activeOpacity={0.7} style={styles.CheckoutButton}>
          <Text style={styles.checkoutText}>Proceed To checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    width: '95%',
    backgroundColor: '#f8f9fb',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 15,
    height: 250,
    justifyContent: 'space-evenly',
  },
  rowView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titles: {
    color: '#616A7D',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'manroperegular',
  },
  valueText: {
    color: '#1E222B',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'manroperegular',
  },
  CheckoutButton: {
    backgroundColor: '#2a4ba0',
    borderRadius: 20,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'manroperegular',
  },
});

export default Bottombar;
