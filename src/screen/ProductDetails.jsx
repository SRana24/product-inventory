import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
// import Gobackicon from "@expo/vector-icons/Ionicons";
// import BagIcon from "@expo/vector-icons/SimpleLineIcons";
import {SafeAreaView} from 'react-native-safe-area-context';
// import {StarRatingDisplay} from 'react-native-star-rating-widget';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {useGetProductDetailsQuery} from '../redux/productDetails';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/addToCartSlice';
import {useSelector} from 'react-redux';
import {selectCartItems} from '../redux/addToCartSlice';
import RatingComponent from '../components/RatingComponent';
import {ImageSlider} from 'react-native-image-slider-banner';
import {useFocusEffect} from '@react-navigation/native';
import {useToast} from 'react-native-toast-notifications';

const ProductDetails = () => {
  const cartItems = useSelector(selectCartItems);
  const route = useRoute();
  const toast = useToast();

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {id, favoriteStatus} = route.params;

  const {data: productDetails, isLoading} = useGetProductDetailsQuery({
    id: id,
  });

  const [newStatus, setNewStatus] = useState(favoriteStatus);
  const handleFavoriteToggle = id => {
    setNewStatus(prevStatus => {
      const notifyStatus = !prevStatus[id];
      showToast(
        notifyStatus ? 'Added to favorites' : 'Removed from favorites',
        'success',
      );
      return {
        ...prevStatus,
        [id]: notifyStatus,
      };
    });
  };
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const isProductInCart = () => {
    return cartItems.some(item => item.id === route?.params?.id);
  };

  useFocusEffect(
    React.useCallback(() => {
      setIsAddedToCart(isProductInCart());
    }, [cartItems]),
  );

  const showToast = (message, type) => {
    toast.show(message, {type});
  };

  const handleAddToCart = product => {
    const isInCart = isProductInCart();

    if (!isInCart) {
      // Dispatch addToCart action
      dispatch(addToCart(product));
      setIsAddedToCart(true);
      showToast('Product added to your cart', 'success');
    } else {
      toast.hideAll();
    }
  };

  const starImages = {
    filled: require('../assets/Images/filledstar.png'),
    half: require('../assets/Images/starhalf.png'),
    empty: require('../assets/Images/staroutline.png'),
  };

  const formattedImages = productDetails?.images.map(imgUrl => ({
    img: imgUrl,
  }));

  return (
    <SafeAreaView>
      {isLoading ? (
        <View
          style={{alignItems: 'center', justifyContent: 'center', height: 500}}>
          <ActivityIndicator size="large" color="#2A4BA0" />
        </View>
      ) : (
        <ScrollView
          style={{backgroundColor: '#fff', height: '100%'}}
          contentContainerStyle={{paddingVertical: 30}}>
          {/* Main header with title and navigation buttons */}
          <View style={{paddingHorizontal: 20}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  backgroundColor: '#f8f9fb',
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../assets/Images/chevronback0.png')}
                  resizeMode={'cover'}
                  style={{width: 16, height: 16}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{position: 'relative'}}
                onPress={() =>
                  navigation.navigate('ProductStackNavigation', {
                    screen: 'AddToCart',
                  })
                }>
                <Image
                  source={require('../assets/Images/handbag.png')}
                  resizeMode={'cover'}
                  style={{width: 24, height: 24}}
                />

                <View
                  style={{
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
                  }}>
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

            {/* Title and subtitle */}
            <View style={{paddingTop: 10}}>
              <Text
                style={{
                  fontSize: 50,
                  fontWeight: '300',
                  color: '#1E222B',
                  fontFamily: 'manroperegular',
                }}>
                {productDetails?.title}
              </Text>
              <Text
                style={{
                  fontSize: 50,
                  fontWeight: '800',
                  color: '#1E222B',
                  fontFamily: 'manroperegular',
                }}>
                by {productDetails?.brand}
              </Text>
            </View>

            {/* Product rating below */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <RatingComponent
                rating={productDetails?.rating}
                starImage={starImages}
              />

              {/* </View> */}
              <Text
                style={{
                  color: '#A1A1AB',
                  fontSize: 14,
                  fontWeight: '400',
                  fontFamily: 'manroperegular',
                }}>
                110 Reviews
              </Text>
            </View>
          </View>

          {/* Product slider below */}
          <View
            style={{
              width: '100%',
              backgroundColor: '#fff',
              position: 'relative',
              paddingTop: 6,
            }}>
            <ImageSlider
              data={formattedImages}
              autoPlay={true}
              timer={3000}
              caroselImageStyle={{
                resizeMode: 'stretch',
                height: 200,
              }}
              closeIconColor="#fff"
              indicatorContainerStyle={{
                right: 12,
                bottom: 6,
              }}
              activeIndicatorStyle={{
                backgroundColor: '#F9B023',
                width: 24,
                height: 5,
              }}
              inActiveIndicatorStyle={{
                width: 24,
                height: 5,
                borderRadius: 4,
              }}
            />

            <TouchableOpacity
              onPress={() => handleFavoriteToggle(productDetails?.id)}
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                backgroundColor: '#fff',
                padding: 10,
                width: 56,
                height: 56,
                borderRadius: 20,
                justifyContent: 'center', // Center vertically
                alignItems: 'center',
              }}>
              <Image
                source={
                  newStatus?.[productDetails?.id]
                    ? require('../assets/Images/redHeart2.png')
                    : require('../assets/Images/blackHeart.png')
                }
                resizeMode={'cover'}
                style={{width: 26, height: 24}}
              />
            </TouchableOpacity>
          </View>

          {/* Prices, discounts and checkout and add to cart buttons */}
          <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
            {/* Price and discount */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 16,
                  color: '#2A4BA0',
                  fontFamily: 'manroperegular',
                }}>
                ${productDetails?.price.toFixed(2)}
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 16,
                  color: '#2A4BA0',
                  fontFamily: 'manroperegular',
                }}>
                /KG
              </Text>
              <View
                style={{
                  backgroundColor: '#2A4BA0',
                  paddingVertical: 4,
                  paddingHorizontal: 10,
                  borderRadius: 70,
                  marginLeft: 20,
                }}>
                <Text style={{color: '#FAFBFD', fontFamily: 'manroperegular'}}>
                  {productDetails?.discountPercentage.toFixed(2)}% OFF
                </Text>
              </View>
            </View>

            {/* Add to cart and checkout button */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 30,
              }}>
              <TouchableOpacity
                onPress={() => handleAddToCart(productDetails)}
                activeOpacity={0.7}
                style={{
                  borderWidth: 1,
                  borderColor: isAddedToCart ? '#888' : '#2A4BA0',
                  borderRadius: 20,
                  width: '45%',
                  height: 56,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: isAddedToCart ? '#606D76' : '#fff',
                }}
                disabled={isAddedToCart}>
                <Text
                  style={{
                    color: isAddedToCart ? '#F8F9FB' : '#2A4BA0',
                    fontSize: 14,
                    fontWeight: '600',
                    fontFamily: 'manroperegular',
                  }}>
                  {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProductStackNavigation', {
                    screen: 'AddToCart',
                  })
                }
                activeOpacity={0.7}
                style={{
                  borderRadius: 20,
                  backgroundColor: '#2A4BA0',
                  width: '45%',
                  height: 56,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    textTransform: 'capitalize',
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: '600',
                    fontFamily: 'manroperegular',
                  }}>
                  buy now
                </Text>
              </TouchableOpacity>
            </View>

            {/* Details and description */}
            <View>
              <Text
                style={{
                  color: '#1E222B',
                  fontSize: 16,
                  fontWeight: '400',
                  fontFamily: 'manroperegular',
                }}>
                Details
              </Text>
              <Text
                style={{
                  color: '#8891A5',
                  fontSize: 16,
                  fontWeight: '400',
                  marginTop: 5,
                  fontFamily: 'manroperegular',
                }}>
                {productDetails?.description}
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default ProductDetails;
