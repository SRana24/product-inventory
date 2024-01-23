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

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="AddToCart" component={AddToCart} />
    </Stack.Navigator>
  );
};

const CustomTabBar = ({state, descriptors, navigation}) => {
  const tabIcons = {
    HomeStack: {
      active: require('../assets/Images/yellowhome.png'),
      inactive: require('../assets/Images/home.png'),
    },
    Category: {
      active: require('../assets/Images/yellowhome.png'),
      inactive: require('../assets/Images/Category.png'),
    },
    Favourites: {
      active: require('../assets/Images/yellowhome.png'),
      inactive: require('../assets/Images/Category.png'),
    },
    More: {
      active: require('../assets/Images/yellowhome.png'),
      inactive: require('../assets/Images/Category.png'),
    },
  };

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 10,
        left: 20,
        right: 20,
        height: 70,
        borderRadius: 35,
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
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}>
            <View
              style={{
                position: 'absolute',
                top: isFocused ? -12 : 0,
                borderRadius: isFocused ? 50 : 0,
                overflow: 'hidden',
              }}>
              <Image
                source={
                  isFocused
                    ? tabIcons[route.name].active
                    : tabIcons[route.name].inactive
                }
                style={{
                  width: 30,
                  height: 30,
                  tintColor: isFocused ? '#ffffff' : '#999',
                }}
              />
            </View>
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
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
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
