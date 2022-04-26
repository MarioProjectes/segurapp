import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'


import WelcomeScreen from './screens/WelcomeScreen'
import ConsellDiari from './screens/ConsellDiari'
import ConsellNumericament from './screens/ConsellNumericament'
import Consell from './screens/Consell'
import Header from './shared/header'
import Footer from './shared/footer'
import AccesRapid from './screens/AccesRapid'

import demo from './screens/demo'

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
                options={{
                    header: () =>
                        <Header
                            navigation={navigation}
                            title="Consells "
                            param= {true}/>,
                }}
                name="ConsellNumericament"
                component={ConsellNumericament}
            />
            <Stack.Screen
                options={{headerShown: false}}
                name="demo"
                component={demo}
            />
             <Stack.Screen
                options={{
                    header: () =>
                        <Header
                            navigation={navigation}
                            title="Accés ràpid "
                            param= {true}/>,
                }}
                name="AccesRapid"
                component={AccesRapid}
            />

            <Stack.Screen
                options={{headerShown: false}}
                name="Consell"
                component={Consell}
            />

            <Stack.Screen
                name="Footer"
                component={Footer}
            />
        
        </Stack.Navigator>
    </NavigationContainer>
)


  

export default AppNavigator;    