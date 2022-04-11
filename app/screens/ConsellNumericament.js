import Constants from 'expo-constants'
import { StyleSheet, SafeAreaView, Platform, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'react-native';
import { Dimensions } from 'react-native';

import { useState} from 'react'
import { TouchableNativeFeedback } from 'react-native';

import colors from '../config/colors';
import Footer from '../shared/footer';


const customData = require('../data/Consells.json')


export default function ConsellNumericament({navigation}) {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar
                hidden= {Dimensions.get('window').width <= 200 ? true :  false}
                animated={true}
                backgroundColor= {colors.statusbarBackgroundColor}
                barStyle="light-content"
                translucent={true}
            />
            <View style={{flex: 1, paddingBottom: '12%'}}>
                <FlatList 
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                    horizontal={true}
                    data={customData}
                    renderItem={({item}) => (
                        <View style={[{flexDirection: 'row'},  item.id === 0 ? {paddingLeft: 50} : null ]}>
                            <View style= {styles.consellSquare}>
                                <Text>
                                    Consell {item.id}
                                </Text>
                            </View>
                        </View>
                    )}
                    ItemSeparatorComponent={() =><View style={styles.horizontalLine}/>}
                    ListFooterComponent={() => <View style={{marginRight: 50}}/>}>
                    


                </FlatList>
            </View>

            <Footer/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.mainBackgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Platform.OS === 'android' ?  Constants.statusBarHeight : 0,
      },
  
    consellSquare: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 137,
      width: 124,
      borderColor: colors.borderColor,
      borderRadius: 20,
      borderWidth: 0,
      backgroundColor: colors.barBackgroundColor,

    },
    horizontalLine: {
        height: 1,
        width: 37,
        borderColor: colors.borderColor,
        borderWidth: 1,
        alignSelf: 'center',
    }
  })