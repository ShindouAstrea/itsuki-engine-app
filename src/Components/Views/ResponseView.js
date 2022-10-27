import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Clipboard from 'expo-clipboard';
function ResponseView({navigation,route}){
    const [copiedText, setCopiedText] = React.useState('');
    const [clip,setclip]=React.useState("");
    let {array} = route.params ;
    let name = array["resultado"][0] ;
    console.log(name);
    let video = array["resultado"][0]["image"];
    console.log(video);
    let listado =[{}];
    // let arrayResultado = JSON.stringify(array);
   

    // arrayResultado = JSON.parse(arrayResultado);
    
    // console.log(arrayResultado);
    // arrayResultado = arrayResultado.slice(55,arrayResultado.length-2);
    // arrayResultado = JSON.parse(arrayResultado) ;
   
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync();
        };
    
      const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCopiedText(text);
      }
    return(
        <View style={styles.Container}>
        
                <View >
                    <Image source={{uri: video}} style={styles.ImageSearched}/>
                    <Text> Nombre:</Text>
                  <TouchableOpacity onPress={copyToClipboard}>
                    <Text>a</Text>
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