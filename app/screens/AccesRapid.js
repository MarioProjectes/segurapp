import Constants from 'expo-constants'
import { StyleSheet, SafeAreaView, Platform, Text, View, FlatList } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import colors from '../config/colors';
import Footer from '../shared/footer';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android


const itemsMenu = require('../data/ItemsMenu.json')

console.log(itemsMenu)

const handlePressItemMenu = () => {
    console.log("eco!")
}



export default function AccesRapid({route, navigation}) {

   

    return(
        <SafeAreaView style={styles.container}>

            <View style={{flex: 1, paddingBottom: '12%'}}>
                <TouchableNativeFeedback style={{alignItems: 'center', backgroundColor:'red'}}>
                    <View style={styles.primerItem}>
                        <Text style={styles.textStyle}>Consell del dia</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={{marginTop: 30}}>
                    <Text style={styles.textStyle}>Consells ordenats: </Text>
                </View>
                <FlatList style={{backgroundColor: 'red', flex: 1}}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                    data={itemsMenu}
                    renderItem={({item}) => (
                        <View style={item.id === 0 ? {paddingTop: 20} : null }>
                            <TouchableNativeFeedback onPress={ () =>  handlePressItemMenu(item.nom)}>
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
        paddingTop: Platform.OS === 'android' ?  Constants.statusBarHeight : 0,
        alignItems: 'center'
    },

    primerItem: {
        backgroundColor: colors.textBackgroundColor,
        borderColor: colors.borderColor,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 0.8*Dimensions.get('screen').width,
        paddingVertical: 10,
    },

    itemMenu: {
        backgroundColor: colors.textBackgroundColor,
        borderColor: colors.borderColor,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 0.8*Dimensions.get('screen').width,
        paddingVertical: 10,
    },

    textStyle: {
        fontSize: 24,
    }


  })