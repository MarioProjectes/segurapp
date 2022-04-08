import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { StyleSheet, Text, TouchableWithoutFeedback, Image, View, SafeAreaView, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native'; // permet mostrar botons clickats!
import { TouchableNativeFeedback } from 'react-native';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android

import WelcomeScreen from './app/screens/WelcomeScreen';
import ConsellDiari from './app/screens/ConsellDiari';
import AppNavigator from './app/app.navigator';


export default function App() {
  return( 
    <GestureHandlerRootView style={{flex: 1}}> 
            <AppNavigator></AppNavigator> 

    </GestureHandlerRootView>
  );
}




export function registerScreens() {
  Navigation.registerComponent(
    'ConsellDiari.ConsellDiari',
    () => gestureHandlerRootHOC(ConsellDiari),
    () => ConsellDiari
  );
  Navigation.registerComponent(
    'WelcomeScreen',
    () => gestureHandlerRootHOC(WelcomeScreen),
    () => WelcomeScreen
  );

}

