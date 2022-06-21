import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import Constants from 'expo-constants'
import { StyleSheet, SafeAreaView, Platform, Text, View} from 'react-native';
import { StatusBar } from 'react-native';
import { Dimensions } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { useState, useEffect} from 'react'

import colors from '../config/colors';
import Footer from '../shared/footer';
import ScrollBox from '../shared/ScrollBox';

/*
    Aquest component mostra el títol i el text del consell amb Id dessitjat.
    En prèmer la vista "Entesos" es modifica l'estat i l'emmagatzematge local
    per a marcar el consell com a realitzat. Això afecta la presentació ja que
    el consell passa a mostrar-se en verd.
*/
export default function Consell({route, navigation}) {
  const {customData, vectorDoneParam, id, category} = route.params;
  const [vectorDone, setVectorDone] = useState(vectorDoneParam)

  useEffect(() => {})

  /*
    Aquest mètode realitza l'emmagatzematge local
  */
  async function writeValues(newVector){
    try{
      AsyncStorage.setItem('@vectorDone', JSON.stringify(newVector))
    }
    catch (e){
      console.log("Error a  Consell:writeValues")
    }
  }

  /*
    Aquest mètode modifica l'estat i crida a l'emmagatzematge dels valors en local.
  */
  const escriuEstat = (param) => {
    const newVector = [...vectorDone];
    newVector[id] = param;
    setVectorDone(newVector)
    writeValues(newVector)
  }

  /*
    Workaround some navigation and state issues
  */
  const entesosWasPressed = (param) => {
    escriuEstat(param);
    navigation.reset({
      index: 0,
      routes: [{name: "WelcomeScreen", params: {customData}}, {name: "ConsellsFiltrats", params: {customData, category}}]
    })
  }

  const handlePressMenu = () => {
    route.name==="AccesRapid" 
        ? navigation.goBack()
        : navigation.navigate("AccesRapid", {customData})
  }

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
            hidden= {Dimensions.get('window').width <= 200 ? true :  false}
            animated={true}
            backgroundColor= {colors.statusbarBackgroundColor}
            barStyle="light-content"
            translucent={true}
        />

        <View style= {vectorDone[id]  //This state value modifies styling to green 
            ? [myHeaderStyles.barStyle, {backgroundColor: colors.greenBackgrouncColor}]
            : myHeaderStyles.barStyle }>
            <TouchableNativeFeedback onPress={handlePressMenu}>
              <View style={myHeaderStyles.smallSquare}>
                  <View style={{flex: 0.5, justifyContent: 'space-around', alignItems: 'center'}}>
                      <View style={myHeaderStyles.horizontalLine}></View>
                      <View style={myHeaderStyles.horizontalLine}></View>
                      <View style={myHeaderStyles.horizontalLine}></View>
                  </View>
              </View>
            </TouchableNativeFeedback>
            <View>
                <Text style={myHeaderStyles.textTitolStyle}> Consell {id}</Text>
            </View>
            <View style={{width: 40}}/>
        </View>
        <View style={{flex: 1, paddingTop: 20}}>
          <ScrollBox modifyState={entesosWasPressed}/>
        </View>
        <Footer/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.mainBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ?  Constants.statusBarHeight : 0,
    },

})


const myHeaderStyles = StyleSheet.create({
  barStyle: {
      flex: 0,
      flexDirection: 'row',
      backgroundColor: colors.barBackgroundColor,
      height: 80,
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
  },

  smallSquare: {
      borderWidth: 2,
      borderColor: colors.borderColor,
      borderRadius: 13,
      width: 40,
      height: 40,
      aspectRatio: 1 / 1,
      backgroundColor: colors.textBackgroundColor,

      justifyContent: 'center',
      alignItems: 'center',
  },

  horizontalLine: {
      width: 22,
      height: 2,
      borderWidth: 1,
      borderRadius: 1,
  },

  textTitolStyle: {
      fontSize: 36,
  },
})