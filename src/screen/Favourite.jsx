import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';

const Favourite = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{height: 100}}>
          <Text
            style={{
              color: '#2A4BA0',
              fontFamily: 'manrope',
              fontWeight: '600',
              fontSize: 18,
            }}>
            Favourite
          </Text>
        </View>
        <View style={{height: 200}}>
          <Image
            source={require('../assets/Images/nodata.png')}
            style={{height: 100, width: 100}}
          />
        </View>
        <Text
          style={{
            color: '#2A4BA0',
            fontFamily: 'manrope',
            fontWeight: '600',
            fontSize: 18,
          }}>
          No Data Available
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Favourite;
