import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {selectCartItems} from '../redux/addToCartSlice';
// import NegativeIcon from '@expo/vector-icons/AntDesign';
// import PlusIcon from '@expo/vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import CartHeader from '../components/CartHeader';
import Bottombar from '../components/Bottombar';
import {useDispatch} from 'react-redux';
import {decreaseQuantity, increaseQuantity} from '../redux/addToCartSlice';

const AddToCart = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <View style={{position: 'relative'}}>
        <ScrollView
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 280,
            minHeight: '100%',
            backgroundColor: '#fff',
          }}>
          {/* header */}
          <CartHeader navigation={navigation} cartItems={cartItems} />

          {/* Cart content */}
          {cartItems?.length !== 0 ? (
            cartItems?.map((e, index) => {
              return (
                <>
                  <View style={styles.MainCartContainer} key={index}>
                    <View style={styles.SubCartContainer}>
                      <Image
                        source={{uri: e?.thumbnail}}
                        resizeMode={'cover'}
                        style={{width: 30, height: 30}}
                      />
                      <View style={{marginLeft: 25}}>
                        <Text style={styles.TitleStyles}>{e?.title}</Text>
                        <Text style={styles.PriceStyles}>${e?.price}</Text>
                      </View>
                    </View>

                    {/* Increment and decrement counter */}
                    <View style={styles.CounterContainer}>
                      <TouchableOpacity
                        style={styles.DecrementContainer}
                        onPress={() => dispatch(decreaseQuantity(e?.id))}>
                        <Image
                          source={require('../assets/Images/minusblack.png')}
                          resizeMode={'cover'}
                          style={{width: 16, height: 16}}
                        />
                      </TouchableOpacity>
                      <Text style={styles.CounterTextStyles}>
                        {e?.quantity}
                      </Text>
                      <TouchableOpacity
                        style={styles.IncrementContainer}
                        onPress={() => dispatch(increaseQuantity(e?.id))}>
                        <Image
                          source={require('../assets/Images/plusblack.png')}
                          resizeMode={'cover'}
                          style={{width: 16, height: 16}}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.DividerStyles} />
                </>
              );
            })
          ) : (
            <View
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'center',
              }}>
              <Text style={{fontFamily: 'manroperegular'}}>
                Nothing Added to the Cart!
              </Text>
            </View>
          )}
        </ScrollView>

        {/* Bottom Bar below */}
        {cartItems?.length !== 0 ? (
          <View style={styles.BottombarContainer}>
            <Bottombar />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default AddToCart;

// Styles below

const styles = StyleSheet.create({
  NavigationContainer: {
    backgroundColor: '#f8f9fb',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainCartContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  SubCartContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red ',
  },
  TitleStyles: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1E222B',
    fontFamily: 'manroperegular',
  },
  PriceStyles: {
    fontSize: 14,
    fontWeight: '400',
    color: '#1E222B',
    fontFamily: 'manroperegular',
  },
  CounterContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: 120,
    justifyContent: 'space-between',
  },
  DecrementContainer: {
    backgroundColor: '#F8F9FB',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  IncrementContainer: {
    backgroundColor: '#F8F9FB',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CounterTextStyles: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1E222B',
    fontFamily: 'manroperegular',
  },
  DividerStyles: {
    borderWidth: 0.5,
    borderColor: '#EBEBFB',
  },
  BottombarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
