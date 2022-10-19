import {View,Alert,Button} from 'react-native';
export default function SettingsView({navigation}){
    return(
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
        <Button title="Black theme" />
        <Button title='White theme' />
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