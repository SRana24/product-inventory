import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
// import AddToCartIcon from "@expo/vector-icons/AntDesign";
// import WishlistIcon from "@expo/vector-icons/AntDesign";
import {useNavigation} from '@react-navigation/native';
import {addToCart} from '../redux/addToCartSlice';
// import * as Font from 'expo-font';

// export const loadFonts = async () => {
//   await Font?.loadAsync({
//     manroperegular: require("./../../assets/fonts/Manrope-Regular.ttf"),
//   });
// };

const Card = ({listData, isLoading, error}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function handleAddToCartItem(product) {
    dispatch(addToCart(product));
  }

  function handleProductNavigation(id) {
    navigation.navigate('ProductDetails', {
      screen: 'ProductDetails',
      id: id,
    });
  }

  //   useEffect(() => {
  //     loadFonts();
  //   }, []);
  return (
    <View style={styles.MainProductsContainer}>
      {error ? (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
          }}>
          <Text>Something went wrong!</Text>
        </View>
      ) : isLoading ? (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
          }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        listData?.products?.map(e => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleProductNavigation(e?.id)}
              key={e?.id}
              style={styles.SubProductsContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.WishlistMainContainer}>
                <Image
                  source={require('../assets/Images/newoutline.png')}
                  resizeMode={'cover'}
                  style={{width: 14, height: 14}}
                />
                <Image
                  source={require('../assets/Images/newred.png')}
                  resizeMode={'cover'}
                  style={{width: 14, height: 14}}
                />
              </TouchableOpacity>
              <View style={styles.ImageContainer}>
                <Image
                  source={{uri: e?.thumbnail}}
                  resizeMode={'cover'}
                  style={styles.ImageStyles}
                />
                {/* <Image
                  source={require('../assets/Images/image-icon.png')}
                  resizeMode={'cover'}
                  style={{width: 65, height: 65}}
                /> */}
              </View>

              {/* Product title and prices */}
              <View style={styles.ProductAndTitlePricesContainer}>
                <View>
                  <Text style={styles.PrcieStyles}>${e?.price}</Text>
                  <Text style={styles.TitleStyles}>{e?.title}</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleAddToCartItem(e)}>
                  <Image
                    source={require('../assets/Images/newplusblue.png')}
                    //   resizeMode={'cover'}
                    style={{width: 24, height: 24}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        })
      )}
    </View>
  );
};

export default Card;

// Styles below

const styles = StyleSheet.create({
  MainProductsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  SubProductsContainer: {
    marginTop: 10,
    backgroundColor: '#F8F9FB',
    width: '45%',
    borderRadius: 12,
    height: 220,
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    marginRight: 10,
    paddingBottom: 25,
  },
  WishlistMainContainer: {
    position: 'absolute',
    left: '5%',
    top: '5%',
    zIndex: 99,
  },
  ImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'lightblue',
    height: 120,
  },
  ImageStyles: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  ProductAndTitlePricesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
  },
  PrcieStyles: {
    color: '#1E222B',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'manroperegular',
    fontStyle: 'normal',
  },
  TitleStyles: {
    color: '#616A7D',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'manroperegular',
    paddingTop: 4,
  },
});
