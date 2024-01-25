import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import AppNavigationContainer from './src/navigation';
import {ToastProvider} from 'react-native-toast-notifications';
import {Text, View} from 'react-native';

export default function App() {
  const CustomToast = ({message, type}) => {
    let backgroundColor;
    let color;

    // Define styles or content based on the toast type
    switch (type) {
      case 'success':
        backgroundColor = '#2A4BA0';
        color = '#F8F9FB';
        break;
      case 'warning':
        backgroundColor = '#FFC83A';
        color = '#153075';
        break;
      default:
        backgroundColor = 'grey';
        color = '#000';
    }

    return (
      <View style={{padding: 15, backgroundColor, borderRadius: 10}}>
        <Text style={{color}}>{message}</Text>
      </View>
    );
  };

  return (
    <ToastProvider
      placement="top"
      duration={5000}
      animationType="slide-in"
      animationDuration={250}
      textStyle={{fontSize: 20}}
      offset={50} // offset for both top and bottom toasts
      offsetTop={30}
      offsetBottom={40}
      swipeEnabled={true}
      renderToast={({message, type}) => (
        <CustomToast message={message} type={type} />
      )}>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigationContainer />
        </NavigationContainer>
      </Provider>
    </ToastProvider>
  );
}
