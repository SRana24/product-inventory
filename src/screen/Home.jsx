import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useGetProductsListQuery} from '../redux/products';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectCartItems} from '../redux/addToCartSlice';
import Card from '../components/Card';
import OfferCard from '../components/OfferCard';

const Home = () => {
  const cartItems = useSelector(selectCartItems);
  const navigation = useNavigation();
  const {data: productList, isLoading, error} = useGetProductsListQuery();

  return (
    <SafeAreaView>
      <ScrollView
        style={{height: '100%', backgroundColor: '#fff'}}
        contentContainerStyle={{paddingBottom: 100}}>
        <View style={styles.MainHeaderContainer}>
          {/* Name header */}
          <View style={styles.NameHeaderContainer}>
            <Text style={styles.NameTextStyles}>Hey, Saikat</Text>
            <TouchableOpacity
              style={{position: 'relative'}}
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate('ProductStackNavigation', {
                  screen: 'AddToCart',
                })
              }>
              <Image
                source={require('../assets/Images/handbag.png')}
                resizeMode={'cover'}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: '#fff',
                }}
              />
              {/* <BagIcon name="handbag" size={24} color="#fff" /> */}
              <View style={styles.AddtoCartCountContainer}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: 14,
                    fontFamily: 'manroperegular',
                  }}>
                  {cartItems?.length}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Searchbar */}
          <View style={styles.MainSearcBarContainer}>
            <View style={{marginLeft: 25, marginRight: 15}}>
              <Image
                source={require('../assets/Images/Search.png')}
                style={{height: 15, width: 15}}
              />
            </View>

            <Text style={styles.PlaceHolderStyles}>
              Search Products or Store
            </Text>
          </View>

          {/* Dropdowns */}
          <View style={styles.DropdownContainer}>
            <View>
              <Text style={styles.DropdownText}>Delivery to</Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.SubDropdownText}>
                  Green Way 3000, Sylhet
                </Text>
                <View style={{marginLeft: 10, marginTop: 4}}>
                  <Image
                    source={require('../assets/Images/downarrow.png')}
                    style={{height: 15, width: 15}}
                  />
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.DropdownText}>Within</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.SubDropdownText}>1 Hour</Text>
                <View style={{marginLeft: 10, marginTop: 4}}>
                  <Image
                    source={require('../assets/Images/downarrow.png')}
                    style={{height: 15, width: 15}}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Offer Slider */}

        <OfferCard />

        {/* Recommended products list */}
        <View>
          <View style={{paddingBottom: '4%'}}>
            <Text style={styles.ProductHeaderText}>Recommended</Text>
          </View>
          <Card listData={productList} isLoading={isLoading} error={error} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MainHeaderContainer: {
    width: '100%',
    height: 252,
    backgroundColor: '#2a4ba0',
    paddingHorizontal: 25,
    paddingBottom: 25,
    paddingTop: 35,
    display: 'flex',
    justifyContent: 'space-between',
  },

  NameHeaderContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  NameTextStyles: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'manroperegular',
  },
  MainSearcBarContainer: {
    backgroundColor: '#153175',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    borderRadius: 28,
  },
  PlaceHolderStyles: {
    color: '#8891A5',
    fontSize: 15,
    fontFamily: 'manroperegular',
  },
  DropdownContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  DropdownText: {
    color: '#90a2cd',
    fontWeight: '800',
    fontSize: 11,
    textTransform: 'uppercase',
    fontFamily: 'manroperegular',
  },
  SubDropdownText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#F8F9FB',
    fontFamily: 'manroperegular',
    paddingTop: 4,
  },
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
  ProductHeaderText: {
    fontSize: 30,
    fontWeight: '400',
    color: '#1E222B',
    fontFamily: 'manroperegular',
    fontStyle: 'normal',
    paddingLeft: 16,
  },
  AddtoCartCountContainer: {
    width: 22,
    height: 22,
    borderRadius: 22 / 2,
    backgroundColor: '#f9b023',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '-25%',
    right: '-40%',
  },
});

export default Home;
