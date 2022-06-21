import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../config/colors';

/*
    Aquest component ofereix una barra inferior a l'aplicació comuna a totes
    les pantalles excepte la principal. Mostra una fletxa per tornar enrere,
    una casa per tornar a la pantalla principal i una paperera per esborrar
    el progrés emmagatzemat. 
*/
export default function Footer({}){
    const route = useRoute();
    const {customData, category} = route.params;
    const navigation = useNavigation();
 
    /*
        Workaround some navigation and state issues
    */
    const handlePressArrow = () => {
        if(route.name === "Consell"){ 
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
    
    /*
        Aquest mètode mostra una alterta personalitzada que demana a l'usuari
        comfirmació abans d'esborrar el progrés emmagatzemat.
    */
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