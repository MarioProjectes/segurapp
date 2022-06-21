import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableNativeFeedback } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import colors from '../config/colors';



/*
    Aquest component mostra 
*/
export default function ScrollBox(props) {
    const navigation = useNavigation();
    const route = useRoute();
    const {customData, id} = route.params;
    const consell = customData.find((elem) => elem.id===id);
    const {estat, modifyState: entesosWasPressed} = props

    const handlePressEntesos = () => {
        entesosWasPressed(true);
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', }}>
            <View style={{flex: 0}}>
                <Text style={[styles.textTitleStyle, 
                    {backgroundColor: colors.mainBackgroundColor}]}>
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
          minWidth: '60%',
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
        paddingTop: 10,
      },

      textBodyStyle: {
          textAlign: 'justify',
          fontSize: 18,
          paddingHorizontal: 20,
          marginBottom: 20,
      },
  
      entesosSquare:{
          borderColor: colors.borderColor,
          borderWidth: 2,
          borderRadius: 20,
          backgroundColor: colors.barBackgroundColor,
          marginTop: 5,
          marginBottom: 40,
          padding: 10,
          paddingHorizontal: 50,
      },
  })
  