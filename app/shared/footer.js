import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android
import { TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import colors from '../config/colors';

export default function Footer({navigation}){
    const handlePressArrow = () => {
        navigation.goBack();
    }
  
    const handlePressHomeButton = () => {
      navigation.navigate("WelcomeScreen")
    }

    
    return(
        <View style={styles.barStyle}>
            <TouchableNativeFeedback onPress={handlePressArrow}>
                <View style={styles.arrowSquare} >
                    <Icon name="share" style={styles.returnArrow}></Icon>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={handlePressHomeButton}>
                <Icon style={{fontSize: 50, padding: 5,  backgroundColor: 'red'}}name="home"></Icon>
            </TouchableNativeFeedback>
            
        </View>
    )
}

const styles = StyleSheet.create({
    barStyle: {
        flexDirection: 'row',
        backgroundColor: colors.barBackgroundColor,
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    arrowSquare : {
        height: 60,
        width: 60,
        position: 'absolute',
        backgroundColor: 'red',
        left:  Dimensions.get('window').width <= 360 ? '2%' :  15,
        justifyContent: 'center', alignItems: 'center',
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