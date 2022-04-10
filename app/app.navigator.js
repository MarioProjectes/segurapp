import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { Navigation } from 'react-native-navigation';
import { TransitionPreset } from '@react-navigation/stack';
import { Constants} from 'expo-constants'
import { StatusBar } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen'
import ConsellDiari from './screens/ConsellDiari'
import Header from './shared/header'
import Footer from './shared/footer';
import { Button } from 'react-native-paper';

const Stack = createStackNavigator();


const AppNavigator = ({navigation}) => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            ...TransitionPresets.ScaleFromCenterAndroid}
            }>
            <Stack.Screen
                options={{headerShown: false}}
                name="WelcomeScreen" 
                component={WelcomeScreen}
            />
            <Stack.Screen 
                options={{ 
                    header: () =>  
                        <Header 
                            navigation={navigation} 
                            title="Consell del dia"
                            param= {true}/>,
                }}
                name="ConsellDiari"
                component={ConsellDiari}
            />
            <Stack.Screen
                name="Footer"
                component={Footer}
            />
        
        </Stack.Navigator>
    </NavigationContainer>
)


  

export default AppNavigator;    