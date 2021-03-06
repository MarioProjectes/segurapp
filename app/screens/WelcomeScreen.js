
import { StatusBar } from 'react-native';
import { StyleSheet, Text,  View, SafeAreaView, Platform } from 'react-native';
import { TouchableNativeFeedback, Linking} from 'react-native';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../config/colors'

const customData = require('../data/Consells.json')


/*
  Aquest component mostra la pantalla d'inici.
  En prèmer la vista "Comença" es navega a la pantalla "ConsellsFiltrat"
  En prèmer la vista "Sobre el projecte" es visita l'enllaç del repositori
  de GitHub on s'emmagatzema el codi i es presenta el treball del TFG.
*/
export default function WelcomeScreen({navigation}) {

  /*
    Aquest mètode fa la comprovació de l'existència prèvia d'emmagatzematge
    local. En cas que sigui el primer cop que s'accedeix a l'aplicació crida
    a "initializeValues" que gestiona la creació de les estructures necessàries.
  */
  const handlePressComença = async () => {
    try{
      const vectorInitialized = await AsyncStorage.getItem('@vectorInitialized');
      const vector = await AsyncStorage.getItem('@vectorDone');
      if(vectorInitialized !== null && vectorInitialized){         
        const category = "all"
        navigation.navigate('ConsellsFiltrats', {customData, category})
      }
      else{
         initializeValues();
      }
    } catch(e){
      console.log("Error a  WelcomeScree:handlrePressComença")
    }      
  };


  /*
    Aquest mètode crea les estructures necessàries per l'emmagatzematge local.
    "vectorInitialized" és un valor boleà que indica que ja s'ha accedit prèviament.
    "vectorDone" és un vector de valors boleans que marca l'estat dels consells.
    "vectorRead" és un vector de boleans dissenyat per una funcionalitat no implementada.

  */
  async function initializeValues (){
    const vectorDone = customData.map( () => false);
    const vectorRead = vectorDone;
    await AsyncStorage.setItem('@vectorInitialized', JSON.stringify(true))
    await AsyncStorage.setItem('@vectorDone', JSON.stringify(vectorDone))
    await AsyncStorage.setItem('@vectorRead', JSON.stringify(vectorRead))
    const category = "all"
    navigation.navigate('ConsellsFiltrats', {customData, category})
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden= {Dimensions.get('window').width <= 360 ? true :  false}
        animated={true}
        backgroundColor= {colors.statusbarBackgroundColor}
        barStyle="light-content"
        translucent={true}
      />
      <View style={styles.topSquareStyle}>
      <View style={[styles.smallSquare, styles.squareTopLeft]}></View>
      <View style={[styles.smallSquare, styles.squareTopRight]}></View>
      <View>
        <Text style={styles.startTextStyle}> Segurapp</Text>
      </View>
      <TouchableNativeFeedback onPress={handlePressComença}>
        <View style={styles.botoComeça}>
          <Text style={styles.startTextStyle}>Comença</Text>
        </View>
      </TouchableNativeFeedback>    

      </View>
      <View style={styles.bottomSquareStyle}>
        <View style={[styles.smallSquare, styles.squareBottomLeft]}></View>
        <View style={[styles.smallSquare, styles.squareBottomRight]}></View>
        <TouchableNativeFeedback onPress={() => Linking.openURL('https://github.com/MarioProjectes/segurapp')}>
          <View style={[styles.botoProjecte, {flexDirection:"row"}]}> 
            <Icon style={styles.linkIconStyle} name="github"></Icon>
            <Text style={[styles.startTextStyle, {marginLeft: -10}]}>Sobre el projecte</Text>
          </View>
        
        </TouchableNativeFeedback>        
      </View>
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    
    topSquareStyle: {
      flex: 0,
      justifyContent: 'center',
      alignItems: 'center',
      height: 280,
      minWidth: 271,
      width: 217,
      aspectRatio: 271 / 280,
      borderColor: colors.welcomeScreenSquares,
      borderWidth: 2,
      marginTop: '5%',
      marginBottom: 124,
    },
  
    bottomSquareStyle: {
      flex: 0,
      justifyContent: 'center',
      alignItems: 'center',
      height: 153,
      minWidth: 271,
      width: 217,
      aspectRatio: 271 / 153,
      borderColor: colors.welcomeScreenSquares,
      borderWidth: 2,
      marginBottom: '6.875%',
    },

  botoComeça: {
    flex: 0,
    position: 'absolute',
    backgroundColor: colors.barBackgroundColor,
    width: 245,
    height: 103,
    minWidth: 245,
    aspectRatio:  245 / 103,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '-19%',
  },

  botoProjecte: {
    flex: 0,
    position: 'absolute',
    backgroundColor: colors.barBackgroundColor,
    width: 245,
    height: 103,
    minWidth: 245,
    aspectRatio:  245 / 103,

    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    top: '-20%',
  },

  startTextStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.textColor,
    textAlign: 'center',
    fontSize: 36,
  },

  smallSquare: {
    borderWidth: 2,
    borderColor: colors.welcomeScreenSquares,
    position: 'absolute',
    width: 25,
    height: 25,
    aspectRatio: 1 / 1,
  },
  
  squareTopLeft: {
    borderWidth: 2,
    left: '-9.3%',
    top: '-9%',
  },

  squareTopRight: {
    right: '-9.3%',
    top: '-9%',
  },

  squareBottomLeft: {
    left: '-9.3%',
    bottom: '-16.8%',
  },

  squareBottomRight: {
    right: '-9.3%',
    bottom: '-16.8%',
  },

  linkIconStyle: {
    fontSize: 30,
    marginLeft: -40,
    paddingRight: 20,
  }
})
