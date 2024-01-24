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
    navigation.navigate('ProductStackNavigation', {
      screen: 'ProductDetails',
      params: {
        id: id,
      },
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
              activeOpacity={0.8}
              style={styles.cardContainer}
              onPress={() => handleProductNavigation(e?.id)}
              key={e?.id}>
              <View style={styles.imageContainer}>
                <View
                  style={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    backgroundColor: '#fff',
                    borderRadius: 25,
                    alignItems: 'center',
                    padding: 5,
                    zIndex: 100,
                  }}>
                  <Image
                    source={require('../assets/Images/newred.png')}
                    resizeMode={'cover'}
                    style={{width: 14, height: 14}}
                  />
                </View>
                <Image
                  source={{uri: e?.thumbnail}}
                  resizeMode={'cover'}
                  style={styles.image}
                />
              </View>
              <View style={styles.ProductAndTitlePricesContainer}>
                <Text style={styles.PrcieStyles}>$ {e?.price}</Text>
                <Text style={styles.TitleStyles}>{e?.title}</Text>
                <View style={{position: 'absolute', right: 12, top: 6}}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => handleAddToCartItem(e)}>
                    <Image
                      source={require('../assets/Images/newplusblue.png')}
                      resizeMode={'cover'}
                      style={{width: 24, height: 24}}
                    />
                  </TouchableOpacity>
                </View>
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
    // backgroundColor: 'red',
    padding: 8,
  },
  SubProductsContainer: {
    marginTop: 18,
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
    // flex: 1,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#F8F9FB',
    paddingHorizontal: 15,
    paddingVertical: 6,
    position: 'relative',
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
  cardContainer: {
    width: '44%',
    aspectRatio: 0.8,
    backgroundColor: '#F8F9FB',
    borderRadius: 16,
    margin: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  titleContainer: {
    paddingHorizontal: 8,
    paddingTop: 6,
    position: 'absolute',
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    flexGrow: 1,
  },
  imageContainer: {
    height: '66%',
    position: 'relative',
  },
  image: {
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  descriptionContainer: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
});
