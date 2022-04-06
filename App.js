import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, Image, View, SafeAreaView, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native'; // permet mostrar botons clickats!
import { TouchableNativeFeedback } from 'react-native';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android

import WelcomeScreen from './app/screens/WelcomeScreen';
import ConsellDiari from './app/screens/ConsellDiari';
import colors from './app/config/colors'

export default function App() {
  const handlePress = () => {
  }



  return (
      //<ConsellDiari></ConsellDiari>
      <WelcomeScreen/>
  )
}
