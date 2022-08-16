import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeView from './src/Views/HomeView';
import HistoryView from './src/Views/HistoryView';
import MoreResponseView from './src/Views/MoreResponseView';
import SettingsView from './src/Views/SettingsView';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
<>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#261447',
        },
        headerTintColor: '#ffff',
        
        headerTitleAlign: 'center',
      }}>
        <Stack.Screen name="Home" component={HomeView} options={{
        title: 'Inicio'}}/>
        <Stack.Screen name="Settings" component={SettingsView} />
        <Stack.Screen name="More" component={MoreResponseView} />
        <Stack.Screen name="History" component={HistoryView} />
      </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
