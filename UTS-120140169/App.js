import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screen/Home';
import Task1Screen from './Screen/Task1';
import ProfilScreen from './Screen/Profil';

const Stack = createNativeStackNavigator();

export default function App () {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TaskScreen" component={Task1Screen} options={{ headerShown: false }}/>
        <Stack.Screen name="ProfilScreen" component={ProfilScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}