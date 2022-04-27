import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";




import colors from '../config/colors';

export default function Header({title, param}){

    const navigation = useNavigation();
    const route = useRoute();
    const {customData, id} = route.params;

    const handlePressMenu = () => {
        console.log("Entro al butó de menu des de: ", route.name)
        route.name==="AccesRapid" 
            ? navigation.goBack()
            : navigation.navigate("AccesRapid", {customData})
        
    }


    return (
        <View style={param 
                ? myHeaderStyles.barStyle 
                : [myHeaderStyles.barStyle, {backgroundColor: colors.greenBackgrouncColor}]}>
            <TouchableNativeFeedback onPress={handlePressMenu}>
                {route.name==="AccesRapid"
                    ?
                    <View style={myHeaderStyles.smallSquare}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                          <FontAwesomeIcon onPress={handlePressMenu} icon={faXmark} size={20} />
                        </View>
                    </View>
                    :
                    <View style={myHeaderStyles.smallSquare}>
                        <View style={{flex: 0.5, justifyContent: 'space-around', alignItems: 'center'}}>
                            <View style={myHeaderStyles.horizontalLine}></View>
                            <View style={myHeaderStyles.horizontalLine}></View>
                            <View style={myHeaderStyles.horizontalLine}></View>
                        </View>
                    </View>

                }
            </TouchableNativeFeedback>

            <View>
                <Text style={myHeaderStyles.textTitolStyle}> {title}</Text>
            </View>
            <View style={{width:40} /*//Invisible view to maintain 3 component logic*/}/>  
        </View>
    )
}

/*

   
*/

const myHeaderStyles = StyleSheet.create({
    barStyle: {
        flex: 0,
        flexDirection: 'row',
        backgroundColor: colors.barBackgroundColor,
        marginTop: StatusBar.currentHeight,
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

    diagonalLine: {
        width: 30,
        height: 1,
        borderWidth: 1,
        borderRadius: 1,
        transform: [{rotate: '135deg'}],
    },

    diagonalLineInversed: {
        width: 30,
        height: 1,
        borderWidth: 1,
        borderRadius: 1,
        transform: [{rotate: '45deg'}],
    },

    textTitolStyle: {
        fontSize: 36,
    },
})