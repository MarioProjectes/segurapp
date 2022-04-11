import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android
import { StatusBar } from 'react-native';
import Constants from 'expo-constants'
import { ScrollView } from 'react-native';
import { useState} from 'react'
import { TouchableNativeFeedback } from 'react-native';


import colors from '../config/colors';
import ScrollBox from './ScrollBox';

const items = [
    {name: "Item 1", text: "La relació entre la privacitat i la comoditat", key: 1},
]


//const [stateName, functionToChangeState] = useState('initialValue');



/*




*/



export default function ConsellBox({navigation}) {
    
    const [cardFlipped, flipTheCard] = useState(false);

    const isCardFlipped = () => {
        return cardFlipped;
    }

    const handlePressConsell = () => {
      flipTheCard({cardFlipped: true});
    }


    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableNativeFeedback onPress={handlePressConsell}>
                    {(!cardFlipped) 
                        ? 
                        <View style={styles.textSquare}>
                            <View>
                                <Text style={styles.textTitleStyle}>
                                    {items[0].text}
                                </Text>
                            </View>
                        </View>
                        : 
                        <ScrollBox navigation={navigation}/>

                    }


            </TouchableNativeFeedback>

        </View>
    )
}




const styles = StyleSheet.create({  
  
      textSquare: {
          maxWidth: '90%',
          minWidth: '60%',  //VIGILA amb aquest valor quan només hi ha el títol
          borderColor: colors.borderColor,
          borderWidth: 1,
          borderRadius: 20,
          backgroundColor: colors.textBackgroundColor,
          justifyContent: 'center',
          alignItems: 'center',

          paddingHorizontal: 10,
          paddingVertical: '15%',
          //marginBottom: '-5%',
  
      },
  
      textTitleStyle: {
          textAlign: 'center',
          fontSize: 22,
          fontWeight: '700',
          color: colors.textBlack,
      },

  
  })
  