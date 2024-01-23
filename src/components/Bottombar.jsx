import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import { Font } from "expo-font";

// export const loadFonts = async () => {
//   await Font.loadAsync({
//     manroperegular: require("../../assets/fonts/Manrope-Regular.ttf"),
//   });
// };

const Bottombar = () => {
  //   useEffect(() => {
  //     loadFonts();
  //   }, []);
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
            $35.96
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
            $2.00
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
            $37.96
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
