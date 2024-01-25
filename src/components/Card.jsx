import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {addToCart} from '../redux/addToCartSlice';
import {selectCartItems} from '../redux/addToCartSlice';
import {useToast} from 'react-native-toast-notifications';

const Card = ({
  listData,
  isLoading,
  error,
  favoriteStatus,
  handleToggleFavorite,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const toast = useToast();

  //   TOAST MESSSAGE TO SHOW THAT THE ITEM IS ADDED
  function showToast(message, type) {
    toast.show(message, {type});
  }
  // ADD TO CART FUCNTION
  function handleAddToCartItem(product) {
    if (!isProductInCart(product.id)) {
      dispatch(addToCart(product));
      showToast('Product added to your cart', 'success');
    } else {
      showToast('This product is already in your cart!', 'warning');
    }
  }

  //   CHECHK IF THE ITEM IS ALREADY IN CART
  function isProductInCart(productId) {
    return cartItems.some(item => item.id === productId);
  }

  //   ROUTE TO PRODUC DETAIL PAGE
  function handleProductNavigation(id) {
    navigation.navigate('ProductStackNavigation', {
      screen: 'ProductDetails',
      params: {
        id: id,
        favoriteStatus: favoriteStatus,
      },
    });
  }

  return (
    <View style={styles.MainProductsContainer}>
      {error ? (
        <View style={styles.loaderContainer}>
          <Text style={styles.errorText}>Something went wrong!</Text>
        </View>
      ) : isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        listData?.products?.map(e => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.cardContainer}
              onPress={() => {
                handleProductNavigation(e?.id);
              }}
              key={e?.id}>
              {/* IMAGE CONTAINER */}
              <View style={styles.imageContainer}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => handleToggleFavorite(e?.id)}
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
                    source={
                      favoriteStatus[e?.id]
                        ? require('../assets/Images/newred.png')
                        : require('../assets/Images/newoutline.png')
                    }
                    resizeMode={'cover'}
                    style={{width: 14, height: 14}}
                  />
                </TouchableOpacity>
                <Image
                  source={{uri: e?.thumbnail}}
                  resizeMode={'cover'}
                  style={styles.image}
                />
              </View>
              {/* TITLE AND PRICE */}
              <View style={styles.ProductAndTitlePricesContainer}>
                <Text style={styles.PrcieStyles}>$ {e?.price}</Text>
                <Text style={styles.TitleStyles}>{e?.title}</Text>
                {/* PLUS BUTTON FOR ADDING IN CART */}
                <View style={{position: 'absolute', right: 14, top: 3}}>
                  <TouchableOpacity
                    style={{height: 22, width: 22}}
                    activeOpacity={0.7}
                    onPress={() => handleAddToCartItem(e)}
                    disabled={isProductInCart(e?.id)}>
                    <Image
                      source={require('../assets/Images/newplusblue.png')}
                      resizeMode={'cover'}
                      style={{
                        width: '100%',
                        height: '100%',
                        tintColor: isProductInCart(e?.id) ? 'gray' : undefined,
                      }}
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
    paddingTop: 6,
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
  errorText: {
    color: '#000',
    fontFamily: 'manroperegular',
    fontWeight: '600',
  },
  loaderContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
