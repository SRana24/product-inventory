import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import ProductDetails from '../screen/ProductDetails';
import AddToCart from '../screen/AddToCart';
import Category from '../screen/Category';
import Favourites from '../screen/Favourites';
import More from '../screen/More';
import {Image, TouchableOpacity, View} from 'react-native';

// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CustomTabBar = ({state, descriptors, navigation}) => {
  const tabIcons = {
    HomeStack: {
      active: require('../assets/Images/Category.png'),
      inactive: require('../assets/Images/Category.png'),
    },
    Category: {
      active: require('../assets/Images/Category.png'),
      inactive: require('../assets/Images/Category.png'),
    },
    Favourites: {
      active: require('../assets/Images/Category.png'),
      inactive: require('../assets/Images/Category.png'),
    },
    More: {
      active: require('../assets/Images/Category.png'),
      inactive: require('../assets/Images/Category.png'),
    },
  };

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 5,
        right: 5,
        height: 70,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        ...styles.shadow,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.8}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              position: 'relative',
            }}>
            {isFocused && (
              <View
                style={{
                  position: 'absolute',
                  top: -16,
                  width: 60,
                  height: 60,
                  borderRadius: 25,
                  backgroundColor: '#000',
                  zIndex: 1,
                  padding: 2,
                  marginBottom: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={isFocused ? tabIcons[route.name]?.active : null}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: '#E0B420',
                    zIndex: 100,
                  }}
                />
              </View>
            )}
            {!isFocused && (
              <Image
                source={tabIcons[route.name]?.inactive}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: '#999',
                  zIndex: 100,
                }}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="HomeStack" component={Home} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

const styles = {
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
};

export default TabNavigation;
