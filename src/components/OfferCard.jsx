import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const OfferCard = () => {
  // STATIC OFFER CARDS ON HOME PAGE
  return (
    <View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 25}}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.OfferSliderContainer}>
          <Image
            source={require('../assets/Images/image-icon.png')}
            resizeMode={'cover'}
            style={{width: 65, height: 65}}
          />
          <View>
            <Text style={styles.OfferTextOne}>get</Text>
            <Text style={styles.OfferTextTwo}>50% OFF</Text>
            <Text style={styles.OffertextThree}>on first 03 order</Text>
          </View>
        </View>

        <View style={styles.OfferSliderContainerTwo}>
          <Image
            source={require('../assets/Images/image-icon.png')}
            resizeMode={'cover'}
            style={{width: 65, height: 65}}
          />
          <View>
            <Text style={styles.OfferTextOne}>get</Text>
            <Text style={styles.OfferTextTwo}>50% OFF</Text>
            <Text style={styles.OffertextThree}>on first 03 order</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  OfferSliderContainer: {
    height: 123,
    width: 269,
    backgroundColor: '#f9b023',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: 20,
  },
  OfferSliderContainerTwo: {
    height: 123,
    width: 269,
    backgroundColor: '#e4ddcb',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  OfferTextOne: {
    textTransform: 'capitalize',
    fontSize: 20,
    color: '#fff',
    fontWeight: '300',
    fontFamily: 'manroperegular',
  },
  OfferTextTwo: {
    fontWeight: '800',
    fontSize: 26,
    color: '#fff',
    fontFamily: 'manroperegular',
  },
  OffertextThree: {
    fontSize: 13,
    fontWeight: '500',
    color: '#fff',
    fontFamily: 'manroperegular',
  },
});

export default OfferCard;
