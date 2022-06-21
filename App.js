import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './app/app.navigator';

/*
  Aquest mètode és el punt d'entrada del codi.
  Crea l'instància del navegador de l'aplicació "AppNavigator".
*/
export default function App() {
  return( 
    <GestureHandlerRootView style={{flex: 1}}> 
            <AppNavigator></AppNavigator> 
    </GestureHandlerRootView>
  );
}