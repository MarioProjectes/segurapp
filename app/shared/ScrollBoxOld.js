import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android
import { StatusBar } from 'react-native';
import Constants from 'expo-constants'
import { ScrollView } from 'react-native';
import { useState} from 'react'

import colors from '../config/colors';

const items = [
    {name: "Item 1", text: "La relació entre la privacitat i la comoditat", key: 1},
    {name: "Item 2", key: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id. Cursus sit amet dictum sit amet. Amet porttitor eget dolor morbi non arcu risus. Nec nam aliquam sem et tortor consequat id. Eu lobortis elementum nibh tellus molestie. At volutpat diam ut venenatis tellus in. Sit amet porttitor eget dolor morbi non arcu. Pulvinar elementum integer enim neque volutpat. Sem fringilla ut morbi tincidunt augue interdum. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Lorem dolor sed viverra ipsum. Ut aliquam purus sit amet luctus venenatis. Quis ipsum suspendisse ultrices gravida dictum fusce. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Facilisis gravida neque convallis a cras semper. Scelerisque mauris pellentesque pulvinar pellentesque habitant.        Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Et tortor at risus viverra. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Quam id leo in vitae. Tortor at risus viverra adipiscing. Amet justo donec enim diam vulputate ut pharetra. Risus ultricies tristique nulla aliquet enim tortor at auctor. Id velit ut tortor pretium. Faucibus pulvinar elementum integer enim neque volutpat. Felis imperdiet proin fermentum leo vel orci porta. Interdum consectetur libero id faucibus nisl. Odio eu feugiat pretium nibh ipsum consequat nisl. Aliquet nec ullamcorper sit amet risus nullam eget. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. In fermentum posuere urna nec tincidunt praesent. Viverra nibh cras pulvinar mattis nunc sed blandit."}
]


//const [stateName, functionToChangeState] = useState('initialValue');
const [display, changeDisplay] = useState()



export default function ScrollBox({navigation}) {
    const changeDisplay = () =>{
        
    }
    
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={styles.textSquare}>
                <View style={{backgroundColor: 'red', marginTop: 10, marginBottom: 20}}>
                    <Text style={styles.textTitleStyle}>
                        {items[0].text}
                    </Text>
                </View>
                <View style={{height: '80%', marginBottom: -10, borderRadius: 20, overflow: "hidden"}}>
                    <ScrollView>
                        <View>
                            <Text style={styles.textBodyStyle}>
                                {items[1].text}
                            </Text>

                        </View>
                    </ScrollView>

                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({  
  
      textSquare: {
          flex: 1,
          maxWidth: '90%',
          minWidth: '60%',  //VIGILA amb aquest valor quan només hi ha el títol
          maxHeight: '100%',
          borderColor: colors.borderColor,
          borderWidth: 1,
          borderRadius: 20,
          backgroundColor: colors.textBackgroundColor,
          backgroundColor: colors.barBackgroundColor,
          justifyContent: 'center',
          alignItems: 'center',


          marginBottom: 5,
          paddingHorizontal: '2%',
          //paddingTop: '10%',
          //marginBottom: '-5%',
  
      },
  
      textTitleStyle: {
          textAlign: 'center',
          backgroundColor: colors.barBackgroundColor,
          fontSize: 22,
          fontWeight: '700',
          color: colors.textBlack,
      },
  
      textBodyStyle: {
          textAlign: 'justify',
          alignContent: 'center',

          fontSize: 18,
          backgroundColor: colors.textBackgroundColor,
          borderRadius: 10,

          paddingHorizontal: 20,
          paddingTop: 20,
          marginBottom: 0,
      }
  
  
  })
  