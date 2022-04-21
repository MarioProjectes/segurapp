import Constants from 'expo-constants'
import { StyleSheet, SafeAreaView, Platform, Text, View} from 'react-native';
import { StatusBar } from 'react-native';

import React from 'react';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android
import { TouchableNativeFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState} from 'react'





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

  
  const [vectorDone, setState] = useState(readInitialValues);
  
  async function readInitialValues(){
        console.log("Entro a readInitialValues")
       try{
         const tempo = await AsyncStorage.getItem('@vectorDone');
         console.log("vector done", tempo)
         setState(JSON.parse(tempo))
        } catch (e){
          console.log("Error on readInitialValues")
        }
      }
      
  const [done, setDone] = useState(false)
      

  const escriuEstat = () => {

  }

  const modifyState = () => {
    setDone(true);
    escriuEstat() // TOCA IMPLEMENTAR AIXÒ

  }

  const isConsellDone = async () => {
    console.log("Entro a isConsellDone")
      console.log("IsConsellDone?", done)
      const altre = JSON.parse(done)
      altre ? console.log("positiu") : console.log("Negatiu")
      return altre;
    }



  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
            hidden= {Dimensions.get('window').width <= 200 ? true :  false}
            animated={true}
            backgroundColor= {colors.statusbarBackgroundColor} // alternatives: '#7d94be' ,'#67799c'
            barStyle="light-content"
            translucent={true}
        />

        <View style= {done
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
          <ScrollBox modifyState={modifyState}/>

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