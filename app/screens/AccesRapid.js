import Constants from 'expo-constants'
import { StyleSheet, SafeAreaView, Platform, Text, View, FlatList } from 'react-native';
import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler';

import colors from '../config/colors';
import Footer from '../shared/footer';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android
import { text } from '@fortawesome/fontawesome-svg-core';


const itemsMenu = require('../data/ItemsMenu.json')



export default function AccesRapid({route, navigation}) {

    const {customData} = route.params;

    const handlePressItemMenu = (nom) => {
        if(nom==="Numéricament"){
            const category = "all"
            navigation.navigate("ConsellsFiltrats", {customData, category})
        }
        else if (nom==="Per temàtiques"){
            navigation.navigate("Categories", {customData})
        } 
        else if (nom ==="Només incomplerts"){
            const category = "Només incomplerts"
            navigation.navigate("ConsellsFiltrats", {customData, category})
        }
        else if (nom ==="Per temps"){
            const category = "Per temps"
            navigation.navigate("ConsellsFiltrats", {customData, category})
        }
    }
    
   

    return(
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1}}>
                <FlatList style={{flex: 1, paddingHorizontal: '10%' }}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{justifyContent: 'flex-start', alignItems: 'flex-start'}}
                    data={itemsMenu}
                    renderItem={({item}) => (
                        <View style={item.id === 0 ? {paddingTop: 20} : null }>
                        {item.id === 1 
                            ?
                            <View>
                                <Text style={styles.textStyle}>{item.nom}</Text>
                            </View>
                            :
                            <TouchableNativeFeedback onPress={() => handlePressItemMenu(item.nom)}>
                                <View style= {item.id===1 ? styles.textStyle : styles.itemMenu}>
                                      <Text style={styles.textStyle}>{item.nom}</Text>
                                </View>
                            </TouchableNativeFeedback>
                        }
                            
                        </View>
                    )}
                    ItemSeparatorComponent={() =><View style={{marginVertical: 15}}/>}
                    ListFooterComponent={() => <View style={{marginBottom: 50}}/>}>
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
        alignItems: 'center',
    },


    itemMenu: {
        backgroundColor: colors.textBackgroundColor,
        borderColor: colors.borderColor,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 0.8*Dimensions.get('screen').width,
        paddingVertical: 15,
    },

    textStyle: {
        fontSize: 24,
    }


  })