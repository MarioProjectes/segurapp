import Constants from 'expo-constants'
import { StyleSheet, SafeAreaView, Platform, Text, View} from 'react-native';
import { StatusBar } from 'react-native';

import React from 'react';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android
import { TouchableNativeFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect} from 'react'





import colors from '../config/colors';
import Footer from '../shared/footer';
import ScrollBox from '../shared/ScrollBox';

/*

Aquesta funcionalitat es pot afegir quan s'afegeixi interacció entre consells


<TouchableNativeFeedback onPress={handleTemo}>
  <Text> Canvia consell</Text>
</TouchableNativeFeedback>


    const handleTemo = () => {
      id === 0 ? navigation.setParams({id: 1})
               : navigation.setParams({id: 0})
    }

*/


export default function Consell({route, navigation}) {
  const {customData, id} = route.params;

  const [vectorDone, setVectorDone] = useState( () => ({
    vectorDone: readInitialValues()
  }))
  //const [entesosPressed, setEntesosPressed] = useState(readInitialValue)

  
  async function readInitialValues(){
       try{
         const tempo = await AsyncStorage.getItem('@vectorDone').then( (value) => {
           console.log("El vector quan el llegeixo", value)})
         
         
         setVectorDone(JSON.parse(tempo));
         console.log("El que escric", vectorDone)
        } catch (e){
          console.log("Error a  Consell:readInititalValues")
        }
      }
      
  async function readInitialValue(){
    try{
      const tempo = await AsyncStorage.getItem('@vectorDone')
      const auxVector = JSON.parse(tempo)
      setEntesosPressed(auxVector[id])
    } catch (e){
      console.log("Error a  Consell:readInititalValue")
    }
  }


  async function writeValues(){
    try{
      AsyncStorage.setItem('@vectorDone', JSON.stringify(vectorDone))
    }
    catch (e){
      console.log("Error a  Consell:writeValues")
    }
  }


  const escriuEstat = (param) => {
    console.log("Entro a escriu estat!")
    console.log("Vector done conté:", vectorDone)
    const auxVector = vectorDone;    // vectorDone can only be change with setVectorDone
    auxVector[id] = param;
    console.log("El vectorAux conte:", auxVector)
    setVectorDone(auxVector)
  }


  const entesosWasPressed = (param) => {
    escriuEstat(param);
    //setEntesosPressed(param);
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

        <View style= {vectorDone[id]                    //This state value modifies styling to green 
            ? [myHeaderStyles.barStyle, {backgroundColor: colors.greenBackgrouncColor}]
            : myHeaderStyles.barStyle }>
            <View style={myHeaderStyles.smallSquare}>
                <View style={{flex: 0.5, justifyContent: 'space-around', alignItems: 'center'}}>
                    <View style={myHeaderStyles.horizontalLine}></View>
                    <View style={myHeaderStyles.horizontalLine}></View>
                    <View style={myHeaderStyles.horizontalLine}></View>
                </View>
            </View>
            <View>
                <Text style={myHeaderStyles.textTitolStyle}> Consell {id}</Text>
            </View>
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
      justifyContent: 'center',
      alignItems: 'center',
  },

  smallSquare: {
      position: 'absolute',
      borderWidth: 2,
      borderColor: colors.borderColor,
      borderRadius: 13,
      width: 40,
      height: 40,
      aspectRatio: 1 / 1,
      backgroundColor: colors.textBackgroundColor,
      left: Dimensions.get('window').width <= 360 ? '3%' :  20,

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