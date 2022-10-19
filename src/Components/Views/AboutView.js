import {View,StyleSheet,Image,Text} from 'react-native';
import { Linking} from 'react-native'
export default function AboutView({navigation}){
    const supportedURL = "https://google.com";
    return(
    <View style={{flex: 1}}>
        
            <View style={styles.gif}>
                <Image source={{uri:'https://i.imgur.com/s907MQs.gif'}} style={{width:'100%',height:200}}/>
            </View>
            <Text style={styles.textStyle}>
                Esta aplicacion funciona gracias a
            <Text
                style={styles.hyperlinkStyle}
                onPress={() => {
                Linking.openURL('https://soruly.github.io/trace.moe-api/#/docs');
                }}> trace.moe Api
            </Text>, la cúal se encarga de hacer toda la interpretación de las imágenes subidas desde esta aplicación.
          </Text>
          <Text style={styles.textStyle}>Estaré constantemente mejorando la aplicación , si tienes algún problema no dudes en enviarme un
          <Text
                style={styles.hyperlinkStyle}
                onPress={() => {
                Linking.openURL('mailto:jose.silva.a@mail.pucv.cl?subject=Duda sobre Itsuki engine App');
                }}> correo.
          </Text>
        </Text>
        <Text style={styles.textStyle}>Version de la App 2.1.0</Text>
        </View>
    )
}
const styles =  StyleSheet.create({
    gif:{
       width:'100%',
    },
    textStyle:{
        margin:20,
        fontSize:20
    },
    hyperlinkStyle:{
        fontSize:20,
        color:'#4886E5'
    }
})