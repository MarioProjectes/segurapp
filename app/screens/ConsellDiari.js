import Constants from 'expo-constants'

import { StyleSheet, Text, TouchableWithoutFeedback, Image, View, SafeAreaView, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native'; // permet mostrar botons clickats!
import { TouchableNativeFeedback } from 'react-native';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import colors from '../config/colors';


export default function ConsellDiari() {
  const handlePress = () => {
  }



  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
            animated={true}
            backgroundColor= {colors.statusbarBackgroundColor} // alternatives: '#7d94be' ,'#67799c'
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
            <View style={{height: 60, width: 60, position: 'absolute', backgroundColor: 'red',
                left:  Dimensions.get('window').width <= 360 ? '2%' :  15,  justifyContent: 'center', alignItems: 'center'}}>
                <Icon name="share" style={styles.returnArrow}></Icon>
            </View>
            
            <Icon style={{fontSize: 50, padding: 5,  backgroundColor: 'red',}}name="home"></Icon>
            
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
    paddingTop: Platform.OS === 'android' ?  Constants.statusBarHeight : 0,
    },

    barStyle: {
        flexDirection: 'row',
        backgroundColor: colors.barBackgroundColor,
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    textTitolStyle: {
        fontSize: 36,
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

    textSquare: {
        paddingHorizontal: '10%',
        paddingVertical: '5%',
        borderColor: colors.borderColor,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: colors.textBackgroundColor,

        justifyContent: 'center',
        alignItems: 'center',
    },

    returnArrow :{
        position: 'absolute',
        //left: Dimensions.get('window').width <= 360 ? '3%' :  20,
        fontSize: 30,
        padding: 5,
        paddingTop: 10,
        transform: [{rotateY: '180deg'}]
    },
})
