import Constants from 'expo-constants'
import { StyleSheet, SafeAreaView, Platform, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'react-native';
import { Dimensions } from 'react-native';

import { TouchableNativeFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';


import colors from '../config/colors';
import Footer from '../shared/footer';
import { useState, useEffect} from 'react'
import { ScrollView } from 'react-native-gesture-handler';





export default function Demo({route, navigation}) {

    const [loading, setState] = useState(true)
    const [vector, setVector] = useState([])

    /*useEffect( () => {
        console.log("Entro a useEffect")
        setState(true)
        if (loading){
            console.log("Entro a useEffect amb loading:", loading)
             //readInitialValuesSetState();
 
             //console.log("Pre canviar estat loading: ", vectorDone.array)
             setState(false)
             console.log("post canviar estat",loading)
        }
    }), []*/

    useEffect(() => {
        console.log("Use effect", loading)
        if(loading){
            console.log("Com que estic carregant vaig a fer coses")
            readInitialValuesSetState()
        }
    }), [loading, vector]


   async function readInitialValuesSetState(){
       console.log("entro a readInitialValues")
      try{
          const tempo = await AsyncStorage.getItem('@vectorDone');
          console.log("El vector a Numericament: ", tempo)
          const parsed = JSON.parse(tempo)
          console.log("El vector parsed", parsed)
          setVector(parsed)
          setState(false)
       } catch (e){
           console.log("Error a  ConsellNumericament:readInititalValues")
       }
   }




    
    async function readInitialValuesReturnVector(){
        console.log("entro a readInitialValues")
       try{
           const tempo = await AsyncStorage.getItem('@vectorDone');
           //console.log("El vector a Numericament: ", tempo)
           const parsed = JSON.parse(tempo)
           //console.log("El vector parsed", parsed)
           return parsed;
        } catch (e){
            console.log("Error a  ConsellNumericament:readInititalValues")
        }
    }
    


   const {customData} = route.params;


   async function writeValues(newVector){
       console.log("Vaig a escriure a disc el vector", newVector)
        await AsyncStorage.setItem('@vectorDone', JSON.stringify(newVector))

   }


   async function tempo(id){
       console.log("entro a tempo", id)
       console.log("Vector antic", vector)

        const newVector = [...vector]
        newVector[id] = !newVector[id]
        console.log("Vector antic", vector)
        console.log("Vector nou", newVector)
        setVector(newVector);
        writeValues(newVector);
    }

    const handlePressConsell = (id) => {
        tempo(id)
        console.log("El vector done val¡:", vectorDone.array)
        //navigation.navigate("Consell", {customData, id})
    }

    const handlePressButton = () => {
        tempo(2);
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1, paddingBottom: '12%'}}>
                {loading 
                    ?
                    <View style={{backgroundColor: 'red'}}>
                        <Text>Carregant! </Text>
                    </View>
                    : 
                    <View style={{backgroundColor: 'blue'}}>
                        <Text>El contingut del vector és:</Text>
                        {vector.map( (elem) => {
                                 return (
                                    <View key={uuid.v1()}><Text> {elem ? "True": "False" }</Text></View>
                                    );
                            }) }
                        
                        <TouchableNativeFeedback onPress={handlePressButton}>
                            <View>
                                <Text style={{borderColor: 'black', borderWidth: 1}}
                                    >Canvia valor
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                </View>
                }
                
            </View>

            <Footer/>
        </SafeAreaView>
    )
}







/*

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
                            {vectorDone.loading ? 
                                <Text>Carregant</Text>
                            :

                                <TouchableNativeFeedback onPress={ () =>  handlePressConsell(item.id)}>
                                    <View style= {[styles.consellSquare, vectorDone.array[item.id] 
                                        ? {backgroundColor:colors.greenBackgrouncColor} 
                                        : null]  }>
                                        <Text>
                                            Consell {item.id}
                                        </Text>
                                    </View>
                                </TouchableNativeFeedback>
                            }


                        </View>

                    )}
                    ItemSeparatorComponent={() =><View style={styles.horizontalLine}/>}
                    ListFooterComponent={() => <View style={{marginRight: 50}}/>}>
                    


                </FlatList>
            </View>

            <Footer/>
        </SafeAreaView>

*/








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