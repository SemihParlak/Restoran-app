import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';
import ResultShowScreen from './screens/ResultShowScreen';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerTitle:'Restoran App'}}>
        <Stack.Screen options={{
          headerStyle:{backgroundColor:'white'},
          headerTitle:() =>(
            <Text style={{
              fontSize:15.6,
              fontWeight:'bold',
              left:148,
              color:'#ff4646',
            }}>Anasayfa</Text>
          )
        }} name="Search" component={SearchScreen} />
        <Stack.Screen 
        options={{
          headerStyle:{backgroundColor:'white'},
          headerTitle:() => (
            <Text style={{
              fontSize: 15.6,
              fontWeight:'bold',
              left: 68,
              color:'#ff4646',
            }}>Restoran Detay</Text>
          ),
          headerTintColor:'#ff4646',
        }}
        name="ResultShow" component={ResultShowScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
