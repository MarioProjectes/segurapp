import Constants from 'expo-constants'
import { StyleSheet, SafeAreaView, Platform, Text, View, FlatList } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import colors from '../config/colors';
import Footer from '../shared/footer';





export default function AccesRapid({route, navigation}) {

   

    return(
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1, paddingBottom: '12%'}}>
                <Text>Pantalla de demo </Text>
                
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