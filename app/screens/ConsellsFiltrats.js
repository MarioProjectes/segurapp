import { StyleSheet, SafeAreaView, Platform, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'react-native';
import { Dimensions } from 'react-native';
import { TouchableNativeFeedback } from 'react-native';
import { useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants'
import * as Progress from 'react-native-progress'

import colors from '../config/colors';
import Footer from '../shared/footer';

/*
    Aquest component mostra el llistat de consell sencer en accedir 
    per defecte o al prèmer consells "Numèricament" des d'accés ràpid.
    També permet la presentació dels consells filtrats per temàtiques,
    només els incomplertes o mostrar-los ordenats per temps d'execució.
*/
export default function ConsellsFiltrats({route, navigation}) {
    const {customData, category} = route.params;
    const [loading, setLoading] = useState(true)
    const [vectorDone, setVectorDone] = useState([false, false, false])

    const filteredData = filterData()

    /*
        Aquest mètode filtra el llistat de consells en funció de la categoria.
    */
    function filterData (){
        if (category === "all")
            return customData.sort(function(a,b){return a.id > b.id})
        else if (category === "Per temps")
            return customData.sort(function(a,b){return a.time > b.time})
        else if (category === "Només incomplerts")
            return customData
        else return customData.filter((item) => item.category===category)
    }


    useEffect(() => {
        if (loading){
            readInitialValuesSetState()
        }
    }), [vectorDone]


    /*
        Aquest mètode llegeix l'estat inicial del llistat de consells
        per oferir la presentació i estableix l'estat.
    */
    async function readInitialValuesSetState(){
       try{
           const tempo = await AsyncStorage.getItem('@vectorDone');
           const parsed = JSON.parse(tempo)
          
           setVectorDone(parsed)
          
           setLoading(false)
        } catch (e){
            console.log("Error a ConsellsFiltrats:readInititalValues")
        }
    }

    const handlePressConsell = (id) => {
        const vectorDoneParam = [...vectorDone]
        navigation.navigate("Consell", {customData, vectorDoneParam, id, category})
    }

    const handlePressMenu = () => {
        route.name==="AccesRapid" 
            ? navigation.goBack()
            : navigation.navigate("AccesRapid", {customData})
    }

    /*
        És rellevant mencionar que en cas que no s'haguin llegit els valors encara
        i per tant no es pugui establir un estat es mostra un seguit d'indicadors
        visuals de càrrega.
    */
    return(
        <SafeAreaView style={styles.container}>
        <StatusBar
            hidden= {Dimensions.get('window').width <= 200 ? true :  false}
            animated={true}
            backgroundColor= {colors.statusbarBackgroundColor}
            barStyle="light-content"
            translucent={true}
        />
        <View style= {myHeaderStyles.barStyle }>
            <TouchableNativeFeedback onPress={handlePressMenu}>
              <View style={myHeaderStyles.smallSquare}>
                  <View style={{flex: 0.5, justifyContent: 'space-around', alignItems: 'center'}}>
                      <View style={myHeaderStyles.horizontalLine}></View>
                      <View style={myHeaderStyles.horizontalLine}></View>
                      <View style={myHeaderStyles.horizontalLine}></View>
                  </View>
              </View>
            </TouchableNativeFeedback>
            {
                category === "all"
                ?
                <View>
                    <Text style={{fontSize: 24}}>
                        Tots els consells
                    </Text>
                </View>
                :
                <View>
                    <Text style={myHeaderStyles.textTitolStyle}>
                        Consells:
                    </Text>
                    <Text style={myHeaderStyles.textTitolStyle}>
                        {
                            category === "all" ? null : category
                        }
                    </Text>
                </View>
            }
            <View style={{width: 40}}/>
        </View>


        <View style={{flex: 1, paddingBottom: '5%'}}>
            {loading 
                ? 
                <FlatList 
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                    horizontal={true}
                    data={filteredData}
                    renderItem={({item}) => (
                        <View style={[{flexDirection: 'row'},  item.id === 0 ? {paddingLeft: 50} : null ]}>
                            <TouchableNativeFeedback onPress={ () =>  handlePressConsell(item.id)}>
                                <View style= {styles.consellSquare}>
                                        <Progress.CircleSnail size={40} thickness={2} 
                                            color={colors.textBlack} spinDuration={2000} strokeCap={'square'} />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    )}
                    ItemSeparatorComponent={() =><View style={styles.horizontalLine}/>}
                    ListFooterComponent={() => <View style={{marginRight: 50}}/>}>
                </FlatList>
                : 
                <FlatList 
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                    horizontal={true}
                    data={category === "Només incomplerts" ? filteredData.filter((item) => !vectorDone[item.id]) : filteredData}
                    renderItem={({item, index}) => (
                        <View style={[{flexDirection: 'row'},  index === 0 ? {paddingLeft: 50} : null ]}>
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
            }
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


  const myHeaderStyles = StyleSheet.create({
      
    barStyle: {
        flex: 0,
        flexDirection: 'row',
        backgroundColor: colors.barBackgroundColor,
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
  
    textTitolStyle: {
        fontSize: 20,
    },
  })