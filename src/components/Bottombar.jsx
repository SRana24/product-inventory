import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {selectTotalPrice} from '../redux/addToCartSlice';
import {useSelector} from 'react-redux';

const Bottombar = () => {
  const Subtotal = useSelector(selectTotalPrice);
  const deliveryCharges = 2;
  const totalPrice = Subtotal + deliveryCharges;

  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: '95%',
          backgroundColor: '#f8f9fb',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingVertical: 20,
          paddingHorizontal: 15,
          height: 250,
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#616A7D',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'manroperegular',
            }}>
            Subtotal
          </Text>
          <Text
            style={{
              color: '#1E222B',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'manroperegular',
            }}>
            ${Subtotal.toFixed(2)}
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#616A7D',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'manroperegular',
            }}>
            Delivery
          </Text>
          <Text
            style={{
              color: '#1E222B',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'manroperegular',
            }}>
            ${deliveryCharges.toFixed(2)}
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#616A7D',
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'manroperegular',
            }}>
            Total
          </Text>
          <Text
            style={{
              color: '#1E222B',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'manroperegular',
            }}>
            ${totalPrice.toFixed(2)}
          </Text>
        </View>

        {/* Checkout button */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            backgroundColor: '#2a4ba0',
            borderRadius: 20,
            height: 56,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 14,
              fontWeight: '600',
              fontFamily: 'manroperegular',
            }}>
            Proceed To checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bottombar;
