import Constants from 'expo-constants'
import { StyleSheet, SafeAreaView, Platform, Text, View, FlatList } from 'react-native';
import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler';

import colors from '../config/colors';
import Footer from '../shared/footer';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android
import { text } from '@fortawesome/fontawesome-svg-core';


const itemsMenu = require('../data/Categories.json')



export default function Categories({route, navigation}) {

    const {customData} = route.params;

    const handlePressItemCategories = (category) => {
        console.log(category)
        navigation.navigate("ConsellsFiltrats", {customData, category})

    }
    
   

    return(
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1}}>
                <FlatList style={{flex: 1, paddingHorizontal: '10%' }}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{justifyContent: 'flex-start', alignItems: 'flex-start'}}
                    data={itemsMenu}
                    renderItem={({item, index}) => (
                        <View style={index === 0 ? {marginTop: 40} : null }>
                            <TouchableNativeFeedback onPress={() => handlePressItemCategories(item.nom)}>
                                <View style= {styles.itemMenu}>
                                      <Text style={styles.textStyle}>{item.nom}</Text>
                                </View>
                            </TouchableNativeFeedback>
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
        backgroundColor: colors.barBackgroundColor,
        borderRadius: 20,
        alignItems:  'center',
        width: 0.8*Dimensions.get('screen').width,
        paddingVertical: 15,
        
    },

    textStyle: {
        fontSize: 22,
    }


  })