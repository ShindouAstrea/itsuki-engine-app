import {View, Alert} from 'react-native';
export default function HistoryView({navigation}){
   
   return(
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
        {
             Alert.alert(
                "Aviso",
                "Función no disponible",
                [
                  { text: "OK", onPress: () => navigation.navigate('Home') }
                ]
              )
        }
    </View>
   )
}