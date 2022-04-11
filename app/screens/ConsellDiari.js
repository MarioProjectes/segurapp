import Constants from 'expo-constants'
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { Dimensions } from 'react-native'; // Dimensions.get(screen | window) -> same on ios, diff in android
import { StatusBar } from 'react-native';
import { useState} from 'react'


import colors from '../config/colors';
import Footer from '../shared/footer';
import ConsellBox from '../shared/ConsellBox'




export default function ConsellDiari({navigation}) {


/*
 <div>
              //{(!cardFlipped) ? <ConsellBox/> : <ScrollBox/> }
            </div>
*/
    const [cardFlipped, flipTheCard] = useState(false);

    const isCardFlipped = () => {
      console.log("La card està flipped:", cardFlipped)
        return cardFlipped;
    }

    const handlePressConsell = () => {
      flipTheCard({cardFlipped: true});
    }


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
