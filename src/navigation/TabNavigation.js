import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Category from '../screen/Category';
import Favourite from '../screen/Favourite';
import More from '../screen/More';
import {Image, Text, TouchableOpacity, View} from 'react-native';

// CUSTOM TAB BAR

const CustomTabBar = ({state, descriptors, navigation}) => {
  // THESE ARE TAB ICONS FOR ACTIVE AND INACTIVE
  const tabIcons = {
    HomeStack: {
      active: require('../assets/Images/yellowhome.png'),
      inactive: require('../assets/Images/hometab.png'),
    },
    Category: {
      active: require('../assets/Images/yellowCategory.png'),
      inactive: require('../assets/Images/Category.png'),
    },
    Favourite: {
      active: require('../assets/Images/yellowHeart.png'),
      inactive: require('../assets/Images/Heart.png'),
    },
    More: {
      active: require('../assets/Images/more_vertical.png'),
      inactive: require('../assets/Images/more_vertical.png'),
    },
  };

  return (
    // MAIN CONTAINER FOR TAB
    <View style={styles.mainContainerTab}>
      {/* ON PRESS FUCNITON */}
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
            style={styles.tabView}>
            {/* ACTIVE VIEW */}
            {isFocused && (
              <View style={styles.tabActiveView}>
                <View style={styles.tabActiveIMAGE}>
                  <View style={{width: 25, height: 25}}>
                    <Image
                      source={isFocused ? tabIcons[route.name]?.active : null}
                      style={styles.activeImageStyle}
                    />
                  </View>
                </View>
              </View>
            )}
            {/* INACTIVE VIEW */}
            {!isFocused && (
              <View style={styles.inactiveTabView}>
                <View style={{height: 24, width: 25}}>
                  <Image
                    source={tabIcons[route.name]?.inactive}
                    style={styles.inactiveImageStyle}
                  />
                </View>

                <Text
                  style={{
                    color: isFocused ? 'transparent' : '#8891A5',
                    marginTop: 6,
                    fontSize: 12,
                  }}>
                  {options.tabBarLabel}
                </Text>
              </View>
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
      <Tab.Screen
        name="HomeStack"
        component={Home}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{tabBarLabel: 'Categories'}}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{tabBarLabel: 'Favorite'}}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{tabBarLabel: 'More'}}
      />
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
  mainContainerTab: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    right: 10,
    height: 70,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 35,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    position: 'relative',
  },
  tabActiveView: {
    position: 'absolute',
    top: -25,
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: '#F8F9FB',
    zIndex: 1,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabActiveIMAGE: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#000',
    zIndex: 1,
    padding: 2,
    marginBottom: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeImageStyle: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    tintColor: '#E0B420',
    zIndex: 100,
  },
  inactiveTabView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveImageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    tintColor: '#999',
    zIndex: 100,
  },
  tabBarLabelText: {},
};

export default TabNavigation;
