import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import AccesRapid from './screens/AccesRapid'
import Categories from './screens/Categories'
import Consell from './screens/Consell'
import ConsellsFiltrats from './screens/ConsellsFiltrats'
import Footer from './shared/footer'
import Header from './shared/header'
import WelcomeScreen from './screens/WelcomeScreen'

const Stack = createStackNavigator();



/*
    Aquest component crea la navegació de l'aplicació mitjançant una pila.
    Per fer-ho enregistra totes les pantalles dels fitxers importats.
*/
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
                            title="Accés ràpid "
                            param= {true}/>,
                }}
                name="AccesRapid"
                component={AccesRapid}
            />
            <Stack.Screen
                options={{
                    header: () =>
                        <Header
                            navigation={navigation}
                            title="Categories"
                            param= {true}/>,
                }}
                name="Categories"
                component={Categories}
            />
            <Stack.Screen
                options={{headerShown: false}}
                name="Consell"
                component={Consell}
            />
             <Stack.Screen
                options={{headerShown: false}}
                name="ConsellsFiltrats"
                component={ConsellsFiltrats}
            />
            <Stack.Screen
                name="Footer"
                component={Footer}
            />
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppNavigator;    