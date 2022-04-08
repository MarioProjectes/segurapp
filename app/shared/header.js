import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android
import { StatusBar } from 'react-native';


import colors from '../config/colors';

export default function Header({navigation, title}){
    return (
        <View style={myHeaderStyles.barStyle}>
            <View style={myHeaderStyles.smallSquare}>
                <View style={{flex: 0.5, justifyContent: 'space-around', alignItems: 'center'}}>
                    <View style={myHeaderStyles.horizontalLine}></View>
                    <View style={myHeaderStyles.horizontalLine}></View>
                    <View style={myHeaderStyles.horizontalLine}></View>
                </View>
                
            </View>
            <View>
                <Text style={myHeaderStyles.textTitolStyle}> {title}</Text>
            </View>
        </View>
    )
}

const myHeaderStyles = StyleSheet.create({
      
    barStyle: {
        flex: 0,
        flexDirection: 'row',
        backgroundColor: colors.barBackgroundColor,
        marginTop: StatusBar.currentHeight,
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