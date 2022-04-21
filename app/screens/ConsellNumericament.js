import Constants from 'expo-constants'
import { StyleSheet, SafeAreaView, Platform, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'react-native';
import { Dimensions } from 'react-native';

import { useState} from 'react'
import { TouchableNativeFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import colors from '../config/colors';
import Footer from '../shared/footer';





export default function ConsellNumericament({route, navigation}) {

   const [vectorDone, setState] = useState(readInitialValues);

    


    async function readInitialValues(){
        console.log("Entro a readInitialValues")
       try{
           const tempo = await AsyncStorage.getItem('@vectorDone');
           console.log("vector done", tempo)
           setState(JSON.parse(tempo))
        } catch (e){
            console.log("Error on readInitialValues")
        }
    }
    
    //const readInitialValues = async () => {  }
       

   const {customData} = route.params;


    const handlePressConsell = (id) => {
        console.log("Entro a handlePressConsell")
        navigation.navigate("Consell", {customData, id})
    }

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
                                <TouchableNativeFeedback onPress={ () =>  handlePressConsell(item.id)}>
                                    <View style= {[styles.consellSquare, vectorDone[item.id] 
                                        ? {backgroundColor:colors.greenBackgrouncColor} 
                                        : null]  }>
                                        <Text>
                                            Consell {item.id}
                                        </Text>
                                    </View>
                                </TouchableNativeFeedback>

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