import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, Image, View, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native'; // permet mostrar botons clickats!
import { TouchableNativeFeedback } from 'react-native';


export default function App() {
  const handlePress = () => {
  }



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSquareStyle}>
        <View style={styles.titolStyle}>
          <Text style={styles.startTextStyle}> Segurapp</Text>
        </View>
        

        <TouchableNativeFeedback>
          <View style={styles.botoComeça}>
            <Text style={styles.startTextStyle}>Comença</Text>
          </View>
        </TouchableNativeFeedback>    

      </View>
      <View style={styles.bottomSquareStyle}>
        <TouchableNativeFeedback>
          <View style={styles.botoProjecte}> 
            <Text style={styles.startTextStyle}>Sobre el {"\n"} projecte</Text>
          </View>
        
        </TouchableNativeFeedback>        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#C8D7F0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botoComeça: {
    flex: 0,
    position: 'absolute',
    backgroundColor: '#9BB7EC',
    
    width: 245,
    height: 103,
    minWidth: 245,
    aspectRatio:  245 / 103,

    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    
    bottom: '-19%',
  },

  botoProjecte: {
    flex: 0,
    position: 'absolute',
    backgroundColor: '#9BB7EC',
    
    width: 245,
    height: 103,
    minWidth: 245,
    aspectRatio:  245 / 103,

    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    
    top: '-20%',
    

    //boxSizing: border-box,
  },

  titolStyle: {
    position: 'absolute',
    
  },

  startTextStyle: {
    justifyContent: 'center',
    color: 'black',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 36,
  },

  topSquareStyle: {
    position: 'relative',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    
    height: 280,
    minWidth: 271,
    width: 217,
    aspectRatio: 271 / 280,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: '5%',
    marginBottom: 124,

  },

  bottomSquareStyle: {
    position: 'relative',
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  
    height: 153,
    minWidth: 271,
    width: 217,
    aspectRatio: 271 / 153,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: '6.875%',
  },

})
