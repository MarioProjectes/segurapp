import Constants from 'expo-constants'
import { StyleSheet, Text, TouchableWithoutFeedback, Image, View, SafeAreaView, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native'; // permet mostrar botons clickats!
import { FlatList } from 'react-native';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { StatusBar } from 'react-native';


import colors from '../config/colors';
import Footer from '../shared/footer';
import Header from '../shared/header';
import ConsellBox from '../shared/ConsellBox'




export default function ConsellDiari({navigation}) {


/*
 <div>
              //{(!cardFlipped) ? <ConsellBox/> : <ScrollBox/> }
            </div>
*/


  return (
    <SafeAreaView style={styles.container}>
          <StatusBar
            hidden= {Dimensions.get('window').width <= 200 ? true :  false}
            animated={true}
            backgroundColor= {colors.statusbarBackgroundColor} // alternatives: '#7d94be' ,'#67799c'
            barStyle="light-content"
            translucent={true}
        />
        
         <ConsellBox navigation={navigation}/> 


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
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ?  Constants.statusBarHeight : 0,
    },

})
