import Constants from 'expo-constants'

import { StyleSheet, Text, TouchableWithoutFeedback, Image, View, SafeAreaView, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native'; // permet mostrar botons clickats!
import { TouchableNativeFeedback } from 'react-native';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android
import { StatusBar } from 'react-native';


export default function ConsellDiari() {
  const handlePress = () => {
  }



  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
            animated={true}
            backgroundColor='#7084ab' // alternatives: '#7d94be' ,'#67799c'
            barStyle="light-content"
            translucent={true}
        />
        <View style={styles.barStyle}>
            <View style={styles.smallSquare}>
                <View style={{flex: 0.5, justifyContent: 'space-around', alignItems: 'center'}}>
                    <View style={styles.horizontalLine}></View>
                    <View style={styles.horizontalLine}></View>
                    <View style={styles.horizontalLine}></View>
                </View>
                
            </View>
            <View>
                <Text style={styles.textTitolStyle}> Consell del dia</Text>
            </View>
        </View>

        <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={styles.textSquare}>
                <Text style={[{textAlign: 'center'}, styles.textTitolStyle]}>        
                    La relació entre la privacitat i la comoditat
                </Text>
            </View>
        </View>

        <View style={styles.barStyle}>
            
        </View>
    </SafeAreaView>
  )
}

/*
Colors:
    Barra: 9BB7EC
    Fons app: c2d2ed
    Fons text: d3e1fb

*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#c2d2ed',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ?  Constants.statusBarHeight : 0,
    },

    barStyle: {
        flexDirection: 'row',
        backgroundColor: '#9BB7EC',
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textTitolStyle: {
        fontSize: 36,
    },

    smallSquare: {
        position: 'absolute',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 13,
        width: 40,
        height: 40,
        aspectRatio: 1 / 1,
        backgroundColor: '#C8D7F0',
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

    textSquare: {
        paddingHorizontal: '10%',
        paddingVertical: '5%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#d3e1fb',

        justifyContent: 'center',
        alignItems: 'center',
    }
})
