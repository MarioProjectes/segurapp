
import { StatusBar } from 'react-native';
import { StyleSheet, Text, TouchableWithoutFeedback, Image, View, SafeAreaView, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native'; // permet mostrar botons clickats!
import { TouchableNativeFeedback } from 'react-native';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android

import colors from '../config/colors'

export default function WelcomeScreen() {
  const handlePress = () => {
  }



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
            hidden= {Dimensions.get('window').width <= 360 ? true :  false}
            animated={true}
            backgroundColor= {colors.statusbarBackgroundColor} // alternatives: '#7d94be' ,'#67799c'
            barStyle="light-content"
            translucent={true}
        />
      <View style={styles.topSquareStyle}>
        <View style={[styles.smallSquare, styles.squareTopLeft]}></View>
        <View style={[styles.smallSquare, styles.squareTopRight]}></View>
        <View>
          <Text style={styles.startTextStyle}> Segurapp</Text>
        </View>
        

        <TouchableNativeFeedback>
          <View style={styles.botoComeça}>
            <Text style={styles.startTextStyle}>Comença</Text>
          </View>
        </TouchableNativeFeedback>    

      </View>
      <View style={styles.bottomSquareStyle}>
        <View style={[styles.smallSquare, styles.squareBottomLeft]}></View>
        <View style={[styles.smallSquare, styles.squareBottomRight]}></View>
        <TouchableNativeFeedback>
          <View style={styles.botoProjecte}> 
            <Text style={styles.startTextStyle}>Sobre el {"\n"} projecte</Text>
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
    

    //boxSizing: border-box,
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
})
