import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android
import { TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import colors from '../config/colors';
import ConsellBox from './ConsellBox';

export default function Footer({}){
    const route = useRoute();
    const {customData, category} = route.params;

    const navigation = useNavigation();
 
    const handlePressArrow = () => {
        if(route.name === "Consell"){   //Crappy approach, but it works
            navigation.reset({
                index: 0,
                routes: [{name: "WelcomeScreen", params: {customData}}, {name: "ConsellsFiltrats", params: {customData, category}}]
            })
        }
        else{
            navigation.goBack();
            
        }
    }
  
    const handlePressHomeButton = () => {
        navigation.navigate('WelcomeScreen')
        
    };

    async function deleteData(){
        await AsyncStorage.clear()
        navigation.navigate('WelcomeScreen')
        
    }
    
    const handlePressTrashButton = () => {
        Alert.alert("Borrar progrés","Vols esborrar el progrés?",[{text:"No"},{text:"Sí", onPress:deleteData}], {cancelable: true} )
    };
    
    return(
        <View style={styles.barStyle}>
            <TouchableNativeFeedback onPress={handlePressArrow}>
                <View style={styles.arrowSquare} >
                    <Icon name="share" style={styles.returnArrow}></Icon>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={handlePressHomeButton}>
                <View>
                    <Icon style={styles.homeButtonStyle} name="home"></Icon>

                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={handlePressTrashButton}>
                <View style={styles.gear}>
                    <Icon style={{fontSize: 40}}name="trash"></Icon>

                </View>
            </TouchableNativeFeedback>
            
        </View>
    )
}

const styles = StyleSheet.create({
    barStyle: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.barBackgroundColor,
        height: 50,
        width: '100%',
        marginHorizontal: 0,
    },

    arrowSquare : {
        height: 60,
        width: 60,
        marginLeft: -10,
        paddingLeft: -10,
    },

    returnArrow :{
        //position: 'absolute',
        //left: Dimensions.get('window').width <= 360 ? '3%' :  20,
        fontSize: 30,
        padding: 5,
        paddingTop: 10,
        marginRight: 20,
        transform: [{rotateY: '180deg'}]
    },

    gear : {
        justifyContent: 'center',
        marginLeft: 20,
    },

    homeButtonStyle: {
        fontSize: 40,
        marginLeft: 5,
        padding: 5,
    }
})