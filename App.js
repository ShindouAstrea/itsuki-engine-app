import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HistoryView from './src/Views/HistoryView';
import SettingsView from './src/Views/SettingsView';
import HomeView from './src/Views/HomeView';
import ResponseView from './src/Views/ResponseView';
import MoreResponseView from './src/Views/MoreResponseView';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <>
    <NavigationContainer>
     
      <Drawer.Navigator initialRouteName="Home" backBehavior="history"
      
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor:'white',
        headerStyle:{
          backgroundColor:'#280C3D',
        },
        drawerStyle: {
          backgroundColor: '#280C3D',
          opacity:0.9
        },
        drawerInactiveTintColor:'white',
        drawerActiveTintColor:'#E94057',
      }
      }>
        
        <Drawer.Screen name="Home" component={HomeView} options={{title:'Inicio'}}/>
        <Drawer.Screen  name="History" component={HistoryView} options={{title:'Historial de Busqueda',unmountOnBlur:true}}/>
        <Drawer.Screen name="Settings" component={SettingsView} options={{title:'Configuración',unmountOnBlur:true}}/>
        <Drawer.Screen name="Response" component={ResponseView} options={{title:'Resultado',drawerLabel: '',drawerItemStyle:{width: 0},unmountOnBlur:true}}/>
        <Drawer.Screen name="MoreResponse" component={MoreResponseView} options={{title:'Más Resultados',drawerLabel: '',drawerItemStyle:{width: 0},unmountOnBlur:true}}/>
      </Drawer.Navigator>
    </NavigationContainer>
    
    </>
    
  );
}
{/* <Image style={{width: 200, height: 200}}source={require('./assets/icon.png')}/> */}