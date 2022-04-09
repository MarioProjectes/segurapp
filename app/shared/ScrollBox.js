import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android
import { StatusBar } from 'react-native';
import Constants from 'expo-constants'
import { ScrollView } from 'react-native';


import colors from '../config/colors';

const items = [
    {name: "Item 1", text: "La relació entre la privacitat i la comoditat", key: 1},
    {name: "Item 2", key: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id. Cursus sit amet dictum sit amet. Amet porttitor eget dolor morbi non arcu risus. Nec nam aliquam sem et tortor consequat id. Eu lobortis elementum nibh tellus molestie. At volutpat diam ut venenatis tellus in. Sit amet porttitor eget dolor morbi non arcu. Pulvinar elementum integer enim neque volutpat. Sem fringilla ut morbi tincidunt augue interdum. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Lorem dolor sed viverra ipsum. Ut aliquam purus sit amet luctus venenatis. Quis ipsum suspendisse ultrices gravida dictum fusce. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Facilisis gravida neque convallis a cras semper. Scelerisque mauris pellentesque pulvinar pellentesque habitant.        Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Et tortor at risus viverra. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Quam id leo in vitae. Tortor at risus viverra adipiscing. Amet justo donec enim diam vulputate ut pharetra. Risus ultricies tristique nulla aliquet enim tortor at auctor. Id velit ut tortor pretium. Faucibus pulvinar elementum integer enim neque volutpat. Felis imperdiet proin fermentum leo vel orci porta. Interdum consectetur libero id faucibus nisl. Odio eu feugiat pretium nibh ipsum consequat nisl. Aliquet nec ullamcorper sit amet risus nullam eget. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. In fermentum posuere urna nec tincidunt praesent. Viverra nibh cras pulvinar mattis nunc sed blandit."}
]



/*

*/


export default function ScrollBox({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <View style={styles.textSquare}>
                <Text style={styles.textTitleStyle}>
                    {items[0].text}
                </Text>
                <View style={{borderRadius: 20, backgroundColor: 'red', overflow: "hidden"}}>
                    <ScrollView>
                        <Text style={styles.textBodyStyle}>
                            {items[1].text}
                        </Text>
                    </ScrollView>

                </View>

            </View>

        </View>
    )
}



/*
Opcio 1

 <View style={{flex: 1, justifyContent: 'center'}}>
                
                <View style={styles.textSquare}>
                    <ScrollView stickyHeaderIndices={[0]}>
                        { items.map( item => {
                            return <View key={item.key} style={{paddingVertical: 10, paddingHorizontal: 0}}>
                                <Text style={
                                    item.key===1 ? styles.textTitleStyle
                                    : styles.textBodyStyle}> {item.text}
                                </Text>
                            </View>
                        })}
                        
                        

                    </ScrollView>
                </View>
            </View>



Opcio 2


*/



const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.mainBackgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Platform.OS === 'android' ?  Constants.statusBarHeight : 0,
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
          maxWidth: '90%',
          minWidth: '60%',  //VIGILA amb aquest valor quan només hi ha el títol
          
          paddingHorizontal: '5%',
          paddingTop: '10%',
          borderColor: colors.borderColor,
          borderWidth: 1,
          borderRadius: 20,
          backgroundColor: colors.textBackgroundColor,
  
          marginBottom: '5%',
          backgroundColor: colors.barBackgroundColor,
  
          justifyContent: 'center',
          alignItems: 'center',
      },
  
      textTitleStyle: {
          textAlign: 'center',
          backgroundColor: colors.barBackgroundColor,
          marginTop: 0,//-12, //Potser aques valor canvia entre dispositius!!!
          fontSize: 24,
          paddingBottom: 20,
          borderBottomLeftRadius: 0,//-20,
          borderBottomRightRadius: 0,//-20,
          
      },
  
      textBodyStyle: {
          textAlign: 'justify',
          fontSize: 18,
          margin: 0,
          paddingHorizontal: 20,
          backgroundColor: colors.textBackgroundColor,
          marginTop: 0,//-20, //Potser aques valor canvia entre dispositius!!!
          borderRadius: 10,
      }
  
  
  })
  