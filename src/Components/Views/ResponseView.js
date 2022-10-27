import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View,Text, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Clipboard from 'expo-clipboard';

function mensaje(){
    return(
    <View style={{alignItems: 'center'}}>
    {
         Alert.alert(
            "Aviso",
            "Lo sentimos muchos , seguimos trabajando en esta funcionalidad.",
            [
              { text: "Ok"}
            ]
          )
    }
    </View>
    )
}

function ResponseView({navigation,route}){
    const [copiedText, setCopiedText] = React.useState('');

    let {array} = route.params ;
    array = array["resultado"] ;
  
    const name = array[0]["filename"] ;
    const video = array[0]["image"];
    let match = array[0]["similarity"] ;
    match = match.toPrecision(2) ;
    match = match *100 ;
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(name);
        };
    
      const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCopiedText(text);
      }
    return(
        <View style={styles.Container}>
            {
                Alert.alert(
                    "Aviso",
                    "Si el porcentaje es  mayor a 90, es muy probable que tu búsqueda fue exitosa.",
                [
                  { text: "Entendido"}
                ]
                )
            }
        
                <View >
                    <Image source={{uri: video}} style={styles.ImageSearched}/>
                  <TouchableOpacity onPress={copyToClipboard}>
                    <Text> Nombre: {name}</Text>
                  </TouchableOpacity>
                  <Text> Porcentaje de coincidencia: {match}%</Text>
                  <TouchableOpacity onPress={mensaje}>
                    <View style={styles.UploadButton}>
                        <Text style={styles.TextButton}>Ver más resultados</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                
                  
                
        <StatusBar style="auto" />
        </View>
        
    )
}
export default ResponseView;
const styles= StyleSheet.create({
    Container:{
        flex: 1, 
        alignItems: 'center', 
        marginTop:50

    },
    ImageSearched:{
        height:350,
        width:350,
        marginTop:20,
        marginBottom:50,
       alignItems:'center',
       justifyContent: 'center',
       shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    Text:{
        textAlign:'center',
        fontSize:18,
    },
    UploadButton:{
        height:50,
        justifyContent: 'center',
        marginTop:100,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:10,
        backgroundColor:'#E94057'
    },
    TextButton:{
        fontSize:16,
        color:'#ffff',
        textAlign:'center'
    }
    
})