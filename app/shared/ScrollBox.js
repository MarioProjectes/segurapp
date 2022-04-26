import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android
import { StatusBar } from 'react-native';
import Constants from 'expo-constants'
import { ScrollView } from 'react-native';
import { TouchableNativeFeedback } from 'react-native';
import { useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';


import colors from '../config/colors';


const items = [
    {name: "Item 1", text: "La relació entre la privacitat i la comoditat", key: 1},
    {name: "Item 2", key: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id. Cursus sit amet dictum sit amet. Amet porttitor eget dolor morbi non arcu risus. Nec nam aliquam sem et tortor consequat id. Eu lobortis elementum nibh tellus molestie. At volutpat diam ut venenatis tellus in. Sit amet porttitor eget dolor morbi non arcu. Pulvinar elementum integer enim neque volutpat. Sem fringilla ut morbi tincidunt augue interdum. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Lorem dolor sed viverra ipsum. Ut aliquam purus sit amet luctus venenatis. Quis ipsum suspendisse ultrices gravida dictum fusce. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Facilisis gravida neque convallis a cras semper. Scelerisque mauris pellentesque pulvinar pellentesque habitant.        Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Et tortor at risus viverra. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Quam id leo in vitae. Tortor at risus viverra adipiscing. Amet justo donec enim diam vulputate ut pharetra. Risus ultricies tristique nulla aliquet enim tortor at auctor. Id velit ut tortor pretium. Faucibus pulvinar elementum integer enim neque volutpat. Felis imperdiet proin fermentum leo vel orci porta. Interdum consectetur libero id faucibus nisl. Odio eu feugiat pretium nibh ipsum consequat nisl. Aliquet nec ullamcorper sit amet risus nullam eget. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. In fermentum posuere urna nec tincidunt praesent. Viverra nibh cras pulvinar mattis nunc sed blandit."}
]




export default function ScrollBox(props) {
    const navigation = useNavigation();
    const route = useRoute();
    const {customData, id} = route.params;

    const consell = customData.find((elem) => elem.id===id);
    
        
    //const currentId = route.params;    

    const {estat, modifyState: entesosWasPressed} = props

    const handlePressEntesos = () => {
        entesosWasPressed(true);
    }


    return (
        <View style={{flex: 1, justifyContent: 'center', }}>
            <View style={{flex: 0}}>
                    <Text style={[styles.textTitleStyle, {backgroundColor: colors.mainBackgroundColor}]}>
                        {consell.title}
                    </Text>
                </View>
                <View style={{flex: 1, marginBottom: 5, borderRadius: 20, overflow: "hidden"}}>
                    <ScrollView contentContainerStyle={styles.scrollStyle} >
                        <View>
                            <Text style={styles.textBodyStyle}>
                                {consell.text}
                            </Text>
                        </View>

                        <TouchableNativeFeedback onPress={handlePressEntesos}>
                            <View style={styles.entesosSquare}>
                                <Text style={{color: 'black', fontSize: 24}}> Entesos!</Text>
                            </View>

                        </TouchableNativeFeedback>
                    </ScrollView>

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

          marginTop: -10,
          marginBottom: 5,
      },
  
      scrollStyle: {
        minWidth: '100%',
        minHeight: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.textBackgroundColor,
      },

      textBodyStyle: {
          textAlign: 'justify',

          fontSize: 18,

          paddingHorizontal: 20,
          //paddingTop: 20,
          //marginBottom: 0,
      },
  
      entesosSquare:{
          borderColor: colors.borderColor,
          borderWidth: 2,
          borderRadius: 20,
          backgroundColor: colors.barBackgroundColor,

          marginVertical: 40,
          padding: 10,
          paddingHorizontal: 50,
      },
  })
  